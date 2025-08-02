[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IForm

# Interface: IForm

Defined in: [components.ts:338](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L338)

Form component props - form wrapper with validation and submission handling

## Example

```tsx
<Form
  name="userForm"
  submitFunction={handleFormSubmit}
  submitValid={isFormValid}
  loading={isSubmitting}
>
  <Input name="email" type="email" />
  <Button type="submit">Submit</Button>
</Form>
```

## Extends

- `ComponentPropsWithRef`\<`"form"`\>

## Properties

### children

> **children**: `ReactNode`

Defined in: [components.ts:340](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L340)

Form content and input elements

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:342](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L342)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:344](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L344)

Whether the form is disabled

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:346](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L346)

HTML id attribute for the form

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:348](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L348)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:350](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L350)

Whether the form is in a loading/submitting state

***

### name

> **name**: `string`

Defined in: [components.ts:352](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L352)

Name attribute for the form (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:354](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L354)

Text for the submit button

***

### submitFunction()

> **submitFunction**: () => `unknown`

Defined in: [components.ts:356](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L356)

Function to call when form is submitted

#### Returns

`unknown`

***

### submitValid?

> `optional` **submitValid**: `boolean`

Defined in: [components.ts:358](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L358)

Whether the form is valid and can be submitted
