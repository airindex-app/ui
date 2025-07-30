[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IButton

# Interface: IButton

Defined in: [components.ts:156](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L156)

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

Defined in: [components.ts:158](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L158)

Whether the button should take full width

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:160](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L160)

Custom CSS styles

***

### external?

> `optional` **external**: `boolean`

Defined in: [components.ts:162](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L162)

Whether the button links to an external URL

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [components.ts:164](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L164)

Icon to display alongside the button text

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [components.ts:166](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L166)

Position of the icon relative to the text

***

### inline?

> `optional` **inline**: `"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:168](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L168)

Inline spacing around the button

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:170](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L170)

Whether to show a loading state with spinner

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:172](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L172)

Whether to render a smaller version of the button

***

### theme?

> `optional` **theme**: `"default"` \| `"solid"` \| `"yellow"` \| `"minimal"`

Defined in: [components.ts:174](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L174)

Visual theme/style variant for the button
