import React from 'react'

const Footer = () => {
    return (
        <div style={footerStyle}>
            <h3>Appetite for Reviews℠ 2021</h3> Developed by: Fernando Rodulfo, Contact: rodulforo888@gmail.com
        </div>
    )
}

const footerStyle = {
    backgroundColor: '#ae2a2f',
    color: 'white',
    margin: 'auto',
    padding: '0.3em',
    textAlign: 'center',
    position: 'fixed',
    bottom: '0',
    width: '100%',
}

export default Footer