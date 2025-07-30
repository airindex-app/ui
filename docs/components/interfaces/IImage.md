[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IImage

# Interface: IImage

Defined in: [components.ts:372](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L372)

Image component props - enhanced Next.js Image with additional styling options

## Example

```tsx
<Image
  src="/hero.jpg"
  alt="Hero image"
  fill
  fillFit="cover"
/>
```

## Extends

- `ImageProps`

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:374](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L374)

Custom CSS styles

***

### fill?

> `optional` **fill**: `boolean`

Defined in: [components.ts:376](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L376)

Whether the image should fill its container

#### Overrides

`ImageProps.fill`

***

### fillFit?

> `optional` **fillFit**: `ObjectFit`

Defined in: [components.ts:378](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L378)

How the image should fit when using fill

***

### fillHeight?

> `optional` **fillHeight**: `string` \| `number`

Defined in: [components.ts:380](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L380)

Height when using fill mode

***

### fillPosition?

> `optional` **fillPosition**: `ObjectPosition`\<`string` \| `number`\>

Defined in: [components.ts:382](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L382)

Position of the image when using fill
