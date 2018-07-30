'use strict';

// Types
type Resolve <Value> = (value?: Value) => void;
type Reject = (reason: any) => void;

/** An empty extended Promise with exposed control methods. */
export class EmptyPromise <ResolutionType> extends Promise <ResolutionType>
{
	public resolve: Resolve <ResolutionType>;
	public reject: Reject;
	/** Constructor. */
	constructor(executor)
	{
		super(executor);
	};
	/** Returns a new empty promise with its resolve() and reject() methods exposed. */
	static generate <ResolutionType> ()
	{
		interface Resolvers
		{
			resolve?: Resolve <ResolutionType>;
			reject?: Reject;
		};
		const resolvers: Resolvers = {};
		const promise = new this <ResolutionType>
		(
			function(resolve: Resolve <ResolutionType>, reject: Reject)
			{
				resolvers.resolve = resolve;
				resolvers.reject = reject;
			}
		);
		promise.resolve = resolvers.resolve;
		promise.reject = resolvers.reject;
		return promise;
	};
};