[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPortal

# Interface: IPortal

Defined in: [components.ts:1003](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1003)

Portal component props - renders children in a portal (outside normal DOM tree)

## Example

```tsx
<Portal disabled={false}>
  <Modal>Content rendered in portal</Modal>
</Portal>
```

## Properties

### children?

> `optional` **children**: `ReactNode`

Defined in: [components.ts:1005](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1005)

Content to render in the portal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:1007](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1007)

Whether to disable portal rendering
