[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPopover

# Interface: IPopover

Defined in: [components.ts:602](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L602)

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

Defined in: [components.ts:604](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L604)

Content to display in the popover - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:606](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L606)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:608](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L608)

Whether the popover trigger is disabled

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:610](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L610)

Whether to use minimal styling

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:612](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L612)

Whether to render a smaller popover

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:614](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L614)

Element that triggers the popover

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:616](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L616)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:618](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L618)

Custom CSS styles for the popover wrapper
