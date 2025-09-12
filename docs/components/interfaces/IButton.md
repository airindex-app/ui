[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IButton

# Interface: IButton

Defined in: [components.ts:158](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L158)

Button component props - interactive element for user actions

## Example

```tsx
<Button theme="solid" icon={<PlusIcon />} loading={isSubmitting}>
  Add Item
</Button>
```

## Extends

- `ComponentPropsWithoutRef`\<`"button"`\>

## Properties

### block?

> `optional` **block**: `boolean`

Defined in: [components.ts:160](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L160)

Whether the button should take full width

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:162](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L162)

Custom CSS styles

***

### external?

> `optional` **external**: `boolean`

Defined in: [components.ts:164](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L164)

Whether the button links to an external URL

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [components.ts:166](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L166)

Icon to display alongside the button text

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [components.ts:168](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L168)

Position of the icon relative to the text

***

### inline?

> `optional` **inline**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:170](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L170)

Inline spacing around the button

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:172](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L172)

Whether to show a loading state with spinner

***

### new?

> `optional` **new**: `boolean`

Defined in: [components.ts:174](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L174)

Whether to show a small yellow dot indicator in the top right

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:176](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L176)

Whether to render a smaller version of the button

***

### theme?

> `optional` **theme**: `"default"` \| `"yellow"` \| `"solid"` \| `"minimal"`

Defined in: [components.ts:178](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L178)

Visual theme/style variant for the button
