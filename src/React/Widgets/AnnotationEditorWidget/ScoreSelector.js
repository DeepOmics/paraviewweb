import React from 'react';
import style from 'PVWStyle/ReactWidgets/AnnotationEditorWidget.mcss';

export default function scoreSelector(props) {
  const click = event => {
    props.onChange(props.name, Number(event.target.getAttribute('data-score')));
  };

  return (
    <section className={[style.scoreContainer, props.className].join(' ')}>
      {props.scores.map((score, idx) =>
        <div
          key={idx}
          className={props.score === score.value ? style.selectedScoreBlock : style.scoreBlock}
          style={{ background: score.color, display: props.horizontal ? 'inline-block' : 'block' }}
          title={score.name}
          data-score={score.value}
          onClick={click}
        >
        </div>
      )}
    </section>);
}

scoreSelector.propTypes = {
  name: React.PropTypes.string,
  score: React.PropTypes.number,
  scores: React.PropTypes.array,
  onChange: React.PropTypes.func,
  horizontal: React.PropTypes.bool,
  className: React.PropTypes.string,
};

scoreSelector.default = {
  name: 'default',
  horizontal: false,
  onChange(name, score) {},
};
