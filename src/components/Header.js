import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import logo from '../images/logo.png';
import logoFR from '../images/logo-fr.png';
import LanguageSelector from '../components/LanguageSelector';
// import $ from 'jquery';
import * as utils from '../utils/utils';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      logolang: 'en'
    }
  }

  componentWillMount(){

    const currentLang = localStorage.getItem('lang');
    if(currentLang == 'fr'){
      this.setState({logolang: 'fr'});
    }

  }

  componentDidMount() {
    utils.menuLang();
  }

  render(){
    // const { t } = this.props;
    let checklogo = this.state.logolang;
    let componentLogo = null;
    if(checklogo == 'fr'){
      componentLogo = <React.Fragment>
        <img className="header__logo_fr" src={logoFR} alt="Staples" />
      </React.Fragment>
    }else{
      componentLogo = <React.Fragment>
        <img className="header__logo" src={logo} alt="Staples" />
      </React.Fragment>
    }
    return (
      <React.Fragment>
        <div className="col-12 align-items-center text-center py-3 bg-white pb-4">
            <div className="text-center d-block container">
                {componentLogo}
            </div>
            < LanguageSelector />
        </div>
        
      </React.Fragment>
      
     
    )
  };
};

export default withTranslation()(Header);