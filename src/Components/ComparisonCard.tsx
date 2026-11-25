"use client"
import {StyledCardDiv, VoteButtonContainer} from "@/Styles";

{/*The comparison card component housing the 2 elements, the question, and the voting buttons which will call the fuction to update the vote count*/}

import {useState} from "react";



    export default function ComparisonCard(){


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

               <VoteButtonContainer>

                   <VoteButton onClick = {}></VoteButton>

               </VoteButtonContainer>

            </StyledCardDiv>

        );



    }