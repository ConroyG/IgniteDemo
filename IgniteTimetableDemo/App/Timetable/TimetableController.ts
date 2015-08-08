module App.Timetable {

    export interface ITimetableScope extends angular.IScope {
        model: ITimetableModel[]
    }

    export class TimetableController {

        static $inject = ["$scope", "App.Timetable.TimetableService"];
        constructor($scope: ITimetableScope, private timetableServuce: TimetableService) {
            timetableServuce.get()
                .success(function (data) {
                $scope.model = data.Sessions;
            });
        }
    }
    
    angular.module("App")
        .controller("App.Timetable.TimetableController", TimetableController);
} 