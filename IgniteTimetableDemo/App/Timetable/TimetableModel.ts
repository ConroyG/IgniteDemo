module App.Timetable {
    export interface ITimetableModel {
        Name: string;
        Description: string;
        Details: ITimetableDetailModel;
        Schedule: ITimetableScheduleModel;
        Speakers: ITimetableSpeakerModel[];
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
        EndDatetime: string;
        Venue: string;
        FormattedVenueString: string;
        FormattedStartDate: string;
    }
    export interface ITimetableSpeakerModel {
        Name: string;
        IsMVP: boolean;
    }
}