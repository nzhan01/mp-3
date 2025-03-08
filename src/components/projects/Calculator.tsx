
import styled from 'styled-components';
import {useState} from 'react';


const StyledButton = styled.button`
    width: 30%;

    padding: 4px;
    border: 1px solid green;
    background-color:  green;
    font-size: calc(3px + 2vw);
    border-radius: 4px;
    font-weight: bold;
    margin: 1vh;
    justify-content: center;
    
    
    @media screen and (max-width: 900px) {
        font-size: calc(2px + 2vw);
        padding: 2vh;
        margin: 1vh;
        width: 30%;
        
        

    }
`;

const StyledButtonRow = styled.div`
    display: flex;
    flex-direction: row;
    height: auto;
    justify-content: center;
    max-height: 20%;
    @media screen and (max-width: 900px) {
        height: 20%;
    
    }
`;
const StyledResult = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center; 
    justify-content: center;
    text-align: center;
    width: 100%;

@media screen and (max-width: 900px) {
    font-size: calc(3px + 3vw);
}
    
    `;

const StyledInputs = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    max-height: 20%;
`;
const StyledInput = styled.input`
    font-size: calc(2px + 2vh);
    padding: 2px;
    margin: 2px;
    width: 21%;
    @media screen and (max-width: 900px) {
        font-size: calc(3px + 1vh);
    }
`;

const StyledCalculator = styled.div`
    justify-content: center;
    max-height: 50vh;
    
    @media screen and (max-width: 900px) {
        max-height: 70vh;
        
    }
`;

export default function Calculator(){

    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [color, setColor] = useState("black");
    const [result, setResult] = useState<number | string>("");

    const clearInputs = () => {
        setInput1("");
        setInput2("");
        setResult("");
        setColor("black");
    };

    const calculateResult = (op: string) => {

        const num1 = Number(input1);
        const num2 = Number(input2);
        let answer: number | string = "";

        if (isNaN(num1) || isNaN(num2)){
             answer = ("Please enter a valid number");
        }
        else{
            if (op === '+' ){
                answer =(num1 + num2);
            }
            else if (op === '-' ){
                answer =(num1 - num2);
            }
            else if (op === '*' ){
                answer =(num1 * num2) ;
            }
            else if (op === '/' ){
                if (num2 === 0){
                    answer =("Cannot divide by zero") ;
                }
                else {
                    answer =(num1 / num2) ;
                }
            }

            else if(op === '**') {
                let temp = 1;
                if(num2 ===0){
                    answer =(1) ;
                }
                else if (num1 === 0){
                    if (num2 < 0){
                        answer =("undefined");
                    }
                    else {answer =(0);}
                }

                else if(num2 > 0){                            //regular numbers

                    for (let i =0; i<num2; i++){
                        temp = temp *num1;
                    }
                    answer =(temp ) ;

                }
                else{                                           //negative exponents



                    for (let x =0; x>num2; x--){
                        temp = temp * num1;
                    }
                    answer =(1 / temp)  ;
                }

            }


        }
        setResult(answer);
        if (typeof answer === "number" && answer < 0) {
            setColor("red");
        }







    }

    return (

        <>

            <StyledCalculator>
                <StyledInputs>
                    <StyledInput
                        type="text"
                        placeholder="Number 1"
                        value={input1}

                        onChange={(e) => setInput1((e.target.value))}
                    />
                    <StyledInput
                        type="text"
                        placeholder="Number 2"
                        value={input2}
                        onChange={(e) => setInput2((e.target.value))}
                    />
                </StyledInputs>


                    <StyledButtonRow>
                        <StyledButton onClick={() => calculateResult("+")}>+</StyledButton>
                        <StyledButton onClick={() => calculateResult("-")}>-</StyledButton>
                    </StyledButtonRow>

                    <StyledButtonRow>
                        <StyledButton onClick={() => calculateResult("*")}>*</StyledButton>
                        <StyledButton onClick={() => calculateResult("/")}>/</StyledButton>
                    </StyledButtonRow>

                    <StyledButtonRow>
                        <StyledButton onClick={() => calculateResult("**")}>**</StyledButton>
                        <StyledButton onClick={clearInputs}>Clear</StyledButton>
                    </StyledButtonRow>

                {/* Result Display */}
                <StyledResult>
                    <p style={{ color: color }}>Result: {result}</p>
                </StyledResult>


            </StyledCalculator>
        </>

    )

}