import type { JSONValue } from "./types.ts";

if (typeof window === "undefined") {
    throw new Error("Do not use this In Server-Side")
}

export function JSONParser(jsonString: string): JSONValue {
    return new Function("jsonString", "return (jsonString)")(jsonString);
}
