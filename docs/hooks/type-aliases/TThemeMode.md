[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TThemeMode

# Type Alias: TThemeMode

> **TThemeMode** = `"system"` \| `"dark"` \| `"light"`

Defined in: [hooks.ts:18](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L18)

Theme mode options - system follows OS preference, dark/light are explicit modes

## Example

```tsx
const { theme, setTheme } = useTheme();
setTheme("dark"); // Force dark mode
setTheme("system"); // Follow OS preference
```
