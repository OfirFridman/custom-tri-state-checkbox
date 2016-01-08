/**
 * Created by ofir on 1/8/2016.
 */
(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox')
        .directive('customTriStateCheckbox', customTriStateCheckbox);

    function customTriStateCheckbox(){
        return {
            restrict: 'A',
            link: link
        };

        function link(scope, element, attrs, controllers) {
            var checkBoxId = attrs.id,
                checkBoxLabel = attrs.label;
            if (checkBoxId === undefined || checkBoxId === "") {
                throw new Error('custom-checkbox directive need id!');
            }
            element.attr('custom-checkbox','');
            if (checkBoxLabel === undefined) {
                element.after('<label for="' + checkBoxId + '" class="fa"></label>');
            }
            else {
                element.after('<label for="' + checkBoxId + '" class="fa checkbox-with-label"></label>' +
                '<label class="custom-checkbox-label" for="' + checkBoxId + '">' + checkBoxLabel + '</label>');
            }
        }
    }
})();