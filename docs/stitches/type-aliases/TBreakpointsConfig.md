[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TBreakpointsConfig

# Type Alias: TBreakpointsConfig

> **TBreakpointsConfig** = `Record`\<[`TBreakpointName`](TBreakpointName.md), `string`\> & `object`

Defined in: [stitches.ts:42](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/stitches.ts#L42)

Responsive breakpoints configuration for media queries

## Type declaration

### special

> **special**: `Record`\<[`TSpecialBreakpointName`](TSpecialBreakpointName.md), `string`\>

## Example

```tsx
// Usage in styled components
const Component = styled('div', {
  fontSize: '16px',
  phone: {
    fontSize: '14px'
  },
  tablet: {
    fontSize: '15px'
  }
});
```
