import { Link } from 'react-router-dom';

import { RouterPath } from '@/app/routes';
import IconUser from '@/pages/assets/shared/user.svg';
import { HEADER_HEIGHT } from '@/shared';
import { Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

const SinittoHomeHeader = () => {
  return (
    <Wrapper>
      <Link to={RouterPath.MYPAGE}>
        <Image src={IconUser} alt='icon-user' mr='var(--space-lg)' />
      </Link>
    </Wrapper>
  );
};

export default SinittoHomeHeader;

const Wrapper = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: end;
  align-items: center;
  background-color: var(--color-white);
`;
