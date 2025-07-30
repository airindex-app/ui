[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TSpacingConfig

# Type Alias: TSpacingConfig

> **TSpacingConfig** = `Record`\<`"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`, `string`\>

Defined in: [stitches.ts:59](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/stitches.ts#L59)

Spacing scale configuration used throughout the design system

## Example

```tsx
const Component = styled('div', {
  padding: '$medium', // 20px
  marginTop: '$large', // 40px
  gap: '$small' // 10px
});
```
