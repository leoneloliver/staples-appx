import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import InputText from '../components/InputText';
import Select from '../components/Select';
import TextArea from '../components/TextArea';
import CheckBox from '../components/CheckBox';
import SubmitButton from '../components/SubmitButton';
import ErrorAlertMsg from '../components/ErrorAlertMsg';
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
      extra: '',
      phonenumber: '',
      postalcode: '',
      date: '',
      fistname: '',

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
    utils.maskPhone();
    utils.maskDate();
    utils.numberMask();
    utils.typeSelecBehavior();
  }

  componentDidUpdate(){
    utils.magicLabels();
  }

  callNextPage(page){
    const divLoad = document.getElementById("loading");
    divLoad.classList.remove('d-none');
    let This = this;
    setTimeout(function(){
        This.props.history.push(page);
        window.scrollTo(0, 0);
        divLoad.classList.add('d-none');
    },2000);
  }

  disableSubmit(){
     // disable submit after click
     const submitButton = document.getElementById('submit');
     submitButton.setAttribute('disabled', 'disabled');  
     document.getElementsByClassName('spinner-border')[0].classList.remove('d-none');
  }

  handleClickNext(event){

    event.preventDefault();

    // validations for fields 
    let isValid = utils.validateForm();        

      if(isValid){ 
        console.log('call to action');

        this.disableSubmit();

        const $this = event.target;
        
        console.log($this.province.value);
        console.log($this.email.value);
        console.log($this.textarea.value);
        console.log($this.password.value);
        console.log($this.phonenumber.value);
        console.log($this.postalcode.value);
        console.log($this.remember.value);
        if($this.extra){
          console.log($this.extra.value);
        }

        //moving to another page
        this.callNextPage('Options');

        //  call API's here
 
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
            <h2 className="h6 medium mb-4 super-title"><i className="fa fa-circle dotz" aria-hidden="true"></i>&nbsp;{t('title1.label')}</h2>
    
            <form autoComplete="off" name="form" className="form" id="form" onSubmit={this.handleClickNext}>


              {/* <div className="row">
                <div className="col-md-12">
                  < InputText 
                    inputtype={"fistname"}
                    name={"fistname"}
                    placeholder={t('fistname.label')}
                    required={""}
                    value={this.state.email}
                    idname={"fistname"}
                    onChange={(event) => this.setState({fistname: event.target.value})}
                    title={t('fistname.label')}
                    required={"required"}
                  />

                </div>
                <div>

                </div>
              </div> */}


              < Select 
                title={""}
                name={"province"}
                placeholder={t('select.label')}
                options={this.state.selectOptions}
                action={this.checkExtraField}
                optionSelected={this.state.province}
                required={"required"}
              />

              {extraField}

              < InputText 
                inputtype={"email"}
                name={"email"}
                placeholder={t('emailaddress.label')}
                required={""}
                value={this.state.email}
                idname={"email"}
                onChange={(event) => this.setState({email: event.target.value})}
                autoComplete={"username"}
                title={t('emailaddress.label')}
                required={""}
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

              < InputText 
                inputtype={"text"}
                title={t('phonenumber.label')}
                name={"phonenumber"}
                placeholder={t('phonenumber.label')}
                required={""}
                id={"phonemask"}
                value={this.state.phonenumber}
                maxLength={14}
                className={"form-control input_element phonemask"}
                onChange={(event) => this.setState({phonenumber: event.target.value})}
              />

              < InputText 
                inputtype={"text"}
                title={t('postalcode.label')}
                name={"postalcode"}
                placeholder={t('postalcode.label')}
                value={this.state.postalcode}
                required={""}
                maxLength={7}
                onChange={(event) => this.setState({postalcode: event.target.value})}
              />

              < CheckBox 
                name={"remember"}
                idname={"remember"}
                label={t('remember.label')}
                value={true}
                onChange={this.handleCheckBox}
              />

              < InputText 
                inputtype={"text"}
                title={"Date fo Birth"}
                name={"date"}
                placeholder={"YYYY/MM/DD"}
                required={""}
                id={"date"}
                value={this.state.date}
                maxLength={10}
                className={"form-control input_element"}
                onChange={(event) => this.setState({date: event.target.value})}
              />

              < InputText 
                inputtype={"text"}
                title={"What is your business’s operating profit?"}
                name={"AnnualOperatingProfit"}
                placeholder={"Annual Operating Profit"}
                icon={""}
                required={""}
                className={"currency form-control"}
                maxlength={12}
                // value={this.state.annual_operating_profit}
                onChange={(event) => this.setState({annual_operating_profit: event.target.value})}
              />

              < SubmitButton 
                name={"NextStep"}
                inputtype={"submit"}
                action={this.onSubmit}
                id={"submit"}
                label={t('submit.label')}
              /> 

              < ErrorAlertMsg
                id={"error-container"}
                text={"Please fill out all required fields!"}
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