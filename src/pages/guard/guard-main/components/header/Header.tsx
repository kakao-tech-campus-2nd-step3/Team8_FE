import { Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';

import { useSeniorSelection, useUserNavigation } from '../../hooks';
import IconUser from '@/pages/assets/shared/user.svg';
import { HEADER_HEIGHT } from '@/shared';
import { Flex, Image, Select } from '@chakra-ui/react';
import styled from '@emotion/styled';

type HeaderProps = {
  currentSenior: number | null;
  setCurrentSenior: Dispatch<SetStateAction<number | null>>;
};

export const Header = ({ currentSenior, setCurrentSenior }: HeaderProps) => {
  const { seniors, handleSeniorChange } = useSeniorSelection({
    currentSenior,
    setCurrentSenior,
  });
  const { navigateToMyPage } = useUserNavigation();

  return (
    <Wrapper>
      <Flex gap={3} alignItems='center'>
        <StyledSelect
          placeholder='시니어 선택'
          w='115px'
          color='var(--color-primary)'
          size='sm'
          value={currentSenior?.toString() || ''}
          onChange={handleSeniorChange}
        >
          {seniors?.map((senior) => (
            <option key={senior.seniorId} value={senior.seniorId}>
              {senior.seniorName}
            </option>
          ))}
        </StyledSelect>
        <Link to={navigateToMyPage()}>
          <Image height='37px' src={IconUser} alt='icon-user' />
        </Link>
      </Flex>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 var(--space-lg);
  background-color: var(--color-white);

  @media (min-width: 768px) {
    width: 480px;
  }
`;

const StyledSelect = styled(Select)`
  background-color: var(--color-white);
  border: 2px solid var(--color-primary);
  border-radius: 10px;
  font-size: var(--font-size-sm);
  font-weight: 700;
  outline: 0;

  &:focus,
  &:hover {
    outline: none;
    box-shadow: none;
    border-color: var(--font-size-sm);
  }
`;
