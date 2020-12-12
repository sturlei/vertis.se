import styled from "styled-components";

// components
import DetailsNotif from "../components/Notifications/DetailsNotif";

const TestPage = () => {



    return (
        <PageContainer>
            <DetailsNotif title="Payment" description="This is a dummy message to emulate a notification" shadow />
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