import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import { secondaryNavData, socialData, navData} from '../../data/data'


const Footer = () => {
  return (
    <Wrapper>
        <div className="footer_desc_container">
          <Link href="/">
          <h1>MYS</h1>
          </Link>
          <p className='logo_desc'>
            A safe space where we discuss the life of a youth; the ups and downs, the norms and shocks, the good and bad aspects of being a youth in Nigeria. We aim to grow a community of like-minded youths striving towards a, not just positive, but an excellent future, with the knowledge that we are not alone in this world.
          </p>

          <p className='copyright_p'>
            ©2025 All rights reserved. MYS is a product of MyYouthfulSelf  
          </p>

          <div className="socials_container">
            {
              socialData.map((values) => {
                const {id, icon, link} = values
                return <a href={link} key={id}>
                  <span className='social_icon'>
                    {icon}
                  </span>
                </a>
              })
            }
          </div>
        </div>
        <div className="footer_nav_options">
          <h3>Company</h3>
          <div className="nav_list_container">
            {
              secondaryNavData.map((values) => {
                const {id, link, title} = values
                  return (<Link 
                    key={id}
                  href={link}
                  className='nav_list'
                  >
                  <span>{title}</span>
                  </Link>)
              })
            }

          </div>
        </div>
        <div className="contact_details">
          <h3>Contact</h3>
          <div className="contact_list_container">
            <a href="mailto:hello@mymoniemate.com">
            hello@mymoniemate.com
            </a>
            <a href="tel:+2349071943338">
            +234 9071 9433 38
            </a>
          </div>
        </div>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    background: var(--footer-bg);
    margin-top: var(--spacing-xxl);
    min-height: 300px;
    width: 100%;
    display: grid;
    grid-template-columns: 400px repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: subgrid;
    gap: 2rem;
    padding: 4rem;
    z-index: 1000;
    font-size: 0.95em;

    p {
      margin-top: var(--spacing-lg);
      width: 80%;
      line-height: 20px;
    }

    .logo_desc {
      font-weight: 500;
    }

    .copyright_p {
      color: #A4ABB8;
      font-weight: 400;
    }

    >div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    *>div {
      margin-top: var(--spacing-lg);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }


    .socials_container {
      margin-top: 2rem;
      width: 50%;
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    .social_icon {
      margin-right: 1rem;
      font-size: 1.5em;
    }


    .nav_list {
      margin-top: 1rem;
      color: var(--font-light);

    }

    

    .contact_list_container a {
      margin-top: 1rem;
      color: var(--font-light);
    }

    @media only screen and (max-width: 768px) {
      padding: 4rem 1rem;
      grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

      p {     
      width: 80%;
      }

      .copyright_p {
        max-width: 100%;
        font-size: 0.9em;
      }
    }


`

export default Footer