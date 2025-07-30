[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IMaps

# Interface: IMaps

Defined in: [components.ts:503](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L503)

Maps component props - simple Google Maps display

## Example

```tsx
<Maps
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
  center={{ lat: 40.7128, lng: -74.0060 }}
  height="400px"
  zoom={12}
/>
// Or with address
<Maps
  apiKey={apiKey}
  center="New York, NY"
  height="400px"
/>
// Shows loading when no center provided
<Maps apiKey={apiKey} height="400px" />
```

## Properties

### apiKey

> **apiKey**: `string`

Defined in: [components.ts:505](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L505)

Google Maps API key for Maps API

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:507](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L507)

Height of the map

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:509](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L509)

Custom CSS styles

***

### center?

> `optional` **center**: `string` \| \{ `lat`: `number`; `lng`: `number`; \}

Defined in: [components.ts:511](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L511)

Map center - coordinates object or address string. Shows loading if not provided.

***

### zoom?

> `optional` **zoom**: `number`

Defined in: [components.ts:513](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L513)

Map zoom level

***

### mapType?

> `optional` **mapType**: `"roadmap"` \| `"satellite"` \| `"hybrid"` \| `"terrain"`

Defined in: [components.ts:515](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L515)

Map type
