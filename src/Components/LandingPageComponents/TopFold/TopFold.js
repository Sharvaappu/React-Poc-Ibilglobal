import React from 'react';

import './TopFold.scss'

import profile from '../../../assets/images/profile.png'



const TopFold = (props) => {

  return (
    <div className="container-fluid bghero" style={{position: 'relative'}}>
      <div className="container-fluid" style={{position: 'absolute', top:' 30%', left:'10%'}}>
          <div className="row">
            <div className="col-md-5">
              <div style={{color: 'red'}}>
                <h6>
                    LEARN FROM ANYWHERE
                </h6> 
                <h1 className="display-4">
                  DREAM UP
                </h1>
                <div>
                Ambition accepted. Learn the latest skills to reach your Professional goals
                </div>
              </div>
            </div>
            <div className="col-md-7 pt-5 profile">
              <img src={profile} className="img-fluid" alt=""/>
            </div>
          </div>
      </div>
    </div>
    
  );
}

export default TopFold;