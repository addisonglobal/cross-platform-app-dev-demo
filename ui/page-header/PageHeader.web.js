// @flow
import React from 'react';
import {
    Header,
} from '@addison-global/primitives';
import Icon from './Defaults';

type PropsType = {
    LeftIcon?: React.Element<*>,
    Title?: React.Element<*>,
    RightIcon?: React.Element<*>,
};

const PageHeader = ({ LeftIcon, Title, RightIcon }: PropsType) => (
    <Header>
        {LeftIcon}
        {Title}
        {RightIcon}
    </Header>
);

PageHeader.defaultProps = {
    LeftIcon: Icon,
    Title: null,
    RightIcon: Icon,
};

export default PageHeader;
