import sQuery, { addToDom, makeElement } from './helpers';
import add from './add';

addToDom('Who needs jQuery? Not meeeeee');

addToDom(`5 + 8 = ${add(5, 8)}`);

makeElement('p', 'This is a paragraph');

sQuery.makeElement('h2', 'This is sQuery');
