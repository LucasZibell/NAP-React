import React, { Fragment } from 'react';

import styles from './styles.scss';

function BlockCode({ exam, title, description, size, initialBoard, finalBoard, onFinish, onError }) {
  const { header: initialHeader, table: initialtable } = initialBoard;
  const { header: finalHeader, table: finaltable } = finalBoard;
  window.digilab = {
    api_url: 'https://api.digilab.live',
    exercise_id: 1,
    on_success: response => onFinish(response),
    on_failure: () => onError()
  };

  return (
    <Fragment>
      <link rel="stylesheet" href="https://gobstones.digilab.live/assets/editor/editor.css" />
      <script src="https://gobstones.digilab.live/assets/editor/editor.js" />
      <link rel="import" href="https://gobstones.digilab.live/assets/polymer.html" />
      <link rel="import" href="https://gobstones.digilab.live/assets/gs-board.html" />
      <link rel="import" href="https://gobstones.digilab.live/assets/editor/editor.html" />
      <div className="column">
        <span>{title}</span>
        <span>{description}</span>
        <div className={`row space-around ${styles.codeContainer}`}>
          <div className="row">
            <div className="margin-right-20">
              <gs-toolbox toolbox-url="https://api.digilab.live/toolbox.xml" />
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
                <gs-board
                  size={JSON.stringify(size)}
                  header={JSON.stringify(initialHeader)}
                  table={JSON.stringify(initialtable)}
                />
              </div>
            </div>
            <span className={styles.tableHeader}>Tablero final</span>
            <gs-board
              className="mu-final-state active"
              size={JSON.stringify(size)}
              header={JSON.stringify(finalHeader)}
              table={JSON.stringify(finaltable)}
            />
          </div>
        </div>
      </div>
      <input type="hidden" id="mu-custom-editor-value" value={''} />
    </Fragment>
  );
}

export default BlockCode;
