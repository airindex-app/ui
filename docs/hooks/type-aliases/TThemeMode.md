[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TThemeMode

# Type Alias: TThemeMode

> **TThemeMode** = `"system"` \| `"dark"` \| `"light"`

Defined in: [hooks.ts:18](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/hooks.ts#L18)

Theme mode options - system follows OS preference, dark/light are explicit modes

## Example

```tsx
const { theme, setTheme } = useTheme();
setTheme("dark"); // Force dark mode
setTheme("system"); // Follow OS preference
```
