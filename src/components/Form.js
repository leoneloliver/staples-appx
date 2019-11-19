import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import InputText from '../components/InputText';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import CheckBox from '../components/CheckBox';
import SubmitButton from '../components/SubmitButton';
// import $ from 'jquery';
import * as utils from '../utils/utils';

class Form extends Component {

  constructor(props){
    super(props);
    this.handleClickNext = this.handleClickNext.bind(this);
    this.handleCheckBox = this.handleCheckBox.bind(this);
    this.state = {
      language: '',
      email: '',
      password: '',
      selectOptions: utils.selectList(),
      province: '',
      textarea: '',
      checkbox: false,
      extraField: false,
      extra: ''
    }
  }

  componentWillMount(){
    let iniLang = localStorage.getItem('lang');
    this.setState({language: iniLang});

  }

  componentDidMount(){
    utils.customSelect();
    utils.magicLabels();
    this.setState({selectOptions: utils.selectList(this.state.language)});
  }

  componentDidUpdate(){
    utils.magicLabels();
  }

  handleClickNext(event){

    event.preventDefault();
    console.log('call to action');
    // console.log(this.state.checkbox);
    // console.log(this.state.province);

    const $this = event.target;
    

    console.log($this.province.value);
    console.log($this.firstname.value);
    console.log($this.textarea.value);
    console.log($this.password.value);
    console.log($this.remember.value);
    if($this.extra){
      console.log($this.extra.value);
    }

  }

  handleCheckBox(e){
    let checkboxVal = '';
    if(this.state.checkbox == false){
      checkboxVal = true;
    }else{
      checkboxVal = false;
    }
    this.setState({checkbox: checkboxVal});
  }

  checkExtraField = (event) => {
    if(event.target.value == 'Mustard' || event.target.value == 'Mustardee'){
        this.setState({
          extraField: true
        })
    } else {
        this.setState({
          extraField: false
        })
    }
  }

render() {
  const { t } = this.props;

  let extraField = null;
  if(this.state.extraField) {
    extraField = < InputText 
      inputtype={"text"}
      name={"extra"}
      placeholder={"extra"}
      required={""}
      value={this.state.extra}
      idname={"extra"}
      onChange={(event) => this.setState({extra: event.target.value})}
      title={"extra"}
      required={"required"}
    />
  }
  return (
    <React.Fragment>
      <div className="container py-md-5 card mt-5 mb-6 border-0 mainform">
        <div className="row card-body mb-5">
          
          <div className="col-lg-6 offset-lg-3">
            <h2 className="h6 text--uppercase medium mb-4">{t('title1.label')}</h2>
            
            <form autoComplete="off" name="form" className="form" id="form" onSubmit={this.handleClickNext}>

              < Select 
                title={""}
                name={"province"}
                placeholder={"Selec Please"}
                options={this.state.selectOptions}
                action={this.checkExtraField}
                optionSelected={this.state.province}
                required={"required"}
              />

              {extraField}

    
              < InputText 
                inputtype={"email"}
                name={"firstname"}
                placeholder={t('emailaddress.label')}
                required={""}
                value={this.state.email}
                idname={"email"}
                onChange={(event) => this.setState({email: event.target.value})}
                autoComplete={"username"}
                title={t('emailaddress.label')}
                required={"required"}
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
                title={t('password.label')}
                required={"required"}
              />

              < TextArea
                name={"textarea"}
                value={this.state.textarea}
                idname={"textarea"}
                onChange={(event) => this.setState({textarea: event.target.value})}
                rows={4}
                placeholder={t('textarea.label')}
                title={t('textarea.label')}
                required={"required"}
              />

              < CheckBox 
                name={"remember"}
                idname={"remember"}
                label={t('remember.label')}
                value={true}
                onChange={this.handleCheckBox}
              />

              < SubmitButton 
                name={"NextStep"}
                idName={"submit"}
                inputtype={"submit"}
                action={this.onSubmit}
                label={t('submit.label')}
              />   

            </form>
          </div>
          
        </div>
      </div>
              
    </React.Fragment>
    )
  }
}
export default withTranslation()(Form)