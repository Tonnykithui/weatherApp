/* const Container = {
    paddingTop:'8px',
    paddingRight:'20px',
    paddingLeft:'20px',
    paddingBottom:'8px'
} */

import React from 'react';
import styled from 'styled-components';

const GlobContainer = styled.div`
width: 100wh;
padding: 0 40px;
min-height: 60px;
`
const Container = ({ children }) => {
    return (
        <GlobContainer>
            { children }
        </GlobContainer>
    )
}

export default Container;