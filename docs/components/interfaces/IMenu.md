[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IMenu

# Interface: IMenu

Defined in: [components.ts:577](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L577)

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

### ariaLabel?

> `optional` **ariaLabel**: `string`

Defined in: [components.ts:579](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L579)

Accessible label for the menu container

***

### children?

> `optional` **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:581](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L581)

Additional content to render in the menu - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:583](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L583)

Custom CSS styles

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:585](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L585)

Initially selected option value

***

### onSelection()?

> `optional` **onSelection**: (`value`, `label`) => `void`

Defined in: [components.ts:587](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L587)

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

Defined in: [components.ts:589](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L589)

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

Defined in: [components.ts:596](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L596)

Element that triggers the menu

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:598](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L598)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:600](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L600)

Custom CSS styles for the menu wrapper

***

### logo?

> `optional` **logo**: `ReactNode`

Defined in: [components.ts:602](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L602)

Logo to display in the menu header
