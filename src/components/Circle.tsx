import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${props => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${props => props.borderColor};
`;
//interface 내부에 ts에게 object shape를 설명해줄 것
interface CircleProps {
    bgColor: string;
    borderColor?: string;
    text?: string;
}

// () 안의 bgColor의 타입은 CircleProps의 프로퍼티라는 것을 말해주는 것.
const Circle = ({ bgColor, borderColor, text = "default text" }: CircleProps) => {
    const [counter, setCounter] = useState<string | number>(0);
    setCounter("ha");
    setCounter(10);
    return (
        <Container bgColor={bgColor} borderColor={borderColor ?? "white"}>
            {text}
        </Container>
    );
};
export default Circle;
