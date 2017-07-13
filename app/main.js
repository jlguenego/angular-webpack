import './style.scss';

import './jlg-layout/jlg-layout.js';

const app = angular.module('main', [
	'jlg-layout',
]);

app.run(($rootScope) => {
	'ngInject';
	$rootScope.name = 'Jean-Louis';
});
