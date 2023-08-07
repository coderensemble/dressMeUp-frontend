import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  outfits: [],
  temporaryOutfit : {
    top1: null,
    top2: null,
    bottom: null,
    shoes: null,
    accessory1: null,
    accessory2: null,
    accessory3: null,
    image: "",
  },
  maintype : "",
  event: {
      party: false,
      sport: false,
      casual: false,
      work: false,
    },
};

export const outfitSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      if (action.payload === 'Soirée') {
          state.event.party = !state.event.party;
      } else if (action.payload === 'Sport') {
          state.event.sport = !state.event.sport;
      } else if (action.payload === 'Casual') {
          state.event.casual = !state.event.casual;
      } else if (action.payload === 'Work') {
          state.event.work = !state.event.work;
      }
    },
    setTop1: (state, action) => {
      state.temporaryOutfit.top1 = action.payload;
    },
    setTop2: (state, action) => {
      state.temporaryOutfit.top2 = action.payload;
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
      state.temporaryOutfit.image = action.payload;
    },
    setAccessory1: (state, action) => {
      state.temporaryOutfit.accessory1 = action.payload;
    },
    setAccessory2: (state, action) => {
      state.temporaryOutfit.accessory2 = action.payload;
    },
    setAccessory3: (state, action) => {
      state.temporaryOutfit.accessory3 = action.payload;
    },
    saveOutfit: (state) => {
      const combinedOutfit = {
        top1: state.temporaryOutfit.top1,
        top2: state.temporaryOutfit.top2,
        bottom: state.temporaryOutfit.bottom,
        shoes: state.temporaryOutfit.shoes,
        accessory1: state.temporaryOutfit.accessory1,
        accessory2: state.temporaryOutfit.accessory2,
        accessory3: state.temporaryOutfit.accessory3,
        image: state.temporaryOutfit.image,
        event: {
          party: state.event.party,
          sport: state.event.sport,
          casual: state.event.casual,
          work: state.event.work,
        },
      };
      state.outfits.push(combinedOutfit);
      state.temporaryOutfit = {
        top1: null,
        top2: null,
        bottom: null,
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