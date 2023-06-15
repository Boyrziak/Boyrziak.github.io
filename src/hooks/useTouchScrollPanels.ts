import {useEffect, useState} from "react";
import {useTouchGesture} from "./useTouchGesture";
import {ETouchGesture} from "../redux/types/enums";

export const sectionsAmount = 3;
const scrollIndexDelay = 1000;

export function useTouchScrollPanels() {
    const [scrollIndex, setScrollIndex] = useState<number>(0);
    const [timestamp, setTimestamp] = useState<number>(Date.now());
    const touchGesture = useTouchGesture();

    useEffect(() => {
        const onScroll = () => {
            const newTimestamp = Date.now();
            if (newTimestamp - timestamp > scrollIndexDelay) {
                setScrollIndex(checkScrollPositionTouch(scrollIndex, touchGesture));
                setTimestamp(newTimestamp);
            }
        }
        window.addEventListener('touchend', onScroll);

        return () => window.removeEventListener('touchend', onScroll);
    }, [scrollIndex, timestamp, touchGesture]);
    return scrollIndex;
}

function checkScrollPositionTouch(scrollIndex: number, scrollDirection: ETouchGesture): number {
    if (scrollDirection === ETouchGesture.down) {
        return scrollIndex >= sectionsAmount ? scrollIndex : scrollIndex + 1;
    }
    if (scrollDirection === ETouchGesture.up) {
        return scrollIndex <= 0 ? scrollIndex : scrollIndex - 1;
    }
    return scrollIndex;
}