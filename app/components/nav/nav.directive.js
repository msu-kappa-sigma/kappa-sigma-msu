'use strict';

angular.module('kappa-sigma').directive('nav',function(){
    var directive = {};
    directive.restrict = 'EA';
    directive.replace = true;
    directive.templateUrl ="app/components/nav/nav.html"
    return directive;
});
