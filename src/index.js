import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { ChakraProvider } from '@chakra-ui/react';
import ComingSoon from './ComingSoon';
import PORTFOLIO_ROUTE from './PortfolioRoute';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <ChakraProvider>
      <Routes>
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path={PORTFOLIO_ROUTE} element={<App />} />
          {/* <Route path="/*" element={<Navigate to="/portfolio" />} /> */}
        </Routes>
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
