import React from 'react'

const ProgressBar = ({ progress }) => {

    const Parentdiv = {
        height: '25px',
        width: '100%',
        maxWidth: '100%',
        backgroundColor: '#002F3D',
        borderRadius: '20px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }

    const Childdiv = {
        height: '50%',
        width: `${progress}%`,
        maxWidth: '97.8%',
        marginLeft: '7px',
        backgroundColor: 'var(--progress-bar)',
        borderRadius: '30px',
        textAlign: 'center',
        transition: 'all 2.2s',
    }

    const progresstext = {
        padding: 10,
        color: 'black',
        fontWeight: 900
    }

    return (
        <div style={Parentdiv} id="progress-bar">
            <div style={Childdiv}>
                <span style={progresstext}></span>
            </div>
        </div>
    )
}

export default ProgressBar;