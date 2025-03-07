'use client'

import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { RiSearchLine } from "react-icons/ri";
import { VscMenu } from "react-icons/vsc";

const Header = () => {
  return (
    <Wrapper>
        <Link href="/">
            <h1>MyYouthfulSelf</h1>
        </Link>
        <div className="utils_container">
            <p>Subscribe</p>
            <div className="icon search_icon">
                <RiSearchLine />
            </div>
            <div className="icon menu_icon">
                <VscMenu />
            </div>
        </div>
    </Wrapper>
  )
}


const Wrapper = styled.header`
    position: fixed;
    top: 0;
    z-index: 999 !important;
    height: 80px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 4rem;
    background: var(--primary);

    h1 {
        font-family: var(--font-sigmar);
        font-size: var(--font-size-xl);
        word-spacing: 12px;
    }

    .utils_container {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        >* {
            margin-left: 3rem;
        }
    }

    p {
        cursor: pointer;
    }

    .icon {
        font-size: var(--font-size-lg);
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {

        padding: 2rem;


        h1 {
            font-size: 1.5em;
        }

        .utils_container {

        >* {
            margin-left: 2rem;
        }
        }

        p {
            display: none;
        }
    }

`
export default Header