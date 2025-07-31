[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseLocalStorage

# Type Alias: TUseLocalStorage\<T\>

> **TUseLocalStorage**\<`T`\> = \[`T`, (`value`) => `void`\]

Defined in: [hooks.ts:156](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L156)

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
