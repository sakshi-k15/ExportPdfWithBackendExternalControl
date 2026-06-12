export class AttributeInstance {
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
export class AttributeInstanceHolder {
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
export class UsableAttributeValue {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXR0cmlidXRlLWluc3RhbmNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2F0dHJpYnV0ZS1pbnN0YW5jZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxNQUFNLE9BQU8saUJBQWlCO0lBQ1Q7SUFBcUI7SUFBNkM7SUFBckYsWUFBbUIsSUFBWSxFQUFTLEtBQW9DLEVBQVMsYUFBcUI7UUFBdkYsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFTLFVBQUssR0FBTCxLQUFLLENBQStCO1FBQVMsa0JBQWEsR0FBYixhQUFhLENBQVE7SUFFMUcsQ0FBQztJQUVELGVBQWU7UUFDYixPQUFPLElBQUksQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDdEMsQ0FBQztDQUNGO0FBRUQsTUFBTSxPQUFPLHVCQUF1QjtJQUVmO0lBQ1Y7SUFDQTtJQUNBO0lBSFQsWUFBbUIsSUFBWSxFQUN0QixLQUFzQyxFQUN0QyxhQUFxQixFQUNyQixxQkFBMEIsRUFBRTtRQUhsQixTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ3RCLFVBQUssR0FBTCxLQUFLLENBQWlDO1FBQ3RDLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBQ3JCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBVTtJQUNyQyxDQUFDO0NBRUY7QUFFRCxNQUFNLE9BQU8sb0JBQW9CO0lBRVo7SUFBcUI7SUFBaUI7SUFBekQsWUFBbUIsSUFBWSxFQUFTLEtBQVEsRUFBUyxhQUFxQjtRQUEzRCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQVMsVUFBSyxHQUFMLEtBQUssQ0FBRztRQUFTLGtCQUFhLEdBQWIsYUFBYSxDQUFRO0lBQzlFLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxRQUFXO1FBQzFCLE9BQU8sSUFBSSxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUE7SUFDMUUsQ0FBQztJQUVELEVBQUU7UUFDQSxPQUFPLElBQUksQ0FBQyxLQUFzQixDQUFDO0lBQ3JDLENBQUM7Q0FDRjtBQUdELHVEQUF1RDtBQUN2RCw4Q0FBOEM7QUFDOUMsRUFBRTtBQUNGLEVBQUU7QUFDRiwwQ0FBMEM7QUFDMUMsdUVBQXVFO0FBRXZFLHVCQUF1QjtBQUN2Qix5QkFBeUI7QUFDekIsaUNBQWlDO0FBQ2pDLHVCQUF1QjtBQUN2QixzQ0FBc0M7QUFDdEMsNkJBQTZCO0FBQzdCLCtCQUErQjtBQUMvQix3QkFBd0I7QUFFeEIsb0JBQW9CO0FBQ3BCLGVBQWU7QUFDZixNQUFNO0FBQ04sSUFBSSIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5leHBvcnQgY2xhc3MgQXR0cmlidXRlSW5zdGFuY2U8VCA9IGFueT4ge1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogVCB8IHN0cmluZyB8IG51bWJlciB8IGJvb2xlYW4sIHB1YmxpYyBhdHRyaWJ1dGVUeXBlOiBzdHJpbmcpIHsgLy9jb250cm9sSW5zdGFuY2VcclxuXHJcbiAgfVxyXG5cclxuICBnZXRDc3NBdHRyaWJ1dGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLm5hbWUgKyAnOicgKyB0aGlzLnZhbHVlO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEF0dHJpYnV0ZUluc3RhbmNlSG9sZGVyIHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWU6IHN0cmluZyxcclxuICAgIHB1YmxpYyB2YWx1ZTogc3RyaW5nIHwgbnVtYmVyIHwgYm9vbGVhbiB8IGFueSxcclxuICAgIHB1YmxpYyBhdHRyaWJ1dGVUeXBlOiBzdHJpbmcsXHJcbiAgICBwdWJsaWMgYXR0cmlidXRlVGhlbWVUeXBlOiBhbnkgPSAnJykge1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBVc2FibGVBdHRyaWJ1dGVWYWx1ZTxVPiB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lOiBzdHJpbmcsIHB1YmxpYyB2YWx1ZTogVSwgcHVibGljIGF0dHJpYnV0ZVR5cGU6IHN0cmluZykgeyAvL2NvbnRyb2xJbnN0YW5jZVxyXG4gIH1cclxuXHJcbiAgd2l0aFVwZGF0ZWRWYWx1ZShuZXdWYWx1ZTogVSkge1xyXG4gICAgcmV0dXJuIG5ldyBVc2FibGVBdHRyaWJ1dGVWYWx1ZSh0aGlzLm5hbWUsIG5ld1ZhbHVlLCB0aGlzLmF0dHJpYnV0ZVR5cGUpXHJcbiAgfVxyXG5cclxuICBhczxVMj4oKSB7XHJcbiAgICByZXR1cm4gdGhpcy52YWx1ZSBhcyB1bmtub3duIGFzIFUyO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vczMgLT4gKGJlaGF2aW91cixjb250cm9sTmFtZXNbXSwgYXR0cmlidXRlSW5zdGFuY2VbXSlcclxuLy9kYiAtPiAoY29udHJvbEluc3RhbmNlLCBhdHRyaWJ1dGVJbnN0YW5jZVtdKVxyXG4vL1xyXG4vL1xyXG4vL01vZGVsIGNsYXNzIGZvciBDb250cm9sQXR0cmlidXRlSW5zdGFuY2VcclxuLy8gZXhwb3J0IGNsYXNzIENvbnRyb2xBdHRyaWJ1dGVJbnN0YW5jZSBleHRlbmRzIGNvcmVNb2RlbHMuQXBwRW50aXR5IHtcclxuXHJcbi8vICAgcHVibGljIGlkOiBzdHJpbmc7XHJcbi8vICAgcHVibGljIG5hbWU6IHN0cmluZztcclxuLy8gICBwdWJsaWMgYXR0cmlidXRlVHlwZTogc3RyaW5nXHJcbi8vICAgcHVibGljIHZhbHVlOiBhbnk7XHJcbi8vICAgcHVibGljIGNvbnRyb2xJbnN0YW5jZUlkOiBzdHJpbmc7XHJcbi8vICAgcHVibGljIHBhZ2VOYW1lOiBzdHJpbmc7XHJcbi8vICAgcHVibGljIGlzUmVtb3ZlZDogYm9vbGVhbjtcclxuLy8gICBwdWJsaWMgcGFnZT86IFBhZ2U7XHJcblxyXG4vLyAgIGNvbnN0cnVjdG9yKCkge1xyXG4vLyAgICAgc3VwZXIoKTtcclxuLy8gICB9XHJcbi8vIH1cclxuIl19