import { useNavigate } from 'react-router-dom';

import { RouterPath } from '@/app/routes/path';
import IconBack from '@/shared/assets/arrow-back.svg';
import { Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  title: string;
  defaultBackPath?: string;
};

/**
 * Router Path.Root
 *
 * -> 시니또이면 시니또 홈으로 이동, 보호자이면 보호자 홈으로 이동 isSinitto 로 구분하기.
 */
const Header = ({ title, defaultBackPath = RouterPath.ROOT }: Props) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(defaultBackPath);
    }
  };

  return (
    <HeaderBox>
      <Icon src={IconBack} onClick={handleBackClick} />
      <Text fontSize='var(--font-size-xxl)' fontWeight={700}>
        {title}
      </Text>
    </HeaderBox>
  );
};

export default Header;

export const HEADER_HEIGHT = '50px';

const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: ${HEADER_HEIGHT};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
`;

const Icon = styled(Image)`
  position: absolute;
  height: 40px;
  width: 40px;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
