import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-select/dist/css/bootstrap-select.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap-select/dist/js/bootstrap-select.min.js';
import './App.scss';
import Loading from './components/Loading';

import Desktop from './desktop/index';

const App = () => {
    return (
      < React.Fragment>
        < Desktop />
        < Loading />
      </React.Fragment>
    )
}

export default App