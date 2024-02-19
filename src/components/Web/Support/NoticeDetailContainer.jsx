import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";

import createdAtIcon from "@/assets/images/clock.png";
import viewsIcon from "@/assets/images/views.png";

// ===== components import =====
import BoardTitle from "@/components/Web/Shared/Board/BoardTitle";
import Button from "@/components/Web/Shared/Buttons/Button";

// ===== style =====
const NoticeDeatalFlexBox = styled(FlexBox)`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
`;

const NoticeDetailBox = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "fit-content"};
  border-top: ${(props) => props.borderTop || null};
  border-bottom: ${(props) => props.borderBottom || null};
  margin-top: ${(props) => props.marginTop || null};
  margin-bottom: ${(props) => props.marginBottom || null};
  margin-left: ${(props) => props.marginLeft || null};
  margin-right: ${(props) => props.marginRight || null};
`;

const NoticeDetailText = styled.p`
  color: ${(props) => props.color || "#32250F"};
  font-size: ${(props) => props.fontSize || "32px"};
  margin: 0;
`;

const NoticeDetailImage = styled.img`
  width: ${(props) => props.width || "24px"};
  height: ${(props) => props.height || "24px"};
  margin-right: ${(props) => props.marginRight || null};
`;

// ===== component =====
const NoticeDetailContainer = () => {
  // === state ===
  const [detailData, setDetailData] = useState([]);

  // === navigate ===
  const navigate = useNavigate();

  useEffect(() => {
    // 임시 데이터
    const detail = {
      id: 0,
      title: "제목1111",
      content: "본문1111",
      createdAt: "2024-01-01 03:10",
      views: 10
    };

    setDetailData(detail);
  }, []);

  const handleMoveList = () => {
    navigate(`/notice/list`);
  };

  return (
    <>
      <NoticeDetailBox width="75rem" marginLeft="auto" marginRight="auto">
        <BoardTitle type="notice" />
        <NoticeDetailBox borderTop="5px solid #C2C2C2" borderBottom="5px solid #C2C2C2">
          {/* 공지 헤더 */}
          <NoticeDeatalFlexBox dir="col">
            {/* 공지 제목 */}
            <NoticeDetailBox marginTop="15px" marginBottom="10px">
              <NoticeDetailText>{detailData.title}</NoticeDetailText>
            </NoticeDetailBox>

            {/* 공지 관련 정보 */}
            <NoticeDeatalFlexBox width="400px" marginBottom="15px">
              {/* 게시 날짜 */}
              <NoticeDeatalFlexBox col="center">
                <NoticeDetailImage src={createdAtIcon} marginRight="10px" />
                <NoticeDetailText color="#A7A7A7" fontSize="20px">
                  {detailData.createdAt}
                </NoticeDetailText>
              </NoticeDeatalFlexBox>

              {/* 조회수 */}
              <NoticeDeatalFlexBox col="center">
                <NoticeDetailImage src={viewsIcon} marginRight="10px" />
                <NoticeDetailText color="#A7A7A7" fontSize="20px">
                  {detailData.views}
                </NoticeDetailText>
              </NoticeDeatalFlexBox>
            </NoticeDeatalFlexBox>
          </NoticeDeatalFlexBox>

          {/* 공지 본문 */}
          <NoticeDeatalFlexBox
            borderTop="1px solid #C2C2C2"
            dir="col"
            marginBottom="10px"
          >
            <NoticeDetailBox height="390px" marginTop="15px">
              {detailData.content}
            </NoticeDetailBox>
            <NoticeDeatalFlexBox row="end">
              <Button type="smallGray" message="목록" onClick={handleMoveList} />
            </NoticeDeatalFlexBox>
          </NoticeDeatalFlexBox>
        </NoticeDetailBox>
      </NoticeDetailBox>
    </>
  );
};

export default NoticeDetailContainer;