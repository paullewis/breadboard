/**
 * @license
 * Copyright 2024 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */

import { Schema } from "@google-labs/breadboard";
import {
  AllowedLLMContentTypes,
  LLMFunctionCall,
  LLMFunctionResponse,
  LLMInlineData,
  LLMPart,
  LLMText,
} from "../types/types.js";

export function isText(part: LLMPart): part is LLMText {
  return "text" in part;
}

export function isFunctionCall(part: LLMPart): part is LLMFunctionCall {
  return "functionCall" in part;
}

export function isFunctionResponse(part: LLMPart): part is LLMFunctionResponse {
  return "functionResponse" in part;
}

export function isInlineData(part: LLMPart): part is LLMInlineData {
  return "inlineData" in part;
}

function updateAllowList(
  allow: AllowedLLMContentTypes,
  format: string | string[]
) {
  if (typeof format === "string") {
    switch (format) {
      case "audio-file": {
        allow.audioFile = true;
        break;
      }

      case "audio-microphone": {
        allow.audioMicrophone = true;
        break;
      }

      case "video-file": {
        allow.videoFile = true;
        break;
      }

      case "video-webcam": {
        allow.videoWebcam = true;
        break;
      }

      case "image-file": {
        allow.imageFile = true;
        break;
      }

      case "image-webcam": {
        allow.imageWebcam = true;
        break;
      }

      case "image-drawable": {
        allow.imageDrawable = true;
        break;
      }

      case "text-file": {
        allow.textFile = true;
        break;
      }
    }
  } else {
    for (const item of format) {
      updateAllowList(allow, item);
    }
  }
}

export function createAllowListFromProperty(
  property: Schema | undefined
): AllowedLLMContentTypes {
  const allow: AllowedLLMContentTypes = {
    audioFile: false,
    audioMicrophone: false,
    videoFile: false,
    videoWebcam: false,
    imageFile: false,
    imageWebcam: false,
    imageDrawable: false,
    textFile: false,
    textInline: true,
  };

  if (!property) {
    return allow;
  }

  let format = property.format;
  if (
    property.type === "array" &&
    property.type &&
    property.items &&
    property.type === "array" &&
    !Array.isArray(property.items) &&
    property.items.type === "object" &&
    property.items.format
  ) {
    format = property.items.format;
  }

  if (format) {
    if (format.includes(",")) {
      updateAllowList(allow, format.split(","));
    } else {
      updateAllowList(allow, format);
    }
  } else {
    allow.audioFile = true;
    allow.audioMicrophone = true;
    allow.videoFile = true;
    allow.videoWebcam = true;
    allow.imageFile = true;
    allow.imageWebcam = true;
    allow.imageDrawable = true;
    allow.textFile = true;
    allow.textInline = true;
  }

  return allow;
}