import styled from "styled-components";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FlexBox } from "@/styles/FlexStyle";
import { faListUl, faTrophy } from "@fortawesome/free-solid-svg-icons";

const TitleBar = ({
  type,
  info = {},
  showWaitingRoom,
  setShowWaitingRoom,
  showOpenRoom,
  setShowOpenRoom
}) => {
  const { id, title, playerCount, maxPlayerCount, roundCount, roundTime } = info;
  return (
    <StyledTitleBar row="between">
      {/* Left */}
      {type === "list" && (
        <div>
          <TitleIcon icon={faListUl} />
          <span>방 목록</span>
        </div>
      )}
      {type === "rank" && (
        <div>
          <TitleIcon size="xs" icon={faTrophy} />
          <span>랭킹</span>
        </div>
      )}
      {type === "room" && <span>{`[${id}] ${title}`}</span>}

      {/* Right */}
      {type === "list" && (
        <TitleRightSideWrapper left="10px">
          <label>
            <input
              type="checkbox"
              checked={showWaitingRoom}
              onChange={(e) => setShowWaitingRoom(e.target.checked)}
            />
            대기방만 보기
          </label>
          <label>
            <input
              type="checkbox"
              checked={showOpenRoom}
              onChange={(e) => setShowOpenRoom(e.target.checked)}
            />
            열린 방만 보기
          </label>
        </TitleRightSideWrapper>
      )}
      {type === "room" && (
        <TitleRightSideWrapper left="28px">
          <span>{`참여자 ${playerCount}/${maxPlayerCount}`}</span>
          <span>{`라운드 ${roundCount}`}</span>
          <span>{`${roundTime}초`}</span>
        </TitleRightSideWrapper>
      )}
    </StyledTitleBar>
  );
};

TitleBar.propTypes = {
  type: PropTypes.string,
  info: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    playerCount: PropTypes.number,
    maxPlayerCount: PropTypes.number,
    roundCount: PropTypes.number,
    roundTime: PropTypes.number
  }),
  showWaitingRoom: PropTypes.bool,
  setShowWaitingRoom: PropTypes.func,
  showOpenRoom: PropTypes.bool,
  setShowOpenRoom: PropTypes.func
};

const StyledTitleBar = styled(FlexBox).attrs({
  col: "center"
})`
  width: 100%;
  height: 1.5rem;
  padding: 0 7px;
  background-color: rgba(221, 221, 221, 0.5);
  border-radius: 4px;
  box-shadow: 2px 2px 1px #00000025;
  font-size: 14px;
  font-weight: 700;
  opacity: 0.8;

  & > * + * {
    margin-left: 5px;
  }
`;

const TitleRightSideWrapper = styled(FlexBox)`
  & > * + * {
    margin-left: ${({ left }) => left};
  }
`;

// Cf. FontAwesomeIcon에서 size 클래스 제공하고 있음
// xs: 12px
const TitleIcon = styled(FontAwesomeIcon)`
  margin-right: 5px;
  font-size: "14px";
`;

export default TitleBar;