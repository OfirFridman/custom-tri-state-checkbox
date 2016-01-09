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