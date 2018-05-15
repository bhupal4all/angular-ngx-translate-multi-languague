import { Component, Injectable } from '@angular/core';
import { HttpModule, Http } from '@angular/http';
import { TranslateService } from '@ngx-translate/core';

import { Router, ActivatedRoute } from '@angular/router';
import { OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');
    translate.use('en');
  }

  changeLanguage(lang) {
    this.translate.use(lang);
  }
}