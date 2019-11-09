import React, { Fragment } from 'react';

import styles from './styles.scss';

function BlockCode({ exam }) {
  window.digilab = {
    api_url: 'https://api.digilab.live',
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
      <div className={`row space-around ${styles.codeContainer}`}>
        <div className="row">
          <div className="margin-right-20">
            <mu-gobstones-custom-editor />
          </div>
          <div className="column">
            {exam || (
              <div className="column space-between margin-bottom-20">
                <span className={styles.tableHeader}>Enviar Solucion</span>
                <kids-submit-button />
              </div>
            )}
            <div className="column space-between">
              <span className={styles.tableHeader}>Reiniciar</span>
              <div className="actions">
                <kids-reset-button />
              </div>
            </div>
          </div>
        </div>
        <div className="column">
          <div className="margin-bottom-40">
            <span className={styles.tableHeader}>Tablero inicial</span>
            <div className="mu-kids-gbs-board-initial active">
              <gs-board size='{ "x": 4, "y": 4 }' header='{ "x": 0, "y": 0 }' />
            </div>
          </div>
          <span className={styles.tableHeader}>Tablero final</span>
          <gs-board className="mu-final-state active" size='{ "x": 4, "y": 4 }' header='{ "x": 4, "y": 4 }' />
        </div>
      </div>
      <input type="hidden" id="mu-custom-editor-value" value={''} />
    </Fragment>
  );
}

export default BlockCode;
