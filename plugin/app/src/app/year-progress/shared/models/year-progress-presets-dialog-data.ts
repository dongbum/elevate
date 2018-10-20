import { YearProgressTypeModel } from "./year-progress-type.model";

export class YearProgressPresetsDialogData {
	public yearProgressTypeModel: YearProgressTypeModel;
	public activityTypes: string[];
	public includeCommuteRide: boolean;
	public includeIndoorRide: boolean;
	public targetValue?: number;

}
