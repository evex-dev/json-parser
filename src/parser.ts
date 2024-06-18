import type { JSONValue } from "./types.ts";

export function JSONParser(string: string): JSONValue {
    // Temp
    return JSON.parse(string);
}