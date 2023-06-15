import {useEffect, useState} from "react";

export const sectionsAmount = 3;
const scrollIndexDelay = 1000;

export function useScrollPanels() {
    const [scrollIndex, setScrollIndex] = useState<number>(0);
    const [timestamp, setTimestamp] = useState<number>(Date.now());

    useEffect(() => {
        const onScroll = (event: WheelEvent) => {
            const newTimestamp = Date.now();
            if (newTimestamp - timestamp > scrollIndexDelay) {
                setScrollIndex(checkScrollPosition(scrollIndex, event.deltaY));
                setTimestamp(newTimestamp);
            }
        }
        window.addEventListener('wheel', onScroll);

        return () => window.removeEventListener('wheel', onScroll);
    }, [scrollIndex, timestamp]);
    return scrollIndex;
}

function checkScrollPosition(scrollIndex: number, scrollDistance: number): number {
    if (scrollDistance > 0) {
        return scrollIndex >= sectionsAmount ? scrollIndex : scrollIndex + 1;
    }
    if (scrollDistance < 0) {
        return scrollIndex <= 0 ? scrollIndex : scrollIndex - 1;
    }
    return scrollIndex;
}