import React, { Fragment } from 'react';

function BlockCode() {
  window.digilab = {
    api_url: process.env.REACT_APP_API_BASE_URL,
    exercise_id: 1,
    on_success: () => console.log('Success'),
    on_failure: () => console.log('Failure')
  };

  return (
    <Fragment>
      <link rel="stylesheet" href="https://gobstones.digilab.live/assets/editor/editor.css" />
      <script src="https://gobstones.digilab.live/assets/editor/editor.js" />
      <link rel="import" href="https://gobstones.digilab.live/assets/polymer.html" />
      <link rel="import" href="https://gobstones.digilab.live/assets/gs-board.html" />
      <link rel="import" href="https://gobstones.digilab.live/assets/editor/editor.html" />
      <div className="row space-between">
        <mu-gobstones-custom-editor />
        <div className="mu-kids-gbs-board-initial active">
          <gs-board size='{ "x": 2, "y": 1 }' header='{ "x": 0, "y": 1 }' />
        </div>
        <gs-board className="mu-final-state active" size='{ "x": 2, "y": 1 }' header='{ "x": 1, "y": 1 }' />
      </div>
      <kids-submit-button />
      <div className="actions">
        <kids-reset-button />
      </div>
      <input type="hidden" id="mu-custom-editor-value" value={''} />
    </Fragment>
  );
}

export default BlockCode;
