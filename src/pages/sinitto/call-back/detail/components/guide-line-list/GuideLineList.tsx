import { GUIDE_LINE_CATEGORIES } from '../../data/guide-line';
import { GuideLineButton } from './guide-line-button';
import { Flex } from '@chakra-ui/react';

export const GuideLineList = () => {
  return (
    <Flex flexDir='column' width='100%' gap='var(--space-xs)'>
      {GUIDE_LINE_CATEGORIES.map((data) => (
        <GuideLineButton
          key={data.title}
          title={data.title}
          id={data.id}
          backgroundColor={data.backgroundColor}
        />
      ))}
    </Flex>
  );
};
