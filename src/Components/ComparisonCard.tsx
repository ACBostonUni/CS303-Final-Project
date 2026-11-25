"use client"
import {
    OptionsDiv,
    OptionsText,
    QuestionContainer, QuestionDiv,
    QuestionsText,
    StyledCardDiv,
    VoteButton,
    VoteButtonContainer
} from "@/Styles";

{/*The comparison card component housing the 2 elements, the question, and the voting buttons which will call the fuction to update the vote count*/}

import {useState} from "react";
import {Comparison} from "@/types";

    // Need to take in Id, the strings of the question, and the strings of optionA and B Basically just the data type object
    export default function ComparisonCard({
                 id,
            optionA,
            optionB,
            question,
            votedCountA,
            votedCountB
    }: Comparison) {


        const [button1Voted, setVoteA] = useState(false);
        const [button2Voted, setVoteB] = useState(false);


        async function voteForA(){

            setVoteA(true);
            // Call the update vote to increment voteA
            if (button2Voted){ // We previously voted for 2, but changed the vote
                // call update vote to decrement voteB
                setVoteB(false);
            }


        }
        async function voteForB(){

            setVoteB(false);
            // Call to increment voteB
            if (button1Voted){ // We previously voted for 1, but changed vote
                // call update vote to decrement voteA
                setVoteA(false);
            }


        }

        return(

            <StyledCardDiv>

                <QuestionContainer>

                    <OptionsDiv>

                        <OptionsText>
                            {optionA}
                        </OptionsText>

                    </OptionsDiv>


                    <QuestionDiv>

                        <QuestionsText>
                            {question}
                        </QuestionsText>

                    </QuestionDiv>



                    <OptionsDiv>

                        <OptionsText>
                            {optionB}
                        </OptionsText>

                    </OptionsDiv>

                </QuestionContainer>



               <VoteButtonContainer>

                   <VoteButton type = "button" onClick = {() => voteForA()}>Vote</VoteButton>
                   <VoteButton type = "button" onClick = {() => voteForB()}>Vote</VoteButton>

               </VoteButtonContainer>

            </StyledCardDiv>

        );



    }