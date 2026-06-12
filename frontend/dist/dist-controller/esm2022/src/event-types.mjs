import { RtNone, RtSome } from "./ds-result-value";
export var StandardEvents;
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
export var DesktopEvents;
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
export class DataSourceParamHandlerEvent {
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
export var MobileEvents;
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
export class SubEventType {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXZlbnQtdHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvZXZlbnQtdHlwZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE1BQU0sRUFBWSxNQUFNLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUc3RCxNQUFNLENBQU4sSUFBWSxjQXdGWDtBQXhGRCxXQUFZLGNBQWM7SUFDdEIsZ0RBQWdEO0lBQ2hELGlDQUFlLENBQUE7SUFDZixrREFBa0Q7SUFDbEQsK0JBQWEsQ0FBQTtJQUNiO29GQUNnRjtJQUNoRixtQ0FBaUIsQ0FBQTtJQUNqQixnRUFBZ0U7SUFDaEUsdUNBQXFCLENBQUE7SUFDckIscUNBQW1CLENBQUE7SUFDbkIsbUNBQW1DO0lBQ25DLHVDQUFxQixDQUFBO0lBQ3JCLDhDQUE4QztJQUM5QyxxREFBcUQ7SUFDckQsc0NBQW9CLENBQUE7SUFDcEIsNkRBQTZEO0lBQzdELG9DQUFrQixDQUFBO0lBRWxCLHdEQUF3RDtJQUN4RCx5Q0FBdUIsQ0FBQTtJQUV2QixnREFBZ0Q7SUFDaEQseUNBQXVCLENBQUE7SUFFdkIsbUNBQWlCLENBQUE7SUFFakIseUNBQXVCLENBQUE7SUFDdkIsMkNBQXlCLENBQUE7SUFFekIsK0VBQStFO0lBQy9FLG1EQUFpQyxDQUFBO0lBQ2pDLCtCQUFhLENBQUE7SUFDYixxQ0FBcUM7SUFDckMseURBQXlEO0lBQ3pELDZCQUFXLENBQUE7SUFDWCwyREFBMkQ7SUFDM0QsK0JBQWEsQ0FBQTtJQUNiLDREQUE0RDtJQUM1RCxpQ0FBZSxDQUFBO0lBRWYsaUdBQWlHO0lBQ2pHLHVDQUFxQixDQUFBO0lBRXJCLDJCQUEyQjtJQUMzQiw2Q0FBMkIsQ0FBQTtJQUMzQix5Q0FBdUIsQ0FBQTtJQUN2QiwyQ0FBeUIsQ0FBQTtJQUV6QiwrQ0FBNkIsQ0FBQTtJQUU3QixpREFBK0IsQ0FBQTtJQUUvQix5Q0FBdUIsQ0FBQTtJQUV2QiwyQ0FBeUIsQ0FBQTtJQUV6Qix5Q0FB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QixFQUFVLEVBQVMsVUFBNEI7UUFBL0MsT0FBRSxHQUFGLEVBQUUsQ0FBUTtRQUFTLGVBQVUsR0FBVixVQUFVLENBQWtCO0lBQUksQ0FBQztJQUV2RSxJQUFJLENBQUksWUFBb0I7UUFDeEIsTUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7UUFDdkQsSUFBSSxNQUFNLENBQUMsYUFBYSxDQUFDO1lBQ3JCLE9BQVUsYUFBYSxDQUFBOztZQUV2QixNQUFNLElBQUksS0FBSyxDQUFDLDZCQUE2QixDQUFDLENBQUM7SUFDdkQsQ0FBQztDQUNKIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUnROb25lLCBSdE9wdGlvbiwgUnRTb21lIH0gZnJvbSBcIi4vZHMtcmVzdWx0LXZhbHVlXCI7XHJcblxyXG5cclxuZXhwb3J0IGVudW0gU3RhbmRhcmRFdmVudHMge1xyXG4gICAgLyoqIG9jY3VycyB3aGVuIHRoZSB1c2VyIGNsaWNrcyBvbiBhbiBlbGVtZW50ICovXHJcbiAgICBDTElDSyA9IFwiY2xpY2tcIixcclxuICAgIC8qKlRoZSBldmVudCBvY2N1cnMgd2hlbiBhbiBlbGVtZW50IGxvc2VzIGZvY3VzICovXHJcbiAgICBCTFVSID0gXCJibHVyXCIsXHJcbiAgICAvKipUaGUgZXZlbnQgb2NjdXJzIHdoZW4gdGhlIGNvbnRlbnQgb2YgYSBmb3JtIGVsZW1lbnQsIHRoZSBzZWxlY3Rpb24sXHJcbiAgICAgKiAgb3IgdGhlIGNoZWNrZWQgc3RhdGUgaGF2ZSBjaGFuZ2VkIChmb3IgPGlucHV0PiwgPHNlbGVjdD4sIGFuZCA8dGV4dGFyZWE+KSAqL1xyXG4gICAgQ0hBTkdFID0gXCJjaGFuZ2VcIixcclxuICAgIC8qKlRoZSBldmVudCBvY2N1cnMgd2hlbiB0aGUgdXNlciBkb3VibGUtY2xpY2tzIG9uIGFuIGVsZW1lbnQgKi9cclxuICAgIERCTENMSUNLID0gXCJkYmxjbGlja1wiLFxyXG4gICAgQ0hFQ0tFRCA9IFwiY2hlY2tlZFwiLFxyXG4gICAgLy8gT05fT0ZGX1NXSVRDSCA9IFwiT05fT0ZGX1NXSVRDSFwiLFxyXG4gICAgU0VMRUNURUQgPSBcInNlbGVjdGVkXCIsXHJcbiAgICAvLyBIT1ZFUiA9IFwiSE9WRVJcIiwgLy9SZXBsYWNlZCB3aXRoIE1PVVNFX09WRVJcclxuICAgIC8qKiBvY2N1cnMgd2hlbiB0aGUgYnJvd3NlciBzdGFydHMgdG8gd29yayBvZmZsaW5lICovXHJcbiAgICBPRkZfTElORSA9IFwib2ZmbGluZVwiLFxyXG4gICAgLyoqVGhlIGV2ZW50IG9jY3VycyB3aGVuIHRoZSBicm93c2VyIHN0YXJ0cyB0byB3b3JrIG9ubGluZSAqL1xyXG4gICAgT05fTElORSA9IFwib25saW5lXCIsXHJcblxyXG4gICAgLyoqb2NjdXJzIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIGF3YXkgZnJvbSBhIHdlYnBhZ2UgKi9cclxuICAgIFBBR0VfSElERSA9IFwicGFnZV9oaWRlXCIsXHJcblxyXG4gICAgLyoqb2NjdXJzIHdoZW4gdGhlIHVzZXIgbmF2aWdhdGVzIHRvIGEgd2VicGFnZSovXHJcbiAgICBQQUdFX1NIT1cgPSBcInBhZ2Vfc2hvd1wiLFxyXG5cclxuICAgIFRPR0dMRSA9IFwidG9nZ2xlXCIsXHJcblxyXG4gICAgVE9HR0xFX09OID0gXCJ0b2dnbGVfb25cIixcclxuICAgIFRPR0dMRV9PRkYgPSBcInRvZ2dsZV9vZmZcIixcclxuXHJcbiAgICAvLyBPTl9XU19EQVRBX1JFQ0VJRVZFRCA9IFwiT05fV1NfREFUQV9SRUNFSUVWRURcIiwgLy8gVXNlICdDSEFOR0UnIGV2ZW50IGluc3RlYWRcclxuICAgIFBBR0VfUEFSQU1FVEVSID0gXCJwYWdlX3BhcmFtZXRlclwiLFxyXG4gICAgTE9BRCA9IFwibG9hZFwiLFxyXG4gICAgLy8gRU1QVElORVNTID0gXCJFTVBUSU5FU1NcIiwgLy9SRU1PVkVEXHJcbiAgICAvKipvY2N1cnMgd2hlbiB0aGUgdXNlciBjdXRzIHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgKi9cclxuICAgIENVVCA9ICdjdXQnLFxyXG4gICAgLyoqb2NjdXJzIHdoZW4gdGhlIHVzZXIgY29waWVzIHRoZSBjb250ZW50IG9mIGFuIGVsZW1lbnQgKi9cclxuICAgIENPUFkgPSBcImNvcHlcIixcclxuICAgIC8qKm9jY3VycyB3aGVuIHRoZSB1c2VyIHBhc3RlcyBzb21lIGNvbnRlbnQgaW4gYW4gZWxlbWVudCAqL1xyXG4gICAgUEFTVEUgPSBcInBhc3RlXCIsXHJcblxyXG4gICAgLyoqb2NjdXJzIHdoZW4gdGhlIGJyb3dzZXIgaXMgaW4gdGhlIHByb2Nlc3Mgb2YgZ2V0dGluZyB0aGUgbWVkaWEgZGF0YSAoZG93bmxvYWRpbmcgdGhlIG1lZGlhKSAqL1xyXG4gICAgUFJPR1JFU1MgPSBcInByb2dyZXNzXCIsXHJcblxyXG4gICAgLyoqb2NjdXJzIHdoZW4gYXBwIGxvYWRzICovXHJcbiAgICBPTl9BUFBfTE9BRCA9IFwib25fYXBwX2xvYWRcIixcclxuICAgIElTX09OTElORSA9IFwiaXNfb25saW5lXCIsXHJcbiAgICBJU19PRkZMSU5FID0gXCJpc19vZmZsaW5lXCIsXHJcblxyXG4gICAgT05fUEFHRV9MT0FEID0gXCJvbl9wYWdlX2xvYWRcIixcclxuXHJcbiAgICBPTl9QQUdFX0xFQVZFID0gXCJvbl9wYWdlX2xlYXZlXCIsXHJcblxyXG4gICAgS0VZX1BSRVNTID0gXCJrZXlfcHJlc3NcIixcclxuXHJcbiAgICBJTkFDVElWSVRZID0gXCJpbmFjdGl2aXR5XCIsXHJcblxyXG4gICAgRU1QVElORVNTID0gXCJlbXB0aW5lc3NcIixcclxuICAgIERBVEUgPSBcImRhdGVcIixcclxuICAgIERBVEVfVElNRSA9IFwiZGF0ZV90aW1lXCIsXHJcbiAgICBTVEFSVF9EQVRFX1RJTUUgPSBcInN0YXJ0X2RhdGVfdGltZVwiLFxyXG4gICAgRU5EX0RBVEVfVElNRSA9IFwiZW5kX2RhdGVfdGltZVwiLFxyXG4gICAgREFURV9SQU5HRSA9IFwiZGF0ZV9yYW5nZVwiLFxyXG4gICAgU1RBUlRfREFURSA9IFwic3RhcnRfZGF0ZVwiLFxyXG4gICAgRU5EX0RBVEUgPSBcImVuZF9kYXRlXCIsXHJcbiAgICBEQVRFX1RJTUVfUkFOR0UgPSBcImRhdGVfdGltZV9yYW5nZVwiLFxyXG4gICAgRk9STV9GSUVMRF9DSEFOR0UgPSAnZm9ybV9maWVsZF9jaGFuZ2UnLFxyXG4gICAgSUNPTl9TRUxFQ1QgPSBcIlNlbGVjdFwiLFxyXG4gICAgSUNPTl9ERVNFTEVDVCA9IFwiRGVzZWxlY3RcIixcclxuICAgIENMT1NFID0gXCJDbG9zZVwiLFxyXG4gICAgSU5QVVQgPSBcIklucHV0XCIsXHJcbiAgICBGT1JNX0FERF9TVUNDRVNTID0gXCJmb3JtX3NhdmVfc3VjY2Vzc1wiLFxyXG4gICAgUVJfU0NBTiA9IFwiUXIgU2NhblwiLFxyXG4gICAgUVJfU0NBTl9WQUxVRSA9IFwiUXIgU2NhbiB2YWx1ZVwiLFxyXG4gICAgWUVBUl9NT05USCA9IFwieWVhcl9tb250aFwiLFxyXG4gICAgUklHSFRfQ0xJQ0sgPSAncmlnaHRfY2xpY2snLFxyXG4gICAgU0VBUkNIX09OX0lOUFVUID0gXCJzZWFyY2hfb25faW5wdXRcIixcclxuICAgIFRSSUdHRVJfREFUQVNPVVJDRSA9IFwidHJpZ2dlcl9kYXRhc291cmNlXCIsXHJcbiAgICBUSU1FID0gXCJ0aW1lXCIsXHJcbiAgICBDRUxMX0lURU1fQ0xJQ0sgPSBcImNlbGxfSXRlbV9jbGlja1wiLFxyXG4gICAgQ1VSUkVOVF9EQVRFX1RJTUUgPSBcImN1cnJlbnRfZGF0ZV90aW1lXCIsXHJcbiAgICBEQVRBU09VUkNFX0VYRUNVVEVEID0gXCJkYXRhc291cmNlX2V4ZWN1dGVkXCIsXHJcbiAgICBQT0xZR09OX0NIQU5HRSA9IFwicG9seWdvbl9jaGFuZ2VcIixcclxuICAgIFBPTFlHT05fU0FWRSA9IFwicG9seWdvbl9zYXZlXCIsXHJcbiAgICBQQVlNRU5UX0VYRUNVVEVEID0gXCJwYXltZW50X2V4ZWN1dGVkXCIsXHJcbiAgICBDQVBUVVJFX0lNQUdFID0gXCJjYXB0dXJlX2ltYWdlXCIsXHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGVudW0gRGVza3RvcEV2ZW50cyB7XHJcbiAgICAvKipvY2N1cnMgd2hlbiB0aGUgdXNlciBwcmVzc2VzIGEgbW91c2UgYnV0dG9uIG92ZXIgYW4gZWxlbWVudCAqL1xyXG4gICAgTU9VU0VfRE9XTiA9IFwibW91c2VfZG93blwiLFxyXG4gICAgLyoqb2NjdXJzIHdoZW4gdGhlIHBvaW50ZXIgaXMgbW92ZWQgb250byBhbiBlbGVtZW50ICovXHJcbiAgICBNT1VTRV9FTlRFUiA9IFwibW91c2VfZW50ZXJcIixcclxuICAgIC8qKm9jY3VycyB3aGVuIHRoZSBwb2ludGVyIGlzIG1vdmVkIG91dCBvZiBhbiBlbGVtZW50ICovXHJcbiAgICBNT1VTRV9MRUFWRSA9IFwibW91c2VfbGVhdmVcIixcclxuICAgIC8qKm9jY3VycyB3aGVuIHRoZSBwb2ludGVyIGlzIG1vdmluZyB3aGlsZSBpdCBpcyBvdmVyIGFuIGVsZW1lbnQgKi9cclxuICAgIE1PVVNFX01PVkUgPSBcIm1vdXNlX21vdmVcIixcclxuICAgIC8qKm9jY3VycyB3aGVuIHRoZSBwb2ludGVyIGlzIG1vdmVkIG9udG8gYW4gZWxlbWVudCwgb3Igb250byBvbmUgb2YgaXRzIGNoaWxkcmVuICovXHJcbiAgICBNT1VTRV9PVkVSID0gXCJtb3VzZV9vdmVyXCIsXHJcbiAgICAvKiogb2NjdXJzIHdoZW4gYSB1c2VyIG1vdmVzIHRoZSBtb3VzZSBwb2ludGVyIG91dCBvZiBhbiBlbGVtZW50LCBvciBvdXQgb2Ygb25lIG9mIGl0cyBjaGlsZHJlbiAqL1xyXG4gICAgTU9VU0VfT1VUID0gXCJtb3VzZV9vdXRcIixcclxuICAgIC8qKm9jY3VycyB3aGVuIGEgdXNlciByZWxlYXNlcyBhIG1vdXNlIGJ1dHRvbiBvdmVyIGFuIGVsZW1lbnQgKi9cclxuICAgIE1PVVNFX1VQID0gXCJtb3VzZV91cFwiLFxyXG5cclxuICAgIC8vcmVmZXJlbmNlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvR2VvbG9jYXRpb25fQVBJL1VzaW5nX3RoZV9HZW9sb2NhdGlvbl9BUElcclxuICAgIEdFT19MT0NBVElPTiA9IFwiZ2VvbG9jYXRpb25cIixcclxuXHJcbiAgICBXQVRDSF9HRU9fTE9DQVRJT04gPSBcIndhdGNoX2dlb2xvY2F0aW9uXCIsXHJcblxyXG4gICAgLy9UaHJlZUpzXHJcbiAgICBXSEVOX05FQVIgPSBcIndoZW5fbmVhclwiLFxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERhdGFTb3VyY2VQYXJhbUhhbmRsZXJFdmVudCB7XHJcbiAgICBzdGF0aWMgQUREOiBDb21tb25FdmVudFR5cGVbXSA9IFtTdGFuZGFyZEV2ZW50cy5UT0dHTEVfT04sIFN0YW5kYXJkRXZlbnRzLklDT05fU0VMRUNUXTtcclxuICAgIHN0YXRpYyBSRU1PVkU6IENvbW1vbkV2ZW50VHlwZVtdID0gW1N0YW5kYXJkRXZlbnRzLlRPR0dMRV9PRkYsIFN0YW5kYXJkRXZlbnRzLklDT05fREVTRUxFQ1RdO1xyXG5cclxuICAgIHN0YXRpYyB2YWxpZGF0ZShldmVudDogQ29tbW9uRXZlbnRUeXBlKTogUnRPcHRpb248Ym9vbGVhbj4ge1xyXG4gICAgICAgIGlmIChEYXRhU291cmNlUGFyYW1IYW5kbGVyRXZlbnQuQURELmluY2x1ZGVzKGV2ZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFJ0U29tZSh0cnVlKTtcclxuICAgICAgICBlbHNlIGlmIChEYXRhU291cmNlUGFyYW1IYW5kbGVyRXZlbnQuUkVNT1ZFLmluY2x1ZGVzKGV2ZW50KSlcclxuICAgICAgICAgICAgcmV0dXJuIFJ0U29tZShmYWxzZSk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICByZXR1cm4gUnROb25lKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbmV4cG9ydCBlbnVtIE1vYmlsZUV2ZW50cyB7XHJcbiAgICAvKiogb2NjdXJzIHdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIGFuIGVsZW1lbnQgKi9cclxuICAgIENMSUNLID0gXCJjbGlja1wiLFxyXG5cclxuICAgIFNFTEVDVCA9IFwic2VsZWN0XCIsXHJcblxyXG4gICAgLyoqIG9jY3VycyB3aGVuIHVzZXIgdGFwcyBhbiBlbGVtZW50ICovXHJcbiAgICBUQVAgPSBcInRhcFwiLFxyXG5cclxuICAgIC8qKiBvY2N1cnMgd2hlbiB1c2VyIGRvdWJsZSB0YXBzIGFuIGVsZW1lbnQgKi9cclxuICAgIERPVUJMRV9UQVAgPSBcImRvdWJsZV90YXBcIixcclxuICAgIC8qKiBvY2N1cnMgd2hlbiB1c2VyIHN3aXBlcyBhbiBlbGVtZW50IHRvIGxlZnQgKi9cclxuICAgIFNXSVBFX0xFRlQgPSBcInN3aXBlX2xlZnRcIixcclxuICAgIC8qKiBvY2N1cnMgd2hlbiB1c2VyIHN3aXBlcyBhbiBlbGVtZW50IHRvIHRvcCAqL1xyXG4gICAgU1dJUEVfVE9QID0gXCJzd2lwZV90b3BcIixcclxuICAgIC8qKiBvY2N1cnMgd2hlbiB1c2VyIHN3aXBlcyBhbiBlbGVtZW50IHRvIHJpZ2h0ICovXHJcbiAgICBTV0lQRV9SSUdIVCA9IFwic3dpcGVfcmlnaHRcIixcclxuICAgIC8qKiBvY2N1cnMgd2hlbiB1c2VyIHN3aXBlcyBhbiBlbGVtZW50IHRvIGJvdHRvbSAqL1xyXG4gICAgU1dJUEVfQk9UVE9NID0gXCJzd2lwZV9ib3R0b21cIixcclxuXHJcbiAgICBHRU9fTE9DQVRJT04gPSBcIkdFT19MT0NBVElPTlwiLFxyXG4gICAgRElEX0VOVEVSX1JFR0lPTiA9IFwiRElEX0VOVEVSX1JFR0lPTlwiLFxyXG4gICAgRElEX0VYSVRfUkVHSU9OID0gXCJESURfRVhJVF9SRUdJT05cIixcclxuICAgIEJBUl9DT0RFID0gXCJCQVJfQ09ERVwiLFxyXG4gICAgT05fQUNDRUxFUkFURSA9IFwiT05fQUNDRUxFUkFURVwiXHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIENvbW1vbkV2ZW50VHlwZSA9IFN0YW5kYXJkRXZlbnRzIHwgRGVza3RvcEV2ZW50cyB8IE1vYmlsZUV2ZW50c1xyXG5cclxuLyoqXHJcbiAqIHVzZSB0aGlzIHdoZXJlIHN1YiBldmVudCBtYXR0ZXJzLlxyXG4gKiBNYWlubHkgYXBwbGljYWJsZSBmb3IgZ2xvYmFsIHByb2R1Y2VyIGxpa2UgR3BzU2VydmljZSwgSW5BY3RpdmUgc2VydmljZVxyXG4gKiB3aGVyZSBtdWx0aXBsZSBjb21iaW5hdGlvbnMgY2FuIGJlIGNvbnN0cnVjdGVkIChlLmcuIHdoZW5bSW5hY3RpdmVdIGZvciBbMjAgc2Vjc10gLT4gcGVyZm9ybSBzb21lIGFjdGlvbilcclxuICovXHJcbmV4cG9ydCBjbGFzcyBTdWJFdmVudFR5cGUge1xyXG4gICAgY29uc3RydWN0b3IocHVibGljIGlkOiBzdHJpbmcsIHB1YmxpYyBldmVudFByb3BzOiBNYXA8c3RyaW5nLCBhbnk+KSB7IH1cclxuXHJcbiAgICBwcm9wPFQ+KHByb3BlcnR5TmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydHlWYWx1ZSA9IHRoaXMuZXZlbnRQcm9wcy5nZXQocHJvcGVydHlOYW1lKVxyXG4gICAgICAgIGlmIChSdFNvbWUocHJvcGVydHlWYWx1ZSkpXHJcbiAgICAgICAgICAgIHJldHVybiA8VD5wcm9wZXJ0eVZhbHVlXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzdWJFdmVudFR5cGUgaXMgbm90IGRlZmluZWRcIik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIEV2ZW50QWN0aW9uR3JvdXBVbmlxdWVLZXkgPSB7IGtleTogc3RyaW5nIH1cclxuXHJcbiJdfQ==