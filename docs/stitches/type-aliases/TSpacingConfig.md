[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TSpacingConfig

# Type Alias: TSpacingConfig

> **TSpacingConfig** = `Record`\<`"none"` \| `"smallest"` \| `"smaller"` \| `"small"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`, `string`\>

Defined in: [stitches.ts:59](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/stitches.ts#L59)

Spacing scale configuration used throughout the design system

## Example

```tsx
const Component = styled('div', {
  padding: '$medium', // 20px
  marginTop: '$large', // 40px
  gap: '$small' // 10px
});
```
