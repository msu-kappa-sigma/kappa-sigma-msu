'use strict';

angular.module('kappa-sigma').directive('about',function(){
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl ="app/components/about/about.html"
    return directive;
});
