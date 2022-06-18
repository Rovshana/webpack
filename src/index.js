import _ from 'lodash'
import './style.css'
import Eacamp from "./eacamp.png"
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './Catagory/Header';
import { Main } from './Catagory/Main';
function App() {
    const element = document.createElement('div');
    // const photo =`<img src="${React}" />`
  
    // Lodash, currently included via a script, is required for this line to work
    // element.setAttribute("src", React)
    // const imgs =` <h1 class="text-warning">Salam</h1>`
    const app = `
    <div class="container bg-secondary">
    ${Header()}
    ${Main()}
    </div>

    `
    
    element.innerHTML = app
    return element;

  }
  
  document.body.appendChild(App());