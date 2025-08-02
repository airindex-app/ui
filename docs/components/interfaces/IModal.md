[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IModal

# Interface: IModal

Defined in: [components.ts:228](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L228)

Modal component props - centered overlay dialog

## Example

```tsx
<Modal
  title="Confirm Action"
  trigger={<Button>Open Modal</Button>}
  small
>
  <Text>Are you sure you want to continue?</Text>
</Modal>
```

## Properties

### children

> **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:230](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L230)

Content to display inside the modal - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:232](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L232)

Custom CSS styles for the modal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:234](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L234)

Whether the modal trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [components.ts:236](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L236)

Force a specific height for the modal in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [components.ts:238](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L238)

Whether to render the modal in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:240](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L240)

Whether to render a smaller version of the modal

***

### title

> **title**: `string`

Defined in: [components.ts:242](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L242)

Title text displayed in the modal header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [components.ts:244](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L244)

Element that triggers the modal to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:246](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L246)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:248](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L248)

Custom CSS styles for the modal wrapper
