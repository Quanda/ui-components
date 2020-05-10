import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const BoxMixin = css`
    /* Margin Props */
    margin: ${props => props.m || props.margin};
    margin-top: ${props => props.mt || props.marginTop};
    margin-right: ${props => props.mr || props.marginRight};
    margin-bottom: ${props => props.mb || props.marginBottom};
    margin-left: ${props => props.ml || props.marginLeft};

    /* Padding Props */
    padding: ${props => props.p || props.padding};
    padding-top: ${props => props.pt || props.paddingTop};
    padding-right: ${props => props.pr || props.paddingRight};
    padding-bottom: ${props => props.pb || props.paddingBottom};
    padding-left: ${props => props.pl || props.paddingLeft};

    ${props => props.flex && css`
        display: flex;
    `};

    ${props => props.flex && props.row && css`
        flex-direction: row;
    `};

    ${props => props.flex && props.col && css`
        flex-direction: column;
    `};

    display: ${props => props.d || props.display};

    flex: ${props => props.f || (typeof props.flex === 'string' ? props.flex : undefined)};

    align-items: ${props => props.ai || props.alignItems};
    align-content: ${props => props.ac || props.alignContent};
    align-self: ${props => props.als || props.alignSelf};
    justify-items: ${props => props.ji || props.justifyItems};
    justify-content: ${props => props.jc || props.justifyContent};
    justify-self: ${props => props.js || props.justifySelf};

    ${props => props.grid && css`
        display: grid;
    `};

    /* CSS Grid Props */
    grid-template-columns: ${props => props.gtc || props.gridTemplateColumns};
    grid-template-rows: ${props => props.gtr || props.gridTemplateRows};
    grid-column-start: ${props => props.gcs || props.gridColumnStart};
    grid-column-end: ${props => props.gce || props.gridColumnEnd};
    grid-column-gap: ${props => props.gcg || props.gridColumnGap};
    grid-row-start: ${props => props.grs || props.gridRowStart};
    grid-row-end: ${props => props.gre || props.gridRowEnd};
    grid-row-gap: ${props => props.grg || props.gridRowGap};
    grid-area: ${props => props.ga || props.gridArea};

    /* Layout Props */
    height: ${props => props.h || props.height};
    min-height: ${props => props.minh || props.minHeight};
    max-height: ${props => props.maxh || props.maxHeight};
    width: ${props => props.w || props.width};
    min-width: ${props => props.minw || props.minWidth};
    max-width: ${props => props.maxw || props.maxWidth};
    position: ${props => props.pos || props.position};
    top: ${props => props.t || props.top};
    bottom: ${props => props.b || props.bottom};
    left: ${props => props.l || props.left};
    right: ${props => props.r || props.right};
    z-index: ${props => props.zi || props.zIndex};

    ${props => props.scroll && css`
        overflow: auto;
    `}

    ${props => props.scrollY && css`
        overflow-y: auto;
    `}

    ${props => props.scrollX && css`
        overflow-x: auto;
    `}
`;

const boxPropsList = [
  'm', 'margin',
  'mt', 'marginTop',
  'mr', 'marginRight',
  'mb', 'marginBottom',
  'ml', 'marginLeft',
  'p', 'padding',
  'pt', 'paddingTop',
  'pr', 'paddingRight',
  'pb', 'paddingBottom',
  'pl', 'paddingLeft',
  'display',
  'f', 'flex', 'row', 'col',
  'fb', 'flexBasis',
  'fw', 'flexWrap',
  'fg', 'flexGrow',
  'fs', 'flexShrink',
  'ai', 'alignItems',
  'ac', 'alignContent',
  'as', 'alignSelf',
  'ji', 'justifyItems',
  'jc', 'justifyContent',
  'js', 'justifySelf',
  'ga', 'gridArea',
  'gtc', 'gridTemplateColumns',
  'gtr', 'gridTemplateRows',
  'grs', 'gridRowStart',
  'gre', 'gridRowEnd',
  'grg', 'gridRowGap',
  'gcs', 'gridColumnStart',
  'gce', 'gridColumnEnd',
  'gcg', 'gridColumnGap',
  'w', 'width',
  'minw', 'minWidth',
  'maxw', 'maxWidth',
  'h', 'height',
  'minh', 'minHeight',
  'maxh', 'maxHeight',
  'pos', 'position',
  't', 'top',
  'r', 'right',
  'b', 'bottom',
  'l', 'left',
  'zi', 'zIndex',
  'scrollX', 'scrollY', 'scroll',
];

/**
* Filters out the all props that do not apply to the Box model
* @param {Object} props - List of props to be filtered
* @return {List} - Filtered Props
*/
export const boxProps = props => (
  Object.keys(props).reduce((accum, key) => (boxPropsList.includes(key) ? { ...accum, [key]: props[key] } : accum), {})
);

/**
* Filters out the all props that apply to the Box model
* @param {Object} props - List of props to be filtered
* @return {List} - Filtered Props
*/
export const nonBoxProps = props => (
  Object.keys(props).reduce((accum, key) => (!boxPropsList.includes(key) ? { ...accum, [key]: props[key] } : accum), {})
);

export const Box = styled.div`
  ${BoxMixin};
`;

Box.propTypes = {
  children: PropTypes.node,
};
