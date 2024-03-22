/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import type { InputPorts, OutputPorts } from "./instance.js";
import {
  InputPort,
  OutputPort,
  type PortConfig,
  type ValuesOrOutputPorts,
} from "./port.js";

// TODO(aomarks) Support primary ports in boards.
// TODO(aomarks) Support adding descriptions to board ports.

/**
 * Define a new Breadboard board.
 *
 * Example usage:
 *
 * ```ts
 * export const recipeMaker = board(
 *   // Inputs
 *   {recipeName},
 *   // Outputs
 *   {recipe: llmRecipeResult}
 * );
 * ```
 *
 * @param iports The input ports that should be exposed from nodes in the board
 * and under which name. An object that maps from an exposed port name to an
 * input port from a node in the board.
 * @param output The output ports that should be exposed from nodes in the board
 * and under which name. An object that maps from an exposed port name to an
 * output port from a node in the board.
 * @return A {@link BoardDefinition} which can be serialized for execution or
 * distribution, and which can be instantiated for composition into another
 * board.
 */
export function board<
  IPORTS extends BoardInputPorts,
  OPORTS extends BoardOutputPorts,
>(iports: IPORTS, oports: OPORTS): BoardDefinition<IPORTS, OPORTS> {
  const def = new BoardDefinitionImpl(iports, oports);
  return def.instantiate.bind(def);
}

type BoardDefinition<
  IPORTS extends BoardInputPorts,
  OPORTS extends BoardOutputPorts,
> = BoardInstantiateFunction<IPORTS, OPORTS>;

type BoardInstantiateFunction<
  IPORTS extends BoardInputPorts,
  OPORTS extends BoardOutputPorts,
> = <VALUES extends Record<string, unknown>>(
  values: BoardInputValues<IPORTS, VALUES>
) => BoardInstance<IPORTS, OPORTS>;

type BoardInputValues<
  IPORTS extends BoardInputPorts,
  VALUES extends Record<string, unknown>,
> = ValuesOrOutputPorts<ExtractPortConfigs<IPORTS>> & {
  [PORT_NAME in keyof VALUES]: PORT_NAME extends keyof IPORTS
    ? ValuesOrOutputPorts<ExtractPortConfigs<IPORTS>>[PORT_NAME]
    : never;
};

class BoardDefinitionImpl<
  IPORTS extends BoardInputPorts,
  OPORTS extends BoardOutputPorts,
> {
  readonly #inputs: IPORTS;
  readonly #outputs: OPORTS;

  constructor(inputs: IPORTS, outputs: OPORTS) {
    this.#inputs = inputs;
    this.#outputs = outputs;
  }

  instantiate<VALUES extends Record<string, unknown>>(
    values: BoardInputValues<IPORTS, VALUES>
  ): BoardInstance<IPORTS, OPORTS> {
    return new BoardInstance(this.#inputs, this.#outputs, values);
  }
}

class BoardInstance<
  IPORTS extends BoardInputPorts,
  OPORTS extends BoardOutputPorts,
> {
  readonly inputs: InputPorts<ExtractPortConfigs<IPORTS>>;
  readonly outputs: OutputPorts<ExtractPortConfigs<OPORTS>>;
  readonly #values: ValuesOrOutputPorts<ExtractPortConfigs<IPORTS>>;

  constructor(
    inputs: IPORTS,
    outputs: OPORTS,
    values: ValuesOrOutputPorts<ExtractPortConfigs<IPORTS>>
  ) {
    this.inputs = Object.fromEntries(
      Object.entries(extractPortConfigs(inputs)).map(([name, config]) => [
        name,
        new InputPort(config),
      ])
    ) as InputPorts<ExtractPortConfigs<IPORTS>>;
    this.outputs = Object.fromEntries(
      Object.entries(extractPortConfigs(outputs)).map(([name, config]) => [
        name,
        new OutputPort(config),
      ])
    ) as OutputPorts<ExtractPortConfigs<OPORTS>>;
    this.#values = values;
  }
}

function extractPortConfigs<IO extends BoardInputPorts | BoardOutputPorts>(
  portMap: IO
): ExtractPortConfigs<IO> {
  return Object.fromEntries(
    Object.entries(portMap).map(([name, config]) => [
      name,
      { type: config.type },
    ])
  ) as ExtractPortConfigs<IO>;
}

type ExtractPortConfigs<PORTS extends BoardInputPorts | BoardOutputPorts> = {
  [PORT_NAME in keyof PORTS]: PORTS[PORT_NAME] extends
    | InputPort<infer PORT_CONFIG>
    | OutputPort<infer PORT_CONFIG>
    ? { type: PORT_CONFIG["type"] }
    : never;
};

type BoardInputPorts = Record<string, InputPort<PortConfig>>;
type BoardOutputPorts = Record<string, OutputPort<PortConfig>>;