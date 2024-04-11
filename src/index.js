import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';   //Redux Part
import myStore from './Component/Redux/Store';  //Redux Part


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <BrowserRouter>  

    <Provider store = {myStore}>  
    {/* Redux Part */}
    <App />
    </Provider>

   </BrowserRouter>

  </React.StrictMode>
);

//ReactDOM.render(<App/>, document.getElementById("root"));
