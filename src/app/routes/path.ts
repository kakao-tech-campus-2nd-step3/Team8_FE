export const RouterPath = {
  ROOT: '/',
  LOGIN: '/login',
  SIGNUP: '/signup',
  REGISTER: '/register',
  REDIRECT: '/redirection',
  GUARD: '/guard',
  GUARD_MYPAGE: `/guard/mypage`,
  GUARD_GUIDELINE: `/guard/guideline`,
  GUARD_GUIDELINE_DETAIL: ':seniorId/:guidelineType', // 시니어 id, 가이드라인 type 으로 시니어 별 가이드라인 조회
  SINITTO: '/sinitto',
  SINITTO_MYPAGE: `/sinitto/mypage`,
  SERVICE_HISTORY: `/service-history`,
  HELLO_CALL: `/hello-call`,
  HELLO_CALL_SERVICE: 'service',
  HELLO_CALL_REPORT: 'report',
  HELLO_CALL_GUARD_APPLY: `guard/apply`,
  CALL_BACK_LIST: '/call-back',
  CALL_BACK_DETAIL: ':callBackId',
  CALL_BACK_GUID_LINE: ':guideLineId',
  SENIOR_REGISTER: `/senior-register`,
  SINITTO_REVIEW: `/sinitto-review`,
};
