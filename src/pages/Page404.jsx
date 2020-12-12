import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
    return (
        <PageWarper>
            <LeftSide>
                <Title>The page you are looking for</Title>
                <Subtitle color="var(--color-primary-default)" fontSize="5rem">Does not exist</Subtitle>
                <Devider />
                <Subtitle>
                    <Link to="/">Go back to the frontpage</Link>
                </Subtitle>
            </LeftSide>
            <RightSide>
                <Title404>
                    404
                </Title404>
                <SubTitle404>
                    Page not found
                </SubTitle404>
            </RightSide>
        </PageWarper>
    )
}


const PageWarper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    background-image: url("/assets/404/dots.svg");
    background-position: right center;
    background-size: auto 100%;
    background-repeat: no-repeat;
`;
const LeftSide = styled.div`
    display: flex;
    height: 100vh;
    flex: 1 1 50%;
    flex-direction: column;
    justify-content: center;


    padding-left: 10rem;

`
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 50%;
    justify-content: center;
    align-items: center;
    

`
const Title404 = styled.h1`
    font-family: 'Varela Round', sans-serif;
    font-size: 17rem;
    font-weight: bold;
    text-shadow: var(--text-shadow-1);
    line-height: 1;
    color: var(--color-white-1);

`
const SubTitle404 = styled.p`
font-size: 3rem;
line-height: 1;
color: var(--color-gray-2);
text-shadow: var(--text-shadow-2);
`
const Title = styled.h1`
    color: var(--color-gray-1);
    font-size: 7rem;
    line-height: 1.2;
    `
const Subtitle = styled.p`
    font-size: ${( { fontSize } ) => `${fontSize || '2rem'}`};
    color: ${( { color } ) => `${color || 'color: var(--color-gray-1)'}`};
    line-height: 1;
`
const Devider = styled.div`
    margin: .7rem 0;
    margin-bottom: 2rem;
    height: .2rem;
    width: 40%;
    background-color: var(--color-secondary-light);
`


export default Page404;