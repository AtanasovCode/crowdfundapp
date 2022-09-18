import React from 'react'

const ProgressBar = ({ bgcolor, progress }) => {

    const Parentdiv = {
        height: '20px',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#222',
        borderRadius: '20px',
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        maxWidth: '100%',
        backgroundColor: 'var(--progress-bar)',
        borderRadius: '20px',
        textAlign: 'center',
        transition: 'all .665s'
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default ProgressBar;