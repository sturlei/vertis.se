import styled from "styled-components";
import { motion } from "framer-motion";


const IconBars = ( props ) => {
    const { items, active, shadow } = props

    return (
        <IconBarsContainer {...props} shadow={shadow}>
            {items && items.map( ( currentItem, ind ) => (
                <Item key={ind} {...currentItem}>
                    {currentItem.icon && (
                        <SvgItem className={active === ind ? "active" : ''}
                        >
                            <use href={'#' + currentItem.icon} />
                        </SvgItem>
                    )}
                    {currentItem.name && (
                        <Name className={active === ind ? "active" : ''} >{currentItem.name}</Name>
                    )}
                </Item>
            ) )}
        </IconBarsContainer>

    )
};

const IconBarsContainer = styled(motion.div)`
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: var(--color-white-1);
    padding: 2rem 3rem;
    border-radius: 1.5rem;
    user-select: none;
    ${( { shadow } ) => shadow && `box-shadow: var(--box-shadow-1);`}
    & > :not(:last-child) {
        margin-right: 4rem;
    }

`;
const SvgItem = styled.svg`
    --icon-size: 2.5rem;
    width: var(--icon-size);
    height: var(--icon-size);
    fill: var(--color-tint-1-dark);

    transition: all .2s ease;
    
    &.active{
        fill: var(--color-gray-3);
    }
   
`
const Item = styled.div`
    position: relative; 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
     &:hover > * {
        fill: var(--color-gray-2);
        color: var(--color-gray-2);
    }
    &:active > * {
        fill: var(--color-primary-light);
        color: var(--color-primary-light);
    }

`
const Name = styled.p`
    margin-top: .2rem;
    user-select: none;

    display: flex;
    align-items: center;
    left: 50%;
    bottom: -2rem;

    font-size: 1.3rem;
    color: var(--color-gray-4);
    transition: all .2s ease;
    &.active {
        
        color: var(--color-gray-3);
    }
`

export default IconBars;