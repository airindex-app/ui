[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ISelectMulti

# Interface: ISelectMulti

Defined in: [components.ts:713](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L713)

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

Defined in: [components.ts:657](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L657)

Custom CSS styles

#### Inherited from

[`ISelect`](ISelect.md).[`css`](ISelect.md#css)

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:659](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L659)

Whether the select is disabled

#### Inherited from

[`ISelect`](ISelect.md).[`disabled`](ISelect.md#disabled)

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [components.ts:661](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L661)

Whether to show a filter/search input

#### Inherited from

[`ISelect`](ISelect.md).[`filter`](ISelect.md#filter)

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:663](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L663)

Height of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`height`](ISelect.md#height)

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [components.ts:665](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L665)

Horizontal alignment of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`horizontal`](ISelect.md#horizontal)

***

### label?

> `optional` **label**: `string`

Defined in: [components.ts:669](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L669)

Label for the select component

#### Inherited from

[`ISelect`](ISelect.md).[`label`](ISelect.md#label)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:673](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L673)

Whether to show a loading state

#### Inherited from

[`ISelect`](ISelect.md).[`loading`](ISelect.md#loading)

***

### options

> **options**: `object`[]

Defined in: [components.ts:677](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L677)

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

Defined in: [components.ts:684](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L684)

Element that triggers the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`trigger`](ISelect.md#trigger)

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:686](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L686)

Custom CSS styles for the trigger

#### Inherited from

[`ISelect`](ISelect.md).[`triggerCSS`](ISelect.md#triggercss)

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [components.ts:688](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L688)

Vertical positioning of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`vertical`](ISelect.md#vertical)

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:690](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L690)

Width of the dropdown

#### Inherited from

[`ISelect`](ISelect.md).[`width`](ISelect.md#width)

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:692](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L692)

Custom CSS styles for the dropdown wrapper

#### Inherited from

[`ISelect`](ISelect.md).[`wrapperCSS`](ISelect.md#wrappercss)

***

### initial?

> `optional` **initial**: `object`[]

Defined in: [components.ts:715](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L715)

Initially selected options

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### limit?

> `optional` **limit**: `number`

Defined in: [components.ts:717](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L717)

Maximum number of selections allowed

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [components.ts:719](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L719)

Callback when selections change

#### Parameters

##### value

`object`[]

#### Returns

`void`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:721](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L721)

Whether to show a reset/clear all button
