import { Component } from 'react';
import Register from './components/pages/Register/Register';
import LandingPage from './components/pages/Landing/LandingPage';
import Contact from './components/pages/Contact/Contact';
import Booking from './components/pages/Booking/Booking/Booking';
import StaticPage from './components/pages/Static/StaticPage';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path={'/register'} exact component={Register} />
                    <Route path={'/contact'} exact component={Contact} />
                    <Route path={'/booking'} exact component={Booking} />
                    <Route path={'/static'} exact component={StaticPage} />
                    <Route path={'/landingpage'} exact component={LandingPage} />
                    <Redirect to="/landingpage" />
                </Switch>
            </Router>
        );
    }
}

export default App;
