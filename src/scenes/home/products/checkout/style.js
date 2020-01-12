import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    flex: 0.5;
    flex-direction: column;
    height: 80%;
`;

export const ContainerList = styled.div`
    display: flex;
    flex-direction: column
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

export const CheckOut = styled.span``

export const ContainerTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.div`
    font-size: 35px;
    font-weight: bold
`;

export const Body = styled.div`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: row;
    align-items: center;
    padding: 5px;
    margin-bottom: 15px;
    margin-top: 10px;
    justify-content: space-around;
    border: 1px solid black;
    padding: 17px;
`;

export const Footer = styled.div`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
`;

export const ContainerTotal = styled.div``;
export const Total = styled.span``;
export const ContainerTotalValue = styled.div``;
export const TotalValue = styled.span``;