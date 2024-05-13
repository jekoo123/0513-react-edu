import styled from "styled-components";

export const CardContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    box-shadow:0px 2px 5px #c9c9c9;
    border-radius:5px;
    box-sizing:border-box;

`

export const CardTitleContainer = styled.div`
    display:flex
    justify-content:center;
    align-items:center;
    padding:12px 20px;
    background-color:#00000008;
    width:250px;
`

export const CardTitle = styled.div`
    text-align:center;
    color:#212529;
    font-size:26px;
`

export const CardContents = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:20px;
    width:250px;
    box-sizing:border-box;

`

export const HorizontalContainer = styled.div`
    display:flex;
    align-items:flex-end;
    margin-bottom:12px;
    gap:7px;
`

export const BoldText = styled.div`
    font-size:40px;
    font-weight:bold;  
`

export const GreyText = styled.div`
    font-size:36px;
`

export const Text = styled.div`
    font-size:16px;
    color:#212529;
    text-align:center;
    line-height :25px;
`

export const StyledButton = styled.div`
    padding:8px 16px;
    margin-top:25px;
    margin-bottom:10px;
    font-size:20px;
    background-color:#007BFF;
    color:white;
    border-radius:5px;
    text-align:center;
    width:100%;
    cursor:pointer;
    border: 1px solid #007BFF;
`