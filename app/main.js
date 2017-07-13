import './style.scss';

import 'angular';

const app = angular.module('main', []);

app.run(($rootScope) => {
    'ngInject';
    $rootScope.name = 'Jean-Louis';
});
