[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IToast

# Interface: IToast

Defined in: [components.ts:911](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L911)

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

Defined in: [components.ts:913](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L913)

Position where toasts appear on screen

***

### toastOptions?

> `optional` **toastOptions**: `object`

Defined in: [components.ts:921](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L921)

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
