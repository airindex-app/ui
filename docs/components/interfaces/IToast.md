[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IToast

# Interface: IToast

Defined in: [components.ts:909](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L909)

Toast notification controller props - configuration for the ToastController component

## Example

```tsx
<ToastController
  position="top-right"
  toastOptions={{
    duration: 4000,
    style: { background: "#333", color: "#fff" }
  }}
/>
```

## Indexable

\[`key`: `string`\]: `unknown`

Additional props passed to the underlying Toaster component

## Properties

### position?

> `optional` **position**: `"top-left"` \| `"top-center"` \| `"top-right"` \| `"bottom-left"` \| `"bottom-center"` \| `"bottom-right"`

Defined in: [components.ts:911](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L911)

Position where toasts appear on screen

***

### toastOptions?

> `optional` **toastOptions**: `object`

Defined in: [components.ts:919](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L919)

Configuration options for individual toasts

#### duration?

> `optional` **duration**: `number`

Duration in milliseconds before auto-dismiss

#### style?

> `optional` **style**: `CSSProperties`

Custom styling for toast notifications

#### className?

> `optional` **className**: `string`

Custom class name for toasts
