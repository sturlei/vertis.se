import { Link } from "react-router-dom";
import styled from "styled-components";

const Page404 = () => {
    return (
        <PageWarper>
            <h1>The page you are looking for</h1>
            <p>does not exist</p>
            <p>Go back to the <Link to="/">frontpage</Link></p>
        </PageWarper>
    )
}


const PageWarper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`;



export default Page404;