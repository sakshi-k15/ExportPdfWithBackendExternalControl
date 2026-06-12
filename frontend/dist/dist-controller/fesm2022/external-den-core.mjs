import * as i0 from '@angular/core';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

class IdentityGenerator {
    static MAGIC_BASE = 900000000000000;
    static getLongId(increment) {
        return IdentityGenerator.MAGIC_BASE + increment;
    }
    static guid() {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    }
}

class DevumEventHandler {
    eventId = IdentityGenerator.guid();
    version;
    datetime = new Date().toISOString();
    tags; // [ ['browser', 'chrome'], ['browser-version', '1.0.0'], ['device', 'mobile'], ['environment', 'production'], ['user', 'user-id'] ]
    isReported = false;
    clickupUrl;
    contexts;
    environment;
    breadcrumbs;
    exception;
    title;
    user;
    constructor() {
        // this.environment = environment.production ? 'production' : 'development';
        this.user = {
            id: '', // storageProvider.getUserAccountId(),
            userName: '', //storageProvider.getUserName(),
            emailId: '', //storageProvider.getUserProfile()?.emailId,
            ipAddress: '',
            geo: {
                countryCode: '',
                region: '',
                city: ''
            }
        };
        this.contexts = {
            browser: {
                name: this.getBrowserName(),
                version: this.getBrowserVersion(),
            }
        };
    }
    getBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        const browser = agent.indexOf('edge') > -1 ? 'Microsoft Edge'
            : agent.indexOf('edg') > -1 ? 'Chromium-based Edge'
                : agent.indexOf('opr') > -1 ? 'Opera'
                    : agent.indexOf('chrome') > -1 ? 'Chrome'
                        : agent.indexOf('trident') > -1 ? 'Internet Explorer'
                            : agent.indexOf('firefox') > -1 ? 'Firefox'
                                : agent.indexOf('safari') > -1 ? 'Safari'
                                    : 'other';
        return browser;
    }
    getBrowserVersion() {
        var userAgent = navigator.userAgent, tem, matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(matchTest[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (matchTest[1] === 'Chrome') {
            tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = userAgent.match(/version\/(\d+)/i)) != null)
            matchTest.splice(1, 1, tem[1]);
        return matchTest.join(' ');
    }
    isMobile() {
        return window.navigator.maxTouchPoints > 0;
    }
}
class ClientGeoLog {
    city;
    region;
    regionCode;
    regionName;
    countryCode;
    countryName;
    continentCode;
    continentName;
    latitude;
    longitude;
    timezone;
    currencyCode;
    currencySymbol;
    currencyConverter;
    constructor() { }
}
class LogData {
    instanceId;
    pageName;
    dsName;
    pageNumber;
    pageSize;
    errorCode;
    constructor(instanceId, pageName, dsName, pageNumber, pageSize, errorCode) {
        this.instanceId = instanceId;
        this.pageName = pageName;
        this.dsName = dsName;
        this.pageNumber = pageNumber;
        this.pageSize = pageSize;
        this.errorCode = errorCode;
    }
}
class LogService {
    logSubscription = new Subject();
    logRegistry = new Map();
    clientGeoParams;
    constructor() {
    }
    getLogSubscriptionAsObservable() {
        return this.logSubscription.asObservable();
    }
    register(info) {
        const logs = this.logRegistry.get(info.group);
        return this;
    }
    log(message, stack, category, data) {
        console.log("log service log -> ", message, stack, data);
        this.report('log', message, stack, category, data);
    }
    warn(message, stack, category, data) {
        console.log("log service warn -> ", message, stack, data);
        this.report('info', message, stack, category, data);
        // this.handlePagebuilderErrorLog(data, category, null, message,LogType.WARN);
    }
    report(type, message, stack, category, data) {
        let breadcrumbs;
        breadcrumbs = {
            type: type,
            level: 'low',
            category: category,
            message: message,
            timestamp: new Date().toISOString(),
            data: data,
        };
        const eventHandler = new DevumEventHandler();
        eventHandler.breadcrumbs = breadcrumbs;
        eventHandler.title = message;
        // eventHandler.exception.values.push({ value: stack });
        this.logSubscription.next(eventHandler);
    }
    error(message, stack, category, data) {
        console.log("log service error -> ", message, stack, data);
        let fileDetails;
        if (typeof stack === "string") {
            fileDetails = this.getFileDetails(stack);
        }
        this.report('Error', fileDetails ? JSON.stringify(fileDetails) : message, message, category || null, data || null);
        // this.handlePagebuilderErrorLog(data, category, fileDetails, message, LogType.ERROR);
    }
    info(message) {
        this.log(message, message, 'Info');
    }
    getBrowserName() {
        const agent = window.navigator.userAgent.toLowerCase();
        const browser = agent.indexOf('edge') > -1 ? 'Microsoft Edge'
            : agent.indexOf('edg') > -1 ? 'Chromium-based Edge'
                : agent.indexOf('opr') > -1 ? 'Opera'
                    : agent.indexOf('chrome') > -1 ? 'Chrome'
                        : agent.indexOf('trident') > -1 ? 'Internet Explorer'
                            : agent.indexOf('firefox') > -1 ? 'Firefox'
                                : agent.indexOf('safari') > -1 ? 'Safari'
                                    : 'other';
        return browser;
    }
    getBrowserVersion() {
        var userAgent = navigator.userAgent, tem, matchTest = userAgent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
        if (/trident/i.test(matchTest[1])) {
            tem = /\brv[ :]+(\d+)/g.exec(userAgent) || [];
            return 'IE ' + (tem[1] || '');
        }
        if (matchTest[1] === 'Chrome') {
            tem = userAgent.match(/\b(OPR|Edge)\/(\d+)/);
            if (tem != null)
                return tem.slice(1).join(' ').replace('OPR', 'Opera');
        }
        matchTest = matchTest[2] ? [matchTest[1], matchTest[2]] : [navigator.appName, navigator.appVersion, '-?'];
        if ((tem = userAgent.match(/version\/(\d+)/i)) != null)
            matchTest.splice(1, 1, tem[1]);
        return matchTest.join(' ');
    }
    isMobile() {
        return window.navigator.maxTouchPoints > 0;
    }
    getUserRegion() {
        try {
            fetch('http://www.geoplugin.net/json.gp')
                .then(response => response.json())
                .then(data => {
                const geoParams = data;
                this.clientGeoParams = {
                    city: geoParams.geoplugin_city,
                    region: geoParams.geoplugin_region,
                    regionCode: geoParams.geoplugin_regionCode,
                    regionName: geoParams.geoplugin_regionName,
                    countryCode: geoParams.geoplugin_countryCode,
                    countryName: geoParams.geoplugin_countryName,
                    continentCode: geoParams.geoplugin_continentCode,
                    continentName: geoParams.geoplugin_continentName,
                    latitude: geoParams.geoplugin_latitude,
                    longitude: geoParams.geoplugin_longitude,
                    timezone: geoParams.geoplugin_timezone,
                    currencyCode: geoParams.geoplugin_currencyCode,
                    currencySymbol: geoParams.geoplugin_currencySymbol,
                    currencyConverter: geoParams.geoplugin_currencyConverter,
                };
            });
        }
        catch {
            this.clientGeoParams = new ClientGeoLog();
        }
    }
    getFileDetails(stack) {
        // const stack = trace.split('\n');
        // const fileDetails = stack[1].split('/');
        // const fileName = fileDetails[fileDetails.length - 1];
        // const lineNumber = stack[1].split(':')[1];
        // return { fileName, lineNumber };
        const stackList = stack?.split("\n");
        const regex = /\((.*):(\d+):(\d+)\)$/;
        const match = regex.exec(stackList[2]);
        if (match?.length > 4) {
            return {
                message: stackList[0],
                filePath: null,
                lineno: null,
                colno: null
            };
        }
        return {
            message: stackList && stackList[0],
            filePath: match && match[1],
            lineno: match && match[2],
            colno: match && match[3]
        };
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LogService, deps: [], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LogService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "18.2.13", ngImport: i0, type: LogService, decorators: [{
            type: Injectable,
            args: [{ providedIn: 'root' }]
        }], ctorParameters: () => [] });

