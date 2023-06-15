import {useEffect, useState} from "react";
import {ETouchGesture} from "../redux/types/enums";

export function useTouchGesture() {
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    useEffect(() => {
        const onTouchScroll = (event: TouchEvent) => {
            setTouchStart(event.changedTouches[0].clientY);
        }
        window.addEventListener('touchstart', onTouchScroll);

        return () => window.removeEventListener('touchstart', onTouchScroll);

    },[]);
    useEffect(() => {
        const onTouchScroll = (event: TouchEvent) => {
            setTouchEnd(event.changedTouches[0].clientY);
        }
        window.addEventListener('touchend', onTouchScroll);

        return () => window.removeEventListener('touchend', onTouchScroll);

    },[]);
    if (touchEnd > touchStart) {
        return ETouchGesture.up;
    }
    if (touchEnd < touchStart) {
        return ETouchGesture.down;
    }
    return ETouchGesture.idle;
}