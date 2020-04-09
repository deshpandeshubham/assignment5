/* eslint-disable linebreak-style */

/* eslint-disable import/extensions */
import React from 'react';
import Contents from './Contents.jsx';

function NavBar() {
  return /*#__PURE__*/React.createElement("nav", null, /*#__PURE__*/React.createElement("a", {
    href: "/"
  }, "Home"), ' | ', /*#__PURE__*/React.createElement("a", {
    href: "/#/products"
  }, "Product List"), ' | ', /*#__PURE__*/React.createElement("a", {
    href: "/#/report"
  }, "Report"));
}

export default function Page() {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(NavBar, null), /*#__PURE__*/React.createElement(Contents, null));
}