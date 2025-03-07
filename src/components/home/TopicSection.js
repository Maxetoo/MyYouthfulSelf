import React from 'react'
import styled from 'styled-components'

const TopicSection = () => {
  return (
    <Wrapper>
        <h1>Pick Interest</h1>
        <div className="tag_container">
            <div className="tag">GROWTH</div>
            <div className="tag">CAREER</div>
            <div className="tag">RELATIONSHIP</div>
            <div className="tag">SOCIALS</div>
            <div className="tag">CHALLENGES</div>
            <div className="tag">HEALTH</div>

        </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    margin-top: var(--spacing-xxl);
    width: 100%;
    background: var(--dark);
    color: var(--white);
    padding: 4rem;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-bottom: 4rem;

    .tag_container {
        margin-top: var(--spacing-xl);
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
    }

    .tag {
        width: fit-content;
        height: 80px;
        padding: 0.5rem 2rem;
        border: solid 1px var(--white);
        border-radius: 50px;
        font-size: 2em;
        font-weight: bold;
        display: grid;
        place-content: center;
        cursor: pointer;
    }

    @media only screen and (max-width: 768px) {
        .tag {
            font-size: 1.3em;
        }
    }
`
export default TopicSection