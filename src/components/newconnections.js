import React from 'react'
import newconnectionslist from './newconnectionApi'

const NewConnections = () => {
    return (
        <>
            {newconnectionslist.map((el) => {
                return (
                    <div className='new-connection'>
                        <div className="img-block" style={{backgroundImage:`url(${el.photo})`}}></div>
                        <p className="name">{el.name}</p>
                    </div>
                )
            })}
        </>
    )
}

export default NewConnections