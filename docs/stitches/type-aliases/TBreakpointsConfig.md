[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [stitches](../README.md) / TBreakpointsConfig

# Type Alias: TBreakpointsConfig

> **TBreakpointsConfig** = `Record`\<[`TBreakpointName`](TBreakpointName.md), `string`\> & `object`

Defined in: [stitches.ts:42](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L42)

Responsive breakpoints configuration for media queries

## Type Declaration

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
