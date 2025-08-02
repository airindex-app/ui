[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPortal

# Interface: IPortal

Defined in: [components.ts:976](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L976)

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

Defined in: [components.ts:978](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L978)

Content to render in the portal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:980](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L980)

Whether to disable portal rendering
