/**
 * Created by gsolis on 3/8/16.
 */
import mainStyle from './index.less'
import loginViewStyle from './views/login/login_view.less'

import angular from 'angular'
import ngRouter from 'angular-route'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'

const appModule = angular.module('app', ['ngRoute', 'ngMaterial']);

import controllers from './controllers'
import directives from './directives'
import factories from './factories'
import services from './services'
import appRoutes from './app_routes'

controllers(appModule);
directives(appModule);
factories(appModule);
services(appModule);
appRoutes(appModule);
