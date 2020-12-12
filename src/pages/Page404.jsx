import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
    return (
        <PageWarper>
            <LeftSide>
                <h1>The page you are looking for</h1>
                <p>does not exist</p>
                <p>Go back to the <Link to="/">frontpage</Link></p>
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
    /* background-image: url("/assets/404/page.svg"); */
    background-position: center center;
    background-size: 80% auto;
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
    font-size: 20rem;
    line-height: 1;

`
const SubTitle404 = styled.p`
font-size: 3rem;
line-height: 1;
`



export default Page404;