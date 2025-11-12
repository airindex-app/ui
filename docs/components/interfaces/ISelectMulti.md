[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / ISelectMulti

# Interface: ISelectMulti

Defined in: [components.ts:744](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L744)

SelectMulti component props - multi-selection dropdown with limit and reset options

## Example

```tsx
<SelectMulti
  trigger={<Button>Select Multiple</Button>}
  options={[
    { label: "Tag 1", value: "tag1" },
    { label: "Tag 2", value: "tag2" },
    { label: "Tag 3", value: "tag3" }
  ]}
  onSelection={(selections) => console.log(selections)}
  limit={3}
  reset
/>
```

## Extends

- `Omit`\<[`ISelect`](ISelect.md), `"onSelection"` \| `"initial"` \| `"last"`\>

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:688](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L688)

Custom CSS styles

#### Inherited from

[`ISelect`](ISelect.md).[`css`](ISelect.md#css)

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:690](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L690)

Whether the select is disabled

#### Inherited from

[`ISelect`](ISelect.md).[`disabled`](ISelect.md#disabled)

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [components.ts:692](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L692)

Whether to show a filter/search input

#### Inherited from

[`ISelect`](ISelect.md).[`filter`](ISelect.md#filter)

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:694](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L694)

Height of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`height`](ISelect.md#height)

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [components.ts:696](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L696)

Horizontal alignment of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`horizontal`](ISelect.md#horizontal)

***

### label?

> `optional` **label**: `string`

Defined in: [components.ts:700](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L700)

Label for the select component

#### Inherited from

[`ISelect`](ISelect.md).[`label`](ISelect.md#label)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:704](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L704)

Whether to show a loading state

#### Inherited from

[`ISelect`](ISelect.md).[`loading`](ISelect.md#loading)

***

### options

> **options**: `object`[]

Defined in: [components.ts:708](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L708)

Array of selectable options

#### icon?

> `optional` **icon**: `ReactNode`

#### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

#### label

> **label**: `string`

#### value

> **value**: `string`

#### Inherited from

[`ISelect`](ISelect.md).[`options`](ISelect.md#options)

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:715](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L715)

Element that triggers the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`trigger`](ISelect.md#trigger)

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:717](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L717)

Custom CSS styles for the trigger

#### Inherited from

[`ISelect`](ISelect.md).[`triggerCSS`](ISelect.md#triggercss)

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [components.ts:719](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L719)

Vertical positioning of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`vertical`](ISelect.md#vertical)

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:721](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L721)

Width of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`width`](ISelect.md#width)

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:723](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L723)

Custom CSS styles for the dropdown wrapper

#### Inherited from

[`ISelect`](ISelect.md).[`wrapperCSS`](ISelect.md#wrappercss)

***

### initial?

> `optional` **initial**: `object`[]

Defined in: [components.ts:746](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L746)

Initially selected options

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### limit?

> `optional` **limit**: `number`

Defined in: [components.ts:748](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L748)

Maximum number of selections allowed

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [components.ts:750](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L750)

Callback when selections change

#### Parameters

##### value

`object`[]

#### Returns

`void`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:752](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L752)

Whether to show a reset/clear all button
