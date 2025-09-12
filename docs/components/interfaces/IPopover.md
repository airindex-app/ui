[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPopover

# Interface: IPopover

Defined in: [components.ts:629](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L629)

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

### ariaLabel?

> `optional` **ariaLabel**: `string`

Defined in: [components.ts:631](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L631)

Accessible label for the popover content region

***

### children

> **children**: `ReactNode` \| (`close`) => `ReactNode`

Defined in: [components.ts:633](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L633)

Content to display in the popover - can be ReactNode or a function that receives the close function

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:635](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L635)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:637](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L637)

Whether the popover trigger is disabled

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:639](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L639)

Whether to use minimal styling

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:641](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L641)

Whether to render a smaller popover

***

### trigger

> **trigger**: `ReactNode`

Defined in: [components.ts:643](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L643)

Element that triggers the popover

***

### triggerCSS?

> `optional` **triggerCSS**: `CSS`

Defined in: [components.ts:645](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L645)

Custom CSS styles for the trigger

***

### wrapperCSS?

> `optional` **wrapperCSS**: `CSS`

Defined in: [components.ts:647](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L647)

Custom CSS styles for the popover wrapper
