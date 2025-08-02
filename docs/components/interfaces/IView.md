[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IView

# Interface: IView

Defined in: [components.ts:943](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L943)

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

Defined in: [components.ts:945](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L945)

Whether this is an app-level view

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [components.ts:947](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L947)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:949](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L949)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [components.ts:951](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L951)

Content to display in the view

***

### container?

> `optional` **container**: `boolean`

Defined in: [components.ts:953](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L953)

Whether to use container width constraints

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:955](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L955)

Custom CSS styles

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:957](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L957)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [components.ts:959](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L959)

Whether to invert colors

***

### noPrint?

> `optional` **noPrint**: `boolean`

Defined in: [components.ts:961](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L961)

Whether to hide when printing

***

### top?

> `optional` **top**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:963](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L963)

Top margin/spacing
