import { useNavigate } from 'react-router-dom';

import backIcon from './asset/ic_arrow_back.svg';
import { RouterPath } from '@/app/routes/path';
import { Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

type HeaderProps = {
  title: string;
  defaultBackPath?: string;
};

// TODO : RouterPath.ROOT -> 시니또이면 시니또 홈으로, 보호자이면 보호자 홈으로 이동 isSinitto 로 구분하기.
const Header = ({ title, defaultBackPath = RouterPath.ROOT }: HeaderProps) => {
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
      <Icon src={backIcon} onClick={handleBackClick} />
      <Text fontSize='1.5rem' fontWeight={700}>
        {title}
      </Text>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-white);
  z-index: 10;
`;

const Icon = styled(Image)`
  position: absolute;
  width: 37px;
  height: 37px;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
`;
