import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #4da768;

    display: flex;
    justify-content: center;
    align-items: center;
`

export const Content = styled.div`
    background-color: #26874e;
    width: 60%;
    padding: 20px;
    border-radius: 5px;
    
`

export const Row = styled.div`
    display: flex;
    flex-direciton: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direciton: column;
    justify-content: space-between;
    align-items: center;
`