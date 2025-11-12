[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IView

# Interface: IView

Defined in: [components.ts:972](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L972)

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

Defined in: [components.ts:974](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L974)

Whether this is an app-level view

***

### as?

> `optional` **as**: keyof IntrinsicElements

Defined in: [components.ts:976](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L976)

HTML element type to render as

***

### bottom?

> `optional` **bottom**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:978](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L978)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [components.ts:980](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L980)

Content to display in the view

***

### container?

> `optional` **container**: `boolean`

Defined in: [components.ts:982](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L982)

Whether to use container width constraints

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:984](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L984)

Custom CSS styles

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:986](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L986)

HTML id attribute

***

### inverted?

> `optional` **inverted**: `boolean`

Defined in: [components.ts:988](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L988)

Whether to invert colors

***

### top?

> `optional` **top**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:990](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L990)

Top margin/spacing
