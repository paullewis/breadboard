/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  GraphStartProbeData,
  NodeEndResponse,
  NodeStartResponse,
  Schema,
  InspectableEdgeType,
  InspectableEdge,
} from "@google-labs/breadboard";
import { HarnessRunResult } from "@google-labs/breadboard/harness";

export const enum HistoryEventType {
  DONE = "done",
  ERROR = "error",
  INPUT = "input",
  LOAD = "load",
  OUTPUT = "output",
  NODESTART = "nodestart",
  NODEEND = "nodeend",
  SECRETS = "secrets",
  GRAPHSTART = "graphstart",
  GRAPHEND = "graphend",
}

export type Board = {
  title: string;
  url: string;
  version: string;
};

export type AnyHistoryEvent =
  | GraphStartProbeData
  | NodeStartResponse
  | NodeEndResponse;

export interface ImageHandler {
  start(): Promise<void>;
  stop(): void;
}

export type HistoryEntry = HarnessRunResult & {
  id: string;
  guid: string;
  graphNodeData:
    | { inputs: Record<string, unknown>; outputs: Record<string, unknown> }
    | null
    | undefined;
  children: HistoryEntry[];
};

export enum STATUS {
  RUNNING = "running",
  PAUSED = "paused",
  STOPPED = "stopped",
}

export type StartArgs = {
  boards: Board[];
};

export type InputArgs = {
  schema?: Schema;
};

export type OutputArgs = {
  node: {
    id: string;
    type: string;
    configuration?: unknown;
  };
  outputs: {
    schema?: Schema;
  } & Record<string, unknown>;
};

export type LLMInlineData = {
  inlineData: { data: string; mimeType: string };
};

export type LLMFunctionCall = {
  functionCall: {
    name: string;
    args: object;
  };
};

export type LLMFunctionResponse = {
  functionResponse: {
    name: string;
    response: object;
  };
};

export type LLMText = {
  text: string;
};

export type LLMStoredData = {
  storedData: {
    handle: string;
    mimeType: string;
  };
};

export type LLMPart =
  | LLMInlineData
  | LLMStoredData
  | LLMFunctionCall
  | LLMFunctionResponse
  | LLMText;

export type LLMContent = {
  role?: string;
  parts: LLMPart[];
};

export interface AllowedLLMContentTypes {
  audioFile: boolean;
  audioMicrophone: boolean;
  videoFile: boolean;
  videoWebcam: boolean;
  imageFile: boolean;
  imageWebcam: boolean;
  imageDrawable: boolean;
  textFile: boolean;
  textInline: boolean;
}

export enum SETTINGS_TYPE {
  SECRETS = "Secrets",
  GENERAL = "General",
  INPUTS = "Inputs",
  NODE_PROXY_SERVERS = "Node Proxy Servers",
  CONNECTIONS = "Connections",
}

export interface SettingEntry {
  key: string;
  value: {
    id?: string;
    name: string;
    description?: string;
    value: string | number | boolean;
  };
}

export interface SettingsList {
  [SETTINGS_TYPE.GENERAL]: SettingEntry;
  [SETTINGS_TYPE.SECRETS]: SettingEntry;
  [SETTINGS_TYPE.INPUTS]: SettingEntry;
  [SETTINGS_TYPE.NODE_PROXY_SERVERS]: SettingEntry;
  [SETTINGS_TYPE.CONNECTIONS]: SettingEntry;
}

export type Settings = {
  [K in keyof SettingsList]: {
    configuration: {
      extensible: boolean;
      description: string;
      nameEditable: boolean;
      nameVisible: boolean;
      /**
       * Render an instance of the custom element with this name, instead of
       * generic setting entries. The element must match the
       * {@link CustomSettingsElement} interface.
       */
      customElement?: string;
    };
    items: Map<SettingEntry["value"]["name"], SettingEntry["value"]>;
  };
};

export type CustomSettingsElement = HTMLElement & {
  settingsType?: SETTINGS_TYPE | undefined;
  settingsItems?: Settings[SETTINGS_TYPE]["items"] | undefined;
};

/**
 * A simplified interface over {@link SettingsStore} that reads/writes
 * immediately and can be consumed by elements using
 * {@link settingsHelperContext}.
 */
export interface SettingsHelper {
  get(section: SETTINGS_TYPE, name: string): SettingEntry["value"] | undefined;
  set(section: SETTINGS_TYPE, name: string, value: SettingEntry["value"]): void;
  delete(section: SETTINGS_TYPE, name: string): void;
}

/**
 * A POJO version of {@link InspectableEdge} with only what we need for
 * rendering. An {@link InspectableEdge} should be assignable to this, but not
 * vice-versa.
 *
 * This type was created to distinguish when we have an actual
 * {@link InspectableEdge} with methods and full inspectable nodes, vs a plain
 * object that just has the basic string data.
 *
 * Note that it's not safe to `structuredClone` an {@link InspectableEdge}, so
 * {@link cloneEdgeData} should be used for cloning.
 */
export interface EdgeData {
  from: { descriptor: { id: string } };
  to: { descriptor: { id: string } };
  out: string;
  in: string;
  type: InspectableEdgeType;
}

({}) as InspectableEdge satisfies EdgeData;

export function cloneEdgeData<T extends EdgeData | null>(edge: T): T {
  return (
    edge === null
      ? null
      : {
          from: { descriptor: { id: edge.from.descriptor.id } },
          to: { descriptor: { id: edge.to.descriptor.id } },
          out: edge.out,
          in: edge.in,
          type: edge.type,
        }
  ) as T;
}

export interface RecentBoard {
  title: string;
  url: string;
}
