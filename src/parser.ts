import { JSONValue } from "./types.ts";

export function JSONParser(string: string): JSONValue {
    return JSON.parse(string);
}