import styled from "styled-components";
import { FlexBox } from "@/styles/FlexStyle";
import { ContentWrapper, WideContent, Main } from "@/styles/CommonStyle";
import Header from "@/components/Web/Shared/Layout/Header";
import NoticeManagementList from "@/components/Web/Admin/NoticeManagementList";

const NoticeManagement = () => {
  return (
    <ContentWrapper row="center" col="center">
      <WideContent width="80rem" dir="col">
        <Header type="admin" />
        <Main type="admin" row="between">
          <ListWrapper row="between">
            <NoticeManagementList />
          </ListWrapper>
        </Main>
      </WideContent>
    </ContentWrapper>
  );
};
const ListWrapper = styled(FlexBox)``;

export default NoticeManagement;
