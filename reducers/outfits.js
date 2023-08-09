import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  outfits: [],
  temporaryOutfit: {
    top1: null,
    top2: null,
    bottom: null,
    shoes: null,
    accessory1: null,
    accessory2: null,
    accessory3: null,
    image: "",
    id: null,
    isFavorite: false
  },
  maintype: "",
  event: {
    party: false,
    sport: false,
    casual: false,
    work: false,
  },
  temporaryOutfitHistory: [],
  favoriteArray: []
};

export const outfitSlice = createSlice({
  name: "outfits",
  initialState,
  reducers: {
    setEvent: (state, action) => {
      if (action.payload === "Soirée") {
        state.event.party = !state.event.party;
      } else if (action.payload === "Sport") {
        state.event.sport = !state.event.sport;
      } else if (action.payload === "Casual") {
        state.event.casual = !state.event.casual;
      } else if (action.payload === "Work") {
        state.event.work = !state.event.work;
      }
    },
    setTop1: (state, action) => {
      // console.log('setTop 1 payload', action.payload)
      state.temporaryOutfit.top1 = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    setTop2: (state, action) => {
      // console.log('setTop 2 payload', action.payload)
      state.temporaryOutfit.top2 = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    setBottom: (state, action) => {
      state.temporaryOutfit.bottom = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    setShoes: (state, action) => {
      state.temporaryOutfit.shoes = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    addFavorite: (state, action) => {
      const index = state.favoriteArray.indexOf(action.payload);
      if (index !== -1) {
        state.favoriteArray.splice(index, 1);
      } else {
        state.favoriteArray.push(action.payload);
      }
    },
    removeFavorite: (state, action) => {
  
    },


    setId: (state, action) => {
      state.temporaryOutfit.id = action.payload;
    },
    setImage: (state, action) => {
      state.temporaryOutfit.image = action.payload;
    },
    setAccessory1: (state, action) => {
      state.temporaryOutfit.accessory1 = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    setAccessory2: (state, action) => {
      state.temporaryOutfit.accessory2 = action.payload;
      state.temporaryOutfit.order.push(action.payload);
    },
    setAccessory3: (state, action) => {
      state.temporaryOutfit.accessory3 = action.payload;
      state.temporaryOutfit.order.push(action.payload);
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
        id: state.temporaryOutfit.id,
        isFavorite: false,
        username: null
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
      state.maintype = "";
    },
    resetTemporaryOutfit: (state) => {
      state.temporaryOutfit = {
        top1: null,
        top2: null,
        bottom: null,
        shoes: null,
        accessory1: null,
        accessory2: null,
        accessory3: null,
        image: "",
        order: []
      };
    },
    modifyTemporaryOutfit: (state, action) => {
      state.temporaryOutfit = action.payload
      },
    resetEvent: (state) => {
      state.event = {
        party: false,
        sport: false,
        casual: false,
        work: false,
      };
    },
    removeLastItem: (state) => {
      const lastAddedType =
        state.temporaryOutfit.order[state.temporaryOutfit.order.length - 1];
      state.temporaryOutfit[lastAddedType] = null;
      state.temporaryOutfit.order.pop();
    },
    resetOutfits: (state) => {
      state.outfits = []
    },
    pushToHistory: (state, action) => {
      // console.log('PAYLOAD', action.payload)
      state.temporaryOutfitHistory.push(action.payload)
    },
    resetHistory: (state, action) => {
      // console.log('PAYLOAD', action.payload)
      state.temporaryOutfitHistory = []
    },
    setNewHistory: (state, action) => {
      // console.log('PAYLOAD', action.payload)
      state.temporaryOutfitHistory = action.payload
    },
  },
});

export const {
  setTop1,
  setTop2,
  setBottom,
  setShoes,
  setAccessory1,
  setAccessory2,
  setAccessory3,
  addFavorite,
  removeFavorite,
  setImage,
  saveOutfit,
  setMaintype,
  resetMaintype,
  resetTemporaryOutfit,
  setEvent,
  resetEvent,
  removeLastItem,
  resetOutfits,
  modifyTemporaryOutfit,
  pushToHistory,
  resetHistory,
  setNewHistory,
  setId
} = outfitSlice.actions;

export default outfitSlice.reducer;