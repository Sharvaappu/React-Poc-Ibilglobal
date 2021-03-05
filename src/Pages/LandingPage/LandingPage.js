import React from 'react';


import './LandingPage.scss'

const NavBarComponent = React.lazy(() => import('../../Components/NavBarComponent'));
const TopFold = React.lazy(() => import('../../Components/LandingPageComponents/TopFold'));

const LandingPage = (props) => {

  return (
    <div className="landing-page">  
       <NavBarComponent {...props} />
       <TopFold {...props} />
    </div>
  );
}

export default LandingPage;