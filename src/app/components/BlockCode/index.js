import React, { Fragment } from 'react';

import styles from './styles.scss';

const tools = {
  visible: ['Comandos Primitivos']
};

function BlockCode() {
  const x = something => {
    console.log({ a: 'hola', something });
  };
  return (
    <Fragment>
      <link rel="stylesheet" href="http://localhost:9292/assets/editor/editor.css" />
      <script src="http://localhost:9292/assets/editor/editor.js" />
      <link rel="import" href="http://localhost:9292/assets/polymer.html" />
      <link rel="import" href="http://localhost:9292/assets/gs-board.html" />
      <link rel="import" href="http://localhost:9292/assets/editor/editor.html" />
      <link rel="import" href="http://localhost:9292/assets/editor/gobstones-code-runner.html" />
      <div className="row space-between">
        <mu-gobstones-custom-editor toolbox={tools} />
        <gs-board className="mu-initial-state active" size='{ "x": 2, "y": 1 }' header='{ "x": 0, "y": 1 }' />
        <gs-board className="mu-final-state active" size='{ "x": 2, "y": 1 }' header='{ "x": 1, "y": 1 }' />
      </div>
      <kids-submit-button onClick={x} />
      <input type="hidden" id="mu-custom-editor-value" value={''} />
    </Fragment>
  );
}

export default BlockCode;
