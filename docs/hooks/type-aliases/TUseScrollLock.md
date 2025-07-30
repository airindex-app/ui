[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TUseScrollLock

# Type Alias: TUseScrollLock

> **TUseScrollLock** = \[`boolean`, (`locked`) => `void`\]

Defined in: [hooks.ts:172](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/hooks.ts#L172)

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