class ExternalCoreSimpleAngularControlInfo {
    viewContainerRef;
    parentInstance;
    constructor(viewContainerRef, parentInstance) {
        this.viewContainerRef = viewContainerRef;
        this.parentInstance = parentInstance;
    }
}

function RtSome(value) {
    return new RtOption(value);
}
function RtNone() {
    return new RtOption(null);
}
class DataSourcePropertyKeyBuilder {
    static buildKey(dsName, fieldName) {
        return `${dsName}.${fieldName}`;
    }
}
class RtOption {
    value;
    constructor(value) {
        if (value !== undefined && value != null) {
            this.value = value;
        }
        else {
            this.value = undefined;
        }
    }
    get isDefined() {
        return this.value !== undefined && this.value != null;
    }
    get isEmpty() {
        return this.value === undefined || this.value == null;
    }
    get get() {
        if (this.value !== undefined) {
            return this.value;
        }
        else {
            throw new Error('None.get error');
        }
    }
    // scala: @inline final def getOrElse[B >: A](default: => B): B =
    // if (isEmpty) default else this.get
    getOrElse(fn) {
        if (this.isEmpty)
            return fn();
        else
            return this.get;
    }
    getOrElseThrow(errorMsg) {
        if (this.isEmpty)
            throw new Error(errorMsg);
        else
            return this.get;
    }
    getOrElseV2(alternativeValue) {
        if (this.isEmpty)
            return alternativeValue;
        else
            return this.get;
    }
    get getOrElseUndefined() {
        return this.getOrElse(() => undefined);
    }
    get getOrElseNull() {
        return this.getOrElse(() => null);
    }
    //scala: def map[B, That](f: A => B): That
    //map[B](f: A => B): Option[B]
    map(fn) {
        if (this.isDefined) {
            const value = fn(this.get);
            return RtSome(value);
        }
        else {
            return RtNone();
        }
    }
    get toArray() {
        if (this.isDefined) {
            return [this.get];
        }
        else {
            return [];
        }
    }
    static parse(val) {
        const valObj = val;
        if (valObj.value || valObj.value == 0) {
            return RtSome(valObj.value);
        }
        return RtNone();
    }
}
let DsResultValue$1 = class DsResultValue {
    fieldName;
    originalValue;
    value;
    uom;
    referenceData;
    constructor(fieldName, originalValue, value, uom, referenceData) {
        this.fieldName = fieldName;
        this.originalValue = originalValue;
        this.value = value;
        this.uom = uom;
        this.referenceData = referenceData;
    }
    get hasValue() {
        return this.value != null || this.referenceData.isDefined;
    }
    get displayValue() {
        if (this.uom.isDefined) {
            return `${this.value} ${this.uom.get}`;
        }
        else {
            return this.referenceData.isDefined ? this.referenceData.get : this.value;
        }
    }
    asFullyQualifiedDsResultValue(dsName) {
        const fieldName = DataSourcePropertyKeyBuilder.buildKey(dsName, this.fieldName);
        return new DsResultValue(fieldName, this.originalValue, this.value, this.uom, this.referenceData);
    }
};
var DisplayBindingType;
(function (DisplayBindingType) {
    DisplayBindingType["VALUE"] = "value";
    DisplayBindingType["DISPLAY_VALUE"] = "display_value";
    DisplayBindingType["UOM"] = "uom";
})(DisplayBindingType || (DisplayBindingType = {}));
class UomBinding {
    _direct;
    _uomOptions;
    _rounding;
    constructor(_direct, _uomOptions, _rounding) {
        this._direct = _direct;
        this._uomOptions = _uomOptions;
        this._rounding = _rounding;
    }
    get direct() { return this._direct.getOrElseUndefined; }
    set direct(value) { this._direct = RtSome(value); }
    get uomOptions() { return this._uomOptions.getOrElseUndefined; }
    set uomOptions(value) { this._uomOptions = RtSome(value); }
    get rounding() { return this._rounding.getOrElseUndefined; }
    set rounding(value) {
        this._rounding = RtSome(value);
    }
    static parse(uomBinding) {
        const directValue = RtOption.parse(uomBinding._direct);
        const uomOptions = RtOption.parse(uomBinding._uomOptions);
        const rounding = RtOption.parse(uomBinding._rounding);
        const parsedUomBinding = new UomBinding(directValue, uomOptions, rounding);
        return parsedUomBinding;
    }
}
class ControlPropertyDefinitionValue {
    controlAttributeName;
    value;
    dsPropertyName;
    uomBinding;
    displayBindingType;
    cssTemplate;
    jsTemplate;
    constructor(controlAttributeName, // Label --> value //Image --> image
    value, // Default Value ---> Name
    dsPropertyName, // ---> Bounded property from Data Source e.g. EmployeeName  //Image --> ImageUrl
    uomBinding, // if the field is of type 'UOM', then uomBinding binding may contain the conversion strategy
    displayBindingType, cssTemplate, jsTemplate) {
        this.controlAttributeName = controlAttributeName;
        this.value = value;
        this.dsPropertyName = dsPropertyName;
        this.uomBinding = uomBinding;
        this.displayBindingType = displayBindingType;
        this.cssTemplate = cssTemplate;
        this.jsTemplate = jsTemplate;
    }
    static parse(controlPropertyDefinitionValue) {
        const uomBinding = controlPropertyDefinitionValue.uomBinding ? UomBinding.parse(controlPropertyDefinitionValue.uomBinding) : undefined;
        const reConstructedObj = new ControlPropertyDefinitionValue(controlPropertyDefinitionValue.controlAttributeName, controlPropertyDefinitionValue.value, controlPropertyDefinitionValue.dsPropertyName, uomBinding, controlPropertyDefinitionValue.displayBindingType, controlPropertyDefinitionValue.cssTemplate, controlPropertyDefinitionValue.jsTemplate);
        return reConstructedObj;
    }
}

