import angular from 'angular';
import RootModule from './root/root';
import SearchModule from './search/search';
import UserModule from './user/user';
import ReadmeModule from './readme/readme';

const moduleDependencies = [
  RootModule.name,
  SearchModule.name,
  UserModule.name,
  ReadmeModule.name
];

const ComponentsModule = angular
  .module('components', moduleDependencies)

export default ComponentsModule;