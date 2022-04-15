import React from 'react';
import resetStyle from '@/styles/resetStyle';
import { Global } from '@emotion/react';
import { Provider } from 'react-redux';
import store from '@/store';
import Routes from '@/routes';
import GlobalCommon from '@/components/GlobalCommon';
import globalStyle from '@/styles/globalStyle';
import { css } from '@emotion/react';

function App() {
  return (
    <Provider store={store}>
      <Global
        styles={css`
          ${resetStyle}
          ${globalStyle}
        `}
      />
      <div className="App">
        <Routes />
        <GlobalCommon />
      </div>
    </Provider>
  );
}
export default App;