class QueryResult {
    results;
    totalResults;
}
var DataStateType;
(function (DataStateType) {
    DataStateType["APPLIED"] = "APPLIED";
    DataStateType["NEW"] = "INSERT";
    DataStateType["UPDATED"] = "UPDATE";
    DataStateType["DELETED"] = "DELETE";
})(DataStateType || (DataStateType = {}));
class RawDataSourceResult {
    data;
    fks;
    constructor(data, fks) {
        this.data = data;
        this.fks = fks;
    }
}
class RestResponse {
    className;
    data;
    wsTopic;
    constructor(className, data, wsTopic) {
        this.className = className;
        this.data = data;
        this.wsTopic = wsTopic;
    }
}
class IDsArrayOrGroupedResult {
}
var RenderChildType;
(function (RenderChildType) {
    RenderChildType[RenderChildType["INSERT_OR_UPDATE"] = 1] = "INSERT_OR_UPDATE";
    RenderChildType[RenderChildType["DELETE"] = 2] = "DELETE";
})(RenderChildType || (RenderChildType = {}));
class DsResultValue {
    fieldName;
    originalValue;
    value;
    uom;
    referenceData;
    constructor(fieldName, originalValue, value, uom, referenceData) {
        this.fieldName = fieldName;
        this.originalValue = originalValue;
        this.value = value;
        this.uom = uom;
        this.referenceData = referenceData;
    }
    get hasValue() {
        return this.value != null || this.referenceData.isDefined;
    }
    get displayValue() {
        if (this.uom.isDefined) {
            return `${this.value} ${this.uom.get}`;
        }
        else {
            return this.referenceData.isDefined ? this.referenceData.get : this.value;
        }
    }
    asFullyQualifiedDsResultValue(dsName) {
        const fieldName = DataSourcePropertyKeyBuilder.buildKey(dsName, this.fieldName);
        return new DsResultValue(fieldName, this.originalValue, this.value, this.uom, this.referenceData);
    }
}
class DsResult {
    id;
    dsName;
    data;
    fks;
    isWsResult;
    _isDirectValue;
    dataStateType;
    constructor(id, dsName, data, fks, isWsResult, _isDirectValue, dataStateType) {
        this.id = id;
        this.dsName = dsName;
        this.data = data;
        this.fks = fks;
        this.isWsResult = isWsResult;
        this._isDirectValue = _isDirectValue;
        this.dataStateType = dataStateType;
    }
    markAsWsResult() {
        const isWSResult = true;
        return new DsResult(this.id, this.dsName, this.data, this.fks, isWSResult, this._isDirectValue, this.dataStateType);
    }
    markAsPrevious() {
        const isNewRecord = false;
        return new DsResult(this.id, this.dsName, this.data, this.fks, isNewRecord, this._isDirectValue, this.dataStateType);
    }
    markAsNew() {
        const isWsResult = false;
        return new DsResult(this.id, this.dsName, this.data, this.fks, isWsResult, this._isDirectValue, DataStateType.NEW);
    }
    isNew() {
        return this.isWsResult;
    }
    markAsDirectValue() {
        return new DsResult(this.id, this.dsName, this.data, this.fks, this.isWsResult, true, this.dataStateType);
    }
    isDirectValue() {
        return this._isDirectValue;
    }
    markAsDeleted() {
        return new DsResult(this.id, this.dsName, this.data, this.fks, this.isWsResult, this._isDirectValue, DataStateType.DELETED);
    }
    isDeleted() {
        return this.dataStateType == DataStateType.DELETED;
    }
    markAsUpdated() {
        const dataStateType = DataStateType.UPDATED;
        return new DsResult(this.id, this.dsName, this.data, this.fks, this.isWsResult, this._isDirectValue, dataStateType);
    }
    markAsApplied() {
        const dataStateType = DataStateType.APPLIED;
        return new DsResult(this.id, this.dsName, this.data, this.fks, this.isWsResult, this._isDirectValue, dataStateType);
    }
    isUpdated() {
        return this.dataStateType == DataStateType.UPDATED;
    }
    getValueByKey(key) {
        return this.data.find(di => di.fieldName === key);
    }
    //replace if items exist with the same dsResultId
    applyDsResults(newData) {
        const dsResults = newData.map(d => d.dsResult);
        const dataStateType = this.getChangedState(dsResults);
        const updatedResult = this.data.concat(...newData.map((dsr) => dsr.asFullyQualifiedDsResult().data));
        return new DsResult(this.id, this.dsName, updatedResult, this.fks, this.isWsResult, this._isDirectValue, dataStateType);
    }
    getChangedState(dsResults) {
        const changed = dsResults.find(ds => ds.isChanged());
        return changed ? changed.dataStateType : this.dataStateType;
    }
    isChanged() {
        return this.dataStateType != DataStateType.APPLIED;
    }
    asFullyQualifiedDsResult(dsName) {
        const dsResultValues = this.data?.map((dsResultValue => dsResultValue.asFullyQualifiedDsResultValue(dsName)));
        return new DsResult(this.id, this.dsName, dsResultValues, this.fks, this.isWsResult, this._isDirectValue, this.dataStateType);
    }
    static empty(keys) {
        const values = keys.map(key => new DsResultValue(key, null, null, RtNone(), RtNone()));
        return new DsResult(null, "", values, [], false, false, DataStateType.APPLIED);
    }
    get isEmpty() {
        return this.id == null;
    }
}
class DsResultBuilder {
    static createNew(id, dsName, cellValues) {
        const values = cellValues.map(cellValue => {
            return new DsResultValue(cellValue.fieldName, cellValue.value, cellValue.value, RtNone(), RtNone());
        });
        // const id = UUIDHelper.getShortID
        return new DsResult(id, dsName, values, [], false, false, DataStateType.NEW);
    }
}
class DsResultArray {
    dsName;
    results;
    totalResults;
    fks;
    isWsResult;
    isStreamData;
    constructor(dsName, results, totalResults, fks, isWsResult = false, isStreamData = false) {
        this.dsName = dsName;
        this.results = results;
        this.totalResults = totalResults;
        this.fks = fks;
        this.isWsResult = isWsResult;
        this.isStreamData = isStreamData;
    }
    toQueryResult() {
        const queryResult = new QueryResult();
        queryResult.results = this.results.map(d => d.data);
        queryResult.totalResults = this.totalResults;
        return queryResult;
    }
    markAsWsResult() {
        const isNewRecord = true;
        return new DsResultArray(this.dsName, this.results, this.totalResults, this.fks, isNewRecord, this.isStreamData);
    }
    markAsPrevious() {
        const isNewRecord = false;
        return new DsResultArray(this.dsName, this.results.map(dsResult => dsResult.markAsPrevious()), this.totalResults, this.fks, isNewRecord, this.isStreamData);
    }
    toList() {
        return this.results.map(d => d.data);
    }
    /**
     *
     * @param dsName e.g. trips-ds
     * @param masterKeyValue e.g. truckId value: truck-01
     * @param fkName e.g. truckId
     * @param keys to construct empty values if in case results not found
     * @returns DsResult either with values or creates empty
     */
    getValueByMasterJoinKey(masterKeyValue, fkName, keys) {
        const dsResult = this.results.find((v) => v.data.some(rv => rv.fieldName === fkName && rv.value === masterKeyValue));
        if (dsResult != null)
            return dsResult;
        else {
            return DsResult.empty(keys);
        }
    }
    applyDsResults(newData, pageSize) {
        let existingClone = this.results.map(res => new DsResult(res.id, res.dsName, res.data, res.fks, res.isWsResult, res.isDirectValue(), res.dataStateType));
        let deletedDsResults;
        newData.results.map(receivedDsResult => {
            const resultFound = existingClone.find(e => e.id && e.id == receivedDsResult.id);
            const existingRecordIndex = existingClone.findIndex(i => i.id === receivedDsResult?.id);
            if (resultFound) {
                const resolvedDsResult = receivedDsResult.dataStateType == DataStateType.DELETED ?
                    receivedDsResult : receivedDsResult.markAsUpdated();
                existingClone[existingRecordIndex] = resolvedDsResult;
                if (receivedDsResult.dataStateType == DataStateType.DELETED) {
                    this.totalResults--;
                }
            }
            else {
                // TODO from BE we are getting new unique dsResultId for each transaction. Verify the logic to update existing data.
                existingClone.unshift(receivedDsResult);
                if (pageSize && existingClone.length > pageSize) {
                    deletedDsResults = existingClone.splice(pageSize);
                    deletedDsResults.forEach(ds => ds.dataStateType = DataStateType.DELETED);
                }
                this.totalResults++;
            }
        });
        const updatedDs = new DsResultArray(this.dsName, existingClone, this.totalResults, this.fks, newData.isWsResult, newData.isStreamData);
        return { updatedDs, deletedDsResults };
    }
    overrideResults(results) {
        return new DsResultArray(this.dsName, results, this.totalResults, this.fks, this.isWsResult, this.isStreamData);
    }
    concatDsResults(newData) {
        const updatedResult = this.results.concat(newData.results);
        return new DsResultArray(newData.dsName, updatedResult, newData.totalResults, newData.fks, newData.isWsResult, newData.isStreamData);
    }
    asFullyQualifiedDsResultArray() {
        const joinedDSResults = this.results.map((masterItem) => {
            // if (!(masterItem instanceof DsResult)){
            //   const logService = StaticInjectorModule.injector.get(LogService);
            //   logService.error(`List data is not supported to single control`, null, CategoryEnum.PageBuilder, new LogData('', '', (masterItem as any).dsName));
            // }
            return masterItem.asFullyQualifiedDsResult(this.dsName);
        });
        return new DsResultArray("combined", joinedDSResults, this.totalResults, this.fks, this.isWsResult, this.isStreamData);
    }
    toUnApplied() {
        const unAppliedResults = this.results.filter(r => r.dataStateType != DataStateType.APPLIED);
        return new DsResultArray(this.dsName, unAppliedResults, this.totalResults, this.fks, this.isWsResult, this.isStreamData);
    }
    markAllAsApplied() {
        const appliedResults = this.results.map(result => {
            return result.markAsApplied();
        });
        return new DsResultArray(this.dsName, appliedResults, this.totalResults, this.fks, this.isWsResult, this.isStreamData);
    }
    markAsUpdated() {
        const updatedResults = this.results.map(result => {
            return result.markAsUpdated();
        });
        return new DsResultArray(this.dsName, updatedResults, this.totalResults, this.fks, this.isWsResult, this.isStreamData);
    }
}
class DsResultHelper {
    static getValues(dsResult) {
        const dsValue = dsResult.map((d) => d.data);
        return dsValue;
    }
    static getFks(dsResult) {
        if (Array.isArray(dsResult) && dsResult.length > 0) {
            return dsResult[0].fks;
        }
        else if (!Array.isArray(dsResult)) {
            return dsResult.fks;
        }
        else {
            return [];
        }
    }
}
class DsResultWithDsName {
    dsName;
    dsResult;
    constructor(dsName, dsResult) {
        this.dsName = dsName;
        this.dsResult = dsResult;
        // if (!(this.dsResult instanceof DsResult)){
        //   const logService = StaticInjectorModule.injector.get(LogService);
        //   logService.error(`List data is not supported to single control`, null, CategoryEnum.PageBuilder, new LogData('', '', dsName));
        // }
    }
    asFullyQualifiedDsResult() {
        return this.dsResult.asFullyQualifiedDsResult(this.dsName);
    }
}

