import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'moneythor-widget',
  templateUrl: './moneythor-widget.component.html',
  styleUrls: ['./moneythor-widget.component.css'],
  inputs: ['tipKey', 'language'],
})
export class MoneythorWidgetComponent {
  tipKey: string | null = null;
  language: string | null = null;

  // Call Moneythor API here
  tipData =
    '<script src="https://demo.moneythor.com/js/base.min.js"></script><link rel="stylesheet" href="https://demo.moneythor.com/css/font-awesome.css" /><style>.english { display: none } .french { display: none }</style><script type="text/javascript">    var tip_title_1635846564563 = "Zoom Subscription Review";    var tip_data_1635846564563 = {"message":"<h1>Monthly vs. Annual Zoom Subscription</h1><p>Have you considered the savings of an annual subscription to the Zoom video conferencing service?</p>","call_to_actions":[{"label":"","target":"tip"}],"meta":{"currency":"SGD","amount":22.767,"transactions":[{"amount":23.04,"description":"ZOOM.US","date":"2020-07-24"},{"amount":23.14,"description":"ZOOM.US","date":"2020-06-24"},{"amount":22.12,"description":"ZOOM.US","date":"2020-05-24"}]}};    var tip_family_1635846564563 = "Savings Insight";    var tip_events_1635846564563 = [{"action":"impression","timestamp":"2021-11-02T17:48:29.798+0800"},{"action":"activation","timestamp":"2021-11-02T17:48:32.021+0800"}];    var tip_key_1635846564563 = "hp4F3LQT4MRhGTbKmj8=";    var jsessionid = "";    var serverPath = "/fpm";    var encodeURL = function(url) {     return serverPath + url + jsessionid;    }; </script><div class="panel panel-default timeline-panel" style="border: none;margin-bottom:0px;"><div class="advice-1635846564563" style="color: #172553; text-shadow: none;"><img src="https://demo.moneythor.com/img/zoom.png" width="100%" /><div class="english"><div class="1635846564563_family_wrapper" style="border-radius: 5px 5px 5px 5px; background-color: white; border: 1px solid white; color: #172553; background-color: lightgreen; padding: 5px; font-size: 0.7em; display: inline-block; margin: 10px 15px; font-weight: bold;"><i class="fa"></i> <span class="1635846564563_family mceNonEditable">[FAMILY]</span></div></div><div class="french"><div class="1635846564563_family_wrapper" style="border-radius: 5px 5px 5px 5px; background-color: white; border: 1px solid white; color: #172553; background-color: lightgreen; padding: 5px; font-size: 0.7em; display: inline-block; margin: 10px 15px; font-weight: bold;"><i class="fa"></i> <span class="1635846564563_family mceNonEditable">[FAMILY]</span></div></div><div style="margin: 0 15px; font-weight: bold; font-size: 1.1em;" class="english">Let us review your monthly Zoom subscription...</div><div style="margin: 0 15px; font-weight: bold; font-size: 1.1em;" class="french">Jetons un oeil à votre souscription Zoom...</div><div class="advice-body-1635846564563 english" style="margin: 15px;"><p>You are charged on average <span class="1635846564563_amount mceNonEditable" style="font-weight: bold;">[AMOUNT]</span> each month for a subscription to the video conferencing Zoom. Do you know that you could <strong>save about 20%</strong> with an annual subscription?</p><p>The monthly Pro subscription with Zoom costs <strong>US$179.88</strong> for a year (at US$14.99 billed monthly) whereas this amount decreases to <strong>US$149.90</strong> when billed annually. This represents savings of US$30.</p><p>... or about <span style="font-size: 1.3em; font-weight: bold;">S$40</span> less each year.</p></div><div class="advice-body-1635846564563 french" style="margin: 15px;"><p>Vous payez en moyenne <span class="1635846564563_amount mceNonEditable" style="font-weight: bold;">[AMOUNT]</span> chaque mois pour une souscription au service de vidéo-conférence Zoom. Savez-vous que vous pourriez <strong>économiser environ 20%</strong> avec un abonnement annuel ?</p><p>La souscription mensuelle Pro de Zoom coûte <strong>US$179.88</strong> pour une année (pour US$14.99 facturés mensuellement) alors que ce montant est de <strong>US$149.90</strong> quand facturé annuellement. Cela représente une économie de US$30.</p><p>... soit environ <span style="font-size: 1.3em; font-weight: bold;">S$40</span> de moins chaque année.</p></div><div class="1635846564563_cta_wrapper english" style="background-color: lightgreen; text-align: center; margin-top: 20px;"><p style="font-size: 0.9em; margin: 0; padding: 10px;">If you plan to continue using this service each month, you may consider reviewing annual billing options on the Zoom website.</p><div class="1635846564563_cta" style="width: 100%;"><div style="display: inline-block; width: 55%; background-color: white; margin: 10px; border-radius: 5px 5px 5px 5px; padding: 5px 10px;"><a href="https://zoom.us/pricing" target="_blank" style="text-decoration: inherit; color: inherit; font-weight: normal;">Show me where</a></div></div></div><div class="1635846564563_cta_wrapper french" style="background-color: lightgreen; text-align: center; margin-top: 20px;"><p style="font-size: 0.9em; margin: 0; padding: 10px;">Si vous comptez utiliser ce service chaque mois, il pourrait être intéressant de consulter la facturation annuelle proposée par Zoom sur leur site.</p><div class="1635846564563_cta" style="width: 100%;"><div style="display: inline-block; width: 55%; background-color: white; margin: 10px; border-radius: 5px 5px 5px 5px; padding: 5px 10px;"><a href="https://zoom.us/pricing" target="_blank" style="text-decoration: inherit; color: inherit; font-weight: normal;">Evaluer les options</a></div></div></div></div>  <script type = "text/javascript">function defer(method) { if (window.jQuery) { method(); } else { setTimeout(function() { defer(method) }, 50); }} defer(function () { $(".1635846564563_months").text(tip_data_1635846564563.meta.months);  $(".1635846564563_amount").text(accounting.formatMoney(tip_data_1635846564563.meta.amount, { symbol: "S$", decimal : ".", thousand: ",", precision: 2, format: "%s%v"}));  $(".1635846564563_family").text(tip_family_1635846564563);  });    </script></div>';

  @ViewChild('tipContainer') tipContainer: ElementRef;

  ngAfterViewInit() {
    // console.log('tipContainer: ' + this.tipContainer.nativeElement.innerText);

    let setInnerHTML = function (elm, html) {
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

    // Add the language

    let classToShow = 'english'; // default
    let classToHide = 'french';
    if (this.language && this.language === 'fr') {
      classToShow = 'french';
      classToHide = 'english';
    }
    this.tipData +=
      '<script>var showByClass = document.getElementsByClassName("' +
      classToShow +
      '");  for (var i = 0; i < showByClass.length; i++) { showByClass[i].style.display = "block"; } var hideByClass = document.getElementsByClassName("' +
      classToHide +
      '"); for (var i = 0; i < hideByClass.length; i++) { hideByClass[i].style.display = "none"; } </script>';

    setInnerHTML(this.tipContainer.nativeElement, this.tipData);
  }
}
