[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseScrollLock

# Type Alias: TUseScrollLock

> **TUseScrollLock** = \[`boolean`, (`locked`) => `void`\]

Defined in: [hooks.ts:172](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L172)

Body scroll lock management with scroll bar width compensation

## Example

```tsx
const [isLocked, setLocked] = useScrollLock(false);

return (
  <button onClick={() => setLocked(!isLocked)}>
    {isLocked ? "Unlock" : "Lock"} scroll
  </button>
);
```
