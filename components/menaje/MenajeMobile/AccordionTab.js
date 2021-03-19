// IMPORTS
    // - Modules
    import {useRef, useState} from 'react'
    import styled from 'styled-components'
    import gsap from 'gsap'
// - Components

// - Components
    import { brandingColors, brandingFonts } from '../../../styles/customStyles/brandingStyles'
//


// STYLES
    const AccordionTabStyle = styled.div`

        position: relative;

        .plus{
            position: absolute;
            right:10px;
            top: 30px;
            height: 20px;
            width: 20px;

            .lineHorizontal{
                position: absolute;
                width: 100%;
                height: 2px;
                background: ${brandingColors.light};
                top: 9px;
            }
            .lineVertical{
                position: absolute;
                width: 2px;
                height: 100%;
                background: ${brandingColors.light};
                left: 9px;
            }
        }

        .accordionMenu{
            height: 85px;
            padding: 10px; 
            border-top: 1px solid ${brandingColors.light};
            .title{
                font-family: ${brandingFonts.display};
                color: ${brandingColors.light};
                font-size: 50px;
                line-height: 1;
            }
            .emoji{
                font-size: 35px;
                line-height: 1;
            }
        }
    `
    const AccordionContent = styled.div`
        background: ${ props => props.inputColor || brandingColors.light };
        text-align: center;
        overflow: hidden;
        height: 0;
        p{
            padding: 20px 35px;
        }
    `
// 


// MAIN COMPONENT
export default function AccordionTab({menuTitle, menuEmoji, bgColor, children}) {

    const [tabOpen, setTabOpen] = useState(false)
    let tabRef = useRef()
    let tabContentRef = useRef()
    let lineVerticalRef = useRef()

    const openTabAnimation = () => {

        const tweenDuration = 0.4
        if(tabOpen === false){
            gsap.to(tabContentRef, {duration: tweenDuration, height: "auto"})
            gsap.to(lineVerticalRef, {duration: tweenDuration, rotate: 90})
            setTabOpen(true)
        } else if (tabOpen === true ){
            gsap.to(tabContentRef, {duration: tweenDuration, height: 0})
            gsap.to(lineVerticalRef, {duration: tweenDuration, rotate: 0 })
            setTabOpen(false)
        }
    }


    return (

        <AccordionTabStyle className="accordionTab" onClick={openTabAnimation} ref={el => tabRef = el}>

            <span className="plus">
                <span className="lineHorizontal" />
                <span className="lineVertical" ref={el => lineVerticalRef = el} />
            </span>

            <div className="accordionMenu">
                <span className="title">{menuTitle} </span>
                <span className="emoji">{menuEmoji}</span>
            </div>

            <AccordionContent inputColor={bgColor} ref={el => tabContentRef = el}>
                {children}
            </AccordionContent>
            
        </AccordionTabStyle>

    )
}
//