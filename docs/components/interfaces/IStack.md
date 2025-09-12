[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IStack

# Interface: IStack

Defined in: [components.ts:774](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L774)

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

Defined in: [components.ts:776](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L776)

Text alignment within the stack

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [components.ts:778](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L778)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:780](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L780)

Bottom margin/spacing

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [components.ts:782](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L782)

Content to display in the stack

***

### className?

> `optional` **className**: `string`

Defined in: [components.ts:784](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L784)

CSS class name

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:786](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L786)

Custom CSS styles

***

### direction?

> `optional` **direction**: `"row"` \| `"column"`

Defined in: [components.ts:788](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L788)

Direction of the flex layout

***

### inline?

> `optional` **inline**: `boolean`

Defined in: [components.ts:790](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L790)

Whether to remove text margins and align items

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:792](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L792)

Whether to use minimal styling

***

### onClick()?

> `optional` **onClick**: () => `void`

Defined in: [components.ts:794](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L794)

Click handler for the stack

#### Returns

`void`

***

### top?

> `optional` **top**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:796](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L796)

Top margin/spacing

***

### width?

> `optional` **width**: `number`

Defined in: [components.ts:798](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L798)

Default width percentage

***

### widthResponsive?

> `optional` **widthResponsive**: `object`

Defined in: [components.ts:800](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L800)

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

Defined in: [components.ts:808](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L808)

Main axis alignment

***

### gap?

> `optional` **gap**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:810](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L810)

Gap between items

***

### wrap?

> `optional` **wrap**: `"wrap"` \| `"nowrap"` \| `"wrap-reverse"`

Defined in: [components.ts:812](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L812)

Whether to wrap items

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:814](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L814)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [components.ts:816](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L816)

Whether to use dark theme

***

### alignItems?

> `optional` **alignItems**: `AlignItems`

Defined in: [components.ts:818](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L818)

Cross-axis alignment

***

### alignContent?

> `optional` **alignContent**: `AlignContent`

Defined in: [components.ts:820](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L820)

Content alignment

***

### basis?

> `optional` **basis**: `FlexBasis`\<`string` \| `number`\>

Defined in: [components.ts:822](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L822)

Flex basis

***

### grow?

> `optional` **grow**: `FlexGrow`

Defined in: [components.ts:824](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L824)

Flex grow

***

### shrink?

> `optional` **shrink**: `FlexShrink`

Defined in: [components.ts:826](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L826)

Flex shrink

***

### order?

> `optional` **order**: `Order`

Defined in: [components.ts:828](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L828)

Flex order
