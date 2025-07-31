[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IForm

# Interface: IForm

Defined in: [components.ts:336](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L336)

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

Defined in: [components.ts:338](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L338)

Form content and input elements

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:340](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L340)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:342](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L342)

Whether the form is disabled

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:344](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L344)

HTML id attribute for the form

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:346](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L346)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:348](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L348)

Whether the form is in a loading/submitting state

***

### name

> **name**: `string`

Defined in: [components.ts:350](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L350)

Name attribute for the form (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:352](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L352)

Text for the submit button

***

### submitFunction()

> **submitFunction**: () => `unknown`

Defined in: [components.ts:354](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L354)

Function to call when form is submitted

#### Returns

`unknown`

***

### submitValid?

> `optional` **submitValid**: `boolean`

Defined in: [components.ts:356](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L356)

Whether the form is valid and can be submitted
