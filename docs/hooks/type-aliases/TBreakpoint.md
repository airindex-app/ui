[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TBreakpoint

# Type Alias: TBreakpoint

> **TBreakpoint** = `"phone"` \| `"tabletX"` \| `"laptopX"` \| `"desktopX"` \| `"wide"` \| `undefined`

Defined in: [hooks.ts:31](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L31)

Responsive breakpoint names with undefined for initial/unknown state

## Example

```tsx
const { breakpoint, isPhone } = useBreakpoints();
if (breakpoint === "phone") {
  // Mobile-specific logic
}
```
