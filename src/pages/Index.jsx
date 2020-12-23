import styled from "styled-components";
import { connect } from "react-redux";
// actions
import { actions as settingAction } from "../store/settings";

// components



const Index = ( { entities, currentTheme, changeTheme } ) => {

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
    align-items: center;
    flex-direction: column;
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

// state.entities.settings.config
const mapStateToProps = ( state ) => ( {
    entities: state.entities,
    currentTheme: state.entities.settings.config.themes.currentTheme
} );
const mapDispatchToProps = ( dispatch ) => ( {
    changeTheme: (theme)=> dispatch(settingAction.changeTheme(theme))
} )

export default connect( mapStateToProps, mapDispatchToProps )( Index);
