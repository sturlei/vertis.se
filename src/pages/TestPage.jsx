import { useState } from "react";
import styled from "styled-components";


// components
// import ScoreBar from "../components/Score/ScoreBar";
import NotificationList from "../components/Notifications/NotificationList";
const TestPage = () => {
    const [active, setActive] = useState( -1 );
    const notifications = [
        {
            name: 'Att ringa',
            number: 2,
            list: [
                {subject: 'Vasil Bygg AB', message: 'Kontakta kunden, vill ha hjälp med hemsidan.'},
                {subject: 'Marshala', message: 'Jabadaba du'},
            ]
        },
        {
            name: 'Att göra',
            number: 8,
             list: [
                {subject: 'Content Writer', message: 'Hitta en anställd asap'}
            ]
        },
    ]

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
            <NotificationList
                items={notifications}
                active={active}
                close={setActive}
                open={setActive}
            />
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