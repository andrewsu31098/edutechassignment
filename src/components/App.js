import React, { useState, useEffect } from "react";
import Toolbar from "./Toolbar";
import Editor from "./Editor";
import Explainer from "./Explainer";
import useLocalStorage from "../hooks/useLocalStorage";
import robot from "../assets/robot.png";

function App() {
  const [html, setHtml] = useLocalStorage("html", "");
  const [css, setCss] = useLocalStorage("css", "");
  const [js, setJs] = useLocalStorage("js", "");
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script type="module">import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mjs";
          
          ${js}</script>
        </html>
      `);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <div className="mainContainer">
      <Toolbar />
      <div className="activityContainer">
        <div className="pane">
          <Explainer />
        </div>
        <div className="pane">
          <Editor
            language="javascript"
            displayName="JS"
            value={js}
            onChange={setJs}
          />
        </div>
        <div className="pane output">
          <iframe
            srcDoc={srcDoc}
            title="output"
            sandbox="allow-scripts allow-same-origin"
            frameBorder="0"
            resize="true"
            width="100%"
            height="100%"
            scrolling="no"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
