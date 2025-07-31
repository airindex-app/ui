[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IIcon

# Interface: IIcon

Defined in: [components.ts:989](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L989)

Icon component props - wrapper for Radix icons with consistent styling

## Example

```tsx
<Icon radix={<ArrowRightIcon />} forceColor="blue" forceSize={24} inline="small" />
```

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:991](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L991)

Custom CSS styles

***

### forceColor?

> `optional` **forceColor**: `string`

Defined in: [components.ts:993](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L993)

Force a specific color from theme

***

### forceSize?

> `optional` **forceSize**: `number`

Defined in: [components.ts:995](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L995)

Force a specific size in pixels

***

### inline?

> `optional` **inline**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:997](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L997)

Inline spacing around the icon

***

### radix

> **radix**: `ReactElement`

Defined in: [components.ts:999](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L999)

The icon element to render (required)
