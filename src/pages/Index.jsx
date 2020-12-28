import { useState, useEffect } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
// actions
import { actions as settingAction } from "../store/settings";

// components
import ScoreBar from "../components/Score/ScoreBar";


const scoreArrey = [30, 13, 57, 70, 87, 44, 20];
const Index = ( { entities, currentTheme, changeTheme } ) => {
    const [score, setScore] = useState( scoreArrey[0] );

    useEffect( () => {
        const current = scoreArrey.findIndex( currentScore => currentScore === score )
        const timer = setInterval( () => {
            if ( current === scoreArrey.length - 1 ) {
                setScore( scoreArrey[0] )
            } else {
                setScore( scoreArrey[current + 1] )
            }
        }, 3000 );

        return () => {
            clearInterval( timer );
        }
    }, [score] )

    return (
        <PageWrapper>
            <FirstSection>

                <FirstTitle>
                    Current theme is <ColorText >{currentTheme}</ColorText>
                </FirstTitle>
                <p>
                    Would you like to change the theme?
                </p>
                <p>
                    Click on the GEAR icon on the bottom right corner.
                </p>
            </FirstSection>
            <SecondSection>
                Try to pley with the slider 😁
                   <SliderProcent type="range" min="0" max="100" onChange={( e ) => setScore( e.target.value )} />
                <ScoreBar procent={score}
                    textOne="Your score"
                    description="This is a React component. You can make dynamic changes to it."
                />
            </SecondSection>

        </PageWrapper>
    )
};
const ColorText = styled.span`
    color: var(--color-primary-default);
`;
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
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    background-color: var(--color-white-1);
    width: 100%;
    height: 80vh;
    background-image: url("/assets/other/background_2.jpg");
    background-position: 20% center;
    background-repeat: no-repeat;
    background-size: 100% auto;

`;
const SecondSection = styled.div`
    padding: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-white-1);
   

`;
const PageWrapper = styled.div`
`;
const SliderProcent = styled.input`
 -webkit-appearance: none;

  height: .4rem;
  border-radius: 5px;  
  background: #d3d3d3;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  margin: 1rem 0;

    &::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 1.4rem;
  height: 1.4rem;
  border-radius: 50%; 
  background: var(--color-primary-default);
  cursor: pointer;
}

&::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}


  
`


// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
    entities: state.entities,
    currentTheme: state.entities.settings.config.themes.currentTheme
} );
const mapDispatchToProps = ( dispatch ) => ( {
    changeTheme: ( theme ) => dispatch( settingAction.changeTheme( theme ) )
} )

export default connect( mapStateToProps, mapDispatchToProps )( Index );
