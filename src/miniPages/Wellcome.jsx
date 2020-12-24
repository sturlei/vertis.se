import { connect } from "react-redux";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import moment from "moment";
import styled from "styled-components";

// actions
import { actions as settingsActions } from "../store/settings";




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

const mapStateToProps = ( state ) => ( {
    firstTime: state.entities.settings.firstTime,
    settings: state.entities.settings,
    allThemes: state.entities.settings.config.themes.allThemes,
    currentTheme: state.entities.settings.config.themes.currentTheme,
} );
const mapDispatchToProps = ( dispatch ) => ( {
    setFirstTimeState: ( value ) => dispatch( settingsActions.setFirstTimeState( value ) ),
    changeTheme: ( theme ) => dispatch( settingsActions.changeTheme( theme ) )
} )

const Pages = [
    () => (

        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit" >
            <PageTitle>
                Wellcome to Vertis
            </PageTitle>
            <motion.p>
                <motion.span variants={item}>This site</motion.span>
                <motion.span variants={item}> Is made with love!</motion.span><br />
                <motion.span variants={item}> My name is</motion.span>
                <motion.span variants={item}> Stojance Demirovic</motion.span>
                <motion.span variants={item}> and I'm {moment().diff( '1994-03-06', 'years', false )} years old.</motion.span>
            </motion.p>
        </PageHolders>

    ),
    () => (
        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit" position="center">
            <PageTitle>
                Everything is possible
            </PageTitle>
            <motion.span variants={item}>Started progreming 2018 with a course online!</motion.span>
            <motion.p variants={item}>It was so intresting that I started learning non stop.</motion.p>
            <motion.p variants={item}>Now I know how to program in Nodejs, Javascript, SASS, React.</motion.p>
            <motion.p variants={item}>And some on my favorite apis are axios, framer-motion, styled-components, moment </motion.p>
        </PageHolders >
    ),
    connect( mapStateToProps, mapDispatchToProps )( ( { allThemes, currentTheme, changeTheme } ) => (
        <PageHolders variants={animations} initial="hidden" animate="show" exit="exit">
            <PageTitle>
                Let's start
            </PageTitle>
            <motion.span variants={item}>I don't want to bore you.</motion.span>
            <motion.span variants={item}>You can change the theme here if you want to.</motion.span>
            <RowSettings variants={item}>
                <RowSettingsTitle>
                    Active theme
                    </RowSettingsTitle>
                <RowSettingsContainer>
                    <SelectValue value={currentTheme} onChange={( e ) => changeTheme( e.target.value )}>
                        {allThemes.map( ( themeItem, ind ) => (
                            <SelectValueOption key={ind} value={themeItem}>{themeItem}</SelectValueOption>
                        ) )}
                    </SelectValue>
                    <ColorPalletsHolder>
                        <ColorPallets color="--color-primary-dark" />
                        <ColorPallets color="--color-primary-default" />
                        <ColorPallets color="--color-primary-light" />
                        <ColorPallets color="--color-secondary-dark" />
                        <ColorPallets color="--color-secondary-default" />
                        <ColorPallets color="--color-secondary-light" />
                    </ColorPalletsHolder>
                </RowSettingsContainer>
            </RowSettings>
        </PageHolders>
    ) )
    ,



]


const WellcomePage = ( { firstTime, setFirstTimeState, exit } ) => {
    const [currentPage, setCurrentPage] = useState( 0 )
    const RenderPage = Pages[currentPage];

    useEffect( () => {

        const onKeyDown = ( e ) => {
            if ( e.repeat )
                return;


            if ( e.key === 'ArrowLeft' ) {
                setCurrentPage( currentPage === 0 ? Pages.length - 1 : currentPage - 1 )

            } else if ( e.key === 'ArrowRight' ) {
                if ( Pages.length - 1 === currentPage )
                    return setFirstTimeState( false );

                setCurrentPage( currentPage === Pages.length - 1 ? 0 : currentPage + 1 );

            }
        }
        window.addEventListener( 'keydown', onKeyDown )

        return () => {
            window.removeEventListener( 'keydown', onKeyDown )
        }

    }, [currentPage, setFirstTimeState] )

    return (
        <PageWarper exit={exit} >
            <AnimatePresence exitBeforeEnter>
                <RenderPage key={currentPage} />
            </AnimatePresence >
            <PositionBottom>
                <NextButton onClick={() => {
                    if ( Pages.length - 1 === currentPage ) {
                        setFirstTimeState( false );
                        return;
                    }
                    setCurrentPage( Pages.length - 1 === currentPage ? 0 : currentPage + 1 )
                }}>
                    {Pages.length - 1 !== currentPage ? 'Next' : 'Done'}
                </NextButton>
                <PaggeningHolder>
                    {Pages.map( ( page, ind ) => (
                        <PaggeningInd key={ind} className={ind === currentPage ? 'active' : ''} />
                    ) )}
                </PaggeningHolder>
            </PositionBottom>
        </PageWarper>

    )
};

const PageWarper = styled( motion.div )`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background-color: var(--color-white-2);
    z-index: 10000;
`;
const PageHolders = styled( motion.div )`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: ${( { position } ) => position ? position : `flex-start`};

`;
const PageTitle = styled( motion.h1 )`
`
const PositionBottom = styled( motion.div )`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 5rem;
    left: 50%;
    transform: translateX(-50%);
    & :not(:last-child) {
        margin-bottom: 3rem;
    }

`;
const PaggeningHolder = styled( motion.div )`
    display: flex;
    

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
const NextButton = styled.button`
    font-size: 3rem;
    padding: .8rem 2rem;
    cursor: pointer;
    border: none;
    outline: none;
    border-radius: 1rem;
    background-color: var(--color-gray-2);
    color: var(--color-white-3);
     
    
`;



const RowSettings = styled( motion.div )`
    display: flex;
    align-items: center;
    flex: 1 1 auto;

`;
const RowSettingsTitle = styled.p`
    color: var(--color-gray-2);
    flex: 1 1 auto;
    text-transform: capitalize;
    &:after {
        margin-left: .2rem;
        content: ':';
    }

`
const RowSettingsContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    & > :not(:last-child){
        margin-bottom: .4rem;
    }
   
`

const SelectValue = styled.select`
    position: relative;
    border: none;
    padding: .7rem;
    border-radius: .2rem;
    appearance: none;
    background-color: transparent;
    color: var(--color-black-3);
    border-bottom: .2rem solid var(--color-primary-light);
    &:focus {
        outline: none;
    }
    
`
const SelectValueOption = styled.option``
const ColorPalletsHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;
const ColorPallets = styled.div`
    width: 1.2rem;
    height: 1.2rem;
    border-radius: 100%;
    background-color: ${( { color } ) => `var(${color})`};
    transition: all .2s ease;
    &:not(:last-child) {
        margin-right: .25rem;
    }
`;


export default connect( mapStateToProps, mapDispatchToProps )( WellcomePage );
