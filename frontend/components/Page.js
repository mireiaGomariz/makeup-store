
import React, { Component } from 'react';
import Header from './Header';
import Meta from './Meta';
import styled, {ThemeProvider, injectGlobal } from 'styled-components';

const StyledPage = styled.div `
    background: white;
    color: ${props => props.theme.black};
`;

const Inner = styled.div`
    max-width: ${props => props.theme.maxWidth};
    margin: 0 auto;
    padding: 2rem;
`;

const theme = {
    pink: '#FA0994',
    black: '#393939',
    grey: '#3A3A3A',
    lightGrey: '#E1E1E1',
    offWhite: '#EDEDED',
    maxWidth: '1000px',
    bs: '0 12 px 24px 0 rgba(0, 0, 0, 0.9',
};

class Page extends Component {
  render() {
    return (
    <ThemeProvider theme={theme}>
        <StyledPage>
            <Meta />
            <Header />
            <Inner>{this.props.children} </Inner>
        </StyledPage>
    </ThemeProvider>

    );
  }
}

export default Page;