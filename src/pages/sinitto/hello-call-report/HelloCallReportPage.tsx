import { ReportDetail } from './components';
import styled from '@emotion/styled';

const HelloCallReportPage = () => {
  return (
    <HelloCallReportPageLayout>
      <ReportDetail />
    </HelloCallReportPageLayout>
  );
};

export default HelloCallReportPage;

const HelloCallReportPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 1rem;
  margin: 1rem 1.5rem;
`;
