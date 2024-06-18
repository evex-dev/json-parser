type JSONPrimitiveTypes = string | number | boolean | null;
type JSONValue = JSONPrimitiveTypes | JSONObject | JSONArray;
type JSONObject = { [key: string]: JSONValue };
type JSONArray = JSONValue[];

export type { JSONPrimitiveTypes, JSONValue, JSONObject, JSONArray };