(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<div class=\"wrapper\">\r\n\r\n    <router-outlet></router-outlet>\r\n    <footer class=\"footer footer-default\" style=\"background-color: #2c2c2c;\" data-background-color=\"black\">\r\n        <div class=\"container\" style=\"padding:65px 0\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-4 col-md-4 ml-auto mr-auto\">\r\n                    <h4 style=\"font-family: 'Moon';color: #ee4b08; margin: 2px 0px;\">Nosotros</h4>\r\n                    <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                    margin-left:0px;\r\n                    width: 60%;\r\n                    border: solid 2px #fff;\"></div>\r\n                    <ul style=\"display:block\">\r\n\r\n                        <li style=\"display:block\">\r\n                            <strong>INDUSTRIA METALICA DE TRANSFORMACION S.A. DE C.V.</strong>\r\n\r\n                        </li>\r\n                        <li style=\"display:block\">\r\n                            Antiguo Camino a la Estación S/N, Santa Ana Pacueco, Guanajuato.\r\n                        </li>\r\n\r\n                    </ul>\r\n\r\n\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 ml-auto mr-auto\">\r\n                    <h4 style=\"font-family: 'Moon';color: #ee4b08; margin: 2px 0px;\">Productos IMT</h4>\r\n                    <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                    margin-left:0px;\r\n                    width: 60%;\r\n                    border: solid 2px #fff;\"></div>\r\n                    <ul style=\"display:block\">\r\n                        <li *ngFor=\"let item of prodTypes\"  style=\"display:block;\">\r\n                            <a style=\"display:block; padding: 0px;\" class=\"links-prods\" (click)=\"goToProductDetails(item.name)\">{{item.name}}</a>\r\n                        </li>\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-4 col-md-4 ml-auto mr-auto\">\r\n                    <h4 style=\"font-family: 'Moon';color: #ee4b08; margin: 2px 0px;\">Contacto</h4>\r\n                    <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                    margin-left:0px;\r\n                    width: 60%;\r\n                    border: solid 2px #fff;\"></div>\r\n                    <ul style=\"display:block\">\r\n\r\n                        <li style=\"display:block\">\r\n                            Lunes a Viernes 8:00 a 14:00 y 15:30 a 18:00; Sábado 8:00 a 13:30\r\n                        </li>\r\n                        <li style=\"display:block\">\r\n                            <br>\r\n                        </li>\r\n                        <li style=\"display:block\">\r\n                            <strong style=\"color: #ee4b08;\">Teléfono:</strong> (352) 526-50-41\r\n                        </li>\r\n                        <li style=\"display:block\">\r\n                            <strong style=\"color: #ee4b08;\">Correo electrónico de cotización / contacto:</strong>\r\n                            imt.ventasgto@gmail.com\r\n                        </li>\r\n\r\n                    </ul>\r\n\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-basic\">\r\n    <div class=\"container\">\r\n      <h3 class=\"title\">Basic Elements</h3>\r\n      <div id=\"buttons\">\r\n          <h4>Buttons</h4>\r\n          <p class=\"category\">Pick your style</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary\" type=\"button\">Default</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">Round</button>\r\n                  <button class=\"btn btn-primary btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i> With Icon\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-icon btn-round\" type=\"button\">\r\n                      <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  </button>\r\n                  <button class=\"btn btn-primary btn-simple btn-round\" type=\"button\">Simple</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your size</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn btn-primary btn-sm\">Small</button>\r\n                  <button class=\"btn btn-primary\">Regular</button>\r\n                  <button class=\"btn btn-primary btn-lg\">Large</button>\r\n              </div>\r\n          </div>\r\n          <p class=\"category\">Pick your color</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-10\">\r\n                  <button class=\"btn\">Default</button>\r\n                  <button class=\"btn btn-primary\">Primary</button>\r\n                  <button class=\"btn btn-info\">Info</button>\r\n                  <button class=\"btn btn-success\">Success</button>\r\n                  <button class=\"btn btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-danger\">Danger</button>\r\n                  <button class=\"btn btn-neutral\">Neutral</button>\r\n              </div>\r\n          </div>\r\n          <h4>Links</h4>\r\n          <div class=\"row\">\r\n              <div class=\"col-md-8\">\r\n                  <button class=\"btn btn-link\">Default</button>\r\n                  <button class=\"btn btn-link btn-primary \">Primary</button>\r\n                  <button class=\"btn btn-link btn-info\">Info</button>\r\n                  <button class=\"btn btn-link btn-success\">Success</button>\r\n                  <button class=\"btn btn-link btn-warning\">Warning</button>\r\n                  <button class=\"btn btn-link btn-danger\">Danger</button>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div id=\"inputs\">\r\n          <h4>Inputs</h4>\r\n          <p class=\"category\">Form Controls</p>\r\n          <div class=\"row\">\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group\">\r\n                      <input type=\"text\" value=\"\" placeholder=\"Regular\" class=\"form-control\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-success\">\r\n                      <input type=\"text\" value=\"Success\" class=\"form-control form-control-success\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"form-group has-danger\">\r\n                      <input type=\"email\" value=\"Error Input\" class=\"form-control form-control-danger\" />\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                    <div class=\"input-group-prepend\" >\r\n                      <span class=\"input-group-text\">\r\n                          <i class=\"fa fa-user-circle\"></i>\r\n                      </span>\r\n                    </div>\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Left Font Awesome Icon\" (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                  </div>\r\n              </div>\r\n              <div class=\"col-sm-6 col-lg-3\">\r\n                  <div class=\"input-group\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Right Nucleo Icon\" (focus)=\"focus1=true\" (blur)=\"focus1=false\">\r\n                      <div class=\"input-group-append\">\r\n                        <span class=\"input-group-text\">\r\n                            <i class=\"now-ui-icons users_single-02\"></i>\r\n                        </span>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"row\" id=\"checkRadios\">\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Checkboxes</p>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Checked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Unchecked\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"checkbox\" checked disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled Checked\r\n                </label>\r\n            </div>\r\n        </div>\r\n        <div class=\"col-sm-6 col-lg-3\">\r\n            <p class=\"category\">Radios</p>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option1\">\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios\" id=\"exampleRadios1\" value=\"option2\" checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Radio is on\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option3\" disabled>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is off\r\n                </label>\r\n            </div>\r\n            <div class=\"form-check form-check-radio disabled\">\r\n                <label class=\"form-check-label\">\r\n                    <input class=\"form-check-input\" type=\"radio\" name=\"exampleRadios1\" id=\"exampleRadios2\" value=\"option4\" disabled checked>\r\n                    <span class=\"form-check-sign\"></span>\r\n                    Disabled radio is on\r\n                </label>\r\n            </div>\r\n        </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Toggle Buttons</p>\r\n              <bSwitch\r\n                  [(ngModel)]=\"state\">\r\n              </bSwitch>\r\n              <bSwitch> Toggle is off\r\n              </bSwitch>\r\n          </div>\r\n          <div class=\"col-sm-6 col-lg-3\">\r\n              <p class=\"category\">Sliders</p>\r\n              <nouislider class=\"slider\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"simpleSlider\" [tooltips]=\"true\"></nouislider>\r\n              <br>\r\n              <nouislider class=\"slider slider-primary\" [connect]=\"true\" [min]=\"0\" [max]=\"100\" [step]=\"1\" [(ngModel)]=\"doubleSlider\" [tooltips]=\"true\"></nouislider>\r\n          </div>\r\n      </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n  <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\" style=\"background-image: url('assets/img/header.jpg');\">\r\n\r\n    </div>\r\n      <div class=\"container\">\r\n          <div class=\"content-center brand\">\r\n              <img class=\"n-logo\" src=\"assets/img/now-logo.png\" alt=\"\">\r\n              <h1 class=\"h1-seo\">Now UI Kit.</h1>\r\n              <h3>A beautiful Bootstrap 4 UI kit. Yours free.</h3>\r\n          </div>\r\n          <h6 class=\"category category-absolute\">Designed by\r\n              <a href=\"https://invisionapp.com/\" target=\"_blank\">\r\n                  <img src=\"assets/img/invision-white-slim.png\" class=\"invision-logo\" />\r\n              </a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">\r\n                  <img src=\"assets/img/creative-tim-white-slim2.png\" class=\"creative-tim-logo\" />\r\n              </a>.</h6>\r\n      </div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n    <div class=\"section section-images\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"hero-images-container\">\r\n                        <img src=\"assets/img/hero-image-1.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                        <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-2\">\r\n                        <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n      <app-basicelements></app-basicelements>\r\n      <app-navigation></app-navigation>\r\n      <div class=\"section section-tabs\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Icons on Card</p>\r\n                      <!-- Nav tabs -->\r\n\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\">\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons objects_umbrella-13\"></i> Home\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons shopping_cart-simple\"></i> Profile\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                          <i class=\"now-ui-icons shopping_shop\"></i> Messages\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                            <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab>\r\n                                      <ng-template ngbTabTitle>\r\n                                        <i class=\"now-ui-icons ui-2_settings-90\"></i> Settings\r\n                                      </ng-template>\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                  </div>\r\n                  <div class=\"col-md-10 ml-auto col-xl-6 mr-auto\">\r\n                      <p class=\"category\">Tabs with Background on Card</p>\r\n                      <!-- Tabs with Background on Card -->\r\n                      <div class=\"card\">\r\n                        <div class=\"nav-tabs-navigation\" data-tabs-color=\"orange\">\r\n                            <div class=\"nav-tabs-wrapper\">\r\n                                <ngb-tabset [justify]=\"'center'\" class=\"text-center\" >\r\n                                    <ngb-tab title=\"Home\">\r\n                                      <ng-template ngbTabContent>\r\n                                        <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Profile\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Messages\">\r\n                                      <ng-template ngbTabContent>\r\n                                          <p>I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it’s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>\r\n                                      </ng-template>\r\n                                    </ngb-tab>\r\n                                    <ngb-tab title=\"Settings\">\r\n                                        <ng-template ngbTabContent>\r\n                                          <p>\r\n                                              \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                          </p>\r\n                                        </ng-template>\r\n                                    </ngb-tab>\r\n                                </ngb-tabset>\r\n                            </div>\r\n                        </div>\r\n                      </div>\r\n                      <!-- End Tabs on plain Card -->\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-pagination\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Progress Bars</h4>\r\n                      <div class=\"progress-container\">\r\n                        <span class=\"progress-badge\">Default</span>\r\n\r\n                        <ngb-progressbar [value]=\"25\"><span class=\"progress-value\">25%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <div class=\"progress-container progress-primary\">\r\n                          <span class=\"progress-badge\">Primary</span>\r\n                          <ngb-progressbar [value]=\"60\"><span class=\"progress-value\">60%</span></ngb-progressbar><br>\r\n                      </div>\r\n                      <br />\r\n                      <h4>Navigation Pills</h4>\r\n                      <ngb-tabset type=\"pills\" class=\"nav nav-pills nav-pills-primary justify-content-start tab-space nav-pills-just-icons\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"far fa-gem\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"fa fa-thermometer-full\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-suitcase\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab [disabled]=\"true\">\r\n                              <ng-template ngbTabTitle>\r\n                                <i class=\"fa fa-exclamation\"></i>\r\n                              </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Pagination</h4>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page\" aria-label=\"Default pagination\" class=\"pagination-primary\"></ngb-pagination>\r\n                      <br/>\r\n                      <ngb-pagination [collectionSize]=\"50\" [(page)]=\"page2\" aria-label=\"Default pagination\"></ngb-pagination>\r\n                      <br>\r\n                      <h4>Labels</h4>\r\n                      <span class=\"badge badge-default\">Default</span>\r\n                      <span class=\"badge badge-primary\">Primary</span>\r\n                      <span class=\"badge badge-success\">Success</span>\r\n                      <span class=\"badge badge-info\">Info</span>\r\n                      <span class=\"badge badge-warning\">Warning</span>\r\n                      <span class=\"badge badge-danger\">Danger</span>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section\" id=\"notifications\">\r\n          <div class=\"container\">\r\n            <h4>Notifications</h4>\r\n          </div>\r\n          <app-notification></app-notification>\r\n      </div>\r\n      <app-typography></app-typography>\r\n      <div class=\"section section-javascript\" id=\"javascriptComponents\">\r\n          <div class=\"container\">\r\n              <h3 class=\"title\">Angular Native Components</h3>\r\n              <div class=\"row\" id=\"modals\">\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Modal</h4>\r\n                      <ngbd-modal-component></ngbd-modal-component>\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Popovers</h4>\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"right\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on right\" popoverClass=\"popover-primary\">\r\n                          On right\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"top\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on top\">\r\n                          On top\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"left\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on left\">\r\n                          On left\r\n                      </button>\r\n\r\n                      <button type=\"button\" class=\"btn btn-default\" placement=\"bottom\"\r\n                          ngbPopover=\"Here will be some very useful information about this popover.\" popoverTitle=\"Popover on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                  </div>\r\n                  <br />\r\n                  <br />\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Datetimepicker</h4>\r\n                      <div class=\"row\">\r\n                          <div class=\"col-md-6\">\r\n                              <div class=\"datepicker-container\">\r\n                                  <div class=\"form-group\">\r\n                                    <input class=\"form-control datetimepicker\" placeholder=\"06/07/2017\"\r\n                                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\" data-color=\"orange\">\r\n                \t\t\t            </div>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                      <!--                 end collapse -->\r\n                  </div>\r\n                  <div class=\"col-md-6\">\r\n                      <h4>Tooltips</h4>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n                         On right\r\n                     </button>\r\n                     <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n                       On left\r\n                     </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n                         On top\r\n                      </button>\r\n                      <button type=\"button\" class=\"btn btn-default btn-tooltip\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n                          On bottom\r\n                      </button>\r\n                      <div class=\"clearfix\"></div>\r\n                      <br>\r\n                      <br>\r\n                  </div>\r\n              <!-- </div>\r\n            </div> -->\r\n          </div>\r\n\r\n          <div class=\"section\" id=\"carousel\">\r\n              <div class=\"container\">\r\n                  <div class=\"title\">\r\n                      <h4>Carousel</h4>\r\n                  </div>\r\n                  <div class=\"row justify-content-center\">\r\n                      <div class=\"col-8\">\r\n                        <ngb-carousel>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg1.jpg\" alt=\"First slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Nature, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg3.jpg\" alt=\"Second slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Somewhere Beyond, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                            <ng-template ngbSlide>\r\n                              <img class=\"d-block\" src=\"assets/img/bg4.jpg\" alt=\"Third slide\">\r\n                              <div class=\"carousel-caption d-none d-md-block\">\r\n                                  <h5>Yellowstone National Park, United States</h5>\r\n                              </div>\r\n                            </ng-template>\r\n                        </ngb-carousel>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"section section-nucleo-icons\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <h2 class=\"title\">Nucleo Icons</h2>\r\n                      <h5 class=\"description\">\r\n                          Now UI Kit PRO comes with 100 custom icons made by our friends from NucleoApp. The official package contains over 2.100 thin icons which are looking great in combination with Now UI Kit PRO Make sure you check all of them and use those that you like the most.\r\n                      </h5>\r\n                      <!-- <div class=\"nucleo-container\">\r\n        <img src=\"assets/img/nucleo.svg\" alt=\"\">\r\n      </div> -->\r\n                      <a [routerLink]=\"['/nucleoicons']\" class=\"btn btn-primary btn-round btn-lg\">View Demo Icons</a>\r\n                      <a href=\"https://nucleoapp.com/?ref=1712\" class=\"btn btn-primary btn-simple btn-round btn-lg\" target=\"_blank\">View All Icons</a>\r\n                  </div>\r\n                  <div class=\"col-lg-6 col-md-12\">\r\n                      <div class=\"icons-container\">\r\n                          <i class=\"now-ui-icons ui-1_send\"></i>\r\n                          <i class=\"now-ui-icons ui-2_like\"></i>\r\n                          <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                          <i class=\"now-ui-icons text_bold\"></i>\r\n                          <i class=\"now-ui-icons tech_headphones\"></i>\r\n                          <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                          <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                          <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                          <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                          <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                          <i class=\"now-ui-icons design_palette\"></i>\r\n                          <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                          <i class=\"now-ui-icons location_pin\"></i>\r\n                          <i class=\"now-ui-icons objects_key-25\"></i>\r\n                          <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n\r\n      <div class=\"section\">\r\n          <div class=\"container text-center\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"col-md-12 col-lg-8\">\r\n                      <h2 class=\"title\">Completed with examples</h2>\r\n                      <h5 class=\"description\">The kit comes with three pre-built pages to help you get started faster. You can change the text and images and you're good to go. More importantly, looking at them will give you a picture of what you can built with this powerful Bootstrap 4 ui kit.</h5>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-signup\" style=\"background-image: url('assets/img/bg11.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\r\n          <div class=\"container login-page\">\r\n            <div class=\"row\">\r\n              <div class=\"col-md-4 content-center ml-auto mr-auto\">\r\n                  <div class=\"card card-login card-plain\">\r\n                      <form class=\"form\" method=\"\" action=\"\">\r\n                          <div class=\"header header-primary text-center\">\r\n                              <div class=\"logo-container\">\r\n                                  <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                              </div>\r\n                          </div>\r\n                          <div class=\"content\">\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                            </div>\r\n                            <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                              <div class=\"input-group-prepend\">\r\n                                  <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                              </div>\r\n                                <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"footer text-center\">\r\n                              <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                              </h6>\r\n                          </div>\r\n                          <div class=\"text-center\">\r\n                              <h6>\r\n                                  <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                              </h6>\r\n                          </div>\r\n                      </form>\r\n                  </div>\r\n              </div>\r\n            </div>\r\n              <div class=\"col text-center\">\r\n                  <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-examples\" data-background-color=\"black\">\r\n          <div class=\"space-50\"></div>\r\n          <div class=\"container text-center\">\r\n              <div class=\"row\">\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/landing']\">\r\n                          <img src=\"assets/img/landing.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/landing']\" class=\"btn btn-simple btn-primary btn-round\">View Landing Page</a>\r\n                  </div>\r\n                  <div class=\"col\">\r\n                      <a [routerLink]=\"['/examples/profile']\">\r\n                          <img src=\"assets/img/profile.jpg\" alt=\"Image\" class=\"img-raised\">\r\n                      </a>\r\n                      <a [routerLink]=\"['/examples/profile']\" class=\"btn btn-simple btn-primary btn-round\">View Profile Page</a>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n      <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\r\n          <div class=\"container\">\r\n              <div class=\"row justify-content-md-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <h3 class=\"title\">Do you love this Bootstrap 4 UI Kit?</h3>\r\n                      <h5 class=\"description\">Cause if you do, it can be yours for FREE. Hit the button below to navigate to Creative Tim or Invision where you can find the kit in HTML or Sketch/PSD format. Start a new project or give an old Bootstrap project a new look!</h5>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                      <a href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" class=\"btn btn-primary btn-lg btn-round\" role=\"button\">\r\n                          Download Angular\r\n                      </a>\r\n                      <a href=\"https://www.invisionapp.com/now\" target=\"_blank\" class=\"btn btn-primary btn-lg btn-simple btn-round\" role=\"button\">\r\n                          Download PSD/Sketch\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <br>\r\n              <div class=\"row text-center mt-5\">\r\n                  <div class=\"col-md-8 ml-auto mr-auto\">\r\n                      <h2>Want more?</h2>\r\n                      <h5 class=\"description\">We've just launched\r\n                          <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" target=\"_blank\">Now UI Kit PRO Angular</a>. It has a huge number of components, sections and example pages. Start Your Development With A Badass Bootstrap 4 UI Kit.</h5>\r\n                  </div>\r\n                  <div class=\"col-md-12\">\r\n                      <a href=\"https://timcreative.github.io/now-ui-kit-pro-angular/presentation\" class=\"btn btn-neutral btn-round btn-lg\" target=\"_blank\">\r\n                          <i class=\"now-ui-icons arrows-1_share-66\"></i> Upgrade to PRO\r\n                      </a>\r\n                  </div>\r\n              </div>\r\n              <br>\r\n              <br>\r\n              <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <h3>Thank you for supporting us!</h3>\r\n                </div>\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                  <a target=\"_blank\" href=\"https://www.twitter.com/creativetim\" class=\"btn btn-neutral btn-icon btn-twitter btn-round btn-lg\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://www.linkedin.com/company-beta/9430489/\" class=\"btn btn-neutral btn-icon btn-linkedin btn-lg btn-round\" rel=\"tooltip\" title=\"Follow us\">\r\n                    <i class=\"fab fa-linkedin\"></i>\r\n                  </a>\r\n                  <a target=\"_blank\" href=\"https://github.com/creativetimofficial/now-ui-kit-angular\" class=\"btn btn-neutral btn-icon btn-github btn-round btn-lg\" rel=\"tooltip\" title=\"Star on Github\">\r\n                    <i class=\"fab fa-github\"></i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n          </div>\r\n      </div>\r\n  </div>\r\n  <footer class=\"footer\" data-background-color=\"black\">\r\n      <div class=\"container\">\r\n          <nav>\r\n              <ul>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com\">\r\n                          Creative Tim\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://www.creative-tim.com/about-us\">\r\n                          About Us\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"http://blog.creative-tim.com\">\r\n                          Blog\r\n                      </a>\r\n                  </li>\r\n                  <li>\r\n                      <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                          MIT License\r\n                      </a>\r\n                  </li>\r\n              </ul>\r\n          </nav>\r\n          <div class=\"copyright\">\r\n              &copy;\r\n            {{data | date: 'yyyy'}}, Designed by\r\n              <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n              <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n          </div>\r\n      </div>\r\n  </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<button class=\"btn btn-primary\" (click)=\"open(classic,'' , '')\">\r\n Launch Modal\r\n</button>\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-header justify-content-center\">\r\n        <button type=\"button\" class=\"close\" (click)=\"d('Cross click')\">\r\n            <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n        </button>\r\n        <h4 class=\"title title-up\">Modal title</h4>\r\n    </div>\r\n    <div class=\"modal-body\">\r\n        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.\r\n        </p>\r\n    </div>\r\n    <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-default\">Nice Button</button>\r\n        <button type=\"button\" class=\"btn btn-danger\" (click)=\"c('Close click')\">Close</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<button class=\"btn btn-warning\" (click)=\"open(modal_mini, 'modal_mini', 'sm')\">\r\n   Launch Modal Mini\r\n</button>\r\n<ng-template #modal_mini let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header justify-content-center\">\r\n      <div class=\"modal-profile\">\r\n          <i class=\"now-ui-icons users_circle-08\"></i>\r\n      </div>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n      <p>Always have an access to your profile</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\">Back</button>\r\n      <button type=\"button\" class=\"btn btn-link btn-neutral\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section section-navbars\">\r\n    <div class=\"container\" id=\"menu-dropdown\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Menu</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar\" data-nav-image=\"assets/img/blurred-image-1.jpg\">\r\n                            <ul class=\"navbar-nav\">\r\n                                <li class=\"nav-item active\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#\">\r\n                                        <p>Link</p>\r\n                                    </a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                  <div ngbDropdown class=\"dropdown\">\r\n                                      <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                        <p>\r\n                                            Dropdown\r\n                                        </p>\r\n                                      </a>\r\n                                      <div ngbDropdownMenu class=\"dropdown-menu\">\r\n                                        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n                                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n                                      </div>\r\n                                  </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <h4>Menu with Icons</h4>\r\n                <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                    <div class=\"container\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Icons</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-icons\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                        <div class=\"collapse navbar-collapse\" id=\"example-navbar-icons\">\r\n                            <ul class=\"navbar-nav ml-auto\">\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons ui-1_send\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <a class=\"nav-link\" href=\"#pablo\"><i class=\"now-ui-icons users_single-02\" aria-hidden=\"true\"></i></a>\r\n                                </li>\r\n                                <li class=\"nav-item\">\r\n                                    <div ngbDropdown class=\"dropdown\">\r\n                                        <a class=\"nav-link dropdown-toggle\" ngbDropdownToggle>\r\n                                            <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                        </a>\r\n                                        <div ngbDropdownMenu class=\"dropdown-menu dropdown-menu-right\">\r\n                                            <div class=\"dropdown-header\">Dropdown header</div>\r\n                                            <a class=\"dropdown-item\">Action</a>\r\n                                            <a class=\"dropdown-item\">Another action</a>\r\n                                            <a class=\"dropdown-item\">Something else here</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Separated link</a>\r\n                                            <div class=\"dropdown-divider\"></div>\r\n                                            <a class=\"dropdown-item\">Another separated link</a>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </nav>\r\n            </div>\r\n        </div>\r\n        <h4>Navigation</h4>\r\n    </div>\r\n    <div id=\"navbar\">\r\n        <div class=\"navigation-example\" style=\"background-image:url('assets/img/bg7.jpg')\">\r\n            <!-- Navbar Primary  -->\r\n            <nav class=\"navbar navbar-expand-lg bg-primary\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Primary color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-primary\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-primary\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Primary -->\r\n            <!-- Navbar Info -->\r\n            <nav class=\"navbar navbar-expand-lg bg-info\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Info Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-info\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-info\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Discover</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Profile</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <p>Settings</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Info -->\r\n            <!-- Navbar Success -->\r\n            <nav class=\"navbar navbar-expand-lg bg-success\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#\">Success Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-success\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-success\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item active\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons objects_globe\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Success -->\r\n            <!-- Navbar Warning -->\r\n            <nav class=\"navbar navbar-expand-lg bg-warning\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Warning Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-warning\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-warning\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-google-plus\"></i>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Warning -->\r\n            <!-- Navbar Danger -->\r\n            <nav class=\"navbar navbar-expand-lg bg-danger\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Danger Color</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-danger\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-danger\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Share</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Tweet</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-pinterest\"></i>\r\n                                    <p>Pin</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Danger -->\r\n            <!-- Navbar Transparent -->\r\n            <nav class=\"navbar navbar-expand-lg navbar-transparent\">\r\n                <div class=\"container\">\r\n                    <div class=\"navbar-translate\">\r\n                        <a class=\"navbar-brand\" href=\"#pablo\">Transparent</a>\r\n                        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#example-navbar-transparent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n                            <span class=\"navbar-toggler-bar bar1\"></span>\r\n                            <span class=\"navbar-toggler-bar bar2\"></span>\r\n                            <span class=\"navbar-toggler-bar bar3\"></span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"collapse navbar-collapse\" id=\"example-navbar-transparent\">\r\n                        <ul class=\"navbar-nav ml-auto\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-facebook-square\"></i>\r\n                                    <p>Facebook</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-twitter\"></i>\r\n                                    <p>Twitter</p>\r\n                                </a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" href=\"#pablo\">\r\n                                    <i class=\"fa fa-instagram\"></i>\r\n                                    <p>Instagram</p>\r\n                                </a>\r\n                            </li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </nav>\r\n            <!-- End Navbar Transparent-->\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngFor=\"let alert of alerts\">\r\n    <ngb-alert [type]=\"alert.type\"  [dismissible]=\"false\" >\r\n        <div class=\"container\">\r\n            <div class=\"alert-wrapper\">\r\n                <button type=\"button\" name=\"button\" class=\"close\" (click)=\"closeAlert(alert)\">\r\n                  <span aria-hidden=\"true\">\r\n                      <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  </span>\r\n                </button>\r\n                <div class=\"message\">\r\n                    <ng-container *ngIf=\"alert.icon\">\r\n                      <div class=\"alert-icon\">\r\n                          <i class=\"now-ui-icons {{alert.icon}}\"></i>\r\n                      </div>\r\n                    </ng-container>\r\n                    <strong>{{alert.strong}} </strong>{{ alert.message }}\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </ngb-alert>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"nucleo-icons-style\">\r\n  <header>\r\n      <h1>Nucleo Outline Web Font v2.9</h1>\r\n      <p>\r\n          <a href=\"https://nucleoapp.com/?ref=1712\">nucleoapp.com</a>\r\n      </p>\r\n  </header>\r\n  <div id=\"cd-nav\">\r\n      <nav>\r\n          <ul id=\"cd-main-nav\">\r\n              <li>\r\n                  <a href=\"#arrows\">Arrows</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#business\">Business &amp; Finance</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#clothes\">Clothes &amp; Accessories</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#design\">Design &amp; Development</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#emoticons\">Emoticons</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#files\">Files &amp; Folders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#medical\">Healthcare &amp; Medical</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#loaders\">Loaders</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#maps\">Maps &amp; Location</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#media\">Media</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#objects\">Objects</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#school\">School &amp; Education</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#shopping\">Shopping</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#sport\">Sport</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#technology\">Technology</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#text\">Text Editing</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#gestures\">Touch Gestures</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#transportation\">Transportation</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#travel\">Travel</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#interface\">User Interface</a>\r\n              </li>\r\n              <li>\r\n                  <a href=\"#users\">Users</a>\r\n              </li>\r\n          </ul>\r\n      </nav>\r\n  </div>\r\n  <div id=\"icons-wrapper\">\r\n      <section id=\"arrows\">\r\n          <h2>Arrows</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                  <p>arrows-1_cloud-download-93</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_cloud-upload-94\"></i>\r\n                  <p>arrows-1_cloud-upload-94</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-down\"></i>\r\n                  <p>arrows-1_minimal-down</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-left\"></i>\r\n                  <p>arrows-1_minimal-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-right\"></i>\r\n                  <p>arrows-1_minimal-right</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_minimal-up\"></i>\r\n                  <p>arrows-1_minimal-up</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_refresh-69\"></i>\r\n                  <p>arrows-1_refresh-69</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons arrows-1_share-66\"></i>\r\n                  <p>arrows-1_share-66</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"business\">\r\n          <h2>Business &amp; Finance</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_badge\"></i>\r\n                  <p>business_badge</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bank\"></i>\r\n                  <p>business_bank</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_briefcase-24\"></i>\r\n                  <p>business_briefcase-24</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_bulb-63\"></i>\r\n                  <p>business_bulb-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-bar-32\"></i>\r\n                  <p>business_chart-bar-32</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_chart-pie-36\"></i>\r\n                  <p>business_chart-pie-36</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_globe\"></i>\r\n                  <p>business_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons business_money-coins\"></i>\r\n                  <p>business_money-coins</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"clothes\">\r\n          <h2>Clothes &amp; Accessories</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons clothes_tie-bow\"></i>\r\n                  <p>clothes_tie-bow</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"design\">\r\n          <h2>Design &amp; Development</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_app\"></i>\r\n                  <p>design_app</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_bullet-list-67\"></i>\r\n                  <p>design_bullet-list-67</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_image\"></i>\r\n                  <p>design_image</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_palette\"></i>\r\n                  <p>design_palette</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_scissors\"></i>\r\n                  <p>design_scissors</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design_vector\"></i>\r\n                  <p>design_vector</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_html5\"></i>\r\n                  <p>design-2_html5</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons design-2_ruler-pencil\"></i>\r\n                  <p>design-2_ruler-pencil</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"emoticons\">\r\n          <h2>Emoticons</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons emoticons_satisfied\"></i>\r\n                  <p>emoticons_satisfied</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"files\">\r\n          <h2>Files &amp; Folders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_box\"></i>\r\n                  <p>files_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_paper\"></i>\r\n                  <p>files_paper</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons files_single-copy-04\"></i>\r\n                  <p>files_single-copy-04</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"medical\">\r\n          <h2>Healthcare &amp; Medical</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons health_ambulance\"></i>\r\n                  <p>health_ambulance</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"loaders\">\r\n          <h2>Loaders</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_gear spin\"></i>\r\n                  <p>loader_gear</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons loader_refresh spin\"></i>\r\n                  <p>loader_refresh</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"maps\">\r\n          <h2>Maps &amp; Location</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_bookmark\"></i>\r\n                  <p>location_bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_compass-05\"></i>\r\n                  <p>location_compass-05</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_map-big\"></i>\r\n                  <p>location_map-big</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_pin\"></i>\r\n                  <p>location_pin</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons location_world\"></i>\r\n                  <p>location_world</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"media\">\r\n          <h2>Media</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_album\"></i>\r\n                  <p>media-1_album</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-pause\"></i>\r\n                  <p>media-1_button-pause</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-play\"></i>\r\n                  <p>media-1_button-play</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_button-power\"></i>\r\n                  <p>media-1_button-power</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-1_camera-compact\"></i>\r\n                  <p>media-1_camera-compact</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_note-03\"></i>\r\n                  <p>media-2_note-03</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons media-2_sound-wave\"></i>\r\n                  <p>media-2_sound-wave</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"objects\">\r\n          <h2>Objects</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_diamond\"></i>\r\n                  <p>objects_diamond</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_globe\"></i>\r\n                  <p>objects_globe</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_key-25\"></i>\r\n                  <p>objects_key-25</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_planet\"></i>\r\n                  <p>objects_planet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_spaceship\"></i>\r\n                  <p>objects_spaceship</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_support-17\"></i>\r\n                  <p>objects_support-17</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons objects_umbrella-13\"></i>\r\n                  <p>objects_umbrella-13</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"school\">\r\n          <h2>School &amp; Education</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_agenda-bookmark\"></i>\r\n                  <p>education_agenda-bookmark</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_atom\"></i>\r\n                  <p>education_atom</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_glasses\"></i>\r\n                  <p>education_glasses</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_hat\"></i>\r\n                  <p>education_hat</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons education_paper\"></i>\r\n                  <p>education_paper</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"shopping\">\r\n          <h2>Shopping</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_bag-16\"></i>\r\n                  <p>shopping_bag-16</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_basket\"></i>\r\n                  <p>shopping_basket</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_box\"></i>\r\n                  <p>shopping_box</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_cart-simple\"></i>\r\n                  <p>shopping_cart-simple</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_credit-card\"></i>\r\n                  <p>shopping_credit-card</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_delivery-fast\"></i>\r\n                  <p>shopping_delivery-fast</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_shop\"></i>\r\n                  <p>shopping_shop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons shopping_tag-content\"></i>\r\n                  <p>shopping_tag-content</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"sport\">\r\n          <h2>Sport</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_trophy\"></i>\r\n                  <p>sport_trophy</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons sport_user-run\"></i>\r\n                  <p>sport_user-run</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"technology\">\r\n          <h2>Technology</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_controller-modern\"></i>\r\n                  <p>tech_controller-modern</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_headphones\"></i>\r\n                  <p>tech_headphones</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_laptop\"></i>\r\n                  <p>tech_laptop</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_mobile\"></i>\r\n                  <p>tech_mobile</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tablet\"></i>\r\n                  <p>tech_tablet</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_tv\"></i>\r\n                  <p>tech_tv</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons tech_watch-time\"></i>\r\n                  <p>tech_watch-time</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"text\">\r\n          <h2>Text Editing</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-center\"></i>\r\n                  <p>text_align-center</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_align-left\"></i>\r\n                  <p>text_align-left</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_bold\"></i>\r\n                  <p>text_bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons text_caps-small\"></i>\r\n                  <p>text_caps-small</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"gestures\">\r\n          <h2>Touch Gestures</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons gestures_tap-01\"></i>\r\n                  <p>gestures_tap-01</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"transportation\">\r\n          <h2>Transportation</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_air-baloon\"></i>\r\n                  <p>transportation_air-baloon</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons transportation_bus-front-12\"></i>\r\n                  <p>transportation_bus-front-12</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"travel\">\r\n          <h2>Travel</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_info\"></i>\r\n                  <p>travel_info</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons travel_istanbul\"></i>\r\n                  <p>travel_istanbul</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"interface\">\r\n          <h2>User Interface</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_bell-53\"></i>\r\n                  <p>ui-1_bell-53</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_calendar-60\"></i>\r\n                  <p>ui-1_calendar-60</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_check\"></i>\r\n                  <p>ui-1_check</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_lock-circle-open\"></i>\r\n                  <p>ui-1_lock-circle-open</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_send\"></i>\r\n                  <p>ui-1_send</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_settings-gear-63\"></i>\r\n                  <p>ui-1_settings-gear-63</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-add\"></i>\r\n                  <p>ui-1_simple-add</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-delete\"></i>\r\n                  <p>ui-1_simple-delete</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_simple-remove\"></i>\r\n                  <p>ui-1_simple-remove</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_zoom-bold\"></i>\r\n                  <p>ui-1_zoom-bold</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                  <p>ui-2_chat-round</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_favourite-28\"></i>\r\n                  <p>ui-2_favourite-28</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_like\"></i>\r\n                  <p>ui-2_like</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_settings-90\"></i>\r\n                  <p>ui-2_settings-90</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-2_time-alarm\"></i>\r\n                  <p>ui-2_time-alarm</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                  <p>ui-1_email-85</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n      <section id=\"users\">\r\n          <h2>Users</h2>\r\n          <ul>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_circle-08\"></i>\r\n                  <p>users_circle-08</p>\r\n              </li>\r\n              <li>\r\n                  <i class=\"now-ui-icons users_single-02\"></i>\r\n                  <p>users_single-02</p>\r\n              </li>\r\n          </ul>\r\n      </section>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"section\">\r\n    <div class=\"container\">\r\n        <h3 class=\"title\">Typography</h3>\r\n        <div id=\"typography\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <div class=\"typography-line\">\r\n                        <h1>\r\n                            <span>Header 1</span>The Life of Now UI Kit </h1>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Header 2</span>The Life of Now UI Kit</h2>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h3>\r\n                            <span>Header 3</span>The Life of Now UI Kit</h3>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h4>\r\n                            <span>Header 4</span>The Life of Now UI Kit</h4>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h5>\r\n                            <span>Header 5</span>The Life of Now UI Kit</h5>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h6>\r\n                            <span>Header 6</span>The Life of Now UI Kit</h6>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <p>\r\n                            <span>Paragraph</span>\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Quote</span>\r\n                        <blockquote>\r\n                            <p class=\"blockquote blockquote-primary\">\r\n                                \"I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>\r\n                                    - Noaa\r\n                                </small>\r\n                            </p>\r\n                        </blockquote>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Muted Text</span>\r\n                        <p class=\"text-muted\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Primary Text</span>\r\n                        <p class=\"text-primary\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...</p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Info Text</span>\r\n                        <p class=\"text-info\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Success Text</span>\r\n                        <p class=\"text-success\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Warning Text</span>\r\n                        <p class=\"text-warning\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...\r\n                        </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <span>Danger Text</span>\r\n                        <p class=\"text-danger\">\r\n                            I will be the leader of a company that ends up being worth billions of dollars, because I got the answers... </p>\r\n                    </div>\r\n                    <div class=\"typography-line\">\r\n                        <h2>\r\n                            <span>Small Tag</span>\r\n                            Header with small subtitle\r\n                            <br>\r\n                            <small>Use \"small\" tag for the headers</small>\r\n                        </h2>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"space-50\"></div>\r\n        <div id=\"images\">\r\n            <h4>Images</h4>\r\n            <div class=\"row\">\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Rounded Image\" class=\"rounded\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Image</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Circle Image\" class=\"rounded-circle\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Raised Image\" class=\"rounded img-raised\">\r\n                </div>\r\n                <div class=\"col-sm-2\">\r\n                    <p class=\"category\">Circle Raised</p>\r\n                    <img src=\"assets/img/avatar.jpg\" alt=\"Thumbnail Image\" class=\"rounded-circle img-raised\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  examples works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n            style=\"background-image: url('assets/img/back2.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <h3 class=\"\">Industria Metalica de Transformación</h3>\r\n                <h1 class=\"title\">Estamos cambiando para estar cada vez más cerca de ti.</h1>\r\n                <h3 class=\"\">Nuestro sitio se encuentra actualmente en construcción</h3>\r\n                <div class=\"text-center\">\r\n                    <a href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\"\r\n                        class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-facebook-square\"></i>\r\n                    </a>\r\n                    <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-google-plus\"></i>\r\n                  </a> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n    <div class=\"col-md-8 ml-auto mr-auto text-center\" >\r\n                    <h2 class=\"title\">¿Quiénes somos?</h2>\r\n                    <p style=\"font-size: 18px; text-align: justify\">Somos una empresa dedicada a la fabricación y comercialización de\r\n                        implementos y refacciones agrícolas, techos y estructuras para corrales, generadora de asesoría\r\n                        y seguimiento con proyectos de gobierno.</p>\r\n                    <p style=\"font-size: 18px; text-align: justify\">Estamos comprometidos con nuestros clientes cumpliendo con sus\r\n                        requerimientos, expectativas y estándares de calidad. Contamos con 18 años en el mercado y\r\n                        siendo distribuidores de las mejores marcas.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"image-container image-left\"\r\n                            style=\"background-image: url('assets/img/landingImg1.jpg'); \" >\r\n                            <!-- First image on the left side -->\r\n                            <p class=\"blockquote blockquote-primary\" style=\"top: 345px; text-align: justify \">\"Tratamos a los demás como\r\n                                deseamos ser tratados, con dignidad, respeto y confianza es por ello que la integridad\r\n                                personal y profesional, honestidad, transparencia y sentido de justicia son valores\r\n                                fundamentales en nuestro trabajo.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-CEO</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container\"\r\n                            style=\"background-image: url('assets/img/landingImg3.jpg') ; height: 375px;\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\" style=\"text-align: justify\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\"\r\n                            style=\"background-image: url('assets/img/landingImg2.jpg')\"></div>\r\n                        <h3>¿Que es lo quenos identifica en el mercado?</h3>\r\n                        <p style=\"font-size: 18px;\">Nuestros productos y servicios son desarrollados especialmente para\r\n                            el sector agrícola y ganadero, contamos con una alta variedad y precios accesibles.\r\n                        </p>\r\n                        <p style=\"font-size: 18px;\"> Trabajamos comprometidos con los objetivos de la empresa y los\r\n                            clientes. Somos conscientes de que el aporte de nuestro espíritu emprendedor conduce al\r\n                            éxito de todos.\r\n                        </p>\r\n                        <p style=\"font-size: 18px;\"> Somos lo que hacemos y estamos comprometidos con la filosofía de\r\n                            mejora continua en el cumplimiento de nuestras obligaciones. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Algunos de nuestros productos</h2>\r\n            <!-- <p style=\"font-size: 18px;\">Haznos saber tus comentarios o cotiza algun servicio o producto directamente con\r\n                nosotros.</p> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-8 ml-auto mr-auto\">\r\n                    <ul style=\"text-align: left\">\r\n\r\n                        <li>Acamadora, Fertilizadora y Acolchonadora</li>\r\n                        <li>Asesoría y Seguimiento con Proyectos de Gobierno. </li>\r\n                        <li>Comederos</li>\r\n                        <li>Cuchillas Terraceras</li>\r\n                        <li>Cultivador Ajustable</li>\r\n                        <li>Multicultivadores y Subsuelos</li>\r\n                        <li>Cultivadoras Rotativas de Discos Dentados</li>\r\n\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-8 ml-auto mr-auto\">\r\n                    <ul style=\"text-align: left\">\r\n\r\n                        <li>Niveladoras (Hidráulicas y Mecánicas)</li>\r\n                        <li>Plumas (de Levante Mecánicas e Hidráulicas)</li>\r\n                        <li>Prensa Ganadera</li>\r\n                        <li>Refacciones</li>\r\n                        <li>Remolques (Cama Baja, Cama Alta, Ganaderos, de Volteo Hidráulico, Cuello de Ganso, con\r\n                            Tanque Nodriza)</li>\r\n                        <li>Zanjeadores (Fijos y Telescópicos)</li>\r\n\r\n                    </ul>\r\n                </div>x\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n        <div class=\"\" style=\"max-width: none; padding: 0;\">\r\n                <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.494863203729!2d-101.99743558507842!3d20.362476286363005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIxJzQ0LjkiTiAxMDHCsDU5JzQyLjkiVw!5e0!3m2!1sen!2smx!4v1585939491680!5m2!1sen!2smx\" width=\"1000\" onload=\"this.width=screen.width;\" height=\"450\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n        <div class=\"container\">\r\n            <h2 class=\"title\">Contactanos</h2>\r\n            <p style=\"font-size: 18px;\">Haznos saber tus comentarios o cotiza algun servicio o producto directamente con\r\n                nosotros.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                    <form id=\"my-form\" action=\"https://formspree.io/xpzjznqq\" method=\"POST\">\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Nombre</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input name=\"name\" type=\"text\" required class=\"form-control\" placeholder=\"Juan Perez\"\r\n                                (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Telefono</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons tech_mobile\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input name=\"phone\" required class=\"form-control\" placeholder=\"(352) 123 45 67\"\r\n                                (focus)=\"focus1=true\" (blur)=\"focus1=false\" type=\"tel\"\r\n                                pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{3}\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Correo</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input type=\"email\" name=\"_replyto\" required class=\"form-control\"\r\n                                placeholder=\"juan@correo.com\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Motivo</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus3===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <select name=\"type\" id=\"type\" form=\"my-form\" class=\"form-control\"\r\n                                style=\"height: calc(2.25rem + 11px);\" (blur)=\"focus3=false\" (focus)=\"focus3=true\">\r\n                                <option value=\"\" selected disabled hidden>Seleccione un motivo</option>\r\n                                <option>Cotización</option>\r\n                                <option>Refacciones</option>\r\n                                <option>Dudas o comentatios</option>\r\n                                <option>Otro</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"textarea-container\">\r\n                            <textarea class=\"form-control\" required name=\"body\" rows=\"4\" cols=\"80\"\r\n                                placeholder=\"Estoy interesado en cotizar con ustedes...\"></textarea>\r\n                        </div>\r\n                        <div class=\"send-button\">\r\n                            <button id=\"my-form-button\" class=\"btn btn-primary btn-round btn-block btn-lg\">\r\n                                Enviar\r\n                            </button>\r\n                            <p id=\"my-form-status\"></p>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<div class=\"page-header\" filter-color=\"orange\">\r\n    <div class=\"page-header-image\" style=\"background-image:url(assets/img/login.jpg)\"></div>\r\n    <div class=\"container\">\r\n        <div class=\"col-md-4 content-center\">\r\n            <div class=\"card card-login card-plain\">\r\n                <form class=\"form\" method=\"\" action=\"\">\r\n                    <div class=\"header header-primary text-center\">\r\n                        <div class=\"logo-container\">\r\n                            <img src=\"assets/img/now-logo.png\" alt=\"\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"content\">\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\">  <i class=\"now-ui-icons users_circle-08\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" class=\"form-control\" placeholder=\"First Name...\" (focus)=\"focus=true\" (blur)=\"focus=false\" >\r\n                      </div>\r\n                      <div class=\"input-group form-group-no-border input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                        <div class=\"input-group-prepend\">\r\n                            <span class=\"input-group-text\"><i class=\"now-ui-icons text_caps-small\"></i></span>\r\n                        </div>\r\n                          <input type=\"text\" placeholder=\"Last Name...\" class=\"form-control\" (focus)=\"focus1=true\" (blur)=\"focus1=false\"/>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"footer text-center\">\r\n                        <a href=\"#pablo\" class=\"btn btn-primary btn-round btn-lg btn-block\">Get Started</a>\r\n                    </div>\r\n                    <div class=\"pull-left\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Create Account</a>\r\n                        </h6>\r\n                    </div>\r\n                    <div class=\"pull-right\">\r\n                        <h6>\r\n                            <a href=\"#pablo\" class=\"link\">Need Help?</a>\r\n                        </h6>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n              {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\r\n    <div class=\"page-header page-header-small\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\" style=\"background-image: url('assets/img/bg5.jpg') ;\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <div class=\"photo-container\">\r\n                    <img src=\"assets/img/ryan.jpg\" alt=\"\">\r\n                </div>\r\n                <h3 class=\"title\">Ryan Scheinder</h3>\r\n                <p class=\"category\">Photographer</p>\r\n                <div class=\"content\">\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>26</h2>\r\n                        <p>Comments</p>\r\n                    </div>\r\n                    <div class=\"social-description\">\r\n                        <h2>48</h2>\r\n                        <p>Bookmarks</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section\">\r\n        <div class=\"container\">\r\n          <div class=\"button-container\">\r\n              <a href=\"#button\" class=\"btn btn-primary btn-round btn-lg\">Follow</a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Twitter\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#button\" class=\"btn btn-default btn-round btn-lg btn-icon\" rel=\"tooltip\" title=\"Follow me on Instagram\">\r\n                <i class=\"fab fa-instagram\"></i>\r\n              </a>\r\n          </div>\r\n          <h3 class=\"title\">About me</h3>\r\n          <h5 class=\"description\">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</h5>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"title text-center\">My Portfolio</h4>\r\n                      <ngb-tabset [justify]=\"'center'\" type=\"pills\" class=\"nav nav-pills nav-pills-primary  nav-pills-just-icons justify-content-center tab-space\">\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons design_image\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg1.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons location_world\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg11.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                          <ngb-tab>\r\n                            <ng-template ngbTabTitle>\r\n                              <i class=\"now-ui-icons sport_user-run\"></i>\r\n                            </ng-template>\r\n                              <ng-template ngbTabContent>\r\n                                <div class=\"row\">\r\n                                  <div class=\"col-md-10 ml-auto mr-auto\">\r\n                                      <div class=\"row collections\">\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg3.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg8.jpg\" alt=\"\" class=\"img-raised\">\r\n                                          </div>\r\n                                          <div class=\"col-md-6\">\r\n                                              <img src=\"assets/img/bg7.jpg\" alt=\"\" class=\"img-raised\">\r\n                                              <img src=\"assets/img/bg6.jpg\" class=\"img-raised\">\r\n                                          </div>\r\n                                      </div>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-template>\r\n                          </ngb-tab>\r\n                      </ngb-tabset>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <footer class=\"footer footer-default\">\r\n        <div class=\"container\">\r\n            <nav>\r\n                <ul>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com\">\r\n                            Creative Tim\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://www.creative-tim.com/about-us\">\r\n                            About Us\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"http://blog.creative-tim.com\">\r\n                            Blog\r\n                        </a>\r\n                    </li>\r\n                    <li>\r\n                        <a href=\"https://github.com/creativetimofficial/now-ui-kit/blob/master/LICENSE.md\">\r\n                            MIT License\r\n                        </a>\r\n                    </li>\r\n                </ul>\r\n            </nav>\r\n            <div class=\"copyright\">\r\n                &copy;\r\n                {{data | date: 'yyyy'}}, Designed by\r\n                <a href=\"https://www.invisionapp.com\" target=\"_blank\">Invision</a>. Coded by\r\n                <a href=\"https://www.creative-tim.com\" target=\"_blank\">Creative Tim</a>.\r\n            </div>\r\n        </div>\r\n    </footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n        style=\"background-image: url('assets/img/back2.jpg');\">\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"content-center\">\r\n            <!-- <h3 class=\"\">Industria Metalica de Transformación</h3> -->\r\n            <h1 class=\"title\" style=\"font-size: 40px; text-align: center !important;\">Transforma, maneja y mecaniza tus procesos agrícolas</h1>\r\n            <div class=\"text-center\">\r\n                <a href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\"\r\n                    class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                </a>\r\n                <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                <i class=\"fab fa-twitter\"></i>\r\n              </a>\r\n              <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                <i class=\"fab fa-google-plus\"></i>\r\n              </a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n\r\n<div class=\"section section-about-us\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 ml-auto mr-auto text-left\">\r\n                <h2 class=\"title seccionTitleProducts\" >Productos <strong style=\"color:#ee4b08\">IMT</strong></h2>\r\n                <h4 class=\"title seccionTextProducts\" >Nuestros productos y servicios son desarrollados especialmente para el sector agrícola y ganadero, contamos con una alta variedad y precios accesibles.</h4>\r\n                <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                margin-left:0px;\r\n                margin-bottom: 90px;\r\n                width: 395px;\r\n                border: solid 2px #ee4b08;\"></div>\r\n\r\n            </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n\r\n        <div class=\"row\">\r\n            <div *ngFor=\"let item of prodTypes\" (click)=\"goToProductDetails(item.name)\" style=\"margin-bottom:30px\" class=\"col-md-4\">\r\n                <img style=\"height: 250px;\" [src]=\"item.img\">\r\n                <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                margin-bottom: 8px;\r\n                margin-left:0px;\r\n                width: 60%;\r\n                border: solid 2px #f04c08;\"></div>\r\n                <h2 class=\"title title-prod\" >{{item.name}}</h2>\r\n                <!-- <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                margin-left:0px;\r\n                width: 60%;\r\n                border: solid 2px #f04c08;\"></div> -->\r\n                <!-- <p style=\"font-size: 12px; text-align: justify\"><strong>Modelo {{item.model}}:</strong> {{item.desc}}</p> -->\r\n            </div>\r\n            <!-- <div class=\"col-md-3\">\r\n                <img src=\"assets/img/re1.png\">\r\n                <h2 class=\"title\" style=\"font-family: 'Poppins', sans-serif;\r\n                font-size: 20px;\r\n                color: black;\r\n                font-weight: 900;\r\n                margin-bottom: 10px;\">REMOLQUES CAMA BAJA 2 EJES</h2>\r\n                <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                margin-left:0px;\r\n                width: 100%;\r\n                border: solid 2px #f04c08;\"></div>\r\n                <p style=\"font-size: 12px; text-align: justify\">Modelo 2CBR608B: Cosechador cargador estándar,\r\n                    reforzado de 4.62 Mts. de largo y 2.10 Mts. de ancho, suspensión tándem acorazada con capacidad\r\n                    de 6,000 Kg. y muelles de 6 hojas</p>\r\n            </div> -->\r\n\r\n\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto/contacto.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto/contacto.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n            style=\"background-image: url('assets/img/back2.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <!-- <h3 class=\"\">Industria Metalica de Transformación</h3> -->\r\n                <h1 style=\"font-size: 40px\" class=\"title\">Transforma, maneja y mecaniza tus procesos agrícolas</h1>\r\n                <div class=\"text-center\">\r\n                    <a  href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\" target=\"_blank\"\r\n                        class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-facebook-square\"></i>\r\n                    </a>\r\n                    <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-google-plus\"></i>\r\n                  </a> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"section section-contact-us text-center\" style=\"padding:0px !important; \" id=¨Contacto¨>\r\n        <div class=\"\" style=\"max-width: none; padding: 0;\">\r\n            <iframe\r\n                src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3740.494863203729!2d-101.99743558507842!3d20.362476286363005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDIxJzQ0LjkiTiAxMDHCsDU5JzQyLjkiVw!5e0!3m2!1sen!2smx!4v1585939491680!5m2!1sen!2smx\"\r\n                onload=\"this.width=screen.width - 20\" height=\"450\" frameborder=\"0\" style=\"border:0;\"\r\n                allowfullscreen=\"\" aria-hidden=\"false\" tabindex=\"0\"></iframe>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n        <div class=\"container\">\r\n            <div class=\"row justify-content-md-center sharing-area text-center\" style=\"margin-top:0px;\">\r\n                <div class=\"text-center col-md-12 col-lg-8\">\r\n                    <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\"\r\n                        class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                        <i class=\"fab fa-facebook-square\"></i>\r\n                    </a>\r\n\r\n                </div>\r\n            </div>\r\n            <h2 class=\"title seccionTitleProducts\">Contactanos</h2>\r\n            <p style=\"font-size: 18px;\">Haznos saber tus comentarios o cotiza algun servicio o producto directamente con\r\n                nosotros.</p>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 text-center col-md-8 ml-auto mr-auto\">\r\n                    <form id=\"my-form\" action=\"https://formspree.io/xpzjznqq\" method=\"POST\">\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Nombre Completo</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input name=\"name\" type=\"text\" required class=\"form-control\" placeholder=\"Juan Perez\"\r\n                                (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Telefono</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons tech_mobile\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input name=\"phone\" required class=\"form-control\" placeholder=\"(352) 123 45 67\"\r\n                                (focus)=\"focus1=true\" (blur)=\"focus1=false\" type=\"tel\"\r\n                                pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{3}\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Correo</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <input type=\"email\" name=\"_replyto\" required class=\"form-control\"\r\n                                placeholder=\"juan@correo.com\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                        </div>\r\n                        <h4 style=\"text-align: left; padding: 0 40px;\">Motivo</h4>\r\n                        <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus3===true}\">\r\n                            <div class=\"input-group-prepend\">\r\n                                <span class=\"input-group-text\">\r\n                                    <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                                </span>\r\n                            </div>\r\n                            <select name=\"type\" id=\"type\" form=\"my-form\" class=\"form-control\"\r\n                                style=\"height: calc(2.25rem + 11px);\" (blur)=\"focus3=false\" (focus)=\"focus3=true\">\r\n                                <option value=\"\" selected disabled hidden>Seleccione un motivo</option>\r\n                                <option>Cotización</option>\r\n                                <option>Refacciones</option>\r\n                                <option>Dudas o comentatios</option>\r\n                                <option>Otro</option>\r\n                            </select>\r\n                        </div>\r\n                        <div class=\"textarea-container\">\r\n                            <textarea class=\"form-control\" required name=\"body\" rows=\"4\" cols=\"80\"\r\n                                placeholder=\"Estoy interesado en cotizar con ustedes...\"></textarea>\r\n                        </div>\r\n                        <div class=\"send-button\">\r\n                            <button id=\"my-form-button\" class=\"btn btn-primary btn-round btn-block btn-lg\">\r\n                                Enviar\r\n                            </button>\r\n                            <p id=\"my-form-status\"></p>\r\n                        </div>\r\n                    </form>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"page-header clear-filter\" filter-color=\"orange\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-7\"\r\n            style=\"background-image: url('assets/img/Fachada.jpg');\">\r\n\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center brand\">\r\n                <!-- <img class=\"n-logo\" style=\"max-width: 396px;\" src=\"assets/img/IMT.png\" alt=\"\"> -->\r\n                <h1 class=\"h1-seo\" style=\"font-family: 'Moon';font-size: 53px;\" >Orgullosamente <strong style=\"color: #f04c08; \">mexicanos</strong> 18 años trabajando para nuestra tierra y su gente</h1>\r\n                <!-- <h3>Transforma, maneja y mecaniza tus procesos agrícolas</h3> -->\r\n            </div>\r\n            <h6 class=\"category category-absolute\">Desarrollado por\r\n                <a style=\"color: white\" target=\"_blank\">\r\n                <!-- <a href=\"https://invisionapp.com/\" style=\"color: white\" target=\"_blank\"> -->\r\n                    GsCore Solutions\r\n                </a></h6>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"main\">\r\n        <!-- <div class=\"section section-images\">\r\n          <div class=\"container\">\r\n              <div class=\"row\">\r\n                  <div class=\"col-md-12\">\r\n                      <div class=\"hero-images-container\">\r\n                          <img src=\"assets/img/hero-image-2.png\" alt=\"\">\r\n                    </div>\r\n                    <div class=\"hero-images-container-1\">\r\n                            <img src=\"assets/img/remolque.png\" alt=\"\">\r\n                      </div>\r\n                      <div class=\"hero-images-container-2\">\r\n                          <img src=\"assets/img/hero-image-3.png\" alt=\"\">\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n            </div> -->\r\n        </div>\r\n        <!-- <app-basicelements></app-basicelements>\r\n        <app-navigation></app-navigation>\r\n\r\n        <app-typography></app-typography> -->\r\n\r\n\r\n        <div class=\"section\">\r\n            <div class=\"container text-center\">\r\n                <div class=\"row justify-content-md-center\">\r\n                    <div class=\"col-md-12 col-lg-8\" style=\"text-align: center\">\r\n                        <h2 class=\"title seccionTitleProducts\">Bienvenidos</h2>\r\n                        <h5 class=\"description\" style=\"text-align: justify; color:#2c2c2c; \">Nosotros somos una empresa dedicada a\r\n                            la fabricación y comercialización de\r\n                            implementos y refacciones agrícolas, techos y estructuras para corrales, generadora de\r\n                            asesoría\r\n                            y seguimiento con proyectos de gobierno.</h5>\r\n                        <h5 class=\"description\" style=\"text-align: justify; color:#2c2c2c\">Estamos comprometidos con\r\n                            nuestros clientes cumpliendo con sus\r\n                            requerimientos, expectativas y estándares de calidad. Contamos con 18 años en el mercado y\r\n                            siendo distribuidores de las mejores marcas.</h5>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"section section-signup\"\r\n            style=\"background-image: url('assets/img/back1.jpg'); background-size: cover; background-position: top center; min-height: 700px;\">\r\n            <div class=\"container login-page\">\r\n                <div class=\"row\" >\r\n                        <div class=\"col-lg-6  col-md-8 mr-0\"></div>\r\n                        <div class=\"col-lg-6  col-md-8 mr-0\" style=\"text-align: left; background-color: white; padding: 35px 25px;\">\r\n                                <h2 class=\"title seccionTitleProducts\">Contactanos</h2>\r\n                                <p style=\"font-size: 18px;\">Haznos saber tus comentarios o cotiza con\r\n                                    nosotros.</p>\r\n                        <!-- <form id=\"my-form\" action=\"https://formspree.io/xpzjznqq\" method=\"POST\">\r\n                            <h4 style=\"text-align: left; padding: 0 40px;\">Nombre</h4>\r\n                            <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" >\r\n                                        <i class=\"now-ui-icons users_circle-08\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input name=\"name\" type=\"text\" required class=\"form-control\" placeholder=\"Juan Perez\"\r\n                                    (focus)=\"focus=true\" (blur)=\"focus=false\">\r\n                            </div>\r\n                            <h4 style=\"text-align: left; padding: 0 40px;\">Telefono</h4>\r\n                            <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus1===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" >\r\n                                        <i class=\"now-ui-icons tech_mobile\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input name=\"phone\" required class=\"form-control\" placeholder=\"(352) 123 45 67\"\r\n                                    (focus)=\"focus1=true\" (blur)=\"focus1=false\" type=\"tel\"\r\n                                    pattern=\"[0-9]{3}-[0-9]{2}-[0-9]{3}\">\r\n                            </div>\r\n                            <h4 style=\"text-align: left; padding: 0 40px;\">Correo</h4>\r\n                            <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus2===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" >\r\n                                        <i class=\"now-ui-icons ui-1_email-85\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <input type=\"email\" name=\"_replyto\" required class=\"form-control\"\r\n                                    placeholder=\"juan@correo.com\" (focus)=\"focus2=true\" (blur)=\"focus2=false\">\r\n                            </div>\r\n                            <h4 style=\"text-align: left; padding: 0 40px;\">Motivo</h4>\r\n                            <div class=\"input-group input-lg\" [ngClass]=\"{'input-group-focus':focus3===true}\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\" >\r\n                                        <i class=\"now-ui-icons ui-2_chat-round\"></i>\r\n                                    </span>\r\n                                </div>\r\n                                <select name=\"type\" id=\"type\" form=\"my-form\" class=\"form-control\"\r\n                                    style=\"height: calc(2.25rem + 11px);\" (blur)=\"focus3=false\"\r\n                                    (focus)=\"focus3=true\">\r\n                                    <option value=\"\" selected disabled hidden>Seleccione un motivo</option>\r\n                                    <option>Cotización</option>\r\n                                    <option>Refacciones</option>\r\n                                    <option>Dudas o comentatios</option>\r\n                                    <option>Otro</option>\r\n                                </select>\r\n                            </div>\r\n                            <div class=\"textarea-container\">\r\n                                <textarea class=\"form-control\" required name=\"body\" rows=\"4\" cols=\"80\"\r\n                                    placeholder=\"Estoy interesado en cotizar con ustedes...\"></textarea>\r\n                            </div>\r\n                            <div class=\"send-button\">\r\n                                <button id=\"my-form-button\" class=\"btn btn-primary btn-round btn-block btn-lg\">\r\n                                    Enviar\r\n                                </button>\r\n                                <p id=\"my-form-status\"></p>\r\n                            </div>\r\n                        </form> -->\r\n                        <div class=\"send-button\">\r\n                            <!-- <button href=\"./contacto\" class=\"btn btn-primary btn-round btn-block btn-lg\">\r\n                                <a  style=\"color: white\">Enviar</a>\r\n                            </button> -->\r\n                            <a class=\"btn btn-primary btn-round btn-block btn-lg\" style=\"color:white;\" (click)=\"goToContact()\" target=\"_self\">\r\n                                <p style=\"margin-bottom: 0px;\"><strong>Contactanos</strong></p>\r\n                            </a>\r\n                        </div>\r\n                        \r\n                    </div>\r\n                </div>\r\n                <!-- <div class=\"col text-center\">\r\n                    <a [routerLink]=\"['/examples/login']\" class=\"btn btn-simple btn-round btn-white btn-lg\">View Login Page</a>\r\n                </div> -->\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"section section-download\" id=\"#download-section\" data-background-color=\"black\">\r\n            <div class=\"container\">\r\n                \r\n                <div class=\"row justify-content-md-center sharing-area text-center\">\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                    <h3>Ponte en contacto con nosotros</h3>\r\n                  </div>\r\n                  <div class=\"text-center col-md-12 col-lg-8\">\r\n                    <a target=\"_blank\" href=\"https://www.facebook.com/creativetim\" class=\"btn btn-neutral btn-icon btn-facebook btn-round btn-lg\" rel=\"tooltip\" title=\"Like us\">\r\n                      <i class=\"fab fa-facebook-square\"></i>\r\n                    </a>\r\n\r\n                  </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div> -->\r\n\r\n\r\n      \r\n  ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    <div class=\"page-header page-header-small\">\r\n        <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n            style=\"background-image: url('assets/img/back2.jpg');\">\r\n        </div>\r\n        <div class=\"container\">\r\n            <div class=\"content-center\">\r\n                <!-- <h3 class=\"\">Industria Metalica de Transformación</h3> -->\r\n                <h1 style=\"font-size: 40px\" class=\"title\">Transforma, maneja y mecaniza tus procesos agrícolas</h1>\r\n                <!-- <h3 class=\"\">Nuestro sitio se encuentra actualmente en construcción</h3> -->\r\n                <div class=\"text-center\">\r\n                    <a href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\"\r\n                        class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-facebook-square\"></i>\r\n                    </a>\r\n                    <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                  </a>\r\n                  <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-google-plus\"></i>\r\n                  </a> -->\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"section section-about-us\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 ml-auto mr-auto text-left\">\r\n                    <h2 class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                    font-size: 65px;\r\n                    color: #2c2c2c;\r\n                    font-weight: 700;\r\n                    margin-bottom: 10px;\">¿Quiénes somos?</h2>\r\n                    <div class=\"separator separator-primary\" \r\n                    style=\"margin-top: 0px; \r\n                    margin-left:0px;\r\n                    width: 395px;\r\n                    border: solid 2px #f04c08;\"></div>\r\n                    <p style=\"font-size: 18px; text-align: justify\">Somos una empresa dedicada a la fabricación y\r\n                        comercialización de\r\n                        implementos y refacciones agrícolas, techos y estructuras para corrales, generadora de asesoría\r\n                        y seguimiento con proyectos de gobierno.</p>\r\n                    <p style=\"font-size: 18px; text-align: justify\">Estamos comprometidos con nuestros clientes\r\n                        cumpliendo con sus\r\n                        requerimientos, expectativas y estándares de calidad. Contamos con 18 años en el mercado y\r\n                        siendo distribuidores de las mejores marcas.</p>\r\n                </div>\r\n            </div>\r\n            <div class=\"separator separator-primary\"></div>\r\n            <div class=\"section-story-overview\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"image-container image-left\"\r\n                            style=\"background-image: url('assets/img/landingImg1.jpg'); \">\r\n                            <!-- First image on the left side -->\r\n                            <p class=\"blockquote blockquote-primary\" style=\"top: 345px; text-align: justify \">\"Tratamos\r\n                                a los demás como\r\n                                deseamos ser tratados, con dignidad, respeto y confianza es por ello que la integridad\r\n                                personal y profesional, honestidad, transparencia y sentido de justicia son valores\r\n                                fundamentales en nuestro trabajo.\"\r\n                                <br>\r\n                                <br>\r\n                                <small>-CEO</small>\r\n                            </p>\r\n                        </div>\r\n                        <!-- Second image on the left side of the article -->\r\n                        <div class=\"image-container\"\r\n                            style=\"background-image: url('assets/img/landingImg3.jpg') ; height: 375px;\"></div>\r\n                    </div>\r\n                    <div class=\"col-md-5\" style=\"text-align: justify\">\r\n                        <!-- First image on the right side, above the article -->\r\n                        <div class=\"image-container image-right\"\r\n                            style=\"background-image: url('assets/img/landingImg2.jpg')\"></div>\r\n                        <h3>¿Que es lo quenos identifica en el mercado?</h3>\r\n                        <p style=\"font-size: 18px;\">Nuestros productos y servicios son desarrollados especialmente para\r\n                            el sector agrícola y ganadero, contamos con una alta variedad y precios accesibles.\r\n                        </p>\r\n                        <p style=\"font-size: 18px;\"> Trabajamos comprometidos con los objetivos de la empresa y los\r\n                            clientes. Somos conscientes de que el aporte de nuestro espíritu emprendedor conduce al\r\n                            éxito de todos.\r\n                        </p>\r\n                        <p style=\"font-size: 18px;\"> Somos lo que hacemos y estamos comprometidos con la filosofía de\r\n                            mejora continua en el cumplimiento de nuestras obligaciones. </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n        <div class=\"container\">\r\n            <h2 class=\"title\" style=\"font-family: 'Moon'\">Algunos de nuestros productos</h2>\r\n            <!-- <p style=\"font-size: 18px;\">Haznos saber tus comentarios o cotiza algun servicio o producto directamente con\r\n                nosotros.</p> -->\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-6 col-md-8 ml-auto mr-auto\">\r\n                    <ul style=\"text-align: left\">\r\n\r\n                        <li>Acamadora, Fertilizadora y Acolchonadora</li>\r\n                        <li>Asesoría y Seguimiento con Proyectos de Gobierno. </li>\r\n                        <li>Comederos</li>\r\n                        <li>Cuchillas Terraceras</li>\r\n                        <li>Cultivador Ajustable</li>\r\n                        <li>Multicultivadores y Subsuelos</li>\r\n                        <li>Cultivadoras Rotativas de Discos Dentados</li>\r\n\r\n\r\n                    </ul>\r\n                </div>\r\n                <div class=\"col-lg-6 col-md-8 ml-auto mr-auto\">\r\n                    <ul style=\"text-align: left\">\r\n\r\n                        <li>Niveladoras (Hidráulicas y Mecánicas)</li>\r\n                        <li>Plumas (de Levante Mecánicas e Hidráulicas)</li>\r\n                        <li>Prensa Ganadera</li>\r\n                        <li>Refacciones</li>\r\n                        <li>Remolques (Cama Baja, Cama Alta, Ganaderos, de Volteo Hidráulico, Cuello de Ganso, con\r\n                            Tanque Nodriza)</li>\r\n                        <li>Zanjeadores (Fijos y Telescópicos)</li>\r\n\r\n                    </ul>\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n        style=\"background-image: url('assets/img/back2.jpg');\">\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"content-center\">\r\n            <!-- <h3 class=\"\">Industria Metalica de Transformación</h3> -->\r\n            <h1 style=\"font-size: 40px\" class=\"title\">Transforma, maneja y mecaniza tus procesos agrícolas</h1>\r\n            <!-- <h3 class=\"\">Nuestro sitio se encuentra actualmente en construcción</h3> -->\r\n            <div class=\"text-center\">\r\n                <a href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\"\r\n                    class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                </a>\r\n                <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-twitter\"></i>\r\n                      </a>\r\n                      <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-google-plus\"></i>\r\n                      </a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"section section-about-us\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 ml-auto mr-auto text-left\" style=\" flex: none;\r\n            max-width: 75%;\">\r\n                <a style=\"text-decoration: underline; cursor: pointer;\" (click)=\"goToProductDetails()\">Productos<strong>\r\n                        ></strong></a>\r\n                <h2 class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                        font-size: 45px;\r\n                        color: #2c2c2c;\r\n                        font-weight: 700;\r\n                       \">{{producto['product_name']}}</h2>\r\n                <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                        margin-left:0px;\r\n                        width: 395px;\r\n                        border: solid 2px #f04c08;\"></div>\r\n\r\n            </div>\r\n        </div>\r\n        <div id=\"ProductViewer\" class=\"section-story-overview\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-10\">\r\n                    <img class=\"image-container image-left img-prod-desc\" [src]=\"currentImage\"\r\n                        style=\"box-shadow: none; border-radius:0px;height: auto; width: 100%;\">\r\n                    <!-- First image on the left side -->\r\n\r\n                    <!-- Second image on the left side of the article -->\r\n                </div>\r\n                <div class=\"col-md-2\" style=\"text-align: justify\">\r\n                    <!-- First image on the right side, above the article -->\r\n                    <div class=\"model-area-prod-desc \" style=\"background:none; box-shadow: none;\">\r\n                        <h2 class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                        font-size: 85px;\r\n                        color: #f04c08;\r\n                        font-weight: 700;\r\n                        margin-bottom: 10px;\">{{producto['product_model']}}</h2>\r\n                        <p style=\"font-size: 18px; background-color: #fff\">{{producto['product_desc']}}\r\n                        </p>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" style=\"margin-bottom: 100px;\"> \r\n                <div class=\"col-md-8\">\r\n                    <div class=\"row\">\r\n                        <div *ngFor=\"let img of producto['product_img']\" class=\"col-md-4\">\r\n                            <img class=\"image-container image-left img-prod-desc\" [ngClass]=\"{'oppacity': (img == currentImage)}\" (click)=\"changeCurrentImage(img)\" [src]=\"img\"\r\n                            style=\"box-shadow: none; border-radius:0px;height: auto; width: 100%;\">\r\n                        </div>\r\n                       \r\n                    </div>  \r\n                </div>\r\n            </div>\r\n            <div *ngIf=\"specs[0].spec != ''\" class=\"row\" style=\" width: 100% !important; overflow-x: auto;\">\r\n                <div class=\"col-md-8\" style=\"margin-top: 80; margin-bottom: 50px;\">\r\n                    <h2 class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                    font-size: 45px;\r\n                    color: black;\r\n                    font-weight: 700;\r\n                    margin-bottom: 10px;\">{{product_mode_type}}</h2>\r\n                    <p style=\"font-size: 18px; text-align: justify; background-color: #fff;\">{{model_type_description}}</p>\r\n                </div>\r\n                <div class=\"col-md-8\" style=\"margin-top: 80;\">\r\n                    <h2 class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                    font-size: 45px;\r\n                    color: black;\r\n                    font-weight: 700;\r\n                    margin-bottom: 10px;\">ESPECIFICACIONES</h2>\r\n                    <table class=\"table table-hover \">\r\n                        <thead>\r\n                          <tr style=\"color: #f04c08;\">\r\n                            <!-- <th scope=\"col\">#</th> -->\r\n                            <th style=\"padding: .75rem 0.15rem .75rem 0.15rem\" scope=\"col\">ESPECIFICACIÓN</th>\r\n                            <th style=\"padding: .75rem 0.15rem .75rem 0.15rem;text-align: center;\" scope=\"col\">UNIDAD</th>\r\n                            <!-- <th style=\"padding: .75rem 0.15rem .75rem 0.15rem\" scope=\"col\">VALOR</th> -->\r\n                            <th  *ngFor=\"let val of specs[0].value\" style=\"padding: .75rem 0.15rem .75rem 0.15rem;text-align: center;\" scope=\"col\">{{val.key}} </th>\r\n\r\n                          </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                          <tr *ngFor=\"let spec of specs\">\r\n                            <!-- <th scope=\"row\">1</th> -->\r\n                            <td style=\"padding: .0.15rem;\">{{spec.spec}} </td>\r\n                            <td style=\"padding: .0.15rem; text-align: center;\">{{spec.unit}} </td>\r\n                            <td *ngFor=\"let val of spec.value\" style=\"padding: .0.15rem; text-align: center;\">{{val.val}} </td>\r\n                        </tr>\r\n                        </tbody>\r\n                      </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-header page-header-small\">\r\n    <div class=\"page-header-image rellax-header\" data-rellax-speed=\"-8\"\r\n        style=\"background-image: url('assets/img/back2.jpg');\">\r\n    </div>\r\n    <div class=\"container\">\r\n        <div class=\"content-center\">\r\n            <!-- <h3 class=\"\">Industria Metalica de Transformación</h3> -->\r\n            <h1 style=\"font-size: 40px\" class=\"title\">Transforma, maneja y mecaniza tus procesos agrícolas</h1>\r\n            <!-- <h3 class=\"\">Nuestro sitio se encuentra actualmente en construcción</h3> -->\r\n            <div class=\"text-center\">\r\n                <a href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\"\r\n                    class=\"btn btn-primary btn-icon btn-round\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                </a>\r\n                <!-- <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-twitter\"></i>\r\n                      </a>\r\n                      <a href=\"#pablo\" class=\"btn btn-primary btn-icon btn-round\">\r\n                        <i class=\"fab fa-google-plus\"></i>\r\n                      </a> -->\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"section section-about-us\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-8 ml-auto mr-auto text-left\">\r\n                <a style=\"text-decoration: underline; cursor: pointer;\" (click)=\"goToProductDetails()\">Categorias<strong>\r\n                    ></strong></a>\r\n                <h2 class=\"title seccionTitleProducts\" >{{id}} - <strong style=\"color:#ee4b08\">IMT</strong></h2>\r\n                <div class=\"separator separator-primary\" style=\"margin-top: 0px; \r\n                margin-left:0px;\r\n                margin-bottom: -30px;\r\n                width: 395px;\r\n                border: solid 2px #ee4b08;\"></div>\r\n\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"section section-contact-us text-center\" id=¨Contacto¨>\r\n    <div class=\"container\">\r\n        <div *ngFor=\"let MT of modelTypes\">\r\n            <h2 *ngIf=\"modelTypes.length > 1\" class=\"title\" style=\"font-family:'Moon', sans-serif;\r\n                font-size: 65px;\r\n                color: #2c2c2c;\r\n                font-weight: 700;\r\n               \">{{MT.name}}</h2>\r\n            <div class=\"row\">\r\n                <div *ngFor=\"let item of products\" [ngClass]=\"{'hidden': (item.modelType != MT.name)}\" (click)=\"selectCurrentProd(item.model)\"\r\n                    style=\"margin-bottom:30px\" class=\"col-md-4\">\r\n                    <img class=\"mini-img-prod-desc\" style=\"height: 250px;\" [src]=\"item.img[0]['S']\">\r\n                    <div class=\"separator separator-primary mini-img-prod-separator\" style=\"margin-top: 0px; \r\n                        margin-bottom: 8px;\r\n                        margin-left:0px;\r\n                        width: 100%;\r\n                        border: solid 2px #f04c08;\"></div>\r\n                    <h5 class=\"title title-prod\" style=\"height: auto; \">{{item.name}}</h5>\r\n                    <h2 class=\"title title-prod\" style=\"height: auto; color: #f04c08;\">{{item.model}}</h2>\r\n                    <p>{{item.desc}}</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg bg-primary fixed-top navbar-transparent\" style=\"position: absolute !important\" >\r\n    <div class=\"container\">\r\n      <div class=\"dropdown button-dropdown\">\r\n        <div ngbDropdown>\r\n          <!-- <a class=\"dropdown-toggle\" ngbDropdownToggle>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n              <span class=\"button-bar\"></span>\r\n          </a> -->\r\n           <!-- <div ngbDropdownMenu>\r\n             <a class=\"dropdown-header\">Dropdown header</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n             <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n             <div class=\"dropdown-divider\"></div>\r\n             <a class=\"dropdown-item\" href=\"#\">One more separated link</a>\r\n           </div> -->\r\n         </div>\r\n      </div>\r\n        <div class=\"navbar-translate\">\r\n            <a class=\"navbar-brand\"  placement=\"bottom\" ngbTooltip=\"Industria Metalica de Transformación\">\r\n            <!-- <a class=\"navbar-brand\" [routerLink]=\"['/index']\" placement=\"bottom\" ngbTooltip=\"Designed by Invision. Coded by Creative Tim\"> -->\r\n                <!-- IMT -->\r\n                <img class=\"n-logo\" style=\"max-width: 100px;\"  src=\"assets/img/IMT.png\" alt=\"\">\r\n            </a>\r\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarToggler\" aria-controls=\"navbarTogglerDemo02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" (click)=\"sidebarToggle()\">\r\n                <span class=\"navbar-toggler-bar bar1\"></span>\r\n                <span class=\"navbar-toggler-bar bar2\"></span>\r\n                <span class=\"navbar-toggler-bar bar3\"></span>\r\n            </button>\r\n        </div>  \r\n        <div class=\"collapse navbar-collapse\" data-nav-image=\"assets/img/blurred-image-1.jpg\" data-color=\"orange\">\r\n            <ul class=\"navbar-nav ml-auto\">\r\n              <!-- <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" href=\"https://www.creative-tim.com/product/now-ui-kit-angular\" target=\"_blank\">\r\n                      <i class=\"now-ui-icons arrows-1_cloud-download-93\"></i>\r\n                      <p>Download</p>\r\n                  </a>\r\n              </li> -->\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  [routerLink]=\"['/inicio']\"  target=\"_self\">\r\n                    <p>Inicio</p>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  [routerLink]=\"['/nosotros']\"  target=\"_self\">\r\n                    <p>Nosotros</p>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  [routerLink]=\"['/categorias']\"  target=\"_self\">\r\n                    <p>Productos</p>\r\n                  </a>\r\n              </li>\r\n              <li class=\"nav-item\">\r\n                  <a class=\"nav-link\"  [routerLink]=\"['/contacto']\"  target=\"_self\">\r\n                    <p>Contacto</p>\r\n                  </a>\r\n              </li>\r\n              <!-- <li class=\"nav-item\">\r\n                    <a class=\"nav-link btn btn-neutral\" href=\"./contacto\" target=\"_self\">\r\n                        <p><strong>Contactanos</strong></p>\r\n                    </a>\r\n                </li> -->\r\n                <!-- <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Twitter\" data-placement=\"bottom\" href=\"https://twitter.com/CreativeTim\" target=\"_blank\">\r\n                    <i class=\"fab fa-twitter\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Twitter</p>\r\n                  </a>\r\n                </li> -->\r\n                <li class=\"nav-item facebook-nav\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Like us on Facebook\" data-placement=\"bottom\" href=\"https://m.facebook.com/Industria-Met%C3%A1lica-de-Transformaci%C3%B3n-108113634679148/\" target=\"_blank\">\r\n                    <i class=\"fab fa-facebook-square\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Facebook</p>\r\n                  </a>\r\n                </li>\r\n                <!-- <li class=\"nav-item\">\r\n                  <a class=\"nav-link\" rel=\"tooltip\" title=\"Follow us on Instagram\" data-placement=\"bottom\" href=\"https://www.instagram.com/CreativeTimOfficial\" target=\"_blank\">\r\n                    <i class=\"fab fa-instagram\"></i>\r\n                    <p class=\"d-lg-none d-xl-none\">Instagram</p>\r\n                  </a>\r\n                </li> -->\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/products.service */ "./src/app/services/products.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(_sanitizer, restApi, renderer, router, document, element, location) {
        this._sanitizer = _sanitizer;
        this.restApi = restApi;
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
        this.products = [];
        this.prodTypes = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.navbar.sidebarClose();
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                var _location = _this.location.path();
                _location = _location.split('/')[2];
                if (number > 150 || window.pageYOffset > 150) {
                    navbar.classList.remove('navbar-transparent');
                }
                else if (_location !== 'login' && _this.location.path() !== '/nucleoicons') {
                    // remove logic
                    navbar.classList.add('navbar-transparent');
                }
            });
        });
        this.restApi.getAllProducts().subscribe(function (data) {
            _this.products = [];
            for (var i = 0; i < data['Items'].length; i++) {
                _this.products.push({
                    "type": data['Items'][i]["product_type"]["S"],
                    "model": data['Items'][i]["product_model"]["S"],
                    "img": _this._sanitizer.bypassSecurityTrustUrl(data['Items'][i]["product_img"]["S"]),
                    "desc": data['Items'][i]["product_desc"]["S"],
                    "name": data['Items'][i]["product_name"]["S"]
                });
                var validator = _this.prodTypes.find(function (element) { return element.name == _this.products[i].type; });
                if (validator == null || undefined) {
                    _this.prodTypes.push({
                        "name": _this.products[i].type,
                        "img": _this.products[i].img
                    });
                }
            }
            _this.prodTypes = _this.prodTypes.sort(_this.compare);
        });
    };
    AppComponent.prototype.goToProductDetails = function (cat) {
        this.router.navigate(['/productos', cat]);
    };
    AppComponent.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var bandA = a.name.toUpperCase();
        var bandB = b.name.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"])
    ], AppComponent.prototype, "navbar", void 0);
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_4__["DOCUMENT"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"], _services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductsService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/components.module */ "./src/app/components/components.module.ts");
/* harmony import */ var _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./examples/examples.module */ "./src/app/examples/examples.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_productos_productos_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/productos/productos.component */ "./src/app/pages/productos/productos.component.ts");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/producto/producto.component */ "./src/app/pages/producto/producto.component.ts");
/* harmony import */ var _pages_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/categorias/categorias.component */ "./src/app/pages/categorias/categorias.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");

 // this is needed!
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
                _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_11__["InicioComponent"],
                _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_12__["ContactoComponent"],
                _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_13__["NosotrosComponent"],
                _pages_productos_productos_component__WEBPACK_IMPORTED_MODULE_14__["ProductosComponent"],
                _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_15__["ProductoComponent"],
                _pages_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_16__["CategoriasComponent"]
            ],
            imports: [
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"],
                _examples_examples_module__WEBPACK_IMPORTED_MODULE_8__["ExamplesModule"]
            ],
            providers: [
                { provide: _angular_common__WEBPACK_IMPORTED_MODULE_17__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_17__["HashLocationStrategy"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./examples/landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/inicio/inicio.component */ "./src/app/pages/inicio/inicio.component.ts");
/* harmony import */ var _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/contacto/contacto.component */ "./src/app/pages/contacto/contacto.component.ts");
/* harmony import */ var _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/nosotros/nosotros.component */ "./src/app/pages/nosotros/nosotros.component.ts");
/* harmony import */ var _pages_productos_productos_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/productos/productos.component */ "./src/app/pages/productos/productos.component.ts");
/* harmony import */ var _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/producto/producto.component */ "./src/app/pages/producto/producto.component.ts");
/* harmony import */ var _pages_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/categorias/categorias.component */ "./src/app/pages/categorias/categorias.component.ts");













