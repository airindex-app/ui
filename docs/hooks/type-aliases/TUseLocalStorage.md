[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseLocalStorage

# Type Alias: TUseLocalStorage\<T\>

> **TUseLocalStorage**\<`T`\> = \[`T`, (`value`) => `void`\]

Defined in: [hooks.ts:156](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L156)

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
