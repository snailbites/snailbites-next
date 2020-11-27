/** @jsx jsx */
import { jsx } from 'theme-ui'

import React, { useState, useEffect, useRef } from "react";
// import Screenshot from "./screenshot"
import { Colors } from "../theme/theme"

import useIntersectionObserver from "../hooks/useIntersectionObserver";
// import imac from "../../images/screenshots/work-imac.png";
import Button from './button';

const projects = [
    {
        'shortname': 'dls',
        'name': "Grubhub Design System",
        'caption': 'Creator and core maintainer of the Grubhub Design System - which has reached total adoption across all Web, Android and iOS teams across the entire company and forms the basis for all feature work at Grubhub.',
        'url': "https://speakerdeck.com/snailbites/patterns-language-and-the-tale-of-the-million-dollar-button-2",
        'link': 'See my slides'
    },
    {
        'shortname': 'cfd',
        'name': "Grubhub Contact Free Delivery",
        'caption': 'Web team lead and IC for COVID-19 response critical feature launch - a full-company emergency feature launch that went from concept to production in just 3 days.',
        'url': 'https://blog.grubhub.com/health-and-safety',
        'link': 'Learn More'
    },
    {
        'shortname': 'closedbag',
        'name': "Grubhub Floating Cart",
        'caption': 'Redesigned the Grubhub web cart experience, moving it from a full height sidebar to a popover notification-style bag; unlocking valuable real estate for the design team to use for optimized layout and UX.',
        'url': 'https://www.grubhub.com/restaurant/hummus--pita-co-585-6th-ave-new-york/267853',
        'link': null
    },
    {
        'shortname': 'tgoodman',
        'name': "Tim Goodman Portfolio",
        'caption': 'Developed a fully responsive portfolio page for illustrator Timothy Goodman. For this early work with responsive design, my agency was awarded a CommArts Webpick of the Day.',
        'url': 'https://friendly-kare-ac2a16.netlify.app/',
        'link': 'See a demo'
    },
    {
        'shortname': 'jcrew-pdp',
        'name': "J.Crew Product Detail Page",
        'caption': 'Developed the front end functionality for an overhaul of the J.Crew, J.Crew Factory and Madewell product detail pages.',
        'url': 'https://www.jcrew.com/p/womens_category/sweaters/pullover/tippi-sweater/E1277',
        'link': null
    },
    {
        'shortname': 'mw-searchsale',
        'name': "Madewell Search & Sale",
        'caption': 'Refactored the search experience as a single page app and built a drop down navigation bar. Worked closedly with design to restyle the UX to be more in line with the overall Madewell brand experience.',
        'url': null,
        'link': null
    },
    {
        'shortname': 'espn-recruiting',
        'name': "ESPN Recruiting Landing Page",
        'caption': 'Designed within ESPN\'s content framework and developed the front end templates for ESPN\'s recruiting portal',
        'url': 'http://espn.go.com/college-sports/basketball/recruiting/school/_/id/120',
        'link': null
    },
    {
        'shortname': 'leadership',
        'name': "The Leadership Room",
        'caption': 'Designed and built several pages within the existing style direction of The Leadership Room branding.',
        'url': null,
        'link': null
    },
    {
        'shortname': 'richtu',
        'name': "Rich Tu Portfolio",
        'caption': 'Worked closely with award-winning illustrator Rich Tu to develop a horizontal scrolling portfolio page.',
        'url': 'https://pedantic-pare-72cabc.netlify.app/',
        'link': 'See a demo'
    },
    {
        'shortname': 'codeblue',
        'name': "CodeBlue Blog",
        'caption': 'Created an emergency preparedness blog for Seton Hall University. Worked closely with design to chop up a standard WordPress blog to look and feel like an actual comic book.',
        'url': 'https://blogs.shu.edu/project/code-blue/',
        'link': 'Read More'
    }
]

const FADE_TIMING = 350;

