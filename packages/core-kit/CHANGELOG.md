# Changelog

## 0.10.1

### Patch Changes

- 29774aa: Update dependency package versions.

## 0.10.0

### Minor Changes

- c27c176: Actually commit the runJavascript change
- 4e66406: Automatically handle errors in `map`.
- 417323c: Teach Board Server to use Node Proxy Server
- 4db3ab7: Teach `runJavascript` to be kind fo esbuild.
- d9b76bd: Teach fetch to handle blob responses.
- 14853d5: Add Gemini Nano node.
- 3e10f0f: Introduce `DataCapability` and add support for multipart form data in `fetch`.
- c53ca01: Plumb `DataStore` throuh to `NodeHandlerContext`.
- 0e76614: Fetch will now treat any text/\* MIME type as text
- 2ace620: Teach `InspectableGraph.describe` to correctly propagate fixed/flexible bit.
- 26556b6: Teachs runJavaScript to accept a schema
- 5f09b1d: Teach runJavascript to report errors.
- 510e198: Convert map to new build API
- 9491266: Introduce `deflate` node.

### Patch Changes

- 85bbc00: Teach runJavascript to run in Service Workers.
- 5a0afe4: Add inflate node
- 6fdd89e: Add unnest node, for expanding an object value with N properties into a node with N output ports
- c82138d: Allow code nodes to return promises
- 0e54e55: Mark `$board` port as `config` on `invoke` node.
- b75a43e: Change `invoke.$board` input to `object` type.
- 6fdd89e: Mark "response" as the primary output of fetch
- 9b1513a: Make sure `structuredClone` is available when running JS in Node.
- Updated dependencies [5a55b7d]
- Updated dependencies [74ade20]
- Updated dependencies [59dd0f5]
- Updated dependencies [417323c]
- Updated dependencies [b3aa884]
- Updated dependencies [00825d5]
- Updated dependencies [3d7b4a7]
- Updated dependencies [7af14cf]
- Updated dependencies [fea8967]
- Updated dependencies [778f7aa]
- Updated dependencies [808f5e2]
- Updated dependencies [e0fdbc3]
- Updated dependencies [54b03b9]
- Updated dependencies [810d7fd]
- Updated dependencies [14853d5]
- Updated dependencies [8798514]
- Updated dependencies [eb64b9a]
- Updated dependencies [32a48a3]
- Updated dependencies [cd73b17]
- Updated dependencies [81d82fe]
- Updated dependencies [2a7531b]
- Updated dependencies [7c1b4cb]
- Updated dependencies [702cfe1]
- Updated dependencies [bebd96e]
- Updated dependencies [91cb723]
- Updated dependencies [3e10f0f]
- Updated dependencies [c53ca01]
- Updated dependencies [6ada218]
- Updated dependencies [4c681cb]
- Updated dependencies [fb2e584]
- Updated dependencies [9491266]
- Updated dependencies [2ace620]
- Updated dependencies [c5f8e4f]
- Updated dependencies [fcef799]
- Updated dependencies [37418d9]
- Updated dependencies [083f69c]
- Updated dependencies [5b03d96]
- Updated dependencies [f0d8d67]
- Updated dependencies [836389d]
- Updated dependencies [225c7cc]
- Updated dependencies [06c3f57]
  - @google-labs/breadboard@0.21.0
  - @breadboard-ai/build@0.7.0

## 0.9.0

### Minor Changes

- af54870: Convert passthrough to new API. The output schema of passthrough is now taken from the connected inputSchema instead of just using the values. This preserves more information about the ports that are being passed-through.

### Patch Changes

- 8774855: Allow code outputs to be optional
- 1b596d4: Add a `code` function which creates a `runJavascript` node in a type-safe way.
- 4957dc5: Handle the case in secrets describe where there are no input keys yet
- ee85b67: Add a `secret` function which creates and configures a `secrets` node for just
  one secret, and returns the corresponding output port. A simpler way to get
  secrets in the API.
- 1d29493: Export passthrough node definition
- f870bdd: Allow returning errors from code helper function
- Updated dependencies [8097177]
- Updated dependencies [29eda71]
- Updated dependencies [f60cb06]
- Updated dependencies [cec6d54]
- Updated dependencies [87eb8fe]
- Updated dependencies [f97a4d5]
- Updated dependencies [60a18c5]
- Updated dependencies [b0ed6f3]
- Updated dependencies [4957dc5]
- Updated dependencies [a209c51]
- Updated dependencies [3397974]
- Updated dependencies [7368fdd]
- Updated dependencies [c9c0e06]
- Updated dependencies [c1acf24]
- Updated dependencies [3920805]
- Updated dependencies [ab9a4ce]
- Updated dependencies [3b2bb4a]
- Updated dependencies [a35406c]
- Updated dependencies [31cf016]
- Updated dependencies [ab43276]
- Updated dependencies [477e6e6]
- Updated dependencies [cdcbcdb]
- Updated dependencies [791ec2a]
- Updated dependencies [c0293c9]
- Updated dependencies [b6f5644]
- Updated dependencies [43edef6]
  - @google-labs/breadboard@0.20.0
  - @breadboard-ai/build@0.6.0

