import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetGuardInformation, useModifyGuardInformation } from '../../api';
import { RouterPath } from '@/app/routes';
import { IconArrow } from '@/pages/assets';
import {
  Logout,
  formatPhoneNumber,
  BasicButton,
  parsePhoneNumber,
} from '@/shared';
import { Box, Text, Flex, Input } from '@chakra-ui/react';
import styled from '@emotion/styled';

const GuardProfileBox = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { data: guardInfo, refetch } = useGetGuardInformation();
  const modifyGuardInfoMutation = useModifyGuardInformation();
  const navigate = useNavigate();

  useEffect(() => {
    if (isEditing) {
      setName(guardInfo?.name || '');
      setPhoneNumber(guardInfo?.phoneNumber || '');
    }
  }, [isEditing, guardInfo]);

  const handleSaveClick = () => {
    const modifiedSinittoInfo = {
      name: name,
      phoneNumber: parsePhoneNumber(phoneNumber),
    };
    modifyGuardInfoMutation.mutate(modifiedSinittoInfo, {
      onSuccess: () => {
        setIsEditing(false);
        refetch();
      },
    });
  };

  return (
    <>
      <Flex w='full' flexDir='column' gap='var(--space-xs)'>
        <Flex w='full'>
          <Flex marginRight='auto' alignItems='center'>
            <Text color='var(--color-primary)' fontSize='24px' fontWeight='700'>
              {guardInfo?.name}
            </Text>
            <Text fontSize='lg' fontWeight='700'>
              님 환영합니다!
            </Text>
          </Flex>
          <Logout />
        </Flex>
        <ServiceManualBox onClick={() => navigate(RouterPath.SERVICE_MANUAL)}>
          <Text
            fontSize='var(--font-size-lg)'
            fontWeight={600}
            mr='var(--space-xs)'
          >
            ⓘ
          </Text>{' '}
          <Text fontWeight={600} mt='2px' mr='var(--space-sm)'>
            서비스 이용 방법 한번에 이해하기!
          </Text>
          <IconArrow fill='var(--color-gray)' type='solid' />
        </ServiceManualBox>
      </Flex>

      <GuardProfileBoxLayout>
        <Flex
          w='full'
          flexDir='column'
          p='var(--space-md)'
          gap='var(--space-sm)'
        >
          <Row>
            <Title>이름</Title>
            {isEditing ? (
              <StyledInput
                value={name}
                onChange={(e) => setName(e.target.value)}
                width='5rem'
              />
            ) : (
              <Content>{guardInfo?.name}</Content>
            )}
          </Row>
          <Row>
            <Title>전화번호</Title>
            {isEditing ? (
              <StyledInput
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                width='9rem'
              />
            ) : (
              <Content>
                {formatPhoneNumber(String(guardInfo?.phoneNumber))}
              </Content>
            )}
          </Row>
          {isEditing ? (
            <Box
              display='flex'
              w='100%'
              justifyContent='center'
              gap='var(--space-xs)'
            >
              <BasicButton
                themeType='gray'
                height='40px'
                onClick={() => setIsEditing(false)}
              >
                수정 취소
              </BasicButton>
              <BasicButton height='40px' onClick={handleSaveClick}>
                수정 완료
              </BasicButton>
            </Box>
          ) : (
            <BasicButton
              themeType='default'
              height='40px'
              onClick={() => setIsEditing(true)}
            >
              내 정보 수정하기
            </BasicButton>
          )}
        </Flex>

        <BottomContainer>
          <ButtonBox onClick={() => navigate(RouterPath.SENIOR_REGISTER)}>
            내 시니어 관리
          </ButtonBox>
          <DivideLine />
          <ButtonBox onClick={() => navigate(RouterPath.SERVICE_HISTORY)}>
            서비스 이용 현황
          </ButtonBox>
        </BottomContainer>
      </GuardProfileBoxLayout>
    </>
  );
};

export default GuardProfileBox;

const GuardProfileBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 2px solid var(--color-white-gray);
  border-radius: 5px;
`;

const BottomContainer = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-top: 2px solid var(--color-white-gray);
  padding: var(--space-sm) var(--space-xs);
  gap: var(--space-xs);
`;

const DivideLine = styled.div`
  width: 2px;
  height: 50px;
  background-color: var(--color-white-gray);
`;

const ButtonBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 40px;
  font-size: var(--font-size-lg);
  font-weight: 600;
  cursor: pointer;
`;

const ServiceManualBox = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: start;
  height: 60px;
  font-size: var(--font-size-md);
  font-weight: 600;
  cursor: pointer;
  color: var(--color-gray);
`;

const Row = styled(Flex)`
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled(Text)`
  font-size: 16px;
  font-weight: 600;
  color: var(--color-gray);
`;

const Content = styled(Text)`
  text-align: right;
  font-size: 16px;
  font-weight: 600;
`;

const StyledInput = styled(Input)`
  font-size: 16px;
  height: 100%;
  background-color: var(--color-white);
  text-align: right;
  padding: 0 var(--space-xs);

  &:focus {
    outline: none;
    box-shadow: none;
    border-color: var(--color-primary);
  }
`;
