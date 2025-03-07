'use client'
import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import Youth_illustration from '../../assets/image_assets_1.png'


const HeroSection = () => {
  return (
    <Wrapper>
        <div className="secondary_wrapper">
            <Image 
            src={Youth_illustration} 
            alt='youths'
            className='image_asset_1'
            />
            <div className="content_container">
                <div className="tag_container">
                    <div className="tag">ABOUT</div>
                </div>
                <h3>
                    We are a safe space where we discuss the life of a youth; the ups and downs, the norms and shocks, the good and bad aspects of being a youth in Nigeria.
                    We aim to grow a community of like-minded youths striving towards a, not just positive, but an excellent future, with the knowledge that we are not alone in this world.
                </h3>
                <p>
                    Not to be all talk and no action, we equally aim to connect and enlighten youths in terms of mental health, financial development, career growth and other valuable spheres of life. We hope this platform impacts meaningfully in the lives of youths.
                </p>
                <Link href="/about" className='learn_more_btn'>
                    <h4>Learn more</h4>
                </Link>
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    margin-top: var(--spacing-vvl);
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;


    .secondary_wrapper {
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .image_asset_1 {
        height: 500px;
        width: 100%;
        object-fit: cover;
        object-position: top;
    }

    .tag_container {
        margin-top: var(--spacing-lg);
        width: 100%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
    }

    .tag {
        width: auto;
        padding: 0.5rem 2rem;
        border: solid 1px var(--dark);
        border-radius: 30px;
        font-size: 0.8em;
        font-weight: bold;
    }

    h3 {
        margin-top: var(--spacing-lg);
    }

    p {
        margin-top: var(--spacing-lg);
    }

    .learn_more_btn {
        font-weight: bold;
        margin-top: var(--spacing-lg);
        text-align: start;
    }

    h4 {
        font-size: 1em;
        text-decoration: underline;
        text-decoration-thickness: 2.5px;
        text-underline-offset: 7px;
    }

    @media only screen and (min-width: 768px) {
        .secondary_wrapper {
            display: flex;
            flex-direction: row;
            align-items: flex-end;
            justify-content: space-between;
        }

        .content_container {
            width: 60%;
            margin-left: var(--spacing-lg);
        }

        .image_asset_1 {
            width: 50%;
            height: 350px;
        }

        p {
        margin-bottom: var(--spacing-lg);

        }
    }
`
export default HeroSection