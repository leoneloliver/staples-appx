import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import InputText from '../components/InputText';
import Select from '../components/Select';
import $ from 'jquery';

class ThankYou extends Component {

  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: '',
      selectOptions: [{title:"Mustard",value:"Mustard"},{title:"Ketchup",value:"Ketchup"},{title:"Barbecue",value:"Barbecue"}],
      province: ''
    }
  }

  componentDidMount(){
    // console.log($('div'));
    $('.custom-select').selectpicker();
  }

render() {
  const { t } = this.props;
  return (
    <React.Fragment>
      <div className="container p-5 card mt-5">
        <div className="row card-body">
          
          <div className="col-lg-6 offset-lg-3">
            <h2 className="h6 text--uppercase medium">{t('title1.label')}</h2>
            
            <form action="#">

              < Select 
                title={""}
                name={"province"}
                placeholder={"Selec Please"}
                options={this.state.selectOptions}
                // onChange={(event) => this.setState({province: event.target.value})}
                action={(event) => this.setState({province: event.target.value})}
                optionSelected={this.state.province}
              />

              

              < InputText 
                inputtype={"text"}
                name={"firstname"}
                placeholder={t('emailaddress.label')}
                required={""}
                value={this.state.email}
                idname={"email"}
                onChange={(event) => this.setState({email: event.target.value})}
                autoComplete={"username"}
              />

              < InputText 
                inputtype={"password"}
                name={"password"}
                placeholder={t('password.label')}
                required={""}
                value={this.state.password}
                idname={"password"}
                onChange={(event) => this.setState({password: event.target.value})}
                autoComplete={"new-password"}
              />


              {/* <div className="form-group">
                <input type="password" class="form-control input_element" id="pwd" placeholder={t('password.label')}/>
              </div> */}
              <div className="form-group">
                <input className="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
                <label htmlFor="styled-checkbox-1">{t('remember.label')}</label>
              </div>
              <button type="submit" className="btn btn-outline-info- btn-block button--secondary text-uppercase">{t('submit.label')}</button>
            </form>
          </div>
        </div>
      </div>
              
    </React.Fragment>
    )
  }
}
export default withTranslation()(ThankYou)