import React, { useRef, useState } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
export const Testimonials = () => {
    const [tx, setTx] = useState(0);
    const slider = useRef();

    const slideForward = () => {
        if (tx > -50) {
            setTx(tx - 25);
        }
    }

    const slideBackward = () => {
        if (tx < 0) {
            setTx(tx + 25);
        }
    }

return (
    <div className='testimonials' id='testimonials'>
       <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
<img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
        <div className="slider">
            <ul ref={slider} style={{ transform: `translateX(${tx}%)` }}>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_1} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity,Usa</span>
                            </div>
                        </div>
                        <p>Chosing the right university can be a daunting task, but Edusity made it easy for me.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_2} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity,Usa</span>
                            </div>
                        </div>
                        <p>Chosing the right university can be a daunting task, but Edusity made it easy for me.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_3} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity,Usa</span>
                            </div>
                        </div>
                        <p>Chosing the right university can be a daunting task, but Edusity made it easy for me.</p>
                    </div>
                </li>
                <li>
                    <div className="slide">
                        <div className="user-info">
                            <img src={user_4} alt="" />
                            <div>
                                <h3>John Doe</h3>
                                <span>Edusity,Usa</span>
                            </div>
                        </div>
                        <p>Chosing the right university can be a daunting task, but Edusity made it easy for me.</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    )
}
