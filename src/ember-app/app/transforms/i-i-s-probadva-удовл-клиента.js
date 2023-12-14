import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import УдовлКлиентаEnum from '../enums/i-i-s-probadva-удовл-клиента';

export default FlexberryEnum.extend({
  enum: УдовлКлиентаEnum,
  sourceType: 'IIS.Probadva.УдовлКлиента'
});
