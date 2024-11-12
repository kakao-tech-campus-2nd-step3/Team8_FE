import { useState } from 'react';

export const useReportContents = () => {
  const [reportContents, setReportContents] = useState('');

  const changeContents = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReportContents(e.target.value);
  };

  return { reportContents, changeContents };
};
