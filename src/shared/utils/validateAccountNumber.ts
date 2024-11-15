export const validateAccountNumber = (
  accountNumber: string,
  bankName: string
) => {
  if (!accountNumber.trim() || !bankName.trim()) {
    alert('은행 정보와 계좌번호를 기입해주세요.');
    return false;
  }
  if (!/^[0-9-]+$/.test(accountNumber)) {
    alert('계좌번호는 숫자나 "-"로만 작성되어야합니다.');
    return false;
  }
  if (!/^[a-zA-Z가-힣]+$/.test(bankName)) {
    alert('은행 명을 올바르게 기입해주세요.(영어,한글)');
    return false;
  }
  return true;
};
