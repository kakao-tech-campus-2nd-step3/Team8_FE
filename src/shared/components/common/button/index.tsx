import styled from '@emotion/styled';

type Props = {
  themeType?: 'default' | 'outline';
  width?: string;
};

export const BasicButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: 50px;
  border-radius: 10px;
  outline: 0;

  // 테마에 따라 배경색과 테두리 색상 변경
  background-color: ${(props) =>
    props.themeType === 'outline' ? '#ffffff' : '#c69090'};
  color: ${(props) => (props.themeType === 'outline' ? '#909090' : '#ffffff')};
  border: ${(props) =>
    props.themeType === 'outline' ? '2px solid #909090' : 'none'};

  font-size: 16px;
  font-weight: 300;
`;
