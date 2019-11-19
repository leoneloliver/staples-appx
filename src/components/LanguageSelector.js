import React from 'react';
import { useTranslation } from 'react-i18next';

import styles from '../components/languageselector.module.css';

const LanguageSelector = () => {

  const { i18n } = useTranslation();

  const changeLanguage = (event) => {

    localStorage.setItem('lang', event.target.value);
    let currentLang = localStorage.getItem('lang');

    i18n.changeLanguage(currentLang);

    //calling refresh to see language changes on select list
    refreshPage();
  }

  function refreshPage(){ 
    window.location.reload(); 
  }


  return (
    <div onChange={changeLanguage} className={`${styles['lang-selector']}`}>
      <label for="en" id="enlang">
        <input id="en" type="radio" value="en" name="language"  className="d-none"/> English 
      </label>
      <label for="fr" id="frlang" >
        <input id="fr" type="radio" value="fr" name="language" className="d-none"/> Français
      </label>
    </div>
  )
}

export default LanguageSelector