/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { PortConfigMap } from "./port.js";
import { toJSONSchema } from "./type.js";

export function shapeToJSONSchema(shape: PortConfigMap) {
  return {
    type: "object",
    properties: Object.fromEntries(
      [...Object.entries(shape)].map(([name, { description, type }]) => {
        const schema = toJSONSchema(type);
        schema.title = name;
        if (description !== undefined) {
          schema.description = description;
        }
        return [name, schema];
      })
    ),
    required: [...Object.keys(shape)],
  };
}