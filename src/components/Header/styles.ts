import styled, { css } from 'styled-components';

interface HeaderProps {
  centralized: boolean;
}

export const Container = styled.div<HeaderProps>`
  background: #04395e;
  padding: 30px 15px;

  ${(props) =>
    props.centralized
      ? css`
          header {
            text-align: center;
            img {
              height: 40px;
            }
          }
        `
      : css`
          header {
            img {
              height: 40px;
            }
          }
        `}
`;
