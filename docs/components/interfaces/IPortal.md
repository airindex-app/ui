[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPortal

# Interface: IPortal

Defined in: [components.ts:974](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L974)

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

Defined in: [components.ts:976](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L976)

Content to render in the portal

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:978](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L978)

Whether to disable portal rendering
