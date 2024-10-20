import { useAllSeniorInfo } from '@/shared';
import { Select, Box, Text } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  setSelectedSeniorId: (selectedSeniorId: string) => void;
};

export const SelectSenior = ({ setSelectedSeniorId }: Props) => {
  const { data: seniors, isLoading, error } = useAllSeniorInfo();

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedSeniorId(event.target.value);
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ContentsBox>
      <TitleText>대상자 선택</TitleText>
      <Select
        variant='filled'
        placeholder='시니어를 선택해주세요'
        onChange={handleSelectChange}
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
  gap: 0.5rem;
  margin-bottom: 1.2rem;
`;

const TitleText = styled(Text)`
  font-size: var(--font-size-xl);
  font-weight: 900;
`;
