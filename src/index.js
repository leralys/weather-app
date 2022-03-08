import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import Container from '@mui/material/Container';
import Home from './routes/Home';
import Favorites from './routes/Favorites';
import Header from './components/Header';
import './index.css';

import rootReducer from './redux/reducers/rootReducer';
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route
              path='*' element={<main style={{ padding: '1rem' }}>
                <p>Oops, there is nothing here... <span> 👀</span></p>
              </main>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);