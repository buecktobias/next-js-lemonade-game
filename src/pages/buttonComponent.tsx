'use client';
import {useState} from "react";

export default function ButtonComponent() {
    let [count, setCount] = useState(0);
    return (
        <>
            <p>Count {count}</p>
            <button onClick={() => setCount(count + 1)}>Mein Button</button>
        </>
    )
}