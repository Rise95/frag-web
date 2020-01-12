import styled from 'styled-components'

export const Container = styled.div`
    border: 1px solid black;
    padding: 17px;
    width: 100%;
    cursor: pointer;
    margin-bottom: 3px;
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-around;
`;


export const Title = styled.span`

`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid black;
    padding: 5px;
    color: #000;
    background-color: #fff;
    user-select: none;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;

    &:hover {
        color: #000;
        background-color: #ccc;
    }
`;

export const ButtonText = styled.span`

`;