[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseScrollLock

# Type Alias: TUseScrollLock

> **TUseScrollLock** = \[`boolean`, (`locked`) => `void`\]

Defined in: [hooks.ts:172](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L172)

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
