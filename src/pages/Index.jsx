import styled from "styled-components";
// components



const Index = () => {

    return (
        <PageWrapper>
            <FirstSection>
                <FirstTitle>
                    Sturlei Web page
                </FirstTitle>
            </FirstSection>

        </PageWrapper>
    )
};

const FirstTitle = styled.h1`
    position: relative;
    font-size: 5rem;
    color: var(--color-black-3);
    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: .4rem;
        background-color: currentColor;
    }
`;
const FirstSection = styled.div`
    padding: 10rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    background-color: var(--color-white-1);
    width: 100%;
    height: 80vh;
    background-image: linear-gradient( 150deg, var(--color-white-1) 40%, transparent),url("/assets/other/background.svg");
    background-position: 20% center;
    background-repeat: no-repeat;
    background-size: 140% auto;

`;
const PageWrapper = styled.div`
`;


export default Index;
