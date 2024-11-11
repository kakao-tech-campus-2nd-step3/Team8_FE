import { useFormatPhoneNumber } from '../hooks';

describe('useFormatPhoneNumber', () => {
  it('11자리 전화번호가 "010"으로 시작하는 경우 올바르게 포맷한다', () => {
    const formattedNumber = useFormatPhoneNumber('01012345678');
    expect(formattedNumber).toBe('010 - 1234 - 5678');
  });

  it('전화번호가 undefined일 경우 undefined를 반환한다', () => {
    const formattedNumber = useFormatPhoneNumber(undefined);
    expect(formattedNumber).toBeUndefined();
  });

  it('"010"으로 시작하지 않는 경우 포맷하지 않고 그대로 반환한다', () => {
    const formattedNumber = useFormatPhoneNumber('01112345678');
    expect(formattedNumber).toBe('01112345678');

    const formattedNumber2 = useFormatPhoneNumber('05312345678');
    expect(formattedNumber2).toBe('05312345678');
  });

  it('11자리가 아닌 경우 포맷하지 않고 그대로 반환한다', () => {
    const formattedNumber = useFormatPhoneNumber('0101234567');
    expect(formattedNumber).toBe('0101234567');

    const formattedNumber2 = useFormatPhoneNumber('010123456789');
    expect(formattedNumber2).toBe('010123456789');
  });
});
