import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-probadva-докум-постав-l');
  this.route('i-i-s-probadva-докум-постав-e',
  { path: 'i-i-s-probadva-докум-постав-e/:id' });
  this.route('i-i-s-probadva-докум-постав-e.new',
  { path: 'i-i-s-probadva-докум-постав-e/new' });
  this.route('i-i-s-probadva-клиенты-l');
  this.route('i-i-s-probadva-клиенты-e',
  { path: 'i-i-s-probadva-клиенты-e/:id' });
  this.route('i-i-s-probadva-клиенты-e.new',
  { path: 'i-i-s-probadva-клиенты-e/new' });
  this.route('i-i-s-probadva-организация-l');
  this.route('i-i-s-probadva-организация-e',
  { path: 'i-i-s-probadva-организация-e/:id' });
  this.route('i-i-s-probadva-организация-e.new',
  { path: 'i-i-s-probadva-организация-e/new' });
  this.route('i-i-s-probadva-пункт-погрузки-l');
  this.route('i-i-s-probadva-пункт-погрузки-e',
  { path: 'i-i-s-probadva-пункт-погрузки-e/:id' });
  this.route('i-i-s-probadva-пункт-погрузки-e.new',
  { path: 'i-i-s-probadva-пункт-погрузки-e/new' });
  this.route('i-i-s-probadva-список-барж-l');
  this.route('i-i-s-probadva-список-барж-e',
  { path: 'i-i-s-probadva-список-барж-e/:id' });
  this.route('i-i-s-probadva-список-барж-e.new',
  { path: 'i-i-s-probadva-список-барж-e/new' });
  this.route('i-i-s-probadva-список-контей-l');
  this.route('i-i-s-probadva-список-контей-e',
  { path: 'i-i-s-probadva-список-контей-e/:id' });
  this.route('i-i-s-probadva-список-контей-e.new',
  { path: 'i-i-s-probadva-список-контей-e/new' });
  this.route('i-i-s-probadva-товары-l');
  this.route('i-i-s-probadva-товары-e',
  { path: 'i-i-s-probadva-товары-e/:id' });
  this.route('i-i-s-probadva-товары-e.new',
  { path: 'i-i-s-probadva-товары-e/new' });
  this.route('i-i-s-probadva-формир-распр-l');
  this.route('i-i-s-probadva-формир-распр-e',
  { path: 'i-i-s-probadva-формир-распр-e/:id' });
  this.route('i-i-s-probadva-формир-распр-e.new',
  { path: 'i-i-s-probadva-формир-распр-e/new' });
  this.route('i-i-s-probadva-формир-рез-пос-l');
  this.route('i-i-s-probadva-формир-рез-пос-e',
  { path: 'i-i-s-probadva-формир-рез-пос-e/:id' });
  this.route('i-i-s-probadva-формир-рез-пос-e.new',
  { path: 'i-i-s-probadva-формир-рез-пос-e/new' });
});

export default Router;
