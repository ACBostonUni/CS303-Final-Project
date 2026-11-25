import {StyledPageTitle, StyledSubText, TitleContainer} from "../../Styles"
import styled from "styled-components";
const StyledMain = styled.div`

    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #fafafa 12%, #93dfff 100%);
    padding: 2% 0;
    height: 100vh;

    width: 100%;

`


const ComparisonCardContainer = styled.div`

    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    
    background: #fafafa;
    border: transparent;
    border-radius: 15px;
    
    

`
export default function Leaderboard(){

    return(

        <StyledMain>


            <TitleContainer>

                <StyledPageTitle>

                    Leaderboard

                </StyledPageTitle>

                <StyledSubText>
                   Check Out the Latest Posts!
                </StyledSubText>
            </TitleContainer>



            <ComparisonCardContainer>

            </ComparisonCardContainer>

        </StyledMain>

    );


}