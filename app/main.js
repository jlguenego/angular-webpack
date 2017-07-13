
import './style.scss';

const app = angular.module('main', []);

app.run(($rootScope) => {
    'ngInject';
    $rootScope.name = 'Jean-Louis';
});
