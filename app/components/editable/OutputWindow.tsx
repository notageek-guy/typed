"use client";

import { useAppSelector } from "@/redux/hooks";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";

function OutputWindow() {
  const { result } = useAppSelector((state) => state.codes);
  const {language} = useAppSelector((state) => state.option)
  return (
    <>
      <SyntaxHighlighter
        lineProps={{ style: { paddingBottom: 8 } }}
        customStyle={{
          margin: 0,
          wordBreak: "break-all",
          whiteSpace: "pre-wrap",
          boxShadow: "0px 2px 4px rgba(50,50,93,.1)",
        }}
        language={language}
        style={dracula}
      >
        {result}
      </SyntaxHighlighter>
    </>
  );
}

export default OutputWindow;
