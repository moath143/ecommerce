import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Items from './components/Items/Items';
import Navbar from './components/Navbar/Navbar';
import Additem from './components/Additem/Additem';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import persistReducer from 'redux-persist/lib/persistReducer';
import { PersistGate } from 'redux-persist/lib/integration/react';
import persistStore from 'redux-persist/es/persistStore';
import rootReducer from './reducers/rootReducer/rootReducer';
import storage from 'redux-persist/lib/storage';




function App() {

  const persistConfig = {
    key: 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return (
    <div>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Navbar />
          <BrowserRouter>
            <Switch>
              <Route path="/" component={Items} exact />
              <Route path="/additem" component={Additem} exact />
              <Route path="/cart" component={Cart} exact />
            </Switch>
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
