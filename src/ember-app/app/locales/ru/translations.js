import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISProbadvaДокумПоставLForm from './forms/i-i-s-probadva-докум-постав-l';
import IISProbadvaКлиентыLForm from './forms/i-i-s-probadva-клиенты-l';
import IISProbadvaОрганизацияLForm from './forms/i-i-s-probadva-организация-l';
import IISProbadvaПунктПогрузкиLForm from './forms/i-i-s-probadva-пункт-погрузки-l';
import IISProbadvaСписокБаржLForm from './forms/i-i-s-probadva-список-барж-l';
import IISProbadvaСписокКонтейLForm from './forms/i-i-s-probadva-список-контей-l';
import IISProbadvaТоварыLForm from './forms/i-i-s-probadva-товары-l';
import IISProbadvaФормирРаспрLForm from './forms/i-i-s-probadva-формир-распр-l';
import IISProbadvaФормирРезПосLForm from './forms/i-i-s-probadva-формир-рез-пос-l';
import IISProbadvaДокумПоставEForm from './forms/i-i-s-probadva-докум-постав-e';
import IISProbadvaКлиентыEForm from './forms/i-i-s-probadva-клиенты-e';
import IISProbadvaОрганизацияEForm from './forms/i-i-s-probadva-организация-e';
import IISProbadvaПунктПогрузкиEForm from './forms/i-i-s-probadva-пункт-погрузки-e';
import IISProbadvaСписокБаржEForm from './forms/i-i-s-probadva-список-барж-e';
import IISProbadvaСписокКонтейEForm from './forms/i-i-s-probadva-список-контей-e';
import IISProbadvaТоварыEForm from './forms/i-i-s-probadva-товары-e';
import IISProbadvaФормирРаспрEForm from './forms/i-i-s-probadva-формир-распр-e';
import IISProbadvaФормирРезПосEForm from './forms/i-i-s-probadva-формир-рез-пос-e';
import IISProbadvaДокумПоставModel from './models/i-i-s-probadva-докум-постав';
import IISProbadvaИнфорОЗаказеModel from './models/i-i-s-probadva-инфор-о-заказе';
import IISProbadvaКлиентыModel from './models/i-i-s-probadva-клиенты';
import IISProbadvaОрганизацияModel from './models/i-i-s-probadva-организация';
import IISProbadvaПунктПогрузкиModel from './models/i-i-s-probadva-пункт-погрузки';
import IISProbadvaСписокБаржModel from './models/i-i-s-probadva-список-барж';
import IISProbadvaСписокКонтейModel from './models/i-i-s-probadva-список-контей';
import IISProbadvaТоварыModel from './models/i-i-s-probadva-товары';
import IISProbadvaФормирРаспрModel from './models/i-i-s-probadva-формир-распр';
import IISProbadvaФормирРезПосModel from './models/i-i-s-probadva-формир-рез-пос';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-probadva-докум-постав': IISProbadvaДокумПоставModel,
    'i-i-s-probadva-инфор-о-заказе': IISProbadvaИнфорОЗаказеModel,
    'i-i-s-probadva-клиенты': IISProbadvaКлиентыModel,
    'i-i-s-probadva-организация': IISProbadvaОрганизацияModel,
    'i-i-s-probadva-пункт-погрузки': IISProbadvaПунктПогрузкиModel,
    'i-i-s-probadva-список-барж': IISProbadvaСписокБаржModel,
    'i-i-s-probadva-список-контей': IISProbadvaСписокКонтейModel,
    'i-i-s-probadva-товары': IISProbadvaТоварыModel,
    'i-i-s-probadva-формир-распр': IISProbadvaФормирРаспрModel,
    'i-i-s-probadva-формир-рез-пос': IISProbadvaФормирРезПосModel
  },

  'application-name': 'Probadva',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Probadva',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Probadva',
          title: 'Probadva'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        логистика: {
          caption: 'Логистика',
          title: 'Логистика',
          'i-i-s-probadva-клиенты-l': {
            caption: 'Клиенты',
            title: ''
          },
          'данные-об-организации': {
            caption: 'Данные об организации',
            title: 'Данные об организации',
            'i-i-s-probadva-организация-l': {
              caption: 'Организация',
              title: 'Организация'
            },
            'i-i-s-probadva-список-контей-l': {
              caption: 'Список контейнеров',
              title: 'Список контей'
            },
            'i-i-s-probadva-пункт-погрузки-l': {
              caption: 'Пункт погрузки',
              title: 'Пункт погрузки'
            },
            'i-i-s-probadva-список-барж-l': {
              caption: 'Список барж',
              title: 'Список барж'
            }
          },
          номенклатура: {
            caption: 'Номенклатура',
            title: 'Номенклатура',
            'i-i-s-probadva-товары-l': {
              caption: 'Товары',
              title: 'Товары'
            }
          },
          документы: {
            caption: 'Документы',
            title: 'Документы',
            'i-i-s-probadva-формир-рез-пос-l': {
              caption: 'Формирование результата поставки',
              title: 'Формир рез пос'
            },
            'i-i-s-probadva-формир-распр-l': {
              caption: 'Формирование документа распределения',
              title: 'Формир распр'
            },
            'i-i-s-probadva-докум-постав-l': {
              caption: 'Документ поставки',
              title: 'Докум постав'
            }
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-probadva-докум-постав-l': IISProbadvaДокумПоставLForm,
    'i-i-s-probadva-клиенты-l': IISProbadvaКлиентыLForm,
    'i-i-s-probadva-организация-l': IISProbadvaОрганизацияLForm,
    'i-i-s-probadva-пункт-погрузки-l': IISProbadvaПунктПогрузкиLForm,
    'i-i-s-probadva-список-барж-l': IISProbadvaСписокБаржLForm,
    'i-i-s-probadva-список-контей-l': IISProbadvaСписокКонтейLForm,
    'i-i-s-probadva-товары-l': IISProbadvaТоварыLForm,
    'i-i-s-probadva-формир-распр-l': IISProbadvaФормирРаспрLForm,
    'i-i-s-probadva-формир-рез-пос-l': IISProbadvaФормирРезПосLForm,
    'i-i-s-probadva-докум-постав-e': IISProbadvaДокумПоставEForm,
    'i-i-s-probadva-клиенты-e': IISProbadvaКлиентыEForm,
    'i-i-s-probadva-организация-e': IISProbadvaОрганизацияEForm,
    'i-i-s-probadva-пункт-погрузки-e': IISProbadvaПунктПогрузкиEForm,
    'i-i-s-probadva-список-барж-e': IISProbadvaСписокБаржEForm,
    'i-i-s-probadva-список-контей-e': IISProbadvaСписокКонтейEForm,
    'i-i-s-probadva-товары-e': IISProbadvaТоварыEForm,
    'i-i-s-probadva-формир-распр-e': IISProbadvaФормирРаспрEForm,
    'i-i-s-probadva-формир-рез-пос-e': IISProbadvaФормирРезПосEForm
  },

});

export default translations;
