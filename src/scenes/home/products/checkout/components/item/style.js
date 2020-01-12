import styled from 'styled-components'

export const Container = styled.div`
    padding: 17px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 1px solid black;
    margin-bottom: 3px;
`;

export const ContainerSubTotal = styled.div``;

export const SubTotal = styled.span``;

export const ContainerQuantity = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Quantity = styled.span`
    padding-left: 10px;
    padding-right: 10px;
`;

export const ContainerName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Name = styled.span`
    padding-left: 20px;
`;

export const Remove = styled.span``;
export const Add = styled.span``;

export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center
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

export const RemoveProduct = styled.span``;