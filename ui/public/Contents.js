/* eslint-disable linebreak-style */

/* eslint-disable import/extensions */
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import ProductList from './ProductList.jsx';
import ProductReport from './ProductReport.jsx';
import ProductEdit from './ProductEdit.jsx';

const NotFound = () => /*#__PURE__*/React.createElement("h1", null, "Page Not Found");

export default function Contents() {
  return /*#__PURE__*/React.createElement(Switch, null, /*#__PURE__*/React.createElement(Redirect, {
    exact: true,
    from: "/",
    to: "/products"
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/products",
    component: ProductList
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/report",
    component: ProductReport
  }), /*#__PURE__*/React.createElement(Route, {
    path: "/edit/:id",
    component: ProductEdit
  }), /*#__PURE__*/React.createElement(Route, {
    component: NotFound
  }));
}