var routes = [
    { path: '', redirectTo: 'inicio', pathMatch: 'full' },
    { path: 'index', component: _examples_landing_landing_component__WEBPACK_IMPORTED_MODULE_6__["LandingComponent"] },
    { path: 'inicio', component: _pages_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"] },
    { path: 'nosotros', component: _pages_nosotros_nosotros_component__WEBPACK_IMPORTED_MODULE_9__["NosotrosComponent"] },
    { path: 'productos/:cat', component: _pages_productos_productos_component__WEBPACK_IMPORTED_MODULE_10__["ProductosComponent"] },
    { path: 'categorias', component: _pages_categorias_categorias_component__WEBPACK_IMPORTED_MODULE_12__["CategoriasComponent"] },
    { path: 'producto/:id', component: _pages_producto_producto_component__WEBPACK_IMPORTED_MODULE_11__["ProductoComponent"] },
    { path: 'contacto', component: _pages_contacto_contacto_component__WEBPACK_IMPORTED_MODULE_8__["ContactoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                // RouterModule.forRoot(routes)
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(routes, { useHash: true })
            ],
            exports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]
            ],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.scss ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzaWNlbGVtZW50cy9iYXNpY2VsZW1lbnRzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/basicelements/basicelements.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/basicelements/basicelements.component.ts ***!
  \*********************************************************************/
/*! exports provided: BasicelementsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BasicelementsComponent", function() { return BasicelementsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var BasicelementsComponent = /** @class */ (function () {
    function BasicelementsComponent() {
        this.simpleSlider = 40;
        this.doubleSlider = [20, 60];
        this.state = true;
        this.tagItems = ['Minimal', 'Light', 'New', 'Friends'];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.dropdownList1 = [];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {};
    }
    BasicelementsComponent.prototype.ngOnInit = function () {
        this.dropdownList = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems = [];
        this.dropdownSettings = {
            singleSelection: false,
            text: "Multiple Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
        this.dropdownList1 = [
            { "id": 1, "itemName": "Roman" },
            { "id": 2, "itemName": "Paris" },
            { "id": 3, "itemName": "Bucharest" },
            { "id": 4, "itemName": "Rome" },
            { "id": 5, "itemName": "New York" },
            { "id": 6, "itemName": "Miami" },
            { "id": 7, "itemName": "Piatra Neamt" },
            { "id": 8, "itemName": "Paris" },
            { "id": 9, "itemName": "Bucharest" },
            { "id": 10, "itemName": "Rome" },
            { "id": 11, "itemName": "New York" },
            { "id": 12, "itemName": "Miami" },
            { "id": 13, "itemName": "Piatra Neamt" }
        ];
        this.selectedItems1 = [];
        this.dropdownSettings1 = {
            singleSelection: true,
            text: "Single Select",
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: true,
            classes: ""
        };
    };
    BasicelementsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.OnItemDeSelect = function (item) {
        console.log(item);
        console.log(this.selectedItems);
    };
    BasicelementsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent.prototype.onDeSelectAll = function (items) {
        console.log(items);
    };
    BasicelementsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-basicelements',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./basicelements.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/basicelements/basicelements.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./basicelements.component.scss */ "./src/app/components/basicelements/basicelements.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], BasicelementsComponent);
    return BasicelementsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.component.ts":
/*!****************************************************!*\
  !*** ./src/app/components/components.component.ts ***!
  \****************************************************/
/*! exports provided: ComponentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsComponent", function() { return ComponentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_3__);




var ComponentsComponent = /** @class */ (function () {
    function ComponentsComponent(renderer, config) {
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    ComponentsComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    ComponentsComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    ComponentsComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_3__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    ComponentsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    ComponentsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
    ]; };
    ComponentsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-components',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./components.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/components.component.html")).default,
            styles: ["\n    ngb-progressbar {\n        margin-top: 5rem;\n    }\n    "]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], ComponentsComponent);
    return ComponentsComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/*!*************************************************!*\
  !*** ./src/app/components/components.module.ts ***!
  \*************************************************/
/*! exports provided: ComponentsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./basicelements/basicelements.component */ "./src/app/components/basicelements/basicelements.component.ts");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/components/navigation/navigation.component.ts");
/* harmony import */ var _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./typography/typography.component */ "./src/app/components/typography/typography.component.ts");
/* harmony import */ var _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./nucleoicons/nucleoicons.component */ "./src/app/components/nucleoicons/nucleoicons.component.ts");
/* harmony import */ var _components_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components.component */ "./src/app/components/components.component.ts");
/* harmony import */ var _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./notification/notification.component */ "./src/app/components/notification/notification.component.ts");
/* harmony import */ var _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modal/modal.component */ "./src/app/components/modal/modal.component.ts");















