export declare type Resolve<Value> = (value?: Value) => void;
export declare type Reject<Reason> = (reason: Reason) => void;
export interface Settlers<GenericResolveValue, GenericRejectValue> {
    resolve?: Resolve<GenericResolveValue>;
    reject?: Reject<GenericRejectValue>;
}
export declare class EmptyPromise<GenericResolveValue, GenericRejectValue> extends Promise<GenericResolveValue> {
    resolve: Resolve<GenericResolveValue>;
    reject: Reject<GenericRejectValue>;
    constructor(executor: any);
    static generate<GenericResolveValue, GenericRejectValue>(): EmptyPromise<GenericResolveValue, GenericRejectValue>;
}
