import styled from 'styled-components'

export const Container = styled.div`
    position: relative;
    cursor: pointer;
`;

export const Badge = styled.div`
    position: absolute;
    height: 20px;
    width: 20px;
    padding: 0px;
    margin: 0px;
    border-radius: 100px;
    right: 3px;
    justify-content: center;
    align-items: center;
    display: flex;
    top: 3px;
    background-color: red;
`;

export const Text = styled.span`
    font-size: 10px; 
    color: #fff; 
    font-weight: bold;
`;

export const Button = styled.button`
    border: none;
    display: inline-block;
    padding: 8px 16px;
    vertical-align: middle;
    overflow: hidden;
    text-decoration: none;
    color: inherit;
    background-color: inherit;
    text-align: center;
    cursor: pointer;
    white-space: nowrap;
`;

export const ContainerNull = styled.div``;