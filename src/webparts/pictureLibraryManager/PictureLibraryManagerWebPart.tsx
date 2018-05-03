import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-webpart-base';

import * as strings from 'PictureLibraryManagerWebPartStrings';
import { PictureLibraryManager } from './components/PictureLibraryManager';
import { IPictureLibraryManagerProps } from './components/IPictureLibraryManagerProps';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { CreateStore } from './Store';
import { setConfigurationValues } from './Actions';


export interface IPictureLibraryManagerWebPartProps {
  description: string;
  LibraryName: string;
  SourceId: string;
}
export default class PictureLibraryManagerWebPart extends BaseClientSideWebPart < IPictureLibraryManagerWebPartProps > {
  store: any;
constructor() {
      super();
      SPComponentLoader.loadCss("https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css");
  }
  onInit(): Promise < void > { // store initialization
      this.store = CreateStore(this.context);
      this.setWebpartProperties();
      return Promise.resolve();
  }
  public render(): void {
      const element: React.ReactElement < IPictureLibraryManagerProps > = React.createElement(PictureLibraryManager, {
          description: this.properties.description,
          store: this.store
      });
      ReactDom.render(element, this.domElement);
  }
  protected get dataVersion(): Version {
      return Version.parse('1.0');
  }
  private setWebpartProperties() {
      this.store.dispatch(setConfigurationValues({
          libraryName: this.properties.LibraryName,
          sourceId: this.properties.SourceId
      }));
  }
  protected onAfterPropertyPaneChangesApplied() {
      this.setWebpartProperties();
  }
  protected get disableReactivePropertyChanges() {
      return true;
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
                  }), PropertyPaneTextField('LibraryName', {
                      label: strings.LibraryName
                  }), PropertyPaneTextField('SourceId', {
                      label: strings.SourceId
                  })]
              }]
          }]
      };
  }
}
