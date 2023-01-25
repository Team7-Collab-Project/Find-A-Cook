import React from 'react';
import { css } from "styled-components";
import '../CSS/Style.css'

export const mobile = (props) => {
    return css`
      @media only screen and (max-width: 380px) {
        ${props}
      }
    `;
  };

