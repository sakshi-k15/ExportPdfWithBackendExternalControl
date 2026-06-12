import { RtOption } from "./ds-result-value";
export declare enum StandardEvents {
    /** occurs when the user clicks on an element */
    CLICK = "click",
    /**The event occurs when an element loses focus */
    BLUR = "blur",
    /**The event occurs when the content of a form element, the selection,
     *  or the checked state have changed (for <input>, <select>, and <textarea>) */
    CHANGE = "change",
    /**The event occurs when the user double-clicks on an element */
    DBLCLICK = "dblclick",
    CHECKED = "checked",
    SELECTED = "selected",
    /** occurs when the browser starts to work offline */
    OFF_LINE = "offline",
    /**The event occurs when the browser starts to work online */
    ON_LINE = "online",
    /**occurs when the user navigates away from a webpage */
    PAGE_HIDE = "page_hide",
    /**occurs when the user navigates to a webpage*/
    PAGE_SHOW = "page_show",
    TOGGLE = "toggle",
    TOGGLE_ON = "toggle_on",
    TOGGLE_OFF = "toggle_off",
    PAGE_PARAMETER = "page_parameter",
    LOAD = "load",
    /**occurs when the user cuts the content of an element */
    CUT = "cut",
    /**occurs when the user copies the content of an element */
    COPY = "copy",
    /**occurs when the user pastes some content in an element */
    PASTE = "paste",
    /**occurs when the browser is in the process of getting the media data (downloading the media) */
    PROGRESS = "progress",
    /**occurs when app loads */
    ON_APP_LOAD = "on_app_load",
    IS_ONLINE = "is_online",
    IS_OFFLINE = "is_offline",
    ON_PAGE_LOAD = "on_page_load",
    ON_PAGE_LEAVE = "on_page_leave",
    KEY_PRESS = "key_press",
    INACTIVITY = "inactivity",
    EMPTINESS = "emptiness",
    DATE = "date",
    DATE_TIME = "date_time",
    START_DATE_TIME = "start_date_time",
    END_DATE_TIME = "end_date_time",
    DATE_RANGE = "date_range",
    START_DATE = "start_date",
    END_DATE = "end_date",
    DATE_TIME_RANGE = "date_time_range",
    FORM_FIELD_CHANGE = "form_field_change",
    ICON_SELECT = "Select",
    ICON_DESELECT = "Deselect",
    CLOSE = "Close",
    INPUT = "Input",
    FORM_ADD_SUCCESS = "form_save_success",
    QR_SCAN = "Qr Scan",
    QR_SCAN_VALUE = "Qr Scan value",
    YEAR_MONTH = "year_month",
    RIGHT_CLICK = "right_click",
    SEARCH_ON_INPUT = "search_on_input",
    TRIGGER_DATASOURCE = "trigger_datasource",
    TIME = "time",
    CELL_ITEM_CLICK = "cell_Item_click",
    CURRENT_DATE_TIME = "current_date_time",
    DATASOURCE_EXECUTED = "datasource_executed",
    POLYGON_CHANGE = "polygon_change",
    POLYGON_SAVE = "polygon_save",
    PAYMENT_EXECUTED = "payment_executed",
    CAPTURE_IMAGE = "capture_image"
}
export declare enum DesktopEvents {
    /**occurs when the user presses a mouse button over an element */
    MOUSE_DOWN = "mouse_down",
    /**occurs when the pointer is moved onto an element */
    MOUSE_ENTER = "mouse_enter",
    /**occurs when the pointer is moved out of an element */
    MOUSE_LEAVE = "mouse_leave",
    /**occurs when the pointer is moving while it is over an element */
    MOUSE_MOVE = "mouse_move",
    /**occurs when the pointer is moved onto an element, or onto one of its children */
    MOUSE_OVER = "mouse_over",
    /** occurs when a user moves the mouse pointer out of an element, or out of one of its children */
    MOUSE_OUT = "mouse_out",
    /**occurs when a user releases a mouse button over an element */
    MOUSE_UP = "mouse_up",
    GEO_LOCATION = "geolocation",
    WATCH_GEO_LOCATION = "watch_geolocation",
    WHEN_NEAR = "when_near"
}
export declare class DataSourceParamHandlerEvent {
    static ADD: CommonEventType[];
    static REMOVE: CommonEventType[];
    static validate(event: CommonEventType): RtOption<boolean>;
}
export declare enum MobileEvents {
    /** occurs when the user clicks on an element */
    CLICK = "click",
    SELECT = "select",
    /** occurs when user taps an element */
    TAP = "tap",
    /** occurs when user double taps an element */
    DOUBLE_TAP = "double_tap",
    /** occurs when user swipes an element to left */
    SWIPE_LEFT = "swipe_left",
    /** occurs when user swipes an element to top */
    SWIPE_TOP = "swipe_top",
    /** occurs when user swipes an element to right */
    SWIPE_RIGHT = "swipe_right",
    /** occurs when user swipes an element to bottom */
    SWIPE_BOTTOM = "swipe_bottom",
    GEO_LOCATION = "GEO_LOCATION",
    DID_ENTER_REGION = "DID_ENTER_REGION",
    DID_EXIT_REGION = "DID_EXIT_REGION",
    BAR_CODE = "BAR_CODE",
    ON_ACCELERATE = "ON_ACCELERATE"
}
export type CommonEventType = StandardEvents | DesktopEvents | MobileEvents;
/**
 * use this where sub event matters.
 * Mainly applicable for global producer like GpsService, InActive service
 * where multiple combinations can be constructed (e.g. when[Inactive] for [20 secs] -> perform some action)
 */
export declare class SubEventType {
    id: string;
    eventProps: Map<string, any>;
    constructor(id: string, eventProps: Map<string, any>);
    prop<T>(propertyName: string): T;
}
export type EventActionGroupUniqueKey = {
    key: string;
};
