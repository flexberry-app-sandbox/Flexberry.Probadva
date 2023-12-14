import {
  defineNamespace,
  defineProjections,
  Model as ФормирРаспрMixin
} from '../mixins/regenerated/models/i-i-s-probadva-формир-распр';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ФормирРаспрMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