var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_5__["NouisliderModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"]
            ],
            declarations: [
                _components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"],
                _basicelements_basicelements_component__WEBPACK_IMPORTED_MODULE_8__["BasicelementsComponent"],
                _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_9__["NavigationComponent"],
                _typography_typography_component__WEBPACK_IMPORTED_MODULE_10__["TypographyComponent"],
                _nucleoicons_nucleoicons_component__WEBPACK_IMPORTED_MODULE_11__["NucleoiconsComponent"],
                _notification_notification_component__WEBPACK_IMPORTED_MODULE_13__["NotificationComponent"],
                _modal_modal_component__WEBPACK_IMPORTED_MODULE_14__["NgbdModalBasic"]
            ],
            exports: [_components_component__WEBPACK_IMPORTED_MODULE_12__["ComponentsComponent"]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/modal/modal.component.ts ***!
  \*****************************************************/
/*! exports provided: NgbdModalBasic */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgbdModalBasic", function() { return NgbdModalBasic; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");



var NgbdModalBasic = /** @class */ (function () {
    function NgbdModalBasic(modalService) {
        this.modalService = modalService;
    }
    NgbdModalBasic.prototype.open = function (content, type, modalDimension) {
        var _this = this;
        if (modalDimension === 'sm' && type === 'modal_mini') {
            this.modalService.open(content, { windowClass: 'modal-mini modal-primary', size: 'sm' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else if (modalDimension == undefined && type === 'Login') {
            this.modalService.open(content, { windowClass: 'modal-login modal-primary' }).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
        else {
            this.modalService.open(content).result.then(function (result) {
                _this.closeResult = "Closed with: " + result;
            }, function (reason) {
                _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
            });
        }
    };
    NgbdModalBasic.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    NgbdModalBasic.ctorParameters = function () { return [
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"] }
    ]; };
    NgbdModalBasic = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ngbd-modal-component',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./modal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/modal/modal.component.html")).default
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], NgbdModalBasic);
    return NgbdModalBasic;
}());



/***/ }),

