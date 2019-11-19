import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import '../i18n';
import Hello from '../components/Hello';
import Form from '../components/Form';
import PersonList from '../components/PersonList';
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
                            <Route path="/Hello" component={Hello} />
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
