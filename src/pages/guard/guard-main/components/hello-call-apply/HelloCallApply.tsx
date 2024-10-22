import { IconArrow } from '@/pages/assets';
import HelloCallImg from '@/pages/assets/guard-main/hello-call.svg';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallApply = () => {
  return (
    <Wrapper>
      <NoticeTitle>안부 전화 서비스 이용하기</NoticeTitle>
      <NoticeText>안부 전화 서비스를 이용해보세요.</NoticeText>
      <NoticeText>다정한 시니또들이 대신 말 벗이 되어드립니다.</NoticeText>
      <Flex w='100%' justifyContent='space-between'>
        <Image src={HelloCallImg} alt='hello-call' />
        <ServiceApplyButton>
          <Flex flexDir='column' gap={1.5} alignItems='start'>
            <ButtonText>안부 전화 서비스</ButtonText>
            <ButtonText>신청하기</ButtonText>
          </Flex>
          <IconArrow fill='black' />
        </ServiceApplyButton>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled(Flex)`
  width: 100%;
  margin-top: 3rem;
  flex-direction: column;
  align-items: end;
`;

const NoticeTitle = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  margin: 0.5rem 0;
`;

const NoticeText = styled(Text)`
  color: var(--color-gray);
`;

const ServiceApplyButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 0.7rem;
  margin: 1rem 0;
  height: 5rem;
  width: 11rem;
  background-color: #f0ebe3;
`;

const ButtonText = styled(Text)`
  font-weight: 700;
  font-size: var(--font-size-lg);
`;
