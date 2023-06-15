import React, {FC, useEffect, useRef} from 'react'
import classes from './styles.module.css'
import {useScrollPanels} from "../../hooks/useScrollPanels";
import classNames from "classnames";
import {useTouchScrollPanels} from "../../hooks/useTouchScrollPanels";
import {isMobile} from 'react-device-detect';

export const MoodboardPage: FC = () => {
    const scrollIndex = useScrollPanels();
    const touchScrollIndex = useTouchScrollPanels();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const actualScrollIndex = isMobile ? touchScrollIndex : scrollIndex;
        scrollContainerRef.current?.scroll({top: actualScrollIndex * scrollContainerRef.current?.offsetHeight, behavior: 'smooth'});
    }, [scrollIndex, touchScrollIndex])
    return (
        <div className={classes.scrollContainer} ref={scrollContainerRef}>
            <div className={classNames(classes.scrollPanel, classes.red)}>MoodBoard panel 1</div>
            <div className={classNames(classes.scrollPanel, classes.gold)}>MoodBoard panel 2</div>
            <div className={classNames(classes.scrollPanel, classes.beige)}>MoodBoard panel 3</div>
        </div>
    )
}
