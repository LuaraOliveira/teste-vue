export interface InterfaceCountry {
  name: string;
  alpha2Code: string;
  subregion: string;
}

export interface InterfaceSettingsState {
  countries: InterfaceCountry[];
  selectedCountry: InterfaceCountry;
  error: boolean;
}
