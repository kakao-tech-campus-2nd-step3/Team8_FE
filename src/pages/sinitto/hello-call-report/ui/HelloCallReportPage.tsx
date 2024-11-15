import { ReportDetail } from '../components';
import { PageLayout, Notice } from '@/shared';

const HelloCallReportPage = () => {
  return (
    <PageLayout>
      <Notice
        noticeType='보고서 작성'
        contents='실제로 이야기했던 내용을 바탕으로 작성해주세요.'
      />
      <ReportDetail />
    </PageLayout>
  );
};

export default HelloCallReportPage;
