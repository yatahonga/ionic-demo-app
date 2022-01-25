import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-insights',
  templateUrl: 'insights.html',
})
export class InsightsPage {
  constructor(public navCtrl: NavController) {}

  moneythorParam1 = {
    name: '0123456789',
    language: 'en',
  };

  moneythorParam2 = {
    name: 'getcashflowchart',
    parameters: { currency: 'USD' },
  };
}
