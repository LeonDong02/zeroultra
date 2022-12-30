import React from 'react';

export default function Message ({ author, messages }) {
    const lines = []

    messages.forEach((msg) => {
        lines.push(<p className='message'>{msg}</p>)
    })

    return (
        <div className="discord-message">
            <div className="author">{author}</div>
            <div className="messages">{lines}</div>
        </div>
    )
}
