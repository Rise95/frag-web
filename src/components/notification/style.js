import styled from 'styled-components'

export const Container = styled.div`
    display: ${({ active }) => active ? 'flex' : 'none'};
    flex: 1;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    position: absolute;
    background-color: rgba(0,0,0,0.3);
`;

export const Card = styled.div`
    display: flex;
    padding: 10px;
    background-color: #fff;
    height: 40%;
    width: 30%;
    border-radius: 7px;
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16), 0 2px 10px 0 rgba(0,0,0,0.12);
`;