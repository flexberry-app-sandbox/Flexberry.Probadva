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
    /// Пункт погрузки.
    /// </summary>
    // *** Start programmer edit section *** (ПунктПогрузки CustomAttributes)

    // *** End programmer edit section *** (ПунктПогрузки CustomAttributes)
    [AutoAltered()]
    [Caption("Пункт погрузки")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПунктПогрузкиE", new string[] {
            "Адрес as \'Адрес\'",
            "НаименПункта as \'Наименование пункта\'"})]
    [View("ПунктПогрузкиL", new string[] {
            "Адрес as \'Адрес\'",
            "НаименПункта as \'Наименование пункта\'"})]
    public class ПунктПогрузки : ICSSoft.STORMNET.DataObject
    {
        
        private string fАдрес;
        
        private string fНаименПункта;
        
        // *** Start programmer edit section *** (ПунктПогрузки CustomMembers)

        // *** End programmer edit section *** (ПунктПогрузки CustomMembers)

        
        /// <summary>
        /// Адрес.
        /// </summary>
        // *** Start programmer edit section *** (ПунктПогрузки.Адрес CustomAttributes)

        // *** End programmer edit section *** (ПунктПогрузки.Адрес CustomAttributes)
        [StrLen(255)]
        public virtual string Адрес
        {
            get
            {
                // *** Start programmer edit section *** (ПунктПогрузки.Адрес Get start)

                // *** End programmer edit section *** (ПунктПогрузки.Адрес Get start)
                string result = this.fАдрес;
                // *** Start programmer edit section *** (ПунктПогрузки.Адрес Get end)

                // *** End programmer edit section *** (ПунктПогрузки.Адрес Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПунктПогрузки.Адрес Set start)

                // *** End programmer edit section *** (ПунктПогрузки.Адрес Set start)
                this.fАдрес = value;
                // *** Start programmer edit section *** (ПунктПогрузки.Адрес Set end)

                // *** End programmer edit section *** (ПунктПогрузки.Адрес Set end)
            }
        }
        
        /// <summary>
        /// НаименПункта.
        /// </summary>
        // *** Start programmer edit section *** (ПунктПогрузки.НаименПункта CustomAttributes)

        // *** End programmer edit section *** (ПунктПогрузки.НаименПункта CustomAttributes)
        [StrLen(255)]
        public virtual string НаименПункта
        {
            get
            {
                // *** Start programmer edit section *** (ПунктПогрузки.НаименПункта Get start)

                // *** End programmer edit section *** (ПунктПогрузки.НаименПункта Get start)
                string result = this.fНаименПункта;
                // *** Start programmer edit section *** (ПунктПогрузки.НаименПункта Get end)

                // *** End programmer edit section *** (ПунктПогрузки.НаименПункта Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПунктПогрузки.НаименПункта Set start)

                // *** End programmer edit section *** (ПунктПогрузки.НаименПункта Set start)
                this.fНаименПункта = value;
                // *** Start programmer edit section *** (ПунктПогрузки.НаименПункта Set end)

                // *** End programmer edit section *** (ПунктПогрузки.НаименПункта Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПунктПогрузкиE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПунктПогрузкиE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПунктПогрузкиE", typeof(IIS.Probadva.ПунктПогрузки));
                }
            }
            
            /// <summary>
            /// "ПунктПогрузкиL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПунктПогрузкиL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПунктПогрузкиL", typeof(IIS.Probadva.ПунктПогрузки));
                }
            }
        }
    }
}
