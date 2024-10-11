import type { JSONValue } from "./types.ts";

if (typeof window === "undefined") {
    throw new Error("Do not use this In Server-Side")
}

export function JSONParser(string: string): JSONValue {
    // Temp
    return new Function(`return (${string})`);
}
