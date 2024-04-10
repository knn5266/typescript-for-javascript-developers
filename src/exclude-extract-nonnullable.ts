export {}

type DebugType =()=> void;
type SomeTypes = string | number |DebugType;
type Function = Exclude<SomeTypes, string | number>
type NunFunctionType = Exclude<SomeTypes, DebugType>
type TypeExcludeFunction = Exclude<SomeTypes, Function>

type FunctionTypeExtract = Extract<SomeTypes, DebugType>
type NunFunctionTypeByExtract  = Extract<SomeTypes, string | number>
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>

type NullableTypes = string | number | null | undefined;
type NonNullableTypes = NonNullable<NullableTypes>