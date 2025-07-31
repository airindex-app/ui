[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TBreakpointsConfig

# Type Alias: TBreakpointsConfig

> **TBreakpointsConfig** = `Record`\<[`TBreakpointName`](TBreakpointName.md), `string`\> & `object`

Defined in: [stitches.ts:42](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L42)

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
