import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IState {
  language: string;
  case: string;
  interfacesOnly: boolean;
  verifyJson: boolean;
  isUnion: boolean;
  typesInPlaceOfInterfaces: boolean;
}

export const initialState: IState = {
  language: "typescript",
  case: "",
  interfacesOnly: true,
  verifyJson: true,
  isUnion: false,
  typesInPlaceOfInterfaces: false,
};
export const options = createSlice({
  name: "options",
  initialState,
  reducers: {
    changeLang: (state, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    changeCase: (state, action: PayloadAction<string>) => {
      state.case = action.payload;
    },
    toggleInterface: (state) => {
      state.interfacesOnly = !state.interfacesOnly;
    },
    toggleJson: (state) => {
      state.verifyJson = !state.verifyJson;
    },
    toggleUnion: (state) => {
      state.isUnion = !state.isUnion;
    },
    toggleTypes: (state) => {
      state.typesInPlaceOfInterfaces = !state.typesInPlaceOfInterfaces;
    },
  },
});

export const {
  changeCase,
  changeLang,
  toggleInterface,
  toggleJson,
  toggleTypes,
  toggleUnion,
} = options.actions;
export default options.reducer;
