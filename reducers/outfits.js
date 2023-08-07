import { createSlice } from "@reduxjs/toolkit";

const initialOutfit = {
  tops: [],
  bottom: null,
  shoes: null,
  accessory1: null,
  accessory2: null,
  accessory3: null,
  isFavorite: false,
  image: "",
};

const initialState = {
  outfits: [],
};

export const outfitSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {
    addTop: (state, action) => {
      state.currentOutfit.tops.push(action.payload);
    },
    setBottom: (state, action) => {
      state.temporaryOutfit.bottom = action.payload;
    },
    setShoes: (state, action) => {
      state.temporaryOutfit.shoes = action.payload;
    },
    setIsFavorite: (state, action) => {
      state.temporaryOutfit.isFavorite = action.payload;
    },
    setImage: (state, action) => {
      state.currentOutfit.image = action.payload;
    },
    saveOutfit: (state) => {
      state.outfits.push(state.currentOutfit);
      state.currentOutfit = {
        tops: [],
        pants: null,
        shoes: null,
        accessory1: null,
        accessory2: null,
        accessory3: null,
        image: "",
      };
      state.event = {
        party: false,
        sport: false,
        casual: false,
        work: false,
      };
    },    
    setMaintype: (state, action) => {
      state.maintype = action.payload;
    },
    resetMaintype: (state) => {
      state.maintype = ""
    },
    resetTemporaryOutfit : (state) => {
     state.temporaryOutfit = {
        top1: null,
        top2: null,
        bottom: null,
        shoes: null,
        accessory1: null,
        accessory2: null,
        accessory3: null,
        image: "",
      }
    },
    resetEvent : (state) => {
      state.event = {
        party: false,
        sport: false,
        casual: false,
        work: false,
      };
   },
  }
})

export const {
  setTop1,
  setTop2,
  setBottom,
  setShoes, 
  setAccessory1,
  setAccessory2,
  setAccessory3,
  setIsFavorite,
  setImage,
  saveOutfit,
  setMaintype,
  resetMaintype,
  resetTemporaryOutfit,
  setEvent,
  resetEvent
} = outfitSlice.actions;

export default outfitSlice.reducer;