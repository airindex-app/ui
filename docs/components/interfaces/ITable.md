[**@airindex-app/ui v0.1.15**](../../README.md)

***

[@airindex-app/ui](../../README.md) / [components](../README.md) / ITable

# Interface: ITable

Defined in: [components.ts:820](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L820)

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

Defined in: [components.ts:822](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L822)

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

Defined in: [components.ts:830](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L830)

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

Defined in: [components.ts:839](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L839)

Custom CSS styles

***

### error?

> `optional` **error**: `string`

Defined in: [components.ts:841](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L841)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:843](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L843)

Whether the table is in a loading state

***

### pagination?

> `optional` **pagination**: `boolean`

Defined in: [components.ts:845](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L845)

Whether to show pagination controls

***

### kbd?

> `optional` **kbd**: `boolean`

Defined in: [components.ts:847](https://github.com/airindex-app/ui/blob/c7ea135614befbd5605b13569e79882284e03edb/src/types/components.ts#L847)

Whether to enable keyboard navigation
