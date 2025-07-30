[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IInput

# Interface: IInput

Defined in: [components.ts:400](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L400)

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

Defined in: [components.ts:402](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L402)

Whether to show a copy button for the input value

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:404](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L404)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:406](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L406)

Whether the input is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:408](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L408)

Error message to display below the input

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:410](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L410)

HTML id attribute for the input

#### Overrides

`ComponentPropsWithRef.id`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:412](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L412)

Whether to listen for form validation events

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:414](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L414)

Whether to show a loading state

***

### mustRef?

> `optional` **mustRef**: `RefObject`\<`null` \| `HTMLInputElement`\>

Defined in: [components.ts:416](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L416)

Ref object to access the input element directly

***

### name

> **name**: `string`

Defined in: [components.ts:418](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L418)

Name attribute for the input (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:420](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L420)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:422](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L422)

Function to call when reset button is clicked

#### Returns

`void`

***

### reveal?

> `optional` **reveal**: `boolean`

Defined in: [components.ts:424](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L424)

Whether to show/hide toggle for password inputs

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:426](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L426)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [components.ts:428](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L428)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [components.ts:430](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L430)

Function to validate input value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:432](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L432)

Whether the input is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:434](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L434)

Success message to display below the input

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:436](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L436)

Whether the input is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:438](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L438)

Warning message to display below the input

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:440](https://github.com/airindex-app/ui/blob/51b723e17db3d2d7342fc2d9bd4a36ea0ad71f2a/src/types/components.ts#L440)

Width of the input field

#### Overrides

`ComponentPropsWithRef.width`
