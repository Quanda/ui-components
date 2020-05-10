import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const VARIANTS = {
  CONTAINED: 'contained',
  OUTLINED: 'outlined',
};

const SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
};

const BRAND_COLORS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  NEUTRAL: 'neutral',
  DANGER: 'danger',
}

const StyledButton = styled.button`
  font-size: 15px;
  line-height: 1;
  font-weight: 500;
  height: max-content;
  letter-spacing: 0.075em;
  text-decoration: none;
  padding: 14px 18px;
  display: inline-flex;
  position: relative;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  user-select: none;
  overflow: visible;
  vertical-align: middle;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  white-space: nowrap;

  ${'' /* Size */}
  ${props => props.size === 'sm' && css`
    height: max-content;
    min-height: 28px;
    padding: 10px 12px;
    font-size: 13px;
  `}
  ${props => props.size === 'lg' && css`
    min-height: 52px;
    font-size: 18px;
    padding: 18px 24px;
  `}

  ${'' /* Variant */}
  ${props => (props.variant === 'contained' || !props.variant) && css`
    transition: all 0.2s ease-in-out;
    box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0,0,0,.12);
    &:hover {
      box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0,0,0,.12);
      opacity: 0.95;
    }
    &:active {
      opacity: 0.85;
    }

    ${props.brand && css`
      ${props.brand === 'primary' && css`
        color: ${props.theme.palette.primary.fore};
        background-color: ${props.theme.palette.primary.base};    
      `};
      ${props.brand === 'secondary' && css`
        color: ${props.theme.palette.secondary.fore};
        background-color: ${props.theme.palette.secondary.base};      
      `};
      ${props.brand === 'danger' && css`
        color: ${props.theme.palette.danger.fore};
        background-color: ${props.theme.palette.danger.base};
      `};
    `};

    ${(!props.brand || props.brand === 'neutral') && css`
      color: ${props.theme.palette.neutral.fore};
      background-color: ${props.theme.palette.neutral.base};     
    `};
  `}

  ${props => props.variant === 'outlined' && css`
    transition: all 0.2s ease;
    border-width: 1px;
    border-style: solid;
    background-color: transparent;

    ${props.brand && css`

      ${props.brand === 'primary' && css`
        color: ${props.theme.palette.primary.base};   
        border-color: ${props.theme.palette.primary.base};  
        &:hover {
          color: ${props.theme.palette.primary.fore};   
          background-color: ${props.theme.palette.primary.base};
        }
      `}
      ${props.brand === 'secondary' && css`
        border-color: ${props.theme.palette.secondary.base};
        color: ${props.theme.palette.secondary.base};
        &:hover {
          color: ${props.theme.palette.secondary.fore};
          background-color: ${props.theme.palette.secondary.base};
        }
      `}
      ${props.brand === 'danger' && css`
        border-color: ${props.theme.palette.danger.base};
        color: ${props.theme.palette.danger.base};
        &:hover {
          color: ${props.theme.palette.danger.fore};
          background-color: ${props.theme.palette.danger.base};
        }
      `}; 
    `}

    ${(!props.brand || props.brand === 'neutral') && css`
      color: ${props.theme.palette.neutral.fore};
      border-color: ${props.theme.palette.neutral.dark};   
    `};    
  `};

  ${props => props.isRound && css`
    border-radius: 9999px;
  `}

  ${props => props.disabled && css`
    opacity: 0.6 !important;
    cursor: not-allowed !important;
  `}
  ${props => props.isLoading &&`
    opacity: 0.7 !important;
    cursor: progress;
  `}
`;

export const Button = ({
  isDisabled,
  isLoading,
  children,
  ...props
}) => {
  return (
    <StyledButton isLoading={isLoading} disabled={isDisabled} {...props}>
      <span>{children}</span>
    </StyledButton>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(Object.values(VARIANTS)),
  brand: PropTypes.oneOf(Object.values(BRAND_COLORS)),
  size: PropTypes.oneOf(Object.values(SIZES)),
  isRound: PropTypes.bool,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: VARIANTS.CONTAINED,
  brand: BRAND_COLORS.NEUTRAL,
  size: SIZES.MEDIUM,
  isRound: false,
  isLoading: false,
  isDisabled: false,
};