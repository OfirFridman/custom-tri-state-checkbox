/**
 * Created by ofir on 1/7/2016.
 */

(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox', ['custom-checkbox']);
})();


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
            link: link,
            priority: 10,
            controller: CustomTriStateCheckboxCtrl,
            controllerAs: 'customTriStateCheckbox',
            bindToController: true
        };

        function link(scope, element, attrs, controller) {
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
        vm.listnerUpdateParentTriStateCheckbox = vm.$scope.$on('update-parent-tri-state-checkbox', function () {
            vm.$element.prop('indeterminate', true);
        });
    };

    CustomTriStateCheckboxCtrl.prototype.listenToDestroy = function () {
        var vm = this;
        vm.$scope.$on("$destroy", function () {
            vm.listnerUpdateParentTriStateCheckbox();
        });
    };

})();
/**
 * Created by ofir on 1/9/2016.
 */
/**
 * Created by ofir on 1/8/2016.
 */
(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox')
        .directive('customTriStateGroupCheckbox', customTriStateGroupCheckbox);

    function customTriStateGroupCheckbox(){
        return {
            restrict: 'EA',
            link: link
        };

        function link(scope, element, attrs, controllers){
            element.on('click',function(){
                scope.$root.$broadcast('update-parent-tri-state-checkbox');
            });
        }
    }
})();