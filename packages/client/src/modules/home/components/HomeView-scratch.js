import React from 'react';
import Webcam from 'react-webcam';

const WebCamera = () => (
  <div className="container d-none">
    <Webcam audio={true} height={350} ref={node => (this.webcam = node)} screenshotFormat="image/jpeg" width={350} />{' '}
    <button onClick={this.capture}>Save</button>{' '}
    {this.state.screenshot ? (
      <img src={this.state.screenshot} />
    ) : (
      <img src="https://i.ytimg.com/vi/XQu8TTBmGhA/hqdefault.jpg" />
    )}{' '}
  </div>
);
export default WebCamera;
