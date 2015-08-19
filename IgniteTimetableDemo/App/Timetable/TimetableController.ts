module App.Timetable {

    export interface ITimetableScope extends angular.IScope {
        model: IIgniteDaysModel
    }

    export class TimetableController {

        static $inject = ["$scope", "App.Timetable.TimetableService"];
        constructor($scope: ITimetableScope, private timetableService: TimetableService) {
            timetableService.get()
                .then(function (data) {
                $scope.model = data;

               
            });
        }
    }
    
    angular.module("App")
        .controller("App.Timetable.TimetableController", TimetableController);
} 