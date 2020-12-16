import React, { useEffect } from 'react';
import {
  general,
  generalInfo,
  seo,
  socialMedia,
  ads,
  media,
  special,
  effects,
  recommendation,
} from './data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const time = gsap.timeline();
function ColorsInfo() {
  useEffect(() => {
    // croz
    gsap.to('.croz2', {
      scrollTrigger: {
        trigger: '.croz2',
        start: 'top 570vw',
      },
      width: '56vw',
      marginLeft: '-11.5vw',
      ease: 'Power0.easeNone',
      duration: 0.3,
      delay: 0.8,
    });

    // service text
    gsap.from(
      '.service_title',
      {
        scrollTrigger: {
          trigger: '.service_title',
          start: 'top 570vw',
        },
        y: 20,
        opacity: 0,
        ease: 'Power0.easeNone',
        duration: 0.65,
      },
      '+=1'
    );

    // number
    gsap.from(
      '.feature_number',
      {
        scrollTrigger: {
          trigger: '.feature_number',
          start: 'top 570vw',
        },
        y: 20,
        opacity: 0,
        ease: 'Power0.easeNone',
        duration: 0.65,
      },
      '+=1'
    );

    //ebook
    let ebook = document.querySelectorAll('.ebook_right .ebook_box .ebook_note');
    gsap.to(ebook, {
      scrollTrigger: {
        trigger: ebook,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      duration: 0.65,
      stagger: 0.1,
    });

    //ebook line
    gsap.to('.ebook_line', {
      scrollTrigger: {
        trigger: '.ebook_line',
        start: 'bottom +600vw',
      },
      width: '100%',
      ease: 'Power0.easeNone',
      duration: 0.65,
    });

    // desc under services
    let serviceinfo = document.querySelectorAll('.service_info p');
    gsap.to(serviceinfo, {
      scrollTrigger: {
        trigger: serviceinfo,
        start: 'top +600vw',
      },
      x: '0%',
      opacity: 1,
      ease: 'Power0.easeNone',
      duration: 0.65,
      stagger: 0.1,
    });

    // green title
    let colorGreen = document.querySelectorAll('.each_box_green p');
    gsap.to(colorGreen, {
      scrollTrigger: {
        trigger: colorGreen,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // blue title
    let colorBlue = document.querySelectorAll('.each_box_blue p');
    gsap.to(colorBlue, {
      scrollTrigger: {
        trigger: colorBlue,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // red title
    let colorRed = document.querySelectorAll('.each_box_red p');
    gsap.to(colorRed, {
      scrollTrigger: {
        trigger: colorRed,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // yello title
    let colorYello = document.querySelectorAll('.each_box_yello p');
    gsap.to(colorYello, {
      scrollTrigger: {
        trigger: colorYello,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // pink title
    let colorPink = document.querySelectorAll('.each_box_pink p');
    gsap.to(colorPink, {
      scrollTrigger: {
        trigger: colorPink,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // orange title
    let colorOrange = document.querySelectorAll('.each_box_orange p');
    gsap.to(colorOrange, {
      scrollTrigger: {
        trigger: colorOrange,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    // green2 title
    let colorgreen2 = document.querySelectorAll('.each_box_green2 p');
    gsap.to(colorgreen2, {
      scrollTrigger: {
        trigger: colorgreen2,
        start: 'top +600vw',
      },
      y: '0%',
      ease: 'Power0.easeNone',
      stagger: 0.1,
      duration: 0.65,
    });

    //-----------------------------------------------------
    //-----------------------------------------------------
    //-----------------------------------------------------

    // green boxes
    let colorGreenBoxes = document.querySelectorAll(
      '.data_elements_green .data_elements_box'
    );
    ScrollTrigger.batch(colorGreenBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colorGreenBoxes, { y: 0 })
    );

    // blue boxes
    let colorBlueBoxes = document.querySelectorAll(
      '.data_elements_blue .data_elements_box'
    );
    ScrollTrigger.batch(colorBlueBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colorBlueBoxes, { y: 0 })
    );

    // red boxes
    let colorredBoxes = document.querySelectorAll(
      '.data_elements_red .data_elements_box'
    );
    ScrollTrigger.batch(colorredBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colorredBoxes, { y: 0 })
    );

    // yello boxes
    let coloryelloBoxes = document.querySelectorAll(
      '.data_elements_yello .data_elements_box'
    );
    ScrollTrigger.batch(coloryelloBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(coloryelloBoxes, { y: 0 })
    );

    // pink boxes
    let colorpinkBoxes = document.querySelectorAll(
      '.data_elements_pink .data_elements_box'
    );
    ScrollTrigger.batch(colorpinkBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colorpinkBoxes, { y: 0 })
    );

    // orange boxes
    let colororangeBoxes = document.querySelectorAll(
      '.data_elements_orange .data_elements_box'
    );
    ScrollTrigger.batch(colororangeBoxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colororangeBoxes, { y: 0 })
    );

    // green2 boxes
    let colorgreen2Boxes = document.querySelectorAll(
      '.data_elements_green2 .data_elements_box'
    );
    ScrollTrigger.batch(colorgreen2Boxes, {
      onEnter: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeave: (batch) =>
        gsap.set(batch, { opacity: 0, y: -100, overwrite: true }),
      onEnterBack: (batch) =>
        gsap.to(batch, { opacity: 1, y: 0, stagger: 0.15, overwrite: true }),
      onLeaveBack: (batch) =>
        gsap.set(batch, { opacity: 0, y: 100, overwrite: true }),
    });
    ScrollTrigger.addEventListener('refreshInit', () =>
      gsap.set(colorgreen2Boxes, { y: 0 })
    );

    // free
    gsap.to('.forfree', {
      scrollTrigger: {
        trigger: '.forfree',
        start: 'top +700vw',
      },
      opacity: 1,
      ease: 'Power0.easeNone',
      duration: 3,
    });
  }, []);

  const showDesc = (e) => {
    e.target.children[1].style.opacity = 0;
    e.target.children[2].style.opacity = 1;
  };

  const hideDesc = (e) => {
    e.target.children[1].style.opacity = 1;
    e.target.children[2].style.opacity = 0;
  };

  //0------------------------
  //0------------------------
  //0------------------------
  //0------------------------
  //0------------------------
  //0------------------------
  //0------------------------

  return (
    <div className='colorsInfo'>
      <div className='colors_desc_info'>
        <p className='service_title'>
          SERVICES<span className='croz2'></span>
        </p>

        <div className='colors_desc_cont'>
          <div className='feature_number'>
            <p>
              #59 <span>FEATURES</span>
            </p>
          </div>

          <div className='ebook'>
            <div className='ebook_left'>
              <div className='ebook_note'>
                <p className='ebook_title'>"Social Media And Advertisments"</p>
                <img className='ebook_svg' src='ebook.svg' alt='Ebook' />
              </div>
            </div>

            <div className='ebook_right'>
              <div className='ebook_box'>
                <p className='ebook_note'>
                  Anyone who decides to use our service
                </p>
              </div>
              <div className='ebook_box m1'>
                <p className='ebook_note'>
                  will get a free <span style={{color:'#92f61a'}}>e-book</span>.
                </p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note m1'>
                  After reading the e-book you will have a knowledge about
                </p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Google Adsense,</p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Google Adwords,</p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Facebook Ads,</p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Campaigns,</p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Advertisements, </p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Posts, </p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Relations with customers</p>
              </div>
              <div className='ebook_box'>
                <p className='ebook_note'>- Many tools for writing better content</p>
              </div>
            </div>

            <p className='ebook_line'></p>
          </div>

          <div className='service_info'>
            <p>Here you have a presentation of our main service.</p>
            <p>59 amazing features which we are waiting for you.</p>
          </div>
        </div>
      </div>

      <div className='color_info'>
        <div className='each_box each_box_green'>
          <div>
            <p>General</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Elements which every website</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>should have done perfectly.</p>
          </div>
          <span className='line_vertical line_vertical_green'></span>
        </div>
        {/* Info */}
        <div className='data_elements data_elements_green'>
          {general.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#92f61a' }}>{i + 1}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 1}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>
        {/* End of Info */}

        {/* SEO */}
        <div className='each_box each_box_blue'>
          <div>
            <p>SEO</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Our aim is to make your website</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>be displayed on 1st page of results.</p>
          </div>
          <span className='line_vertical line_vertical_blue'></span>
        </div>

        <div className='data_elements data_elements_blue'>
          {seo.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#5626c4' }}>{i + 12}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 12}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>

        {/* media */}
        <div className='each_box each_box_pink'>
          <div>
            <p>Media</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Images and videos.</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Optimized with the highest quality.</p>
          </div>
          <span className='line_vertical line_vertical_pink'></span>
        </div>

        <div className='data_elements data_elements_pink'>
          {media.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#ff00d4' }}>{i + 21}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 21}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>

        {/* special */}
        <div className='each_box each_box_orange'>
          <div>
            <p>Specials</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Unique elements of your website</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>
              which will make it remembered for ever.
            </p>
          </div>
          <span className='line_vertical line_vertical_orange'></span>
        </div>

        <div className='data_elements data_elements_orange'>
          {special.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#ffa600' }}>{i + 28}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 28}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>

        {/* effects */}
        <div className='each_box each_box_yello'>
          <div>
            <p>Effects</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Animations and effects.</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>
              Make your website interactive and cool.
            </p>
          </div>
          <span className='line_vertical line_vertical_yello'></span>
        </div>

        <div className='data_elements data_elements_yello'>
          {effects.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#d9ff00' }}>{i + 34}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 34}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>

        {/* recommendation */}
        <div className='each_box each_box_green2'>
          <div>
            <p>Recommendation</p>
          </div>
          <div className='small_note_div'>
            <p className='small_note'>Something small but very significant.</p>
          </div>
          <span className='line_vertical line_vertical_green2'></span>
        </div>

        <div className='data_elements data_elements_green2'>
          {recommendation.map((el, i) => {
            return (
              <div
                className='data_elements_box'
                key={i}
                onMouseOver={(e) => showDesc(e)}
                onMouseOut={(e) => hideDesc(e)}
              >
                <span style={{ color: '#29f0a4' }}>{i + 58}#</span>
                <div className='box_title'>
                  <p>{el.title}</p>
                  <img src={`./svg/${el.svg}.svg`} alt={`photo_${i + 58}`} />
                </div>
                <p className='box_desc'>{el.note}</p>
              </div>
            );
          })}
        </div>
      </div>

      <div className='forfree'>
        <div className='forfree_img'>
          <img
            src={`./svg/advice.svg`}
            alt={`photo_advice`}
            className='advice'
          />
        </div>
        <div className='forfree_info'>
          <p className='free'>Have a question?</p>

          <p> Contact us </p>
          <p> +48 514 088 872 </p>
          <p> email@gmail.com </p>
        </div>
      </div>
    </div>
  );
}

export default ColorsInfo;
