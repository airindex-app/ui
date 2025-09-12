[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IBox

# Interface: IBox

Defined in: [components.ts:97](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L97)

Box component props - versatile container with optional image, header, and footer

## Example

```tsx
<Box
  theme="blue"
  header={<Text as="h3">Card Title</Text>}
  image="/hero.jpg"
  expandable
  onClick={() => console.log('Box clicked')}
>
  Card content goes here
</Box>
```

## Properties

### children

> **children**: `ReactNode`

Defined in: [components.ts:99](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L99)

Content to display inside the box

***

### closable?

> `optional` **closable**: `boolean`

Defined in: [components.ts:101](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L101)

Whether the box can be closed/dismissed

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:103](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L103)

Custom CSS styles

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:105](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L105)

HTML id attribute for the box

***

### cta?

> `optional` **cta**: `string`

Defined in: [components.ts:107](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L107)

Call-to-action text for the box

***

### hover?

> `optional` **hover**: `boolean`

Defined in: [components.ts:109](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L109)

Whether to enable hover interaction styles explicitly

***

### expandable?

> `optional` **expandable**: `boolean`

Defined in: [components.ts:111](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L111)

Whether the box can be expanded/collapsed

***

### expandableHeight?

> `optional` **expandableHeight**: `number`

Defined in: [components.ts:113](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L113)

Height when expanded in pixels

***

### footer?

> `optional` **footer**: `ReactNode`

Defined in: [components.ts:115](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L115)

Footer content to display at the bottom

***

### header?

> `optional` **header**: `ReactNode`

Defined in: [components.ts:117](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L117)

Header content to display at the top

***

### image?

> `optional` **image**: `ReactNode`

Defined in: [components.ts:119](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L119)

Image to display in the box. Pass a URL string or a custom React element

***

### imageCTA?

> `optional` **imageCTA**: `string`

Defined in: [components.ts:121](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L121)

Call-to-action text for the image

***

### imageFit?

> `optional` **imageFit**: `ObjectFit`

Defined in: [components.ts:123](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L123)

How the image should fit within its container

***

### imageHeight?

> `optional` **imageHeight**: `string`

Defined in: [components.ts:125](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L125)

Height of the image

***

### imagePosition?

> `optional` **imagePosition**: `ObjectPosition`\<`string` \| `number`\>

Defined in: [components.ts:127](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L127)

Position of the image within its container

***

### imageTarget?

> `optional` **imageTarget**: `"_blank"` \| `"_self"`

Defined in: [components.ts:129](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L129)

Target for image link

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:131](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L131)

Whether to show a loading state

***

### minimal?

> `optional` **minimal**: `boolean`

Defined in: [components.ts:133](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L133)

Whether to render with minimal styling

***

### onClick?

> `optional` **onClick**: `MouseEventHandler`\<`HTMLDivElement`\>

Defined in: [components.ts:135](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L135)

Click handler for the box

***

### role?

> `optional` **role**: `string`

Defined in: [components.ts:137](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L137)

ARIA role

***

### tabIndex?

> `optional` **tabIndex**: `number`

Defined in: [components.ts:139](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L139)

Keyboard tab order

***

### small?

> `optional` **small**: `boolean`

Defined in: [components.ts:141](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L141)

Whether to render a smaller version

***

### theme?

> `optional` **theme**: `"default"` \| `"yellow"` \| `"fill"` \| `"solid"` \| `"minimal"`

Defined in: [components.ts:143](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L143)

Visual theme/color scheme for the box

***

### border?

> `optional` **border**: `"default"` \| `"yellow"` \| `"solid"`

Defined in: [components.ts:145](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L145)

Add colored left border
