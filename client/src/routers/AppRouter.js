import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LandingPage from '../components/LandingPage';
import Header from '../components/Header';
import HostPage from '../components/HostPage';
import CreateListingPage from '../components/CreateListingPage';
import EditListingPage from '../components/EditListingPage';
import { startSetUser } from '../actions/user';
import PrivateRoute from './PrivateRoute';

class AppRouter extends React.Component {
    // componentDidMount() {
    //     const { tokenExists, startSetUser } = this.props;
    //     if (tokenExists) {
    //         startSetUser();
    //     }
    // }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Switch>
                        <Route path="/" component={LandingPage} exact />
                        <PrivateRoute path="/host" component={HostPage} />
                        <PrivateRoute path="/create-listing" component={CreateListingPage} />
                        <PrivateRoute path="/edit-listing/:listingId" component={EditListingPage} />
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    tokenExists: !!state.auth.token
});

const mapDispatchToProps = (dispatch) => ({
    startSetUser: () => dispatch(startSetUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(AppRouter);