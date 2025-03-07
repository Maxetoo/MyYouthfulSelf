'use client'
import React from 'react'
import styled from 'styled-components'
import {HeroSection, TopicSection, LatestSection, NewsLetterSection} from '@/components/home'

const page = () => {
  return (
    <Wrapper>
      <HeroSection/>
      <TopicSection/>
      <LatestSection/>
      <NewsLetterSection/>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;
    height: auto;
`
export default page