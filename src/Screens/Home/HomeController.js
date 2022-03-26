import React, { useState, useEffect, useRef } from 'react';
import HomeView from './HomeView'

const HomeController = () => {

    const [runStatus, setRunStatus] = useState(0);
    const [count, setCount] = useState(0);
    const interval = useRef(null);

    useEffect(() => {

        return () => {
            if (interval.current) {
                clearInterval(interval.current);
            }
        }
    }, [])

    const onClickStart = () => {
        if (interval.current) {
            clearInterval(interval.current);
        }

        if (runStatus === 1) {
            setRunStatus(3);
        } else {
            setRunStatus(1);
            interval.current = setInterval(() => {
                setCount(count => count + 1);
            }, 1000);
        }
    }

    const onClickStop = () => {
        clearInterval(interval.current);
        setRunStatus(2);
        setCount(0);
    }

    const onClickErase = () => {
        setCount(0);
    }

    return (
        <HomeView
            runStatus={runStatus}
            count={count}
            onClickStart={onClickStart}
            onClickStop={onClickStop}
            onClickErase={onClickErase}
        /> //Chamando o View
    )
}
export default HomeController;