[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ISelect

# Interface: ISelect

Defined in: [components.ts:655](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L655)

Select component props - dropdown selection with filtering and positioning options

## Example

```tsx
<Select
  trigger={<Button>Select Option</Button>}
  options={[
    { label: "Option 1", value: "opt1", icon: <Icon1 /> },
    { label: "Option 2", value: "opt2", icon: <Icon2 /> }
  ]}
  onSelection={(value, label) => console.log(value, label)}
  filter
  horizontal="left"
/>
```

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:657](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L657)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:659](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L659)

Whether the select is disabled

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [components.ts:661](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L661)

Whether to show a filter/search input

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:663](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L663)

Height of the dropdown

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [components.ts:665](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L665)

Horizontal alignment of the dropdown

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:667](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L667)

Initially selected option value

***

### label?

> `optional` **label**: `string`

Defined in: [components.ts:669](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L669)

Label for the select component

***

### last?

> `optional` **last**: `boolean`

Defined in: [components.ts:671](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L671)

Whether this is the last select in a group (affects styling)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:673](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L673)

Whether to show a loading state

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [components.ts:675](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L675)

Callback when an option is selected

#### Parameters

##### value

`string`

##### label

`string`

#### Returns

`void`

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

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:684](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L684)

Element that triggers the dropdown

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:686](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L686)

Custom CSS styles for the trigger

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [components.ts:688](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L688)

Vertical positioning of the dropdown

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:690](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L690)

Width of the dropdown

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:692](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L692)

Custom CSS styles for the dropdown wrapper
