import styled from "styled-components";

const SVG = ({icon}) => {


    return (
        <SvgContainer>
            <use href={`#${icon}`}/>
        </SvgContainer>
    )
};

const SvgContainer = styled.svg`
`;

export default SVG;