import { getStatusStyle } from '@/shared/utils/statusUtils';
import styled from '@emotion/styled';

type StatusContainerProps = {
  status: string;
  onClick?: () => void;
};

const ServiceStatus = ({ status, onClick }: StatusContainerProps) => {
  return (
    <Wrapper onClick={onClick} status={status}>
      {getStatusStyle(status).text}
    </Wrapper>
  );
};

export default ServiceStatus;

const Wrapper = styled.button<StatusContainerProps>`
  width: 70px;
  padding: 0 var(--space-xs);
  height: 40px;
  border-radius: 5px;
  font-size: var(--font-size-md);
  font-weight: bold;
  background-color: ${({ status }) => getStatusStyle(status).backgroundColor};
  outline: 0;
`;
