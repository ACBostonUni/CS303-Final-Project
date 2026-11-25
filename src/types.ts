{/*The File for the data types that will be put to and pulled from the Db*/}

export interface Comparison {
    id: number;
    optionA: string,
    optionB: string,
    question: string,

    votedCountA: number,
    votedCountB: number,


}