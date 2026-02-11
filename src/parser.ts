import type { JSONValue } from "./types.ts";

if (typeof window === "undefined") {
    throw new Error("Do not use this In Server-Side")
}

export function jsonParser(jsonString: string): JSONValue {
    return new Function(`return (${jsonString})`)();
}
