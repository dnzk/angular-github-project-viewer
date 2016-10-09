import angular from 'angular';
import readmeComponent from './readme.component';

const ReadmeModule = angular.module('readme', [])
  .component('readme', readmeComponent);

export default ReadmeModule;