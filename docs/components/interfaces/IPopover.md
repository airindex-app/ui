[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPopover

# Interface: IPopover

Defined in: [components.ts:600](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L600)

Popover component props - floating content overlay

## Example

```tsx
<Popover
  trigger={<Button>Show Info</Button>}
  minimal
>
  <Text>Additional information here</Text>
</Popover>
```

## Properties

### children

> **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:602](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L602)

Content to display in the popover - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:604](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L604)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:606](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L606)

Whether the popover trigger is disabled

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:608](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L608)

Whether to use minimal styling

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:610](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L610)

Whether to render a smaller popover

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:612](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L612)

Element that triggers the popover

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:614](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L614)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:616](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L616)

Custom CSS styles for the popover wrapper
