import {
  useIntersectionObserver,
  UseIntersectionObserverProps,
} from '@/shared';
import { Spinner } from '@chakra-ui/react';
import styled from '@emotion/styled';

type Props = {
  children?: React.ReactNode;
} & UseIntersectionObserverProps;

export const VisibilityLoader = ({
  children = <Spinner />,
  ...observerProps
}: Props) => {
  const { ref } = useIntersectionObserver(observerProps);

  return (
    <Wrapper ref={ref}>
      <div>{children}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: '32px 48px';
`;
