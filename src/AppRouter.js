import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './router.css'

const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Component/About/About'));

const AppRouter = ({ children }) => (
  <Router>
    <div className='headerShadow p-3 text-center position-fixed w-100'>
      <h1>Jashore University of Science and Technology</h1>
    </div>

    <div>
      <div className='d-flex'>
        <div className="children">
          {children}
        </div>
        <div className='ms-auto text-dark mainLayout'>
          <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Suspense>
        </div>

      </div>
    </div>

  </Router>
);
export default AppRouter;