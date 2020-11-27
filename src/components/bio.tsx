/** @jsx jsx */
import { jsx, Link as A } from 'theme-ui'

import React, { FunctionComponent, MutableRefObject, ReactChildren, useRef } from "react"
// import styled from "styled-components"
// import { graphql, StaticQuery } from "gatsby"

// import FlexContainer from "./flexContainer"
// import { FadeLink } from "./transition"

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import Button from "./button"
// import Link from "next/link";
import Image from "next/image";


function Bio() {
    const bioRef = useRef(null);
    const [inView] = useIntersectionObserver(bioRef, {
        threshold: .3
    })

    return (
        <section sx={{
            variant: 'styles.layout'
        }}>
            <Column>
                <div sx={{
                    width: '385px',
                    position: 'absolute',
                    left: '-145px',
                    top: '-113px'
                }}>
                    <BioBg />
                </div>

                <Image
                    src="/images/profile.png"
                    alt="Vincent Nalupta's shadow against some subway tiles."
                    width={240}
                    height={320} />
            </Column>
            <Column rhs ref={bioRef} inView={true}>
                <h2 sx={{
                        variant: 'styles.h2',
                        marginBottom: '10px'
                    }}>
                    HELLO!
                </h2>
                <p>
                    My name is Vincent Nalupta and I am currently an Engineering Manager at Grubhub.
                        </p>
                <p>
                    I've won some <A href="https://www.commarts.com/webpicks/timothy-goodman" target="_blank" rel="noopener noreferrer">awards</A> for my work and some <A href="https://twitter.com/snailbites/status/917875803983147008" target="_blank" rel="noopener noreferrer">giant pencils</A> for my <A href="https://cssdevconf2016.sched.com/vnalupta" target="_blank" rel="noopener noreferrer">talks</A>.
                        </p>
                <p
                    sx={{
                        marginBottom: '30px'
                    }}
                >
                    This is my space to flex my design chops and write about interesting tech.
                        </p>

                {/* <Link> */}
                {/* // to={`/blog/${data.link.fields.slug}`}> */}
                <Button flavor="default" sx={{
                    '@media (max-width: 768px)': {
                        margin: '0 auto'
                    }
                }}>Read the Blog</Button>
                {/* </Link> */}
            </Column>
        </section>
    )
}

const Column: FunctionComponent<{
    ref?: MutableRefObject<HTMLDivElement>,
    rhs?: boolean,
    inView?: boolean,
    children: any
}> = ({ rhs, inView, children }) => {
    const base = {
        maxWidth: '300px',
        alignSelf: 'flex-end',
    }

    /*
    ? {
                transform: 'translateX(10px)',
                opacity: 0,
                transition: '250ms ease-in'
            } : {
                position: 'relative',
                paddingRight: '50px',            
                '@media (max-width: 768px)' : {
                    display: 'none'
                }
            }
            */

    let styles = {
        ...base,
        ...(rhs ? {
            transform: 'translateX(10px)',
            opacity: 0,
            transition: '250ms ease-in',
        } : {
                paddingRight: '50px',
                '@media (max-width: 768px)': {
                    display: 'none'
                },
                position: 'relative' as any
            }),
        ...(rhs && inView && {
            transform: 'translateX(0)',
            opacity: 1
        }),
    }

    return (
        <div sx={styles}>
            {children}
        </div>
    )

    //     ${props => props.rhs && `
    //     transform: translateX(10px);
    //     opacity: 0;
    //     transition: 250ms ease-in;
    // `}

    // ${props => props.rhs && props.visible && `
    //     transform: translateX(0);
    //     opacity: 1;
    // `}

}
// const Profile = styled(BioColumn)`
//     position: relative;
//     padding-right: 50px;

//     @media (max-width: 768px) {
//         display: none;
//     }
// `

const BioBg = () => (
    <svg viewBox="0 0 435 490" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id="bioCircle" x1="65.77%" y1="68.9%" x2="14.777%" y2="7.605%" >
                <stop stopColor="#3C4186" offset="0%" />
                <stop stopColor="#4F1C48" offset="100%" />
            </linearGradient>
            <linearGradient id="bioRect" x1="22.991%" y1="0%" x2="50%" y2="83.112%" >
                <stop stopColor="#D6E307" offset="0%" />
                <stop stopColor="#125458" offset="100%" />
            </linearGradient>
        </defs>
        <g fill="none" fillRule="evenodd">
            <circle fill="url(#bioCircle)" cx="180" cy="180" r="180" />
            <rect fill="url(#bioRect)" x="147" y="111" width="269" height="366" rx="6" />
        </g>
    </svg>
)


// const bioQuery = graphql`
//     query BioQuery {
//         profile: file(absolutePath: { regex: "images/profile.png/" }) {
//             childImageSharp {
//                 fixed(width: 240, height: 320) {
//                     ...GatsbyImageSharpFixed
//                 }
//             }
//         },
//         link: markdownRemark(fields: {slug: {eq: "redesign"}}) {
//             fields {
//               slug
//             }
//           }
//     }
// `

export default Bio
