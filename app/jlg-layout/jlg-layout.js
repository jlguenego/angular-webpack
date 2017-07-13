const app = angular.module('jlg-layout', [
	'jlg-layout',
]);

import jlgHeaderUrl from './tmpl/jlg-header.html';
app.component('jlgHeader', {
	template: jlgHeaderUrl
});
