import angular from 'angular';
import userComponent from './user.component';

const UserModule = angular.module('user', [])
  .component('user', userComponent);

export default UserModule;