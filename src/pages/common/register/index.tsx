import { RegisterFields } from '@/components/features/register/register-fields';
import { RegisterType } from '@/components/features/register/register-type';
import { Tos } from '@/components/features/register/tos';
import { Divider } from '@chakra-ui/react';
import styled from '@emotion/styled';

const RegisterPage = () => {
  return (
    <Wrapper>
      <RegisterType />
      <Divider gap={5} />
      <RegisterFields />
      <Tos />
      <SubmitBtn>가입하기</SubmitBtn>
    </Wrapper>
  );
};

export default RegisterPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 45px;
`;

const SubmitBtn = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #c69090;
  margin-top: 50px;

  color: #ffffff;
  font-size: 24px;
  font-weight: 300;
`;
