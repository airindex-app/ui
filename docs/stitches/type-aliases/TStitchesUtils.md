[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [stitches](../README.md) / TStitchesUtils

# Type Alias: TStitchesUtils

> **TStitchesUtils** = `object`

Defined in: [stitches.ts:166](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L166)

Utility functions available in Stitches CSS-in-JS

## Example

```tsx
const Component = styled('div', {
  // Theme utilities
  darkOnly: {
    backgroundColor: '$purple'
  },
  // Responsive utilities
  phone: {
    fontSize: '$small'
  },
  // Visibility utilities
  hidden: 'tablet',
  // Dynamic viewport utilities
  dynamicViewport: { property: 'maxHeight', value: '100', unit: 'vh' }
});
```

## Properties

### darkOnly()

> **darkOnly**: (`value`) => `unknown`

Defined in: [stitches.ts:171](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L171)

Apply styles only in dark theme

#### Parameters

##### value

`unknown`

CSS styles to apply in dark mode

#### Returns

`unknown`

***

### lightOnly()

> **lightOnly**: (`value`) => `unknown`

Defined in: [stitches.ts:177](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L177)

Apply styles only in light theme

#### Parameters

##### value

`unknown`

CSS styles to apply in light mode

#### Returns

`unknown`

***

### wide()

> **wide**: (`value`) => `unknown`

Defined in: [stitches.ts:183](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L183)

Apply styles at wide breakpoint (2201px+)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### desktop()

> **desktop**: (`value`) => `unknown`

Defined in: [stitches.ts:189](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L189)

Apply styles at desktop breakpoint (max 2200px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### laptop()

> **laptop**: (`value`) => `unknown`

Defined in: [stitches.ts:195](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L195)

Apply styles at laptop breakpoint (max 1400px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### tablet()

> **tablet**: (`value`) => `unknown`

Defined in: [stitches.ts:201](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L201)

Apply styles at tablet breakpoint (max 1100px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### phone()

> **phone**: (`value`) => `unknown`

Defined in: [stitches.ts:207](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L207)

Apply styles at phone breakpoint (max 800px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### phoneX()

> **phoneX**: (`value`) => `unknown`

Defined in: [stitches.ts:213](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L213)

Apply styles at phoneX breakpoint (376px-800px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### tabletX()

> **tabletX**: (`value`) => `unknown`

Defined in: [stitches.ts:219](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L219)

Apply styles at tabletX breakpoint (801px-1100px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### laptopX()

> **laptopX**: (`value`) => `unknown`

Defined in: [stitches.ts:225](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L225)

Apply styles at laptopX breakpoint (1101px-1400px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### desktopX()

> **desktopX**: (`value`) => `unknown`

Defined in: [stitches.ts:231](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L231)

Apply styles at desktopX breakpoint (1401px-2200px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### micro()

> **micro**: (`value`) => `unknown`

Defined in: [stitches.ts:237](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L237)

Apply styles at micro breakpoint (max 375px)

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### retina()

> **retina**: (`value`) => `unknown`

Defined in: [stitches.ts:243](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L243)

Apply styles for retina/high-DPI displays

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### print()

> **print**: (`value`) => `unknown`

Defined in: [stitches.ts:249](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L249)

Apply styles for print media

#### Parameters

##### value

`unknown`

CSS styles to apply

#### Returns

`unknown`

***

### hidden()

> **hidden**: (`value`) => `unknown`

Defined in: [stitches.ts:255](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L255)

Hide element at specific breakpoint

#### Parameters

##### value

[`TBreakpointName`](TBreakpointName.md)

Breakpoint name where element should be hidden

#### Returns

`unknown`

***

### hiddenInline()

> **hiddenInline**: (`value`) => `unknown`

Defined in: [stitches.ts:261](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L261)

Hide element inline at specific breakpoint

#### Parameters

##### value

[`TBreakpointName`](TBreakpointName.md)

Breakpoint name where element should be hidden inline

#### Returns

`unknown`

***

### hiddenSpecial()

> **hiddenSpecial**: (`value`) => `unknown`

Defined in: [stitches.ts:267](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L267)

Hide element at special breakpoint (micro, retina, print)

#### Parameters

##### value

Special breakpoint name where element should be hidden

`"micro"` | `"retina"` | `"print"`

#### Returns

`unknown`

***

### visible()

> **visible**: (`value`) => `unknown`

Defined in: [stitches.ts:273](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L273)

Show element only at specific breakpoint

#### Parameters

##### value

[`TBreakpointName`](TBreakpointName.md)

Breakpoint name where element should be visible

#### Returns

`unknown`

***

### visibleInline()

> **visibleInline**: (`value`) => `unknown`

Defined in: [stitches.ts:279](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L279)

Show element inline only at specific breakpoint

#### Parameters

##### value

[`TBreakpointName`](TBreakpointName.md)

Breakpoint name where element should be visible inline

#### Returns

`unknown`

***

### visibleSpecial()

> **visibleSpecial**: (`value`) => `unknown`

Defined in: [stitches.ts:285](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L285)

Show element only at special breakpoint (micro, retina, print)

#### Parameters

##### value

Special breakpoint name where element should be visible

`"micro"` | `"retina"` | `"print"`

#### Returns

`unknown`

***

### dynamicViewport()

> **dynamicViewport**: (`config`) => `unknown`

Defined in: [stitches.ts:291](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/stitches.ts#L291)

Apply dynamic viewport units with fallback support

#### Parameters

##### config

[`TDynamicViewportConfig`](TDynamicViewportConfig.md)

Configuration object

#### Returns

`unknown`
