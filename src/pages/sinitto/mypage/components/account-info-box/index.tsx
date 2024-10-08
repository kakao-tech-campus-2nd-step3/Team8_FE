import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const AccountInfoBox = () => {
  return (
    <AccountBoxLayout mb={2}>
      <Box display='flex' w='100%' justifyContent='space-between'>
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌번호
        </Text>
        <Text mr='1rem' fontSize='16px' fontWeight={600}>
          카카오뱅크 3333-3333-33333
        </Text>
      </Box>
      <Box display='flex' w='100%' justifyContent='space-between' mt={2}>
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          계좌 인증 여부
        </Text>
        <Text mr='1rem' fontSize='16px' fontWeight={600}>
          인증 완료
        </Text>
      </Box>
    </AccountBoxLayout>
  );
};

export default AccountInfoBox;

const AccountBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: 100px;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
`;
