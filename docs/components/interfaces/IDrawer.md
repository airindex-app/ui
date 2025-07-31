[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IDrawer

# Interface: IDrawer

Defined in: [components.ts:191](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L191)

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

Defined in: [components.ts:193](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L193)

Content to display inside the drawer - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:195](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L195)

Custom CSS styles for the drawer

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:197](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L197)

Whether the drawer trigger is disabled

***

### forceHeight?

> `optional` **forceHeight**: `number`

Defined in: [components.ts:199](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L199)

Force a specific height for the drawer in pixels

***

### portal?

> `optional` **portal**: `boolean`

Defined in: [components.ts:201](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L201)

Whether to render the drawer in a portal

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:203](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L203)

Whether to render a smaller version of the drawer

***

### title

> **title**: `string`

Defined in: [components.ts:205](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L205)

Title text displayed in the drawer header

***

### trigger?

> `optional` **trigger**: `ReactNode`

Defined in: [components.ts:207](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L207)

Element that triggers the drawer to open

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:209](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L209)

Custom CSS styles for the trigger element

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:211](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L211)

Custom CSS styles for the drawer wrapper
