[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TBreakpoint

# Type Alias: TBreakpoint

> **TBreakpoint** = `"phone"` \| `"tabletX"` \| `"laptopX"` \| `"desktopX"` \| `"wide"` \| `undefined`

Defined in: [hooks.ts:31](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/hooks.ts#L31)

Responsive breakpoint names with undefined for initial/unknown state

## Example

```tsx
const { breakpoint, isPhone } = useBreakpoints();
if (breakpoint === "phone") {
  // Mobile-specific logic
}
```
