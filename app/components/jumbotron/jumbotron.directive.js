'use strict';

angular.module('kappa-sigma').directive('jumbotron',function(){
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl ="app/components/jumbotron/jumbotron.html"
    return directive;
});
