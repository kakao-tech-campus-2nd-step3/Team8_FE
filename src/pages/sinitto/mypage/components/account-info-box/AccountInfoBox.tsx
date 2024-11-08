import { useEffect, useState } from 'react';

import {
  useGetSinittoBankInfo,
  useModifySinittoBankInformation,
  useRegisterSinittoBankInformation,
} from '@/pages';
import { BasicButton } from '@/shared';
import { validateAccountNumber } from '@/shared/utils/account-number/validateAccountNumber';
import { Text, Button, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const AccountInfoBox = () => {
  const { data: sinittoBankInfo, refetch } = useGetSinittoBankInfo();
  const [isEditingAccount, setIsEditingAccount] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const modifyBankInfoMutation = useModifySinittoBankInformation();
  const [accountNumber, setAccountNumber] = useState(
    sinittoBankInfo?.accountNumber || ''
  );
  const [bankName, setBankName] = useState(sinittoBankInfo?.bankName || '');
  const registerBankInfoMutation = useRegisterSinittoBankInformation();

  useEffect(() => {
    if (isEditingAccount || isRegistering) {
      setAccountNumber(sinittoBankInfo?.accountNumber || '');
      setBankName(sinittoBankInfo?.bankName || '');
    }
  }, [isEditingAccount, isRegistering, sinittoBankInfo]);

  const handleSaveClick = () => {
    if (validateAccountNumber(accountNumber, bankName)) {
      modifyBankInfoMutation.mutate(
        { accountNumber, bankName },
        {
          onSuccess: () => {
            setIsEditingAccount(false);
            refetch();
          },
        }
      );
    } else {
      setAccountNumber('');
      setBankName('');
      return;
    }
  };

  const registerBank = () => {
    if (!accountNumber || !bankName) {
      alert('은행 정보와 계좌번호를 기입해주세요.');
      return;
    }
    registerBankInfoMutation.mutate(
      { accountNumber, bankName },
      {
        onSuccess: () => {
          setIsRegistering(false);
          refetch();
        },
      }
    );
  };

  return (
    <AccountBoxLayout mb={2}>
      <Flex
        w='100%'
        h='1.5rem'
        justifyContent='space-between'
        alignItems='center'
      >
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌번호
        </Text>
        {isEditingAccount || isRegistering ? (
          <Input
            ml='1rem'
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            fontSize='16px'
            fontWeight='bold'
            width='60%'
            h='1.5rem'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='16px' fontWeight={600}>
            {sinittoBankInfo?.accountNumber}
          </Text>
        )}
      </Flex>
      <Flex
        w='100%'
        h='1.5rem'
        justifyContent='space-between'
        mt={2}
        alignItems='center'
      >
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          은행 이름
        </Text>
        {isEditingAccount || isRegistering ? (
          <Input
            ml='1rem'
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            fontSize='16px'
            fontWeight='bold'
            width='40%'
            h='1.5rem'
            bg='var(--color-white)'
          />
        ) : (
          <Text mr='1rem' fontSize='16px' fontWeight={600}>
            {sinittoBankInfo?.bankName}
          </Text>
        )}
      </Flex>
      <Flex
        w='100%'
        h='1.5rem'
        justifyContent='space-between'
        mt={2}
        mb={1}
        alignItems='center'
      >
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌 등록 여부
        </Text>
        <Text mr='1rem' fontSize='16px' fontWeight={600}>
          {sinittoBankInfo?.accountNumber ? '등록 완료' : '등록 미완료'}
        </Text>
      </Flex>
      <Flex justifyContent='flex-end' mt={2}>
        {sinittoBankInfo?.accountNumber === null ? (
          isRegistering ? (
            <Flex gap={2}>
              <Button
                w='100px'
                h='40px'
                fontSize='16px'
                bg='var(--color-primary)'
                color='var(--color-white)'
                fontWeight='bold'
                onClick={registerBank}
              >
                등록 완료
              </Button>
              <Button
                w='100px'
                h='40px'
                fontSize='16px'
                bg='var(--color-gray)'
                color='var(--color-white)'
                fontWeight='bold'
                onClick={() => setIsRegistering(false)}
              >
                등록 취소
              </Button>
            </Flex>
          ) : (
            <BasicButton
              themeType='default'
              width='310px'
              height='40px'
              onClick={() => setIsRegistering(true)}
            >
              계좌번호 등록하기
            </BasicButton>
          )
        ) : isEditingAccount ? (
          <Flex gap={2}>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              bg='var(--color-primary)'
              color='var(--color-white)'
              fontWeight='bold'
              mr={2}
              onClick={handleSaveClick}
            >
              수정 완료
            </Button>
            <Button
              w='100px'
              h='40px'
              fontSize='16px'
              bg='var(--color-gray)'
              color='var(--color-white)'
              fontWeight='bold'
              onClick={() => setIsEditingAccount(false)}
            >
              수정 취소
            </Button>
          </Flex>
        ) : (
          <BasicButton
            themeType='default'
            width='310px'
            height='40px'
            onClick={() => setIsEditingAccount(true)}
          >
            계좌번호 수정하기
          </BasicButton>
        )}
      </Flex>
    </AccountBoxLayout>
  );
};

export default AccountInfoBox;

const AccountBoxLayout = styled(Flex)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: auto;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
  padding: 1rem;
`;
