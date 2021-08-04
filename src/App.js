import "./App.css";

import ContextProvider from "./Hooks/Context/ContextProvider";
import DemoHookUseContext from "./Hooks/DemoHookUseContext";

// import DemoHookUseReducer from "./Hooks/DemoHookUseReducer";

// import DemoUseRef from "./Hooks/DemoUseRef";

// import DemoHookUseMeno from "./Hooks/DemoHookUseMeno";

// import DemoHookUseCallBack from "./Hooks/DemoHookUseCallBack";

// import DemoHookUseEffect from "./Hooks/DemoHookUseEffect";

// import DemoHookUseState from "./Hooks/DemoHookUseState";

// import LifeCycleReact from "./LifeCycleComponent/LifeCycleReact";

// import DemoTheme from "./Themes/DemoTheme";

// import DemoJSS from "./JSS_StyledComponent/DemoJSS/DemoJSS";

// import UserProfile from "./FormValidation/UserProfile/UserProfile";

function App() {
  return (
    <ContextProvider>
      {/* <UserProfile /> */}
      {/* <DemoJSS /> */}
      {/* <DemoTheme /> */}
      {/* <LifeCycleReact /> */}
      {/* <DemoHookUseState/> */}
      {/* <DemoHookUseEffect /> */}
      {/* <DemoHookUseCallBack/> */}
      {/* <DemoHookUseMeno /> */}
      {/* <DemoUseRef/> */}
      {/* <DemoHookUseReducer/> */}
      <DemoHookUseContext />
    </ContextProvider>
  );
}

export default App;
