[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [hooks](../README.md) / IUseFloatingUI

# Interface: IUseFloatingUI

Defined in: [hooks.ts:127](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L127)

Floating UI positioning with refs and state management for dropdowns/popovers

## Example

```tsx
const { triggerRef, contentRef, isOpen, handleClick } = useFloatingUI();

return (
  <>
    <button ref={triggerRef} onClick={handleClick}>
      Toggle
    </button>
    {isMounted && (
      <div ref={contentRef}>Floating content</div>
    )}
  </>
);
```

## Properties

### contentRef

> **contentRef**: `object`

Defined in: [hooks.ts:129](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L129)

Ref for the floating content element

#### current

> **current**: `null` \| `HTMLDivElement`

***

### handleClick()

> **handleClick**: () => `void`

Defined in: [hooks.ts:131](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L131)

Toggle function for open/close state

#### Returns

`void`

***

### handleClose()

> **handleClose**: () => `void`

Defined in: [hooks.ts:133](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L133)

Function to close the floating element

#### Returns

`void`

***

### isMounted

> **isMounted**: `boolean`

Defined in: [hooks.ts:135](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L135)

Whether the floating element is mounted in DOM

***

### isOpen

> **isOpen**: `boolean`

Defined in: [hooks.ts:137](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L137)

Whether the floating element is visible

***

### triggerRef

> **triggerRef**: `object`

Defined in: [hooks.ts:139](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/hooks.ts#L139)

Ref for the trigger element

#### current

> **current**: `null` \| `HTMLDivElement`
