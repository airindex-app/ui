[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TBreakpoint

# Type Alias: TBreakpoint

> **TBreakpoint** = `"phone"` \| `"tabletX"` \| `"laptopX"` \| `"desktopX"` \| `"wide"` \| `undefined`

Defined in: [hooks.ts:31](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L31)

Responsive breakpoint names with undefined for initial/unknown state

## Example

```tsx
const { breakpoint, isPhone } = useBreakpoints();
if (breakpoint === "phone") {
  // Mobile-specific logic
}
```
