import styled from '@emotion/styled';

type Props = {
  themeType?: 'default' | 'outline';
  width?: string;
  height?: string;
};

export const BasicButton = styled.button<Props>`
  width: ${(props) => (props.width ? props.width : '100%')};
  height: ${(props) => (props.height ? props.height : '50px')};
  border-radius: 10px;
  outline: 0;

  background-color: ${(props) =>
    props.themeType === 'outline'
      ? 'var(--color-white)'
      : 'var(--color-primary)'};
  color: ${(props) =>
    props.themeType === 'outline'
      ? 'var(--color-primary)'
      : 'var(--color-white)'};
  box-shadow: inset 0 0 0 2px var(--color-primary);

  font-size: var(--font-size-md);
  font-weight: 300;
  transition: 0.3s ease;
  transition-property: background-color, color;

  &:hover {
    background-color: #e3e8ef;
    color: var(--color-white);
    box-shadow: inset 0 0 0 2px #e3e8ef;
  }
`;
