[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / IUseWindowDimensions

# Interface: IUseWindowDimensions

Defined in: [hooks.ts:101](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L101)

Browser window dimensions with automatic updates on resize

## Example

```tsx
const { width, height } = useWindowDimensions();

return (
  <div>
    Viewport: {width} × {height}px
    {width < 768 && <MobileWarning />}
  </div>
);
```

## Properties

### height

> **height**: `number`

Defined in: [hooks.ts:103](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L103)

Window inner height in pixels

***

### width

> **width**: `number`

Defined in: [hooks.ts:105](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/hooks.ts#L105)

Window inner width in pixels
