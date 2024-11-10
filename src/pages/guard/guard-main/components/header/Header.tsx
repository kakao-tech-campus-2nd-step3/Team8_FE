import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import IconUser from '@/pages/assets/shared/user.svg';
import { HEADER_HEIGHT, useAllSeniorInfo } from '@/shared';
import { Flex, Image, Select } from '@chakra-ui/react';
import styled from '@emotion/styled';

type HeaderProps = {
  currentSenior: number | null;
  setCurrentSenior: Dispatch<SetStateAction<number | null>>;
};

export const Header = ({ currentSenior, setCurrentSenior }: HeaderProps) => {
  const { data: seniors } = useAllSeniorInfo();
  const handleSeniorChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    setCurrentSenior(selectedValue ? Number(selectedValue) : null);
  };

  return (
    <Wrapper>
      <Flex gap={3} alignItems='center'>
        <Select
          placeholder='부모님'
          bg='var(--color-secondary)'
          border={0}
          color='var(--color-black)'
          borderRadius={20}
          fontSize='sm'
          fontWeight='700'
          size='sm'
          value={currentSenior?.toString() || ''}
          onChange={handleSeniorChange}
        >
          {seniors?.map((senior) => (
            <option key={senior.seniorId} value={senior.seniorId}>
              {senior.seniorName}
            </option>
          ))}
        </Select>
        <Link to={RouterPath.MYPAGE}>
          <Image height='50px' src={IconUser} alt='icon-user' />
        </Link>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 var(--space-lg);
  background-color: var(--color-white);
`;
