import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-probadva-докум-постав', 'Unit | Serializer | i-i-s-probadva-докум-постав', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-probadva-докум-постав',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-probadva-ед-измер',
    'transform:i-i-s-probadva-состоян-заказа',
    'transform:i-i-s-probadva-удовл-клиента',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
