import './style.css';
import _ from 'lodash';
import Icon from './pic.svg';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function component() {
    //const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
   // element.innerHTML = _.join(['Hello', 'webpack'], ' ');
   // element.classList.add('hello');
   // const myIcon = new Image();
   // myIcon.src = Icon;
  
    //element.appendChild(myIcon);
    
    const element = document.createElement('button');
    element.innerHTML = _.join(['Click', 'Here'], ' ');
    element.classList.add('btn-primary');




  
    return element;
  }
  
  document.body.appendChild(component());