var AttributeType;
(function (AttributeType) {
    AttributeType["CSS"] = "CSS";
    AttributeType["CONFIGURATION"] = "CONFIGURATION";
    AttributeType["LOCAL_ACTION"] = "LOCAL_ACTIONS";
    // DATASOURCE = "DATASOURCE",
    AttributeType["PROPERTY_DEFINITION"] = "PROPERTY_DEFINITION"; //e.g. make sound, lit light, vibrate
})(AttributeType || (AttributeType = {}));
class GlobalBaseEntity {
    id = '';
    enabled = true;
    attributes = {};
    createdBy = null;
    createDate = null;
}
class AppEntity extends GlobalBaseEntity {
    appCode = null;
}
class ControlInstance extends AppEntity {
    instanceId;
    parentInstanceId;
    ctrlType;
    parentSectionIndex;
    controlName;
    pageName;
    selectedDataSourceServiceInstanceId;
    dsDependentControlInstanceId;
    allAttributeValues;
    propertyDefinitions;
    controlConditionGroup;
    name;
    joinStrategy;
    sequenceNo;
    identifier;
    page;
    constructor() {
        super();
    }
}
class ControlInstanceWrapper {
    // private _children: ControlInstanceWrapper[];
    _controlInstance;
    constructor(controlInstance) {
        this._controlInstance = controlInstance;
    }
    get controlInstance() {
        return this._controlInstance;
    }
    get id() {
        return this._controlInstance.id;
    }
    ;
    set id(id) {
        this._controlInstance.id = id;
    }
    ;
    get name() {
        return this._controlInstance.name;
    }
    ;
    set name(name) {
        this._controlInstance.name = name;
    }
    get instanceId() {
        return this._controlInstance.instanceId;
    }
    ;
    set instanceId(instanceId) {
        this._controlInstance.instanceId = instanceId;
    }
    ;
    get parentInstanceId() {
        return this._controlInstance.parentInstanceId;
    }
    ;
    set parentInstanceId(parentInstanceId) {
        this._controlInstance.parentInstanceId = parentInstanceId;
    }
    ;
    get ctrlType() {
        return this._controlInstance.ctrlType;
    }
    ;
    get parentSectionIndex() {
        return this._controlInstance.parentSectionIndex;
    }
    ;
    set parentSectionIndex(index) {
        this._controlInstance.parentSectionIndex = index;
    }
    ;
    get controlName() {
        return this._controlInstance.controlName;
    }
    ;
    get pageName() {
        return this._controlInstance.pageName;
    }
    ;
    get sequenceNo() {
        return this._controlInstance.sequenceNo;
    }
    ;
    set sequenceNo(sequenceNo) {
        this._controlInstance.sequenceNo = sequenceNo;
    }
    ;
    set pageName(pageName) {
        this._controlInstance.pageName = pageName;
    }
    ;
    get dsDependentControlInstanceId() {
        return this._controlInstance.dsDependentControlInstanceId;
    }
    ;
    set dsDependentControlInstanceId(dsDependentControlInstanceId) {
        this._controlInstance.dsDependentControlInstanceId = dsDependentControlInstanceId;
    }
    get allAttributeValues() {
        let attributeValues = [];
        const attributeValuesString = this._controlInstance.allAttributeValues;
        if (attributeValuesString) {
            try {
                attributeValues = JSON.parse(attributeValuesString);
            }
            catch { }
        }
        return attributeValues;
    }
    ;
    set allAttributeValues(attributeValues) {
        this._controlInstance.allAttributeValues = JSON.stringify(attributeValues);
    }
    ;
    get propertyDefinitions() {
        let propertyDefinitions = [];
        const propertyDefinitionsString = this._controlInstance.propertyDefinitions;
        if (propertyDefinitionsString) {
            try {
                propertyDefinitions = JSON.parse(propertyDefinitionsString);
                propertyDefinitions = propertyDefinitions.map(propertyDefinition => ControlPropertyDefinitionValue.parse(propertyDefinition));
            }
            catch { }
        }
        return propertyDefinitions;
    }
    ;
    set propertyDefinitions(propertyDefinitions) {
        this._controlInstance.propertyDefinitions = propertyDefinitions ? JSON.stringify(propertyDefinitions) : "";
    }
    ;
    get createDate() {
        return this._controlInstance.createDate;
    }
    ;
    get createdBy() {
        return this._controlInstance.createdBy;
    }
    ;
    get identifier() {
        return this._controlInstance.id;
    }
    ;
    get appCode() {
        return this.controlInstance.appCode;
    }
    ;
    get controlConditionGroup() {
        let controlConditionGroup = [];
        const controlConditionGroupString = this._controlInstance.controlConditionGroup;
        if (controlConditionGroupString) {
            try {
                controlConditionGroup = JSON.parse(controlConditionGroupString);
            }
            catch { }
        }
        return controlConditionGroup;
    }
    ;
    set controlConditionGroup(controlConditionGroup) {
        this._controlInstance.controlConditionGroup = controlConditionGroup ? JSON.stringify(controlConditionGroup) : "";
    }
    clone() {
        return new ControlInstanceWrapper(JSON.parse(JSON.stringify(this.controlInstance)));
    }
    getPropertyDefinition(propertyName) {
        const propertyDefinitions = this.propertyDefinitions;
        return propertyDefinitions.find(pd => pd.controlAttributeName === propertyName);
        ;
    }
    getConfigurationProperty(propertyName) {
        const attributeValues = this.allAttributeValues;
        return attributeValues.find(a => a.attributeType === AttributeType.CONFIGURATION && a.name === propertyName);
    }
    get joinStrategy() {
        return this._controlInstance.joinStrategy;
    }
    set joinStrategy(joinStrategy) {
        this._controlInstance.joinStrategy = joinStrategy;
    }
}
class DataViewContainer {
    className;
    data;
    wsTopicDetail;
    constructor() {
    }
}

