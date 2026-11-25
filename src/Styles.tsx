import styled from "styled-components"

{/* This is the shared styles file across the application. Any page can pull the same styles */}



export const TitleContainer = styled.div`

  text-align: center;
  padding: 2%;
  width: 70%;
  margin: 0.5% auto;
  
  border: transparent;
  border-radius: 30px;

`

export const StyledPageTitle = styled.h2`
  
  font-weight: bold;
  font-family: "DEM-MO-Proportional", sans-serif;
    color: #171717;
  font-size: calc(11px + 2vw);
  margin: 1% auto 2.5% auto;

    @media screen and (max-width: 1400px){
        font-size: calc(20px + 2vw);
        white-space: pre-wrap;
    }
`

export const StyledSubText = styled.p`
  white-space: pre-wrap;
  color: rgb(100 116 139 / 0.98);
  font-size: calc(5px + 1.1vw);
    font-family: Arial, Helvetica, sans-serif;
  margin: 3% auto 1% auto;

  @media screen and (max-width: 800px){
        font-size: calc(10px + 1.1vw);
}
`



export const StyledCardDiv = styled.div`
    
    width: 30%;
    height: 45%;
    padding: 1%;
    margin: auto;
    
    background-color: #fafafa;
    border: transparent;
    border-radius: 30px;
    
    
`

export const VoteButtonContainer = styled.div`

    width: 90%;
    height: 30%;

`
export const VoteButton = styled.button`
    
    width: 20%;
    height: 20%;
    
    background-color: lightskyblue;
    border: transparent;
    border-radius: 30px;
;

`