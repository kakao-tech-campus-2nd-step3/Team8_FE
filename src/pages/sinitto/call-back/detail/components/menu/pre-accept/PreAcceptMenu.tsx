import { BasicButton } from '@/shared/components';
import { Flex } from '@chakra-ui/react';

type Props = {
  handleClick: () => void;
};

export const PreAcceptMenu = ({ handleClick }: Props) => {
  return (
    <Flex width='100%'>
      <BasicButton onClick={handleClick}>전화걸기 및 수락하기</BasicButton>
    </Flex>
  );
};
