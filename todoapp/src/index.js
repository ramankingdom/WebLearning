import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './Reducers/RootReducer';
import ToDoList from './Components/ToDoList';


var store  = createStore(rootReducer);

ReactDOM.render(
(<Provider store={store}>
<App />
</Provider>),
document.getElementById('root'));
registerServiceWorker();
