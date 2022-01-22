import { Component, ViewChild, ElementRef } from '@angular/core';
import { MoneythorApiService } from '../moneythor-api.service';

@Component({
  selector: 'moneythor-widget',
  templateUrl: './moneythor-widget.component.html',
  styleUrls: ['./moneythor-widget.component.css'],
  inputs: ['type', 'options'],
  providers: [ MoneythorApiService ]
})

export class MoneythorWidgetComponent {

  type: string | null = null; // 'tip' or 'service'
  options: { 
    name: string; // the key of a tip or the name of a service
    language: string | null = null;
    parameters: any;
  };

  constructor(private moneythorApiService: MoneythorApiService) { }

  setInnerHTML = function (elm, html) {
    elm.innerHTML = html;
    Array.from(elm.querySelectorAll('script')).forEach((oldScript) => {
      const newScript = document.createElement('script');
      Array.from(oldScript['attributes']).forEach((attr) =>
        newScript.setAttribute(attr['name'], attr['value'])
      );
      newScript.appendChild(document.createTextNode(oldScript['innerHTML']));
      oldScript['parentNode'].replaceChild(newScript, oldScript);
    });
  };

  @ViewChild('moneythorContainer') moneythorContainer: ElementRef;

  ngAfterViewInit() {

    let tipData =
    '<script src="https://demo.moneythor.com/js/base.min.js"></script><link rel="stylesheet" href="https://demo.moneythor.com/css/font-awesome.css" /><style>.english { display: none } .french { display: none }</style><script type="text/javascript">    var tip_title_1635846564563 = "Zoom Subscription Review";    var tip_data_1635846564563 = {"message":"<h1>Monthly vs. Annual Zoom Subscription</h1><p>Have you considered the savings of an annual subscription to the Zoom video conferencing service?</p>","call_to_actions":[{"label":"","target":"tip"}],"meta":{"currency":"SGD","amount":22.767,"transactions":[{"amount":23.04,"description":"ZOOM.US","date":"2020-07-24"},{"amount":23.14,"description":"ZOOM.US","date":"2020-06-24"},{"amount":22.12,"description":"ZOOM.US","date":"2020-05-24"}]}};    var tip_family_1635846564563 = "Savings Insight";    var tip_events_1635846564563 = [{"action":"impression","timestamp":"2021-11-02T17:48:29.798+0800"},{"action":"activation","timestamp":"2021-11-02T17:48:32.021+0800"}];    var tip_key_1635846564563 = "hp4F3LQT4MRhGTbKmj8=";    var jsessionid = "";    var serverPath = "/fpm";    var encodeURL = function(url) {     return serverPath + url + jsessionid;    }; </script><div class="panel panel-default timeline-panel" style="border: none;margin-bottom:0px;"><div class="advice-1635846564563" style="color: #172553; text-shadow: none;"><img src="https://demo.moneythor.com/img/zoom.png" width="100%" /><div class="english"><div class="1635846564563_family_wrapper" style="border-radius: 5px 5px 5px 5px; background-color: white; border: 1px solid white; color: #172553; background-color: lightgreen; padding: 5px; font-size: 0.7em; display: inline-block; margin: 10px 15px; font-weight: bold;"><i class="fa"></i> <span class="1635846564563_family mceNonEditable">[FAMILY]</span></div></div><div class="french"><div class="1635846564563_family_wrapper" style="border-radius: 5px 5px 5px 5px; background-color: white; border: 1px solid white; color: #172553; background-color: lightgreen; padding: 5px; font-size: 0.7em; display: inline-block; margin: 10px 15px; font-weight: bold;"><i class="fa"></i> <span class="1635846564563_family mceNonEditable">[FAMILY]</span></div></div><div style="margin: 0 15px; font-weight: bold; font-size: 1.1em;" class="english">Let us review your monthly Zoom subscription...</div><div style="margin: 0 15px; font-weight: bold; font-size: 1.1em;" class="french">Jetons un oeil à votre souscription Zoom...</div><div class="advice-body-1635846564563 english" style="margin: 15px;"><p>You are charged on average <span class="1635846564563_amount mceNonEditable" style="font-weight: bold;">[AMOUNT]</span> each month for a subscription to the video conferencing Zoom. Do you know that you could <strong>save about 20%</strong> with an annual subscription?</p><p>The monthly Pro subscription with Zoom costs <strong>US$179.88</strong> for a year (at US$14.99 billed monthly) whereas this amount decreases to <strong>US$149.90</strong> when billed annually. This represents savings of US$30.</p><p>... or about <span style="font-size: 1.3em; font-weight: bold;">S$40</span> less each year.</p></div><div class="advice-body-1635846564563 french" style="margin: 15px;"><p>Vous payez en moyenne <span class="1635846564563_amount mceNonEditable" style="font-weight: bold;">[AMOUNT]</span> chaque mois pour une souscription au service de vidéo-conférence Zoom. Savez-vous que vous pourriez <strong>économiser environ 20%</strong> avec un abonnement annuel ?</p><p>La souscription mensuelle Pro de Zoom coûte <strong>US$179.88</strong> pour une année (pour US$14.99 facturés mensuellement) alors que ce montant est de <strong>US$149.90</strong> quand facturé annuellement. Cela représente une économie de US$30.</p><p>... soit environ <span style="font-size: 1.3em; font-weight: bold;">S$40</span> de moins chaque année.</p></div><div class="1635846564563_cta_wrapper english" style="background-color: lightgreen; text-align: center; margin-top: 20px;"><p style="font-size: 0.9em; margin: 0; padding: 10px;">If you plan to continue using this service each month, you may consider reviewing annual billing options on the Zoom website.</p><div class="1635846564563_cta" style="width: 100%;"><div style="display: inline-block; width: 55%; background-color: white; margin: 10px; border-radius: 5px 5px 5px 5px; padding: 5px 10px;"><a href="https://zoom.us/pricing" target="_blank" style="text-decoration: inherit; color: inherit; font-weight: normal;">Show me where</a></div></div></div><div class="1635846564563_cta_wrapper french" style="background-color: lightgreen; text-align: center; margin-top: 20px;"><p style="font-size: 0.9em; margin: 0; padding: 10px;">Si vous comptez utiliser ce service chaque mois, il pourrait être intéressant de consulter la facturation annuelle proposée par Zoom sur leur site.</p><div class="1635846564563_cta" style="width: 100%;"><div style="display: inline-block; width: 55%; background-color: white; margin: 10px; border-radius: 5px 5px 5px 5px; padding: 5px 10px;"><a href="https://zoom.us/pricing" target="_blank" style="text-decoration: inherit; color: inherit; font-weight: normal;">Evaluer les options</a></div></div></div></div>  <script type = "text/javascript">function defer(method) { if (window.jQuery) { method(); } else { setTimeout(function() { defer(method) }, 50); }} defer(function () { $(".1635846564563_months").text(tip_data_1635846564563.meta.months);  $(".1635846564563_amount").text(accounting.formatMoney(tip_data_1635846564563.meta.amount, { symbol: "S$", decimal : ".", thousand: ",", precision: 2, format: "%s%v"}));  $(".1635846564563_family").text(tip_family_1635846564563);  });    </script></div>';

    // let serviceData = '<script src="https://demo.moneythor.com/js/base.min.js"></script><script type="text/javascript">    var service_data_1642828426658 = {"transactions":[{"currency":"USD","history_debit":[["2021-10-01","2021-10-31",19234.52],["2021-11-01","2021-11-30",5919.33],["2021-12-01","2021-12-31",6549.51],["2022-01-01","2022-01-31",496.75]],"history_credit":[["2021-10-01","2021-10-31",14403.85],["2021-11-01","2021-11-30",11287.37],["2021-12-01","2021-12-31",12486.62],["2022-01-01","2022-01-31",11253.62]]}],"money_in_label":"Money In","money_in_colour":"#EFBD1E","money_out_label":"Money Out","money_out_colour":"#0071AD"};</script><style>  #cashflowChart-1642828426658 {width: 100%;height: 130px;margin-bottom: 10px;margin-top: 35px;  } </style><div id="cashflowChart-1642828426658">  <i class="fa fa-spinner fa-spin fa-spin-home"></i></div><script>  var amountFormattingOptions_1642828426658 = {  decimal : ".",  thousand: ",",};var currencyDetails_1642828426658 = [  { code: "USD", symbol: "$", precision: 2, format: "%s%v" },  { code: "CAD", symbol: "$", precision: 2, format: "%s%v" },  { code: "NZD", symbol: "$", precision: 2, format: "%s%v" },  { code: "SGD", symbol: "S$", precision: 2, format: "%s%v" },  { code: "EUR", symbol: "€", precision: 2, format: "%v %s" },  { code: "AUD", symbol: "$", precision: 2, format: "%s%v" },  { code: "HKD", symbol: "HK$", precision: 2, format: "%s%v" },  { code: "JPY", symbol: "円", precision: 0, format: "%v %s" },  { code: "GBP", symbol: "£", precision: 2, format: "%s%v" },  { code: "IDR", symbol: "IDR", precision: 0, format: "%s %v" },  { code: "INR", symbol: "\u20B9)", precision: 2, format: "%s%v" }];function moneyFormattingOptions_1642828426658(cur){  var curOptions = currencyDetails_1642828426658.filter(function(c){ return (c.code === cur); });  if (curOptions.length === 0) {curOptions.push({ code: cur, symbol: cur, precision: 2, format: "%s %v" });  }  return {symbol: curOptions[0].symbol, decimal : amountFormattingOptions_1642828426658.decimal,thousand: amountFormattingOptions_1642828426658.thousand,precision: curOptions[0].precision, format: curOptions[0].format  };}    var debitDataPoints_1642828426658 = [], creditDataPoints_1642828426658 = [];service_data_1642828426658.transactions[0].history_debit.forEach(function (month) {debitDataPoints_1642828426658.push([new Date(month[0]).getTime(), month[2]]);});service_data_1642828426658.transactions[0].history_credit.forEach(function (month) {creditDataPoints_1642828426658.push([new Date(month[0]).getTime(), month[2]]);});var cashflowChart_1642828426658 = $.plot($("#cashflowChart-1642828426658"),[{data: creditDataPoints_1642828426658,label: service_data_1642828426658.money_in_label, bars: {show: true, barWidth: 24 * 60 * 60 * 1000 * 12, align: "right", fill: 0.8},color: service_data_1642828426658.money_in_colour},{data: debitDataPoints_1642828426658,label: service_data_1642828426658.money_out_label, bars: {show: true, barWidth: 24 * 60 * 60 * 1000 * 12, align: "left", fill: 0.8},color: service_data_1642828426658.money_out_colour}],{xaxis: {mode: "time",tickSize: [1, "month"],monthNames: moment.monthsShort(),timeformat: "%b"},yaxis: {tickFormatter: function (val, axis) {var axisFormattingOptions = moneyFormattingOptions_1642828426658(service_data_1642828426658.transactions[0].currency);axisFormattingOptions.precision = 0;return accounting.formatNumber(val, axisFormattingOptions);}},grid: {borderWidth: 0,backgroundColor: { colors: ["#fff", "#eee"] }},legend: {position: "nw",margin: [2, -23],noColumns: 2}});</script>';

    // Add the language
    let classToShow = 'english'; // default
    let classToHide = 'french';
    if (this.options.language && this.options.language === 'fr') {
      classToShow = 'french';
      classToHide = 'english';
    }
    let switchLanguageCode =
      '<script>var showByClass = document.getElementsByClassName("' +
      classToShow +
      '");  for (var i = 0; i < showByClass.length; i++) { showByClass[i].style.display = "block"; } var hideByClass = document.getElementsByClassName("' +
      classToHide +
      '"); for (var i = 0; i < hideByClass.length; i++) { hideByClass[i].style.display = "none"; } </script>';
  
    if (this.type === 'tip') {
      // TODO - Call Moneythor Tip API
      tipData += switchLanguageCode;
      this.setInnerHTML(this.moneythorContainer.nativeElement, tipData);
    } else if (this.type === 'service') {
      // Call Moneythor Service API
      this.moneythorApiService.service(this.options.name, this.options.parameters).subscribe((data)=>{
        // console.log(data);
        data += switchLanguageCode;
        this.setInnerHTML(this.moneythorContainer.nativeElement, data);
      });
    }
    
  }
}
