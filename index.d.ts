declare module '@bluecewe/empty-promise'
{
	export type Resolve<Value> = (value?: Value) => void;
	export type Reject<Reason> = (reason: Reason) => void;
	export interface Settlers<GenericResolveValue, GenericRejectValue> {
	    resolve?: Resolve<GenericResolveValue>;
	    reject?: Reject<GenericRejectValue>;
	}
	export default class EmptyPromise<GenericResolveValue, GenericRejectValue> extends Promise<GenericResolveValue> {
	    resolve: Resolve<GenericResolveValue>;
	    reject: Reject<GenericRejectValue>;
	    constructor(executor: any);
	    static generate<GenericResolveValue, GenericRejectValue>(): EmptyPromise<GenericResolveValue, GenericRejectValue>;
	}
}
