[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IModal

# Interface: IModal

Defined in: [components.ts:232](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L232)

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

Defined in: [components.ts:234](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L234)

Content to display inside the modal - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:236](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L236)

Custom CSS styles for the modal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:238](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L238)

Whether the modal trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [components.ts:240](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L240)

Force a specific height for the modal in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [components.ts:242](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L242)

Whether to render the modal in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:244](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L244)

Whether to render a smaller version of the modal

***

### title

> **title**: `string`

Defined in: [components.ts:246](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L246)

Title text displayed in the modal header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [components.ts:248](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L248)

Element that triggers the modal to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:250](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L250)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:252](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L252)

Custom CSS styles for the modal wrapper
