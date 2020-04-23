import React, { useState } from 'react';

export const StateUsage = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="column">
            <p>you click {count} times!</p>
            <button className="green" onClick={() => setCount(count + 1)}>click to up</button>
            <button className="white" onClick={() => setCount(count - 1)}>click to down</button>
        </div>
    )
}