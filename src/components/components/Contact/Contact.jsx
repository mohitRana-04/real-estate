import React from 'react'
import './Contact.css';
import { MdCall } from 'react-icons/md'
import { BsFillChatDotsFill } from 'react-icons/bs'
import { HiChatBubbleBottomCenter } from 'react-icons/hi2'

const contact = () => {
    return (
        <section className="c-wrapper">
            <div className="paddings innerwidth flexCenter c-container">
                {/leftside/}
                <div className="flexcolStart c-left">
                    <span className='orangreText'>Our Contact</span>
                    <span className='primaryText'>Easy to contact Us</span>
                    <span className='secondaryText'>We always ready to help by
                        providing the best sevices for you</span>

                    <div className="flexcolStart contactModes">
                        {/firstrow/}
                        <div className="flexcolStart row">
                            <div className="flexcolCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexcolStart detail">
                                        <span className='primaryText'>call</span>
                                        <span className='secondaryText'>021 123 145
                                            14</span>
                                    </div>

                                </div>
                                <div className="flexCenter button">call now</div>
                            </div>
                        </div>
                        {/secondmode/}
                        <div className="flexcolCenter mode">
                            <div className="flexStart">
                                <div className="flexCenter icon">
                                    <BsFillChatDotsFill size={25} />
                                </div>
                                <div className="flexcolStart detail">
                                    <span className='primaryText'>chat</span>
                                    <span className='secondaryText'>021 123 145
                                        14</span>
                                </div>

                            </div>
                            <div className="flexCenter button">chat now</div>
                        </div>

                        {/secondrow/}
                        <div className="flexStart >rows">
                            <div className="flexcolCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <MdCall size={25} />
                                    </div>
                                    <div className="flexcolStart detail">
                                        <span className='primaryText'>video call</span>
                                        <span className='secondaryText'>021 123 145
                                            14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">video call now</div>
                            </div>
                            {/fourthdmode/}
                            <div className="flexcolCenter mode">
                                <div className="flexStart">
                                    <div className="flexCenter icon">
                                        <HiChatBubbleBottomCenter size={25} />
                                    </div>
                                    <div className="flexcolStart detail">
                                        <span className='primaryText'>message</span>
                                        <span className='secondaryText'>021 123 145
                                            14</span>
                                    </div>
                                </div>
                                <div className="flexCenter button">message now</div>
                            </div>
                        </div>



                    </div>

                </div>
                {/rightside/}
                <div className="c-right">
                    <div className="image-container">
                        <img src="./contact.jpg" alt="" />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default contact