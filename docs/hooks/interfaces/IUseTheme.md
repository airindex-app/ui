[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / IUseTheme

# Interface: IUseTheme

Defined in: [hooks.ts:77](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L77)

Theme management with dark mode detection and system preference support

## Example

```tsx
const { isDarkTheme, setTheme, theme } = useTheme();

return (
  <button onClick={() => setTheme(isDarkTheme ? "light" : "dark")}>
    {isDarkTheme ? "🌙" : "☀️"} Toggle theme
  </button>
);
```

## Properties

### isDarkTheme

> **isDarkTheme**: `undefined` \| `boolean`

Defined in: [hooks.ts:79](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L79)

Whether dark theme is currently active (undefined during SSR)

***

### setTheme()

> **setTheme**: (`theme`) => `void`

Defined in: [hooks.ts:81](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L81)

Function to change the theme mode

#### Parameters

##### theme

[`TThemeMode`](../type-aliases/TThemeMode.md)

#### Returns

`void`

***

### theme

> **theme**: [`TThemeMode`](../type-aliases/TThemeMode.md)

Defined in: [hooks.ts:83](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L83)

Current theme mode setting
