[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IInput

# Interface: IInput

Defined in: [components.ts:416](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L416)

Input component props - form input field with validation and actions

## Example

```tsx
<Input
  name="email"
  type="email"
  placeholder="Enter your email"
  error={hasError}
  errorMessage="Please enter a valid email"
  submitFunction={handleSubmit}
/>
```

## Extends

- `ComponentPropsWithRef`\<`"input"`\>

## Properties

### copy?

> `optional` **copy**: `boolean`

Defined in: [components.ts:418](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L418)

Whether to show a copy button for the input value

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:420](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L420)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:422](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L422)

Whether the input is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:424](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L424)

Error message to display below the input

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:426](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L426)

HTML id attribute for the input

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:428](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L428)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:430](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L430)

Whether to show a loading state

***

### name

> **name**: `string`

Defined in: [components.ts:432](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L432)

Name attribute for the input (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:434](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L434)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:436](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L436)

Function to call when reset button is clicked

#### Returns

`void`

***

### reveal?

> `optional` **reveal**: `boolean`

Defined in: [components.ts:438](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L438)

Whether to show/hide toggle for password inputs

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:440](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L440)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [components.ts:442](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L442)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [components.ts:444](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L444)

Function to validate input value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:446](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L446)

Whether the input is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:448](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L448)

Success message to display below the input

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:450](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L450)

Whether the input is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:452](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L452)

Warning message to display below the input

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:454](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L454)

Width of the input field

#### Overrides

`ComponentPropsWithRef.width`
