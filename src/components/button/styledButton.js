/* @flow */
import styled from 'styled-components';
import createComponentFromTagProp from 'react-create-component-from-tag-prop';

import {
  helvetica,
  fromTheme,
  fromProps,
  fromPropsTernary,
  propsColorFromTheme
} from '../../styleUtils';

const ComponentFromTagProp = createComponentFromTagProp({
  tag: 'button',
  prop: 'renderAs',
  propsToOmit: [
    'renderAs',
    'progress',
    'sizeValues',
    'spinner',
    'fullWidth',
    'moveIconToLeft',
    'colors'
  ]
});

const disabled = props => {
  if (props.disabled || (props.progress && props.progress < 100)) {
    return `
      cursor: default;
      border-color: ${propsColorFromTheme('colors.borderDisabled')(props)};
      background-color: ${propsColorFromTheme('colors.bgDisabled')(props)};
      color: ${propsColorFromTheme('colors.fontDisabled')(props)};
      fill: ${propsColorFromTheme('colors.fontDisabled')(props)};
      &:focus,
      &:hover {
        color: ${propsColorFromTheme('colors.fontDisabled')(props)};
        fill: ${propsColorFromTheme('colors.fontDisabled')(props)};
        background-color: ${propsColorFromTheme('colors.bgDisabled')(props)};
        border-color: ${propsColorFromTheme('colors.borderDisabled')(props)};
      }
      &:active {
        background-color: ${propsColorFromTheme('colors.bgDisabled')(props)};
        border-color: ${propsColorFromTheme('colors.borderDisabled')(props)};
      }
    `;
  }
  return '';
};

const progress = props => {
  if (props.progress && props.progress < 100) {
    return `
      background-image: linear-gradient(to right, ${propsColorFromTheme(
        'colors.bgRegular'
      )(props)} 0%, ${propsColorFromTheme('colors.bgRegular')(
      props
    )} ${fromProps('progress')(props)}%, ${propsColorFromTheme(
      'colors.bgDisabled'
    )(props)} ${fromProps('progress')(props)}%, ${propsColorFromTheme(
      'colors.bgDisabled'
    )(props)} 100%);
    `;
  }
  return '';
};

const spinner = props => {
  if (props.spinner) {
    return `
      overflow: hidden;
      &:before {
        display: inline-block;
        margin-bottom: -2px;
        margin-right: ${props.children ? '12px' : '0'};

        width: 16px;
        height: 16px;
        background-image: url("/node-static/img/spinner-32-white.png");
        background-position: center;
        background-size: 16px 16px;
        background-repeat: no-repeat;
        content: "";
        animation: spin .7s linear infinite;
      }
    `;
  }
  return '';
};

const StyledButton = styled(ComponentFromTagProp)`
  position: relative;
  display: inline-block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${fromPropsTernary('fullWidth', '100%', 'auto')};
  font-size: ${fromProps('sizeValues.fontSize')};
  line-height: ${fromProps('sizeValues.lineHeight')};
  padding: ${fromProps('sizeValues.padding')};
  max-height: ${fromProps('sizeValues.maxHeight')};
  border: 1px solid ${propsColorFromTheme('colors.borderRegular')};
  border-radius: ${fromTheme('borderRadius')};
  background-color: ${propsColorFromTheme('colors.bgRegular')};
  color: ${propsColorFromTheme('colors.fontRegular')};
  fill: ${propsColorFromTheme('colors.fontRegular')};
  vertical-align: top;
  text-decoration: none;
  text-shadow: none;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-out,
    color 0.2s ease-out, fill 0.2s ease-out;
  pointer-events: all;
  &:focus,
  &:hover {
    color: ${propsColorFromTheme('colors.fontHover')};
    fill: ${propsColorFromTheme('colors.fontHover')};
    background-color: ${propsColorFromTheme('colors.bgHover')};
    border-color: ${propsColorFromTheme('colors.borderHover')};
  }
  &:active {
    background-color: ${propsColorFromTheme('colors.bgActive')};
    border-color: ${propsColorFromTheme('colors.borderActive')};
  }
  &:focus {
    outline: none;
  }
  ${fromPropsTernary('moveIconToLeft', 'padding-left: 32px;', '')} ${helvetica(
      'regular'
    )} ${spinner} ${disabled} ${progress};
`;

export default StyledButton;