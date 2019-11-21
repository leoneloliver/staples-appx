import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../i18n';
import Options from '../views/Options';
import Form from '../views/Form';
import PersonList from '../views/PersonList';

import Header from '../components/Header';
import Footer from '../components/Footer';


class Desktop extends Component {
    
    render() {
        return (
            <React.Fragment>
                <Suspense fallback={null}>
                <div className="row justify-content-between header--desktop d-block">
                    <Header />

                    <Router>
                        <Switch>
                           
                            <Route path="/" exact component={Form} />
                            <Route path="/Options" component={Options} />
                            <Route path="/List" component={PersonList} />
                        </Switch>
                    </Router>

                    <Footer />
                </div>
                </Suspense>        
            </React.Fragment>
        );
    }
}

export default Desktop;
