import PropTypes from "prop-types";

import { BodyWrapper, UpperWrapper, Wrapper } from "../Shared/Layout";
import TitleBar from "../Shared/TitleBar";
import WaitingPlayerList from "./WaitingPlayerList";
import Profile from "../Shared/Profile";
import Chat from "../Shared/Chat";

const WaitingContainer = ({ roomInfo }) => {
  const isReady = false;
  
  return (
    <BodyWrapper dir="col">
      <UpperWrapper dir="col" type="wait">
        <TitleBar type="room" info={roomInfo} />
        <WaitingPlayerList isHost={roomInfo.hostUserName} isReady={isReady} />
      </UpperWrapper>
      <Wrapper>
        <Profile />
        <Chat />
        {/* 
        <ButtonWrapper dir="col" row="center" col="center">
            <div>
              <ReadyButton>준비</ReadyButton>
            </div>
          </ButtonWrapper> 
          */}
      </Wrapper>
    </BodyWrapper>
  );
};

WaitingContainer.propTypes = {
  roomInfo: PropTypes.object
};

export default WaitingContainer;
