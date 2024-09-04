import * as React from 'react';

import { Route, Routes } from 'react-router-dom';
import WebRoutes from './routes';
import BaseComponent from './component/BaseComponent';
import Home from './component/pages/home';


export default function App() {
  return (
    <Routes>
      <Route path={WebRoutes.HOME} element={<BaseComponent />}>
        <Route path={WebRoutes.HOME} element={<Home />} />
      </Route>
    </Routes>
  );
}