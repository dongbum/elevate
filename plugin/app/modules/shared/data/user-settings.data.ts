import { UserSettingsModel } from "../models/user-settings";
import { AthleteModel } from "../models/athlete";

export const userSettingsData: UserSettingsModel = {
	localStorageMustBeCleared: false,
	systemUnit: UserSettingsModel.SYSTEM_UNIT_METRIC_KEY,
	hasDatedAthleteSettings: true,
	athleteModel: AthleteModel.DEFAULT_MODEL,
	zones: {
		speed: [0, 7, 9, 11, 13, 15, 18, 21, 24, 27, 30, 32, 34, 36, 38, 40, 42, 44, 47, 50, 60, 75, 100],
		pace: [60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 540, 570, 720, 900],
		gradeAdjustedPace: [60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390, 420, 450, 480, 540, 570, 720, 900],
		heartRate: [120, 140, 150, 160, 170, 180, 185, 190, 195, 210],
		power: [0, 110, 150, 180, 210, 240, 280, 420, 1000],
		runningPower: [25, 50, 100, 150, 200, 250, 300, 350, 400, 500, 600, 800, 1000],
		cyclingCadence: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110, 115, 125, 150],
		runningCadence: [65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 101, 103, 105, 107, 109, 111, 115, 120],
		grade: [-20, -17, -14, -12, -9, -6, -3, -2, -1, -0.5, 0.5, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 20, 25],
		elevation: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3500, 4000, 5000],
		ascent: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1200, 1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200, 3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 6000]
	},
	remoteLinks: true,
	defaultLeaderBoardFilter: "overall",
	activateRunningGradeAdjustedPace: true,
	activateRunningHeartRate: true,
	activateRunningCadence: true,
	activateRunningTemperature: true,
	activityStravaMapType: "terrain",
	displaySegmentRankPercentage: true,
	displayNearbySegments: true,
	displayActivityRatio: true,
	displayAdvancedPowerData: true,
	displayAdvancedSpeedData: true,
	displayAdvancedHrData: true,
	displayCadenceData: true,
	displayAdvancedGradeData: true,
	displayAdvancedElevationData: true,
	displayBikeOdoInActivity: true,
	enableBothLegsCadence: true,
	feedChronologicalOrder: false,
	feedHideChallenges: false,
	feedHideCreatedRoutes: false,
	feedHidePosts: false,
	feedHideSuggestedAthletes: false,
	feedHideVirtualRides: false,
	feedHideRideActivitiesUnderDistance: 0,
	feedHideRunActivitiesUnderDistance: 0,
	displaySegmentTimeComparisonToKOM: true,
	displaySegmentTimeComparisonToPR: true,
	displaySegmentTimeComparisonToCurrentYearPR: true,
	displaySegmentTimeComparisonPosition: true,
	displayRecentEffortsHRAdjustedPacePower: false,
	reviveGoogleMaps: true,
	displayRunningPowerEstimation: true,
	reviveGoogleMapsLayerType: "terrain",
	displayActivityBestSplits: true,
	temperatureUnit: "C",
	showHiddenBetaFeatures: false,
	displayReliveCCLink: true,
	displayWindyOverlay: false
};
