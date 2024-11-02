import { getStatusStyle } from '@/shared/utils/status/statusUtils';
import styled from '@emotion/styled';

type StatusContainerProps = {
  status: string;
};

const ServiceStatus = ({ status }: StatusContainerProps) => {
  return <Wrapper status={status}>{getStatusStyle(status).text}</Wrapper>;
};

export default ServiceStatus;

const Wrapper = styled.div<StatusContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: bold;
  background-color: ${({ status }) => getStatusStyle(status).backgroundColor};
  border: 1px solid ${({ status }) => getStatusStyle(status).backgroundColor};
  border-radius: 10px;
  cursor: pointer;
`;
