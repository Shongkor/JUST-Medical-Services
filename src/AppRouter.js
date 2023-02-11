// import React, { Suspense, lazy } from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import './router.css'

// const Home = lazy(() => import('./Pages/Home/Home'));
// const About = lazy(() => import('./Component/About/About'));

// const AppRouter = ({ children }) => (
//   <Router>
//     <div className='headerShadow p-3 text-center position-fixed w-100'>
//       <h1>Jashore University of Science and Technology</h1>
//     </div>

//     <div>
//       <div className='d-flex'>
//         <div className="children">
//           {children}
//         </div>
//         <div className='text-dark mainLayout'>
//           <Suspense fallback={<h1>Loading...</h1>}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//             </Routes>
//           </Suspense>
//         </div>

//       </div>
//     </div>

//   </Router>
// );
// export default AppRouter;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Component/Common/Footer/Footer';
import Navbar from './Component/Common/Navbar/NavBar';
import './router.css'

const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Component/About/About'));
const AppointmentPage = lazy(() => import('./Pages/AppointmentPage/AppointmentPage'));

const AppRouter = ({ children }) => (
  <Router>
    <div className='headerShadow p-3 text-center position-fixed w-100'>
      <h1>Jashore University of Science and Technology</h1>
    </div>
    <div className=''>
      <div className='col-md-2'>
        <Navbar></Navbar>
      </div>
      <div className='col-md-10 text-dark mainLayout'>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/appointment" element={<AppointmentPage />} />
          </Routes>
        </Suspense>

        <Footer />
      </div>

    </div>



  </Router>
);
export default AppRouter;