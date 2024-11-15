import { Link } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import { IconArrow } from '@/pages/assets';
import HelloCallImg from '@/pages/assets/shared/hello-call.webp';
import { Button, Flex, Image, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const HelloCallApply = () => {
  return (
    <Flex w='full' flexDir='column' gap='var(--space-sm)'>
      <Flex w='full' flexDir='column' gap='var(--space-xs)' alignItems='end'>
        <NoticeTitle>안부 전화 서비스 이용하기</NoticeTitle>
        <Flex w='full' flexDir='column' gap='var(--space-xxs)' alignItems='end'>
          <NoticeText>안부 전화 서비스를 이용해보세요.</NoticeText>
          <NoticeText>다정한 시니또들이 대신 말 벗이 되어드립니다.</NoticeText>
        </Flex>
      </Flex>
      <ContentWrapper>
        <Link to={RouterPath.HELLO_CALL_GUARD_APPLY}>
          <ServiceApplyButton>
            <Flex flexDir='column' gap='var(--space-xxs)' alignItems='start'>
              <ButtonText>안부 전화 서비스</ButtonText>
              <ButtonText>신청하기</ButtonText>
            </Flex>
            <IconArrow fill='black' />
          </ServiceApplyButton>
        </Link>
        <StyledImage src={HelloCallImg} alt='hello-call' />
      </ContentWrapper>
    </Flex>
  );
};

const NoticeTitle = styled(Text)`
  font-size: var(--font-size-xxl);
  font-weight: 700;
`;

const NoticeText = styled(Text)`
  color: var(--color-gray);
  font-size: var(--font-size-md);
`;

const ContentWrapper = styled(Flex)`
  position: relative;
  width: 100%;
  justify-content: flex-end;
  height: 100px;
`;

const StyledImage = styled(Image)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30%;
  min-width: 110px;
  max-width: 200px;

  mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
  -webkit-mask-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 1) 50%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const ServiceApplyButton = styled(Button)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 10px;
  width: 11rem;
  background-color: #f0ebe3;
  height: 80px;
  z-index: 1;
`;

const ButtonText = styled(Text)`
  font-weight: 700;
  font-size: var(--font-size-lg);
`;
