import React, {FC, useEffect, useRef} from 'react'
import classes from './styles.module.css'
import {useScrollPanels} from "../../hooks/useScrollPanels";
import classNames from "classnames";

export const MoodboardPage: FC = () => {
    const scrollIndex = useScrollPanels();
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        console.log(scrollContainerRef.current?.offsetHeight);
        scrollContainerRef.current?.scroll({top: scrollIndex * scrollContainerRef.current?.offsetHeight, behavior: 'smooth'});
    }, [scrollIndex])
    return (
        <div className={classes.scrollContainer} ref={scrollContainerRef}>
            <div className={classNames(classes.scrollPanel, classes.red)}>MoodBoard panel 1</div>
            <div className={classNames(classes.scrollPanel, classes.gold)}>MoodBoard panel 2</div>
            <div className={classNames(classes.scrollPanel, classes.beige)}>MoodBoard panel 3</div>
        </div>
    )
}
