[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IDrawer

# Interface: IDrawer

Defined in: [components.ts:195](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L195)

Drawer component props - slide-out panel that overlays content

## Example

```tsx
<Drawer
  title="Settings"
  trigger={<Button>Open Drawer</Button>}
  small
>
  <Text>Drawer content here</Text>
</Drawer>
```

## Properties

### children

> **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:197](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L197)

Content to display inside the drawer - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:199](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L199)

Custom CSS styles for the drawer

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:201](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L201)

Whether the drawer trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [components.ts:203](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L203)

Force a specific height for the drawer in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [components.ts:205](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L205)

Whether to render the drawer in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:207](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L207)

Whether to render a smaller version of the drawer

***

### title

> **title**: `string`

Defined in: [components.ts:209](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L209)

Title text displayed in the drawer header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [components.ts:211](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L211)

Element that triggers the drawer to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:213](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L213)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:215](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L215)

Custom CSS styles for the drawer wrapper
