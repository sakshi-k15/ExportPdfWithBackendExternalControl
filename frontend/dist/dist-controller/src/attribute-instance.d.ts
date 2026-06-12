export declare class AttributeInstance<T = any> {
    name: string;
    value: T | string | number | boolean;
    attributeType: string;
    constructor(name: string, value: T | string | number | boolean, attributeType: string);
    getCssAttribute(): string;
}
export declare class AttributeInstanceHolder {
    name: string;
    value: string | number | boolean | any;
    attributeType: string;
    attributeThemeType: any;
    constructor(name: string, value: string | number | boolean | any, attributeType: string, attributeThemeType?: any);
}
export declare class UsableAttributeValue<U> {
    name: string;
    value: U;
    attributeType: string;
    constructor(name: string, value: U, attributeType: string);
    withUpdatedValue(newValue: U): UsableAttributeValue<U>;
    as<U2>(): U2;
}
