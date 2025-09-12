[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IText

# Interface: IText

Defined in: [components.ts:889](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L889)

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

Defined in: [components.ts:891](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L891)

Whether to use accent styling

***

### as?

> `optional` **as**: `"span"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"small"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [components.ts:893](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L893)

HTML element type and text size

***

### balanced?

> `optional` **balanced**: `boolean`

Defined in: [components.ts:895](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L895)

Whether to use balanced text wrapping

***

### bottom?

> `optional` **bottom**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:897](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L897)

Bottom margin/spacing

***

### children

> **children**: `ReactNode`

Defined in: [components.ts:899](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L899)

Text content

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:901](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L901)

Custom CSS styles

***

### hero?

> `optional` **hero**: `boolean`

Defined in: [components.ts:903](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L903)

Whether to apply hero gradient styling

***

### highlight?

> `optional` **highlight**: `"default"` \| `"yellow"`

Defined in: [components.ts:905](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L905)

Highlight color theme

***

### href?

> `optional` **href**: `string`

Defined in: [components.ts:907](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L907)

URL for link functionality

***

### inline?

> `optional` **inline**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:909](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L909)

Inline spacing around the text

***

### link?

> `optional` **link**: `"default"` \| `"minimal"`

Defined in: [components.ts:911](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L911)

Link styling variant

***

### muted?

> `optional` **muted**: `boolean`

Defined in: [components.ts:913](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L913)

Whether to use muted styling with default opacity

***

### override?

> `optional` **override**: `"span"` \| `"a"` \| `"h1"` \| `"h2"` \| `"h3"` \| `"h4"` \| `"h5"` \| `"h6"` \| `"label"` \| `"li"` \| `"ol"` \| `"p"` \| `"small"` \| `"strong"` \| `"ul"` \| `"micro"`

Defined in: [components.ts:915](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L915)

Override the default size from 'as' prop

***

### rel?

> `optional` **rel**: `string`

Defined in: [components.ts:917](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L917)

Relationship attribute for links

#### Overrides

`ComponentPropsWithRef.rel`

***

### target?

> `optional` **target**: `"_blank"` \| `"_self"`

Defined in: [components.ts:919](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L919)

Link target

***

### top?

> `optional` **top**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:921](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L921)

Top margin/spacing

***

### truncate?

> `optional` **truncate**: `1` \| `2` \| `3` \| `4`

Defined in: [components.ts:923](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L923)

Number of lines to truncate text to (1-4)
