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
    flex-direction: column;
    margin-top: 40px;
    overflow: auto;
    max-height: 400px;
`;