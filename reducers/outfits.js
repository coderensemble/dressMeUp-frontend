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
  name: "outfit",
  initialState,
  reducers: {
    addTop: (state, action) => {
      state.currentOutfit.tops.push(action.payload);
    },
    addPants: (state, action) => {
      state.currentOutfit.bottom = action.payload;
    },
    addShoes: (state, action) => {
      state.currentOutfit.shoes = action.payload;
    },
    setIsFavorite: (state, action) => {
      state.currentOutfit.isFavorite = action.payload;
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
        accessories: {
          accessory1: null,
          accessory2: null,
          accessory3: null,
        },
        isFavorite: false,
        image: "",
      };
    },
  },
});
