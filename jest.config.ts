import type { Config } from 'jest';

const config: Config = {
  preset: 'ts-jest',
  extensionsToTreatAsEsm: ['.ts', '.tsx'],
  globals: {
    'ts-jest': {
      useESM: true,
    },
  },
  transform: {
    '^.+\\.(ts|tsx|js|jsx|mjs)$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.test.json',
      },
    ],
    '^.+\\.svg$': 'jest-transformer-svg',
    '^.+\\.css$': 'jest-transform-stub',
    '^.+\\.[tj]sx?$': 'babel-jest', // .js, .ts, .jsx 파일에 대해 babel-jest 사용
  },
  transformIgnorePatterns: [
    'node_modules/(?!(swiper|ssr-window|dom7)/)', // 변환을 무시하지 않도록 설정
  ],
  moduleNameMapper: {
    '^swiper/css$': 'identity-obj-proxy',
    '^swiper/css/(.*)$': 'identity-obj-proxy',
    '^@/(.*)$': '<rootDir>/src/$1',
    '\\.svg$': '<rootDir>/__mocks__/fileMock.js', // SVG 모킹 설정
    '\\.css$': 'identity-obj-proxy', // CSS 파일을 처리할 방법을 설정
    '\\.(jpg|jpeg|png|gif|webp|svg|ico)$': '<rootDir>/__mocks__/fileMock.js', // 파일 모킹 처리
  },
  testEnvironment: 'jsdom',
  coverageProvider: 'v8',
};

export default config;
