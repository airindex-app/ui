[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IStack

# Interface: IStack

Defined in: [components.ts:745](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L745)

Stack component props - responsive layout container with flexible spacing and alignment

## Example

```tsx
<Stack
  direction="column"
  align="center"
  width={80}
  widthPhone={100}
  top="large"
  bottom="medium"
  onClick={() => console.log('Stack clicked')}
>
  <Text>Item 1</Text>
  <Text>Item 2</Text>
</Stack>
```

## Properties

### align?

> `optional` **align**: `TextAlign`

Defined in: [components.ts:747](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L747)

Text alignment within the stack

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [components.ts:749](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L749)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:751](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L751)

Bottom margin/spacing

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [components.ts:753](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L753)

Content to display in the stack

***

### className?

> `optional` **className**: `string`

Defined in: [components.ts:755](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L755)

CSS class name

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:757](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L757)

Custom CSS styles

***

### direction?

> `optional` **direction**: `"row"` \| `"column"`

Defined in: [components.ts:759](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L759)

Direction of the flex layout

***

### inline?

> `optional` **inline**: `boolean`

Defined in: [components.ts:761](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L761)

Whether to remove text margins and align items

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:763](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L763)

Whether to use minimal styling

***

### onClick()?

> `optional` **onClick**: () => `void`

Defined in: [components.ts:765](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L765)

Click handler for the stack

#### Returns

`void`

***

### top?

> `optional` **top**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:767](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L767)

Top margin/spacing

***

### width?

> `optional` **width**: `number`

Defined in: [components.ts:769](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L769)

Default width percentage

***

### widthResponsive?

> `optional` **widthResponsive**: `object`

Defined in: [components.ts:771](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L771)

Responsive width percentages

#### desktopX?

> `optional` **desktopX**: `number`

#### laptopX?

> `optional` **laptopX**: `number`

#### phone?

> `optional` **phone**: `number`

#### tabletX?

> `optional` **tabletX**: `number`

#### wide?

> `optional` **wide**: `number`

***

### justify?

> `optional` **justify**: `JustifyContent`

Defined in: [components.ts:779](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L779)

Main axis alignment

***

### gap?

> `optional` **gap**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:781](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L781)

Gap between items

***

### wrap?

> `optional` **wrap**: `"wrap"` \| `"nowrap"` \| `"wrap-reverse"`

Defined in: [components.ts:783](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L783)

Whether to wrap items

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:785](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L785)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [components.ts:787](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L787)

Whether to use dark theme

***

### alignItems?

> `optional` **alignItems**: `AlignItems`

Defined in: [components.ts:789](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L789)

Cross-axis alignment

***

### alignContent?

> `optional` **alignContent**: `AlignContent`

Defined in: [components.ts:791](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L791)

Content alignment

***

### basis?

> `optional` **basis**: `FlexBasis`\<`string` \| `number`\>

Defined in: [components.ts:793](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L793)

Flex basis

***

### grow?

> `optional` **grow**: `FlexGrow`

Defined in: [components.ts:795](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L795)

Flex grow

***

### shrink?

> `optional` **shrink**: `FlexShrink`

Defined in: [components.ts:797](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L797)

Flex shrink

***

### order?

> `optional` **order**: `Order`

Defined in: [components.ts:799](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L799)

Flex order
