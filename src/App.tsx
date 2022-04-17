import React from "react";
import resetStyle from "@/styles/resetStyle";
import { Global } from "@emotion/react";
import { Provider } from "react-redux";
import store from "@/store";
import Routes from "@/routes";
import Common from "@/components/Common";
import globalStyle from "@/styles/globalStyle";
import { css } from "@emotion/react";

const globalStyles = css`
  ${resetStyle}
  ${globalStyle}
`;

function App() {
  return (
    <Provider store={store}>
      <Global styles={globalStyles} />
      <div className="App">
        <Routes />
        <Common />
      </div>
    </Provider>
  );
}
export default App;
