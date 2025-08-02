[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / IPlaces

# Interface: IPlaces

Defined in: [components.ts:458](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L458)

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

Defined in: [components.ts:406](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L406)

Custom CSS styles

#### Inherited from

[`IInput`](IInput.md).[`css`](IInput.md#css)

***

### error?

> `optional` **error**: `boolean`

Defined in: [components.ts:408](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L408)

Whether the input is in an error state

#### Inherited from

[`IInput`](IInput.md).[`error`](IInput.md#error)

***

### errorMessage?

> `optional` **errorMessage**: `string`

Defined in: [components.ts:410](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L410)

Error message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`errorMessage`](IInput.md#errormessage)

***

### id?

> `optional` **id**: `string`

Defined in: [components.ts:412](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L412)

HTML id attribute for the input

#### Inherited from

[`IInput`](IInput.md).[`id`](IInput.md#id)

***

### listen?

> `optional` **listen**: `boolean`

Defined in: [components.ts:414](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L414)

Whether to listen for form validation events

#### Inherited from

[`IInput`](IInput.md).[`listen`](IInput.md#listen)

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:416](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L416)

Whether to show a loading state

#### Inherited from

[`IInput`](IInput.md).[`loading`](IInput.md#loading)

***

### mustRef?

> `optional` **mustRef**: `RefObject`\<`null` \| `HTMLInputElement`\>

Defined in: [components.ts:418](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L418)

Ref object to access the input element directly

#### Inherited from

`Omit.mustRef`

***

### name

> **name**: `string`

Defined in: [components.ts:420](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L420)

Name attribute for the input (required)

#### Inherited from

[`IInput`](IInput.md).[`name`](IInput.md#name)

***

### resetFunction()?

> `optional` **resetFunction**: () => `void`

Defined in: [components.ts:424](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L424)

Function to call when reset button is clicked

#### Returns

`void`

#### Inherited from

`Omit.resetFunction`

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

#### Inherited from

`Omit.submitValid`

***

### success?

> `optional` **success**: `boolean`

Defined in: [components.ts:434](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L434)

Whether the input is in a success state

#### Inherited from

[`IInput`](IInput.md).[`success`](IInput.md#success)

***

### successMessage?

> `optional` **successMessage**: `string`

Defined in: [components.ts:436](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L436)

Success message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`successMessage`](IInput.md#successmessage)

***

### warning?

> `optional` **warning**: `boolean`

Defined in: [components.ts:438](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L438)

Whether the input is in a warning state

#### Inherited from

[`IInput`](IInput.md).[`warning`](IInput.md#warning)

***

### warningMessage?

> `optional` **warningMessage**: `string`

Defined in: [components.ts:440](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L440)

Warning message to display below the input

#### Inherited from

[`IInput`](IInput.md).[`warningMessage`](IInput.md#warningmessage)

***

### width?

> `optional` **width**: `string` \| `number`

Defined in: [components.ts:442](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L442)

Width of the input field

#### Inherited from

`Omit.width`

***

### apiKey

> **apiKey**: `string`

Defined in: [components.ts:461](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L461)

Google Maps API key for Places API

***

### onPlaceSelect()?

> `optional` **onPlaceSelect**: (`place`) => `void`

Defined in: [components.ts:463](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L463)

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

Defined in: [components.ts:473](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L473)

Country restrictions (ISO 3166-1 Alpha-2 country codes)

***

### types?

> `optional` **types**: `string`[]

Defined in: [components.ts:475](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L475)

Types of places to search for

***

### dropdownCSS?

> `optional` **dropdownCSS**: `CSS`

Defined in: [components.ts:477](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L477)

Custom CSS styles for the dropdown

***

### dropdownWidth?

> `optional` **dropdownWidth**: `string` \| `number`

Defined in: [components.ts:479](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L479)

Width of the dropdown

***

### dropdownHeight?

> `optional` **dropdownHeight**: `string` \| `number`

Defined in: [components.ts:481](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L481)

Height of the dropdown
