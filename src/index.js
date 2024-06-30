import React from 'react';
import ReactDOM from 'react-dom/client';
import Principal from './Principal';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));
function ref(){
  root.render(
    <Provider store={store}>
      <Principal/>
    </Provider>
    
   
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
setInterval(ref,1000);