// Library import
import ReactDOM from 'react-dom/client'
// Component import
import App from './App.jsx'
// css import
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './assets/store.js';

ReactDOM.createRoot(document.getElementById('root')).render(
 <Provider store={store}>
   <BrowserRouter>
     <App />
     <Toaster/>
   </BrowserRouter>
  </Provider>   
  
);
