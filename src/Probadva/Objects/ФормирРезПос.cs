﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Probadva
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Формир рез пос.
    /// </summary>
    // *** Start programmer edit section *** (ФормирРезПос CustomAttributes)

    // *** End programmer edit section *** (ФормирРезПос CustomAttributes)
    [AutoAltered()]
    [Caption("Формирование результатов поставки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ФормирРезПосE", new string[] {
            "Дата as \'Дата\'",
            "ФормирРаспр as \'Номер документа распределения\'",
            "ФормирРаспр.ДокумПостав.Клиенты.Заказчик as \'Заказчик\'",
            "ФормирРаспр.ДокумПостав.Клиенты.АдресПоставки as \'Адрес поставки\'",
            "ФормирРаспр.ДокумПостав.Клиенты.Телефон as \'Телефон\'",
            "СтатусЗаказа as \'Статус заказа\'",
            "НаличиеДеф as \'Наличие дефектов\'",
            "УдовлКлиента as \'Удовлетворенность клиента\'"})]
    [MasterViewDefineAttribute("ФормирРезПосE", "ФормирРаспр", ICSSoft.STORMNET.LookupTypeEnum.Standard, "", "НомерДокРаспред")]
    [View("ФормирРезПосL", new string[] {
            "Дата as \'Дата\'",
            "ФормирРаспр.НомерДокРаспред as \'Номер документа распределения\'",
            "СтатусЗаказа as \'Статус заказа\'",
            "НаличиеДеф as \'Наличие дефектов\'",
            "УдовлКлиента as \'Удовлетворенность клиента\'"})]
    public class ФормирРезПос : ICSSoft.STORMNET.DataObject
    {
        
        private System.DateTime fДата;
        
        private IIS.Probadva.СостоянЗаказа fСтатусЗаказа;
        
        private bool fНаличиеДеф;
        
        private IIS.Probadva.УдовлКлиента fУдовлКлиента;
        
        private IIS.Probadva.ФормирРаспр fФормирРаспр;
        
        // *** Start programmer edit section *** (ФормирРезПос CustomMembers)

        // *** End programmer edit section *** (ФормирРезПос CustomMembers)

        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРезПос.Дата CustomAttributes)

        // *** End programmer edit section *** (ФормирРезПос.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРезПос.Дата Get start)

                // *** End programmer edit section *** (ФормирРезПос.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ФормирРезПос.Дата Get end)

                // *** End programmer edit section *** (ФормирРезПос.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРезПос.Дата Set start)

                // *** End programmer edit section *** (ФормирРезПос.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ФормирРезПос.Дата Set end)

                // *** End programmer edit section *** (ФормирРезПос.Дата Set end)
            }
        }
        
        /// <summary>
        /// НаличиеДеф.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРезПос.НаличиеДеф CustomAttributes)

        // *** End programmer edit section *** (ФормирРезПос.НаличиеДеф CustomAttributes)
        public virtual bool НаличиеДеф
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРезПос.НаличиеДеф Get start)

                // *** End programmer edit section *** (ФормирРезПос.НаличиеДеф Get start)
                bool result = this.fНаличиеДеф;
                // *** Start programmer edit section *** (ФормирРезПос.НаличиеДеф Get end)

                // *** End programmer edit section *** (ФормирРезПос.НаличиеДеф Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРезПос.НаличиеДеф Set start)

                // *** End programmer edit section *** (ФормирРезПос.НаличиеДеф Set start)
                this.fНаличиеДеф = value;
                // *** Start programmer edit section *** (ФормирРезПос.НаличиеДеф Set end)

                // *** End programmer edit section *** (ФормирРезПос.НаличиеДеф Set end)
            }
        }
        
        /// <summary>
        /// СтатусЗаказа.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРезПос.СтатусЗаказа CustomAttributes)

        // *** End programmer edit section *** (ФормирРезПос.СтатусЗаказа CustomAttributes)
        public virtual IIS.Probadva.СостоянЗаказа СтатусЗаказа
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРезПос.СтатусЗаказа Get start)

                // *** End programmer edit section *** (ФормирРезПос.СтатусЗаказа Get start)
                IIS.Probadva.СостоянЗаказа result = this.fСтатусЗаказа;
                // *** Start programmer edit section *** (ФормирРезПос.СтатусЗаказа Get end)

                // *** End programmer edit section *** (ФормирРезПос.СтатусЗаказа Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРезПос.СтатусЗаказа Set start)

                // *** End programmer edit section *** (ФормирРезПос.СтатусЗаказа Set start)
                this.fСтатусЗаказа = value;
                // *** Start programmer edit section *** (ФормирРезПос.СтатусЗаказа Set end)

                // *** End programmer edit section *** (ФормирРезПос.СтатусЗаказа Set end)
            }
        }
        
        /// <summary>
        /// УдовлКлиента.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРезПос.УдовлКлиента CustomAttributes)

        // *** End programmer edit section *** (ФормирРезПос.УдовлКлиента CustomAttributes)
        public virtual IIS.Probadva.УдовлКлиента УдовлКлиента
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРезПос.УдовлКлиента Get start)

                // *** End programmer edit section *** (ФормирРезПос.УдовлКлиента Get start)
                IIS.Probadva.УдовлКлиента result = this.fУдовлКлиента;
                // *** Start programmer edit section *** (ФормирРезПос.УдовлКлиента Get end)

                // *** End programmer edit section *** (ФормирРезПос.УдовлКлиента Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРезПос.УдовлКлиента Set start)

                // *** End programmer edit section *** (ФормирРезПос.УдовлКлиента Set start)
                this.fУдовлКлиента = value;
                // *** Start programmer edit section *** (ФормирРезПос.УдовлКлиента Set end)

                // *** End programmer edit section *** (ФормирРезПос.УдовлКлиента Set end)
            }
        }
        
        /// <summary>
        /// Формир рез пос.
        /// </summary>
        // *** Start programmer edit section *** (ФормирРезПос.ФормирРаспр CustomAttributes)

        // *** End programmer edit section *** (ФормирРезПос.ФормирРаспр CustomAttributes)
        [PropertyStorage(new string[] {
                "ФормирРаспр"})]
        [NotNull()]
        public virtual IIS.Probadva.ФормирРаспр ФормирРаспр
        {
            get
            {
                // *** Start programmer edit section *** (ФормирРезПос.ФормирРаспр Get start)

                // *** End programmer edit section *** (ФормирРезПос.ФормирРаспр Get start)
                IIS.Probadva.ФормирРаспр result = this.fФормирРаспр;
                // *** Start programmer edit section *** (ФормирРезПос.ФормирРаспр Get end)

                // *** End programmer edit section *** (ФормирРезПос.ФормирРаспр Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ФормирРезПос.ФормирРаспр Set start)

                // *** End programmer edit section *** (ФормирРезПос.ФормирРаспр Set start)
                this.fФормирРаспр = value;
                // *** Start programmer edit section *** (ФормирРезПос.ФормирРаспр Set end)

                // *** End programmer edit section *** (ФормирРезПос.ФормирРаспр Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ФормирРезПосE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРезПосE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРезПосE", typeof(IIS.Probadva.ФормирРезПос));
                }
            }
            
            /// <summary>
            /// "ФормирРезПосL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ФормирРезПосL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ФормирРезПосL", typeof(IIS.Probadva.ФормирРезПос));
                }
            }
        }
    }
}
