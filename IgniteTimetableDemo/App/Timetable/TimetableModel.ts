module App.Timetable {
    export interface ITimetableModel {
        Name: string;
        Description: string;
        Details: ITimetableDetailModel;
        Schedule: ITimetableScheduleModel;
        Speakers: ITimetableSpeakerModel[];
        CssColor: string;
        Track: string[];
    }

    export interface ITimetableDetailModel {
        Audience: string;
        Topic: string;
        Theme: string;
        Product: string;
        Level: string;
    }
    export interface ITimetableScheduleModel {
        StartDatetime: string;
        StartDatetimeDate: Date;
        EndDatetime: string;
        Venue: string;
        FormattedVenueString: string;
        FormattedStartDate: string;
    }
    export interface ITimetableSpeakerModel {
        Name: string;
        IsMVP: boolean;
    }

    export interface ISortedTimetableModel {
        [key: string]: ITimetableModel[];
    }

    export interface IIgniteDaysModel {
        Tue: ISortedTimetableModel;
        Wed: ISortedTimetableModel;
        Thu: ISortedTimetableModel;
        Fri: ISortedTimetableModel;
    }
}