import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';
import * as strings from 'TasktrackerWebPartStrings';
import Tasktracker from './components/Tasktracker';
import { ITasktrackerProps } from './components/ITasktrackerProps';
import { getMyTasks } from './Model';
import { CreateStore, actionLoad } from './store';
import { Provider, store } from 'react-redux';
import Container  from './container';

export interface ITasktrackerWebPartProps {
    description: string;
}

export default class TasktrackerWebPart extends BaseClientSideWebPart<ITasktrackerWebPartProps> {
    public render(): void { // store initialization
        let myStore = CreateStore({
            tasks: [],
            context: this.context
        });
        // Provider wraper initializated
        const element = (
          <Provider store = {myStore}>
            <Container />
          </Provider>);

        // rendering component
        ReactDom.render(element, this.domElement);

        // getting initial data from SharePoint
        myStore.dispatch(actionLoad);
    }

    protected get dataVersion(): Version {
        return Version.parse('1.0');
    }

    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
        return {
            pages: [{
                header: {
                    description: strings.PropertyPaneDescription
                },
                groups: [{
                    groupName: strings.BasicGroupName,
                    groupFields: [PropertyPaneTextField('description', {
                        label: strings.DescriptionFieldLabel
                    })]
                }]
            }]
        };
    }
}
