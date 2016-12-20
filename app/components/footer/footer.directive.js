'use strict';

angular.module('kappa-sigma').directive('footer',function(){
    var directive = {};
    directive.restrict = 'E';
    directive.replace = true;
    directive.templateUrl ="app/components/footer/footer.html"
    return directive;
});
