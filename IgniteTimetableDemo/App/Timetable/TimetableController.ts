module App.Timetable {

    export interface ITimetableScope extends angular.IScope {
        model: ITimetableModel[]
    }

    export class TimetableController {

        static $inject = ["$scope", "App.Timetable.TimetableService"];
        constructor($scope: ITimetableScope, private timetableService: TimetableService) {
            timetableService.get()
                .success(function (data) {
                $scope.model = data.Sessions;

                for (var key in $scope.model) {
                    if ($scope.model[key].Details.Audience.indexOf("IT Implementer") != 0) {
                        $scope.model[key].CssColor = "border-top-color-purple";
                    }
                }
            });
        }
    }
    
    angular.module("App")
        .controller("App.Timetable.TimetableController", TimetableController);
} 