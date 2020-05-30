import styled from 'styled-components';

export const HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

export const Content = styled.div`
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Input = styled.input`
    border: 1px solid #ddd;
    border-radius: .25rem 0 0 .25rem;
    height: 1.5rem;
    padding: 0 .5rem;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const Button = styled.button`
    height: 1.6rem;
    border: 1px solid #4F4F4F;
    border-radius: 0 .25rem .25rem 0;
    background: #4F4F4F;
    color: #fff;
    top: 0px;
    cursor: pointer;

    &:focus,
    &:active {
        outline: none;
        box-shadow: none;
    }
`;

export const ErrorMsg = styled.span`
    display: block;
    font-family: sans-serif;
    font-size: 0.68rem;
    font-weight: 600px;
    color: red;
    margin-top: 1rem;
`;