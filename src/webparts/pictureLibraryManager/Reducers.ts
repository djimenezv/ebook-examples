import {
  assign
}
from 'lodash';
export interface IState {
  searchString: string,
  files : any[],
  spContext: any,
  uploadFile : any,
  uploadStatus : string,
  configuration : {
      sourceId : string,
      libraryName : string
  }}


export const initialStore = {
  searchString: '',
  files: [],
  spContext: null,
  uploadFile: null,
  uploadStatus: 'idle',
  configuration: {
      sourceId: null,
      libraryName: null
  }
}
export const rootReducers = (state = initialStore, action: any) => {
  switch (action.type) {
      case 'SET_SEARCH_STRING':
          {
              return assign({}, state, {
                  searchString: action.value
              });
          }
      case 'LOAD_SEARCH_RESULTS':
          {
              return assign({}, state, {
                  files: action.value
              });
          }
      case 'SET_CONTEXT':
          {
              return assign({}, state, {
                  spContext: action.value
              });
          }
      case 'SET_UPLOAD_FILE':
          {
              return assign({}, state, {
                  uploadFile: action.value,
                  uploadStatus: action.value ? 'uploading' : 'uploaded'
              })
          }
      case 'SET_UPLOAD_STATUS':
          {
              return assign({}, state, {
                  uploadStatus: action.value
              })
          }
      case 'SET_UPLOAD_FORM_FLAG':
          {
              return assign({}, state, {
                  showUploadForm: action.value
              })
          }
      case 'SET_CONFIGURATION_VALUES':
          {
              return assign({}, state, {
                  configuration: action.value
              });
          }
      default:
          return initialStore;
  }
}
