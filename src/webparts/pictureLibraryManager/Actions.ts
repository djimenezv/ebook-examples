import { searchFile, uploadFile } from './Model';

export const uploadAction = (dispatch, getState)=>{

    return (uploadFile(getState().spContext, getState().configuration.libraryName, getState().uploadFile, getState().uploadFile.name.substring(0, getState().uploadFile.name.lastIndexOf("."))).then((response) => {
        dispatch({
            type : 'SET_UPLOAD_FILE',
            value : null
        })
    }))
}

export const searchAction = (dispatch, getState)=>{
    return (searchFile(getState().spContext, getState().searchString, getState().configuration.sourceId).then((response) => {
        dispatch({
            type : 'LOAD_SEARCH_RESULTS',
            value : response
        })
    }))
}

export const setContext = (spContext) => {
    return {
        type :'SET_CONTEXT',
        value : spContext
    }
}

export const setSearchString = (searchString) => {
    return {
        type : 'SET_SEARCH_STRING',
        value : searchString
    }
}

export const setUploadFile = (file) => {
    return {
        type : 'SET_UPLOAD_FILE',
        value : file
    }
}

export const setUploadStatus = (status) => {
    return {
        type : 'SET_UPLOAD_STATUS',
        value : status
    }
}

export const showUploadForm = (show) => {
    return {
        type : 'SET_UPLOAD_FORM_FLAG',
        value : show
    }
}

export const setConfigurationValues = (configuration) => {
    return {
        type : 'SET_CONFIGURATION_VALUES',
        value : configuration
    }
}
