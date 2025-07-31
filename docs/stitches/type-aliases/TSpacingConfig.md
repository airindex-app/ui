[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TSpacingConfig

# Type Alias: TSpacingConfig

> **TSpacingConfig** = `Record`\<`"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`, `string`\>

Defined in: [stitches.ts:59](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L59)

Spacing scale configuration used throughout the design system

## Example

```tsx
const Component = styled('div', {
  padding: '$medium', // 20px
  marginTop: '$large', // 40px
  gap: '$small' // 10px
});
```
