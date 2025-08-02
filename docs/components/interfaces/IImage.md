[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IImage

# Interface: IImage

Defined in: [components.ts:374](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L374)

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

Defined in: [components.ts:376](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L376)

Custom CSS styles

***

### fill?

> `optional` **fill**: `boolean`

Defined in: [components.ts:378](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L378)

Whether the image should fill its container

#### Overrides

`ImageProps.fill`

***

### fillFit?

> `optional` **fillFit**: `ObjectFit`

Defined in: [components.ts:380](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L380)

How the image should fit when using fill

***

### fillHeight?

> `optional` **fillHeight**: `string` \| `number`

Defined in: [components.ts:382](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L382)

Height when using fill mode

***

### fillPosition?

> `optional` **fillPosition**: `ObjectPosition`\<`string` \| `number`\>

Defined in: [components.ts:384](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L384)

Position of the image when using fill
