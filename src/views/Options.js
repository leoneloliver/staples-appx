import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import SubmitButton from '../components/SubmitButton';

class Options extends Component {

  constructor(props){
    super(props);
    
  }

  callPartnerPge(){
    window.location = "https://directapp.lendified.com/";
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

  

render() {
  const { t } = this.props;

  return (
    <div className="container py-md-5 card mt-5 mb-6 border-0 mainform">
        <div className="row card-body mb-5">
            <div className="col-12 row">

                <div className="col-4" >
                    <div className="card border-0 h-100 shadow">
                        <div className="card-body text-center px-0">
                            <h2 className="col-12 card-title">{t('hello.label')}</h2>
                            <img src="https://dummyimage.com/300x400/000/ccc" />
                            <div className="text-center p-3">
                                < SubmitButton 
                                    name={"Partner"}
                                    idName={"button"}
                                    inputtype={"button"}
                                    action={this.callPartnerPge}
                                    label={t('submit.label')}
                                />  
                            </div>
                        </div>
                    </div>
                </div>
    
                <div className="col-4" >
                    <div className="card border-0 h-100 shadow">
                        <div className="card-body text-center px-0">
                            <h2 className="col-12 card-title">{t('hello.label')}</h2>
                            <img src="https://dummyimage.com/300x400/000/ccc" />
                            <div className="text-center p-3">
                                < SubmitButton 
                                    name={"Partner"}
                                    idName={"button"}
                                    inputtype={"button"}
                                    action={this.callPartnerPge}
                                    label={t('submit.label')}
                                />  
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-4" >
                    <div className="card border-0 h-100 shadow">
                        <div className="card-body text-center px-0">
                            <h2 className="col-12 card-title">{t('hello.label')}</h2>
                            <img src="https://dummyimage.com/300x400/000/ccc" />
                            <div className="text-center p-3">
                                < SubmitButton 
                                    name={"Partner"}
                                    idName={"button"}
                                    inputtype={"button"}
                                    action={this.callPartnerPge}
                                    label={t('submit.label')}
                                />  
                            </div>
                        </div>
                    </div>
                </div>

            
            </div>
        </div>
      </div>
    )
  }
}
export default withTranslation()(Options)