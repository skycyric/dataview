import React from 'react';
import CountUp from 'react-countup';
import { Typography } from '@mui/material';
import { animated, useSpring } from 'react-spring';

const SearchVolume = ({ volume }) => {
    const springProps = useSpring({ opacity: 1, from: { opacity: 0 }, delay: 500 });

    return (
        <animated.div style={springProps}>
            <Typography variant="h4" component="span" color="primary">
                <CountUp start={0} end={volume} duration={2.5} separator="," />
            </Typography>
        </animated.div>
    );
};

export default SearchVolume;
