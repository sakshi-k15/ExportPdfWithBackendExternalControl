import { Subject } from "rxjs";
import * as i0 from "@angular/core";
export declare class DevumEventHandler {
    eventId: string;
    version: string;
    datetime: string;
    tags: string[];
    isReported: boolean;
    clickupUrl: string;
    contexts: {
        os?: {
            name: string;
            version: string;
        };
        browser: {
            name: string;
            version: string;
        };
        trace?: {
            trace_id: string;
            status: string;
            type: string;
        };
    };
    environment: string;
    breadcrumbs: {
        type: string;
        level: string;
        category: string;
        message: string;
        timestamp: string;
        data: LogData;
    };
    exception: {
        values: [
            {
                type: string;
                value: string;
                stacktrace: {
                    frames: [
                        {
                            filename: string;
                            lineno: number;
                            colno: number;
                            rawStacktrace: string;
                        }
                    ];
                };
            }
        ];
        level: string;
        location: string;
        logger: string;
    };
    title: string;
    user: {
        id: string;
        userName: string;
        ipAddress: string;
        emailId: string;
        geo: {
            countryCode: string;
            region: string;
            city: string;
        };
    };
    constructor();
    private getBrowserName;
    private getBrowserVersion;
    private isMobile;
}
export declare class ClientGeoLog {
    city: string;
    region: string;
    regionCode: string;
    regionName: string;
    countryCode: string;
    countryName: string;
    continentCode: string;
    continentName: string;
    latitude: number;
    longitude: number;
    timezone: string;
    currencyCode: string;
    currencySymbol: string;
    currencyConverter: number;
    constructor();
}
export declare class LogData {
    instanceId: string;
    pageName: string;
    dsName?: string;
    pageNumber?: number;
    pageSize?: number;
    errorCode?: string;
    constructor(instanceId: string, pageName: string, dsName?: string, pageNumber?: number, pageSize?: number, errorCode?: string);
}
export declare class LogService {
    logSubscription: Subject<any>;
    logRegistry: Map<string, any[]>;
    clientGeoParams: any;
    constructor();
    getLogSubscriptionAsObservable(): import("rxjs").Observable<any>;
    register(info: any): this;
    log(message: string, stack: string, category?: string, data?: LogData): void;
    warn(message: string, stack: string, category?: string, data?: LogData): void;
    private report;
    error(message: string, stack: string, category?: string, data?: LogData): void;
    info(message: string): void;
    getBrowserName(): string;
    getBrowserVersion(): any;
    isMobile(): boolean;
    getUserRegion(): void;
    getFileDetails(stack: string): {
        message: string;
        filePath: string;
        lineno: string;
        colno: string;
    };
    static ɵfac: i0.ɵɵFactoryDeclaration<LogService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<LogService>;
}
