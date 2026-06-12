import { DataViewContainer } from "./control-model";
import { RtOption } from "./ds-result-value";
export declare class QueryResult<T> {
    results: Array<T> | undefined;
    totalResults: number | undefined;
}
export declare enum DataStateType {
    APPLIED = "APPLIED",
    NEW = "INSERT",
    UPDATED = "UPDATE",
    DELETED = "DELETE"
}
export declare class RawDataSourceResult {
    data: DataViewContainer;
    fks: string[];
    constructor(data: DataViewContainer, fks: string[]);
}
export declare class RestResponse {
    className: string;
    data: unknown;
    wsTopic: string;
    constructor(className: string, data: unknown, wsTopic: string);
}
export declare class IDsArrayOrGroupedResult {
}
export interface IDsResult {
}
export declare enum RenderChildType {
    INSERT_OR_UPDATE = 1,
    DELETE = 2
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
export declare class DsResult implements IDsResult {
    id: string;
    dsName: string;
    data: DsResultValue[];
    fks: string[];
    isWsResult: boolean;
    private _isDirectValue;
    dataStateType: DataStateType;
    constructor(id: string, dsName: string, data: DsResultValue[], fks: string[], isWsResult: boolean, _isDirectValue: boolean, dataStateType: DataStateType);
    markAsWsResult(): DsResult;
    markAsPrevious(): DsResult;
    markAsNew(): DsResult;
    isNew(): boolean;
    markAsDirectValue(): DsResult;
    isDirectValue(): boolean;
    markAsDeleted(): DsResult;
    isDeleted(): boolean;
    markAsUpdated(): DsResult;
    markAsApplied(): DsResult;
    isUpdated(): boolean;
    getValueByKey(key: string): DsResultValue;
    applyDsResults(newData: DsResultWithDsName[]): DsResult;
    getChangedState(dsResults: DsResult[]): DataStateType;
    isChanged(): boolean;
    asFullyQualifiedDsResult(dsName: string): DsResult;
    static empty(keys: string[]): DsResult;
    get isEmpty(): boolean;
}
export type SimpleData = {
    fieldName: string;
    value: any;
};
export declare class DsResultBuilder {
    static createNew(id: string, dsName: string, cellValues: SimpleData[]): DsResult;
}
export declare class DsResultArray implements IDsResult, IDsArrayOrGroupedResult {
    dsName: string;
    results: DsResult[];
    totalResults: number;
    fks: string[];
    isWsResult: boolean;
    isStreamData: boolean;
    constructor(dsName: string, results: DsResult[], totalResults: number, fks: string[], isWsResult?: boolean, isStreamData?: boolean);
    toQueryResult(): QueryResult<unknown>;
    markAsWsResult(): DsResultArray;
    markAsPrevious(): DsResultArray;
    toList(): DsResultValue[][];
    /**
     *
     * @param dsName e.g. trips-ds
     * @param masterKeyValue e.g. truckId value: truck-01
     * @param fkName e.g. truckId
     * @param keys to construct empty values if in case results not found
     * @returns DsResult either with values or creates empty
     */
    getValueByMasterJoinKey(masterKeyValue: string, fkName: string, keys: string[]): DsResult;
    applyDsResults(newData: DsResultArray, pageSize: number): {
        updatedDs: DsResultArray;
        deletedDsResults: DsResult[];
    };
    overrideResults(results: DsResult[]): DsResultArray;
    concatDsResults(newData: DsResultArray): DsResultArray;
    asFullyQualifiedDsResultArray(): DsResultArray;
    toUnApplied(): DsResultArray;
    markAllAsApplied(): DsResultArray;
    markAsUpdated(): DsResultArray;
}
export declare class DsResultHelper {
    static getValues(dsResult: DsResult[]): DsResultValue[][];
    static getFks(dsResult: DsResult | DsResult[]): string[];
}
export declare class DsResultWithDsName {
    private dsName;
    dsResult: DsResult;
    constructor(dsName: string, dsResult: DsResult);
    asFullyQualifiedDsResult(): DsResult;
}
