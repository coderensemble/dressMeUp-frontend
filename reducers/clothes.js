import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  temporaryClothe: {
    name: "",
    maintype: "",
    color: "",
    image: "",
    subtype: "",
    brand: "",
    event: {
      party: false,
      sport: false,
      casual: false,
      work: false,
    },
    material: "",
    cut: "",
    saison: {
      spring: false,
      summer: false,
      fall: false,
      winter: false,
    },
    waterproof: false,
  },
};

export const clotheSlice = createSlice({
  name: "clothes",
  initialState,
  reducers: {
    setName: (state, action) => {
      state.temporaryClothe.name = action.payload;
    },
    setMaintype: (state, action) => {
      state.temporaryClothe.maintype = action.payload;
    },
    setColor: (state, action) => {
      state.temporaryClothe.color = action.payload;
    },
    setImage: (state, action) => {
      state.temporaryClothe.image = action.payload;
    },
    setSubtype: (state, action) => {
      state.temporaryClothe.subtype = action.payload;
    },
    setBrand: (state, action) => {
      state.temporaryClothe.brand = action.payload;
    },
    setEvent: (state, action) => {
      state.temporaryClothe.event = action.payload;
    },
    setMaterial: (state, action) => {
      state.temporaryClothe.material = action.payload;
    },
    setCut: (state, action) => {
      state.temporaryClothe.cut = action.payload;
    },
    setSaison: (state, action) => {
      state.temporaryClothe.saison = action.payload;
    },
    setWaterproof: (state, action) => {
      state.temporaryClothe.waterproof = action.payload;
    },
    saveTemporaryClothe: (state) => {
      state.clothes.push(state.temporaryClothe);
    },
    resetTemporaryClothe: (state) => {
      state.temporaryClothe = {
        name: "",
        maintype: "",
        color: "",
        image: "",
        subtype: "",
        brand: "",
        event: {
          party: false,
          sport: false,
          casual: false,
          work: false,
        },
        material: "",
        cut: "",
        saison: {
          spring: false,
          summer: false,
          fall: false,
          winter: false,
        },
        waterproof: false,
      };
    },
  },
});

export const {
  setName,
  setMaintype,
  setColor,
  setImage,
  setSubtype,
  setBrand,
  setEvent,
  setMaterial,
  setCut,
  setSaison,
  setWaterproof,
  saveTemporaryClothe,
  resetTemporaryClothe,
} = clotheSlice.actions;

export default clotheSlice.reducer;
