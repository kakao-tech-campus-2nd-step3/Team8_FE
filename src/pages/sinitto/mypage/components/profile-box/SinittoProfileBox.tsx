import { Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoProfileBox = () => {
  return (
    <SinittoProfileBoxLayout mb={2}>
      <Text ml='1rem' mt={3} fontSize='18px' fontWeight={700}>
        시니또님 환영합니다.
      </Text>
      <Box display='flex' w='100%' justifyContent='space-between' mt={2}>
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          이름
        </Text>
        <Text mr='1rem' fontSize='16px' fontWeight={600}>
          시니또
        </Text>
      </Box>
      <Box display='flex' w='100%' justifyContent='space-between' mt={2}>
        <Text
          ml='1rem'
          fontSize='16px'
          fontWeight={600}
          color='var(--color-gray)'
        >
          전화번호
        </Text>
        <Text mr='1rem' fontSize='16px' fontWeight={600}>
          010-1111-1111
        </Text>
      </Box>
    </SinittoProfileBoxLayout>
  );
};

export default SinittoProfileBox;

const SinittoProfileBoxLayout = styled(Box)`
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  width: 100%;
  max-width: 338px;
  height: 130px;
  border: 1px solid #909090;
  border-radius: 5px;
  margin-top: 0.5rem;
`;
