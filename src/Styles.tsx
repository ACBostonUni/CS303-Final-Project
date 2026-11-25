import styled from "styled-components"

{/* This is the shared styles file across the application. Any page can pull the same styles */}



export const TitleContainer = styled.div`

  text-align: center;
  padding: 2%;
  width: 70%;
  margin: 0 auto;
  
  border: transparent;
  border-radius: 30px;

`

export const StyledPageTitle = styled.h2`
  
  font-weight: bold;
  font-family: "DEM-MO-Proportional", sans-serif;
    color: #171717;
  font-size: calc(11px + 2vw);
  margin: 0.5% auto 2.5% auto;

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

    width: 45%;
    height: 45%;
    padding: 1%;
    margin: auto;

    background-color: #F8FCFF;
    border: darkslategray 3px solid;
    border-radius: 30px;


`

export const VoteButtonContainer = styled.div`

    width: 90%;
    height: 30%;
    margin: 9% auto 2% auto;

`
export const VoteButton = styled.button`
    
    width: 20%;
    height: 30%;
    padding: 2%;
    
    background-color: #93dfff ;
    border: transparent;
    border-radius: 30px;
    margin: 0 12%;
    
    font-family: "Meiryo", sans-serif;
    font-size: calc(4px + 1.1vw);
    font-weight: bold;


`

export const QuestionContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 5% auto 0 auto;
    
`

export const QuestionDiv = styled.div`

    margin: 0 auto;
    width: 30%
    
`

export const OptionsDiv = styled.div`

    margin: 0 auto;

`

export const OptionsText = styled.p`

    color: #171717;
    font-size: calc(5px + 1.2vw);
    font-family: "Lucida Sans", sans-serif;
    font-weight: bold;
    
    
`

export const QuestionsText = styled.p`

    color: #171717;
    font-size: calc(4px + 1.1vw);
    font-family: Arial, Helvetica, sans-serif;

`