/***/ "./src/app/components/navigation/navigation.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2aWdhdGlvbi9uYXZpZ2F0aW9uLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/navigation/navigation.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/navigation/navigation.component.ts ***!
  \***************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NavigationComponent = /** @class */ (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () { };
    NavigationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navigation',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navigation.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navigation/navigation.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navigation.component.scss */ "./src/app/components/navigation/navigation.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/notification/notification.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/notification/notification.component.scss ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uL25vdGlmaWNhdGlvbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/components/notification/notification.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/notification/notification.component.ts ***!
  \*******************************************************************/
/*! exports provided: NotificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationComponent", function() { return NotificationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NotificationComponent = /** @class */ (function () {
    function NotificationComponent() {
        this.alerts = [];
        this.alerts.push({
            id: 1,
            type: 'success',
            strong: 'Well done!',
            message: 'You successfully read this important alert message.',
            icon: 'ui-2_like'
        }, {
            id: 2,
            strong: 'Heads up!',
            type: 'info',
            message: 'This is an info alert',
            icon: 'travel_info'
        }, {
            id: 3,
            type: 'warning',
            strong: 'Warning!',
            message: 'This is a warning alert',
            icon: 'ui-1_bell-53'
        }, {
            id: 4,
            type: 'danger',
            strong: 'Oh snap!',
            message: 'This is a danger alert',
            icon: 'objects_support-17'
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    NotificationComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Array)
    ], NotificationComponent.prototype, "alerts", void 0);
    NotificationComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-notification',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./notification.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/notification/notification.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./notification.component.scss */ "./src/app/components/notification/notification.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NotificationComponent);
    return NotificationComponent;
}());



/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nucleo-icons-style,\n.nucleo-icons-style,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* .nucleo-icons-style5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection,\nmain {\n  display: block;\n}\n\n.nucleo-icons-style {\n  line-height: 1;\n}\n\nol,\nul {\n  list-style: none;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n/* --------------------------------\n\nNucleo Outline Web Font - nucleoapp.com/\nLicense - nucleoapp.com/license/\nCreated using IcoMoon - icomoon.io\n\n-------------------------------- */\n\n/* --------------------------------\n\nPrimary style\n\n-------------------------------- */\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\n.nucleo-icons-style {\n  font-size: 62.5%;\n}\n\n.nucleo-icons-style {\n  font-size: 1.6rem;\n  font-family: sans-serif;\n  color: #333333;\n  background: #efefef;\n}\n\na {\n  color: #766acf;\n  text-decoration: none;\n}\n\n/* --------------------------------\n\nMain components\n\n-------------------------------- */\n\nheader {\n  text-align: center;\n  padding: 120px 0 0;\n}\n\nheader h1 {\n  font-size: 1.2rem;\n}\n\nheader p {\n  font-size: 0.9rem;\n  margin-top: 0.6em;\n}\n\nheader a:hover {\n  text-decoration: underline;\n}\n\nsection {\n  width: 90%;\n  max-width: 1200px;\n  margin: 50px auto;\n}\n\nsection h2 {\n  border-bottom: 1px solid #e2e2e2;\n  padding: 0 0 1em 0.2em;\n  margin-bottom: 1em;\n  font-size: 1rem;\n}\n\nul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n\nul li {\n  width: 25%;\n  float: left;\n  padding: 16px 0;\n  text-align: center;\n  border-radius: 0.25em;\n  transition: background 0.2s;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  overflow: hidden;\n}\n\nul li:hover {\n  background: #dbdbdb;\n}\n\nul p,\nul em,\nul input {\n  display: inline-block;\n  font-size: 0.7rem;\n  color: #999999;\n  -webkit-user-select: auto;\n  -moz-user-select: auto;\n  -ms-user-select: auto;\n  user-select: auto;\n  white-space: nowrap;\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  cursor: pointer;\n}\n\nul p {\n  padding: 10px;\n  margin-top: 10px;\n}\n\nul p::-moz-selection, ul em::-moz-selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul p::selection,\nul em::selection {\n  background: #766acf;\n  color: #efefef;\n}\n\nul em {\n  margin-bottom: 8px;\n}\n\nul em::before {\n  content: \"[\";\n}\n\nul em::after {\n  content: \"]\";\n}\n\nul input {\n  text-align: center;\n  background: transparent;\n  border: none;\n  box-shadow: none;\n  outline: none;\n}\n\n@media only screen and (min-width: 768px) {\n  ul li {\n    width: 20%;\n    float: left;\n  }\n}\n\n@media only screen and (min-width: 1024px) {\n  ul li {\n    width: 12.5%;\n    float: left;\n    padding: 32px 0;\n  }\n}\n\n/* --------------------------------\n\nSmart fixed navigation\n\n-------------------------------- */\n\n#cd-nav ul {\n  /* mobile first */\n  position: fixed;\n  width: 90%;\n  max-width: 400px;\n  max-height: 90%;\n  right: 5%;\n  bottom: 5%;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  background: white;\n  visibility: hidden;\n  /* remove overflow:hidden if you want to create a drop-down menu - but then remember to fix/eliminate the list items animation */\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 1;\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transform: scale(0);\n  transform-origin: 100% 100%;\n  transition: transform 0.3s, visibility 0s 0.3s;\n}\n\n#cd-nav ul li {\n  /* Force Hardware Acceleration in WebKit */\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  display: block;\n  width: 100%;\n  padding: 0;\n  text-align: left;\n}\n\n#cd-nav ul li:hover {\n  background-color: #FFF;\n}\n\n#cd-nav ul.is-visible {\n  visibility: visible;\n  transform: scale(1);\n  transition: transform 0.3s, visibility 0s 0s;\n}\n\n#cd-nav li a {\n  display: block;\n  padding: 1em;\n  font-size: 1.2rem;\n  border-bottom: 1px solid #eff2f6;\n}\n\n#cd-nav li a:hover {\n  color: #333333;\n}\n\n#cd-nav li:last-child a {\n  border-bottom: none;\n}\n\n.cd-nav-trigger {\n  position: fixed;\n  bottom: 5%;\n  right: 5%;\n  width: 44px;\n  height: 44px;\n  background: white;\n  border-radius: 0.25em;\n  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n  /* image replacement */\n  overflow: hidden;\n  text-indent: 100%;\n  white-space: nowrap;\n  z-index: 2;\n}\n\n.cd-nav-trigger span {\n  /* the span element is used to create the menu icon */\n  position: absolute;\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #333333;\n  top: 50%;\n  margin-top: -1px;\n  left: 50%;\n  margin-left: -10px;\n  transition: background 0.3s;\n}\n\n.cd-nav-trigger span::before,\n.cd-nav-trigger span::after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  background: inherit;\n  width: 100%;\n  height: 100%;\n  /* Force Hardware Acceleration in WebKit */\n  transform: translateZ(0);\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: transform 0.3s, background 0s;\n}\n\n.cd-nav-trigger span::before {\n  top: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger span::after {\n  bottom: -6px;\n  transform: rotate(0);\n}\n\n.cd-nav-trigger.menu-is-open {\n  box-shadow: none;\n}\n\n.cd-nav-trigger.menu-is-open span {\n  background: rgba(232, 74, 100, 0);\n}\n\n.cd-nav-trigger.menu-is-open span::before,\n.cd-nav-trigger.menu-is-open span::after {\n  background: #333333;\n}\n\n.cd-nav-trigger.menu-is-open span::before {\n  top: 0;\n  transform: rotate(135deg);\n}\n\n.cd-nav-trigger.menu-is-open span::after {\n  bottom: 0;\n  transform: rotate(225deg);\n}\n\n.now-ui-icons {\n  display: inline-block;\n  font: normal normal normal 32px/1 \"Nucleo Outline\";\n  speak: none;\n  text-transform: none;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9udWNsZW9pY29ucy9FOlxcU3R1ZmZcXEdzQ29yZVxcSU1UL3NyY1xcYXBwXFxjb21wb25lbnRzXFxudWNsZW9pY29uc1xcbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWlGSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdCQUFBO0FDQ0o7O0FERUEsK0RBQUE7O0FBRUE7Ozs7Ozs7Ozs7OztFQVlJLGNBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7QUNBSjs7QURHQTs7RUFFSSxnQkFBQTtBQ0FKOztBREdBOztFQUVJLFlBQUE7QUNBSjs7QURHQTs7OztFQUlJLFdBQUE7RUFDQSxhQUFBO0FDQUo7O0FER0E7RUFDSSx5QkFBQTtFQUNBLGlCQUFBO0FDQUo7O0FES0E7Ozs7OztrQ0FBQTs7QUFRQTs7OztrQ0FBQTs7QUFNQTs7O0VBR0ksc0JBQUE7QUNKSjs7QURPQTtFQUNJLGdCQUFBO0FDSko7O0FET0E7RUFDSSxpQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0FDSko7O0FET0E7RUFDSSxjQUFBO0VBQ0EscUJBQUE7QUNKSjs7QURPQTs7OztrQ0FBQTs7QUFNQTtFQUNJLGtCQUFBO0VBQ0Esa0JBQUE7QUNMSjs7QURRQTtFQUNJLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FDTEo7O0FEUUE7RUFDSSwwQkFBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNMSjs7QURRQTtFQUNJLGdDQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMSjs7QURRQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUdBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQ0xKOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURRQTs7O0VBR0kscUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0FDTEo7O0FEUUE7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUNMSjs7QURRQTtFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0xKOztBREVBOztFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRQTtFQUNJLFlBQUE7QUNMSjs7QURRQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0FDTEo7O0FEUUE7RUFDSTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VDTE47QUFDRjs7QURRQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFdBQUE7SUFDQSxlQUFBO0VDTk47QUFDRjs7QURTQTs7OztrQ0FBQTs7QUFNQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0VBQ0EsdUNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0lBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLDBDQUFBO0VBQ0EsbUNBQUE7RUFDQSwyQkFBQTtFQUtBLG1CQUFBO0VBS0EsMkJBQUE7RUFHQSw4Q0FBQTtBQ1JKOztBRFdBO0VBQ0ksMENBQUE7RUFDQSxtQ0FBQTtFQUNBLDJCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUNSSjs7QURXQTtFQUNJLHNCQUFBO0FDUko7O0FEV0E7RUFDSSxtQkFBQTtFQUtBLG1CQUFBO0VBR0EsNENBQUE7QUNSSjs7QURXQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQ0FBQTtBQ1JKOztBRFdBO0VBQ0ksY0FBQTtBQ1JKOztBRFdBO0VBQ0ksbUJBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtFQUNBLHVDQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDUko7O0FEV0E7RUFDSSxxREFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0EsZ0JBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7RUFHQSwyQkFBQTtBQ1JKOztBRFdBOztFQUVJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMENBQUE7RUFLQSx3QkFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7RUFHQSx5Q0FBQTtBQ1JKOztBRFdBO0VBQ0ksU0FBQTtFQUtBLG9CQUFBO0FDUko7O0FEV0E7RUFDSSxZQUFBO0VBS0Esb0JBQUE7QUNSSjs7QURXQTtFQUNJLGdCQUFBO0FDUko7O0FEV0E7RUFDSSxpQ0FBQTtBQ1JKOztBRFdBOztFQUVJLG1CQUFBO0FDUko7O0FEV0E7RUFDSSxNQUFBO0VBS0EseUJBQUE7QUNSSjs7QURXQTtFQUNJLFNBQUE7RUFLQSx5QkFBQTtBQ1JKOztBRFdBO0VBQ0kscUJBQUE7RUFDQSxrREFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUNSSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbnVjbGVvaWNvbnMvbnVjbGVvaWNvbnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubnVjbGVvLWljb25zLXN0eWxlLFxyXG4ubnVjbGVvLWljb25zLXN0eWxlLFxyXG5kaXYsXHJcbnNwYW4sXHJcbmFwcGxldCxcclxub2JqZWN0LFxyXG5pZnJhbWUsXHJcbmgxLFxyXG5oMixcclxuaDMsXHJcbmg0LFxyXG5oNSxcclxuaDYsXHJcbnAsXHJcbmJsb2NrcXVvdGUsXHJcbnByZSxcclxuYSxcclxuYWJicixcclxuYWNyb255bSxcclxuYWRkcmVzcyxcclxuYmlnLFxyXG5jaXRlLFxyXG5jb2RlLFxyXG5kZWwsXHJcbmRmbixcclxuZW0sXHJcbmltZyxcclxuaW5zLFxyXG5rYmQsXHJcbnEsXHJcbnMsXHJcbnNhbXAsXHJcbnNtYWxsLFxyXG5zdHJpa2UsXHJcbnN0cm9uZyxcclxuc3ViLFxyXG5zdXAsXHJcbnR0LFxyXG52YXIsXHJcbmIsXHJcbnUsXHJcbmksXHJcbmNlbnRlcixcclxuZGwsXHJcbmR0LFxyXG5kZCxcclxub2wsXHJcbnVsLFxyXG5saSxcclxuZmllbGRzZXQsXHJcbmZvcm0sXHJcbmxhYmVsLFxyXG5sZWdlbmQsXHJcbnRhYmxlLFxyXG5jYXB0aW9uLFxyXG50Ym9keSxcclxudGZvb3QsXHJcbnRoZWFkLFxyXG50cixcclxudGgsXHJcbnRkLFxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuY2FudmFzLFxyXG5kZXRhaWxzLFxyXG5lbWJlZCxcclxuZmlndXJlLFxyXG5maWdjYXB0aW9uLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbm91dHB1dCxcclxucnVieSxcclxuc2VjdGlvbixcclxuc3VtbWFyeSxcclxudGltZSxcclxubWFyayxcclxuYXVkaW8sXHJcbnZpZGVvIHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICBmb250OiBpbmhlcml0O1xyXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xyXG59XHJcblxyXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXHJcblxyXG5hcnRpY2xlLFxyXG5hc2lkZSxcclxuZGV0YWlscyxcclxuZmlnY2FwdGlvbixcclxuZmlndXJlLFxyXG5mb290ZXIsXHJcbmhlYWRlcixcclxuaGdyb3VwLFxyXG5tZW51LFxyXG5uYXYsXHJcbnNlY3Rpb24sXHJcbm1haW4ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbi5udWNsZW8taWNvbnMtc3R5bGUge1xyXG4gICAgbGluZS1oZWlnaHQ6IDE7XHJcbn1cclxuXHJcbm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG5ibG9ja3F1b3RlLFxyXG5xIHtcclxuICAgIHF1b3Rlczogbm9uZTtcclxufVxyXG5cclxuYmxvY2txdW90ZTpiZWZvcmUsXHJcbmJsb2NrcXVvdGU6YWZ0ZXIsXHJcbnE6YmVmb3JlLFxyXG5xOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgY29udGVudDogbm9uZTtcclxufVxyXG5cclxudGFibGUge1xyXG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxuICAgIGJvcmRlci1zcGFjaW5nOiAwO1xyXG59XHJcblxyXG5cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5OdWNsZW8gT3V0bGluZSBXZWIgRm9udCAtIG51Y2xlb2FwcC5jb20vXHJcbkxpY2Vuc2UgLSBudWNsZW9hcHAuY29tL2xpY2Vuc2UvXHJcbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuUHJpbWFyeSBzdHlsZVxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiosXHJcbio6OmFmdGVyLFxyXG4qOjpiZWZvcmUge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLm51Y2xlby1pY29ucy1zdHlsZSB7XHJcbiAgICBmb250LXNpemU6IDYyLjUlO1xyXG59XHJcblxyXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICAgIGJhY2tncm91bmQ6ICNlZmVmZWY7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICM3NjZhY2Y7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuXHJcbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5NYWluIGNvbXBvbmVudHNcclxuXHJcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXHJcblxyXG5oZWFkZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMTIwcHggMCAwO1xyXG59XHJcblxyXG5oZWFkZXIgaDEge1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbn1cclxuXHJcbmhlYWRlciBwIHtcclxuICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcbiAgICBtYXJnaW4tdG9wOiAuNmVtO1xyXG59XHJcblxyXG5oZWFkZXIgYTpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxufVxyXG5cclxuc2VjdGlvbiB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMjAwcHg7XHJcbiAgICBtYXJnaW46IDUwcHggYXV0bztcclxufVxyXG5cclxuc2VjdGlvbiBoMiB7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UyZTJlMjtcclxuICAgIHBhZGRpbmc6IDAgMCAxZW0gLjJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxufVxyXG5cclxudWw6OmFmdGVyIHtcclxuICAgIGNsZWFyOiBib3RoO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG59XHJcblxyXG51bCBsaSB7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICBwYWRkaW5nOiAxNnB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVlbTtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjJzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG5cclxudWwgbGk6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2RiZGJkYjtcclxufVxyXG5cclxudWwgcCxcclxudWwgZW0sXHJcbnVsIGlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMC43cmVtO1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgLW1vei11c2VyLXNlbGVjdDogYXV0bztcclxuICAgIC1tcy11c2VyLXNlbGVjdDogYXV0bztcclxuICAgIHVzZXItc2VsZWN0OiBhdXRvO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG51bCBwIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG51bCBwOjpzZWxlY3Rpb24sXHJcbnVsIGVtOjpzZWxlY3Rpb24ge1xyXG4gICAgYmFja2dyb3VuZDogIzc2NmFjZjtcclxuICAgIGNvbG9yOiAjZWZlZmVmO1xyXG59XHJcblxyXG51bCBlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbn1cclxuXHJcbnVsIGVtOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogJ1snO1xyXG59XHJcblxyXG51bCBlbTo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ10nO1xyXG59XHJcblxyXG51bCBpbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICB1bCBsaSB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIHVsIGxpIHtcclxuICAgICAgICB3aWR0aDogMTIuNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgcGFkZGluZzogMzJweCAwO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxyXG5cclxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cclxuXHJcbiNjZC1uYXYgdWwge1xyXG4gICAgLyogbW9iaWxlIGZpcnN0ICovXHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxuICAgIG1heC1oZWlnaHQ6IDkwJTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIGJvdHRvbTogNSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIC8qIHJlbW92ZSBvdmVyZmxvdzpoaWRkZW4gaWYgeW91IHdhbnQgdG8gY3JlYXRlIGEgZHJvcC1kb3duIG1lbnUgLSBidXQgdGhlbiByZW1lbWJlciB0byBmaXgvZWxpbWluYXRlIHRoZSBsaXN0IGl0ZW1zIGFuaW1hdGlvbiAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgLyogRm9yY2UgSGFyZHdhcmUgQWNjZWxlcmF0aW9uIGluIFdlYktpdCAqL1xyXG4gICAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogc2NhbGUoMCk7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtbW96LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcclxuICAgIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtby10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogLW1vei10cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwLjNzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcclxufVxyXG5cclxuI2NkLW5hdiB1bCBsaSB7XHJcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXHJcbiAgICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGO1xyXG59XHJcblxyXG4jY2QtbmF2IHVsLmlzLXZpc2libGUge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcywgdmlzaWJpbGl0eSAwcyAwcztcclxufVxyXG5cclxuI2NkLW5hdiBsaSBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMWVtO1xyXG4gICAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZjJmNjtcclxufVxyXG5cclxuI2NkLW5hdiBsaSBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG59XHJcblxyXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XHJcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiA1JTtcclxuICAgIHJpZ2h0OiA1JTtcclxuICAgIHdpZHRoOiA0NHB4O1xyXG4gICAgaGVpZ2h0OiA0NHB4O1xyXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAvKiBpbWFnZSByZXBsYWNlbWVudCAqL1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtaW5kZW50OiAxMDAlO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlciBzcGFuIHtcclxuICAgIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMnB4O1xyXG4gICAgYmFja2dyb3VuZDogIzMzMzMzMztcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTBweDtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXHJcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjphZnRlciB7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC1vLXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUge1xyXG4gICAgdG9wOiAtNnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAtNnB4O1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgwKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDApO1xyXG59XHJcblxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3BhbiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzMiwgNzQsIDEwMCwgMCk7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlLFxyXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMzMzMzMzM7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YmVmb3JlIHtcclxuICAgIHRvcDogMDtcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIC1tb3otdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xyXG4gICAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbn1cclxuXHJcbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3Bhbjo6YWZ0ZXIge1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMjI1ZGVnKTtcclxufVxyXG5cclxuLm5vdy11aS1pY29ucyB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgJ051Y2xlbyBPdXRsaW5lJztcclxuICAgIHNwZWFrOiBub25lO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcclxuICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XHJcbn1cclxuIiwiLm51Y2xlby1pY29ucy1zdHlsZSxcbi5udWNsZW8taWNvbnMtc3R5bGUsXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IDA7XG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgZm9udDogaW5oZXJpdDtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiAubnVjbGVvLWljb25zLXN0eWxlNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uLFxubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgbGluZS1oZWlnaHQ6IDE7XG59XG5cbm9sLFxudWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5ibG9ja3F1b3RlLFxucSB7XG4gIHF1b3Rlczogbm9uZTtcbn1cblxuYmxvY2txdW90ZTpiZWZvcmUsXG5ibG9ja3F1b3RlOmFmdGVyLFxucTpiZWZvcmUsXG5xOmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgY29udGVudDogbm9uZTtcbn1cblxudGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuTnVjbGVvIE91dGxpbmUgV2ViIEZvbnQgLSBudWNsZW9hcHAuY29tL1xuTGljZW5zZSAtIG51Y2xlb2FwcC5jb20vbGljZW5zZS9cbkNyZWF0ZWQgdXNpbmcgSWNvTW9vbiAtIGljb21vb24uaW9cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByaW1hcnkgc3R5bGVcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cbiosXG4qOjphZnRlcixcbio6OmJlZm9yZSB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbi5udWNsZW8taWNvbnMtc3R5bGUge1xuICBmb250LXNpemU6IDYyLjUlO1xufVxuXG4ubnVjbGVvLWljb25zLXN0eWxlIHtcbiAgZm9udC1zaXplOiAxLjZyZW07XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xuICBjb2xvcjogIzMzMzMzMztcbiAgYmFja2dyb3VuZDogI2VmZWZlZjtcbn1cblxuYSB7XG4gIGNvbG9yOiAjNzY2YWNmO1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbk1haW4gY29tcG9uZW50c1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuaGVhZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAxMjBweCAwIDA7XG59XG5cbmhlYWRlciBoMSB7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuXG5oZWFkZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC45cmVtO1xuICBtYXJnaW4tdG9wOiAwLjZlbTtcbn1cblxuaGVhZGVyIGE6aG92ZXIge1xuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuc2VjdGlvbiB7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogMTIwMHB4O1xuICBtYXJnaW46IDUwcHggYXV0bztcbn1cblxuc2VjdGlvbiBoMiB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTJlMmUyO1xuICBwYWRkaW5nOiAwIDAgMWVtIDAuMmVtO1xuICBtYXJnaW4tYm90dG9tOiAxZW07XG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxudWw6OmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGRpc3BsYXk6IHRhYmxlO1xufVxuXG51bCBsaSB7XG4gIHdpZHRoOiAyNSU7XG4gIGZsb2F0OiBsZWZ0O1xuICBwYWRkaW5nOiAxNnB4IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICAtd2Via2l0LXRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLW1vei10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuMnM7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMC4ycztcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxudWwgbGk6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjZGJkYmRiO1xufVxuXG51bCBwLFxudWwgZW0sXG51bCBpbnB1dCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC1zaXplOiAwLjdyZW07XG4gIGNvbG9yOiAjOTk5OTk5O1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBhdXRvO1xuICAtbW96LXVzZXItc2VsZWN0OiBhdXRvO1xuICAtbXMtdXNlci1zZWxlY3Q6IGF1dG87XG4gIHVzZXItc2VsZWN0OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB3aWR0aDogMTAwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxudWwgcCB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbnVsIHA6OnNlbGVjdGlvbixcbnVsIGVtOjpzZWxlY3Rpb24ge1xuICBiYWNrZ3JvdW5kOiAjNzY2YWNmO1xuICBjb2xvcjogI2VmZWZlZjtcbn1cblxudWwgZW0ge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbnVsIGVtOjpiZWZvcmUge1xuICBjb250ZW50OiBcIltcIjtcbn1cblxudWwgZW06OmFmdGVyIHtcbiAgY29udGVudDogXCJdXCI7XG59XG5cbnVsIGlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBub25lO1xuICBib3gtc2hhZG93OiBub25lO1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIHVsIGxpIHtcbiAgICB3aWR0aDogMjAlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEwMjRweCkge1xuICB1bCBsaSB7XG4gICAgd2lkdGg6IDEyLjUlO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIHBhZGRpbmc6IDMycHggMDtcbiAgfVxufVxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuU21hcnQgZml4ZWQgbmF2aWdhdGlvblxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuI2NkLW5hdiB1bCB7XG4gIC8qIG1vYmlsZSBmaXJzdCAqL1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiA5MCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIG1heC1oZWlnaHQ6IDkwJTtcbiAgcmlnaHQ6IDUlO1xuICBib3R0b206IDUlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1ZW07XG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLyogcmVtb3ZlIG92ZXJmbG93OmhpZGRlbiBpZiB5b3Ugd2FudCB0byBjcmVhdGUgYSBkcm9wLWRvd24gbWVudSAtIGJ1dCB0aGVuIHJlbWVtYmVyIHRvIGZpeC9lbGltaW5hdGUgdGhlIGxpc3QgaXRlbXMgYW5pbWF0aW9uICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG92ZXJmbG93LXk6IGF1dG87XG4gIHotaW5kZXg6IDE7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgLW1vei10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDEwMCU7XG4gIC1vLXRyYW5zZm9ybS1vcmlnaW46IDEwMCUgMTAwJTtcbiAgdHJhbnNmb3JtLW9yaWdpbjogMTAwJSAxMDAlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMC4zcztcbiAgLW1vei10cmFuc2l0aW9uOiAtbW96LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDAuM3M7XG59XG5cbiNjZC1uYXYgdWwgbGkge1xuICAvKiBGb3JjZSBIYXJkd2FyZSBBY2NlbGVyYXRpb24gaW4gV2ViS2l0ICovXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMTAwJTtcbiAgcGFkZGluZzogMDtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuI2NkLW5hdiB1bCBsaTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG59XG5cbiNjZC1uYXYgdWwuaXMtdmlzaWJsZSB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIHZpc2liaWxpdHkgMHMgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCB2aXNpYmlsaXR5IDBzIDBzO1xufVxuXG4jY2QtbmF2IGxpIGEge1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMWVtO1xuICBmb250LXNpemU6IDEuMnJlbTtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmYyZjY7XG59XG5cbiNjZC1uYXYgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xufVxuXG4jY2QtbmF2IGxpOmxhc3QtY2hpbGQgYSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgYm90dG9tOiA1JTtcbiAgcmlnaHQ6IDUlO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNWVtO1xuICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG4gIC8qIGltYWdlIHJlcGxhY2VtZW50ICovXG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRleHQtaW5kZW50OiAxMDAlO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICB6LWluZGV4OiAyO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3BhbiB7XG4gIC8qIHRoZSBzcGFuIGVsZW1lbnQgaXMgdXNlZCB0byBjcmVhdGUgdGhlIG1lbnUgaWNvbiAqL1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAycHg7XG4gIGJhY2tncm91bmQ6ICMzMzMzMzM7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tdG9wOiAtMXB4O1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbi1sZWZ0OiAtMTBweDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG4gIC1tb3otdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzO1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kIDAuM3M7XG59XG5cbi5jZC1uYXYtdHJpZ2dlciBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC8qIEZvcmNlIEhhcmR3YXJlIEFjY2VsZXJhdGlvbiBpbiBXZWJLaXQgKi9cbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIC1tb3otdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xuICAtbW96LXRyYW5zaXRpb246IC1tb3otdHJhbnNmb3JtIDAuM3MsIGJhY2tncm91bmQgMHM7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBiYWNrZ3JvdW5kIDBzO1xufVxuXG4uY2QtbmF2LXRyaWdnZXIgc3Bhbjo6YmVmb3JlIHtcbiAgdG9wOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyIHNwYW46OmFmdGVyIHtcbiAgYm90dG9tOiAtNnB4O1xuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDApO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMCk7XG4gIC1vLXRyYW5zZm9ybTogcm90YXRlKDApO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5jZC1uYXYtdHJpZ2dlci5tZW51LWlzLW9wZW4gc3BhbiB7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjMyLCA3NCwgMTAwLCAwKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUsXG4uY2QtbmF2LXRyaWdnZXIubWVudS1pcy1vcGVuIHNwYW46OmFmdGVyIHtcbiAgYmFja2dyb3VuZDogIzMzMzMzMztcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjpiZWZvcmUge1xuICB0b3A6IDA7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW1vei10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpO1xuICAtbXMtdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgLW8tdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbiAgdHJhbnNmb3JtOiByb3RhdGUoMTM1ZGVnKTtcbn1cblxuLmNkLW5hdi10cmlnZ2VyLm1lbnUtaXMtb3BlbiBzcGFuOjphZnRlciB7XG4gIGJvdHRvbTogMDtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtbW96LXRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XG4gIC1tcy10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICAtby10cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgyMjVkZWcpO1xufVxuXG4ubm93LXVpLWljb25zIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250OiBub3JtYWwgbm9ybWFsIG5vcm1hbCAzMnB4LzEgXCJOdWNsZW8gT3V0bGluZVwiO1xuICBzcGVhazogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/nucleoicons/nucleoicons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/nucleoicons/nucleoicons.component.ts ***!
  \*****************************************************************/
/*! exports provided: NucleoiconsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NucleoiconsComponent", function() { return NucleoiconsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var NucleoiconsComponent = /** @class */ (function () {
    function NucleoiconsComponent(element) {
        this.element = element;
    }
    NucleoiconsComponent.prototype.ngOnInit = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
        navbar.classList.remove('navbar-transparent');
    };
    NucleoiconsComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('app-navbar')[0].children[0];
    };
    NucleoiconsComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NucleoiconsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nucleoicons',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nucleoicons.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/nucleoicons/nucleoicons.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nucleoicons.component.scss */ "./src/app/components/nucleoicons/nucleoicons.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NucleoiconsComponent);
    return NucleoiconsComponent;
}());



/***/ }),

