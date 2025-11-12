[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IField

# Interface: IField

Defined in: [components.ts:287](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L287)

Field component props - multi-line textarea input with validation

## Example

```tsx
<Field
  name="description"
  placeholder="Enter description..."
  rows={4}
  error={hasError}
  errorMessage="Description is required"
  submitFunction={handleSubmit}
/>
```

## Extends

- `ComponentPropsWithRef`\<`"textarea"`\>

## Properties

### copy?

> `optional` **copy**: `boolean`

Defined in: [components.ts:289](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L289)

Whether to show a copy button for the field value

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:291](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L291)

Custom CSS styles

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:293](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L293)

Whether the field is in an error state

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:295](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L295)

Error message to display below the field

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:297](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L297)

HTML id attribute for the field

#### Overrides

`ComponentPropsWithRef.id`

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:299](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L299)

Whether to show a loading state

***

### name

> **name**: `string`

Defined in: [components.ts:301](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L301)

Name attribute for the field (required)

#### Overrides

`ComponentPropsWithRef.name`

***

### reset?

> `optional` **reset**: `boolean`

Defined in: [components.ts:303](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L303)

Whether to show a reset button

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:305](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L305)

Function to call when reset button is clicked

#### Returns

`void`

***

### submit?

> `optional` **submit**: `string`

Defined in: [components.ts:307](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L307)

Text for the submit button

***

### submitFunction()?

> `optional` **submitFunction**: (`value`) => `unknown`

Defined in: [components.ts:309](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L309)

Function to call when submit action is triggered

#### Parameters

##### value

`string`

#### Returns

`unknown`

***

### submitValid()?

> `optional` **submitValid**: (`value`) => `boolean`

Defined in: [components.ts:311](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L311)

Function to validate field value before submit

#### Parameters

##### value

`string`

#### Returns

`boolean`

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:313](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L313)

Whether to listen for Enter key to submit (disables Enter for new lines)

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:315](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L315)

Whether the field is in a success state

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:317](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L317)

Success message to display below the field

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:319](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L319)

Whether the field is in a warning state

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:321](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L321)

Warning message to display below the field

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:323](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L323)

Width of the field
