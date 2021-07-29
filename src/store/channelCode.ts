import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./index";

interface IState {
  empInfo: any;
  channelList: any[];
  individualQRcodeInfo: any;
}

const initialState: IState = {
  empInfo: {},
  channelList: [],
  individualQRcodeInfo: {},
};

export const getEmpInfo: any = createAsyncThunk(
  "channelCodeStore/getEmpInfo",
  // async () => await fetchEmpInfo()
  async () => {
    try {
      // return await client.get('/fakeApi/todos');
    } catch (error) {
      console.log(`error==>`, error);
      // Toast.info(error);
    }
  }
);

export const counterSlice = createSlice({
  name: "channelCodeStore",
  initialState,
  reducers: {
    setEmpInfo(state, action) {
      state.empInfo = { ...action.payload };
    },
    setChannelList(state, action) {
      state.channelList = [...action.payload];
    },
    setIndividualQRcodeInfo(state, action) {
      state.individualQRcodeInfo = action.payload;
    },
  },
  extraReducers: {
    [getEmpInfo.fulfilled]: (state, action) => {
      const { code, data, msg } = action.payload;
      if (code === 1001) {
        state.empInfo = data;
      } else {
        // Toast.info(msg);
      }
    },
  },
});

export const selecteEmpInfo = (state: RootState) =>
  state.channelCodeStore.empInfo;

export const selectChannelList = (state: RootState) =>
  state.channelCodeStore.channelList;

export const selectIndividualQRcodeInfo = (state: RootState) =>
  state.channelCodeStore.individualQRcodeInfo;

export const { setEmpInfo, setChannelList, setIndividualQRcodeInfo } =
  counterSlice.actions;

export default counterSlice.reducer;