/***/ "./src/app/components/typography/typography.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/components/typography/typography.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdHlwb2dyYXBoeS90eXBvZ3JhcGh5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/typography/typography.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/typography/typography.component.ts ***!
  \***************************************************************/
/*! exports provided: TypographyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyComponent", function() { return TypographyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var TypographyComponent = /** @class */ (function () {
    function TypographyComponent() {
    }
    TypographyComponent.prototype.ngOnInit = function () { };
    TypographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-typography',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./typography.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/typography/typography.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./typography.component.scss */ "./src/app/components/typography/typography.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], TypographyComponent);
    return TypographyComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.component.scss":
/*!**************************************************!*\
  !*** ./src/app/examples/examples.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2V4YW1wbGVzLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/examples.component.ts":
/*!************************************************!*\
  !*** ./src/app/examples/examples.component.ts ***!
  \************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var ExamplesComponent = /** @class */ (function () {
    function ExamplesComponent() {
    }
    ExamplesComponent.prototype.ngOnInit = function () {
    };
    ExamplesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-examples',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./examples.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/examples.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./examples.component.scss */ "./src/app/examples/examples.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ExamplesComponent);
    return ExamplesComponent;
}());



/***/ }),

/***/ "./src/app/examples/examples.module.ts":
/*!*********************************************!*\
  !*** ./src/app/examples/examples.module.ts ***!
  \*********************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/src/ng2-nouislider.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @agm/core */ "./node_modules/@agm/core/__ivy_ngcc__/fesm5/agm-core.js");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing/landing.component */ "./src/app/examples/landing/landing.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/examples/login/login.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/examples/profile/profile.component.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./examples.component */ "./src/app/examples/examples.component.ts");