class AttributeInstance {
    name;
    value;
    attributeType;
    constructor(name, value, attributeType) {
        this.name = name;
        this.value = value;
        this.attributeType = attributeType;
    }
    getCssAttribute() {
        return this.name + ':' + this.value;
    }
}
class AttributeInstanceHolder {
    name;
    value;
    attributeType;
    attributeThemeType;
    constructor(name, value, attributeType, attributeThemeType = '') {
        this.name = name;
        this.value = value;
        this.attributeType = attributeType;
        this.attributeThemeType = attributeThemeType;
    }
}
class UsableAttributeValue {
    name;
    value;
    attributeType;
    constructor(name, value, attributeType) {
        this.name = name;
        this.value = value;
        this.attributeType = attributeType;
    }
    withUpdatedValue(newValue) {
        return new UsableAttributeValue(this.name, newValue, this.attributeType);
    }
    as() {
        return this.value;
    }
}
//s3 -> (behaviour,controlNames[], attributeInstance[])
//db -> (controlInstance, attributeInstance[])
//
//
//Model class for ControlAttributeInstance
// export class ControlAttributeInstance extends coreModels.AppEntity {
//   public id: string;
//   public name: string;
//   public attributeType: string
//   public value: any;
//   public controlInstanceId: string;
//   public pageName: string;
//   public isRemoved: boolean;
//   public page?: Page;
//   constructor() {
//     super();
//   }
// }

