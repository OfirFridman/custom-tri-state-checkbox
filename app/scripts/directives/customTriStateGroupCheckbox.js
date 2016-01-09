/**
 * Created by ofir on 1/9/2016.
 */

(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox')
        .directive('customTriStateGroupCheckbox', customTriStateGroupCheckbox);

    function customTriStateGroupCheckbox() {
        return {
            restrict: 'EA',
            link: linker,
            controller: CustomTriStateGroupCheckboxCtrl,
            controllerAs: 'customTriStateGroupCheckbox',
            bindToController: true
        };

        function linker(scope, element, attrs, controller) {
            controller.init();

        }
    }

    CustomTriStateGroupCheckboxCtrl.$inject = ['$scope', '$element'];

    function CustomTriStateGroupCheckboxCtrl($scope, $element) {
        var vm = this;
        vm.$scope = $scope;
        vm.$element = $element;
    }

    CustomTriStateGroupCheckboxCtrl.prototype.init = function () {
        var vm = this;
        vm.listenToEvents();
    };

    CustomTriStateGroupCheckboxCtrl.prototype.listenToEvents = function () {
        //TODO check how to stop the call more then once for each click on child checkbox
        var vm = this;
        vm.$element.on('click', function () {
            vm.$scope.$root.$broadcast('update-parent-tri-state-checkbox');
        });
    };
})();