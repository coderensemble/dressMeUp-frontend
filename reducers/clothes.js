import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clothes: [],
  temporaryClothe: {
    name: "",
    maintype: "",
    color: {},
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
    season: {
      spring: false,
      summer: false,
      fall: false,
      winter: false,
    },
    waterproof: "false",
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
      if (action.payload === 'Soirée') {
          state.temporaryClothe.event.party = !state.temporaryClothe.event.party;
      } else if (action.payload === 'Sport') {
          state.temporaryClothe.event.sport = !state.temporaryClothe.event.sport;
      } else if (action.payload === 'Casual') {
          state.temporaryClothe.event.casual = !state.temporaryClothe.event.casual;
      } else if (action.payload === 'Work') {
          state.temporaryClothe.event.work = !state.temporaryClothe.event.work;
      }
    },
    setMaterial: (state, action) => {
      state.temporaryClothe.material = action.payload;
    },
    setCut: (state, action) => {
      state.temporaryClothe.cut = action.payload;
    },
    setSeason: (state, action) => {
      if (action.payload === 'Printemps') {
        state.temporaryClothe.season.spring = !state.temporaryClothe.season.spring;
    } else if (action.payload === 'Été') {
        state.temporaryClothe.season.summer = !state.temporaryClothe.season.summer;
    } else if (action.payload === 'Automne') {
        state.temporaryClothe.season.fall = !state.temporaryClothe.season.fall;
    } else if (action.payload === 'Hiver') {
        state.temporaryClothe.season.winter = !state.temporaryClothe.season.winter;
    }    },
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
        color: {},
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
        season: {
          spring: false,
          summer: false,
          fall: false,
          winter: false,
        },
        waterproof: "",
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
  setSeason,
  setWaterproof,
  saveTemporaryClothe,
  resetTemporaryClothe,
} = clotheSlice.actions;

export default clotheSlice.reducer;
