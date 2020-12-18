
import { motion, AnimatePresence } from "framer-motion";
import styled from "styled-components";



const NotificationList = ( props ) => {
    const { items, active, close, open, removeItem } = props;

    const animation = {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
            opacity: { duration: .2 }
        }
    }

    return (
        <NotificationContainer>
            <NotificationHeader>
                <NotificationHeaderTitle>
                    Notification
                </NotificationHeaderTitle>
                <NotificationOptionsHolder>
                    <AnimatePresence exitBeforeEnter>
                        {active !== -1 && (
                            <NotificationOptionsClose
                                key="close"
                                onClick={() => close( -1 )}
                                {...animation}
                            >
                                <use href="#back" />
                            </NotificationOptionsClose>
                        )}
                    </AnimatePresence>
                    <NotificationOptionsMore >
                        <use href="#menu" />
                    </NotificationOptionsMore>
                </NotificationOptionsHolder>
            </NotificationHeader>
            <AnimatePresence exitBeforeEnter>
                {active !== -1 ? (
                    <ItemDetails
                        key="details"
                        {...animation}
                    >

                        <AnimatePresence >
                            {items[active].list && items[active].list.map( ( listItem, ind ) => (
                                <ItemDetailsItem key={listItem.message + '_listItems'}

                                    animate={{ height: 'initial', scaleY: 1, }}

                                    exit={{
                                        height: '0px', scaleY: 0,
                                        marginBottom: '0px',
                                    }}
                                    transition={{ duration: 0.3, }}
                                >
                                    <ItemDetailsItemRemove
                                        onClick={() => removeItem && removeItem( ind )}
                                    >
                                        <use href="#close" />
                                    </ItemDetailsItemRemove>
                                    <ItemDetailsItemTitle>
                                        {listItem.subject}
                                    </ItemDetailsItemTitle>
                                    <ItemDetailsItemSubject>
                                        {listItem.message}
                                    </ItemDetailsItemSubject>
                                </ItemDetailsItem>
                            ) )}
                        </AnimatePresence>
                    </ItemDetails>
                ) : (
                        <NotificationBody
                            key="list"
                            {...animation}
                        >

                            {items && items.map( ( item, ind ) => (
                                <ItemContainer {...item} number={item.list.length} key={ind} name={undefined} onClick={open && (
                                    () => open( ind )
                                )}>
                                    <ItemLabel>
                                        {item.name}
                                    </ItemLabel>
                                </ItemContainer>
                            ) )}
                        </NotificationBody>
                    )}
            </AnimatePresence>

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
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 1.3rem;
`
const NotificationBody = styled( motion.div )`
    overflow: auto;
    width: 100%;
`
const NotificationOptionsHolder = styled.div`
    position: absolute;
    top: 0;
    right: 1rem;
    display: flex;
    flex: 1 0 auto;

    height: fit-content;
    & :not(:last-child) {
        margin-right: 1rem;
    }
    & svg:hover {
        fill: var(--color-gray-3);

    }
    
`;
const NotificationOptionsMore = styled.svg`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
    width: 2rem;
    height: 2rem;
    fill: var(--color-gray-4);
    transition: all .1s ease;
    cursor: pointer;
   
`;
const NotificationOptionsClose = styled( motion.svg )`
    width: 2rem;
    height: 2rem;
    fill: var(--color-gray-4);
    cursor: pointer;

`
const NotificationHeaderTitle = styled.h1`
flex: 1 1 auto;
    font-size: 1.7rem;
    font-weight: 600;
`;
const ItemContainer = styled.div`
    position: relative;
    padding: 1.1rem 0;
    font-size:1.35rem;
    cursor: pointer;
    transition: all .1s ease;
    border-radius: .3rem;
    &:hover p {
        transform: translateX(1rem);
    }
    &:before {
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
const ItemLabel = styled.p`
    transition: all .2s ease;
    width: fit-content;
`;
const ItemDetails = styled( motion.div )`
    width: 100%;
    height: 100%;
    overflow: auto;
    & > :not(:last-child) {
        margin-bottom: 1.2rem;
    }

`
const ItemDetailsItem = styled( motion.div )`
    position: relative;
    padding: 0rem 1rem;
`;
const ItemDetailsItemRemove = styled.svg`
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-50%);
    width: 1.5rem;
    height: 1.5rem;
    fill: var(--color-gray-4);
    cursor: pointer;
    transition: all .1s ease;
    &:hover {
        fill: var(--color-gray-3);
    }
`;
const ItemDetailsItemTitle = styled.h1`
    font-size: 1.5rem;
`;
const ItemDetailsItemSubject = styled.p`
    font-size: 1.3rem;
`;



export default NotificationList;