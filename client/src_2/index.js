import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap-theme.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router} from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux'; 
import { fetchImages } from './actions/fetchImages'
import manageArtwork from './reducers/manageArtwork';



const store = createStore(manageArtwork, applyMiddleware(thunk));

    ReactDOM.render(      
       <Provider store={store}>
        <Router>
            <App/>          
        </Router>
        </Provider>
        ,
      document.getElementById('root')
    );
  

  store.dispatch({ type: '@@init' });
  store.dispatch(fetchImages())
  

serviceWorker.unregister();
