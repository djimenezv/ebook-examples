import * as React from 'react';
import {  connect  }
from 'react-redux';
import {
    setUploadFile,
    showUploadForm,
    uploadAction,
    setUploadStatus,
    setSearchString  }
from '../Actions';
import FileUploader from '../components/UploaderComponent';
import {
    bindActionCreators, Dispatch
}
from 'redux';
import {
    IState
}
from '../Reducers';
import {
    PropTypes
}
from 'prop-types';
export default class FileUploadContainer extends React.Component {
    // Initial control state
    state = {
        showUploadOverlay: false,
        file: null,
        uploadStatus: 'idle'
    }
    constructor(props) {
        super(props);
        this.showHideOverlay = this.showHideOverlay.bind(this);
        this.uploadFile = this.uploadFile.bind(this);
        this.selectFile = this.selectFile.bind(this);
        this.uploadStatusManager = this.uploadStatusManager.bind(this);
    }
    showHideOverlay = (show) => {
        this.setState({
            showUploadOverlay: show
        });
    }
    selectFile = (file) => {
        this.setState({
            file: file
        });
    }
    uploadFile = () => {
        // storing file in store
        this.context.store.dispatch(setUploadFile(this.state.file)); // triggering upload action
        this.context.store.dispatch(uploadAction);
    }
   uploadStatusManager = () => {
      if (this.context.store.getState().uploadStatus !== this.state.uploadStatus) { // setting        status to local state
        this.setState({
            'uploadStatus': this.context.store.getState().uploadStatus
        });
    } // Setting upload status to idle after file was already uploaded
    if (this.context.store.getState().uploadStatus === 'uploaded') {
        setTimeout(() => {
            this.context.store.dispatch(setUploadStatus('idle'));
        }, 900);
    }
}
    render() {
        return <FileUploader onFileUpload = {
            this.uploadFile
        }
        selectFile = {
            this.selectFile
        }
        showHideOverlay = {
            this.showHideOverlay
        }
        controlState = {
            this.state
        } > </FileUploader>
    }
    componentDidMount() {
        this.context.store.subscribe(() => this.uploadStatusManager());
    }
    static contextTypes = {
        store: React.PropTypes.object.isRequired
    }
}
