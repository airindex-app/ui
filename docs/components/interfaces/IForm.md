[**@airindex-app/ui v0.2.0**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IForm

# Interface: IForm

Defined in: [components.ts:355](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L355)

Form component props - form wrapper with validation and submission handling

## Examples

// Boolean validity and arg-less submission (backward compatible)
```tsx
<Form
  name="userForm"
  submit="Submit"
  submitValid={isFormValid}
  submitFunction={() => doSubmit()}
>
  <Input name="email" type="email" />
</Form>
```

// Function validity and data-aware submission
```tsx
<Form
  name="userForm"
  submit="Save"
  submitValid={(data) => Boolean(data.email)}
  submitFunction={(data) => saveEmail(String(data.email))}
>
  <Input name="email" type="email" />
</Form>
```

## Extends

- `ComponentPropsWithRef`\<`"form"`\>

## Properties

### children

> **children**: `ReactNode`

Defined in: [components.ts:357](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L357)

Form content and input elements

#### Overrides

`ComponentPropsWithRef.children`

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:359](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L359)

Custom CSS styles

***

### disabled?

> `optional` **disabled**: `boolean`

Defined in: [components.ts:361](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L361)

Whether the form is disabled

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:363](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L363)

HTML id attribute for the form

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:365](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L365)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:367](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L367)

Whether the form is in a loading/submitting state

***

### name

> **name**: `string`

Defined in: [components.ts:369](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L369)

Name attribute for the form (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:371](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L371)

Text for the submit button

***

### submitFunction

> **submitFunction**: (`data`) => `unknown` \| () => `unknown`

Defined in: [components.ts:377](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L377)

Function to call when form is submitted.
If it declares parameters, it will receive a plain object of form data (name/value pairs).
If it declares no parameters, it's called with no args (backward compatible).

***

### submitValid?

> `optional` **submitValid**: `boolean` \| (`data`) => `boolean`

Defined in: [components.ts:383](https://github.com/airindex-app/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L383)

Form validity. Can be a boolean or a function that receives current form data and returns a boolean.
