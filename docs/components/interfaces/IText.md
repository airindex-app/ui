[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IText

# Interface: IText

Defined in: [components.ts:858](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L858)

Text component props - versatile text element with styling and link options

## Example

```tsx
<Text as="h2" highlight="blue" href="/link" target="_blank">
  This is a highlighted heading that links somewhere
</Text>
```

## Extends

- `ComponentPropsWithRef`\<`"p"`\>

## Properties

### accent?

> `optional` **accent**: `boolean`

Defined in: [components.ts:860](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L860)

Whether to use accent styling

***

### as?

> `optional` **as**: `"small"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [components.ts:862](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L862)

HTML element type and text size

***

### balanced?

> `optional` **balanced**: `boolean`

Defined in: [components.ts:864](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L864)

Whether to use balanced text wrapping

***

### bottom?

> `optional` **bottom**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:866](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L866)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [components.ts:868](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L868)

Text content

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:870](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L870)

Custom CSS styles

***

### hero?

> `optional` **hero**: `boolean`

Defined in: [components.ts:872](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L872)

Whether to apply hero gradient styling

***

### highlight?

> `optional` **highlight**: `"default"` \| `"yellow"`

Defined in: [components.ts:874](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L874)

Highlight color theme

***

### href?

> `optional` **href**: `string`

Defined in: [components.ts:876](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L876)

URL for link functionality

***

### inline?

> `optional` **inline**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:878](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L878)

Inline spacing around the text

***

### link?

> `optional` **link**: `"default"` \| `"minimal"`

Defined in: [components.ts:880](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L880)

Link styling variant

***

### muted?

> `optional` **muted**: `boolean`

Defined in: [components.ts:882](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L882)

Whether to use muted styling with default opacity

***

### override?

> `optional` **override**: `"small"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"span"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [components.ts:884](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L884)

Override the default size from 'as' prop

***

### rel?

> `optional` **rel**: `string`

Defined in: [components.ts:886](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L886)

Relationship attribute for links

#### Overrides

`ComponentPropsWithRef.rel`

***

### target?

> `optional` **target**: `"_blank"` \| `"_self"`

Defined in: [components.ts:888](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L888)

Link target

***

### top?

> `optional` **top**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:890](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L890)

Top margin/spacing

***

### truncate?

> `optional` **truncate**: `1` \| `2` \| `3` \| `4`

Defined in: [components.ts:892](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L892)

Number of lines to truncate text to (1-4)
