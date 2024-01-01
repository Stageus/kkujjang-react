import styled from "styled-components";
import { FlexBox } from "./FlexStyle";

// 숨겨진 요소
export const Hidden = styled.div`
  display: none;
`;

// 웹 페이지 그라데이션 영역
export const Gradation = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 42.25rem;
  background-image: linear-gradient(#dbe1ed, #ffffff00);
  z-index: -1;
`;

// 콘텐츠 영역 감싸는 태그
export const ContentWrapper = styled(FlexBox)``;

// 넓은 콘텐츠 영역 (width: 1200px)
export const WideContent = styled(FlexBox)`
  width: 75rem;
  height: 100vh;
`;

// 좁은 콘텐츠 영역 (width: 652px)
export const NarrowContent = styled(FlexBox)`
  width: 40.75rem;
  height: 100vh;
`;

// 작은 요소들을 감싸는 요소
export const SmallWrapper = styled(FlexBox)`
  flex-basis: ${(props) => props.width || auto};
  align-self: ${(props) => props.align || auto};
`;

// 입력칸의 제목 역할
export const Label = styled.label`
  font-size: ${({ theme }) => theme.fontSize.xxs};
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray600};
`;

// 입력칸
// type이 text, password, email인 경우에만 스타일 적용
export const Input = styled.input.attrs((props) => ({
  type: props.type
}))`
  ${({ type, theme }) =>
    (type === "text" || type === "password" || type === "email") &&
    `
    width: 100%;
    height: 4.3rem;
    margin-top: 8px;
    padding: 10px 20px;
    background-color: #fff;
    border: 2px solid ${theme.colors.gray100};
    color: ${theme.colors.text.sub};
    font-size: ${theme.fontSize.s};
    font-weight: 500;
  `}
`;
