import { useEffect, useState } from 'react';

import { useModifySinittoInformation } from '@/pages';
import {
  formatPhoneNumber,
  Logout,
  parsePhoneNumber,
  useSinittoInfo,
  validatePhoneNumber,
  validateName,
} from '@/shared';
import { BasicButton } from '@/shared';
import { Box, Text, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoProfileBox = () => {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  const { data: seniorInfo, refetch } = useSinittoInfo();
  const modifySinittoInfoMutation = useModifySinittoInformation();

  useEffect(() => {
    if (isEditing) {
      setName(seniorInfo?.name || '');
      setPhoneNumber(seniorInfo?.phoneNumber || '');
    }
  }, [isEditing, seniorInfo]);

  const handleSaveClick = () => {
    if (!validateName(name) || !validatePhoneNumber(phoneNumber)) {
      alert(
        '유효하지 않은 형식입니다.\n예) 이름 : 홍길동\n전화번호 : 010-1234-5678'
      );
      setName('');
      setPhoneNumber('');
      return;
    } else {
      const modifiedSinittoInfo = {
        name: name,
        phoneNumber: parsePhoneNumber(phoneNumber),
      };
      modifySinittoInfoMutation.mutate(modifiedSinittoInfo, {
        onSuccess: () => {
          setIsEditing(false);
          refetch();
        },
      });
    }
  };

  return (
    <>
      <Flex w='full'>
        <Flex marginRight='auto' alignItems='center'>
          <Text color='var(--color-primary)' fontSize='24px' fontWeight='700'>
            {seniorInfo?.name}
          </Text>
          <Text fontSize='lg' fontWeight='700'>
            님 환영합니다!
          </Text>
        </Flex>
        <Logout />
      </Flex>

      <SinittoProfileBoxLayout>
        <Row>
          <Title>이름</Title>
          {isEditing ? (
            <StyledInput
              value={name}
              onChange={(e) => setName(e.target.value)}
              width='5rem'
            />
          ) : (
            <Content>{seniorInfo?.name}</Content>
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
              {formatPhoneNumber(String(seniorInfo?.phoneNumber))}
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
      </SinittoProfileBoxLayout>
    </>
  );
};

export default SinittoProfileBox;

const SinittoProfileBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  border: 2px solid var(--color-white-gray);
  border-radius: 5px;
  padding: var(--space-md);
  gap: var(--space-sm);
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
