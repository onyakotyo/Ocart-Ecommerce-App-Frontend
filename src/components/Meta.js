import React from 'react'
import { Helmet } from 'react-helmet'

const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name='description' content={description} />
      <meta name='keyword' content={keywords} />
    </Helmet>
  )
}

Meta.defaultProps = {
  title: 'Ocart | Quality expat products',
  description: 'Buy and sell at good prices',
  keywords: 'expat, electronics, buy electronics, cheap electronics, fresh food, british products, zimbabwean products, south african products',
}

export default Meta