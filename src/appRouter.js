// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export const routes = [
  { path: '/', name: 'Home', component: <Home /> },
];

const AppRouter = () => {
  return (
    <Router>

      <div className='container'>
        <Routes>

          {
            routes.map((route) => {
              return (
                <Route path={route.path} exact element={route.component} />
              );
            })
          }
        </Routes>
      </div>
    </Router>
  );
};

export default AppRouter;