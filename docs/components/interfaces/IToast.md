[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IToast

# Interface: IToast

Defined in: [components.ts:940](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L940)

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

Defined in: [components.ts:942](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L942)

Position where toasts appear on screen

***

### toastOptions?

> `optional` **toastOptions**: `object`

Defined in: [components.ts:950](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L950)

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
