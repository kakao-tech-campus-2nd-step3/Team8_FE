import styled from '@emotion/styled';

export const RegisterType = () => {
  return (
    <Wrapper>
      <Title>가입 유형</Title>
      <TypeWrapper>
        <DefaultBtn>시니또</DefaultBtn>
        <GrayBtn>보호자</GrayBtn>
      </TypeWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  padding: 15px 0 50px;
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const TypeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 13px;
`;

const DefaultBtn = styled.button`
  width: 45%;
  height: 70px;
  border-radius: 10px;
  background-color: #c69090;

  color: #ffffff;
  font-size: 22px;
  font-weight: 700;
`;

const GrayBtn = styled.button`
  width: 45%;
  height: 70px;
  border-radius: 10px;
  background-color: #f2f2f2;

  color: #909090;
  font-size: 22px;
  font-weight: 400;
`;
