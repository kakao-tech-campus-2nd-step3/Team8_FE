import { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconArrow } from '@/pages/assets';
import styled from '@emotion/styled';

type Props = {
  name: string;
  time: string;
  id: string;
};

export const RequestRow = forwardRef<HTMLButtonElement, Props>(
  ({ name, time, id }, ref) => {
    const navigate = useNavigate();

    const goToCallbackDetail = () => {
      navigate(`${id}`);
    };

    const getTimeAgo = (postTime: string) => {
      const postDate = new Date(postTime);
      const now = new Date();
      const differenceInMinutes = Math.floor(
        (now.getTime() - postDate.getTime()) / 60000
      );

      if (differenceInMinutes < 60) {
        return differenceInMinutes > 0
          ? differenceInMinutes + '분 전'
          : '방금 전';
      } else {
        const differenceInHours = Math.floor(differenceInMinutes / 60);
        return differenceInHours + '시간 전';
      }
    };

    return (
      <Wrapper ref={ref} onClick={goToCallbackDetail}>
        <Content>
          <Title>{name}님의 요청</Title>
          <Time>{getTimeAgo(time)}</Time>
          <IconArrow fill='var(--color-gray)' type='solid' height='24' />
        </Content>
      </Wrapper>
    );
  }
);

RequestRow.displayName = 'RequestRow';

const Wrapper = styled.button`
  width: 100%;
  border-radius: 10px;
  background-color: var(--color-white-gray);
  outline: 0;
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--space-sm) var(--space-md);
`;

const Title = styled.h3`
  font-size: var(--font-size-md);
  font-weight: 400;
  margin-top: 2px;
`;

const Time = styled.p`
  font-size: var(--font-size-md);
  font-weight: 350;
  color: var(--color-gray);
  margin-left: auto;
  margin-right: var(--space-xs);
`;
