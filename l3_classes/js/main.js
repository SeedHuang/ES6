import Header from './components/header.js';
import Body from './components/body.js';

document.body.innerHTML = (new Header('This is class')) + (new Body('This is Body'));
