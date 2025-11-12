[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [hooks](../README.md) / TUseScrollLock

# Type Alias: TUseScrollLock

> **TUseScrollLock** = \[`boolean`, (`locked`) => `void`\]

Defined in: [hooks.ts:172](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L172)

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
