'use strict';

// Types
export type Resolve <Value> =  (value?: Value) => void;
export type Reject <Reason> =  (reason: Reason) => void;
export interface Settlers <GenericResolveValue, GenericRejectValue>
{
	resolve?: Resolve <GenericResolveValue>;
	reject?: Reject <GenericRejectValue>;
};

/** An empty extended Promise with exposed control methods. */
export default class EmptyPromise <GenericResolveValue, GenericRejectValue> extends Promise <GenericResolveValue>
{
	public resolve: Resolve <GenericResolveValue>;
	public reject: Reject <GenericRejectValue>;
	/** Constructor. */
	constructor(executor)
	{
		super(executor);
	};
	/** Returns a new empty promise with its resolve() and reject() methods exposed. */
	static generate <GenericResolveValue, GenericRejectValue> ()
	{
		let settlers: Settlers <GenericResolveValue, GenericRejectValue> = {};
		const promise = new this <GenericResolveValue, GenericRejectValue>
		(
			function(resolve: Resolve <GenericResolveValue>, reject: Reject <GenericRejectValue>)
			{
				settlers =
				{
					resolve,
					reject
				};
			}
		);
		promise.resolve = settlers.resolve;
		promise.reject = settlers.reject;
		return promise;
	};
};