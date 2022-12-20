import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import MainRoutes from './routes';
import GlobalStyle from './styles/global';
import  { MyProvider }  from './contexts/MyContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <MyProvider>
      <React.StrictMode>
          <BrowserRouter>
            <MainRoutes />
            <GlobalStyle />
          </BrowserRouter>
      </React.StrictMode>
    </MyProvider>
);