var ExamplesModule = /** @class */ (function () {
    function ExamplesModule() {
    }
    ExamplesModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_6__["JwBootstrapSwitchNg2Module"],
                _agm_core__WEBPACK_IMPORTED_MODULE_7__["AgmCoreModule"].forRoot({
                    apiKey: 'YOUR_KEY_HERE'
                })
            ],
            declarations: [
                _landing_landing_component__WEBPACK_IMPORTED_MODULE_8__["LandingComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _examples_component__WEBPACK_IMPORTED_MODULE_11__["ExamplesComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
            ]
        })
    ], ExamplesModule);
    return ExamplesModule;
}());



/***/ }),

/***/ "./src/app/examples/landing/landing.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/landing/landing.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xhbmRpbmcvbGFuZGluZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/landing/landing.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/landing/landing.component.ts ***!
  \*******************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var LandingComponent = /** @class */ (function () {
    function LandingComponent() {
        this.data = new Date();
    }
    LandingComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LandingComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LandingComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-landing',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./landing.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/landing/landing.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./landing.component.scss */ "./src/app/examples/landing/landing.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "./src/app/examples/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/examples/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/examples/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/examples/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
        this.data = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('login-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/examples/login/login.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/examples/profile/profile.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/examples/profile/profile.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V4YW1wbGVzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/examples/profile/profile.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/examples/profile/profile.component.ts ***!
  \*******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
        this.zoom = 14;
        this.lat = 44.445248;
        this.lng = 26.099672;
        this.styles = [{ "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#e9e9e9" }, { "lightness": 17 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 20 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#ffffff" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#ffffff" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#ffffff" }, { "lightness": 16 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#f5f5f5" }, { "lightness": 21 }] }, { "featureType": "poi.park", "elementType": "geometry", "stylers": [{ "color": "#dedede" }, { "lightness": 21 }] }, { "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#ffffff" }, { "lightness": 16 }] }, { "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#333333" }, { "lightness": 40 }] }, { "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#f2f2f2" }, { "lightness": 19 }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#fefefe" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#fefefe" }, { "lightness": 17 }, { "weight": 1.2 }] }];
        this.data = new Date();
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ProfileComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('profile-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/examples/profile/profile.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/examples/profile/profile.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/pages/categorias/categorias.component.css":
/*!***********************************************************!*\
  !*** ./src/app/pages/categorias/categorias.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NhdGVnb3JpYXMvY2F0ZWdvcmlhcy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/categorias/categorias.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/pages/categorias/categorias.component.ts ***!
  \**********************************************************/
/*! exports provided: CategoriasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriasComponent", function() { return CategoriasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");






var CategoriasComponent = /** @class */ (function () {
    function CategoriasComponent(restApi, _sanitizer, router) {
        this.restApi = restApi;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.data = new Date();
        this.products = [];
        this.prodTypes = [];
    }
    CategoriasComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        this.restApi.getAllProducts().subscribe(function (data) {
            _this.products = [];
            for (var i = 0; i < data['Items'].length; i++) {
                _this.products.push({
                    "type": data['Items'][i]["product_type"]["S"],
                    "model": data['Items'][i]["product_model"]["S"],
                    "img": data['Items'][i]["product_img"]["L"],
                    "desc": data['Items'][i]["product_desc"]["S"],
                    "name": data['Items'][i]["product_name"]["S"]
                });
                // this._sanitizer.bypassSecurityTrustUrl()
                var validator = _this.prodTypes.find(function (element) { return element.name == _this.products[i].type; });
                if ((validator == null || undefined)) {
                    if (_this.products[i].type == "REMOLQUES") {
                        if (_this.products[i].model == "2CBR305B-VH")
                            _this.prodTypes.push({
                                "name": _this.products[i].type,
                                "img": _this.products[i].img[0]["S"]
                                // "description":this.assignDescription(this.products[i].type)
                            });
                    }
                    else {
                        _this.prodTypes.push({
                            "name": _this.products[i].type,
                            "img": _this.products[i].img[0]["S"]
                            // "description":this.assignDescription(this.products[i].type)
                        });
                    }
                }
                else if (validator.img.includes("samsung")) {
                    _this.prodTypes.forEach(function (element) {
                        if (element.name == validator.name) {
                            element.img = _this.products[i].img[0]["S"];
                        }
                    });
                }
            }
            _this.prodTypes = _this.prodTypes.sort(_this.compare);
        });
    };
    CategoriasComponent.prototype.goToProductDetails = function (cat) {
        this.router.navigate(['/productos', cat]);
    };
    CategoriasComponent.prototype.assignDescription = function (type) {
        switch (type) {
            case "":
                break;
        }
    };
    CategoriasComponent.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var bandA = a.name.toUpperCase();
        var bandB = b.name.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    CategoriasComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    CategoriasComponent.ctorParameters = function () { return [
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
    ]; };
    CategoriasComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-categorias',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./categorias.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/categorias/categorias.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./categorias.component.css */ "./src/app/pages/categorias/categorias.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], CategoriasComponent);
    return CategoriasComponent;
}());



/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3RvL2NvbnRhY3RvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/contacto/contacto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/contacto/contacto.component.ts ***!
  \******************************************************/
/*! exports provided: ContactoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoComponent", function() { return ContactoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var ContactoComponent = /** @class */ (function () {
    function ContactoComponent() {
        this.data = new Date();
    }
    ContactoComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    ContactoComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    ContactoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contacto',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contacto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contacto/contacto.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contacto.component.css */ "./src/app/pages/contacto/contacto.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], ContactoComponent);
    return ContactoComponent;
}());



/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/inicio/inicio.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/inicio/inicio.component.ts ***!
  \**************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_4__);





var InicioComponent = /** @class */ (function () {
    function InicioComponent(router, renderer, config) {
        this.router = router;
        this.renderer = renderer;
        this.data = new Date();
        this.page = 4;
        this.page1 = 5;
        this.page2 = 3;
        this.isCollapsed = true;
        this.isCollapsed1 = true;
        this.isCollapsed2 = true;
        this.state_icon_primary = true;
        config.closeOthers = true;
        config.type = 'info';
    }
    InicioComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    InicioComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    InicioComponent.prototype.goToContact = function () {
        this.router.navigate(['/contacto']);
    };
    InicioComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_4__('.rellax-header');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('index-page');
    };
    InicioComponent.prototype.ngOnDestroy = function () {
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('index-page');
    };
    InicioComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"] }
    ]; };
    InicioComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./inicio.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/inicio/inicio.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./inicio.component.css */ "./src/app/pages/inicio/inicio.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbAccordionConfig"]])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vc290cm9zL25vc290cm9zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/nosotros/nosotros.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/nosotros/nosotros.component.ts ***!
  \******************************************************/
