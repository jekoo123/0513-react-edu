import styled from "styled-components";

export const Container = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:16px 24px;
    box-shadow:2px 0.5px 5px #c9c9c9;
`

export const NavContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
`


export const Title = styled.div`
    font-size:20px;
`

export const StyledButton = styled.div`
    border: 1px solid #007BFF;
    border-radius: 5px;
    font-size:16px;
    color:#007BFF;
    padding:6px 12px;    
    cursor:pointer;
    text-align:center;
    margin-left:24px;
`

export const NavContents = styled.div`
    padding:8px;
    cursor:pointer;
    font-size:16px;
    color:#343A$0;
    &:hover{
        text-decoration:underline;
    }

`