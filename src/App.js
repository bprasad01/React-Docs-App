import "./App.css";
import HomePage from "./components/pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HOC from "./components/common/HOC";
import PureComponent from "./components/common/PureComponent";
import UseReducer from "./components/common/UseReducer";
import DataFetchingTwo from "./components/examples/useReducerExample";
import UseImperetiveHandle from "./components/common/UseImperetiveHandle";
import ParentComponent from "./components/examples/useImperetiveHandle/Parent";
import UseLayoutEffectExample from "./components/examples/useLayoutEffect/useLayoutEffect";
import UseLayoutEffect from "./components/common/UseLayoutEffect";
import ControlledComponent from "./components/common/ControlledComponent";
import PropTypes from "./components/common/PropTypes";
import Pagination from "./components/common/Pagination";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/hoc" element={<HOC />} />
          <Route path="/pure-component" element={<PureComponent />} />
          <Route path="/controlled&uncontrolled" element={<ControlledComponent />} />
          <Route path="/proptypes" element={<PropTypes />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/hooks/useReducer" element={<UseReducer />} />
          <Route path="/hooks/useImperetiveHandle" element={<UseImperetiveHandle />} />
          <Route path="/hooks/useLayoutEffect" element={<UseLayoutEffect />} />
          <Route path="/hooks/useReducer/example" element={<DataFetchingTwo />} />
          <Route path="/hooks/useImperetive/example" element={<ParentComponent />} />
          <Route path="/hooks/useLayoutEffect/example" element={<UseLayoutEffectExample />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
