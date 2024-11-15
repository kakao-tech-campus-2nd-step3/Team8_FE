import styled from '@emotion/styled';

type Props = {
  themeType?: 'default' | 'outline' | 'gray';
  width?: string;
  height?: string;
  isDisabled?: boolean;
};

export const BasicButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 10px;
  outline: 0;
  cursor: ${(props) => (props.isDisabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.isDisabled ? 0.6 : 1)};
  pointer-events: ${(props) => (props.isDisabled ? 'none' : 'auto')};

  background-color: ${(props) =>
    props.themeType === 'outline'
      ? 'var(--color-white)'
      : props.themeType === 'gray'
        ? 'var(--color-gray)'
        : 'var(--color-primary)'};
  color: ${(props) =>
    props.themeType === 'outline'
      ? 'var(--color-primary)'
      : 'var(--color-white)'};
  box-shadow: inset 0 0 0 2px
    ${(props) =>
      props.themeType === 'gray'
        ? 'var(--color-gray-dark)'
        : 'var(--color-primary)'};

  font-size: var(--font-size-md);
  font-weight: 300;
  transition: 0.3s ease;
  transition-property: background-color, color;

  &:hover {
    background-color: ${(props) =>
      props.isDisabled ? 'var(--color-gray)' : '#e3e8ef'};
    color: ${(props) =>
      props.isDisabled ? 'var(--color-light-gray)' : 'var(--color-white)'};
    box-shadow: ${(props) =>
      props.isDisabled ? 'none' : 'inset 0 0 0 2px #e3e8ef'};
  }
`;
