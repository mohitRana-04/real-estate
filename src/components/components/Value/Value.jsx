import React,  { useState }  from 'react';
import{
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemState,
    AccordionItemPanel
} from 'react-accessible-accordion'
import "react-accessible-accordion/dist/fancy-example.css";
import {MdOutlineArrowDropDown} from 'react-icons/md'
import './Value.css'
import data from './accordion.jsx'

const Value = () => {
  return (
    <section className='v-wrapper'>
        <div className="paddings innerWidth flexCenter v-container">
            {/* Left side */}
            <div className="v-left">
                <div className="image-container">
                    <img src="./value.png" alt=""/>
                </div>
            </div>

            {/* Right side */}
            <div className="flexColStart v-right">
                <span className='orangeText'>Our Value</span>
                <span className='primaryText'>Value We Give To You</span>
                <span className='secondaryText'>
                    We are ready to help by providing the best services for you.
                    <br/>
                    We believe a good place to live can make your life better.
                </span>

                <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
                >
                    {
                        data.map((item,i)=> {
                            const[className, setClassName] = useState(null)
                            return(
                            <AccordionItem className={'accordionItem ${classname}'} key={i} uuid={i}>
                                <AccordionItemHeading>
                                    <AccordionItemButton className="accordionButton">

                                        <AccordionItemState>
                                            {({expanded}) => expanded ? setClassName("expended") : setClassName("collapsed")}
                                        </AccordionItemState>



                                        <div className="flexCenter icon">{item.icon}</div>
                                        <span className="primaryText">
                                            {item.heading}
                                        </span>
                                        <div className="flexCenter icon">
                                            <MdOutlineArrowDropDown size={20}/>
                                        </div>
                                    </AccordionItemButton>
                                </AccordionItemHeading>

                                <AccordionItemPanel>
                                    <p className="secondaryText">{item.detail}</p>
                                </AccordionItemPanel>
                            </AccordionItem>
                            )
                        }
                        )
                    }
                </Accordion>
            </div>
        </div>
    </section>
  )
}


export default Value