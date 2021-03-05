import React from 'react';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch
} from 'react-router-dom';
import './App.scss';

const LandingPage = React.lazy(() => import('./Pages/LandingPage'));

const loading = () => <div className="animated fadeIn pt-3 text-center loading-message">Loading...</div>;

function App(props) {
  return (
    <Router>
      <React.Suspense fallback={loading()}>
        <Switch>
          <Route exact path="/" name="Home" render={props => <LandingPage {...props}/>} />
        </Switch>
      </React.Suspense>
    </Router>
  );
}

export default App;
