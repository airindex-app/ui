[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IIcon

# Interface: IIcon

Defined in: [components.ts:1018](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1018)

Icon component props - wrapper for Radix icons with consistent styling

## Example

```tsx
<Icon radix={<ArrowRightIcon />} forceColor="blue" forceSize={24} inline="small" />
```

## Extends

- `ComponentPropsWithoutRef`\<`"span"`\>

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:1020](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1020)

Custom CSS styles

***

### forceColor?

> `optional` **forceColor**: `string`

Defined in: [components.ts:1022](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1022)

Force a specific color from theme

***

### forceSize?

> `optional` **forceSize**: `number`

Defined in: [components.ts:1024](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1024)

Force a specific size in pixels

***

### inline?

> `optional` **inline**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:1026](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1026)

Inline spacing around the icon

***

### radix

> **radix**: `ReactElement`

Defined in: [components.ts:1028](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1028)

The icon element to render (required)
