[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IBadge

# Interface: IBadge

Defined in: [components.ts:48](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L48)

Badge component props - displays small status or informational labels

## Example

```tsx
<Badge theme="blue" icon={<CheckIcon />}>
  Active
</Badge>
```

## Extends

- `ComponentPropsWithoutRef`\<`"span"`\>

## Properties

### block?

> `optional` **block**: `boolean`

Defined in: [components.ts:50](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L50)

Whether the badge should take full width

***

### children?

> `optional` **children**: `ReactNode`

Defined in: [components.ts:52](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L52)

Content to display inside the badge

#### Overrides

`ComponentPropsWithoutRef.children`

***

### closable?

> `optional` **closable**: `boolean`

Defined in: [components.ts:54](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L54)

Whether the badge can be closed/dismissed

***

### copy?

> `optional` **copy**: `string` \| `number`

Defined in: [components.ts:56](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L56)

Text or number to display in the badge

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:58](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L58)

Custom CSS styles

***

### icon?

> `optional` **icon**: `ReactNode`

Defined in: [components.ts:60](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L60)

Icon to display alongside the badge content

***

### iconPosition?

> `optional` **iconPosition**: `"left"` \| `"right"`

Defined in: [components.ts:62](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L62)

Position of the icon relative to the content

***

### inline?

> `optional` **inline**: `"small"` \| `"none"` \| `"smallest"` \| `"smaller"` \| `"medium"` \| `"large"` \| `"larger"` \| `"largest"` \| `"auto"`

Defined in: [components.ts:64](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L64)

Inline spacing around the badge

***

### link?

> `optional` **link**: `boolean`

Defined in: [components.ts:66](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L66)

Whether the badge should appear as a clickable link

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:68](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L68)

Whether to show a loading state

***

### new?

> `optional` **new**: `boolean`

Defined in: [components.ts:70](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L70)

Whether to show a small yellow dot indicator in the top right

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLSpanElement`\>

Defined in: [components.ts:72](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L72)

Click handler for interactive badges

#### Overrides

`ComponentPropsWithoutRef.onClick`

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:74](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L74)

Whether to render a smaller version of the badge

***

### theme?

> `optional` **theme**: `"default"` \| `"yellow"` \| `"solid"`

Defined in: [components.ts:76](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L76)

Visual theme/color scheme for the badge

***

### variant?

> `optional` **variant**: `"border"` \| `"theme"`

Defined in: [components.ts:78](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L78)

Badge display variant - border adds left border, theme fills with color
