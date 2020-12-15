import { motion } from "framer-motion";
import styled from "styled-components";



const NotificationList = ( { items } ) => {



    return (
        <NotificationContainer>
            <NotificationHeader>
                <NotificationHeaderTitle>
                    Notification
                </NotificationHeaderTitle>
            </NotificationHeader>
            <NotificationBody>
                {items && items.map( ( item, ind ) => (
                    <ItemContainer {...item} number={item.number} key={ind} name={undefined}>
                        {item.name}
                    </ItemContainer>
                ) )}
            </NotificationBody>
        </NotificationContainer>
    )
};


const NotificationContainer = styled.div`
    width: 30rem;
    height: 20rem;
    background-color: var(--color-white-1);
    border-radius: 2.7rem;
    box-shadow:var(--box-shadow-1);
    padding: 2rem;
    display: flex;
    flex-direction: column;
`;
const NotificationHeader = styled.div`
    width: 100%;
    margin-bottom: 1.3rem;
`
const NotificationBody = styled.div`
    overflow: auto;
    width: 100%;
`
const NotificationHeaderTitle = styled.h1`
    font-size: 1.7rem;
    font-weight: 600;
`;
const ItemContainer = styled.div`
    position: relative;
    padding: 1.1rem 0;
    font-size:1.35rem;
    cursor: pointer;
    transition: all .2s ease;
    border-radius: .3rem;
    &:hover {
        background-color: var(--color-white-2);

    }
    &:Before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: .15rem;
        background-color: var(--color-white-3);
    }
    &:after {
        content: ${( { number } ) => `'${number}'`};
        position: absolute;
        right: .5rem;
        top: 50%;
        min-width: auto;
        height: auto;
        padding: .2rem 1.3rem;
        background-color: var(--color-white-3);
        transform: translateY(-50%);
        border-radius: .7rem;
    }
`;

export default NotificationList;