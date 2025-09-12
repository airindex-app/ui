import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useRef, useState, type JSX } from "react";

import { Loading, type IMaps } from "../../index";
import { MapsStyled } from "./styles";

export default function Maps({
  apiKey,
  center,
  css,
  height = "400px",
  mapType = "roadmap",
  zoom = 12,
}: IMaps): JSX.Element {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<unknown>(null);
  const [resolvedCenter, setResolvedCenter] = useState<{ lat: number; lng: number } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [geoError, setGeoError] = useState<string | null>(null);

  useEffect(() => {
    if (!apiKey || !center) {
      setResolvedCenter(null);
      setIsLoading(false);

      return;
    }

    let isActive = true;
    const resolveCenter = async (): Promise<void> => {
      setIsLoading(true);
      setGeoError(null);

      if (typeof center === "object" && center.lat && center.lng) {
        if (!isActive) return;
        setResolvedCenter((prev) => {
          if (prev?.lat === center.lat && prev?.lng === center.lng) return prev;

          return center;
        });
        setIsLoading(false);

        return;
      }

      if (typeof center === "string") {
        const loader = new Loader({
          apiKey,
          libraries: ["places", "maps", "geocoding"],
          version: "weekly",
        });

        const google = await loader.load();

        if (!isActive) return;
        const geocoder = new google.maps.Geocoder();

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        geocoder.geocode({ address: center }, (results: any, status: string) => {
          if (!isActive) return;
          if (status === "OK" && results?.[0]?.geometry?.location) {
            const { location } = results[0].geometry;
            const newCenter = {
              lat: location.lat(),
              lng: location.lng(),
            };

            setResolvedCenter((prev) => {
              if (prev?.lat === newCenter.lat && prev?.lng === newCenter.lng) return prev;

              return newCenter;
            });
          } else {
            setResolvedCenter(null);
            setGeoError("Unable to locate that address.");
          }
          setIsLoading(false);
        });
      }
    };

    resolveCenter();

    return (): void => {
      isActive = false;
    };
  }, [apiKey, center]);

  useEffect(() => {
    if (!apiKey || !mapRef.current || !resolvedCenter) return;

    let isActive = true;
    const initMap = async (): Promise<void> => {
      const loader = new Loader({
        apiKey,
        libraries: ["places", "maps", "geocoding"],
        version: "weekly",
      });

      const google = await loader.load();

      if (!isActive) return;

      if (mapRef.current) {
        mapInstanceRef.current = new google.maps.Map(mapRef.current, {
          center: resolvedCenter,
          mapTypeId: mapType,
          zoom,
        });
      }
    };

    initMap();

    return (): void => {
      isActive = false;
    };
  }, [apiKey, resolvedCenter, zoom, mapType]);

  if (!center || isLoading || !resolvedCenter) {
    return (
      <MapsStyled
        aria-live="polite"
        css={{
          alignItems: "center",
          display: "flex",
          height: typeof height === "number" ? `${height}px` : height,
          justifyContent: "center",
          ...css,
        }}
        role="status">
        {geoError ? geoError : <Loading />}
      </MapsStyled>
    );
  }

  return (
    <MapsStyled
      ref={mapRef}
      aria-busy={false}
      css={{
        height: typeof height === "number" ? `${height}px` : height,
        ...css,
      }}
      role="region"
    />
  );
}

Maps.displayName = "Maps";
