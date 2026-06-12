export interface AdditionalEntity {
}
export declare class TxnParams implements AdditionalEntity {
    siteCode: string;
    appCode: string;
    orgCode: string;
    includeDisabled: boolean;
    auditParams?: any;
    isDCRequest: boolean;
    constructor();
}
export declare enum DataypeEnum {
    UNDEFINED = "undefined"
}
