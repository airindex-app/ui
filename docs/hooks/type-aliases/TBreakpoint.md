[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TBreakpoint

# Type Alias: TBreakpoint

> **TBreakpoint** = `"phone"` \| `"tabletX"` \| `"laptopX"` \| `"desktopX"` \| `"wide"` \| `undefined`

Defined in: [hooks.ts:31](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L31)

Responsive breakpoint names with undefined for initial/unknown state

## Example

```tsx
const { breakpoint, isPhone } = useBreakpoints();
if (breakpoint === "phone") {
  // Mobile-specific logic
}
```
