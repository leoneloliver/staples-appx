import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import * as utils from '../utils/utils';

class Footer extends Component {


  componentDidMount() {
    utils.menuLang();
  }

  render(){
    const { t } = this.props;
    return (
      <React.Fragment>
        <div className="col-12 align-items-center text-center py-3 bg-white  footer w-100 small">
            <p>{t('footer.label')}</p>
        </div>
        
      </React.Fragment>
      
     
    )
  };
};

export default withTranslation()(Footer);