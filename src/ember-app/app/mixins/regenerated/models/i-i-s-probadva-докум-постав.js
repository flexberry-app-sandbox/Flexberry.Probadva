import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  дата: DS.attr('date'),
  номерДогов: DS.attr('number'),
  клиенты: DS.belongsTo('i-i-s-probadva-клиенты', { inverse: null, async: false }),
  организация: DS.belongsTo('i-i-s-probadva-организация', { inverse: null, async: false }),
  инфорОЗаказе: DS.hasMany('i-i-s-probadva-инфор-о-заказе', { inverse: 'докумПостав', async: false })
});

export let ValidationRules = {
  дата: {
    descriptionKey: 'models.i-i-s-probadva-докум-постав.validations.дата.__caption__',
    validators: [
      validator('ds-error'),
      validator('date'),
    ],
  },
  номерДогов: {
    descriptionKey: 'models.i-i-s-probadva-докум-постав.validations.номерДогов.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  клиенты: {
    descriptionKey: 'models.i-i-s-probadva-докум-постав.validations.клиенты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  организация: {
    descriptionKey: 'models.i-i-s-probadva-докум-постав.validations.организация.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  инфорОЗаказе: {
    descriptionKey: 'models.i-i-s-probadva-докум-постав.validations.инфорОЗаказе.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДокумПоставE', 'i-i-s-probadva-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-probadva-клиенты', 'Клиенты', {
      заказчик: attr('Заказчик', { index: 3, hidden: true })
    }, { index: 2, displayMemberPath: 'заказчик' }),
    организация: belongsTo('i-i-s-probadva-организация', 'Организация', {
      наимОрганиз: attr('Наименование организации', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'наимОрганиз' }),
    инфорОЗаказе: hasMany('i-i-s-probadva-инфор-о-заказе', 'Информация о заказе', {
      товары: belongsTo('i-i-s-probadva-товары', 'Товары', {
        наимТовара: attr('Наименование товара', { index: 1, hidden: true }),
        единицыИзмер: attr('Единицы измерения', { index: 3 }),
        масса: attr('Масса', { index: 4 }),
        цены: attr('Цена', { index: 5 })
      }, { index: 0, displayMemberPath: 'наимТовара' }),
      количество: attr('Количество', { index: 2 })
    })
  });

  modelClass.defineProjection('ДокумПоставL', 'i-i-s-probadva-докум-постав', {
    дата: attr('Дата', { index: 0 }),
    номерДогов: attr('Номер документа поставки', { index: 1 }),
    клиенты: belongsTo('i-i-s-probadva-клиенты', 'Заказчик', {
      заказчик: attr('Заказчик', { index: 2 })
    }, { index: -1, hidden: true }),
    организация: belongsTo('i-i-s-probadva-организация', 'Наименование организации', {
      наимОрганиз: attr('Наименование организации', { index: 3 })
    }, { index: -1, hidden: true })
  });
};
