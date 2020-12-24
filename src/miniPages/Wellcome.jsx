import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import styled from "styled-components";
const animations = {
    hidden: {
        opacity: 0,
        transition: { when: "afterChildren" }
    },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
        }
    },
    exit: {
        opacity: 0,
        x: -50,
        transition: {
            staggerChildren: 0.3,
            when: "afterChildren",
            opacity: { duration: .5 },
            x: { duration: .6 },
        }
    },
}
const item = {

    hidden: { y: -50, opacity: 0 },
    show: { y: 0, opacity: 1 },




}

const Pages = [
    () => (

        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit">
            <PageTitle>
                Wellcome to my page
            </PageTitle>
            <motion.span variants={item}>This site</motion.span>
            <motion.span variants={item}> Is made with love!</motion.span><br />
            <motion.span variants={item}> My name is</motion.span>
            <motion.span variants={item}> Stojance Demirovic</motion.span>
            <motion.span variants={item}> and I'm {moment().diff( '1994-03-06', 'years', false )} years old.</motion.span>
        </PageHolders>

    ),
    () => (
        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit">
            Looks like this is the second page
        </PageHolders >
    ),
    () => (
        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit">
            And this is the third page
        </PageHolders>
    ),
    () => (
        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit">
            Finally this is the fourth page
        </PageHolders>
    ),


]


const WellcomePage = () => {

    const [currentPage, setCurrentPage] = useState( 0 )
    const RenderPage = Pages[currentPage];
    return (
        <PageWarper onClick={() => setCurrentPage( Pages.length - 1 === currentPage ? 0 : currentPage + 1 )}>
            <AnimatePresence exitBeforeEnter>
                <RenderPage key={currentPage} />
            </AnimatePresence >
            <PaggeningHolder>
                {Pages.map( ( page, ind ) => (
                    <PaggeningInd key={ind} className={ind === currentPage ? 'active' : ''} />
                ) )}
            </PaggeningHolder>
        </PageWarper>

    )
};

const PageWarper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: white;
    z-index: 10000;
`;
const PageHolders = styled( motion.div )`
    user-select: none;

`;
const PageTitle = styled( motion.h1 )`
`
const PaggeningHolder = styled( motion.div )`
    display: flex;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);

`
const PaggeningInd = styled( motion.div )`
    width: 1rem;
    height: 1rem;
    background-color: var(--color-gray-4);
    border-radius: 100%;
    box-shadow: var(--box-shadow-1);
    &.active {
        background-color: var(--color-primary-light);
    }
    &:not(:last-child) {
        margin-right: .4rem;
    }
`;
export default WellcomePage;
