[**@hoststack/ui v0.2.0**](../../README.md)

***

[@hoststack/ui](../../README.md) / [components](../README.md) / ITable

# Interface: ITable

Defined in: [components.ts:849](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L849)

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

Defined in: [components.ts:851](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L851)

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

Defined in: [components.ts:859](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L859)

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

Defined in: [components.ts:868](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L868)

Custom CSS styles

***

### error?

> `optional` **error**: `string`

Defined in: [components.ts:870](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L870)

Error message to display

***

### loading?

> `optional` **loading**: `boolean`

Defined in: [components.ts:872](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L872)

Whether the table is in a loading state

***

### pagination?

> `optional` **pagination**: `boolean`

Defined in: [components.ts:874](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L874)

Whether to show pagination controls

***

### kbd?

> `optional` **kbd**: `boolean`

Defined in: [components.ts:876](https://github.com/hoststack/ui/blob/d4937753d6b61e212bc6c6c85f1f66df7da59eda/src/types/components.ts#L876)

Whether to enable keyboard navigation
