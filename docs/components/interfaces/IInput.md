[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IInput

# Interface: IInput

Defined in: [components.ts:402](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L402)

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

Defined in: [components.ts:404](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L404)

Whether to show a copy button for the input value

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:406](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L406)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:408](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L408)

Whether the input is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:410](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L410)

Error message to display below the input

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:412](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L412)

HTML id attribute for the input

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:414](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L414)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:416](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L416)

Whether to show a loading state

***

### mustRef?

> `optional` **mustRef**: `RefObject`\<`null` \| `HTMLInputElement`\>

Defined in: [components.ts:418](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L418)

Ref object to access the input element directly

***

### name

> **name**: `string`

Defined in: [components.ts:420](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L420)

Name attribute for the input (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:422](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L422)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:424](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L424)

Function to call when reset button is clicked

#### Returns

`void`

***

### reveal?

> `optional` **reveal**: `boolean`

Defined in: [components.ts:426](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L426)

Whether to show/hide toggle for password inputs

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:428](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L428)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [components.ts:430](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L430)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [components.ts:432](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L432)

Function to validate input value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:434](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L434)

Whether the input is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:436](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L436)

Success message to display below the input

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:438](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L438)

Whether the input is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:440](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L440)

Warning message to display below the input

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:442](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L442)

Width of the input field

#### Overrides

`ComponentPropsWithRef.width`
