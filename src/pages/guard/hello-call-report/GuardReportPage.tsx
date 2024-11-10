import { useParams } from 'react-router-dom';

import { ReportDetail } from './components';
import styled from '@emotion/styled';

type Params = {
  helloCallId: string;
};

const GuardReportPage = () => {
  const { helloCallId } = useParams<Params>();

  return (
    <HelloCallReportPageLayout>
      <ReportDetail helloCallId={Number(helloCallId)} />
    </HelloCallReportPageLayout>
  );
};

export default GuardReportPage;

const HelloCallReportPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;
