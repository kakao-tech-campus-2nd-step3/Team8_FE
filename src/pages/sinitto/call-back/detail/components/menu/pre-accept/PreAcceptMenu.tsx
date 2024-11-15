import { BasicButton } from '@/shared';
import { Flex } from '@chakra-ui/react';

type Props = {
  acceptCallback: () => void;
};

export const PreAcceptMenu = ({ acceptCallback }: Props) => {
  return (
    <Flex width='100%'>
      <BasicButton onClick={acceptCallback}>전화걸기 및 수락하기</BasicButton>
    </Flex>
  );
};
