import { Injector } from "@angular/core";
export declare class ExternalCoreHelper {
    injector: Injector;
    constructor(injector: Injector);
    private _SITE_CODE;
    private _APP_CODE;
    private get storageKey();
    private get orgStorageKey();
    private getValueByKey;
    getCognitoToken(): string;
    getIsAdmin(): boolean;
    getIsAppAdmin(): boolean;
    getApplicationConfig(): string;
    getCurrentOrgTime(): string;
    getModuleId(): number | undefined;
    getSiteId(): string;
    getSiteCode(): string;
    getApiKey(): string;
    getLogInInfo(): boolean;
    getAppCode(): any;
    getOrgCode(): any;
    private getValueByOrgKey;
}
export declare class WindowConstant {
    static DATA: string;
    static APP_CODE: string;
    static SITE_CODE: string;
    static POPUP: string;
    static setAppCode(appCode: string): void;
    static setSiteCode(siteCode: string): void;
    /**
     * Sets the app code and site code in the window object.
     * @param appCode - The app code to set.
     * @param siteCode - The site code to set.
     */
    static setAppAndSiteCode(appCode: string, siteCode: string): void;
    static getAppAndSiteCode(): {
        appCode: any;
        siteCode: any;
    };
    static getAppCode(): any;
    static getSiteCode(): any;
}
