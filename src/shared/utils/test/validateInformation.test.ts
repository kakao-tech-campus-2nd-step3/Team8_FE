import { validateAccountNumber } from '../validateAccountNumber';
import { validateName } from '../validateName';
import { validatePhoneNumber } from '../validatePhoneNumber';

window.alert = jest.fn();

describe('> validateAccountNumber', () => {
  describe('계좌번호와 은행명의 유효성을 검사한다', () => {
    it.each([
      {
        accountNumber: '94030201-03-8292',
        bankName: '국민은행',
        expected: true,
        description: '올바른 형식',
      },
      {
        accountNumber: '',
        bankName: '국민은행',
        expected: false,
        description: '계좌번호가 비어있는 경우',
      },
      {
        accountNumber: '94030201-03-8292',
        bankName: '',
        expected: false,
        description: '은행명이 비어있는 경우',
      },
      {
        accountNumber: 'yummy-sushi-34567',
        bankName: '국민은행',
        expected: false,
        description: '계좌번호에 - 이외의 문자가 포함된 경우',
      },
      {
        accountNumber: '123-45-67890',
        bankName: '국민은행123',
        expected: false,
        description: '은행 이름에 숫자가 포함된 경우',
      },
      {
        accountNumber: '123-45-67890',
        bankName: 'KB국민은행',
        expected: true,
        description: '영문 + 한글인 은행인 경우',
      },
    ])(
      '$description - accountNumber: $accountNumber, bankName: $bankName => $expected',
      ({ accountNumber, bankName, expected }) => {
        expect(validateAccountNumber(accountNumber, bankName)).toBe(expected);
      }
    );
  });
});

describe('> validateName', () => {
  describe('이름의 유효성을 검사한다', () => {
    it.each([
      {
        name: '홍길동',
        expected: true,
        description: '한글 이름',
      },
      {
        name: 'John',
        expected: true,
        description: '영문 이름',
      },
      {
        name: '',
        expected: false,
        description: '빈 문자열',
      },
      {
        name: '   ',
        expected: false,
        description: '공백만 있는 경우',
      },
      {
        name: 'John123',
        expected: false,
        description: '숫자가 포함된 경우',
      },
      {
        name: '홍길동!',
        expected: false,
        description: '특수문자가 포함된 경우',
      },
      {
        name: '열 글자 이상의 이름인 경우',
        expected: false,
        description: '10글자를 초과하는 경우',
      },
    ])('$description - name: $name => $expected', ({ name, expected }) => {
      expect(validateName(name)).toBe(expected);
    });
  });
});

describe('> validatePhoneNumber', () => {
  describe('전화번호의 유효성을 검사한다', () => {
    it.each([
      {
        phoneNumber: '010-1234-5678',
        expected: true,
        description: '올바른 형식의 전화번호',
      },
      {
        phoneNumber: '',
        expected: false,
        description: '빈 문자열',
      },
      {
        phoneNumber: '   ',
        expected: false,
        description: '공백만 있는 경우',
      },
      {
        phoneNumber: '01012345678',
        expected: false,
        description: ' - 이 없는 경우',
      },
      {
        phoneNumber: '010-123-5678',
        expected: false,
        description: '중간 자리가 4자리가 아닌 경우',
      },
      {
        phoneNumber: '010-12345-678',
        expected: false,
        description: '잘못된 - 위치',
      },
    ])(
      '$description - phoneNumber: $phoneNumber => $expected',
      ({ phoneNumber, expected }) => {
        expect(validatePhoneNumber(phoneNumber)).toBe(expected);
      }
    );
  });
});
