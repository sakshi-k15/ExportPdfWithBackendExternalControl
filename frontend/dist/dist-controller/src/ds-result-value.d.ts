export declare function RtSome<T>(value: T): RtOption<T>;
export declare function RtNone<T>(): RtOption<T>;
export declare class DataSourcePropertyKeyBuilder {
    static buildKey(dsName: string, fieldName: string): string;
}
export declare class RtOption<T> {
    private readonly value;
    constructor(value: T | undefined);
    get isDefined(): boolean;
    get isEmpty(): boolean;
    get get(): T;
    getOrElse(fn: () => T): T;
    getOrElseThrow(errorMsg: string): T;
    getOrElseV2(alternativeValue: T): T;
    get getOrElseUndefined(): T;
    get getOrElseNull(): T;
    map<B>(fn: (t: T) => B): RtOption<B>;
    get toArray(): T[];
    static parse<T>(val: RtOption<T>): RtOption<T>;
}
export declare class DsResultValue {
    fieldName: string;
    originalValue: any;
    value: any;
    uom: RtOption<string>;
    referenceData: RtOption<unknown>;
    constructor(fieldName: string, originalValue: any, value: any, uom: RtOption<string>, referenceData: RtOption<unknown>);
    get hasValue(): boolean;
    get displayValue(): string;
    asFullyQualifiedDsResultValue(dsName: string): DsResultValue;
}
export declare enum DisplayBindingType {
    VALUE = "value",
    DISPLAY_VALUE = "display_value",
    UOM = "uom"
}
export declare class UomBinding {
    private _direct;
    private _uomOptions;
    private _rounding;
    constructor(_direct: RtOption<any>, _uomOptions: RtOption<any>, _rounding: RtOption<number>);
    get direct(): any;
    set direct(value: any);
    get uomOptions(): any;
    set uomOptions(value: any);
    get rounding(): number;
    set rounding(value: number);
    static parse(uomBinding: UomBinding): UomBinding;
}
export declare class ControlPropertyDefinitionValue {
    controlAttributeName: string;
    value?: any;
    dsPropertyName?: string | string[];
    uomBinding?: UomBinding;
    displayBindingType?: DisplayBindingType;
    cssTemplate?: string;
    jsTemplate?: string;
    constructor(controlAttributeName: string, // Label --> value //Image --> image
    value?: any, // Default Value ---> Name
    dsPropertyName?: string | string[], // ---> Bounded property from Data Source e.g. EmployeeName  //Image --> ImageUrl
    uomBinding?: UomBinding, // if the field is of type 'UOM', then uomBinding binding may contain the conversion strategy
    displayBindingType?: DisplayBindingType, cssTemplate?: string, jsTemplate?: string);
    static parse(controlPropertyDefinitionValue: ControlPropertyDefinitionValue): ControlPropertyDefinitionValue;
}