const Work = () => {
    const [project, setProject] = useState(null)
    const [loading, setLoading] = useState(true)
    const [open, setDrawer] = useState(false)

    const figureRef = useRef(null);
    const [inView] = useIntersectionObserver(figureRef, {
        threshold: .5
    })

    useEffect(() => {
        setProject(projects[0])
        if (inView) {
            setLoading(false);
            setDrawer(true);
        }
    }, [inView])

    /**
     * Click handler for project selector 
     *
     * @param {*} item     
     */
    function handleClick(item) {
        if (item.shortname === project.shortname) {
            return;
        }

        let start;
        const tick = timestamp => {
            if (!start) {
                start = timestamp;
            }

            if (timestamp - start <= FADE_TIMING) {
                window.requestAnimationFrame(tick)
            } else {
                setProject(item);
                setLoading(false);
                setDrawer(true);
            }
        }

        setLoading(true);
        setDrawer(false);
        window.requestAnimationFrame(tick)
    }

    return (
        <>
            <h2 id="work" 
                sx={{ textAlign: 'center' }}>
                    Featured Projects
            </h2>
            <section sx={{
                variant: 'styles.layout'
            }}>
                <div sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    
                      '@media (min-width: 1100px)' : {
                        flexDirection: 'row',
                        alignItems: 'initial'
                      }  
                }}>
                    <aside sx={{
                        flex: '1 1 100%',
                        textAlign: 'center',
                      
                        '@media (min-width: 1100px)' : {
                          textAlign: 'left',
                          flex: 'initial'
                        }  
                    }}>
                        <ul sx={{
                            listStyleType: 'none'
                        }}>
                            {projects.map(item => (
                                <li key={item.shortname} sx={{
                                    mb: '.75rem',

                                    '@media (max-width: 1100px)': {
                                        display: 'inline',

                                        '&:after': {
                                            content: `"|"`
                                        },

                                        '&:last-child:after': {
                                            content: 'none'
                                        }
                                    }
                                }}>
                                    <Button
                                        flavor="link"
                                        selected={project && project.shortname === item.shortname}
                                        onClick={() => handleClick(item)}
                                    >
                                        {item.name}
                                    </Button>
                                </li>)
                            )}
                        </ul>
                    </aside>
                    {/* <StyledFigureWrapper ref={figureRef}>
                        <StyledFigure>
                            {project && (
                                <>
                                    <StyledScreenshot
                                        className={loading ? 'loading' : null}
                                    >
                                        <Screenshot filename={project.shortname} />
                                    </StyledScreenshot>
                                    <StyledCaption open={open} className="small">
                                        {project.caption}<br />
                                        {project.url && ` `}
                                        {project.url && <a href={project.url} rel="noopener noreferrer" target="_blank">
                                            {project.link ? project.link : 'Link'} &rarr;
                    </a>}
                                    </StyledCaption>
                                </>
                            )}
                        </StyledFigure>
                    </StyledFigureWrapper> */}
                </div>
            </section>
        </>
    )
}

/*
const StyledFigureWrapper = styled.div`
  // default computed <figure> styles
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 40px;
  margin-inline-end: 40px;

  flex: none;

  @media (min-width: 1100px) {
    flex: 0 0 630px;    
  }  

  position: relative;
  width: 630px;
  height: 490px;

  background: url(${imac}) no-repeat 0 0;
`

const StyledFigure = styled.figure`
  margin: 0;
  position: absolute;
  top: 26px;
  left: 25px;
  width: 580px;
  height: 333px;
  overflow: hidden;
`

const StyledScreenshot = styled.div`  
  transition: opacity ${FADE_TIMING}ms ease-out;
  opacity: 1;  
  &.loading {
    opacity: 0;
  }
`

const StyledCaption = styled.figcaption`
  position: absolute;      
  margin: 0;
  padding: 10px;

  background-color: ${Colors.sesame};

  & a {
    text-decoration: none;
  }
  
  transition bottom ${FADE_TIMING}ms ease-out;  
  bottom: 0;
  bottom: ${props => props.open ? 0 : `-200px`}
`;
*/
export default Work;