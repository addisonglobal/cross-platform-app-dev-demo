// @flow
import React from 'react';
import {
    Left,
    Right,
    Body,
} from '@addison-global/primitives';

import Icon from './Defaults';
import PageHeader from './PageHeader.web';

type PropsType = {
    LeftIcon?: React.Element<*>,
    Title?: React.Element<*>,
    RightIcon?: React.Element<*>,
};

const NativePageHeader = ({ LeftIcon, Title, RightIcon }: PropsType) => (
    <PageHeader
        LeftIcon={
            <Left>
                {LeftIcon}
            </Left>}
        Title={
            <Body>
                {Title}
            </Body>}
        RightIcon={
            <Right>
                {RightIcon}
            </Right>}
    />
);

NativePageHeader.defaultProps = {
    LeftIcon: Icon,
    Title: null,
    RightIcon: Icon,
};

export default NativePageHeader;
