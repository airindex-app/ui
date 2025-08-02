[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseLocalStorage

# Type Alias: TUseLocalStorage\<T\>

> **TUseLocalStorage**\<`T`\> = \[`T`, (`value`) => `void`\]

Defined in: [hooks.ts:156](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L156)

Local storage state management with automatic persistence and sync across tabs

## Type Parameters

### T

`T`

## Example

```tsx
const [count, setCount] = useLocalStorage<number>("counter", 0);

return (
  <button onClick={() => setCount(count + 1)}>
    Count: {count}
  </button>
);
```
