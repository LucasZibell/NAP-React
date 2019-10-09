import React, { Fragment } from 'react';

function BlockCode() {
  const x = something => {
    console.log({ a: 'hola', something });
    debugger; //eslint-disable-line
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
        <polymer onRunRequest={x}>
          <gs-element-blockly width="100px" height="50px" />
          <gs-board size='{ "x": 4, "y": 4 }' header='{ "x": 1, "y": 3 }' />
          <gs-board size='{ "x": 4, "y": 4 }' header='{ "x": 1, "y": 1 }' />
          <gobstones-code-runner />
        </polymer>
      </div>
      <button className="kids-submit-button" onRunRequest={x}>
        Mandar solucion
      </button>
    </Fragment>
  );
}

export default BlockCode;