## 0.8.1

### Patch Changes

- Updated dependencies [63eb779]
  - @google-labs/breadboard@0.19.0
  - @breadboard-ai/build@0.5.1

## 0.8.0

### Minor Changes

- fefd109: The fetch node is now implemented with @breadboard-ai/build. This should not affect any board behavior.
- 34d9c6d: fetch, secrets, and run-javascript are slightly more correct in their descriptions (object vs any JSON value)
- c117d4f: Port runJavascript node to @breadboard-ai/build

### Patch Changes

- 54baba8: Implement `AbortSignal` support.
- 416aed2: Introduce `metadata` for `NodeHandler` entries, teaching node types in Kits to describe themselves.
- f2eda0b: Fix lots of bugs around Tool Worker.
- 776f043: Export fetch, invoke, runJavascript, and secrets node definitions
- Updated dependencies [3f9507d]
- Updated dependencies [cef20ca]
- Updated dependencies [55a9647]
- Updated dependencies [1e86a87]
- Updated dependencies [3f9507d]
- Updated dependencies [1adb24c]
- Updated dependencies [1e86a87]
- Updated dependencies [fbf7a83]
- Updated dependencies [fefd109]
- Updated dependencies [c1dcb0a]
- Updated dependencies [54baba8]
- Updated dependencies [49c3aa1]
- Updated dependencies [cdc23bb]
- Updated dependencies [416aed2]
- Updated dependencies [1adb24c]
- Updated dependencies [a1fcaea]
- Updated dependencies [d9ac358]
- Updated dependencies [c3ed6a7]
- Updated dependencies [f1883d1]
- Updated dependencies [1adb24c]
- Updated dependencies [d8cb0c9]
- Updated dependencies [34d9c6d]
- Updated dependencies [e6e0168]
- Updated dependencies [3d48482]
- Updated dependencies [1adb24c]
- Updated dependencies [f2eda0b]
- Updated dependencies [3f9507d]
- Updated dependencies [626139b]
- Updated dependencies [1adb24c]
- Updated dependencies [3f9507d]
- Updated dependencies [bd44e29]
- Updated dependencies [c4ca6dc]
- Updated dependencies [1adb24c]
- Updated dependencies [cfbcdf2]
- Updated dependencies [1d9cb16]
- Updated dependencies [49da151]
- Updated dependencies [43da00a]
- Updated dependencies [3f9507d]
- Updated dependencies [dfd5ce2]
- Updated dependencies [cfc0f15]
- Updated dependencies [00ccb9d]
- Updated dependencies [08eabf4]
- Updated dependencies [c3587e1]
- Updated dependencies [99fcffe]
- Updated dependencies [1e86a87]
- Updated dependencies [3f9507d]
- Updated dependencies [d9ac358]
  - @breadboard-ai/build@0.5.0
  - @google-labs/breadboard@0.18.0

## 0.7.0

### Minor Changes

- 0831735: Introduce `curry` node.
- d60f38b: Deprecate `path` on `core.invoke`.

### Patch Changes

- 5602f1e: Remove the warning when encountering unknown function format.
- Updated dependencies [c3cb25f]
- Updated dependencies [ae79e4a]
- Updated dependencies [72c5c6b]
- Updated dependencies [dd810dd]
- Updated dependencies [c5ba396]
- Updated dependencies [7bafa40]
- Updated dependencies [2932f4b]
- Updated dependencies [51159c4]
- Updated dependencies [6f9ba52]
  - @google-labs/breadboard@0.17.0

## 0.6.0

### Minor Changes

- 9d19852: Teach `map` and `reduce` to support embedded subgraphs.

### Patch Changes

- Updated dependencies [ad9c233]
- Updated dependencies [65d869b]
- Updated dependencies [417cdf5]
- Updated dependencies [cf0ee4f]
- Updated dependencies [43cbed7]
- Updated dependencies [ff6433c]
- Updated dependencies [5382365]
- Updated dependencies [0e7f106]
- Updated dependencies [9ea6ba0]
- Updated dependencies [ffd2a6c]
  - @google-labs/breadboard@0.16.0

## 0.5.3

### Patch Changes

- 182a546: Do not throw in `invoke` describer when board couldn't be loaded.
- Updated dependencies [76da09d]
- Updated dependencies [938015d]
  - @google-labs/breadboard@0.15.0

## 0.5.2

### Patch Changes

- Updated dependencies [e8d0737]
  - @google-labs/breadboard@0.14.0

## 0.5.1

### Patch Changes

- faf1e12: Teach invoke to be more accepting of uncertainty.
- Updated dependencies [faf1e12]
- Updated dependencies [51a38c0]
- Updated dependencies [d49b80e]
- Updated dependencies [9326bd7]
- Updated dependencies [fbad949]
  - @google-labs/breadboard@0.13.0

## 0.5.0

### Minor Changes

- 866fc36: Refactor `BoardLoader` to be a `GraphLoader` implementation.

