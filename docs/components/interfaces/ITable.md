[**@airindex-app/ui v0.1.12**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ITable

# Interface: ITable

Defined in: [components.ts:818](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L818)

Table component props - data table with sorting, pagination, and nested rows

## Example

```tsx
<Table
  columns={[
    { key: "name", label: "Name", sortable: true },
    { key: "email", label: "Email", align: "left" }
  ]}
  rows={[
    { id: "1", cells: { name: "John", email: "john@example.com" } },
    { id: "2", cells: { name: "Jane", email: "jane@example.com" } }
  ]}
  pagination
/>
```

## Properties

### columns

> **columns**: `object`[]

Defined in: [components.ts:820](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L820)

Column definitions with keys, labels, and options

#### key

> **key**: `string`

#### label

> **label**: `string`

#### align?

> `optional` **align**: `"left"` \| `"right"` \| `"center"`

#### width?

> `optional` **width**: `string`

#### sortable?

> `optional` **sortable**: `boolean`

***

### rows

> **rows**: `object`[]

Defined in: [components.ts:828](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L828)

Row data with cells mapped to column keys

#### id

> **id**: `string`

#### cells

> **cells**: `Record`\<`string`, `ReactNode`\>

#### subRows?

> `optional` **subRows**: `object`[]

***

### css?

> `optional` **css**: `CSS`

Defined in: [components.ts:837](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L837)

Custom CSS styles

***

### error?

> `optional` **error**: `string`

Defined in: [components.ts:839](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L839)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:841](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L841)

Whether the table is in a loading state

***

### pagination?

> `optional` **pagination**: `boolean`

Defined in: [components.ts:843](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L843)

Whether to show pagination controls

***

### kbd?

> `optional` **kbd**: `boolean`

Defined in: [components.ts:845](https://github.com/airindex-app/ui/blob/44c2ff1163e9f47e185bc913a5043dd88c81b2b7/src/types/components.ts#L845)

Whether to enable keyboard navigation
