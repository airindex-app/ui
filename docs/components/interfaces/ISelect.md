[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ISelect

# Interface: ISelect

Defined in: [components.ts:657](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L657)

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

Defined in: [components.ts:659](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L659)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:661](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L661)

Whether the select is disabled

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [components.ts:663](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L663)

Whether to show a filter/search input

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:665](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L665)

Height of the dropdown

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [components.ts:667](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L667)

Horizontal alignment of the dropdown

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:669](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L669)

Initially selected option value

***

### label?

> `optional` **label**: `string`

Defined in: [components.ts:671](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L671)

Label for the select component

***

### last?

> `optional` **last**: `boolean`

Defined in: [components.ts:673](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L673)

Whether this is the last select in a group (affects styling)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:675](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L675)

Whether to show a loading state

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [components.ts:677](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L677)

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

Defined in: [components.ts:679](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L679)

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

Defined in: [components.ts:686](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L686)

Element that triggers the dropdown

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:688](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L688)

Custom CSS styles for the trigger

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [components.ts:690](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L690)

Vertical positioning of the dropdown

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:692](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L692)

Width of the dropdown

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:694](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L694)

Custom CSS styles for the dropdown wrapper
