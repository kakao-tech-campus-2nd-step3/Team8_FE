export const useGuidelinePlaceholder = (guidelineType: string) => {
  switch (guidelineType) {
    case 'TAXI':
      return '내용은 구체적으로 명시해주세요. (예: 목적지, 출발지 등)';
    case 'DELIVERY':
      return '내용은 구체적으로 명시해주세요. (예: 음식 맵기 정도, 양, 가격 등)';
    case 'HOSPITAL':
      return '내용은 구체적으로 명시해주세요. (예: 병원 위치, 자주 가시는 이유)';
    case 'CULTURE_LIFE':
      return '내용은 구체적으로 명시해주세요. (예: 고속버스/기차 예매, 공연 티켓 구매, 문화 생활 관련 내용)';
    default:
      return '내용을 작성해주세요.';
  }
};
