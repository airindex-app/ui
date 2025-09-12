[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TSpacingConfig

# Type Alias: TSpacingConfig

> **TSpacingConfig** = `Record`\<`"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`, `string`\>

Defined in: [stitches.ts:59](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L59)

Spacing scale configuration used throughout the design system

## Example

```tsx
const Component = styled('div', {
  padding: '$medium', // 20px
  marginTop: '$large', // 40px
  gap: '$small' // 10px
});
```
