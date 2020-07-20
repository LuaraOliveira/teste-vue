import { InterfaceSettingsState, InterfaceCountry } from './types';

export default {
  setCountries(state: InterfaceSettingsState, payload: InterfaceCountry[]) {
    state.error = false;
    state.countries = payload;
  },
  setSelectedCountry(state: InterfaceSettingsState, country: InterfaceCountry) {
    state.error = false;
    state.selectedCountry = country;
  },
  settingError(state: InterfaceSettingsState) {
    state.error = true;
  },
};
