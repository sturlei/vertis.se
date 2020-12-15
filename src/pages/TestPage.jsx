import styled from "styled-components";


// components
// import ScoreBar from "../components/Score/ScoreBar";
import NotificationList from "../components/Notifications/NotificationList";
const TestPage = () => {
    const notifications = [
        {
            name: 'Att ringa',
            number: 2
        },
        {
            name: 'Glöm inte spara',
            number: 8
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
            <NotificationList items={notifications} />
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