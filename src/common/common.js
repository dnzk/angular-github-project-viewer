import angular from 'angular';
import UserModel from './models/user.model';

const CommonModule = angular.module('common', [])
  .service('UserModel', UserModel)

export default CommonModule;