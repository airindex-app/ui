[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [stitches](../README.md) / TThemeConfig

# Type Alias: TThemeConfig

> **TThemeConfig** = `object`

Defined in: [stitches.ts:77](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L77)

Theme configuration for colors, typography, and design tokens

## Example

```tsx
const Component = styled('div', {
  backgroundColor: '$surface',
  color: '$text',
  fontSize: '$default'
});
```

## Properties

### colors

> **colors**: `Record`\<`"background"` \| `"text"` \| `"yellow"` \| `"yellowLight"` \| `"border"` \| `"borderLight"` \| `"surface"` \| `"surfaceHover"` \| `"surfaceLight"` \| `"overlay"`, `string`\>

Defined in: [stitches.ts:79](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L79)

Color palette for the design system

***

### fonts

> **fonts**: `object`

Defined in: [stitches.ts:93](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L93)

Font family configuration

#### default

> **default**: `string`

#### heading

> **heading**: `string`

***

### fontSizes

> **fontSizes**: `Record`\<`"micro"` \| `"small"` \| `"default"` \| `"h6"` \| `"h5"` \| `"h4"` \| `"h3"` \| `"h2"` \| `"h1"`, `string`\>

Defined in: [stitches.ts:98](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L98)

Font size scale with responsive clamp values

***

### lineHeights

> **lineHeights**: `object`

Defined in: [stitches.ts:103](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L103)

Line height values

#### default

> **default**: `string`

#### small

> **small**: `string`

***

### opacities

> **opacities**: `object`

Defined in: [stitches.ts:108](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L108)

Opacity values

#### default

> **default**: `number`

#### light

> **light**: `number`

***

### sizes

> **sizes**: [`TSpacingConfig`](TSpacingConfig.md)

Defined in: [stitches.ts:114](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L114)

Size scale (same as spacings)

***

### space

> **space**: [`TSpacingConfig`](TSpacingConfig.md)

Defined in: [stitches.ts:116](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L116)

Space scale (same as spacings)

***

### transitions

> **transitions**: `object`

Defined in: [stitches.ts:118](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L118)

Transition configurations

#### default

> **default**: `string`

***

### zIndices

> **zIndices**: `object`

Defined in: [stitches.ts:122](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/stitches.ts#L122)

Z-index layering

#### menu

> **menu**: `number`

#### modal

> **modal**: `number`

#### popover

> **popover**: `number`

#### select

> **select**: `number`

#### special

> **special**: `number`

#### table

> **table**: `number`

#### toast

> **toast**: `number`
