module App.Timetable {
    export class TimetableService {
        
        static $inject = ['$http'];
        constructor(private $http: angular.IHttpService) {
        }

        public get(): angular.IHttpPromise<any> {
            return this.$http.get("api/Timetable");
        }
    }

    angular.module("App")
        .service("App.Timetable.TimetableService", TimetableService);
} 