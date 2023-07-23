"use client";
import CodeMirror from "@uiw/react-codemirror";
import { json } from "@codemirror/lang-json";
import { setCode } from "@/redux/features/codeSlice";
import { useAppSelector, useAppDispatch } from "@/redux/hooks";
function EditableWindow() {
  const { code } = useAppSelector((state) => state.codes);
  const dispatch = useAppDispatch();
  
  return (
    <CodeMirror
      onChange={(d) => {
        dispatch(setCode(d));
      }}
      value={code}
      theme="dark"
      extensions={[json()]}
    />
  );
}

export default EditableWindow;
