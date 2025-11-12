[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IAccordion

# Interface: IAccordion

Defined in: [components.ts:1072](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1072)

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
    }
  ]}
  onToggle={(value, isOpen) => console.log(value, isOpen)}
/>
```

## Properties

### allowMultiple?

> `optional` **allowMultiple**: `boolean`

Defined in: [components.ts:1074](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1074)

Whether multiple sections can be open simultaneously

***

### initial?

> `optional` **initial**: `string`

Defined in: [components.ts:1076](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1076)

Initially opened section value

***

### onToggle()?

> `optional` **onToggle**: (`value`, `isOpen`) => `void`

Defined in: [components.ts:1078](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1078)

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

Defined in: [components.ts:1080](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L1080)

Array of accordion sections

#### children

> **children**: `ReactNode`

#### icon?

> `optional` **icon**: `ReactNode`

#### label

> **label**: `string`

#### value

> **value**: `string`
