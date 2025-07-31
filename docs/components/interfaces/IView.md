[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IView

# Interface: IView

Defined in: [components.ts:941](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L941)

View component props - main layout container

## Example

```tsx
<View container top="large" bottom="large">
  <Text as="h1">Welcome to our app</Text>
</View>
```

## Properties

### app?

> `optional` **app**: `boolean`

Defined in: [components.ts:943](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L943)

Whether this is an app-level view

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [components.ts:945](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L945)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:947](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L947)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [components.ts:949](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L949)

Content to display in the view

***

### container?

> `optional` **container**: `boolean`

Defined in: [components.ts:951](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L951)

Whether to use container width constraints

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:953](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L953)

Custom CSS styles

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:955](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L955)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [components.ts:957](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L957)

Whether to invert colors

***

### noPrint?

> `optional` **noPrint**: `boolean`

Defined in: [components.ts:959](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L959)

Whether to hide when printing

***

### top?

> `optional` **top**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:961](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L961)

Top margin/spacing
