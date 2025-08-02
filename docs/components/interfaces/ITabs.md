[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ITabs

# Interface: ITabs

Defined in: [components.ts:1019](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1019)

Tabs component props - tabbed interface for switching between content panels

## Example

```tsx
<Tabs
  options={[
    { label: "Home", value: "home", icon: <HomeIcon /> },
    { label: "Profile", value: "profile", icon: <UserIcon /> }
  ]}
  initial="home"
  onSelection={(value) => console.log('Selected tab:', value)}
/>
```

## Properties

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:1021](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1021)

Initially selected tab value

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:1023](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1023)

Whether to use small tabs

***

### onSelection()?

> `optional` **onSelection**: (`value`) => `void`

Defined in: [components.ts:1025](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1025)

Callback when tab is selected

#### Parameters

##### value

`string`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [components.ts:1027](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1027)

Array of tab options

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:1033](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1033)

Custom CSS styles
