import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const Message = styled.div`
    font-size: 18px;
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

export const Text = styled.span`

`;