# @google-labs/breadboard-schema

## 1.5.0

### Minor Changes

- 7af14cf: Add support for comment nodes
- 511bd9b: Add `tags` to `GraphMetadata`.
- 431fa3d: Add support for website embeds of boards & YouTube videos

### Patch Changes

- 3d7b4a7: Introduce optional `help` metadata for graphs and kits.
- cd73b17: Switch to Nodejs v20.14.0 as the baseline.
- fcef799: Update `help` to have description and URL

## 1.4.1

### Patch Changes

- 416aed2: Introduce `metadata` for `NodeHandler` entries, teaching node types in Kits to describe themselves.

## 1.4.0

### Minor Changes

- f005b3b: Introduce `load` API for kits.
- 9b8e732: replace schema with version generated from TS source
- efeb1a3: Add `NodeMetadata.visual` field.

### Patch Changes

- 4a4a1f6: Place unfinished sidecar events at the bottom of the event list.
- eabd97b: Introduce the concept of log levels in Run Inspector API.

## 1.3.0

### Minor Changes

- ee00249: Introduce `NodeMetadata`.
- 5a65297: Add TypeScript types for Breadboard graphs in schema package

## 1.2.0

### Minor Changes

- e7be365: add json export to schema package
- f6a7f43: Add schemas to serialised boards

## 1.1.0

### Minor Changes

- 3972f17: correct schema ID and update plumbing

## 1.0.0

### Major Changes

- 6e8c08d: initial independent version of schema