var StandardEvents;
(function (StandardEvents) {
    /** occurs when the user clicks on an element */
    StandardEvents["CLICK"] = "click";
    /**The event occurs when an element loses focus */
    StandardEvents["BLUR"] = "blur";
    /**The event occurs when the content of a form element, the selection,
     *  or the checked state have changed (for <input>, <select>, and <textarea>) */
    StandardEvents["CHANGE"] = "change";
    /**The event occurs when the user double-clicks on an element */
    StandardEvents["DBLCLICK"] = "dblclick";
    StandardEvents["CHECKED"] = "checked";
    // ON_OFF_SWITCH = "ON_OFF_SWITCH",
    StandardEvents["SELECTED"] = "selected";
    // HOVER = "HOVER", //Replaced with MOUSE_OVER
    /** occurs when the browser starts to work offline */
    StandardEvents["OFF_LINE"] = "offline";
    /**The event occurs when the browser starts to work online */
    StandardEvents["ON_LINE"] = "online";
    /**occurs when the user navigates away from a webpage */
    StandardEvents["PAGE_HIDE"] = "page_hide";
    /**occurs when the user navigates to a webpage*/
    StandardEvents["PAGE_SHOW"] = "page_show";
    StandardEvents["TOGGLE"] = "toggle";
    StandardEvents["TOGGLE_ON"] = "toggle_on";
    StandardEvents["TOGGLE_OFF"] = "toggle_off";
    // ON_WS_DATA_RECEIEVED = "ON_WS_DATA_RECEIEVED", // Use 'CHANGE' event instead
    StandardEvents["PAGE_PARAMETER"] = "page_parameter";
    StandardEvents["LOAD"] = "load";
    // EMPTINESS = "EMPTINESS", //REMOVED
    /**occurs when the user cuts the content of an element */
    StandardEvents["CUT"] = "cut";
    /**occurs when the user copies the content of an element */
    StandardEvents["COPY"] = "copy";
    /**occurs when the user pastes some content in an element */
    StandardEvents["PASTE"] = "paste";
    /**occurs when the browser is in the process of getting the media data (downloading the media) */
    StandardEvents["PROGRESS"] = "progress";
    /**occurs when app loads */
    StandardEvents["ON_APP_LOAD"] = "on_app_load";
    StandardEvents["IS_ONLINE"] = "is_online";
    StandardEvents["IS_OFFLINE"] = "is_offline";
    StandardEvents["ON_PAGE_LOAD"] = "on_page_load";
    StandardEvents["ON_PAGE_LEAVE"] = "on_page_leave";
    StandardEvents["KEY_PRESS"] = "key_press";
    StandardEvents["INACTIVITY"] = "inactivity";
    StandardEvents["EMPTINESS"] = "emptiness";
    StandardEvents["DATE"] = "date";
    StandardEvents["DATE_TIME"] = "date_time";
    StandardEvents["START_DATE_TIME"] = "start_date_time";
    StandardEvents["END_DATE_TIME"] = "end_date_time";
    StandardEvents["DATE_RANGE"] = "date_range";
    StandardEvents["START_DATE"] = "start_date";
    StandardEvents["END_DATE"] = "end_date";
    StandardEvents["DATE_TIME_RANGE"] = "date_time_range";
    StandardEvents["FORM_FIELD_CHANGE"] = "form_field_change";
    StandardEvents["ICON_SELECT"] = "Select";
    StandardEvents["ICON_DESELECT"] = "Deselect";
    StandardEvents["CLOSE"] = "Close";
    StandardEvents["INPUT"] = "Input";
    StandardEvents["FORM_ADD_SUCCESS"] = "form_save_success";
    StandardEvents["QR_SCAN"] = "Qr Scan";
    StandardEvents["QR_SCAN_VALUE"] = "Qr Scan value";
    StandardEvents["YEAR_MONTH"] = "year_month";
    StandardEvents["RIGHT_CLICK"] = "right_click";
    StandardEvents["SEARCH_ON_INPUT"] = "search_on_input";
    StandardEvents["TRIGGER_DATASOURCE"] = "trigger_datasource";
    StandardEvents["TIME"] = "time";
    StandardEvents["CELL_ITEM_CLICK"] = "cell_Item_click";
    StandardEvents["CURRENT_DATE_TIME"] = "current_date_time";
    StandardEvents["DATASOURCE_EXECUTED"] = "datasource_executed";
    StandardEvents["POLYGON_CHANGE"] = "polygon_change";
    StandardEvents["POLYGON_SAVE"] = "polygon_save";
    StandardEvents["PAYMENT_EXECUTED"] = "payment_executed";
    StandardEvents["CAPTURE_IMAGE"] = "capture_image";
})(StandardEvents || (StandardEvents = {}));
var DesktopEvents;
(function (DesktopEvents) {
    /**occurs when the user presses a mouse button over an element */
    DesktopEvents["MOUSE_DOWN"] = "mouse_down";
    /**occurs when the pointer is moved onto an element */
    DesktopEvents["MOUSE_ENTER"] = "mouse_enter";
    /**occurs when the pointer is moved out of an element */
    DesktopEvents["MOUSE_LEAVE"] = "mouse_leave";
    /**occurs when the pointer is moving while it is over an element */
    DesktopEvents["MOUSE_MOVE"] = "mouse_move";
    /**occurs when the pointer is moved onto an element, or onto one of its children */
    DesktopEvents["MOUSE_OVER"] = "mouse_over";
    /** occurs when a user moves the mouse pointer out of an element, or out of one of its children */
    DesktopEvents["MOUSE_OUT"] = "mouse_out";
    /**occurs when a user releases a mouse button over an element */
    DesktopEvents["MOUSE_UP"] = "mouse_up";
    //reference: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API
    DesktopEvents["GEO_LOCATION"] = "geolocation";
    DesktopEvents["WATCH_GEO_LOCATION"] = "watch_geolocation";
    //ThreeJs
    DesktopEvents["WHEN_NEAR"] = "when_near";
})(DesktopEvents || (DesktopEvents = {}));
class DataSourceParamHandlerEvent {
    static ADD = [StandardEvents.TOGGLE_ON, StandardEvents.ICON_SELECT];
    static REMOVE = [StandardEvents.TOGGLE_OFF, StandardEvents.ICON_DESELECT];
    static validate(event) {
        if (DataSourceParamHandlerEvent.ADD.includes(event))
            return RtSome(true);
        else if (DataSourceParamHandlerEvent.REMOVE.includes(event))
            return RtSome(false);
        else
            return RtNone();
    }
}
var MobileEvents;
(function (MobileEvents) {
    /** occurs when the user clicks on an element */
    MobileEvents["CLICK"] = "click";
    MobileEvents["SELECT"] = "select";
    /** occurs when user taps an element */
    MobileEvents["TAP"] = "tap";
    /** occurs when user double taps an element */
    MobileEvents["DOUBLE_TAP"] = "double_tap";
    /** occurs when user swipes an element to left */
    MobileEvents["SWIPE_LEFT"] = "swipe_left";
    /** occurs when user swipes an element to top */
    MobileEvents["SWIPE_TOP"] = "swipe_top";
    /** occurs when user swipes an element to right */
    MobileEvents["SWIPE_RIGHT"] = "swipe_right";
    /** occurs when user swipes an element to bottom */
    MobileEvents["SWIPE_BOTTOM"] = "swipe_bottom";
    MobileEvents["GEO_LOCATION"] = "GEO_LOCATION";
    MobileEvents["DID_ENTER_REGION"] = "DID_ENTER_REGION";
    MobileEvents["DID_EXIT_REGION"] = "DID_EXIT_REGION";
    MobileEvents["BAR_CODE"] = "BAR_CODE";
    MobileEvents["ON_ACCELERATE"] = "ON_ACCELERATE";
})(MobileEvents || (MobileEvents = {}));
/**
 * use this where sub event matters.
 * Mainly applicable for global producer like GpsService, InActive service
 * where multiple combinations can be constructed (e.g. when[Inactive] for [20 secs] -> perform some action)
 */
