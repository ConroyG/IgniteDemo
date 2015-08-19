module App.Timetable {
    export class TimetableService {

        static $inject = ['$http'];
        constructor(private $http: angular.IHttpService) {
        }

        public get(): angular.IPromise<IIgniteDaysModel> {
            var promise = this.$http.get("api/Timetable").then(function (response: any) {
                // The then function here is an opportunity to modify the response
                var returnData: ITimetableModel[] = response.data.Sessions;


                for (var key in returnData) {
                returnData[key].Track = [];
                if (returnData[key].Details.Audience.indexOf("IT Implementer") != -1) {
                        returnData[key].CssColor = "green";
                        returnData[key].Track.push("green");
                    }
                    if (returnData[key].Details.Audience.indexOf("Architect") != -1) {
                        returnData[key].CssColor = "orange";
                        returnData[key].Track.push("orange");
                    }
                    if (returnData[key].Details.Audience.indexOf("Developer") != -1) {
                        returnData[key].CssColor = "purple";
                        returnData[key].Track.push("purple");
                    }
                    if (returnData[key].Details.Audience.indexOf("IT Decision Maker") != -1) {
                        returnData[key].CssColor = "lightblue";
                        returnData[key].Track.push("lightblue");
                    }
                    var parts = returnData[key].Schedule.StartDatetime.split('-');
                    returnData[key].Schedule.StartDatetimeDate = new Date(+parts[0], +parts[1] - 1, +parts[2].split('T')[0]);
                }


                var finalData: IIgniteDaysModel = {
                    Tue: {},
                    Wed: {},
                    Thu: {},
                    Fri: {}
                };

                for (var i = 0; i <= returnData.length - 1; i++) {
                    var dayObject;

                    if (returnData[i].Schedule.StartDatetimeDate.getDay() == 2)
                        dayObject = finalData.Tue;
                    if (returnData[i].Schedule.StartDatetimeDate.getDay() == 3)
                        dayObject = finalData.Wed;
                    if (returnData[i].Schedule.StartDatetimeDate.getDay() == 4)
                        dayObject = finalData.Thu;
                    if (returnData[i].Schedule.StartDatetimeDate.getDay() == 5)
                        dayObject = finalData.Fri;

                    var keyTime = returnData[i].Schedule.FormattedStartDate.split(',')[1];

                    if (dayObject[keyTime] == null)
                        dayObject[keyTime] = [];
                    dayObject[keyTime].push(returnData[i]);
                }

                // The return value gets picked up by the then in the controller.
                return finalData;
            });
            // Return the promise to the controller
            return promise;
        }
    }

    angular.module("App")
        .service("App.Timetable.TimetableService", TimetableService);
} 