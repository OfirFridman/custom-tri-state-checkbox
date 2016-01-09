/**
 * Created by ofir on 1/8/2016.
 */
(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox')
        .directive('customTriStateCheckbox', customTriStateCheckbox);

    function customTriStateCheckbox() {
        return {
            restrict: 'A',
            link: linker,
            priority: 10,
            controller: CustomTriStateCheckboxCtrl,
            controllerAs: 'customTriStateCheckbox',
            bindToController: true
        };

        function linker(scope, element, attrs, controller) {
            controller.init();
        }
    }

    CustomTriStateCheckboxCtrl.$inject = ['$scope', '$element'];

    function CustomTriStateCheckboxCtrl($scope, $element) {
        var vm = this;
        vm.$scope = $scope;
        vm.$element = $element;
    }

    CustomTriStateCheckboxCtrl.prototype.init = function () {
        var vm = this;
        vm.checkMandatoryAttributesExist();
        vm.listenToEvents();
        vm.listenToDestroy();
    };

    CustomTriStateCheckboxCtrl.prototype.checkMandatoryAttributesExist = function () {
        var vm = this;
        var checkBoxId = vm.$element.attr('id'),
            customCheckboxAttr = vm.$element.attr('custom-checkbox');

        if (checkBoxId === undefined || checkBoxId === "") {
            throw new Error('custom-tri-state-checkbox directive need id attribute.');
        }

        if (customCheckboxAttr === undefined) {
            throw new Error('custom-tri-state-checkbox directive need custom-checkbox attribute.');
        }
    };

    CustomTriStateCheckboxCtrl.prototype.listenToEvents = function () {
        var vm = this;
        vm.listnerUpdateParentTriStateCheckbox = vm.$scope.$on('update-parent-tri-state-checkbox', vm.updateParentTriStateCheckbox.bind(vm));
    };

    CustomTriStateCheckboxCtrl.prototype.updateParentTriStateCheckbox = function () {
        var vm = this;
        vm.$element.prop('indeterminate', true);
    };

    CustomTriStateCheckboxCtrl.prototype.listenToDestroy = function () {
        var vm = this;
        vm.$scope.$on("$destroy", function () {
            vm.listnerUpdateParentTriStateCheckbox();
        });
    };

})();