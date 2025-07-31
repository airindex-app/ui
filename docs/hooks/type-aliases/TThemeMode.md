[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TThemeMode

# Type Alias: TThemeMode

> **TThemeMode** = `"system"` \| `"dark"` \| `"light"`

Defined in: [hooks.ts:18](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L18)

Theme mode options - system follows OS preference, dark/light are explicit modes

## Example

```tsx
const { theme, setTheme } = useTheme();
setTheme("dark"); // Force dark mode
setTheme("system"); // Follow OS preference
```
