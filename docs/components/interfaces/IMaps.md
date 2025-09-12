[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IMaps

# Interface: IMaps

Defined in: [components.ts:517](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L517)

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

Defined in: [components.ts:519](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L519)

Google Maps API key for Maps API

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:521](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L521)

Height of the map

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:523](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L523)

Custom CSS styles

***

### center?

> `optional` **center**: `string` \| \{ `lat`: `number`; `lng`: `number`; \}

Defined in: [components.ts:525](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L525)

Map center - coordinates object or address string. Shows loading if not provided.

***

### zoom?

> `optional` **zoom**: `number`

Defined in: [components.ts:527](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L527)

Map zoom level

***

### mapType?

> `optional` **mapType**: `"roadmap"` \| `"satellite"` \| `"hybrid"` \| `"terrain"`

Defined in: [components.ts:529](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L529)

Map type

***

### ariaLabel?

> `optional` **ariaLabel**: `string`

Defined in: [components.ts:531](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L531)

Optional accessible label for the map region
