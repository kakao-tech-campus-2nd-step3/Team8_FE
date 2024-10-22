import IconList from '@/pages/assets/guard-main/list.svg';
import IconUser from '@/pages/assets/shared/user.svg';
import { HEADER_HEIGHT, useAllSeniorInfo } from '@/shared';
import { Flex, Image, Select } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Header = () => {
  const { data: seniors } = useAllSeniorInfo();
  return (
    <Wrapper>
      <Image src={IconList} alt='icon-list' />
      <Flex gap={3} alignItems='center'>
        <Select
          placeholder='부모님'
          bg='var(--color-secondary)'
          border={0}
          color='var(--color-black)'
          borderRadius={5}
          fontSize='lg'
          fontWeight='700'
          size='sm'
        >
          {seniors?.map((senior) => (
            <option key={senior.seniorId} value={senior.seniorId}>
              {senior.seniorName}
            </option>
          ))}
        </Select>
        <Image src={IconUser} alt='icon-user' />
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: space-between;
  background-color: var(--color-white);
`;
