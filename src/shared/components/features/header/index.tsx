import backIcon from './asset/ic_arrow_back.svg';
import { Text, Image } from '@chakra-ui/react';
import styled from '@emotion/styled';

interface HeaderProps {
  title: string;
}

const Header = ({ title }: HeaderProps) => {
  return (
    <HeaderBox>
      <Icon src={backIcon} />
      <Text fontSize='1.5rem' fontWeight={700}>
        {title}
      </Text>
    </HeaderBox>
  );
};

export default Header;

const HeaderBox = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Icon = styled(Image)`
  position: absolute;
  width: 37px;
  height: 37px;
  left: 40px;
  top: 50%;
  transform: translateY(-50%);
`;
