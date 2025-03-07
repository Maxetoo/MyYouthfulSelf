// import React from 'react'
// import styled from 'styled-components'
// import Image from 'next/image'
// import Link from 'next/link'

// const data = [{
//     id: 0,
//     image: 'https://images.unsplash.com/photo-1740393076705-69922a4cce76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
//     tags: ["Resources", "Books"],
//     title: 'In a Retrofitted School Bus at the U.S.-Mexico Border, Guadalupe Maravilla Heals Through Vibrations',
//     time: '14 hours ago'

// }, 
// {
//     id: 1,
//     image: 'https://images.unsplash.com/photo-1740382281576-95db2cf42d72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
//     tags: ["News", "Design"],
//     title: 'CDK Company Makes Moves Through a Contemporary Art Museum to Billie Eilish’s ‘Bittersuite’',
//     time: '17 hours ago'

// }, 
// {
//     id: 2,
//     image: 'https://images.unsplash.com/photo-1740619061019-38581c1c293a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
//     tags: ["Socials"],
//     title: 'A Short Documentary Celebrates the Fruits of Nearly Five Decades of ‘Extreme Beachcombing’’',
//     time: '2 days ago'

// }, 
// {
//     id: 3,
//     image: 'https://images.unsplash.com/photo-1740428639827-79acb8f07709?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
//     tags: ["Books"],
//     title: 'Loosely Woven Burlap Mimics Digital Pixels in Jennifer J. Lee’s Photorealistic Paintings',
//     time: '21 hours ago'

// }]

// const LatestSection = () => {
//   return (
//     <Wrapper>
//         <div className="secondary_wrapper">
//             <h3>The Latest</h3>
//             <div className="blog_p_container">
//                 {data.map((values) => {
//                     const {id, title, values, image} = values
//                     return <div className="blog_container" key={id}>

//                     </div>
//                 })}
//             </div>
//         </div>
//     </Wrapper>
//   )
// }

// const Wrapper = styled.div`
//     margin-top: var(--spacing-xl);
//     padding-bottom: var(--spacing-xxl);
//     width: 100%;
//     display: flex;
//     flex-direction: column;
//     align-items: center;

//     .secondary_wrapper {
//         width: 90%;
//         display: flex;
//         flex-direction: column;
//         align-items: flex-start;
//     }

//     .blog_p_container {

//     }

// `
// export default LatestSection

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const data = [
  {
    id: 0,
    image: 'https://images.unsplash.com/photo-1740393076705-69922a4cce76?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
    tags: ['Resources', 'Books'],
    title: 'In a Retrofitted School Bus at the U.S.-Mexico Border, Guadalupe Maravilla Heals Through Vibrations',
    time: '14 hours ago',
  },
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1740382281576-95db2cf42d72?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOXx8fGVufDB8fHx8fA%3D%3D',
    tags: ['News', 'Design'],
    title: 'CDK Company Makes Moves Through a Contemporary Art Museum to Billie Eilish’s ‘Bittersuite’',
    time: '17 hours ago',
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1740619061019-38581c1c293a?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyN3x8fGVufDB8fHx8fA%3D%3D',
    tags: ['Socials'],
    title: 'A Short Documentary Celebrates the Fruits of Nearly Five Decades of ‘Extreme Beachcombing’',
    time: '2 days ago',
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1740428639827-79acb8f07709?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzMnx8fGVufDB8fHx8fA%3D%3D',
    tags: ['Books'],
    title: 'Loosely Woven Burlap Mimics Digital Pixels in Jennifer J. Lee’s Photorealistic Paintings',
    time: '21 hours ago',
  },
];

const LatestSection = () => {
  return (
    <Wrapper>
      <div className="secondary_wrapper">
        <h2>The Latest</h2>
        <div className="blog_p_container">
          {
            data.map((values, index) => {
                const {id, title, image, tags, time} = values
                return <div 
                className={`blog_container ${index === 0 ? 'featured' : ''}`}
                key={id}
                >
                <Image
                src={image}
                alt={title}
                width={500}
                height={300}
                className="blog_image"
              />
              <div className="content">
                <div className="tag_container">
                    {tags.map((value, ind) => {
                        return <div className='tag' key={ind}>{value.toLocaleUpperCase()}</div>
                    })}
                </div>
                <h3 className={`${index === 0 ? 'featured_title' : ''}`}>{title}</h3>
                <p>{time}</p>
              </div>
                </div>
            })
          }
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: var(--spacing-xl);
  padding-bottom: var(--spacing-xxl);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  .secondary_wrapper {
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h2 {
    font-size: 1.3em;
  }

  .blog_p_container {
    margin-top: var(--spacing-lg);
    width: 100%;
    height: auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    gap: var(--spacing-lg);
  }

  .blog_container {
    border-radius: 8px;
    height: auto;
  }

  .featured {
    grid-column: span 2;
    height: auto;
  }

  .featured > .blog_image {
    height: 400px;
  }

  .blog_image {
    width: 100%;
    height: 300px;
    object-fit: cover;
    object-position: top;
  }

  .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    >* {
        /* margin-top: var(--spacing-lg); */
        margin-top: 0.8rem;
    }
  }

  .tag_container {
        width: 100%;
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        gap: 0.5rem;
  }

  .tag {
        width: fit-content;
        height: auto;
        padding: 0.5rem 2rem;
        border: solid 1px var(--dark);
        border-radius: 50px;
        font-size: 0.8em;
        font-weight: bold;
        display: grid;
        place-content: center;
        cursor: pointer;
    }

  .featured_title {
    font-size: 2em;
  }

  
  p {
    color: var(--font-light);
    font-size: 1em;
  }

  

  @media (max-width: 768px) {
    .blog_p_container {
      grid-template-columns: 1fr;
    }

    .featured {
      grid-column: span 1;
    }
  }
`;

export default LatestSection;