class SubEventType {
    id;
    eventProps;
    constructor(id, eventProps) {
        this.id = id;
        this.eventProps = eventProps;
    }
    prop(propertyName) {
        const propertyValue = this.eventProps.get(propertyName);
        if (RtSome(propertyValue))
            return propertyValue;
        else
            throw new Error("subEventType is not defined");
    }
}

var WebStorageEnum;
(function (WebStorageEnum) {
    WebStorageEnum["PREVIOUS_SITE_ID"] = "previousSiteId";
    WebStorageEnum["SITE_ID"] = "siteId";
    WebStorageEnum["SITE_CODE"] = "siteCode";
    WebStorageEnum["APP_CODE"] = "appCode";
    WebStorageEnum["CURRENT_PAGE"] = "currentPage";
    WebStorageEnum["DEFAULT_PAGE"] = "defaultPage";
    WebStorageEnum["PREVIOUS_MODULE_ID"] = "previousModuleId";
    WebStorageEnum["MODULE_ID"] = "ModuleId";
    WebStorageEnum["USER_PROFILE"] = "userProfile";
    WebStorageEnum["API_KEY"] = "apiKey";
    WebStorageEnum["DB_KEY"] = "dbKey";
    WebStorageEnum["LOGGED_IN"] = "logged_in";
    WebStorageEnum["ORG_SETTINGS"] = "orgSettings";
    WebStorageEnum["SITE_DETAILS"] = "siteDetails";
    WebStorageEnum["CURRENT_ORG_TIME"] = "currentOrgTime";
    WebStorageEnum["USER_PERMISSIONS"] = "userPermissions";
    WebStorageEnum["BUILD_VERSION"] = "buildVersion";
    WebStorageEnum["MODULE_DEPLOYMENT"] = "moduleDeployment";
    WebStorageEnum["ENTITY_SCHEMAS"] = "entitySchemas";
    WebStorageEnum["APPLICATION_CONFIG"] = "applicationConfig";
    WebStorageEnum["DB_KEY_PREFIX"] = "rt-db";
    WebStorageEnum["APP_SESSION_STORAGE"] = "APP_SESSION_STORAGE";
    WebStorageEnum["DATA_ENTITY"] = "dataEntityService/getStaticAndDynamicInfo";
    WebStorageEnum["CLIENT_LOGO"] = "client_logo";
    WebStorageEnum["THEME_COLOR"] = "theme_color";
    WebStorageEnum["PARTNER_LOGO"] = "partner_logo";
    WebStorageEnum["CONFIGURATION"] = "configuration";
    WebStorageEnum["IDENTIFIER_TYPE"] = "identifierType";
    WebStorageEnum["ORG_CODE"] = "orgCode";
    WebStorageEnum["ORG_TIME_ZONE"] = "orgTimeZone";
    WebStorageEnum["SITE_TIME_ZONE"] = "siteTimeZone";
    WebStorageEnum["USER_ROLES"] = "roles";
    WebStorageEnum["USER_ROLE_IDS"] = "roleIds";
    WebStorageEnum["USER_ROLE_NAMES"] = "roleNames";
    WebStorageEnum["USER_NAME"] = "userName";
    WebStorageEnum["USER_ACCOUNT_ID"] = "userAccountId";
    WebStorageEnum["PRE_LOGIN_INFO"] = "preLoginInfo";
    WebStorageEnum["HYBRID_USER"] = "HYBRID_USER";
    WebStorageEnum["LOCATION_URL"] = "LOCATION_URL";
    WebStorageEnum["USER_TYPE"] = "USER_TYPE";
    WebStorageEnum["IS_ADMIN"] = "IS_ADMIN";
    WebStorageEnum["IS_APP_ADMIN"] = "IS_APP_ADMIN";
    WebStorageEnum["IS_TRIAL_ADMIN"] = "IS_TRIAL_ADMIN";
    WebStorageEnum["AUTH_INFO"] = "AUTH_INFO";
    WebStorageEnum["SITE_NAME"] = "siteName";
    WebStorageEnum["APP_NAME"] = "appName";
    WebStorageEnum["DEFAULT_USER_POOL"] = "DEFAULT_USER_POOL";
    WebStorageEnum["COOKIE_NAME"] = "apiKey";
    WebStorageEnum["SESSION_STORAGE"] = "SESSION_STORAGE";
    WebStorageEnum["APPLIED_USER_PERMISSION"] = "appliedUserPermission";
    WebStorageEnum["PAGE_NAME"] = "PAGE_NAME";
    WebStorageEnum["HYBRID_USER_ID"] = "hybridUserId";
    WebStorageEnum["LOCATION_ID"] = "locationId";
    WebStorageEnum["SLN_CODE"] = "slnCode";
    WebStorageEnum["RESOLVED_SETTINGS"] = "RESOLVED_SETTINGS";
    WebStorageEnum["PREVIOUS_ROUTE"] = "PREVIOUS_ROUTE";
    WebStorageEnum["MOBILE_IFRAME_KEY"] = "MOBILE_IFRAME_KEY";
    WebStorageEnum["ACCESS_TOKEN"] = "ACCESS_TOKEN";
    WebStorageEnum["UI_VERSION"] = "UI_VERSION";
    WebStorageEnum["API_VERSION"] = "API_VERSION";
    WebStorageEnum["API_DEPLOYED_ON"] = "API_DEPLOYED_ON";
    WebStorageEnum["UI_DEPLOYED_ON"] = "UI_DEPLOYED_ON";
    WebStorageEnum["OFFLINE_DATA_EXPIRY_IN_DAYS"] = "OfflineDataExpiryInDays";
    WebStorageEnum["BLUETOOTH_MAC"] = "bluetoothMac";
    WebStorageEnum["LOG_DETAILS"] = "logDetails";
    WebStorageEnum["USER_JOURNEY_STEP"] = "USER_JOURNEY_STEP";
    WebStorageEnum["LANGUAGE"] = "LANGUAGE";
    WebStorageEnum["LANGUAGES"] = "languages";
    WebStorageEnum["SELECTED_ENTITY"] = "SELECTED_ENTITY";
    WebStorageEnum["UP_SINCE"] = "upSince";
    WebStorageEnum["APP_DETAILS"] = "App Details";
    WebStorageEnum["APP_VERSION"] = "APP_VERSION";
    WebStorageEnum["BE_VERSION"] = "BE_VERSION";
    WebStorageEnum["ARTIFACT_CACHE_DATA"] = "ARTIFACT_CACHE_DATA";
    WebStorageEnum["CURRENT_USER_DETAILS"] = "CURRENT_USER_DETAILS";
    WebStorageEnum["PAGE_SIZE"] = "Page_Size";
    WebStorageEnum["LICENSE_AGREEMENT"] = "LICENSE_AGREEMENT";
})(WebStorageEnum || (WebStorageEnum = {}));

