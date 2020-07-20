<template>
  <div class="Country">
    <select
      v-if="countries && selectedCountry"
      name="contries"
      id="contries"
      @change="defineCountry">
      <option
        v-for="(country, index) of countries"
        :key="'country'+index"
        :value="country.alpha2Code"
        :selected="country.alpha2Code === selectedCountry.alpha2Code">
        {{country.name}}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action, Getter } from 'vuex-class';
import { InterfaceCountry } from '../store/modules/settings/types';

const namespace = 'settings';

@Component
export default class Country extends Vue {
@Action('fetchCountries', { namespace }) fetchCountries: any;

@Action('setSelectedCountry', { namespace }) setCountry: any;

@Getter('getCountries', { namespace }) countries!: InterfaceCountry[];

@Getter('getSelectedCountry', { namespace }) selectedCountry!: InterfaceCountry;

mounted() {
  this.fetchCountries();
}

defineCountry(e: any) {
  const country = this.countries.find((item) => item.alpha2Code === e.target.value);
  this.setCountry(country);
}
}
</script>
