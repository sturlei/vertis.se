
import styled from "styled-components";


// components
// import ScoreBar from "../components/Score/ScoreBar";
// import NotificationList from "../components/Notifications/NotificationList";
const TestPage = () => {
    // const [active, setActive] = useState( -1 );
    // const [notifications, setNotifications] = useState( [
    //     {
    //         name: 'Att ringa',
    //         list: [
    //             { subject: 'Vasil Bygg AB', message: 'Kontakta kunden, vill ha hjälp med hemsidan.' },
    //             { subject: 'Marshala', message: 'Jabadaba du' },
    //             { subject: 'Ny kunds', message: 'ny kun som vill utöka...' },
    //             { subject: 'Ny kundsa', message: 'ny kund sm vill utöka...' },
    //             { subject: 'Ny kundsf', message: 'ny kund som vill töka...' },
    //             { subject: 'Ny kundd', message: 'ny kund som vill utöa...' },
    //         ]
    //     },
    //     {
    //         name: 'Att göra',
    //         list: [
    //             { subject: 'Content Writer', message: 'Hitta en anställd asap' }
    //         ]
    //     },
    // ] );

    // const removeItem = ( index ) => {
    //     let data = [...notifications];
    //     data[active].list.splice( index, 1 );
    //     setNotifications( data );
    // }

    return (
        <PageContainer>
            {/* <DetailsNotif
                title="Payment"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit."
                shadow
                date={Date.now()}
            /> */}
            {/* <IconBars items={barItems} active={1} shadow /> */}
            {/* <ScoreBar procent={70}
                textOne="Your score"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, vitae!"
            /> */}
            {/* <NotificationList
                items={notifications}
                active={active}
                close={setActive}
                open={setActive}
                removeItem={removeItem}
            /> */}
        </PageContainer>

    )
}

const PageContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

`


export default TestPage;