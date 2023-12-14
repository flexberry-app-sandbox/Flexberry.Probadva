import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ЕдИзмерEnum from '../enums/i-i-s-probadva-ед-измер';

export default FlexberryEnum.extend({
  enum: ЕдИзмерEnum,
  sourceType: 'IIS.Probadva.ЕдИзмер'
});
