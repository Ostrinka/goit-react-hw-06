import { createSlice, createSelector } from '@reduxjs/toolkit';

const initialState = {
  name: "",
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.name = action.payload;
    },
  },
});

export const { setFilter } = filtersSlice.actions;
export const selectFilter = state => state.filters;
export default filtersSlice.reducer;

export const selectContact = state => state.contacts;
const filterContacts = (contacts, filter) => {
  return contacts.items.filter(contact =>
    contact.name.toLowerCase().includes(filter.name.toLowerCase())
  );
};

export const filteredContacts = createSelector(
  [selectContact, selectFilter],
  (contacts, filter) => filterContacts(contacts, filter)
);