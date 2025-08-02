[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IAccordion

# Interface: IAccordion

Defined in: [components.ts:1061](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1061)

Accordion component props - collapsible content sections with optional multiple expansion

## Example

```tsx
<Accordion
  allowMultiple
  options={[
    {
      label: "Section 1",
      value: "section1",
      children: <Text>Content for section 1</Text>,
      icon: <ChevronIcon />
    },
    {
      label: "Section 2",
      value: "section2",
      children: <Text>Content for section 2</Text>,
      large: true
    }
  ]}
  onToggle={(value, isOpen) => console.log(value, isOpen)}
/>
```

## Properties

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Defined in: [components.ts:1063](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1063)

Whether multiple sections can be open simultaneously

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:1065](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1065)

Initially opened section value

***

### onToggle()?

> `optional` **onToggle**: (`value`, `isOpen`) => `void`

Defined in: [components.ts:1067](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1067)

Callback when section is toggled

#### Parameters

##### value

`string`

##### isOpen

`boolean`

#### Returns

`void`

***

### options

> **options**: `object`[]

Defined in: [components.ts:1069](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1069)

Array of accordion sections

#### children

> **children**: `ReactNode`

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`

#### large?

> `optional` **large**: `boolean`

***

### mode?

> `optional` **mode**: `"grid"` \| `"list"`

Defined in: [components.ts:1077](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L1077)

Display mode: 'list' (default) or 'grid'
