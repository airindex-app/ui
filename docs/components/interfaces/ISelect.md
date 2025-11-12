[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / ISelect

# Interface: ISelect

Defined in: [components.ts:686](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L686)

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

Defined in: [components.ts:688](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L688)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:690](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L690)

Whether the select is disabled

***

### filter?

> `optional` **filter**: `boolean`

Defined in: [components.ts:692](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L692)

Whether to show a filter/search input

***

### height?

> `optional` **height**: `string` \| `number`

Defined in: [components.ts:694](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L694)

Height of the dropdown

***

### horizontal?

> `optional` **horizontal**: `"left"` \| `"right"` \| `"center"`

Defined in: [components.ts:696](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L696)

Horizontal alignment of the dropdown

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:698](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L698)

Initially selected option value

***

### label?

> `optional` **label**: `string`

Defined in: [components.ts:700](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L700)

Label for the select component

***

### last?

> `optional` **last**: `boolean`

Defined in: [components.ts:702](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L702)

Whether this is the last select in a group (affects styling)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:704](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L704)

Whether to show a loading state

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [components.ts:706](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L706)

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

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:715](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L715)

Element that triggers the dropdown

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:717](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L717)

Custom CSS styles for the trigger

***

### vertical?

> `optional` **vertical**: `"bottom"` \| `"top"`

Defined in: [components.ts:719](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L719)

Vertical positioning of the dropdown

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:721](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L721)

Width of the dropdown

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:723](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L723)

Custom CSS styles for the dropdown wrapper
