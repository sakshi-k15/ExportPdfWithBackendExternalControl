import { AttributeInstance } from "./attribute-instance";
import { ControlPropertyDefinitionValue } from "./ds-result-value";
export declare enum AttributeType {
    CSS = "CSS",
    CONFIGURATION = "CONFIGURATION",
    LOCAL_ACTION = "LOCAL_ACTIONS",//e.g. make sound, lit light, vibrate
    PROPERTY_DEFINITION = "PROPERTY_DEFINITION"
}
export declare class GlobalBaseEntity {
    id: string;
    enabled: boolean;
    attributes: Object;
    createdBy: string | null;
    createDate: string | null;
}
export declare class AppEntity extends GlobalBaseEntity {
    appCode: string | null;
}
export declare class ControlInstance extends AppEntity {
    instanceId: string;
    parentInstanceId?: string;
    ctrlType: string;
    parentSectionIndex: number;
    controlName: string;
    pageName: string;
    selectedDataSourceServiceInstanceId?: string;
    dsDependentControlInstanceId?: string;
    allAttributeValues: string;
    propertyDefinitions?: string;
    controlConditionGroup: string;
    name: string;
    joinStrategy?: string;
    sequenceNo: number;
    identifier: string;
    page?: any;
    constructor();
}
export declare class ControlInstanceWrapper {
    _controlInstance: ControlInstance;
    constructor(controlInstance: ControlInstance);
    get controlInstance(): ControlInstance;
    get id(): string;
    set id(id: string);
    get name(): string;
    set name(name: string);
    get instanceId(): string;
    set instanceId(instanceId: string);
    get parentInstanceId(): string;
    set parentInstanceId(parentInstanceId: string);
    get ctrlType(): string;
    get parentSectionIndex(): number;
    set parentSectionIndex(index: number);
    get controlName(): string;
    get pageName(): string;
    get sequenceNo(): number;
    set sequenceNo(sequenceNo: number);
    set pageName(pageName: string);
    get dsDependentControlInstanceId(): string;
    set dsDependentControlInstanceId(dsDependentControlInstanceId: string);
    get allAttributeValues(): AttributeInstance[];
    set allAttributeValues(attributeValues: AttributeInstance[]);
    get propertyDefinitions(): ControlPropertyDefinitionValue[];
    set propertyDefinitions(propertyDefinitions: ControlPropertyDefinitionValue[]);
    get createDate(): string;
    get createdBy(): string;
    get identifier(): string;
    get appCode(): string;
    get controlConditionGroup(): any[];
    set controlConditionGroup(controlConditionGroup: any[]);
    clone(): ControlInstanceWrapper;
    getPropertyDefinition(propertyName: string): ControlPropertyDefinitionValue;
    getConfigurationProperty(propertyName: string): AttributeInstance<any>;
    get joinStrategy(): any;
    set joinStrategy(joinStrategy: any);
}
export declare class DataViewContainer {
    className: string;
    data: Object;
    wsTopicDetail?: any;
    constructor();
}
