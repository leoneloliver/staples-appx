import React from 'react'
import { useTranslation } from 'react-i18next'

const Hello = () => {
  const { t } = useTranslation();

  return (
    <div className="row">
      <p className="text-warning col-12">{t('hello.label')}</p>
    </div>
  )
}

export default Hello