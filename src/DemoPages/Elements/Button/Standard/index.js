import React, {Fragment} from 'react';

import Tabs from 'react-responsive-tabs';

import PageTitle from '../../../../Layout/AppMain/PageTitle';

// Examples
import ButtonsStandardSolid from './Examples/Solid';

const tabsContent = [
    {
        
        content: <ButtonsStandardSolid/>
    },
];

function getTabs() {
    return tabsContent.map((tab, index) => ({
        title: tab.title,
        getContent: () => tab.content,
        key: index,
    }));
}

export default class ButtonsStandard extends React.Component {

    render() {

        return (
            <Fragment>
                
                <Tabs tabsWrapperClass="body-tabs body-tabs-layout" transform={false}  items={getTabs()}/>
            </Fragment>
        );
    }
}