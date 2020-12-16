import React, { useEffect } from 'react';
import { contactSectionAnimationOne, contactSectionAnimationTwo, contactSectionAnimationThree, contactSectionAnimationFour } from '../utils/animations'

function ContactSection() {
  useEffect(() => {
    let contacts = document.querySelectorAll('.contact_method li div');
    let contactside = document.querySelectorAll('.details div p');

    contactSectionAnimationOne(contacts, '.contact_method')
    contactSectionAnimationOne(contactside, '.contact_method')
    contactSectionAnimationTwo('.right_arrow img', '.contact_method')
    contactSectionAnimationThree('.circle', '.circle')
    contactSectionAnimationFour('.linecontact', '.linecontact')

  }, []);
  return (
    <div className='contactSection'>
      <div className='details'>
        <div>
          <p>Contact</p>
        </div>
        <div>
          <p>Details</p>
        </div>
      </div>

      <div className='right_arrow'>
        <img src='../right-arrow.svg' alt='' />
      </div>

      <ul className='contact_method'>
        <li>
          <div>
            <p>
              <a href='mailto:0marcinantol@gmail.com'>Mail</a>
            </p>
            <p>
              <a href='mailto:0marcinantol@gmail.com'>Mail</a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/marcin-antol/'
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                target='_blank'
                href='https://www.linkedin.com/in/marcin-antol/'
              >
                LinkedIn
              </a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>
              <a
                target='_blank'
                href='https://www.instagram.com/half_way_and_one_step_forward/'
              >
                Instagram
              </a>
            </p>

            <p>
              {' '}
              <a
                target='_blank'
                href='https://www.instagram.com/half_way_and_one_step_forward/'
              >
                Instagram
              </a>
            </p>
          </div>
        </li>
        <li>
          <div>
            <p>Phone</p>
            <p className='color_w_red'>+48514088872</p>
          </div>
        </li>
      </ul>
      <span className='line linecontact'></span>
      <span className='circle'></span>
    </div>
  );
}

export default ContactSection;
