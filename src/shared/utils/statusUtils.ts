export type StatusStyle = {
  backgroundColor: string;
  text: string;
};

export const getStatusStyle = (status: string): StatusStyle => {
  switch (status) {
    case 'WAITING':
      return {
        backgroundColor: '#FFDA76',
        text: '대기중',
      };
    case 'PENDING_COMPLETE':
      return {
        backgroundColor: '#D6E9DB',
        text: '완료대기',
      };
    case 'IN_PROGRESS':
      return {
        backgroundColor: '#FFA7B5',
        text: '진행중',
      };
    case 'COMPLETE':
      return {
        backgroundColor: '#82CAB7',
        text: '완료',
      };
    default:
      return {
        backgroundColor: '#FFDA76',
        text: '대기중',
      };
  }
};
