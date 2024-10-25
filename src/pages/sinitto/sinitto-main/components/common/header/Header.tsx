import IconUser from '@/pages/assets/shared/user.svg';
import { HEADER_HEIGHT } from '@/shared';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

export const Header = () => {
  return (
    <Wrapper>
      <Image src={IconUser} alt='icon-user' />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  align-items: center;
  padding: 1.5rem 0;
  justify-content: flex-end;
  background-color: var(--color-white);
`;
