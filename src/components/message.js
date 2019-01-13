import React from 'react';

import './message.scss';

const Message = function(props = {}) {
  let classNames = props.className || '';
  classNames += ' message';
  classNames += props.type ? ` message-${props.type}` : '';

  return <section className={classNames}>{props.children}</section>;
};

export default Message;
