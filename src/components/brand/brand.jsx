import React from 'react';
import { google, slack, atlassian, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => {
  return (
    <div className="gpt3__brand section__padding">
      <div className='gpt2__image'>
        <img src={google} alt=''/>
      </div>
      <div className='gpt2__image'>
        <img src={slack} alt=''/>
      </div>
      <div className='gpt2__image'>
        <img src={atlassian} alt=''/>
      </div>
      <div className='gpt2__image'>
        <img src={dropbox} alt=''/>
      </div>
      <div className='gpt2__image'>
        <img src={shopify} alt='Shopify' />
      </div>
    </div>
  );
};

export default Brand;
