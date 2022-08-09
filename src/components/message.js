import React from 'react'
import './style.css'
// import list from './messageApi'

const Message = ({listOfPeople}) => {
    return (
        <>
            {listOfPeople.map((el) => {
                return (
                    <div className="message">
                <div className='data-field'>
                    <div className="img-block img-block-msg" style={{backgroundImage:`url(${el.photo})`}}></div>
                    <div className="data">
                        <div className="container">
                            <p className='person-name'>{el.name}</p>
                            <p className='text-message'>{el.recent_msg}</p>
                        </div>
                    </div>
                </div>
                <div className='time-field'>
                    <div className="container">
                        <p>{el.time}</p>
                        <p><span>{el.new_msg}</span></p>
                    </div>
                </div>
            </div>
                )
            })}
        </>
    )
}

export default Message