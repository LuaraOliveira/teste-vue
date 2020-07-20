import { InterfaceSettingsState, InterfaceCountry } from './types';

export default {
  getCountries(state: InterfaceSettingsState): InterfaceCountry[] {
    return state.countries;
  },
  getSelectedCountry(state: InterfaceSettingsState): InterfaceCountry {
    return state.selectedCountry;
  },
  getErrorStatus(state: InterfaceSettingsState): boolean {
    return state.error;
  },
};
