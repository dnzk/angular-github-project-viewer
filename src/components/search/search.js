import angular from 'angular';
import searchComponent from './search.component';

const SearchModule = angular.module('search', [])
  .component('search', searchComponent);

export default SearchModule;