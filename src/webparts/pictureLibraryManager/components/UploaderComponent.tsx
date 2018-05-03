import * as React from "react";
import { PropTypes } from "prop-types";
import Styles from "./PictureLibraryManager.module.scss";
import { Button } from "react-bootstrap";

const UploaderComponent: React.SFC<IFileUploader> = props => {
  return (
    <div className={Styles.container}>
      <div className="form-group">
        <input
          type="button"
          className="btn btn-primary"
          value="Add Files"
          onClick={evt => {
            props.showHideOverlay(true);
          }}
        />
      </div>
      {props.controlState.showUploadOverlay ? (
        <div className={Styles.uploaderBackground}>
          <div className={Styles.uploaderContainer}>
            <div className="panel panel-primary" role="alert">
              {" "}
              <div className={Styles.panelHeader}>Upload Image</div>{" "}
              {props.controlState.uploadStatus === "idle"
                ? idleView(props)
                : props.controlState.uploadStatus === "uploading"
                  ? uploadingView()
                  : uploadSuccessfully()}
            </div>
          </div>
        </div>
      ) : null}{" "}
    </div>
  );
};
const uploadSuccessfully = () => (
  <div className={Styles.uploadedContainer}>
    {" "}
    <div className={Styles.uploadedIcon}> </div>{" "}
    <h5> File Uploaded Successfully </h5>{" "}
  </div>
);
const uploadingView = () => (
  <div className={Styles.spinnerContainer}>
    {" "}
    <div className={Styles.spinner}> </div> <h5> Loading File </h5>{" "}
  </div>
);
const idleView = ({
  onFileUpload,
  showHideOverlay,
  selectFile,
  controlState
}: any) => (
  <div>
    <div className={Styles.buttons}>
      <input
        type="file"
        id="fileSelector"
        onChange={event => {
          selectFile(event.target.files[0]);
        }}
      >
      </input>
    </div>
    <div className={Styles.bottom}>
      <input
        type="button"
        className="btn btn-primary"
        value="Upload"
        onClick={event => {
          controlState.file
            ? onFileUpload()
            : alert("Please choose a file to upload");
        }}
      >
      </input>
      <input
        type="button"
        className="btn btn-danger"
        value="Close"
        onClick={event => {
          showHideOverlay(false);
        }}
      >
      </input>
    </div>
  </div>
);
export interface IFileUploader {
  onFileUpload?(file): PropTypes.func.isRequired;
  showHideOverlay(boolean): PropTypes.func.isRequired;
  selectFile(file): PropTypes.func.isRequired;
  controlState: any;
}
export default UploaderComponent;
