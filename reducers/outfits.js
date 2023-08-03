import { createSlice } from "@reduxjs/toolkit";

const temporaryOutfit = {
  top1: null,
  top2 : null,
  bottom: null,
  shoes: null,
  accessory1: null,
  accessory2: null,
  accessory3: null,
  image: "",
};

const initialState = {
  outfits: [],
};

export const outfitSlice = createSlice({
  name: "outfit",
  initialState,
  reducers: {
    addTop: (state, action) => {
      state.temporaryOutfit.tops.push(action.payload);
    },
    addPants: (state, action) => {
      state.temporaryOutfit.bottom = action.payload;
    },
    addShoes: (state, action) => {
      state.temporaryOutfit.shoes = action.payload;
    },
    setIsFavorite: (state, action) => {
      state.temporaryOutfit.isFavorite = action.payload;
    },
    setImage: (state, action) => {
      state.temporaryOutfit.image = action.payload;
    },
    saveOutfit: (state) => {
      // CAM REF ICI
      state.outfits.push(state.temporaryOutfit);
      state.temporaryOutfit = {
        tops: [],
        pants: null,
        shoes: null,
        accessories: {
          accessory1: null,
          accessory2: null,
          accessory3: null,
        },
        image: "",
      };
    },
  },
});
