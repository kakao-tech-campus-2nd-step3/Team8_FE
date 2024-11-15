import { useSelectSenior } from '../../hooks';
import { Select, Box, Text, Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  setSelectedSeniorId: (selectedSeniorId: string) => void;
};

export const SelectSenior = ({ setSelectedSeniorId }: Props) => {
  const { seniors, isLoading, error } = useSelectSenior();

  const selectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeniorId(event.target.value);
  };

  if (isLoading) {
    return (
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        height='100px'
      >
        <Spinner />
      </Box>
    );
  }

  if (error) {
    return <Text color='red.500'>Error: {error.message}</Text>;
  }

  return (
    <ContentsBox>
      <TitleText>대상자 선택</TitleText>
      <Select
        variant='filled'
        placeholder='시니어를 선택해주세요'
        onChange={selectChange}
      >
        {seniors?.map((senior) => (
          <option key={senior.seniorId} value={senior.seniorId}>
            {senior.seniorName}
          </option>
        ))}
      </Select>
    </ContentsBox>
  );
};

const ContentsBox = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: var(--space-xs);
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