/*! exports provided: NosotrosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NosotrosComponent", function() { return NosotrosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rellax */ "./node_modules/rellax/rellax.js");
/* harmony import */ var rellax__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rellax__WEBPACK_IMPORTED_MODULE_2__);



var NosotrosComponent = /** @class */ (function () {
    function NosotrosComponent() {
        this.data = new Date();
    }
    NosotrosComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
        var rellaxHeader = new rellax__WEBPACK_IMPORTED_MODULE_2__('.rellax-header');
        var body = document.getElementsByTagName('body')[0];
        body.classList.add('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.add('navbar-transparent');
    };
    NosotrosComponent.prototype.ngOnDestroy = function () {
        var body = document.getElementsByTagName('body')[0];
        body.classList.remove('landing-page');
        var navbar = document.getElementsByTagName('nav')[0];
        navbar.classList.remove('navbar-transparent');
    };
    NosotrosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-nosotros',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./nosotros.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/nosotros/nosotros.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./nosotros.component.css */ "./src/app/pages/nosotros/nosotros.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], NosotrosComponent);
    return NosotrosComponent;
}());



/***/ }),

/***/ "./src/app/pages/producto/producto.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/producto/producto.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3RvL3Byb2R1Y3RvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/producto/producto.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/producto/producto.component.ts ***!
  \******************************************************/
