import React from 'react';
import './HomePage.styles.scss'

import Directory from '../../Components/Directory/Directory.component.jsx';

const HomePage = ({history}) =>(
  <div className='homepage'>
    <Directory history={history}/>
  </div>
)

export default HomePage;