### Patch Changes

- f73c637: Teach the `secrets` node to be more resilient with inputs.
- 99446b8: Various quality improvements to schemas and Graph Inspector API.
- 49c25aa: Add describers for a few nodes.
- ad5c1be: Introduce Tool Worker node in Agent Kit.
- bac9bb1: Bring loader machinery closer to cacheable load state.
- Updated dependencies [99446b8]
- Updated dependencies [866fc36]
- Updated dependencies [a8bab08]
- Updated dependencies [decfa29]
- Updated dependencies [f005b3b]
- Updated dependencies [dcfdc37]
- Updated dependencies [d971aad]
- Updated dependencies [048e8ec]
- Updated dependencies [dc35601]
- Updated dependencies [9cda2ff]
- Updated dependencies [60bd63c]
- Updated dependencies [764ccda]
- Updated dependencies [04d5420]
- Updated dependencies [56b90a4]
- Updated dependencies [1b48826]
- Updated dependencies [e648f64]
- Updated dependencies [ad5c1be]
- Updated dependencies [4a4a1f6]
- Updated dependencies [bac9bb1]
- Updated dependencies [3e8cfcf]
- Updated dependencies [986af39]
- Updated dependencies [3c497b0]
- Updated dependencies [eabd97b]
- Updated dependencies [2008f69]
- Updated dependencies [c0f785a]
- Updated dependencies [a8fc3f3]
- Updated dependencies [32cfbaf]
- Updated dependencies [8dc4e00]
- Updated dependencies [6438930]
- Updated dependencies [dd2cce6]
- Updated dependencies [cac4f4f]
- Updated dependencies [b1fc53b]
- Updated dependencies [ef05634]
- Updated dependencies [c208cfc]
  - @google-labs/breadboard@0.12.0

## 0.4.0

### Minor Changes

- 26367fe: Fixing typo in describe that would mean passthrough and reflect would not tell the system of their inputs

### Patch Changes

- Updated dependencies [07e66bf]
  - @google-labs/breadboard@0.11.2

## 0.3.1

### Patch Changes

- 3ed66b9: Add a resolve node to core-kit which resolves relative URLs to absolute URLs.
- Updated dependencies [05136f8]
- Updated dependencies [ef305d1]
- Updated dependencies [aea9178]
- Updated dependencies [20a0e5c]
  - @google-labs/breadboard@0.11.1

## 0.3.0

### Minor Changes

- 4c5b853: Implement output bubbling.
- 3f3f090: Teach `jsonata` and `invoke` nodes to better describe themselves.

### Patch Changes

- a9daeda: Introduce Repeater node in Agent Kit.
- 4920d90: Taught `core.invoke` to describe its own subgraphs.
- Updated dependencies [c19513e]
- Updated dependencies [2237a4c]
- Updated dependencies [bd68ebd]
- Updated dependencies [9a76a87]
- Updated dependencies [ea652f3]
- Updated dependencies [56954c1]
- Updated dependencies [0085ee2]
- Updated dependencies [0ef9ec5]
- Updated dependencies [ee00249]
- Updated dependencies [c13513f]
- Updated dependencies [56ccae5]
- Updated dependencies [4920d90]
- Updated dependencies [10a8129]
- Updated dependencies [c804ccc]
- Updated dependencies [5a65297]
- Updated dependencies [53406ad]
- Updated dependencies [4c5b853]
- Updated dependencies [3f3f090]
- Updated dependencies [d7a7903]
- Updated dependencies [4401a98]
- Updated dependencies [f6e9b2c]
  - @google-labs/breadboard@0.11.0

## 0.2.2

### Patch Changes

- 3e56a4f: Added a few TSDoc comments to kits for Intellisense.
- Updated dependencies [fb1c768]
  - @google-labs/breadboard@0.10.1

## 0.2.1

### Patch Changes

- Updated dependencies [9bcd607]
- Updated dependencies [f6a7f43]
  - @google-labs/breadboard@0.10.0

## 0.2.0

### Minor Changes

- c89b67a: Introduce the `reduce` node.

### Patch Changes

- 931a95b: Introduce richer error reporting to the harness.
- Updated dependencies [8eccdad]
- Updated dependencies [6e8c08d]
- Updated dependencies [780909c]
- Updated dependencies [bba68fd]
- Updated dependencies [b557794]
- Updated dependencies [a9206fc]
- Updated dependencies [931a95b]
  - @google-labs/breadboard@0.9.0

## 0.1.3

### Patch Changes

- Updated dependencies [af00e58]
  - @google-labs/breadboard@0.8.0

## [0.1.2] - 2024-01-14

- Update build. Oops.

## [0.1.1] - 2024-01-14

- Update dependencies.

## [0.1.0] - 2023-12-06

- Bump dependencies.
- The `append` node now supports flattening and properly appends to arrays.

## [0.0.1] - 2023-11-08

- First release. Contains the following nodes:
  - Moved from Breadboard: `passthrough`, `reflect`, `slot`, `include`, `import`, and `invoke`
  - Graduated from Node Nursery: `batch`, `map`
