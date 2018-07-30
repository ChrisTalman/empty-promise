declare module '@bluecewe/empty-promise'
{
	export default class EmptyPromise <ResolutionType> implements Promise <ResolutionType>
    {
        then();
        catch();
    }
}