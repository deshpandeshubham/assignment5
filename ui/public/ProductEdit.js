/* eslint-disable linebreak-style */
import React from 'react';
export default function ProductEdit({
  match
}) {
  const {
    id
  } = match.params;
  return /*#__PURE__*/React.createElement("h2", null, `This is a placeholder for editing product ${id}`);
}