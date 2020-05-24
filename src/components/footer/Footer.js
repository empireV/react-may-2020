import React from 'react';
import {socialMediaIcons} from '../../constants';
import './Footer.scss';

export const Footer = (props) => {

 return (
     <div className='may-footer'>
         <div className="may-footer-content">
             <div>Some text about authors</div>
             <div className='may-footer-social-media-wrapper'>
                 <div><img className='may-footer-social-media-icon' src={socialMediaIcons[0].src} alt={socialMediaIcons[0].alt}/></div>
                 <div><img className='may-footer-social-media-icon' src={socialMediaIcons[1].src} alt={socialMediaIcons[1].alt}/></div>
                 <div><img className='may-footer-social-media-icon' src={socialMediaIcons[2].src} alt={socialMediaIcons[2].alt}/></div>
             </div>
         </div>
         <div>All rights reserved. may-app © 2020</div>
     </div>
 )
}
