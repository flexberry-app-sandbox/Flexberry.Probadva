import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.логистика.caption'),
          title: i18n.t('forms.application.sitemap.логистика.title'),
          children: [{
            link: 'i-i-s-probadva-клиенты-l',
            caption: i18n.t('forms.application.sitemap.логистика.i-i-s-probadva-клиенты-l.caption'),
            title: i18n.t('forms.application.sitemap.логистика.i-i-s-probadva-клиенты-l.title'),
            icon: 'building',
            children: null
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.caption'),
            title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.title'),
            children: [{
              link: 'i-i-s-probadva-организация-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-организация-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-организация-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-probadva-список-контей-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-список-контей-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-список-контей-l.title'),
              icon: 'chart bar',
              children: null
            }, {
              link: 'i-i-s-probadva-пункт-погрузки-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-пункт-погрузки-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-пункт-погрузки-l.title'),
              icon: 'archive',
              children: null
            }, {
              link: 'i-i-s-probadva-список-барж-l',
              caption: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-список-барж-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.данные-об-организации.i-i-s-probadva-список-барж-l.title'),
              icon: 'tags',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.номенклатура.caption'),
            title: i18n.t('forms.application.sitemap.логистика.номенклатура.title'),
            children: [{
              link: 'i-i-s-probadva-товары-l',
              caption: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-probadva-товары-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.номенклатура.i-i-s-probadva-товары-l.title'),
              icon: 'file',
              children: null
            }]
          }, {
            link: null,
            caption: i18n.t('forms.application.sitemap.логистика.документы.caption'),
            title: i18n.t('forms.application.sitemap.логистика.документы.title'),
            children: [{
              link: 'i-i-s-probadva-формир-рез-пос-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-формир-рез-пос-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-формир-рез-пос-l.title'),
              icon: 'list',
              children: null
            }, {
              link: 'i-i-s-probadva-формир-распр-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-формир-распр-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-формир-распр-l.title'),
              icon: 'briefcase',
              children: null
            }, {
              link: 'i-i-s-probadva-докум-постав-l',
              caption: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-докум-постав-l.caption'),
              title: i18n.t('forms.application.sitemap.логистика.документы.i-i-s-probadva-докум-постав-l.title'),
              icon: 'folder',
              children: null
            }]
          }]
        }
      ]
    };
  }),
})