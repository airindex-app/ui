[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / IUseBreakpoints

# Interface: IUseBreakpoints

Defined in: [hooks.ts:48](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L48)

Responsive breakpoint detection with boolean helpers for each screen size

## Example

```tsx
const { isPhone, isDesktop, breakpoint } = useBreakpoints();

return (
  <div>
    {isPhone ? <MobileNav /> : <DesktopNav />}
    <p>Current: {breakpoint}</p>
  </div>
);
```

## Properties

### breakpoint

> **breakpoint**: [`TBreakpoint`](../type-aliases/TBreakpoint.md)

Defined in: [hooks.ts:50](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L50)

Current active breakpoint name

***

### isDesktop

> **isDesktop**: `boolean`

Defined in: [hooks.ts:52](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L52)

Whether currently on desktop (desktopX) breakpoint

***

### isLaptop

> **isLaptop**: `boolean`

Defined in: [hooks.ts:54](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L54)

Whether currently on laptop (laptopX) breakpoint

***

### isPhone

> **isPhone**: `boolean`

Defined in: [hooks.ts:56](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L56)

Whether currently on phone breakpoint

***

### isTablet

> **isTablet**: `boolean`

Defined in: [hooks.ts:58](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L58)

Whether currently on tablet (tabletX) breakpoint

***

### isWide

> **isWide**: `boolean`

Defined in: [hooks.ts:60](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/hooks.ts#L60)

Whether currently on wide breakpoint
