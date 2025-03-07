import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import paper_plane from '../../assets/paper_plane.jpg'

const NewsLetterSection = () => {
  return (
    <Wrapper>
        <Image src={paper_plane} alt='Paper plane' className='newsletter_img'/>
        <div className="content_container">
          <h1>Subscribe to our newsletter</h1>
          <p>Get the latest news and updates from us</p>
          <div className="input_container">
              <input type="email" placeholder="Enter your email address"/>
              <button>Subscribe</button>
          </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    margin-top: var(--spacing-sm);
    width: 100%;
    background: var(--dark);
    color: var(--white);
    padding: 2rem;
    height: auto;
    display: flex;
    flex-direction: column;

    .newsletter_img {
        background: #f5f5f5;
        height: 300px;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    .content_container {
      margin-top: var(--spacing-lg);
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    p {
      margin-top: var(--spacing-sm);
    }

    .input_container {
      width: 100%;
      margin-top: var(--spacing-lg);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    input {
      width: 100%;
      height: 70px;
      padding: 0.5rem;
      border: none;
      /* border-radius: 5px; */
      outline: none;
      padding: 2rem;
      font-size: 1.2em;
    }

    button {
      /* margin-top: var(--spacing-lg); */
      width: 100%;
      height: 60px;
      border: none;
      /* background: var(--primary); */
      background: orange;
      font-size: 1.2em;
    }

    @media only screen and (min-width: 768px) {
      padding: 4rem 3rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      .newsletter_img {
        width: 45%;
        height: 100%;
        max-height: 400px;
      }

      .content_container {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
      }

    }

    @media (min-width: 992px) {
      padding: 4rem;
    } 



`

export default NewsLetterSection