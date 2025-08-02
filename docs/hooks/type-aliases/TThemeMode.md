[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / TThemeMode

# Type Alias: TThemeMode

> **TThemeMode** = `"system"` \| `"dark"` \| `"light"`

Defined in: [hooks.ts:18](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L18)

Theme mode options - system follows OS preference, dark/light are explicit modes

## Example

```tsx
const { theme, setTheme } = useTheme();
setTheme("dark"); // Force dark mode
setTheme("system"); // Follow OS preference
```
