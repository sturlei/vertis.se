import styled from "styled-components";



const ScoreBar = ( { procent, textOne, description } ) => {


    return (
        <Container>
            <Meter>
                <MeterValue>
                    <MeterValueCircle procent={procent} />
                    <ProcentIndicator>
                        {procent}
                    </ProcentIndicator>
                </MeterValue>
                <TextUnder>
                    {textOne}
                </TextUnder>
            </Meter>
            <DescriptionText>
                {description}
            </DescriptionText>
        </Container>
    )
}


const Container = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 20rem;
    min-width: 10rem;
    max-width: 29rem;
    padding: 5rem 4rem;
    background-color: var(--color-white-1);
    border-radius: 3rem;
    box-shadow: var(--box-shadow-1);
`

const Meter = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-bottom: 8rem;
    
    `
const MeterValue = styled.div`
    --meter-size: 20rem;
    position: relative;
    height: calc(var(--meter-size) / 2);
    width: var(--meter-size);
    overflow: hidden;
    backface-visibility: hidden;

`
const MeterValueCircle = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: var(--meter-size);
    height: var(--meter-size);
    ${( { procent } ) => procent && `
    background-image: linear-gradient( ${( 180 / 100 ) * procent}deg, var(--color-positive-1) 50%, transparent 50.1% ) ,url("/assets/other/circle_load_2.svg");
    `
    };

    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100%;
    border-radius: 100%;

    &:after {
        content: '';
        height: 80%;
        width: 80%;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: var(--color-white-1);
        border-radius: 100%;
    }
`
const ProcentIndicator = styled.p`
    position: absolute;
    bottom:0;
    left:50%;
    transform: translateX(-50%);
    font-size: 3.5rem;
    line-height: 1;
    color: var(--color-black-1);
`;
const TextUnder = styled.p`
    width: fit-content;
    height: auto;
    position: absolute;
    bottom:-3rem;
    left:50%;
    transform: translateX(-50%);
    font-size: 2rem;
    line-height: 1;
    color: var(--color-tint-1-dark);
    overflow: visible;
    text-transform: uppercase;
`
const DescriptionText = styled.p`
font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--color-gray-2);
`

export default ScoreBar;