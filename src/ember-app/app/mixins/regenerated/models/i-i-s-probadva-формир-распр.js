import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДокРаспред: DS.attr('number'),
  докумПостав: DS.belongsTo('i-i-s-probadva-докум-постав', { inverse: null, async: false }),
  пунктПогрузки: DS.belongsTo('i-i-s-probadva-пункт-погрузки', { inverse: null, async: false }),
  списокБарж: DS.belongsTo('i-i-s-probadva-список-барж', { inverse: null, async: false }),
  списокКонтей: DS.belongsTo('i-i-s-probadva-список-контей', { inverse: null, async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДокРаспред: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.номерДокРаспред.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  докумПостав: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.докумПостав.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  пунктПогрузки: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.пунктПогрузки.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокБарж: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.списокБарж.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  списокКонтей: {
    descriptionKey: 'models.i-i-s-probadva-формир-распр.validations.списокКонтей.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ФормирРаспрE', 'i-i-s-probadva-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспред: attr('Номер документа распределения', { index: 1 }),
    докумПостав: belongsTo('i-i-s-probadva-докум-постав', 'Номер документа поставки', {
      клиенты: belongsTo('i-i-s-probadva-клиенты', '', {
        заказчик: attr('Заказчик', { index: 3 }),
        адресПоставки: attr('Адрес поставки', { index: 4 }),
        телефон: attr('Телефон', { index: 5 })
      }, { index: -1, hidden: true })
    }, { index: 2, displayMemberPath: 'номерДогов' }),
    списокБарж: belongsTo('i-i-s-probadva-список-барж', 'Номер баржи', {

    }, { index: 6, displayMemberPath: 'номерБаржи' }),
    пунктПогрузки: belongsTo('i-i-s-probadva-пункт-погрузки', 'Адрес погрузки', {

    }, { index: 7, displayMemberPath: 'адрес' }),
    списокКонтей: belongsTo('i-i-s-probadva-список-контей', 'Номер контейнера', {

    }, { index: 8, displayMemberPath: 'номерКонтей' })
  });

  modelClass.defineProjection('ФормирРаспрL', 'i-i-s-probadva-формир-распр', {
    дата: attr('Дата', { index: 0 }),
    номерДокРаспред: attr('Номер документа распределения', { index: 1 }),
    списокБарж: belongsTo('i-i-s-probadva-список-барж', 'Номер баржи', {
      номерБаржи: attr('Номер баржи', { index: 2 })
    }, { index: -1, hidden: true }),
    докумПостав: belongsTo('i-i-s-probadva-докум-постав', 'Номер документа поставки', {
      номерДогов: attr('Номер документа поставки', { index: 3 })
    }, { index: -1, hidden: true }),
    пунктПогрузки: belongsTo('i-i-s-probadva-пункт-погрузки', 'Адрес погрузки', {
      адрес: attr('Адрес погрузки', { index: 4 })
    }, { index: -1, hidden: true }),
    списокКонтей: belongsTo('i-i-s-probadva-список-контей', 'Номер контейнера', {
      номерКонтей: attr('Номер контейнера', { index: 5 })
    }, { index: -1, hidden: true })
  });
};
