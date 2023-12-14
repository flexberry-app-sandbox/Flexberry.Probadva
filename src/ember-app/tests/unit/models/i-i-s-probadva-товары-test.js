import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadva-товары', 'Unit | Model | i-i-s-probadva-товары', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-probadva-докум-постав',
    'model:i-i-s-probadva-инфор-о-заказе',
    'model:i-i-s-probadva-клиенты',
    'model:i-i-s-probadva-организация',
    'model:i-i-s-probadva-пункт-погрузки',
    'model:i-i-s-probadva-список-барж',
    'model:i-i-s-probadva-список-контей',
    'model:i-i-s-probadva-товары',
    'model:i-i-s-probadva-формир-распр',
    'model:i-i-s-probadva-формир-рез-пос',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
