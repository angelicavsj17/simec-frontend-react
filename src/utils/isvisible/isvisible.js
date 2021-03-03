import React, { useEffect } from 'react'
let IsVisible = ({ children, onVisible }) => {
    let id = new Date().getTime();
    let scroolListener = () => {
        let element = document.getElementById(id);
        if (!isHidden(element)) {
            onVisible();
            window.removeEventListener("scroll", scroolListener);
        }
    }
    useEffect(() => {
        scroolListener()
        return () => window.removeEventListener("scroll", scroolListener)
    }, [])
    let isHidden = (element) => {
        return (element.offsetParent === null)
    }
    return (
        <div id={id}>
            {children}
        </div>
    )
}
export default IsVisible;