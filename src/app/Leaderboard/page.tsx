import {StyledPageTitle, StyledSubText, TitleContainer} from "../../Styles"
import styled from "styled-components";
import {Comparison} from "@/types";
import ComparisonCard from "@/Components/ComparisonCard";
const StyledMain = styled.div`

    align-items: center;
    text-align: center;
    background: linear-gradient(to bottom, #fafafa 12%, #93dfff 100%);
    padding: 1% 2%;
    height: 100%;
    width: 100%;

`


const ComparisonCardContainer = styled.div`

    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 0 auto 9% auto;
    padding: 2%;
    
    background: #fafafa;
    border: transparent;
    border-radius: 15px;
    
    

`
export default function Leaderboard(){

    // Fetch the array of Data.
    //
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

                {
                    // Map over the data, each post is a comparison type
                    //fetchedData.data.map((post: Comparison) => (
                       // <ComparisonCard key={post.id} {...post}/> // key is id, then pass over all other attributes
                    //))

                    // ^^^ Commented out for now, made an example data item below
                }

                <ComparisonCard id={1} optionA={"Porsche"} optionB={"Tesla"} question={"Which would you rather have?"} votedCountA={1} votedCountB={2}/>

            </ComparisonCardContainer>

        </StyledMain>

    );


}