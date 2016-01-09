/**
 * Created by ofir on 1/9/2016.
 */
(function () {
    'use strict';

    angular
        .module('custom-tri-state-checkbox')
        .controller('demoCtrl', Demo);

    function Demo(){
        var vm = this;
        vm.init();
    }

    Demo.prototype.init = function(){
        var vm = this;
        vm.parentCheckboxSelected = true;
        vm.childCheckboxes = [];
        for (var i = 0; i < 5; i++) {
            vm.childCheckboxes.push({name:"checkbox"+i,id:"cb"+i});
        }


    };

})();