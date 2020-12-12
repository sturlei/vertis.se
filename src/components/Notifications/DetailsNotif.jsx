import styled from "styled-components";




const Card = ( { title, description, shadow } ) => {


    return (
        <CardWarper shadow={shadow}>
            <FirstSection>
                <Title>{title}</Title>
                <SvgBellWrap>
                    <SvgBell>
                        <use href="#notification" />
                    </SvgBell>

                </SvgBellWrap>
            </FirstSection>
            <SecondSection>
                <Description>
                    {description}
                </Description>
                <DateStr>
                    Jan 12, 2020
                </DateStr>
            </SecondSection>
        </CardWarper>
    )
};


const CardWarper = styled.div`

    display: flex;
    flex-direction: column;
    position: relative;

    min-height: 12rem;
    width: 29rem;
    padding: 2.4rem;
    border-radius: 2.3rem;

    background-color: var(--color-white-1);
    box-shadow: ${( { shadow } ) => shadow ? '.3rem .2rem 1.5rem rgba(0, 0, 0, .1)' : 'initial'};
`
const FirstSection = styled.div`
    display: flex;

    align-items: center;
    margin-bottom: 1.4rem;
    
    
`
const SecondSection = styled.div`
    margin-bottom: 1rem;
    margin-right: 3.5rem;
    font-size: 1.2rem;
    line-height: 1.4;

`
const Title = styled.h1`
    display: flex;
    flex: 1 1 100%;
    font-size: 2rem;
    color: var(--color-black-2);
`
const Description = styled.p`
    
    
    color: var(--color-gray-2);
    font-size: 1.25rem;
`;
const DateStr = styled.div`

    font-weight: 600;

    color: var(--color-gray-1);
`
const SvgBellWrap = styled.div`
position: relative;
    display: flex;
    width: 2rem;

    &:after {
        content: '';
        height: 0.8rem;
        width: 0.8rem;
        position: absolute;
        top: 0rem;
        right: 0rem;
        background-color: red;
        border-radius: 10000rem;
        border: .15rem solid var(--color-white-1);
    }

`;
const SvgBell = styled.svg`
    flex: 0 1 2rem;

    height: 2rem;
    width: auto;
    fill: var(--color-gray-4);
    
`
export default Card;