class TxnParams {
    siteCode;
    appCode;
    orgCode;
    includeDisabled;
    auditParams;
    isDCRequest;
    constructor() {
    }
}
var DataypeEnum;
(function (DataypeEnum) {
    DataypeEnum["UNDEFINED"] = "undefined";
})(DataypeEnum || (DataypeEnum = {}));

class ExternalCoreHelper {
    injector;
    constructor(injector) {
        this.injector = injector;
    }
    _SITE_CODE = WindowConstant.getSiteCode();
    _APP_CODE = WindowConstant.getAppCode();
    get storageKey() {
        return `${WebStorageEnum.SESSION_STORAGE}_${this._APP_CODE}_${this._SITE_CODE}`;
    }
    get orgStorageKey() {
        return `${WebStorageEnum.SESSION_STORAGE}`;
    }
    getValueByKey(key) {
        const siteValue = localStorage.getItem(this.storageKey);
        if (siteValue) {
            const siteObj = typeof siteValue === 'string' ? JSON.parse(siteValue) : siteValue;
            if (siteObj && key in siteObj && siteObj[key]) {
                return siteObj[key];
            }
            else {
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }
    getCognitoToken() {
        return this.getValueByKey(WebStorageEnum.LOCATION_URL);
    }
    getIsAdmin() {
        return this.getValueByKey(WebStorageEnum.IS_ADMIN) || false;
    }
    getIsAppAdmin() {
        return this.getValueByKey(WebStorageEnum.IS_APP_ADMIN);
    }
    getApplicationConfig() {
        return this.getValueByKey(WebStorageEnum.APPLICATION_CONFIG);
    }
    getCurrentOrgTime() {
        return this.getValueByKey(WebStorageEnum.CURRENT_ORG_TIME);
    }
    getModuleId() {
        return this.getValueByKey(WebStorageEnum.MODULE_ID) ? JSON.parse(this.getValueByKey(WebStorageEnum.MODULE_ID)) : undefined;
    }
    getSiteId() {
        return this.getValueByKey(WebStorageEnum.SITE_ID) ? JSON.parse(this.getValueByKey(WebStorageEnum.SITE_ID)) : undefined;
    }
    getSiteCode() {
        if (this._SITE_CODE) {
            return this._SITE_CODE;
        }
        return this.getValueByKey(WebStorageEnum.SITE_CODE) ? JSON.parse(this.getValueByKey(WebStorageEnum.SITE_CODE)) : undefined;
    }
    getApiKey() {
        const cookie = document.cookie.match(new RegExp('(^| )' + WebStorageEnum.COOKIE_NAME + '=([^;]+)'));
        const localStorageKey = localStorage.getItem(WebStorageEnum.COOKIE_NAME);
        if (cookie && cookie[2] != '') {
            return cookie[2];
        }
        else if (!cookie && localStorageKey) {
            // electron not supporting cookies. so used localstorage instead.
            return localStorageKey;
        }
        else {
            return null;
        }
    }
    getLogInInfo() {
        return this.getValueByKey(WebStorageEnum.LOGGED_IN);
    }
    getAppCode() {
        if (this._APP_CODE) {
            return this._APP_CODE;
        }
        return this.getValueByKey(WebStorageEnum.APP_CODE);
    }
    getOrgCode() {
        return this.getValueByOrgKey(WebStorageEnum.ORG_CODE);
    }
    getValueByOrgKey(key) {
        const siteValue = localStorage.getItem(this.orgStorageKey);
        if (siteValue) {
            try {
                const siteObj = typeof siteValue === 'string' ? JSON.parse(siteValue) : siteValue;
                if (siteObj && key in siteObj && siteObj[key]) {
                    return siteObj[key];
                }
                else {
                    return undefined;
                }
            }
            catch {
                console.error('Error while parsing org storage key', siteValue);
                return undefined;
            }
        }
        else {
            return undefined;
        }
    }
}
class WindowConstant {
    static DATA = 'name';
    static APP_CODE = 'appCode';
    static SITE_CODE = 'siteCode';
    static POPUP = 'popup';
    static setAppCode(appCode) {
        if (window[this.DATA]) {
            const codes = window[this.DATA] != WindowConstant.POPUP ? window[this.DATA].split('_') : undefined;
            window[this.DATA] = `${appCode}_${codes[1]}`;
        }
        else {
            window[this.DATA] = `${appCode}_`;
        }
    }
    static setSiteCode(siteCode) {
        if (window[this.DATA]) {
            const codes = window[this.DATA].split('_');
            window[this.DATA] = `${codes[0]}_${siteCode}`;
        }
        else {
            window[this.DATA] = `_${siteCode}`;
        }
    }
    /**
     * Sets the app code and site code in the window object.
     * @param appCode - The app code to set.
     * @param siteCode - The site code to set.
     */
    static setAppAndSiteCode(appCode, siteCode) {
        window[this.DATA] = `${appCode}_${siteCode}`;
    }
    static getAppAndSiteCode() {
        const codes = window[this.DATA].split('_');
        return {
            appCode: codes[0],
            siteCode: codes[1]
        };
    }
    static getAppCode() {
        const appCode = window[this.DATA]?.split('_')[0];
        if (appCode === DataypeEnum.UNDEFINED || !appCode || window[this.DATA] == WindowConstant.POPUP) {
            return undefined;
        }
        else {
            return appCode;
        }
    }
    static getSiteCode() {
        return window[this.DATA]?.split('_')[1] || undefined;
    }
}

/**
 * Generated bundle index. Do not edit.
 */

export { AttributeInstance, AttributeInstanceHolder, ControlInstanceWrapper, ControlPropertyDefinitionValue, DataSourceParamHandlerEvent, DesktopEvents, DsResult, DsResultBuilder, DsResultValue$1 as DsResultValue, ExternalCoreHelper, ExternalCoreSimpleAngularControlInfo, LogService, MobileEvents, RtNone, RtOption, StandardEvents, SubEventType, UsableAttributeValue };
//# sourceMappingURL=external-den-core.mjs.map