/*! exports provided: ProductoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductoComponent", function() { return ProductoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../assets/CategoryDescription.json */ "./src/assets/CategoryDescription.json");
var _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/CategoryDescription.json */ "./src/assets/CategoryDescription.json", 1);







var ProductoComponent = /** @class */ (function () {
    function ProductoComponent(route, restApi, _sanitizer, router) {
        this.route = route;
        this.restApi = restApi;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.producto = {};
        this.productsWithoutCurrent = [];
        this.product_type = "";
        this.currentProd = {};
        this.currentImage = 0;
        this.product_mode_type = "";
        this.model_type_description = "";
        this.specs = [{ spec: "", unit: "", value: [{ key: '', val: '' }] }];
    }
    ProductoComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['id']; // (+) converts string 'id' to a number
            _this.restApi.getProductByModel(_this.id).subscribe(function (data) {
                _this.producto = data["Item"];
                // this.producto["product_img"] = this.producto["product_img"][0]!="h"?this.producto["product_img"].substring(2):this.producto["product_img"]
                _this.specs = _this.producto["product_specs"] != undefined ? _this.producto["product_specs"] : [{ spec: "", unit: "", value: [{ key: '', val: '' }] }];
                console.log(_this.specs);
                _this.product_type = _this.producto["product_type"];
                _this.product_mode_type = _this.producto["product_model_type"];
                _this.currentImage = _this.producto["product_img"][0];
                switch (_this.product_mode_type) {
                    case "ACAMADORA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__.Acamadora;
                        break;
                    case "ACOLCHADORA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__.Acolchonadora;
                        break;
                    case "COMEDEROS":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__.Comederos;
                        break;
                    case "CUCHILLA TERRACERA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Cuchillas Terraceras"];
                        break;
                    case "CULTIVADORAS AJUSTABLES":
                        _this.model_type_description = "N/A";
                        break;
                    case "CULTIVADORAS ROTATIVAS":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Cultivadoras Rotativas de Discos Dentados o arañas"];
                        break;
                    case "NIVELADORAS HIDRÁULICAS":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Niveladoras Hidráulicas"];
                        break;
                    case "PLUMAS":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Plumas de Levante Hidráulicas"];
                        break;
                    case "PRENSA GANADERA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Prensa Ganadera"];
                        break;
                    case "REMOLQUES CAMA ALTA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Remolques Cama Alta"];
                        break;
                    case "REMOLQUES CAMA BAJA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Remolques Cama Baja"];
                        break;
                    case "REMOLQUES CON TANQUE NODRIZA":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Remolque con Tanque Nodriza"];
                        break;
                    case "REMOLQUES GANADEROS":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Remolques Ganaderos"];
                        break;
                    case "ZANJEADORES ":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Zanjeadores Fijos"];
                        break;
                    case "ZANJEADORES TELESCOPICO":
                        _this.model_type_description = _assets_CategoryDescription_json__WEBPACK_IMPORTED_MODULE_5__["Zanjeadores Telescópicos"];
                        break;
                }
            });
            // In a real app: dispatch action to load the details here.
        });
    };
    ProductoComponent.prototype.changeCurrentImage = function (index) {
        this.currentImage = index;
    };
    ProductoComponent.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var bandA = a.name.toUpperCase();
        var bandB = b.name.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    ProductoComponent.prototype.goToProductDetails = function () {
        this.router.navigate(['/productos/' + this.product_type]);
    };
    ProductoComponent.prototype.goToProducto = function () {
    };
    ProductoComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-producto',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./producto.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/producto/producto.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./producto.component.css */ "./src/app/pages/producto/producto.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductoComponent);
    return ProductoComponent;
}());



/***/ }),

/***/ "./src/app/pages/productos/productos.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/productos/productos.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/productos/productos.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/productos/productos.component.ts ***!
  \********************************************************/
/*! exports provided: ProductosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductosComponent", function() { return ProductosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _services_products_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/products.service */ "./src/app/services/products.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");






var ProductosComponent = /** @class */ (function () {
    function ProductosComponent(route, restApi, _sanitizer, router) {
        this.route = route;
        this.restApi = restApi;
        this._sanitizer = _sanitizer;
        this.router = router;
        this.products = [];
        this.modelTypes = [];
        this.currentProd = {};
    }
    ;
    ProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scroll(0, 0);
        this.sub = this.route.params.subscribe(function (params) {
            _this.id = params['cat']; // (+) converts string 'id' to a number
            _this.restApi.getAllProducts().subscribe(function (data) {
                _this.products = [];
                _this.modelTypes = [];
                for (var i = 0; i < data['Items'].length; i++) {
                    if (data['Items'][i]["product_type"]["S"] == _this.id) {
                        _this.products.push({
                            "type": data['Items'][i]["product_type"]["S"],
                            "model": data['Items'][i]["product_model"]["S"],
                            "img": data['Items'][i]["product_img"]["L"],
                            "desc": data['Items'][i]["product_desc"]["S"],
                            "modelType": data['Items'][i]["product_model_type"]["S"],
                            "name": data['Items'][i]["product_name"]["S"]
                        });
                    }
                }
                _this.products.forEach(function (item) {
                    var validator = _this.modelTypes.find(function (element) { return element.name == item.modelType; });
                    if (validator == null || undefined) {
                        _this.modelTypes.push({
                            "name": item.modelType,
                            "prods": _this.products.filter(function (i) { return item.modelType == i.modelType; })
                        });
                    }
                });
                _this.products = _this.products.sort(_this.compare);
                _this.currentProd = _this.products[0];
            });
            // In a real app: dispatch action to load the details here.
        });
    };
    ProductosComponent.prototype.compare = function (a, b) {
        // Use toUpperCase() to ignore character casing
        var bandA = a.name.toUpperCase();
        var bandB = b.name.toUpperCase();
        var comparison = 0;
        if (bandA > bandB) {
            comparison = 1;
        }
        else if (bandA < bandB) {
            comparison = -1;
        }
        return comparison;
    };
    ProductosComponent.prototype.selectCurrentProd = function (model) {
        this.router.navigate(['/producto', model]);
    };
    ProductosComponent.prototype.goToProductDetails = function () {
        this.router.navigate(['/categorias']);
        window.scroll(0, 0);
        this.goToProducto();
    };
    ProductosComponent.prototype.goToProducto = function () {
    };
    ProductosComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ProductosComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-productos',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./productos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/productos/productos.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./productos.component.css */ "./src/app/pages/productos/productos.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services_products_service__WEBPACK_IMPORTED_MODULE_3__["ProductsService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProductosComponent);
    return ProductosComponent;
}());



/***/ }),

/***/ "./src/app/services/products.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/products.service.ts ***!
  \**********************************************/
/*! exports provided: ProductsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsService", function() { return ProductsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");



var ProductsService = /** @class */ (function () {
    function ProductsService(http) {
        this.http = http;
    }
    ProductsService.prototype.getAllProducts = function () {
        return this.http.get('https://i8z1xzz9cf.execute-api.us-east-1.amazonaws.com/Development/get-all-products');
    };
    ProductsService.prototype.getProductByModel = function (model) {
        var body = {
            model: model
        };
        return this.http.post('https://i8z1xzz9cf.execute-api.us-east-1.amazonaws.com/Development/get-product-by-model', body);
    };
    ProductsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    ProductsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ProductsService);
    return ProductsService;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location, element) {
        this.location = location;
        this.element = element;
        this.sidebarVisible = false;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var navbar = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggler')[0];
    };
    NavbarComponent.prototype.sidebarOpen = function () {
        var toggleButton = this.toggleButton;
        var html = document.getElementsByTagName('html')[0];
        setTimeout(function () {
            toggleButton.classList.add('toggled');
        }, 500);
        html.classList.add('nav-open');
        this.sidebarVisible = true;
    };
    ;
    NavbarComponent.prototype.sidebarClose = function () {
        var html = document.getElementsByTagName('html')[0];
        // console.log(html);
        this.toggleButton.classList.remove('toggled');
        this.sidebarVisible = false;
        html.classList.remove('nav-open');
    };
    ;
    NavbarComponent.prototype.sidebarToggle = function () {
        // const toggleButton = this.toggleButton;
        // const body = document.getElementsByTagName('body')[0];
        if (this.sidebarVisible === false) {
            this.sidebarOpen();
        }
        else {
            this.sidebarClose();
        }
    };
    ;
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '/documentation') {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }
    ]; };
    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/assets/CategoryDescription.json":
/*!*********************************************!*\
  !*** ./src/assets/CategoryDescription.json ***!
  \*********************************************/
/*! exports provided: Acamadora, Acolchonadora, Comederos, Cuchillas Terraceras, Cultivadoras Rotativas de Discos Dentados o arañas, Multicultivadores, Subsuelos, Niveladoras Hidráulicas, Plumas de Levante Mecánicas, Plumas de Levante Hidráulicas, Prensa Ganadera, Remolques Cama Baja, Remolques Cama Alta, Remolques Ganaderos, Remolques de Volteo Hidráulico, Remolques Cuello de Ganso, Remolque con Tanque Nodriza, Zanjeadores Fijos, Zanjeadores Telescópicos, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Acamadora\":\"Está herramienta nos permite formar camas de diferentes tamaños o surcos para sembrar y/o forrarlos de plástico, puede acondicionarse un fertilizador granulado.\",\"Acolchonadora\":\"Es muy útil para forrar los surcos de plástico y colocar la cintilla de goteo. Con esta herramienta se obtienen mejores cosechas y disminución de gastos en herbicidas y nutrientes.\",\"Comederos\":\"Contenedor ideal metálico con separadores para alimentar ganado bovino, evitando desperdicios de alimento.\",\"Cuchillas Terraceras\":\"Herramienta acondicionada para la limpieza de corrales, zanjas y caminos.\",\"Cultivadoras Rotativas de Discos Dentados o arañas\":\"Son herramientas muy útiles que permiten quitar malezas en los primeros meses de la siembra, evitando así el uso de herbicidas.\",\"Multicultivadores\":\"Esta herramienta nos permite arar la tierra dando un resultado excelente para aflojarla y además cuando existen residuos de cosechas anteriores se entrepajan.\",\"Subsuelos\":\"Ideal para aflojar terrenos y prepararlos para que el trabajo de rastra sea más eficiente.\",\"Niveladoras Hidráulicas\":\"Ideal para la nivelación de terrenos, evitando encharcamientos o abultamientos, útil para nivelar caminos.\",\"Plumas de Levante Mecánicas\":\"Pluma de levante que se acopa con enganche a tres puntos al tractor para auxiliar en el levantamiento de cargas.\",\"Plumas de Levante Hidráulicas\":\"Las plumas hidráulicas tienen mayor alcance para realizar cargas o descargas con un cilindro hidráulico que le permite obtener mayores elevaciones.\",\"Prensa Ganadera\":\"Herramienta utilizada para el manejo de ganado bovino, palpar, herrar, vacunar, descornar o cualquier otro manejo que se requiera.\",\"Remolques Cama Baja\":\"Los remolque tipo cama baja son utilizados como medio de trasportación para todo tipo de carga con capacidades desde los 800 kg. hasta 9,000 kg. una excelente herramienta de carga.\",\"Remolques Cama Alta\":\"Los remolques tipos cama alta se caracterizan por tener plataformas más anchas para transportar mayores volúmenes o equipos de dimensiones más anchas hasta un máximo de 2.40 metros.\",\"Remolques Ganaderos\":\"Los remolques ganaderos son excelentes para la transportación de ganado, se caracterizan por mantener un traslado seguro sin estropear el ganado.\",\"Remolques de Volteo Hidráulico\":\"Los remolques de volteo hidráulico son muy útiles, ya que evitan el uso de personal para descargarlos, teniendo ahorros por mano de obra y por su ángulo de descarga permite un vaciado rápido.\",\"Remolques Cuello de Ganso\":\"El remolque tipo cuello de ganso es un remolque que permite una mayor estabilidad y un mejor manejo.\",\"Remolque con Tanque Nodriza\":\"Los remolques con tanque nodriza son demasiado útiles para cubrir las necesidades de agua, para abrevaderos en el momento de requerir agua y/o para las aspersoras en el campo o para transportar diesel para maquinaria.\",\"Zanjeadores Fijos\":\"Los zanjeadores fijos son una excelente herramienta para limpiar canales, hacer zanjas, canaletas de desagüe o riego.\",\"Zanjeadores Telescópicos\":\"Los zanjeadores telescópicos al igual que los fijos son muy útiles para hacer zanjas o limpiarlas, con la ventaja adicional que puede variar su profundidad para realizar zanjas con mayor profundidad.\"}");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");

/*!

=========================================================
* Now UI Kit Angular - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/now-ui-kit-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/now-ui-kit-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Stuff\GsCore\IMT\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map