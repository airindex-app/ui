[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / IPlaces

# Interface: IPlaces

Defined in: [components.ts:470](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L470)

Places component props - Google Places autocomplete input with dropdown

## Example

```tsx
<Places
  name="location"
  placeholder="Search for places..."
  onPlaceSelect={(place) => console.log('Selected place:', place)}
  apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
/>
```

## Extends

- `Omit`\<[`IInput`](IInput.md), `"submitFunction"` \| `"submit"` \| `"reveal"` \| `"copy"` \| `"reset"`\>

## Properties

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:420](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L420)

Custom CSS styles

#### Inherited from

[`IInput`](IInput.md).[`css`](IInput.md#css)

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:422](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L422)

Whether the input is in an error state

#### Inherited from

[`IInput`](IInput.md).[`error`](IInput.md#error)

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:424](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L424)

Error message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`errorMessage`](IInput.md#errormessage)

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:426](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L426)

HTML id attribute for the input

#### Inherited from

[`IInput`](IInput.md).[`id`](IInput.md#id)

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:428](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L428)

Whether to listen for form validation events

#### Inherited from

[`IInput`](IInput.md).[`listen`](IInput.md#listen)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:430](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L430)

Whether to show a loading state

#### Inherited from

[`IInput`](IInput.md).[`loading`](IInput.md#loading)

***

### name

> **name**: `string`

Defined in: [components.ts:432](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L432)

Name attribute for the input (required)

#### Inherited from

[`IInput`](IInput.md).[`name`](IInput.md#name)

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:436](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L436)

Function to call when reset button is clicked

#### Returns

`void`

#### Inherited from

`Omit.resetFunction`

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

#### Inherited from

`Omit.submitValid`

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:446](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L446)

Whether the input is in a success state

#### Inherited from

[`IInput`](IInput.md).[`success`](IInput.md#success)

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:448](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L448)

Success message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`successMessage`](IInput.md#successmessage)

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:450](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L450)

Whether the input is in a warning state

#### Inherited from

[`IInput`](IInput.md).[`warning`](IInput.md#warning)

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:452](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L452)

Warning message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`warningMessage`](IInput.md#warningmessage)

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:454](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L454)

Width of the input field

#### Inherited from

`Omit.width`

***

### apiKey

> **apiKey**: `string`

Defined in: [components.ts:473](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L473)

Google Maps API key for Places API

***

### onPlaceSelect()?

> `optional` **onPlaceSelect**: (`place`) => `void`

Defined in: [components.ts:475](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L475)

Callback when a place is selected from the dropdown

#### Parameters

##### place

###### description

`string`

###### place_id

`string`

###### structured_formatting?

\{ `main_text`: `string`; `secondary_text`: `string`; \}

###### structured_formatting.main_text

`string`

###### structured_formatting.secondary_text

`string`

###### types

`string`[]

#### Returns

`void`

***

### countries?

> `optional` **countries**: `string`[]

Defined in: [components.ts:485](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L485)

Country restrictions (ISO 3166-1 Alpha-2 country codes)

***

### types?

> `optional` **types**: `string`[]

Defined in: [components.ts:487](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L487)

Types of places to search for

***

### dropdownCSS?

> `optional` **dropdownCSS**: `CSS`

Defined in: [components.ts:489](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L489)

Custom CSS styles for the dropdown

***

### dropdownWidth?

> `optional` **dropdownWidth**: `string` \| `number`

Defined in: [components.ts:491](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L491)

Width of the dropdown

***

### dropdownHeight?

> `optional` **dropdownHeight**: `string` \| `number`

Defined in: [components.ts:493](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L493)

Height of the dropdown
