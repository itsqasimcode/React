
import ReactDom from 'react-dom/client';
import './index.css';
import App from './App.jsx';
// import Chai from './chai';  
 //import MyApp from './MyApp.jsx'; 
 import React from 'react';


// eslint-disable-next-line react-refresh/only-export-components
function MyApp () {

    return (
        <div>
            <h1>
                Custom App !
            </h1>
        </div>
    );

}



/*const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit Google'
};*/

const reactElement = React.createElement(
    'a',
    { href: 'https://google.com', target: '_blank' },
    'Click me to visit Google'
);

/*const anotherElement = (

    <a href ='https://google.com' target='_blank '>visit Google</a>
)*/


ReactDom.createRoot(document.getElementById('root')).render(

    <>
    

  <App />
 {reactElement}

   </>
)
