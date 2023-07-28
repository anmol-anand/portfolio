import React from 'react';
import COMING_SOON_GIF from './assets/coming-soon/coming-soon.gif';
import {Heading} from '@chakra-ui/react';

const ComingSoon = () => {
  return (
    <div style={{ 
        width: '100%', 
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
        <img src={COMING_SOON_GIF} alt="Coming Soon GIF" width='200px'/>
        <Heading size="xl" p="20px" justifyContent="center" width={"100%"} display="flex">Working on this page!</Heading>
    </div>
  );
};

export default ComingSoon;
