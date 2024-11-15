import { useAccountInfo } from '../../hooks';
import { BasicButton } from '@/shared';
import { Text, Input, Flex } from '@chakra-ui/react';
import styled from '@emotion/styled';

const AccountInfoBox = () => {
  const {
    accountData: { accountNumber, bankName, sinittoBankInfo },
    states: { isEditingAccount, isRegistering },
    handlers: {
      setAccountNumber,
      setBankName,
      setIsEditingAccount,
      setIsRegistering,
      handleSaveClick,
      registerBank,
    },
  } = useAccountInfo();

  return (
    <AccountBoxLayout>
      <Row>
        <Title>계좌번호</Title>
        {isEditingAccount || isRegistering ? (
          <StyledInput
            value={accountNumber}
            onChange={(e) => setAccountNumber(e.target.value)}
            width='60%'
          />
        ) : (
          <Content>{sinittoBankInfo?.accountNumber}</Content>
        )}
      </Row>

      <Row>
        <Title>은행 이름</Title>
        {isEditingAccount || isRegistering ? (
          <StyledInput
            value={bankName}
            onChange={(e) => setBankName(e.target.value)}
            width='40%'
          />
        ) : (
          <Content>{sinittoBankInfo?.bankName}</Content>
        )}
      </Row>

      <Row>
        <Title>계좌 등록 여부</Title>
        <Content>
          {sinittoBankInfo?.accountNumber ? '등록 완료' : '등록 미완료'}
        </Content>
      </Row>

      <Flex w='100%' justifyContent='center' gap='var(--space-xs)'>
        {sinittoBankInfo?.accountNumber === null ? (
          isRegistering ? (
            <>
              <BasicButton
                themeType='gray'
                height='40px'
                onClick={() => setIsRegistering(false)}
              >
                등록 취소
              </BasicButton>
              <BasicButton
                themeType='default'
                height='40px'
                onClick={registerBank}
              >
                등록 완료
              </BasicButton>
            </>
          ) : (
            <BasicButton
              themeType='default'
              width='310px'
              height='36px'
              onClick={() => setIsRegistering(true)}
            >
              계좌번호 등록하기
            </BasicButton>
          )
        ) : isEditingAccount ? (
          <>
            <BasicButton
              themeType='gray'
              height='40px'
              onClick={() => setIsEditingAccount(false)}
            >
              수정 취소
            </BasicButton>
            <BasicButton
              themeType='default'
              height='40px'
              onClick={handleSaveClick}
            >
              수정 완료
            </BasicButton>
          </>
        ) : (
          <BasicButton
            themeType='default'
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
