// Reactパッケージの読み込み
import React from 'react';
import ReactDOM from 'react-dom';
import {App} from "./App";
import './index.sass';

// HTMLタグにReactコンポーネントを紐付ける
ReactDOM.render (
  <>
    <App />
  </>,
  document.getElementById ('root')
);
