import { ViewContainerRef } from "@angular/core";
import { ControlPropertyDefinitionValue, RtOption } from './ds-result-value';
import { UsableAttributeValue } from './attribute-instance';
import { ControlInstanceWrapper } from './control-model';
export interface IControlInfo {
}
export interface ExternalCoreSimpleControl {
    onDatasourceResolved(data: RtOption<any>): any;
    applyPropertyDefinitions(propertyDefinitions: ControlPropertyDefinitionValue[]): any;
    applyConfigurationAttributes(configurationAttributeValues: UsableAttributeValue<unknown>[]): any;
    setControlInstance(data: ControlInstanceWrapper): any;
}
export declare class ExternalCoreSimpleAngularControlInfo implements IControlInfo {
    viewContainerRef: ViewContainerRef;
    parentInstance: ControlInstanceWrapper;
    constructor(viewContainerRef: ViewContainerRef, parentInstance: ControlInstanceWrapper);
}
