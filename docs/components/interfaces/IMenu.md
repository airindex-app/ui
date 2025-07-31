[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IMenu

# Interface: IMenu

Defined in: [components.ts:561](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L561)

Menu component props - dropdown menu with nested options

## Example

```tsx
<Menu
  trigger={<Button>Menu</Button>}
  options={[
    { label: "Edit", value: "edit", icon: <EditIcon /> },
    { label: "Delete", value: "delete", icon: <DeleteIcon /> }
  ]}
  onSelection={(value, label) => console.log(value, label)}
/>
```

## Properties

### children?

> `optional` **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:563](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L563)

Additional content to render in the menu - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:565](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L565)

Custom CSS styles

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:567](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L567)

Initially selected option value

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [components.ts:569](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L569)

Callback when menu option is selected

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

Defined in: [components.ts:571](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L571)

Array of menu options

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

Defined in: [components.ts:578](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L578)

Element that triggers the menu

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:580](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L580)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:582](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L582)

Custom CSS styles for the menu wrapper

***

### logo?

> `optional` **logo**: `ReactNode`

Defined in: [components.ts:584](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L584)

Logo to display in the menu header
