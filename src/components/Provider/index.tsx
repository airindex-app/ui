import { useEffect, type JSX } from "react";

import packageJson from "../../../package.json";
import { type IProvider } from "../../index";
import { darkTheme } from "../../stitches.config";
import Portal from "./ProviderPortal";
import { ProviderStyled, providerReset } from "./styles";
import { ToastController } from "./ToastController";

const tag = `AirIndex UI v${packageJson.version}`;

export default function Provider({ children, css, dark }: IProvider): JSX.Element {
  const isDarkMode = Boolean(dark);

  providerReset();

  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log(tag);
  }, []);

  return (
    <ProviderStyled className={isDarkMode ? darkTheme : ""} css={css}>
      <ToastController />
      {children}
      <Portal />
    </ProviderStyled>
  );
}
