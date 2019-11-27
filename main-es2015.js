(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<body>\n    <div class=\"container-fluid\">\n        <app-header></app-header>\n        <img src=\"assets/infoLogo.png\">\n        <div class=\"main\"><router-outlet></router-outlet></div>\n\n       <div class=\"footer\"><app-footer></app-footer></div>\n    </div>\n</body>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbars/footer/footer.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbars/footer/footer.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\" text-center footer\">\n    <div class=\"card-header\">\n      Copyright © 2020 | Bowen Srbija\n    </div>\n    <div class=\"row \">\n\n    <div class=\"col-lg-3\">\n\n      <!--<ul class=\"list-group list-group-flush\">\n        <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\"\n        ngbPopover=\"Gračanička 9, Beograd\" >\n        Adresa\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\"\n        ngbPopover=\"064 142 8558\">\n        Telefon\n        </button>\n        <button type=\"button\" class=\"btn btn-outline-secondary mr-2\" placement=\"right\"\n        ngbPopover=\"PON - PET: 8:30h - 21h | SUB: 11h - 21h\">\n        Radno vreme\n        </button>\n      </ul>-->\n\n      <ul >\n        <li class=\"contact-footer\"><h1>Kontakt podaci</h1></li>\n        <li class=\"contact-footer\">\n          <h2>Broj telefona:</h2>\n          <p>0600149949</p>\n      </li>\n        <li class=\"contact-footer\">\n          <h2>Email:</h2>\n          <p>bowen@gmail.com</p>\n      </li>\n<br>\n\n      <div align=\"left\">\n        <i class=\"fas fa-user fa-2x\" routerLink=\"/login\"></i>\n      </div>\n    </ul>\n      <br>\n<br>\n    </div>\n\n    <div class=\"col-lg-6\">\n\n    </div>\n    </div>\n  </div>\n\n\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbars/header/header.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbars/header/header.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-sm-3 info\">\n    <br>\n    <br>\n    <p class=\"icon-floating icon-floating-bck\">  <i class=\"fas fa-phone\"></i></p>\n    <p>0600149949</p>\n  </div>\n  <div class=\"col-sm-6\">\n    <a  routerLink=\"/index\"><img class=\"logo-normal\" src=\"assets/logo.png\" alt=\"Hempak -logo\" class=\"logo\"></a>\n  </div>\n  <div class=\"col-sm-3 info\">\n    <br>\n    <br>\n    <a class=\"icon-floating icon-floating-bck\"> <i class=\"fas fa-envelope fa-2x\"></i></a>\n    <p>bowen@gmail.com</p>\n  </div>\n</div>\n\n<!--<nav class=\"navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark nav nav-pills flex-column flex-sm-row sticky-top\">\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarTogglerDemo01\"\n    aria-controls=\"navbarTogglerDemo01\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n      <a class=\"flex-sm-fill text-sm-center nav-link\" routerLinkActive=\"active\" routerLink=\"/index\">Active</a>\n      <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/seminari\" routerLinkActive=\"active\" >Longer nav</a>\n      <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/bowen-tehnika\" routerLinkActive=\"active\">Linkaaaaaa</a>\n      <a class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/novosti\" routerLinkActive=\"active\">Link</a>\n      <div ngbDropdown class=\"d-inline-block\">\n        <a ngbDropdownToggle class=\"flex-sm-fill text-sm-center nav-link\" routerLink=\"/seminari\" routerLinkActive=\"active\" id=\"dropdownBasic1\">Longer nav</a>\n\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <button ngbDropdownItem>Action - 1</button>\n          <button ngbDropdownItem>Another Action</button>\n          <button ngbDropdownItem>Something else is here</button>\n        </div>\n      </div>\n\n\n\n  </div>\n</nav>\n-->\n<nav\n  class=\"navbar navbar-expand-lg navbar-light sticky-top\" id=\"header\" #stickyActive >\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNavDropdown\"\n    aria-controls=\"navbarNavDropdown\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarTogglerDemo01\">\n    <div class=\"col-sm-1\">\n        <a  routerLink=\"/index\"><img width=\"10\" height=\"80\" src=\"assets/navLogo2.png\" alt=\"Hempak -logo\" class=\"nav-logo\" #navLogo ></a>\n    </div>\n    <div  class=\"col-sm-10\">\n    <ul class=\"nav nav-pills nav-fill mx-auto\" >\n      <li class=\"nav-item\" >\n        <a class=\"nav-link\" routerLinkActive=\"active\" routerLink=\"/index\">Naslovna</a>\n      </li>\n      <li ngbDropdown class=\"nav-item\" >\n        <a  class=\"nav-link\" routerLink= \"/bowen-tehnika\" routerLinkActive=\"active\" >Bowen tehnika</a>\n      </li>\n      <li ngbDropdown class=\"nav-item\" >\n        <a id=\"dropdownBasic1\" class=\"nav-link\" routerLinkActive=\"active\" ngbDropdownToggle >Bowen trening - Seminari</a>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <a ngbDropdownItem routerLink= \"/seminari/btaa\" >BTAA – Bowen Therapy Academy of Australia</a>\n          <a ngbDropdownItem routerLink= \"/seminari/obuka\">Obuka</a>\n          <a ngbDropdownItem routerLink= \"/seminari/nastavni-program\">Nastavni program</a>\n          <a ngbDropdownItem routerLink= \"/seminari/instruktori\">Instruktori</a>\n          <a ngbDropdownItem routerLink= \"/seminari/predstojeci-seminari\">Predstojeći seminari</a>\n        </div>\n      </li>\n      <li ngbDropdown class=\"nav-item\">\n        <a id=\"dropdownBasic1\" class=\"nav-link\" routerLink=\"/novosti\" routerLinkActive=\"active\" ngbDropdownToggle>Novosti i dešavanja</a>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <a ngbDropdownItem routerLink= \"/novosti/dogadjaji\">Događaji</a>\n          <a ngbDropdownItem routerLink= \"/novosti/publikacije\">Publikacije</a>\n          <a ngbDropdownItem routerLink= \"/novosti/video\">Video</a>\n          <a ngbDropdownItem routerLink= \"/novosti/galerija\">Galerija</a>\n        </div>\n      </li>\n      <!--. <li ngbDropdown class=\"nav-item\">\n        <a id=\"dropdownBasic1\" class=\"nav-link\" routerLink=\"/holisticki-centar\" routerLinkActive=\"active\" ngbDropdownToggle>Holistički centar</a>\n        <div ngbDropdownMenu aria-labelledby=\"dropdownBasic1\">\n          <a ngbDropdownItem>Bowen tretmani</a>\n         <a ngbDropdownItem>Bahove kapi</a>\n          <a ngbDropdownItem>Aqua detox</a>\n          <a ngbDropdownItem>Reiki</a>\n          <a ngbDropdownItem>Rejuvance</a>\n          <a ngbDropdownItem>Nameštanje atlasa – prvog vratnog pršljena</a>..\n        </div>\n      </li>-->\n      <li class=\"nav-item\">\n        <a  class=\"nav-link\" routerLink=\"/rejuvance\" routerLinkActive=\"active\" >Rejuvance</a>\n      </li>\n      <li ngbDropdown class=\"nav-item\">\n        <a  class=\"nav-link\" routerLink=\"/kontakt\" routerLinkActive=\"active\" >Kontakt</a>\n\n      </li>\n    </ul>\n    </div>\n    <div  class=\"col-sm-1 info\">\n          <span><i class=\"fab fa-facebook-square fa-2x\"></i></span>\n    </div>\n\n  </div>\n</nav>\n<div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/about-us.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isLoggedIn\">\n<div class=\"col-lg-4 form-container\">\n  <form class=\"card\" [formGroup]=\"quotesForm\" (ngSubmit)=\"onSubmit()\" >\n    <div class=\"form-body\">\n      <div class=\"form-header\">\n        <h2>Pišite nam:</h2>\n      </div>\n      <div class=\"form-group\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-1\">\n            <i class=\"fas fa-user fa-2x\"></i>\n          </div>\n          <input type=\"text\" class=\"form-control\" formControlName=\"id\" id=\"id\" placeholder=\"id\">\n          <div class=\"col-lg-11\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"content\" id=\"content\" placeholder=\"Vaše ime\">\n            <span class=\"help-block\" *ngIf=\"!quotesForm.get('content').valid && quotesForm.get('content').touched\" >Popunite polje za ime!</span>\n          </div>\n        </div>\n      </div>\n      <div class=\"submit-button\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!quotesForm.valid\" >Submit</button>\n      </div>\n\n    </div><input type=\"datetime-local\" name=\"bdaytime\">\n  </form>\n\n</div>\n\n<button (click)=\"onGetContent()\">Get Contnet</button>\n<div>\n\n    <app-quote *ngFor=\"let quote of quotes \" [quote]=\"quote\" (quoteDeleted)=\"onDeleted($event)\"> </app-quote>\n\n\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/team-members/team-members.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/about-us/team-members/team-members.component.html ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>team-members works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.html ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>appearance-treatment works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/bowen-technique.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/bowen-technique.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n    <div class=\"row\" (click)=\"isVisibleSection1 = !isVisibleSection1\">\n      <div class=\"col-lg-10\">\n        <p>Istorijat.</p>\n      </div>\n      <div class=\"col-lg-2 arrow\">\n        <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isVisibleSection1\"></i><i\n            class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isVisibleSection1\"></i></span>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"container card-body\" *ngIf=\"isVisibleSection1\" >\n\n      <img src=\"http://127.0.0.1:8000/storage/tom-bowen.jpg\" alt=\"...\" class=\"img-thumbnail rounded-circle\">\n      <h2>Bowen tehnika je dobila ime po svom osnivaču Tom Bowen-u, koji je počeo da je razvija pedesetih godina prošlog veka u Australiji.</h2>\n\n      <p>Rođen je u Australiji, u Brunsviku, predgradju Melburna. Bio je jedini sin, mada je porodica Bowen, koja je iz Britanije emigrirala u Australiju početkom dvadesetog veka, imala i dve ćerke, Viliamu i Noru, starije od Toma. Tom je želeo da uči medicinu, ali zbog slabog materijalnog stanja porodice nije imao tu mogućnost, već je kao i njegov otac postao stolar i zaposlio se u lokalnoj fabrici cementa.</p>\n      <h2>Iako bez formalnog medicinskog znanja, želja da pomogne drugima ga je vodila kroz život.</h2>\n   <p>\n    Učio kako da izvodi određene pokrete i tehnike od nadarenih praktičara, svojih savremenika, tokom 1920-ih i 1930-ih godina. Proučavao je metode komplementarne medicine i intuitivno primenjivao i integrisao ono što je smatrao da je najefikasnije. Pokreti koje je savladao i oni koje je sam izumeo, kasnije su pretočeni u ono što će postati Bowen Terapijska Tehnika.\n        <br>\n        <br>\n        Njegova supruga Džesi je imala astmu i zbog gušenja je često bila hospitalizovana. U želji da joj pomogne, Tom je počeo da primenjuje svoje znanje i Džesino zdravstveno stanje se popravljalo, te posle nekog vremena nije bilo potrebe za lekovima ili hospitalizacijom zahvaljujući njegovom metodu.\n        <br>\n        <br>\n        Takođe je pomagao i svojim kolegama na poslu. Svi su ubrzo shvatili da Tom ima svoj jedinstveni metod za pomoć svakom ko se povredi. Danju je još uvek radio kao stolar, dok je noću, kod kuće, lečio sve više ljudi koji su tražili pomoć za različite zdravstvene probleme.\n        <br>\n        <br>\n        Njegovi prijatelji Sten i Rene Horvud ubrzo su mu ponudili deo svoje kuće za ordinaciju, a Rene je prihvatila da mu bude sekretarica i vodi računa o svim praktičnim pitanjima.\n        <br>\n        <br>\n        To je bio početak životnog puta čoveka koji je svojim nesebičnim radom i energijom postao vrlo poštovan i cenjen.\n   <br>\n   <br>\n   Ubrzo je imao toliko klijenata, da je postalo očigledno da ne može ostati u privatnoj kući, pa se preselio na drugu lokaciju, a kasnije se opet preselio, pa je imao čitavu kliniku gde je obavljao oko 13 000 tretmana godišnje, što je čak potvrđeno 1975. godine od strane Ministarstva zdravlja.\n   <br>\n   <br>\n   U radu ga je prvenstveno vodila intuicija.Vremenom je razvijao i usavršavao svoju tehniku. Svoj metod je primenjivao ne samo na ljudima već i na životinjama koje su uzgajali farmeri.\n   <br>\n   <br>\n   Bio je intuitivna, jednostavna, skromna i radna osoba. Sam je izjavljivao da je njegov rad „Dar od Boga“.\n\n\n  </p>\n  </div>\n  <div class=\"card\">\n      <div class=\"row\" (click)=\"isVisibleSection2 = !isVisibleSection2\">\n        <div class=\"col-lg-10\">\n          <p>Šta je Bowen tehnika?</p>\n        </div>\n        <div class=\"col-lg-2 arrow\">\n          <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isVisibleSection2\"></i><i\n              class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isVisibleSection2\"></i></span>\n\n        </div>\n      </div>\n    </div>\n    <div class=\"card-body\" *ngIf=\"isVisibleSection2\" >\n\n    </div>\n\n    <div class=\"card\">\n        <div class=\"row\" (click)=\"isVisibleSection3 = !isVisibleSection3\">\n          <div class=\"col-lg-10\">\n            <p>Da li vam može pomoći?</p>\n          </div>\n          <div class=\"col-lg-2 arrow\">\n            <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isVisibleSection3\"></i><i\n                class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isVisibleSection3\"></i></span>\n\n          </div>\n        </div>\n      </div>\n      <div class=\"card-body\" *ngIf=\"isVisibleSection3\" >\n\n      </div>\n\n      <div class=\"card\">\n          <div class=\"row\" (click)=\"isVisibleSection4 = !isVisibleSection4\">\n            <div class=\"col-lg-10\">\n              <p>Kako izgleda tretman?</p>\n            </div>\n            <div class=\"col-lg-2 arrow\">\n              <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isVisibleSection4\"></i><i\n                  class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isVisibleSection4\"></i></span>\n\n            </div>\n          </div>\n        </div>\n        <div class=\"card-body\" *ngIf=\"isVisibleSection4\" >\n\n        </div>\n        <div class=\"card\">\n            <div class=\"row\" (click)=\"isVisibleSection5 = !isVisibleSection5\">\n              <div class=\"col-lg-10\">\n                <p>Kako deluje?</p>\n              </div>\n              <div class=\"col-lg-2 arrow\">\n                <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isVisibleSection5\"></i><i\n                    class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isVisibleSection5\"></i></span>\n\n              </div>\n            </div>\n          </div>\n          <div class=\"card-body\" *ngIf=\"isVisibleSection5\" >\n\n          </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>can-bowen-help works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/history/history.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/history/history.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n    <h1>Istorijat bowena</h1>\n    <hr>\n  <div class=\"row\" >\n\n      <img src=\"http://127.0.0.1:8000/storage/tom-bowen.jpg\" alt=\"...\" class=\"img-thumbnail rounded-circle\">\n      <h2>Bowen tehnika je dobila ime po svom osnivaču Tom Bowen-u, koji je počeo da je razvija pedesetih godina prošlog veka u Australiji.</h2>\n\n      <p>Rođen je u Australiji, u Brunsviku, predgradju Melburna. Bio je jedini sin, mada je porodica Bowen, koja je iz Britanije emigrirala u Australiju početkom dvadesetog veka, imala i dve ćerke, Viliamu i Noru, starije od Toma. Tom je želeo da uči medicinu, ali zbog slabog materijalnog stanja porodice nije imao tu mogućnost, već je kao i njegov otac postao stolar i zaposlio se u lokalnoj fabrici cementa.</p>\n      <h2>Iako bez formalnog medicinskog znanja, želja da pomogne drugima ga je vodila kroz život.</h2>\n   <p>\n    Učio kako da izvodi određene pokrete i tehnike od nadarenih praktičara, svojih savremenika, tokom 1920-ih i 1930-ih godina. Proučavao je metode komplementarne medicine i intuitivno primenjivao i integrisao ono što je smatrao da je najefikasnije. Pokreti koje je savladao i oni koje je sam izumeo, kasnije su pretočeni u ono što će postati Bowen Terapijska Tehnika.\n        <br>\n        <br>\n        Njegova supruga Džesi je imala astmu i zbog gušenja je često bila hospitalizovana. U želji da joj pomogne, Tom je počeo da primenjuje svoje znanje i Džesino zdravstveno stanje se popravljalo, te posle nekog vremena nije bilo potrebe za lekovima ili hospitalizacijom zahvaljujući njegovom metodu.\n        <br>\n        <br>\n        Takođe je pomagao i svojim kolegama na poslu. Svi su ubrzo shvatili da Tom ima svoj jedinstveni metod za pomoć svakom ko se povredi. Danju je još uvek radio kao stolar, dok je noću, kod kuće, lečio sve više ljudi koji su tražili pomoć za različite zdravstvene probleme.\n        <br>\n        <br>\n        Njegovi prijatelji Sten i Rene Horvud ubrzo su mu ponudili deo svoje kuće za ordinaciju, a Rene je prihvatila da mu bude sekretarica i vodi računa o svim praktičnim pitanjima.\n        <br>\n        <br>\n        To je bio početak životnog puta čoveka koji je svojim nesebičnim radom i energijom postao vrlo poštovan i cenjen.\n   <br>\n   <br>\n   Ubrzo je imao toliko klijenata, da je postalo očigledno da ne može ostati u privatnoj kući, pa se preselio na drugu lokaciju, a kasnije se opet preselio, pa je imao čitavu kliniku gde je obavljao oko 13 000 tretmana godišnje, što je čak potvrđeno 1975. godine od strane Ministarstva zdravlja.\n   <br>\n   <br>\n   U radu ga je prvenstveno vodila intuicija.Vremenom je razvijao i usavršavao svoju tehniku. Svoj metod je primenjivao ne samo na ljudima već i na životinjama koje su uzgajali farmeri.\n   <br>\n   <br>\n   Bio je intuitivna, jednostavna, skromna i radna osoba. Sam je izjavljivao da je njegov rad „Dar od Boga“.\n\n\n  </p>\n      </div>\n  </div>\n  <hr>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/how-it-works/how-it-works.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/how-it-works/how-it-works.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>how-it-works works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.html ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>what-is-bowen works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  \n  <div class=\"col-lg-12 form-container\">\n    <form class=\"card\" [formGroup]=\"contactForm\" (ngSubmit)=\"onSubmit()\" >\n      <div class=\"form-body\">\n        <div class=\"form-header\">\n          <h2>Pišite nam:</h2>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-1\">\n              <i class=\"fas fa-user fa-2x\"></i>\n            </div>\n            <div class=\"col-lg-11\">\n              <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"name\" placeholder=\"Vaše ime\">\n              <span class=\"help-block\" *ngIf=\"!contactForm.get('name').valid && contactForm.get('name').touched\" >Popunite polje za ime!</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-1\">\n              <i class=\"fas fa-envelope fa-2x\"></i>\n            </div>\n            <div class=\"col-lg-11\">\n              <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Vaš email\">\n              <span class=\"help-block\" *ngIf=\"!contactForm.get('email').valid && contactForm.get('email').touched\" >Popunite polje za email!</span>\n            </div>\n          </div>\n        </div>\n         <div class=\"form-group\">\n            <div class=\"row\">\n\n              <div class=\"col-lg-1\">\n                <i class=\"fas fa-tag fa-2x\"></i>\n              </div>\n              <div class=\"col-lg-11\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"Naslov\">\n              </div>\n            </div>\n          </div>\n        <div class=\"form-group\">\n          <div class=\"row\">\n            <div class=\"col-lg-1\">\n              <i class=\"fas fa-pencil-alt fa-2x\"></i>\n            </div>\n            <div class=\"col-lg-11\">\n              <textarea class=\"form-control\" formControlName=\"message\" id=\"message\" placeholder=\"Vaša poruka\"\n                rows=\"5\"></textarea>\n                <span class=\"help-block\" *ngIf=\"!contactForm.get('message').valid && contactForm.get('message').touched\" >Popunite polje za poruku!</span>\n            </div>\n          </div>\n        </div>\n        <div class=\"submit-button\">\n          <button type=\"submit\" class=\"btn btn-layout\" [disabled]=\"!contactForm.valid\" >Pošalji</button>\n        </div>\n\n      </div>\n      <div class=\"row contact-info\">\n      \n        <div class=\"col-lg-6\">\n            <a class=\"icon-floating icon-floating-bck\">  <i class=\"fas fa-phone fa-2x\"></i></a>\n          <p>0600149949</p>\n        </div>\n        <div class=\"col-lg-6\">\n            <a class=\"icon-floating icon-floating-bck\"> <i class=\"fas fa-envelope fa-2x\"></i></a>\n          <p>bowen@gmail.com</p>\n        </div>\n\n      </div>\n    </form>\n    \n  </div>\n  \n  <!--<div class=\"col-lg-8\">\n      <div class=\"div\">\n        <div class=\"card\">\n\n          <div class=\"form-body\">\n            <div class=\"form-header\">\n              <h2>Kontakt podaci:</h2>\n            </div>\n            <div class=\"map-responsive\">\n              <iframe\n                src=\"https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&q=Eiffel+Tower+Paris+France\"\n                width=\"600\" height=\"50\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n            </div>\n            <div class=\"row contact-info\">\n              <div class=\"col-lg-3\">\n               <a class=\"icon-floating icon-floating-bck\"><i class=\"fas fa-map-marker-alt fa-2x \"></i></a>\n                <p>Gračanička 9, Beograd</p>\n              </div>\n              <div class=\"col-lg-3\">\n                  <a class=\"icon-floating icon-floating-bck\">  <i class=\"fas fa-phone fa-2x\"></i></a>\n                <p>0643522524</p>\n              </div>\n              <div class=\"col-lg-3\">\n                  <a class=\"icon-floating icon-floating-bck\"> <i class=\"far fa-clock fa-2x\"></i></a>\n                <p>PON - PET: 8:30h - 21h | SUB: 11h - 21h</p>\n              </div>\n              <div class=\"col-lg-3\">\n                  <a class=\"icon-floating icon-floating-bck\"> <i class=\"fas fa-envelope fa-2x\"></i></a>\n                <p>bowen@gmail.com</p>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n  </div>-->\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>aqua-detox works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/atlas/atlas.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/atlas/atlas.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>atlas works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.html ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>bahov-drops works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/holistic-center.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/holistic-center.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>holistic-center works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/reiki/reiki.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/reiki/reiki.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>reiki works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/treatments/treatments.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/holistic-center/treatments/treatments.component.html ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>treatments works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/index/index.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <br>\n</div>\n<div class=\"slider\">\n<ngb-carousel *ngIf=\"images\">\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[0]\" alt=\"Random first slide\">\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>First slide label</h3>\n      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[1]\" alt=\"Random second slide\">\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>Second slide label</h3>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n    </div>\n  </ng-template>\n  <ng-template ngbSlide>\n    <div class=\"picsum-img-wrapper\">\n      <img [src]=\"images[2]\" alt=\"Random third slide\">\n    </div>\n    <div class=\"carousel-caption\">\n      <h3>Third slide label</h3>\n      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n    </div>\n  </ng-template>\n</ngb-carousel>\n</div>\n<br>\n<div class=\"row\">\n    <div class=\"col-sm-3 col-md-3\">\n        <br>\n        <div class=\"card\" >\n            <img src=\"https://picsum.photos/2000/1000\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n          </div>\n    </div>\n    <div class=\"col-sm-3 col-md-3\">\n        <br>\n        <div class=\"card\">\n            <img src=\"https://picsum.photos/2000/1000\" class=\"card-img-top\" alt=\"...\">\n            <div class=\"card-body\">\n              <h5 class=\"card-title\">Card title</h5>\n              <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n              <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n            </div>\n          </div>\n\n      </div>\n      <div class=\"col-sm-3 col-md-3\">\n          <br>\n          <div class=\"card\">\n              <img src=\"https://picsum.photos/2000/1000\" class=\"card-img-top\" alt=\"...\">\n              <div class=\"card-body\">\n                <h5 class=\"card-title\">Card title</h5>\n                <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n              </div>\n            </div>\n\n        </div>\n        <div class=\"col-sm-3 col-md-3\">\n            <br>\n            <div class=\"card\" >\n                <img src=\"https://picsum.photos/2000/1000\" class=\"card-img-top\" alt=\"...\">\n                <div class=\"card-body\">\n                  <h5 class=\"card-title\">Card title</h5>\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                  <a href=\"#\" class=\"btn btn-primary\">Go somewhere</a>\n                </div>\n              </div>\n\n          </div>\n</div><br><br>\n\n<div class=\"info-div\">\n  <div class=\"col-md-12\">\n      <img src=\"assets/infoLogo.png\" class=\"info-logo\" >\n      <h1>ZAKAŽITE TRETMAN</h1>\n\n    <p>Ukoliko vas interesuje neki od tretmana u našoj ponudi, svoj termin možete zakazati putem telefona:</p>\n    <h2>06555444564</h2>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/admin.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/admin/admin.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>admin works!</p>\n\n<a (click)=\"onLogout()\">LogOut!</a>\n\n\n\n\n<div class=\"col-lg-12\" *ngIf=\"isLoggedIn\">\n  <div class=\"col-lg-12 bg-info table-forms\">\n    <br>\n    <h2>Predstojeći Seminari</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered\">\n        <app-seminar *ngFor=\"let seminar of seminars \" [seminar]=\"seminar\" (seminarDeleted)=\"onDeleted($event)\">\n        </app-seminar>\n      </table>\n    </div>\n    <br>\n    <div *ngIf=\"!isFormShown\">\n      <button class=\"btn btn-light\" (click)=\"onShowForm()\">Dodaj Seminar</button>\n    </div>\n    <div *ngIf=\"isFormShown\">\n      <button class=\"btn btn-light\" (click)=\"onHideForm()\">Odustani</button>\n    </div>\n    <br>\n  </div>\n\n  <div class=\"col-lg-12 form-container table-forms\" *ngIf=\"isFormShown\">\n    <form class=\"card\" [formGroup]=\"seminarsForm\" (ngSubmit)=\"onSubmit()\">\n      <div class=\"form-body bg-info\">\n        <div class=\"form-header\">\n          <h2>Dodaj Seminar</h2>\n          <span class=\"alert alert-success\"\n            *ngIf=\"isSeminarFormSubmited\">Uspešno ste dodali seminar!</span>\n        </div>\n        <div class=\"form-group \">\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"title\" id=\"title\" placeholder=\"Naslov\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('title').valid && seminarsForm.get('title').touched\">Popunite polje za\n              ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"town\" id=\"town\" placeholder=\"Grad\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('town').valid && seminarsForm.get('town').touched\">Popunite polje za ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"seminars\" id=\"seminars\" placeholder=\"Seminari\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('seminars').valid && seminarsForm.get('seminars').touched\">Popunite polje za\n              ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"group\" id=\"group\" placeholder=\"Broj grupa\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('group').valid && seminarsForm.get('group').touched\">Popunite polje za\n              ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"instructors\" id=\"instructors\"\n              placeholder=\"Instruktori\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('instructors').valid && seminarsForm.get('instructors').touched\">Popunite polje\n              za ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"date\" id=\"date\" placeholder=\"Datum\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('date').valid && seminarsForm.get('date').touched\">Popunite polje za ime!</span>\n          </div>\n          <div class=\"col-lg-12 admin-form-input\">\n            <input type=\"text\" class=\"form-control\" formControlName=\"time\" id=\"time\" placeholder=\"Vreme\">\n            <span class=\"help-block\"\n              *ngIf=\"!seminarsForm.get('time').valid && seminarsForm.get('time').touched\">Popunite polje za ime!</span>\n          </div>\n\n\n          <br>\n          <div class=\"submit-button\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!seminarsForm.valid\">Dodaj Seminar</button>\n          </div>\n\n\n        </div>\n      </div>\n    </form>\n\n  </div>\n\n\n  <hr>\n\n  <div class=\"col-lg-12 bg-info table-forms\">\n    <br>\n    <h2>Instruktori</h2>\n    <div class=\"table-responsive\">\n      <table class=\"table table-bordered\">\n        <app-instructor *ngFor=\"let instructor of instructors \" [instructor]=\"instructor\" (instructorDeleted)=\"onDeletedInstructor($event)\">\n        </app-instructor>\n      </table>\n    </div>\n    <br>\n    <div *ngIf=\"!isInstructorsFormShown\">\n      <button class=\"btn btn-light\" (click)=\"onShowInstructorsForm()\">Dodaj Instruktora</button>\n    </div>\n    <div *ngIf=\"isInstructorsFormShown\">\n      <button class=\"btn btn-light\" (click)=\"onHideInstructorsForm()\">Odustani</button>\n    </div>\n    <br>\n  </div>\n  <div class=\"col-lg-12 form-container table-forms\" *ngIf=\"isInstructorsFormShown\">\n      <form class=\"card\" [formGroup]=\"instructorsForm\" (ngSubmit)=\"onSubmitTherapist()\">\n        <div class=\"form-body bg-info\">\n          <div class=\"form-header\">\n            <h2>Dodaj Instruktora</h2>\n          </div>\n          <span class=\"alert alert-success\"\n            *ngIf=\"isFormSubmitSuccess\">Uspešno ste dodali instruktora!</span>\n          <div class=\"form-group \">\n\n            <div class=\"col-lg-12 admin-form-input\">\n              <input type=\"text\" name=\"name\" formControlName=\"name\" class=\"form-control\" id=\"name\" placeholder=\"Ime\">\n              <span class=\"help-block\"\n                *ngIf=\"!instructorsForm.get('name').valid && instructorsForm.get('name').touched\">Popunite polje za ime!</span>\n            </div>\n            <div class=\"col-lg-12 admin-form-input\">\n                <textarea type=\"text\" name=\"content\" formControlName=\"content\" class=\"form-control\" id=\"content\" placeholder=\"Opis\" rows=\"6\"></textarea>\n              <span class=\"help-block\"\n                *ngIf=\"!instructorsForm.get('content').valid && instructorsForm.get('content').touched\">Popunite polje!</span>\n            </div>\n            <div class=\"col-lg-12 admin-form-input\">\n                <input type=\"file\" name=\"image\" formControlName=\"image\" class=\"form-control\" id=\"image\" (change)=\"onFileSelected($event)\">\n              <span class=\"help-block\"\n                *ngIf=\"!instructorsForm.get('image').valid && instructorsForm.get('image').touched\">Izaberite sliku!</span>\n            </div>\n            <br>\n            <div class=\"submit-button\">\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!instructorsForm.valid\">Dodaj Terapeuta</button>\n            </div>\n          </div>\n        </div>\n      </form>\n\n    </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/instructor/instructor.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/admin/instructor/instructor.component.html ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr class=\"bg-info\">\n        <th scope=\"col\">Slika</th>\n        <th scope=\"col\">Ime</th>\n        <th scope=\"col\">Sadrzaj</th>\n        <th scope=\"col\">Izmene</th>\n      </tr>\n\n    </thead>\n\n\n    <tbody>\n      <tr>\n        <td><img src={{instructor.image_url}} alt=\"...\" class=\"img-thumbnail\">\n          <div *ngIf=\"isEdit\">\n              <input type=\"file\" name=\"image\" class=\"form-controler\" id=\"image\" (change)=\"onFileSelected($event)\">\n\n          </div>\n        </td>\n        <td>{{instructor.name}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.name\"><br>\n          </div>\n        </td>\n        <td>{{instructor.content}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.content\"><br>\n          </div>\n        </td>\n        <td>\n          <div>\n            <div *ngIf=\"isEdit\">\n              <button class=\"btn btn-success\" (click)=\"onSave(instructor.id)\">Sačuvaj</button>\n              <button class=\"btn btn-success\" (click)=\"onCancel()\">Izađi</button>\n            </div>\n            <div *ngIf=\"!isEdit\">\n              <button class=\"btn btn-danger\" (click)=\"onDelete(instructor.id)\">Obriši</button>\n              <button class=\"btn btn-success\" (click)=\"onEdit(instructor)\">Izmeni</button>\n            </div>\n\n          </div>\n        </td>\n      </tr>\n\n    </tbody>\n\n\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/seminar/seminar.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/admin/seminar/seminar.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\">\n  <table class=\"table table-bordered\">\n    <thead>\n      <tr class=\"bg-info\">\n        <th scope=\"col\">Naslov Seminara</th>\n        <th scope=\"col\">Grad</th>\n        <th scope=\"col\">Seminari</th>\n        <th scope=\"col\">Grupa/Broj</th>\n        <th scope=\"col\">Instruktori</th>\n        <th scope=\"col\">Datum</th>\n        <th scope=\"col\">Vreme</th>\n        <th scope=\"col\">Izmene</th>\n      </tr>\n\n    </thead>\n\n\n    <tbody>\n      <tr>\n        <td>{{seminar.title}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.title\"><br>\n          </div>\n        </td>\n        <td>{{seminar.town}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.town\"><br>\n          </div>\n        </td>\n        <td>{{seminar.seminars}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.seminars\"><br>\n          </div>\n        </td>\n        <td>{{seminar.group}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.group\"><br>\n          </div>\n        </td>\n        <td>{{seminar.instructors}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.instructors\"><br>\n          </div>\n        </td>\n        <td>{{seminar.date}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.date\"><br>\n          </div>\n        </td>\n        <td>{{seminar.time}}\n          <div *ngIf=\"isEdit\">\n            <input type=\"text\" [(ngModel)]=\"editValues.time\"><br>\n          </div>\n        </td>\n        <td>\n          <div>\n            <div *ngIf=\"isEdit\">\n              <button class=\"btn btn-success\" (click)=\"onSave(seminar.id)\">Sačuvaj</button>\n              <button class=\"btn btn-success\" (click)=\"onCancel()\">Izađi</button>\n            </div>\n            <div *ngIf=\"!isEdit\">\n              <button class=\"btn btn-danger\" (click)=\"onDelete(seminar.id)\">Obriši</button>\n              <button class=\"btn btn-success\" (click)=\"onEdit(seminar)\">Izmeni</button>\n            </div>\n\n          </div>\n        </td>\n      </tr>\n\n    </tbody>\n\n\n  </table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-12 form-container\">\n  <form class=\"card\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\" >\n    <div class=\"form-body\">\n      <div class=\"form-group\">\n        <div class=\"row\">\n\n          <div class=\"col-lg-1\">\n            <i class=\"fas fa-envelope fa-2x\"></i>\n          </div>\n          <div class=\"col-lg-11\">\n            <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"email\" placeholder=\"Vaš email\">\n            <span class=\"help-block\" *ngIf=\"!loginForm.get('email').valid && loginForm.get('email').touched\" >Popunite polje za email!</span>\n          </div>\n        </div>\n      </div>\n       <div class=\"form-group\">\n          <div class=\"row\">\n\n            <div class=\"col-lg-1\">\n              <i class=\"fas fa-tag fa-2x\"></i>\n            </div>\n            <div class=\"col-lg-11\">\n              <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"title\" placeholder=\"password\">\n            </div>\n          </div>\n        </div>\n      <div class=\"submit-button\">\n        <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"!loginForm.valid\" >Submit</button>\n      </div>\n\n    </div>\n  </form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/news/events/events.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/news/events/events.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>events works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/news/news.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/news/news.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/news/photos/photos.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/news/photos/photos.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-footer text-muted\">\n\n\n  <h1 class=\"font-weight-light text-center text-lg-left mb-0\">Thumbnail Gallery</h1>\n\n  <hr class=\"\">\n\n  <div class=\"row text-center text-lg-left\">\n\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/pWkk7iiCoDM/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/aob0ukAYfuI/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/EUfxH-pze7s/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/M185_qYH8vg/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/sesveuG_rNo/400x300\" alt=\"\">\n          </a>\n    </div>\n    <div class=\"col-lg-4 col-md-4 col-6\">\n      <a href=\"#\" class=\"d-block mb-4 h-100\">\n            <img class=\"img-fluid img-thumbnail\" src=\"https://source.unsplash.com/AvhMzHwiE_0/400x300\" alt=\"\">\n          </a>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/news/publications/publications.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/news/publications/publications.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"card\">\n    <div class=\"row\" (click)=\"isFirstFileVisible = !isFirstFileVisible\">\n      <div class=\"col-lg-10\">\n        <p>1. Alexandra Antoniou - intervju magazin Sensa</p>\n      </div>\n      <div class=\"col-lg-2 arrow\">\n        <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isFirstFileVisible\"></i><i\n            class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isFirstFileVisible\"></i></span>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\"> <embed [src]=\"serverFile2\" class=\"pdf-files\" *ngIf=\"isFirstFileVisible\" /></div>\n  <div class=\"card\">\n    <div class=\"row\" (click)=\"isSecondFileVisible = !isSecondFileVisible\">\n      <div class=\"col-lg-10\">\n        <p class=\"e2e-trusted-url\">2. Prof. Andrew Zoppos, intervju za\n          časopis Bilje & Zdravlje</p>\n      </div>\n      <div class=\"col-lg-2 arrow\">\n        <span><i class=\"fas fa-arrow-circle-down fa-2x\" *ngIf=\"!isSecondFileVisible\"></i><i\n            class=\"fas fa-arrow-circle-up fa-2x\" *ngIf=\"isSecondFileVisible\"></i></span>\n\n      </div>\n    </div>\n  </div>\n  <div class=\"card-body\">\n    <embed [src]=\"serverFile1\" class=\"pdf-files\" *ngIf=\"isSecondFileVisible\" />\n  </div>\n  <div class=\"card\" >\n      <div class=\"row\" (click)='openNewTab()'>\n        <div class=\"col-lg-10\">\n          <p >3. Blic magazin</p>\n        </div>\n        <div class=\"col-lg-2 arrow\">\n          <span><i class=\"fas fa-external-link-alt fa-2x\"></i></span>\n\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/news/video/video.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/news/video/video.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let video of videos\" >\n  <iframe width=\"420\" height=\"315\"\n  [src]=\"getVideosUrl(video.video_url)\">\n  </iframe>\n</div>-->\n<div class=\"col-lg-12\">\n\n\n  <h1 class=\"font-weight-light text-center text-lg-left mb-0\">Video</h1>\n\n  <hr class=\"\">\n\n  <div class=\"row text-center \">\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/hkRiDBVcvXU\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/MlU3ojFPmB8\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/6p17D02ZLCg\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/HklGBQSluHk\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/h91YSQlpkIc\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/duT_54GkNPk\">\n      </iframe>\n    </div>\n    <div class=\"col-lg-3 col-md-4 col-6\">\n      <iframe class=\"video-layout\" webkitallowfullscreen mozallowfullscreen allowfullscreen\n        src=\"https://www.youtube.com/embed/6FTpktkQZJU\">\n      </iframe>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/quote/quote.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/quote/quote.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li>{{quote.content}}\n\n    <span *ngIf=\"isDeleted\"> Deleted!</span>\n\n    <div>\n      <div *ngIf=\"isEdit\">\n        <input type=\"text\" [(ngModel)]=\"editValue\">\n\n        <button class=\"btn btn-success\" (click)=\"onSave(quote.id)\">Save</button>\n        <button class=\"btn btn-success\" (click)=\"onCancel()\">Cancel</button>\n      </div>\n      <div *ngIf=\"!isEdit\">\n        <button class=\"btn btn-danger\" (click)=\"onDelete(quote.id)\">Delete</button>\n        <button class=\"btn btn-success\" (click)=\"onEdit(quote)\">Edit</button>\n      </div>\n\n    </div>\n  </li>\n\n</ul>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/rejuvance/rejuvance.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/rejuvance/rejuvance.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img src=\"{{serverUrl}}/rejuvance-logo.png\" alt=\"...\" class=\"logo\">\n<br>\n\n<div class=\"table-responsive\" *ngFor=\"let title of titles;let i = index;\">\n  <table class=\"table table-bordered\"  *ngIf=\"title == 'Rejuvance' && title != null\">\n  <thead>\n      <h2>Predstojeci Seminari</h2>\n    <tr class=\"bg-info\">\n      <th scope=\"col\">Grad</th>\n      <th scope=\"col\">Seminari</th>\n      <th scope=\"col\">Grupa/Broj</th>\n      <th scope=\"col\">Instruktori</th>\n      <th scope=\"col\">Datum</th>\n      <th scope=\"col\">Vreme</th>\n    </tr>\n  </thead>\n  <tbody  *ngFor=\"let seminar of seminars;let i = index;\">\n    <tr *ngIf=\"seminar.title == 'Rejuvance'\" >\n      <td>{{seminar.town}}</td>\n      <td>{{seminar.seminars}}</td>\n      <td>{{seminar.group}}</td>\n      <td>{{seminar.instructors}}</td>\n      <td>{{seminar.date}}</td>\n      <td>{{seminar.time}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/btaa/btaa.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/btaa/btaa.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" align=\"center\">\n    <h1>BTAA – Bowen Therapy Academy of Australia</h1>\n<br>\n  <p>\n      Osnivač i direktor BTAA, gospodin Osvald Renč (Oswald Rentsch) je Bowen tehniku učio direktno od Toma Bowena, uz kojeg je proveo dve ipo godine beležeći, crtajući i prateći Tomov rad.\n\n      <br>\n      <br>\n      Osvald - Osi (Ossie) i njegova supruga Elen (Elaine) koja je takođe učila kod Toma Bowena, su 1976 godine otvorili naturopatsku praksu u Hamiltonu (Zapadna Viktorija), koristeći samo Bowen tehniku kao model manuelne tehnike.\n\n      <br>\n        <br>\n\n        Kasnije je uz pomoć Rene Horvud (Renee Horwood), Tomove sekretarice, sastavio i osmislio priručnike za obuku praktičara Bowen terapijske tehnike, kako su je nazvali u čast Toma Bowena.\n        <br>\n        <br>\n        Na zahtev Toma, da nakon njegove smrti podučava ovu tehniku, Osi i Elen su održali 1986. godine prvi seminar u Pertu (Perth). Do 1990. godine Osi i Elen su održavali seminare po celoj Australiji.\n\n        <br>\n        <br>\n        Posvećeni očuvanju tehnike i obezbeđivanju njene nastave u izvornom obliku, 1987. godine osnivaju Australijski Akademiju Bowen Terapije (BTAA), nazvavši tehniku Bowtech – The Bowen Technique\n        <br>\n        <br>\n        Od tada, Osi i Elen su predstavili Bowtech u mnogim zemljama, poštujući obećanje koje je Osi dao Tomu Bowenu na njegovoj samrtnoj postelji, da će širiti njegov rad po celom svetu.\n\n        <br>\n        <br>\n        Pošto je ova tehnika toliko efikasna, široki spektar ljudi ju je prihvatio. Zdravstveni radnici su impresionirani efikasnošću Bowen tehnike i raznolikošću zdravstvenih problema koji se mogu rešiti.\n  </p>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/instructors/instructors.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/instructors/instructors.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<h1>Naši terapeuti</h1>\n<hr>\n<div class=\"col-lg-12 instructors-table\"  *ngFor=\"let instructor of instructors\">\n  <div class=\"row\">\n    <div class=\"col-lg-4  instructors-table\" align=\"right\">\n      <img src=\"{{instructor.image_url}}\" alt=\"...\" class=\"img-thumbnail rounded-circle\">\n    </div>\n\n    <div class=\"col-lg-8  instructors-table card card-body\">\n      <h2>{{instructor.name}}</h2>\n      <p>{{instructor.content}}</p>\n    </div>\n  </div>\n  <hr>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/seminars.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/seminars.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/teaching-program/teaching-program.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/teaching-program/teaching-program.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>teaching-program works!</p>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/training-course/training-course.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/training-course/training-course.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" align=\"left\">\n\n    <h1 align=\"center\">Obuka</h1>\n  <br>\n    <p>\n        Obuka za Bowen praktičara sastoji se od četiri seminara u trajanju od po četiri dana, koji se organizuju svakih 2 do3 meseca. Vreme između seminara je neophodno da bi se naučeno uvežbalo i praktično primenjivalo pre nastavka obuke na sledećem modulu i kako bi polaznici kompletirali 10 studija slučajeva do modula 7.\n        <br>\n        <br>\n        Prva tri seminara sastoje se od po dva modula, dok se na poslednjem, modulu 7 (oko 9-12 meseci od početka obuke), polaže pismeni i praktični deo ispita kako bi se stekla diploma praktičara, koju izdaje Australijska Akademija Bowen Terapije (BTAA).\n        <br>\n          <br>\n\n          Za učenje ove tehnike nije neophodno prethodno medicinsko obrazovanje. Ipak, za dobijanje diplome praktičara neophodan je dokaz o položenom ispitu (najmanje 60 časova) Anatomije i fiziologije od strane priznate institucije (srednja medicinska škola ili fakultet, ili pohađanje seminara u našoj organizaciji, koji je akreditovan od strane BTAA) i sertifikat o završenoj obuci Prve pomoći\n            <br>\n          <br>\n          Na svakom seminaru dobija se priručnik na srpskom jeziku sa detaljnim i sveobuhvatnim objašnjenjima.\n          <br>\n          <br>\n          Da biste sebi osigurali mesto na seminaru, potrebno je uplatiti depozit mesec dana pre početka seminara. U slučaju otkaza neophodno je da obavestite organizatora najkasnije dve nedelje pre početka kursa, u suprotnom depozit se ne vraća.\n          <br>\n          <br>\n          Po pravilima i po zakonu o zaštiti podataka, tokom predavanja se očekuje poštovanje privatnosti svih prisutnih. To znači da nije dozvoljeno snimanje tona/glasa, ni fotografisanje bez prethodnog odobrenja ostalih učesnika/ca za vreme trajanja seminara, bilo da se snimanje odvija profesionalnim uređajima ili mobilnim telefonima. Takođe, komunikacija mobilnim telefonima dozvoljena je u pauzama ili van mesta održavanja predavanja\n          <br>\n          <br>\n          Za prisustvo na Bowen seminarima potrebno je sledeće:<br><img src=\"assets/star.png\"> Kratko isečeni nokti (nakon pokazivanja procedura, pokreti se uče tako što vežbate jedni na drugima i zbog tačnog izvodjenja pokreta radi se na goloj koži, pa je važno da ne ostavite ogrebotine na koži kolega/inica)<br><img src=\"assets/star.png\"> Udobna odeća – šorts ili kupaći kostim, itd.<br><img src=\"assets/star.png\"> Krejon (za obeležavanje tačnih mesta na kojima se izvode pokreti)<br><img src=\"assets/star.png\"> Dva velika peškira (ili čaršav i veliki peškir)<br><img src=\"assets/star.png\"> Sveska za beleške<br><img src=\"assets/star.png\"> Dobro raspoloženje!\n          <br>Vidimo se uskoro! </p>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"table-responsive\" *ngFor=\"let title of titles;let i = index;\">\n  <table class=\"table table-bordered\"  *ngIf=\"title == 'Seminari Bowen' && title != null\">\n  <thead>\n      <h2>Seminari Bowen</h2>\n    <tr class=\"bg-info\">\n      <th scope=\"col\">Grad</th>\n      <th scope=\"col\">Seminari</th>\n      <th scope=\"col\">Grupa/Broj</th>\n      <th scope=\"col\">Instruktori</th>\n      <th scope=\"col\">Datum</th>\n      <th scope=\"col\">Vreme</th>\n    </tr>\n  </thead>\n  <tbody  *ngFor=\"let seminar of seminars;let i = index;\">\n    <tr *ngIf=\"seminar.title == 'Seminari Bowen'\" >\n      <td>{{seminar.town}}</td>\n      <td>{{seminar.seminars}}</td>\n      <td>{{seminar.group}}</td>\n      <td>{{seminar.instructors}}</td>\n      <td>{{seminar.date}}</td>\n      <td>{{seminar.time}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>\n<br>\n<br>\n<div class=\"table-responsive\" *ngFor=\"let title of titles;let i = index;\">\n  <table class=\"table table-bordered\"  *ngIf=\"title == 'Posebni Seminar' && title != null\">\n    <thead>\n        <h2>Posebni Seminari</h2>\n      <tr class=\"bg-info\">\n        <th scope=\"col\">Grad</th>\n        <th scope=\"col\">Seminari</th>\n        <th scope=\"col\">Grupa/Broj</th>\n        <th scope=\"col\">Instruktori</th>\n        <th scope=\"col\">Datum</th>\n        <th scope=\"col\">Vreme</th>\n      </tr>\n    </thead>\n    <tbody  *ngFor=\"let seminar of seminars;let i = index;\">\n      <tr *ngIf=\"seminar.title == 'Posebni Seminar'\" >\n        <td>{{seminar.town}}</td>\n        <td>{{seminar.seminars}}</td>\n        <td>{{seminar.group}}</td>\n        <td>{{seminar.instructors}}</td>\n        <td>{{seminar.date}}</td>\n        <td>{{seminar.time}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n\n  <br>\n<br>\n<div class=\"table-responsive\" *ngFor=\"let title of titles;let i = index;\">\n  <table class=\"table table-bordered\"  *ngIf=\"title == 'Anatomija' && title != null\">\n    <thead>\n        <h2>Anatomija, Fiziologija i tečaji prve pomoći</h2>\n      <tr class=\"bg-info\">\n        <th scope=\"col\">Grad</th>\n        <th scope=\"col\">Seminari</th>\n        <th scope=\"col\">Grupa/Broj</th>\n        <th scope=\"col\">Instruktori</th>\n        <th scope=\"col\">Datum</th>\n        <th scope=\"col\">Vreme</th>\n      </tr>\n    </thead>\n    <tbody  *ngFor=\"let seminar of seminars;let i = index;\">\n      <tr *ngIf=\"seminar.title == 'Anatomija'\" >\n        <td>{{seminar.town}}</td>\n        <td>{{seminar.seminars}}</td>\n        <td>{{seminar.group}}</td>\n        <td>{{seminar.instructors}}</td>\n        <td>{{seminar.date}}</td>\n        <td>{{seminar.time}}</td>\n      </tr>\n    </tbody>\n  </table>\n  </div>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pages_news_photos_photos_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/news/photos/photos.component */ "./src/app/pages/news/photos/photos.component.ts");
/* harmony import */ var _pages_seminars_teaching_program_teaching_program_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/seminars/teaching-program/teaching-program.component */ "./src/app/pages/seminars/teaching-program/teaching-program.component.ts");
/* harmony import */ var _pages_seminars_training_course_training_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/seminars/training-course/training-course.component */ "./src/app/pages/seminars/training-course/training-course.component.ts");
/* harmony import */ var _pages_seminars_btaa_btaa_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/seminars/btaa/btaa.component */ "./src/app/pages/seminars/btaa/btaa.component.ts");
/* harmony import */ var _pages_rejuvance_rejuvance_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/rejuvance/rejuvance.component */ "./src/app/pages/rejuvance/rejuvance.component.ts");
/* harmony import */ var _pages_news_video_video_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/news/video/video.component */ "./src/app/pages/news/video/video.component.ts");
/* harmony import */ var _pages_news_publications_publications_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/news/publications/publications.component */ "./src/app/pages/news/publications/publications.component.ts");
/* harmony import */ var _pages_news_events_events_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/news/events/events.component */ "./src/app/pages/news/events/events.component.ts");
/* harmony import */ var _pages_seminars_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/seminars/instructors/instructors.component */ "./src/app/pages/seminars/instructors/instructors.component.ts");
/* harmony import */ var _pages_seminars_upcoming_seminars_upcoming_seminars_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/seminars/upcoming-seminars/upcoming-seminars.component */ "./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.ts");
/* harmony import */ var _pages_login_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/login/admin/admin.component */ "./src/app/pages/login/admin/admin.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_bowen_technique_bowen_technique_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/bowen-technique/bowen-technique.component */ "./src/app/pages/bowen-technique/bowen-technique.component.ts");
/* harmony import */ var _pages_seminars_seminars_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/seminars/seminars.component */ "./src/app/pages/seminars/seminars.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/login/auth-guard.service */ "./src/app/pages/login/auth-guard.service.ts");






















const appRoutes = [
    { path: '', redirectTo: 'index', pathMatch: 'full' },
    { path: 'index', component: _pages_index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"] },
    { path: 'seminari', component: _pages_seminars_seminars_component__WEBPACK_IMPORTED_MODULE_19__["SeminarsComponent"], children: [
            { path: 'btaa', component: _pages_seminars_btaa_btaa_component__WEBPACK_IMPORTED_MODULE_4__["BtaaComponent"] },
            { path: 'obuka', component: _pages_seminars_training_course_training_course_component__WEBPACK_IMPORTED_MODULE_3__["TrainingCourseComponent"] },
            { path: 'nastavni-program', component: _pages_seminars_teaching_program_teaching_program_component__WEBPACK_IMPORTED_MODULE_2__["TeachingProgramComponent"] },
            { path: 'predstojeci-seminari', component: _pages_seminars_upcoming_seminars_upcoming_seminars_component__WEBPACK_IMPORTED_MODULE_10__["UpcomingSeminarsComponent"] },
            { path: 'instruktori', component: _pages_seminars_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_9__["InstructorsComponent"] }
        ] },
    { path: 'bowen-tehnika', component: _pages_bowen_technique_bowen_technique_component__WEBPACK_IMPORTED_MODULE_18__["BowenTechniqueComponent"] },
    { path: 'novosti', component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_14__["NewsComponent"], children: [
            { path: 'dogadjaji', component: _pages_news_events_events_component__WEBPACK_IMPORTED_MODULE_8__["EventsComponent"] },
            { path: 'publikacije', component: _pages_news_publications_publications_component__WEBPACK_IMPORTED_MODULE_7__["PublicationsComponent"] },
            { path: 'video', component: _pages_news_video_video_component__WEBPACK_IMPORTED_MODULE_6__["VideoComponent"] },
            { path: 'galerija', component: _pages_news_photos_photos_component__WEBPACK_IMPORTED_MODULE_1__["PhotosComponent"] }
        ] },
    //{ path: 'holisticki-centar', component: HolisticCenterComponent},
    { path: 'onama', component: _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"] },
    { path: 'login', component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'kontakt', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_13__["ContactComponent"] },
    { path: 'login/admin', canActivate: [_pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_21__["AuthGuard"]], component: _pages_login_admin_admin_component__WEBPACK_IMPORTED_MODULE_11__["AdminComponent"] },
    { path: 'rejuvance', component: _pages_rejuvance_rejuvance_component__WEBPACK_IMPORTED_MODULE_5__["RejuvanceComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_16__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot(appRoutes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\r\n  font-family: sans-serif;\r\n }\r\n .container-fluid {\r\n  width: 100%;\r\n  padding-right: 0px;\r\n  padding-left: 0px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n .main{\r\n  margin-top: 50px;\r\n /* box-shadow: 4px 3px 9px #9c9c9c;\r\n  border-radius: 10px;*/\r\n}\r\n .footer{\r\n  margin-top: 50px;\r\n}\r\n img{\r\n\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 5%;\r\n\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7Q0FDeEI7Q0FDQTtFQUNDLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7Q0FDQTtFQUNFLGdCQUFnQjtDQUNqQjt1QkFDc0I7QUFDdkI7Q0FDQTtFQUNFLGdCQUFnQjtBQUNsQjtDQUNBOztJQUVJLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLFNBQVM7O0FBRWIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xyXG4gfVxyXG4gLmNvbnRhaW5lci1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4ubWFpbntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gLyogYm94LXNoYWRvdzogNHB4IDNweCA5cHggIzljOWM5YztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4OyovXHJcbn1cclxuLmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcbmltZ3tcclxuXHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDUlO1xyXG5cclxufVxyXG5cclxuIl19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");



let AppComponent = class AppComponent {
    constructor(config) {
        this.title = 'bowen';
        this.showNavigationArrows = false;
        this.showNavigationIndicators = false;
        this.images = [1, 2, 3].map(() => `https://picsum.photos/100%/100%?random&t=${Math.random()}`);
        // customize default values of carousels used by this component tree
        config.showNavigationArrows = true;
        config.showNavigationIndicators = true;
    }
};
AppComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbCarouselConfig"]],
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/server-url.services */ "./src/app/shared/server-url.services.ts");
/* harmony import */ var _pages_news_video_video_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/news/video/video.service */ "./src/app/pages/news/video/video.service.ts");
/* harmony import */ var _pages_seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/seminars/instructors/instructors.services */ "./src/app/pages/seminars/instructors/instructors.services.ts");
/* harmony import */ var _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/login/auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _pages_about_us_about_us_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/about-us/about-us.service */ "./src/app/pages/about-us/about-us.service.ts");
/* harmony import */ var _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/dropdown.directive */ "./src/app/shared/dropdown.directive.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbars_header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./navbars/header/header.component */ "./src/app/navbars/header/header.component.ts");
/* harmony import */ var _navbars_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./navbars/footer/footer.component */ "./src/app/navbars/footer/footer.component.ts");
/* harmony import */ var _pages_index_index_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/index/index.component */ "./src/app/pages/index/index.component.ts");
/* harmony import */ var _pages_bowen_technique_bowen_technique_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/bowen-technique/bowen-technique.component */ "./src/app/pages/bowen-technique/bowen-technique.component.ts");
/* harmony import */ var _pages_seminars_seminars_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/seminars/seminars.component */ "./src/app/pages/seminars/seminars.component.ts");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/news/news.component */ "./src/app/pages/news/news.component.ts");
/* harmony import */ var _pages_holistic_center_holistic_center_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/holistic-center/holistic-center.component */ "./src/app/pages/holistic-center/holistic-center.component.ts");
/* harmony import */ var _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/about-us/about-us.component */ "./src/app/pages/about-us/about-us.component.ts");
/* harmony import */ var _pages_seminars_training_course_training_course_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/seminars/training-course/training-course.component */ "./src/app/pages/seminars/training-course/training-course.component.ts");
/* harmony import */ var _pages_seminars_teaching_program_teaching_program_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/seminars/teaching-program/teaching-program.component */ "./src/app/pages/seminars/teaching-program/teaching-program.component.ts");
/* harmony import */ var _pages_seminars_upcoming_seminars_upcoming_seminars_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/seminars/upcoming-seminars/upcoming-seminars.component */ "./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.ts");
/* harmony import */ var _pages_seminars_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/seminars/instructors/instructors.component */ "./src/app/pages/seminars/instructors/instructors.component.ts");
/* harmony import */ var _pages_seminars_btaa_btaa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/seminars/btaa/btaa.component */ "./src/app/pages/seminars/btaa/btaa.component.ts");
/* harmony import */ var _pages_bowen_technique_history_history_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/bowen-technique/history/history.component */ "./src/app/pages/bowen-technique/history/history.component.ts");
/* harmony import */ var _pages_bowen_technique_what_is_bowen_what_is_bowen_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/bowen-technique/what-is-bowen/what-is-bowen.component */ "./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.ts");
/* harmony import */ var _pages_bowen_technique_can_bowen_help_can_bowen_help_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/bowen-technique/can-bowen-help/can-bowen-help.component */ "./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.ts");
/* harmony import */ var _pages_bowen_technique_appearance_treatment_appearance_treatment_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/bowen-technique/appearance-treatment/appearance-treatment.component */ "./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.ts");
/* harmony import */ var _pages_bowen_technique_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/bowen-technique/how-it-works/how-it-works.component */ "./src/app/pages/bowen-technique/how-it-works/how-it-works.component.ts");
/* harmony import */ var _pages_news_events_events_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/news/events/events.component */ "./src/app/pages/news/events/events.component.ts");
/* harmony import */ var _pages_news_publications_publications_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/news/publications/publications.component */ "./src/app/pages/news/publications/publications.component.ts");
/* harmony import */ var _pages_news_video_video_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/news/video/video.component */ "./src/app/pages/news/video/video.component.ts");
/* harmony import */ var _pages_holistic_center_treatments_treatments_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/holistic-center/treatments/treatments.component */ "./src/app/pages/holistic-center/treatments/treatments.component.ts");
/* harmony import */ var _pages_holistic_center_bahov_drops_bahov_drops_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/holistic-center/bahov-drops/bahov-drops.component */ "./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.ts");
/* harmony import */ var _pages_holistic_center_aqua_detox_aqua_detox_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/holistic-center/aqua-detox/aqua-detox.component */ "./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.ts");
/* harmony import */ var _pages_holistic_center_reiki_reiki_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./pages/holistic-center/reiki/reiki.component */ "./src/app/pages/holistic-center/reiki/reiki.component.ts");
/* harmony import */ var _pages_holistic_center_atlas_atlas_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./pages/holistic-center/atlas/atlas.component */ "./src/app/pages/holistic-center/atlas/atlas.component.ts");
/* harmony import */ var _pages_about_us_team_members_team_members_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./pages/about-us/team-members/team-members.component */ "./src/app/pages/about-us/team-members/team-members.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_quote_quote_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./pages/quote/quote.component */ "./src/app/pages/quote/quote.component.ts");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/pages/login/login.component.ts");
/* harmony import */ var _pages_login_login_service__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./pages/login/login.service */ "./src/app/pages/login/login.service.ts");
/* harmony import */ var _pages_login_admin_admin_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./pages/login/admin/admin.component */ "./src/app/pages/login/admin/admin.component.ts");
/* harmony import */ var _pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./pages/login/auth-guard.service */ "./src/app/pages/login/auth-guard.service.ts");
/* harmony import */ var _pages_seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./pages/seminars/upcoming-seminars/seminars.service */ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts");
/* harmony import */ var _pages_login_admin_seminar_seminar_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./pages/login/admin/seminar/seminar.component */ "./src/app/pages/login/admin/seminar/seminar.component.ts");
/* harmony import */ var _pages_login_admin_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./pages/login/admin/instructor/instructor.component */ "./src/app/pages/login/admin/instructor/instructor.component.ts");
/* harmony import */ var _pages_rejuvance_rejuvance_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./pages/rejuvance/rejuvance.component */ "./src/app/pages/rejuvance/rejuvance.component.ts");
/* harmony import */ var _pages_news_photos_photos_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./pages/news/photos/photos.component */ "./src/app/pages/news/photos/photos.component.ts");




















































let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_9__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
            _navbars_header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _navbars_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
            _pages_index_index_component__WEBPACK_IMPORTED_MODULE_15__["IndexComponent"],
            _pages_bowen_technique_bowen_technique_component__WEBPACK_IMPORTED_MODULE_16__["BowenTechniqueComponent"],
            _pages_seminars_seminars_component__WEBPACK_IMPORTED_MODULE_17__["SeminarsComponent"],
            _pages_news_news_component__WEBPACK_IMPORTED_MODULE_18__["NewsComponent"],
            _pages_holistic_center_holistic_center_component__WEBPACK_IMPORTED_MODULE_19__["HolisticCenterComponent"],
            _pages_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_20__["AboutUsComponent"],
            _pages_seminars_training_course_training_course_component__WEBPACK_IMPORTED_MODULE_21__["TrainingCourseComponent"],
            _pages_seminars_teaching_program_teaching_program_component__WEBPACK_IMPORTED_MODULE_22__["TeachingProgramComponent"],
            _pages_seminars_upcoming_seminars_upcoming_seminars_component__WEBPACK_IMPORTED_MODULE_23__["UpcomingSeminarsComponent"],
            _pages_seminars_instructors_instructors_component__WEBPACK_IMPORTED_MODULE_24__["InstructorsComponent"],
            _pages_seminars_btaa_btaa_component__WEBPACK_IMPORTED_MODULE_25__["BtaaComponent"],
            _pages_bowen_technique_history_history_component__WEBPACK_IMPORTED_MODULE_26__["HistoryComponent"],
            _pages_bowen_technique_what_is_bowen_what_is_bowen_component__WEBPACK_IMPORTED_MODULE_27__["WhatIsBowenComponent"],
            _pages_bowen_technique_can_bowen_help_can_bowen_help_component__WEBPACK_IMPORTED_MODULE_28__["CanBowenHelpComponent"],
            _pages_bowen_technique_appearance_treatment_appearance_treatment_component__WEBPACK_IMPORTED_MODULE_29__["AppearanceTreatmentComponent"],
            _pages_bowen_technique_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_30__["HowItWorksComponent"],
            _pages_news_events_events_component__WEBPACK_IMPORTED_MODULE_31__["EventsComponent"],
            _pages_news_publications_publications_component__WEBPACK_IMPORTED_MODULE_32__["PublicationsComponent"],
            _pages_news_video_video_component__WEBPACK_IMPORTED_MODULE_33__["VideoComponent"],
            _pages_holistic_center_treatments_treatments_component__WEBPACK_IMPORTED_MODULE_34__["TreatmentsComponent"],
            _pages_holistic_center_bahov_drops_bahov_drops_component__WEBPACK_IMPORTED_MODULE_35__["BahovDropsComponent"],
            _pages_holistic_center_aqua_detox_aqua_detox_component__WEBPACK_IMPORTED_MODULE_36__["AquaDetoxComponent"],
            _pages_holistic_center_reiki_reiki_component__WEBPACK_IMPORTED_MODULE_37__["ReikiComponent"],
            _pages_holistic_center_atlas_atlas_component__WEBPACK_IMPORTED_MODULE_38__["AtlasComponent"],
            _shared_dropdown_directive__WEBPACK_IMPORTED_MODULE_6__["DropdownDirective"],
            _pages_about_us_team_members_team_members_component__WEBPACK_IMPORTED_MODULE_39__["TeamMembersComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_40__["ContactComponent"],
            _pages_quote_quote_component__WEBPACK_IMPORTED_MODULE_42__["QuoteComponent"],
            _pages_login_login_component__WEBPACK_IMPORTED_MODULE_43__["LoginComponent"],
            _pages_login_admin_admin_component__WEBPACK_IMPORTED_MODULE_45__["AdminComponent"],
            _pages_login_admin_seminar_seminar_component__WEBPACK_IMPORTED_MODULE_48__["SeminarComponent"],
            _pages_login_admin_instructor_instructor_component__WEBPACK_IMPORTED_MODULE_49__["InstructorComponent"],
            _pages_rejuvance_rejuvance_component__WEBPACK_IMPORTED_MODULE_50__["RejuvanceComponent"],
            _pages_news_photos_photos_component__WEBPACK_IMPORTED_MODULE_51__["PhotosComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_41__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]
        ],
        providers: [_pages_about_us_about_us_service__WEBPACK_IMPORTED_MODULE_5__["AboutUsServices"], _pages_login_login_service__WEBPACK_IMPORTED_MODULE_44__["LoginServices"], _pages_seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_47__["SeminarsServices"], _pages_login_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _pages_login_auth_guard_service__WEBPACK_IMPORTED_MODULE_46__["AuthGuard"], _pages_seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_3__["InstructorsServices"], _pages_news_video_video_service__WEBPACK_IMPORTED_MODULE_2__["VideoServices"], _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__["ServerUrlServices"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/navbars/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navbars/footer/footer.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer {\r\n /* background-image: linear-gradient(#b9b3b7, #ffffff, #b9b3b7);*/\r\n  border-radius: 10px;\r\n  box-shadow: 4px 3px 9px #9c9c9c;\r\n  background: url('footer2.jpg') no-repeat center center;\r\n  background-size: cover;\r\n\r\n}\r\nul>.contact-footer{\r\n  text-align: left;\r\n  display: block;\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n  font-size: 15px;\r\n}\r\nul>.contact-footer>h2 {\r\n  color: #ffffff;\r\n  font-weight: 600;\r\n  font-size: 25px;\r\n  background: -webkit-linear-gradient(#4bb027, #253725);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\nul>.contact-footer>h1 {\r\n  font-size: 24px;\r\n\r\n}\r\nul>.contact-footer>p {\r\n  margin-bottom: 0rem;\r\n  font-weight: 600\r\n}\r\n.card-footer {\r\n   padding: 0rem 0rem;\r\n  background-color: rgba(0, 0, 0, 0);\r\n  border-top: 1px solid rgba(0, 0, 0, 0);\r\n}\r\n.nav-logo{\r\n  width: 100%;\r\n  height:auto;\r\n}\r\n.card{\r\n\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFycy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxpRUFBaUU7RUFDaEUsbUJBQW1CO0VBQ25CLCtCQUErQjtFQUMvQixzREFBc0U7RUFDdEUsc0JBQXNCOztBQUV4QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCw2Q0FBNkM7RUFDN0MsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YscURBQXFEO0VBQ3JELDZCQUE2QjtFQUM3QixvQ0FBb0M7QUFDdEM7QUFDQTtFQUNFLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkI7QUFDRjtBQUNBO0dBQ0csa0JBQWtCO0VBQ25CLGtDQUFrQztFQUNsQyxzQ0FBc0M7QUFDeEM7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0FBQ2I7QUFDQTs7QUFFQSIsImZpbGUiOiJzcmMvYXBwL25hdmJhcnMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvb3RlciB7XHJcbiAvKiBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2I5YjNiNywgI2ZmZmZmZiwgI2I5YjNiNyk7Ki9cclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDRweCAzcHggOXB4ICM5YzljOWM7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2Zvb3RlcjIuanBnXCIpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG59XHJcbnVsPi5jb250YWN0LWZvb3RlcntcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxudWw+LmNvbnRhY3QtZm9vdGVyPmgyIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgjNGJiMDI3LCAjMjUzNzI1KTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxudWw+LmNvbnRhY3QtZm9vdGVyPmgxIHtcclxuICBmb250LXNpemU6IDI0cHg7XHJcblxyXG59XHJcbnVsPi5jb250YWN0LWZvb3Rlcj5wIHtcclxuICBtYXJnaW4tYm90dG9tOiAwcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDBcclxufVxyXG4uY2FyZC1mb290ZXIge1xyXG4gICBwYWRkaW5nOiAwcmVtIDByZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxufVxyXG4ubmF2LWxvZ297XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OmF1dG87XHJcbn1cclxuLmNhcmR7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/navbars/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navbars/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbars/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/navbars/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/navbars/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/navbars/header/header.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 80%;\r\n}\r\n.smallLogo{\r\n  display: block;\r\n  width: 15%;\r\n}\r\n#header {\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 15px 0 15px 0;\r\n  list-style: none;\r\n  /*background-color: #111;\r\n  background-image: linear-gradient(#b9b3b7, #ffffff, #b9b3b7);\r\n  border-radius: 10px;\r\n  box-shadow: 4px 3px 9px #9c9c9c;*/\r\n}\r\n.nav-item a {\r\n  color: #023e18;\r\n  font-size: 25px;\r\n  font-weight: 600;\r\n}\r\n.info {\r\n  text-align:  center;\r\n}\r\n.fab {\r\n  color: #9c9c9c;\r\n}\r\n.active {\r\n  color: #111;\r\n  border-radius: 8px;\r\n  background-image: linear-gradient(#006837, #b4e625, #3ab54a);\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n\r\n}\r\n.nav-pills .nav-link.active, .nav-pills .show > .nav-link {\r\n  border-radius: 8px;\r\n  background-image: linear-gradient(#006837, #b4e625, #3ab54a);\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n  color: #ffffff;\r\n  text-shadow: 1.5px 1px 1px black;\r\n  font-weight: 600;\r\n  font-style: italic;\r\n\r\n}\r\n.nav-link{\r\n  display: inline;\r\n}\r\nnav a ::before{\r\n  border-color: #006837;\r\n}\r\n.navbar-collapse li {\r\n\r\n  border-right: 1.5px solid #69a601;\r\n  position: relative;\r\n  margin: 10px 0px 10px 0px;\r\n}\r\n.navbar-collapse li:last-child {\r\n\r\n  border: none;\r\n}\r\n.dropdown-menu{\r\n  left: 10px;\r\n  top:  38px;\r\n  moz-transition:    all 1800ms ease;\r\n  transition:         all 1800ms ease;\r\n}\r\n.navbar-collapse>ul>li{\r\n  padding: 4px 10px 18px  10px;\r\n}\r\n.logo-normal img {\r\n\tposition: absolute;\r\n\ttransition: opacity 0.3s ease;\r\n\tmargin-top: -20px !important;\r\n}\r\n.logo-normal {\r\n\topacity: 1;\r\n}\r\n.nav-logo{\r\n  opacity: 0;\r\n  width: 110px;\r\n  height: auto;\r\n  margin-left: 5px;\r\n}\r\n.icon-floating {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  position: relative;\r\n  z-index: 1;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: all .2s ease-in-out;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.icon-floating i {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.icon-floating-bck{\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f)!important;\r\n  pointer-events: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFycy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixVQUFVO0FBQ1o7QUFDQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0FBQ1o7QUFFQTtFQUNFLFdBQVc7RUFDWCxTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQjs7O21DQUdpQztBQUNuQztBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQiw0REFBNEQ7RUFDNUQsbUJBQW1CO0VBQ25CLDZCQUE2Qjs7QUFFL0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0REFBNEQ7RUFDNUQsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixjQUFjO0VBQ2QsZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixrQkFBa0I7O0FBRXBCO0FBRUE7RUFDRSxlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTs7RUFFRSxpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtFQUNWLFVBQVU7RUFDVixrQ0FBa0M7RUFJbEMsbUNBQW1DO0FBQ3JDO0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7QUFFQTtDQUNDLGtCQUFrQjtDQUdsQiw2QkFBNkI7Q0FDN0IsNEJBQTRCO0FBQzdCO0FBRUE7Q0FDQyxVQUFVO0FBQ1g7QUFDQTtFQUNFLFVBQVU7RUFDVixZQUFZO0VBQ1osWUFBWTtFQUNaLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0Usc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVFQUF1RTtFQUN2RSxvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9uYXZiYXJzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dve1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5zbWFsbExvZ297XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDE1JTtcclxufVxyXG5cclxuI2hlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDE1cHggMCAxNXB4IDA7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAvKmJhY2tncm91bmQtY29sb3I6ICMxMTE7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNiOWIzYjcsICNmZmZmZmYsICNiOWIzYjcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogNHB4IDNweCA5cHggIzljOWM5YzsqL1xyXG59XHJcbi5uYXYtaXRlbSBhIHtcclxuICBjb2xvcjogIzAyM2UxODtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG4uaW5mbyB7XHJcbiAgdGV4dC1hbGlnbjogIGNlbnRlcjtcclxufVxyXG4uZmFiIHtcclxuICBjb2xvcjogIzljOWM5YztcclxufVxyXG4uYWN0aXZlIHtcclxuICBjb2xvcjogIzExMTtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCMwMDY4MzcsICNiNGU2MjUsICMzYWI1NGEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4ICM5YzljOWM7XHJcblxyXG59XHJcbi5uYXYtcGlsbHMgLm5hdi1saW5rLmFjdGl2ZSwgLm5hdi1waWxscyAuc2hvdyA+IC5uYXYtbGluayB7XHJcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDA2ODM3LCAjYjRlNjI1LCAjM2FiNTRhKTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAjOWM5YzljO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIHRleHQtc2hhZG93OiAxLjVweCAxcHggMXB4IGJsYWNrO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zdHlsZTogaXRhbGljO1xyXG5cclxufVxyXG5cclxuLm5hdi1saW5re1xyXG4gIGRpc3BsYXk6IGlubGluZTtcclxufVxyXG5uYXYgYSA6OmJlZm9yZXtcclxuICBib3JkZXItY29sb3I6ICMwMDY4Mzc7XHJcbn1cclxuLm5hdmJhci1jb2xsYXBzZSBsaSB7XHJcblxyXG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgIzY5YTYwMTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiAxMHB4IDBweCAxMHB4IDBweDtcclxufVxyXG4ubmF2YmFyLWNvbGxhcHNlIGxpOmxhc3QtY2hpbGQge1xyXG5cclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuLmRyb3Bkb3duLW1lbnV7XHJcbiAgbGVmdDogMTBweDtcclxuICB0b3A6ICAzOHB4O1xyXG4gIG1vei10cmFuc2l0aW9uOiAgICBhbGwgMTgwMG1zIGVhc2U7XHJcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMTgwMG1zIGVhc2U7XHJcbiAgLW8tdHJhbnNpdGlvbjogICAgICBhbGwgMTgwMG1zIGVhc2U7XHJcbiAgLW1zLXRyYW5zaXRpb246ICAgICBhbGwgMTgwMG1zIGVhc2U7XHJcbiAgdHJhbnNpdGlvbjogICAgICAgICBhbGwgMTgwMG1zIGVhc2U7XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2U+dWw+bGl7XHJcbiAgcGFkZGluZzogNHB4IDEwcHggMThweCAgMTBweDtcclxufVxyXG5cclxuLmxvZ28tbm9ybWFsIGltZyB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdC13ZWJraXQtdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MgZWFzZTtcclxuXHRtYXJnaW4tdG9wOiAtMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9nby1ub3JtYWwge1xyXG5cdG9wYWNpdHk6IDE7XHJcbn1cclxuLm5hdi1sb2dve1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgd2lkdGg6IDExMHB4O1xyXG4gIGhlaWdodDogYXV0bztcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaWNvbi1mbG9hdGluZyB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmljb24tZmxvYXRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbi1mbG9hdGluZy1iY2t7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjA5NTBkLCAjNTdiYTJmKSFpbXBvcnRhbnQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/navbars/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/navbars/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    onWindowScroll(e) {
        if (e.target['scrollingElement'].scrollTop >= this.stickyActive.nativeElement.offsetTop) {
            this.navLogo.nativeElement.style.opacity = '1';
            this.stickyActive.nativeElement.style.background = 'white';
            this.stickyActive.nativeElement.style.boxShadow = ' 4px 3px 9px #9c9c9c';
        }
        else {
            this.navLogo.nativeElement.style.opacity = '0';
            this.stickyActive.nativeElement.style.background = 'transparent';
            this.stickyActive.nativeElement.style.boxShadow = 'none';
        }
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('navLogo', { static: true })
], HeaderComponent.prototype, "navLogo", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('stickyActive', { static: true })
], HeaderComponent.prototype, "stickyActive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:scroll', ['$event'])
], HeaderComponent.prototype, "onWindowScroll", null);
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbars/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/navbars/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".map-responsive{\r\n  overflow:hidden;\r\n  padding-bottom:50%;\r\n  position:relative;\r\n  height:0;\r\n  margin-bottom: 50px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n.map-responsive iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n}\r\n.form-header {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-top: -3.13rem;\r\n  margin-bottom: 3rem;\r\n  padding: 1rem;\r\n  border-radius: .125rem;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  background-color: #82b1ff!important;\r\n}\r\n.card {\r\n  font-weight: 400;\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n\r\n}\r\n.form-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n.form-input{\r\n  box-sizing: content-box;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\r\n.submit-button{\r\n\r\n  text-align: center;\r\n}\r\n.submit-button>.btn-primary{\r\n  width: 30%;\r\n}\r\n.hr-info-line{\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n.contact-info{\r\n  text-align: center;\r\n}\r\n.form-container {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n.icon-floating {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  position: relative;\r\n  z-index: 1;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: all .2s ease-in-out;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.icon-floating i {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.icon-floating-bck{\r\n  background-color: #82b1ff!important;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n   border: 1px solid red;\r\n }\r\ntextarea.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\ntextarea.ng-invalid :focus{\r\n  border: 1px solid green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLFFBQVE7RUFDUixtQkFBbUI7RUFDbkIscUVBQXFFO0FBQ3ZFO0FBQ0E7RUFDRSxNQUFNO0VBQ04sS0FBSztFQUNMLFdBQVc7RUFDWCxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CO0FBRUE7RUFDRSxzRUFBc0U7RUFDdEUsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7O0VBRXRCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1DQUFtQztBQUNyQztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxxRUFBcUU7O0FBRXZFO0FBQ0E7RUFFRSxjQUFjO0VBQ2QsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNkJBQTZCO0VBQzdCLFlBQVk7RUFDWixnQ0FBZ0M7RUFDaEMsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIscUVBQXFFO0FBQ3ZFO0FBRUE7O0VBRUUsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFDQTtFQUNFLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxzRUFBc0U7RUFDdEUsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwrQkFBK0I7RUFDL0IsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjtBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDO0FBQ0M7R0FDRSxxQkFBcUI7Q0FDdkI7QUFDQTtFQUNDLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWJvdXQtdXMvYWJvdXQtdXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXAtcmVzcG9uc2l2ZXtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206NTAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGhlaWdodDowO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi5tYXAtcmVzcG9uc2l2ZSBpZnJhbWV7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTMuMTNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmIxZmYhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxufVxyXG4uZm9ybS1ib2R5IHtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMS4yNXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5wdXR7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b257XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VibWl0LWJ1dHRvbj4uYnRuLXByaW1hcnl7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uaHItaW5mby1saW5le1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG4uY29udGFjdC1pbmZve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4uaWNvbi1mbG9hdGluZyB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmljb24tZmxvYXRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbi1mbG9hdGluZy1iY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjFmZiFpbXBvcnRhbnQ7XHJcbn1cclxuIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gfVxyXG4gdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkIDpmb2N1c3tcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/about-us/about-us.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/about-us/about-us.component.ts ***!
  \******************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _login_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../login/auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-us.service */ "./src/app/pages/about-us/about-us.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AboutUsComponent = class AboutUsComponent {
    constructor(aboutUsServices, authService) {
        this.aboutUsServices = aboutUsServices;
        this.authService = authService;
        this.isDeleted = false;
        this.isEdit = false;
        this.isLoggedIn = false;
        this.quotes = [];
    }
    ngOnInit() {
        this.onGetContent();
        this.quotesForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'id': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
        });
        if (this.authService.loggedIn) {
            this.isLoggedIn = true;
            console.log("[mj]-AboutUsLoggedIN", this.authService.loggedIn);
        }
        else {
            this.isLoggedIn = false;
            console.log("[mj]-AboutUsLoggedIN", this.authService.loggedIn);
        }
        console.log("jelka5", this.quotes);
    }
    ngOnChanges() {
        console.log("ngChange", this.quotes);
    }
    onSubmit() {
        this.aboutUsServices.postContents(this.quotesForm.value).subscribe(responseData => {
            console.log("jelkan2", responseData);
            this.quotesForm.reset();
            this.onGetContent();
        });
        console.log("jelkan", this.quotesForm.value);
        //this.onGetContent();
    }
    onGetContent() {
        this.aboutUsServices.getContents()
            .subscribe(data => {
            this.quotes = data;
            console.log("jelka3", this.quotes);
            console.log("jelka4", data);
        });
        //console.log(this.quotes);
    }
    onEdit(quote) {
        this.isEdit = true;
        this.editValue = quote.content;
    }
    onDeleted(quote) {
        const position = this.quotes.findIndex((quoteEl) => {
            return quoteEl.id == quote.id;
        });
        this.quotes.splice(position, 1);
    }
};
AboutUsComponent.ctorParameters = () => [
    { type: _about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsServices"] },
    { type: _login_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-about-us',
        template: __webpack_require__(/*! raw-loader!./about-us.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/about-us.component.html"),
        styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/pages/about-us/about-us.component.css")]
    })
], AboutUsComponent);



/***/ }),

/***/ "./src/app/pages/about-us/about-us.service.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/about-us/about-us.service.ts ***!
  \****************************************************/
/*! exports provided: AboutUsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsServices", function() { return AboutUsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let AboutUsServices = class AboutUsServices {
    constructor(http) {
        this.http = http;
    }
    postContents(postData) {
        console.log("postData", postData.content);
        return this.http.post('http://127.0.0.1:8000/api/quote', postData);
    }
    getContents() {
        return this.http.get('http://127.0.0.1:8000/api/quotes')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData.quotes) {
                if (responseData.quotes.hasOwnProperty(key)) {
                    postsArray.push(Object.assign({}, responseData.quotes[key], { key }));
                }
            }
            return postsArray;
        }));
    }
    getEditContent(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put('http://127.0.0.1:8000/api/quote/' + postData.id, postData, { headers });
    }
    deleteContent(id) {
        return this.http.delete('http://127.0.0.1:8000/api/quote/' + id);
    }
};
AboutUsServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AboutUsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AboutUsServices);



/***/ }),

/***/ "./src/app/pages/about-us/team-members/team-members.component.css":
/*!************************************************************************!*\
  !*** ./src/app/pages/about-us/team-members/team-members.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0LXVzL3RlYW0tbWVtYmVycy90ZWFtLW1lbWJlcnMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/about-us/team-members/team-members.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pages/about-us/team-members/team-members.component.ts ***!
  \***********************************************************************/
/*! exports provided: TeamMembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersComponent", function() { return TeamMembersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeamMembersComponent = class TeamMembersComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeamMembersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-team-members',
        template: __webpack_require__(/*! raw-loader!./team-members.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/about-us/team-members/team-members.component.html"),
        styles: [__webpack_require__(/*! ./team-members.component.css */ "./src/app/pages/about-us/team-members/team-members.component.css")]
    })
], TeamMembersComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.css":
/*!***********************************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.css ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvd2VuLXRlY2huaXF1ZS9hcHBlYXJhbmNlLXRyZWF0bWVudC9hcHBlYXJhbmNlLXRyZWF0bWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: AppearanceTreatmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppearanceTreatmentComponent", function() { return AppearanceTreatmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppearanceTreatmentComponent = class AppearanceTreatmentComponent {
    constructor() { }
    ngOnInit() {
    }
};
AppearanceTreatmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-appearance-treatment',
        template: __webpack_require__(/*! raw-loader!./appearance-treatment.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.html"),
        styles: [__webpack_require__(/*! ./appearance-treatment.component.css */ "./src/app/pages/bowen-technique/appearance-treatment/appearance-treatment.component.css")]
    })
], AppearanceTreatmentComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/bowen-technique.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/bowen-technique/bowen-technique.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n  cursor: pointer;\r\n  clear: both;\r\n  padding: 5px 15px;\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f);\r\n  border-bottom: 1px solid #B4B5B4;\r\n  border-right: 1px solid #B4B5B4;\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n\r\n}\r\n\r\n.card p {\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 25px;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n  color: white;\r\n  text-shadow: 1.5px 1px 1px black;\r\n}\r\n\r\n.card-body {\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgb(44, 157, 21), 0 2px 10px 0 rgb(73, 177, 39);\r\n  text-align: center;\r\n  background-color: white;\r\n  border-bottom-left-radius: 15px;\r\n  border-bottom-right-radius: 15px;\r\n  padding-bottom: 20px;\r\n}\r\n\r\n.arrow{\r\n  text-align: right;\r\n  padding-top: 0.7rem;\r\n  padding-bottom: 0.5rem;\r\n  color: white;\r\n  text-shadow: 1.5px 1px 1px black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm93ZW4tdGVjaG5pcXVlL2Jvd2VuLXRlY2huaXF1ZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIsMkJBQTJCO0VBQzNCLHNDQUFzQztFQUN0QyxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsNkRBQTZEO0VBQzdELGdDQUFnQztFQUNoQywrQkFBK0I7RUFDL0IsNkJBQTZCOztBQUUvQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdDQUFnQztBQUNsQzs7QUFDQTtFQUNFLFNBQVM7RUFDVCx1RUFBdUU7RUFDdkUsa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QiwrQkFBK0I7RUFDL0IsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ib3dlbi10ZWNobmlxdWUvYm93ZW4tdGVjaG5pcXVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwOTUwZCwgIzU3YmEyZik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCNEI1QjQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0I0QjVCNDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggIzljOWM5YztcclxuXHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMS41cHggMXB4IDFweCBibGFjaztcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiKDQ0LCAxNTcsIDIxKSwgMCAycHggMTBweCAwIHJnYig3MywgMTc3LCAzOSk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDE1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbn1cclxuLmFycm93e1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmctdG9wOiAwLjdyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdGV4dC1zaGFkb3c6IDEuNXB4IDFweCAxcHggYmxhY2s7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/bowen-technique.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/bowen-technique/bowen-technique.component.ts ***!
  \********************************************************************/
/*! exports provided: BowenTechniqueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BowenTechniqueComponent", function() { return BowenTechniqueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BowenTechniqueComponent = class BowenTechniqueComponent {
    constructor() {
        this.isVisibleSection1 = false;
        this.isVisibleSection2 = false;
        this.isVisibleSection3 = false;
        this.isVisibleSection4 = false;
        this.isVisibleSection5 = false;
    }
    ngOnInit() {
    }
};
BowenTechniqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bowen-technique',
        template: __webpack_require__(/*! raw-loader!./bowen-technique.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/bowen-technique.component.html"),
        styles: [__webpack_require__(/*! ./bowen-technique.component.css */ "./src/app/pages/bowen-technique/bowen-technique.component.css")]
    })
], BowenTechniqueComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.css":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvd2VuLXRlY2huaXF1ZS9jYW4tYm93ZW4taGVscC9jYW4tYm93ZW4taGVscC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.ts ***!
  \**********************************************************************************/
/*! exports provided: CanBowenHelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanBowenHelpComponent", function() { return CanBowenHelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CanBowenHelpComponent = class CanBowenHelpComponent {
    constructor() { }
    ngOnInit() {
    }
};
CanBowenHelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-can-bowen-help',
        template: __webpack_require__(/*! raw-loader!./can-bowen-help.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.html"),
        styles: [__webpack_require__(/*! ./can-bowen-help.component.css */ "./src/app/pages/bowen-technique/can-bowen-help/can-bowen-help.component.css")]
    })
], CanBowenHelpComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/history/history.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/bowen-technique/history/history.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvd2VuLXRlY2huaXF1ZS9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/history/history.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/bowen-technique/history/history.component.ts ***!
  \********************************************************************/
/*! exports provided: HistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryComponent", function() { return HistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HistoryComponent = class HistoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-history',
        template: __webpack_require__(/*! raw-loader!./history.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/history/history.component.html"),
        styles: [__webpack_require__(/*! ./history.component.css */ "./src/app/pages/bowen-technique/history/history.component.css")]
    })
], HistoryComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/how-it-works/how-it-works.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/how-it-works/how-it-works.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvd2VuLXRlY2huaXF1ZS9ob3ctaXQtd29ya3MvaG93LWl0LXdvcmtzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/how-it-works/how-it-works.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/how-it-works/how-it-works.component.ts ***!
  \******************************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HowItWorksComponent = class HowItWorksComponent {
    constructor() { }
    ngOnInit() {
    }
};
HowItWorksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-it-works',
        template: __webpack_require__(/*! raw-loader!./how-it-works.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/how-it-works/how-it-works.component.html"),
        styles: [__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/pages/bowen-technique/how-it-works/how-it-works.component.css")]
    })
], HowItWorksComponent);



/***/ }),

/***/ "./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Jvd2VuLXRlY2huaXF1ZS93aGF0LWlzLWJvd2VuL3doYXQtaXMtYm93ZW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.ts ***!
  \********************************************************************************/
/*! exports provided: WhatIsBowenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WhatIsBowenComponent", function() { return WhatIsBowenComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WhatIsBowenComponent = class WhatIsBowenComponent {
    constructor() { }
    ngOnInit() {
    }
};
WhatIsBowenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-what-is-bowen',
        template: __webpack_require__(/*! raw-loader!./what-is-bowen.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.html"),
        styles: [__webpack_require__(/*! ./what-is-bowen.component.css */ "./src/app/pages/bowen-technique/what-is-bowen/what-is-bowen.component.css")]
    })
], WhatIsBowenComponent);



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  width: 100%;\r\n  padding-right: 25px;\r\n  padding-left: 25px;\r\n  margin-right: auto;\r\n  margin-left: auto;\r\n}\r\n.map-responsive{\r\n  overflow:hidden;\r\n  padding-bottom:50%;\r\n  position:relative;\r\n  height:0;\r\n  margin-bottom: 50px;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n}\r\n.map-responsive iframe{\r\n  left:0;\r\n  top:0;\r\n  height:100%;\r\n  width:100%;\r\n  position:absolute;\r\n}\r\n.form-header {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  color: #fff;\r\n  text-align: center;\r\n  margin-top: -3.13rem;\r\n  margin-bottom: 3rem;\r\n  padding: 1rem;\r\n  border-radius: .125rem;\r\n\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 90%;\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f);\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n    color: #ffffff;\r\n    text-shadow: 1.5px 1px 1px black;\r\n    font-weight: 600;\r\n}\r\n.card {\r\n  font-weight: 400;\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n\r\n}\r\n.form-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n.form-input{\r\n  box-sizing: content-box;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\r\n.submit-button{\r\n\r\n  text-align: center;\r\n}\r\n.submit-button>.btn-layout{\r\n  width: 30%;\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f);\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n    color: #ffffff;\r\n    text-shadow: 1.5px 1px 1px black;\r\n    font-weight: 600;\r\n}\r\n.hr-info-line{\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n.contact-info{\r\n  text-align: center;\r\n}\r\n.form-container {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n.form-control:focus {\r\n  color: #495057;\r\n  background-color: #fff;\r\n  border-color: #54b82d;\r\n  outline: 0;\r\n  box-shadow: 0 0 0 0.2rem rgba(8, 239, 13, 0.25);\r\n}\r\n.icon-floating {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  position: relative;\r\n  z-index: 1;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: all .2s ease-in-out;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.icon-floating i {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.icon-floating-bck{\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f)!important;\r\n  pointer-events: none;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n   border: 1px solid red;\r\n }\r\ntextarea.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\ntextarea.ng-invalid :focus{\r\n  border: 1px solid green;\r\n}\r\np{\r\n  color: #ffffff;\r\n  /*text-shadow: 1.5px 1px 1px black;*/\r\n  font-weight: 600;\r\n  font-size: 25px;\r\n    background: -webkit-linear-gradient(#4bb027, #253725);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixRQUFRO0VBQ1IsbUJBQW1CO0VBQ25CLHFFQUFxRTtBQUN2RTtBQUNBO0VBQ0UsTUFBTTtFQUNOLEtBQUs7RUFDTCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usc0VBQXNFO0VBQ3RFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2Isc0JBQXNCOztFQUV0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDViw2REFBNkQ7RUFDN0QsNkJBQTZCO0lBQzNCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCO0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsU0FBUztFQUNULHFFQUFxRTs7QUFFdkU7QUFDQTtFQUVFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qiw2QkFBNkI7RUFDN0IsWUFBWTtFQUNaLGdDQUFnQztFQUNoQyxnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixxRUFBcUU7QUFDdkU7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7RUFDViw2REFBNkQ7RUFDN0QsNkJBQTZCO0lBQzNCLGNBQWM7SUFDZCxnQ0FBZ0M7SUFDaEMsZ0JBQWdCO0FBQ3BCO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsVUFBVTtFQUNWLCtDQUErQztBQUNqRDtBQUNBO0VBQ0Usc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLHVFQUF1RTtFQUN2RSxvQkFBb0I7QUFDdEI7QUFDQztHQUNFLHFCQUFxQjtDQUN2QjtBQUNBO0VBQ0MscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGNBQWM7RUFDZCxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0VBQ2hCLGVBQWU7SUFDYixxREFBcUQ7RUFDdkQsNkJBQTZCO0VBQzdCLG9DQUFvQztBQUN0QyIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZy1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG59XHJcbi5tYXAtcmVzcG9uc2l2ZXtcclxuICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgcGFkZGluZy1ib3R0b206NTAlO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIGhlaWdodDowO1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG59XHJcbi5tYXAtcmVzcG9uc2l2ZSBpZnJhbWV7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIGhlaWdodDoxMDAlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5mb3JtLWhlYWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBjb2xvcjogI2ZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogLTMuMTNyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogM3JlbTtcclxuICBwYWRkaW5nOiAxcmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IC4xMjVyZW07XHJcblxyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxuICB3aWR0aDogOTAlO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwOTUwZCwgIzU3YmEyZik7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMXB4ICM5YzljOWM7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIHRleHQtc2hhZG93OiAxLjVweCAxcHggMXB4IGJsYWNrO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbn1cclxuLmZvcm0tYm9keSB7XHJcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0e1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ue1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24+LmJ0bi1sYXlvdXR7XHJcbiAgd2lkdGg6IDMwJTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMyMDk1MGQsICM1N2JhMmYpO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDFweCAjOWM5YzljO1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LXNoYWRvdzogMS41cHggMXB4IDFweCBibGFjaztcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbn1cclxuLmhyLWluZm8tbGluZXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLmZvcm0tY29udHJvbDpmb2N1cyB7XHJcbiAgY29sb3I6ICM0OTUwNTc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBib3JkZXItY29sb3I6ICM1NGI4MmQ7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiAwIDAgMCAwLjJyZW0gcmdiYSg4LCAyMzksIDEzLCAwLjI1KTtcclxufVxyXG4uaWNvbi1mbG9hdGluZyB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmljb24tZmxvYXRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbi1mbG9hdGluZy1iY2t7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjA5NTBkLCAjNTdiYTJmKSFpbXBvcnRhbnQ7XHJcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbn1cclxuIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gfVxyXG4gdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkIDpmb2N1c3tcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG5we1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG4gIC8qdGV4dC1zaGFkb3c6IDEuNXB4IDFweCAxcHggYmxhY2s7Ki9cclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KCM0YmIwMjcsICMyNTM3MjUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
        this.contactForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null),
            'message': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
    }
    onSubmit() {
        //this.contactForm.reset();
        console.log(this.contactForm);
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: __webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/contact/contact.component.html"),
        styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci9hcXVhLWRldG94L2FxdWEtZGV0b3guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.ts ***!
  \**************************************************************************/
/*! exports provided: AquaDetoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AquaDetoxComponent", function() { return AquaDetoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AquaDetoxComponent = class AquaDetoxComponent {
    constructor() { }
    ngOnInit() {
    }
};
AquaDetoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-aqua-detox',
        template: __webpack_require__(/*! raw-loader!./aqua-detox.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.html"),
        styles: [__webpack_require__(/*! ./aqua-detox.component.css */ "./src/app/pages/holistic-center/aqua-detox/aqua-detox.component.css")]
    })
], AquaDetoxComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/atlas/atlas.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/holistic-center/atlas/atlas.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci9hdGxhcy9hdGxhcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/holistic-center/atlas/atlas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/holistic-center/atlas/atlas.component.ts ***!
  \****************************************************************/
/*! exports provided: AtlasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AtlasComponent", function() { return AtlasComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AtlasComponent = class AtlasComponent {
    constructor() { }
    ngOnInit() {
    }
};
AtlasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-atlas',
        template: __webpack_require__(/*! raw-loader!./atlas.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/atlas/atlas.component.html"),
        styles: [__webpack_require__(/*! ./atlas.component.css */ "./src/app/pages/holistic-center/atlas/atlas.component.css")]
    })
], AtlasComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.css ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci9iYWhvdi1kcm9wcy9iYWhvdi1kcm9wcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.ts ***!
  \****************************************************************************/
/*! exports provided: BahovDropsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BahovDropsComponent", function() { return BahovDropsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BahovDropsComponent = class BahovDropsComponent {
    constructor() { }
    ngOnInit() {
    }
};
BahovDropsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bahov-drops',
        template: __webpack_require__(/*! raw-loader!./bahov-drops.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.html"),
        styles: [__webpack_require__(/*! ./bahov-drops.component.css */ "./src/app/pages/holistic-center/bahov-drops/bahov-drops.component.css")]
    })
], BahovDropsComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/holistic-center.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/pages/holistic-center/holistic-center.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci9ob2xpc3RpYy1jZW50ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/holistic-center/holistic-center.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/holistic-center/holistic-center.component.ts ***!
  \********************************************************************/
/*! exports provided: HolisticCenterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HolisticCenterComponent", function() { return HolisticCenterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HolisticCenterComponent = class HolisticCenterComponent {
    constructor() { }
    ngOnInit() {
    }
};
HolisticCenterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-holistic-center',
        template: __webpack_require__(/*! raw-loader!./holistic-center.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/holistic-center.component.html"),
        styles: [__webpack_require__(/*! ./holistic-center.component.css */ "./src/app/pages/holistic-center/holistic-center.component.css")]
    })
], HolisticCenterComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/reiki/reiki.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/holistic-center/reiki/reiki.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci9yZWlraS9yZWlraS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/holistic-center/reiki/reiki.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/holistic-center/reiki/reiki.component.ts ***!
  \****************************************************************/
/*! exports provided: ReikiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReikiComponent", function() { return ReikiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ReikiComponent = class ReikiComponent {
    constructor() { }
    ngOnInit() {
    }
};
ReikiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reiki',
        template: __webpack_require__(/*! raw-loader!./reiki.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/reiki/reiki.component.html"),
        styles: [__webpack_require__(/*! ./reiki.component.css */ "./src/app/pages/holistic-center/reiki/reiki.component.css")]
    })
], ReikiComponent);



/***/ }),

/***/ "./src/app/pages/holistic-center/treatments/treatments.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/pages/holistic-center/treatments/treatments.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbGlzdGljLWNlbnRlci90cmVhdG1lbnRzL3RyZWF0bWVudHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/holistic-center/treatments/treatments.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/holistic-center/treatments/treatments.component.ts ***!
  \**************************************************************************/
/*! exports provided: TreatmentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentsComponent", function() { return TreatmentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TreatmentsComponent = class TreatmentsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TreatmentsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-treatments',
        template: __webpack_require__(/*! raw-loader!./treatments.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/holistic-center/treatments/treatments.component.html"),
        styles: [__webpack_require__(/*! ./treatments.component.css */ "./src/app/pages/holistic-center/treatments/treatments.component.css")]
    })
], TreatmentsComponent);



/***/ }),

/***/ "./src/app/pages/index/index.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/index/index.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-img-top {\r\n    width: 110%;\r\n    margin: -3px -14px 5px -14px;\r\n    border-top-left-radius: calc(1.25rem - -5px);\r\n    border-top-right-radius: calc(0.25rem - 1px);\r\n    box-shadow: 3px 3px 9px;\r\n}\r\n.card .card-body {\r\n    flex: 1 1 auto;\r\n    padding: 1.25rem;\r\n    margin-top: -5px;\r\n    box-shadow: 0.5px 0.5px 5px;\r\n    border-bottom-left-radius: calc(1.25rem - -5px);\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n}\r\n.card {\r\n    border: 0px solid rgba(0, 0, 0, 0.125);\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 260px;\r\n    height: auto;\r\n}\r\n.card .card-title {\r\n    margin-bottom: 0.75rem;\r\n    text-align: center;\r\n}\r\n.slider img{\r\n   border-radius: 30px;\r\n}\r\n.slider {\r\n  box-shadow: 4px 3px 9px #9c9c9c;\r\n  border-radius: 30px;\r\n}\r\n.info-div{\r\n\r\n  width: 100%;\r\n  /* background-color: green; */\r\n  background-image: linear-gradient(#006837, #b4e625, #3ab54a);\r\n  border-radius: 10px;\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n  color: #ffffff;\r\n  text-align: center;\r\n  text-shadow: 1.5px 1px 1px black;\r\n    font-weight: 600;\r\n\r\n    font-size: 19px;\r\n    margin-bottom: 10px;\r\n}\r\n.info-div h1{\r\n  font-weight: 600;\r\n  padding-top: 10px;\r\n}\r\n.info-logo{\r\n  width: 3%;\r\nheight:auto;\r\n}\r\n.logo{\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCw0QkFBNEI7SUFDNUIsNENBQTRDO0lBQzVDLDRDQUE0QztJQUM1Qyx1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLDJCQUEyQjtJQUMzQiwrQ0FBK0M7SUFDL0MsK0NBQStDO0FBQ25EO0FBQ0E7SUFDSSxzQ0FBc0M7SUFDdEMsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFlBQVk7QUFDaEI7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixrQkFBa0I7QUFDdEI7QUFFQTtHQUNHLG1CQUFtQjtBQUN0QjtBQUNBO0VBQ0UsK0JBQStCO0VBQy9CLG1CQUFtQjtBQUNyQjtBQUNBOztFQUVFLFdBQVc7RUFDWCw2QkFBNkI7RUFDN0IsNERBQTREO0VBQzVELG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQ0FBZ0M7SUFDOUIsZ0JBQWdCOztJQUVoQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxTQUFTO0FBQ1gsV0FBVztBQUNYO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaW5kZXgvaW5kZXguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWltZy10b3Age1xyXG4gICAgd2lkdGg6IDExMCU7XHJcbiAgICBtYXJnaW46IC0zcHggLTE0cHggNXB4IC0xNHB4O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogY2FsYygxLjI1cmVtIC0gLTVweCk7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogY2FsYygwLjI1cmVtIC0gMXB4KTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggOXB4O1xyXG59XHJcbi5jYXJkIC5jYXJkLWJvZHkge1xyXG4gICAgZmxleDogMSAxIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTVweDtcclxuICAgIGJveC1zaGFkb3c6IDAuNXB4IDAuNXB4IDVweDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IGNhbGMoMS4yNXJlbSAtIC01cHgpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCk7XHJcbn1cclxuLmNhcmQge1xyXG4gICAgYm9yZGVyOiAwcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgd2lkdGg6IDI2MHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uY2FyZCAuY2FyZC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uc2xpZGVyIGltZ3tcclxuICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxufVxyXG4uc2xpZGVyIHtcclxuICBib3gtc2hhZG93OiA0cHggM3B4IDlweCAjOWM5YzljO1xyXG4gIGJvcmRlci1yYWRpdXM6IDMwcHg7XHJcbn1cclxuLmluZm8tZGl2e1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjsgKi9cclxuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoIzAwNjgzNywgI2I0ZTYyNSwgIzNhYjU0YSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggIzljOWM5YztcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6IDEuNXB4IDFweCAxcHggYmxhY2s7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG5cclxuICAgIGZvbnQtc2l6ZTogMTlweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmluZm8tZGl2IGgxe1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbn1cclxuLmluZm8tbG9nb3tcclxuICB3aWR0aDogMyU7XHJcbmhlaWdodDphdXRvO1xyXG59XHJcbi5sb2dve1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/index/index.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/index/index.component.ts ***!
  \************************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let IndexComponent = class IndexComponent {
    constructor() {
        this.images = [1, 2, 3].map(() => `https://picsum.photos/1873/500?random&t=${Math.random()}`);
    }
    ngOnInit() {
    }
};
IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-index',
        template: __webpack_require__(/*! raw-loader!./index.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/index/index.component.html"),
        styles: [__webpack_require__(/*! ./index.component.css */ "./src/app/pages/index/index.component.css")]
    })
], IndexComponent);



/***/ }),

/***/ "./src/app/pages/login/admin/admin.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/login/admin/admin.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  font-weight: 400;\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n\r\n}\r\n.form-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n.form-input{\r\n  box-sizing: content-box;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n  padding-top: 20px;\r\n}\r\n.submit-button{\r\n\r\n  text-align: center;\r\n}\r\n.submit-button>.btn-primary{\r\n  width: 30%;\r\n}\r\n.hr-info-line{\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n.contact-info{\r\n  text-align: center;\r\n}\r\n.form-container {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n.icon-floating {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  position: relative;\r\n  z-index: 1;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: all .2s ease-in-out;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.icon-floating i {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.icon-floating-bck{\r\n  background-color: #82b1ff!important;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n   border: 1px solid red;\r\n }\r\ntextarea.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\ntextarea.ng-invalid :focus{\r\n  border: 1px solid green;\r\n}\r\n.admin-form-input {\r\n  padding-top: 20px;\r\n}\r\n.table-responsive{\r\n  background-color: white;\r\n  text-align: center;\r\n}\r\n.table-forms{\r\n  text-align: center;\r\n  padding-bottom: 15px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vYWRtaW4vYWRtaW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QscUVBQXFFOztBQUV2RTtBQUNBO0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFFQUFxRTtFQUNyRSxpQkFBaUI7QUFDbkI7QUFFQTs7RUFFRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0UsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLHNFQUFzRTtFQUN0RSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLCtCQUErQjtFQUMvQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiO0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7QUFDQztHQUNFLHFCQUFxQjtDQUN2QjtBQUNBO0VBQ0MscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9sb2dpbi9hZG1pbi9hZG1pbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwwLDAsLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwwLDAsLjEyKTtcclxuXHJcbn1cclxuLmZvcm0tYm9keSB7XHJcbiAgLW1zLWZsZXg6IDEgMSBhdXRvO1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbn1cclxuXHJcbi5mb3JtLWlucHV0e1xyXG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2NlZDRkYTtcclxuICBib3JkZXItcmFkaXVzOiAwO1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCxib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5zdWJtaXQtYnV0dG9ue1xyXG5cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnN1Ym1pdC1idXR0b24+LmJ0bi1wcmltYXJ5e1xyXG4gIHdpZHRoOiAzMCU7XHJcbn1cclxuLmhyLWluZm8tbGluZXtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjEyNSk7XHJcbn1cclxuLmNvbnRhY3QtaW5mb3tcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBtYXJnaW4tdG9wOiBhdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IGF1dG87XHJcbn1cclxuLmljb24tZmxvYXRpbmcge1xyXG4gIGJveC1zaGFkb3c6IDAgNXB4IDExcHggMCByZ2JhKDAsMCwwLC4xOCksIDAgNHB4IDE1cHggMCByZ2JhKDAsMCwwLC4xNSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICB0cmFuc2l0aW9uOiBhbGwgLjJzIGVhc2UtaW4tb3V0O1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgcGFkZGluZzogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDQ3cHg7XHJcbiAgaGVpZ2h0OiA0N3B4O1xyXG59XHJcbi5pY29uLWZsb2F0aW5nIGkge1xyXG4gIGZvbnQtc2l6ZTogMS4yNXJlbTtcclxuICBsaW5lLWhlaWdodDogNDdweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuLmljb24tZmxvYXRpbmctYmNre1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM4MmIxZmYhaW1wb3J0YW50O1xyXG59XHJcbiBpbnB1dC5uZy1pbnZhbGlkLm5nLXRvdWNoZWR7XHJcbiAgIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxuIH1cclxuIHRleHRhcmVhLm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZWQ7XHJcbn1cclxudGV4dGFyZWEubmctaW52YWxpZCA6Zm9jdXN7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbn1cclxuLmFkbWluLWZvcm0taW5wdXQge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi50YWJsZS1yZXNwb25zaXZle1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udGFibGUtZm9ybXN7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/login/admin/admin.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/login/admin/admin.component.ts ***!
  \******************************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../seminars/instructors/instructors.services */ "./src/app/pages/seminars/instructors/instructors.services.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../seminars/upcoming-seminars/seminars.service */ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts");







let AdminComponent = class AdminComponent {
    //quotes: AboutUs[] = [];
    // tslint:disable-next-line: max-line-length
    constructor(authService, route, seminarsServices, instructorsServices) {
        this.authService = authService;
        this.route = route;
        this.seminarsServices = seminarsServices;
        this.instructorsServices = instructorsServices;
        this.serverLocalHost = 'http://127.0.0.1:8000/storage/';
        this.seminars = [];
        this.instructors = [];
        this.isDeleted = false;
        this.isEdit = false;
        this.isLoggedIn = false;
        this.isFormShown = false;
        this.isInstructorsFormShown = false;
        this.isFormSubmitSuccess = false;
        this.isSeminarFormSubmited = false;
    }
    ngOnInit() {
        this.seminarsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            // 'id': new FormControl(null, Validators.required),
            'town': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'seminars': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'group': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'instructors': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'date': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'time': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'title': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
        });
        this.instructorsForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            // 'id': new FormControl(null, Validators.required),
            'image': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'name': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
            'content': new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required),
        });
        if (this.authService.loggedIn) {
            this.isLoggedIn = true;
            console.log("[mj]-AboutUsLoggedIN", this.authService.loggedIn);
        }
        else {
            this.isLoggedIn = false;
            console.log("[mj]-AboutUsLoggedIN", this.authService.loggedIn);
        }
        this.onGetSeminars();
        this.onGetTherapist();
    }
    onSubmit() {
        this.seminarsServices.postContents(this.seminarsForm.value).subscribe(responseData => {
            console.log(["[mj]-databaseSeminars"], responseData);
            this.onGetSeminars();
            this.isSeminarFormSubmited = true;
            if (this.isSeminarFormSubmited) {
                this.resetSubmitedPopup();
            }
        });
        this.seminarsForm.reset();
        console.log("[mj]-SeminarsPOST", this.seminarsForm.value);
    }
    onLogout() {
        this.authService.logout();
        this.route.navigate(['/login']);
    }
    //Seminars
    onGetSeminars() {
        this.seminarsServices.getContents().subscribe(responseData => {
            this.seminars = responseData;
        });
    }
    onDeleted(seminar) {
        const position = this.seminars.findIndex((seminarEl) => {
            return seminarEl.id == seminar.id;
        });
        this.seminars.splice(position, 1);
    }
    onShowForm() {
        this.isFormShown = true;
    }
    onHideForm() {
        this.isFormShown = false;
    }
    //Instructors
    onFileSelected(event) {
        this.instructorsForm.value.image = event.target.files[0];
        console.log("[mj]-instructorsForm.value.image", this.instructorsForm.value.image.name);
    }
    onSubmitTherapist() {
        this.instructorsServices.postTherapist(this.instructorsForm.value).subscribe(responseData => {
            console.log(["[mj]-onSubmitTherapistReturnData"], responseData);
            if (responseData) {
                this.isFormSubmitSuccess = true;
                if (this.isFormSubmitSuccess) {
                    this.resetSubmitedPopup();
                }
            }
            this.onGetTherapist();
        });
        this.instructorsForm.reset();
    }
    onGetTherapist() {
        this.instructorsServices.getTherapist().subscribe(responseData => {
            this.instructors = responseData;
            console.log("[mj]- onGetTherapist", this.instructors);
        });
    }
    onDeletedInstructor(instructor) {
        const position = this.instructors.findIndex((instructorEl) => {
            return instructorEl.id == instructor.id;
        });
        this.instructors.splice(position, 1);
    }
    onShowInstructorsForm() {
        this.isInstructorsFormShown = true;
    }
    onHideInstructorsForm() {
        this.isInstructorsFormShown = false;
    }
    resetSubmitedPopup() {
        setTimeout(() => {
            this.isFormSubmitSuccess = false;
            this.isSeminarFormSubmited = false;
        }, 3000);
    }
};
AdminComponent.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_6__["SeminarsServices"] },
    { type: _seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_1__["InstructorsServices"] }
];
AdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-admin',
        template: __webpack_require__(/*! raw-loader!./admin.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/admin.component.html"),
        styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/pages/login/admin/admin.component.css")]
    })
], AdminComponent);



/***/ }),

/***/ "./src/app/pages/login/admin/instructor/instructor.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/login/admin/instructor/instructor.component.css ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".img-thumbnail{\r\nmax-width: 20%;\r\nheight: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vYWRtaW4vaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxjQUFjO0FBQ2QsWUFBWTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vYWRtaW4vaW5zdHJ1Y3Rvci9pbnN0cnVjdG9yLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW1nLXRodW1ibmFpbHtcclxubWF4LXdpZHRoOiAyMCU7XHJcbmhlaWdodDogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/admin/instructor/instructor.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/login/admin/instructor/instructor.component.ts ***!
  \**********************************************************************/
/*! exports provided: InstructorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorComponent", function() { return InstructorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../seminars/instructors/instructors.services */ "./src/app/pages/seminars/instructors/instructors.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let InstructorComponent = class InstructorComponent {
    constructor(instructorsServices) {
        this.instructorsServices = instructorsServices;
        this.instructorDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        this.isDeleted = false;
        this.isEdit = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log("jelkaOnChanges");
    }
    onEdit(instructor) {
        this.isEdit = true;
        this.editValues = instructor;
        console.log("[mj]-instructor", instructor);
        // this.editValue = quote.content;
    }
    onCancel() {
        // this.editValues = {};
        this.isEdit = false;
    }
    onFileSelected(event) {
        this.editValues.image = event.target.files[0];
        console.log("[mj]-instructorThis.editValues.image", this.editValues.image);
    }
    onSave(id) {
        this.instructor = this.editValues;
        console.log("instructor", this.instructor);
        this.instructorsServices.getEditInstructor(this.instructor).subscribe((responseData) => {
            this.instructor = this.editValues;
            console.log("[mj]-editInstructor", responseData);
            console.log("[mj]-this.editValues", this.editValues);
            this.editValues = {
                id: null,
                image: null,
                name: '',
                image_url: '',
                content: ''
            };
            console.log("[mj]-this.editValues2", this.editValues);
        });
        this.isEdit = false;
    }
    onDelete(id) {
        this.instructorsServices.deleteInstructor(id).subscribe(responseData => {
            this.instructorDeleted.emit(this.instructor);
            console.log("InstructorDeleted", responseData);
            this.isDeleted = true;
        });
    }
};
InstructorComponent.ctorParameters = () => [
    { type: _seminars_instructors_instructors_services__WEBPACK_IMPORTED_MODULE_1__["InstructorsServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"])()
], InstructorComponent.prototype, "instructor", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"])()
], InstructorComponent.prototype, "instructorDeleted", void 0);
InstructorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instructor',
        template: __webpack_require__(/*! raw-loader!./instructor.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/instructor/instructor.component.html"),
        styles: [__webpack_require__(/*! ./instructor.component.css */ "./src/app/pages/login/admin/instructor/instructor.component.css")]
    })
], InstructorComponent);



/***/ }),

/***/ "./src/app/pages/login/admin/seminar/seminar.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/pages/login/admin/seminar/seminar.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2FkbWluL3NlbWluYXIvc2VtaW5hci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/login/admin/seminar/seminar.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/login/admin/seminar/seminar.component.ts ***!
  \****************************************************************/
/*! exports provided: SeminarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeminarComponent", function() { return SeminarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_pages_seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/pages/seminars/upcoming-seminars/seminars.service */ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts");



let SeminarComponent = class SeminarComponent {
    constructor(seminarsServices) {
        this.seminarsServices = seminarsServices;
        this.seminarDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDeleted = false;
        this.isEdit = false;
    }
    ngOnInit() {
    }
    ngOnChanges() {
        console.log("jelkaOnChanges");
    }
    onEdit(seminar) {
        this.isEdit = true;
        this.editValues = seminar;
        console.log("[mj]-seminar", seminar);
        // this.editValue = quote.content;
    }
    onCancel() {
        // this.editValues = {};
        this.isEdit = false;
    }
    onSave(id) {
        this.seminar = this.editValues;
        console.log("seminar", this.seminar);
        this.seminarsServices.getEditContent(this.seminar).subscribe((responseData) => {
            this.seminar = this.editValues;
            console.log("[mj]-editContnet", responseData);
            console.log("[mj]-this.editValues", this.editValues);
            this.editValues = {
                id: null,
                title: '',
                town: '',
                seminars: '',
                group: '',
                instructors: '',
                date: '',
                time: '',
            };
            console.log("[mj]-this.editValues2", this.editValues);
        });
        this.isEdit = false;
    }
    onDelete(id) {
        this.seminarsServices.deleteContent(id).subscribe(responseData => {
            this.seminarDeleted.emit(this.seminar);
            console.log("SeminarDeleted", responseData);
            this.isDeleted = true;
        });
    }
};
SeminarComponent.ctorParameters = () => [
    { type: src_app_pages_seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_2__["SeminarsServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SeminarComponent.prototype, "seminar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SeminarComponent.prototype, "seminarDeleted", void 0);
SeminarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seminar',
        template: __webpack_require__(/*! raw-loader!./seminar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/admin/seminar/seminar.component.html"),
        styles: [__webpack_require__(/*! ./seminar.component.css */ "./src/app/pages/login/admin/seminar/seminar.component.css")]
    })
], SeminarComponent);



/***/ }),

/***/ "./src/app/pages/login/auth-guard.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/login/auth-guard.service.ts ***!
  \***************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let AuthGuard = class AuthGuard {
    constructor(authService, route) {
        this.authService = authService;
        this.route = route;
    }
    canActivate(route, state) {
        return this.authService.isAuthenticated().then((auth) => {
            if (auth) {
                console.log("AUTH", auth);
                return true;
            }
            else {
                console.log("AUTH2", auth);
                this.route.navigate(['/login']);
                return false;
            }
        });
    }
};
AuthGuard.ctorParameters = () => [
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], AuthGuard);



/***/ }),

/***/ "./src/app/pages/login/auth.service.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/auth.service.ts ***!
  \*********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
class AuthService {
    constructor() {
        this.loggedIn = false;
    }
    isAuthenticated() {
        const promise = new Promise((resolve, reject) => {
            resolve(this.loggedIn);
        });
        return promise;
    }
    login() {
        this.loggedIn = true;
        console.log("[mj]-login", this.loggedIn);
    }
    logout() {
        this.loggedIn = false;
        console.log("[mj]-Logout", this.loggedIn);
    }
}


/***/ }),

/***/ "./src/app/pages/login/login.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/login/login.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\r\n  font-weight: 400;\r\n  border: 0;\r\n  box-shadow: 0 2px 5px 0 rgba(0,0,0,.16), 0 2px 10px 0 rgba(0,0,0,.12);\r\n\r\n}\r\n.form-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n}\r\n.form-input{\r\n  box-sizing: content-box;\r\n  background-color: transparent;\r\n  border: none;\r\n  border-bottom: 1px solid #ced4da;\r\n  border-radius: 0;\r\n  outline: 0;\r\n  box-shadow: none;\r\n  transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;\r\n}\r\n.submit-button{\r\n\r\n  text-align: center;\r\n}\r\n.submit-button>.btn-primary{\r\n  width: 30%;\r\n}\r\n.hr-info-line{\r\n  border-bottom: 1px solid rgba(0, 0, 0, 0.125);\r\n}\r\n.contact-info{\r\n  text-align: center;\r\n}\r\n.form-container {\r\n  margin-top: auto;\r\n  margin-bottom: auto;\r\n}\r\n.icon-floating {\r\n  box-shadow: 0 5px 11px 0 rgba(0,0,0,.18), 0 4px 15px 0 rgba(0,0,0,.15);\r\n  position: relative;\r\n  z-index: 1;\r\n  vertical-align: middle;\r\n  display: inline-block;\r\n  overflow: hidden;\r\n  transition: all .2s ease-in-out;\r\n  margin: 10px;\r\n  border-radius: 50%;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  width: 47px;\r\n  height: 47px;\r\n}\r\n.icon-floating i {\r\n  font-size: 1.25rem;\r\n  line-height: 47px;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n.icon-floating-bck{\r\n  background-color: #82b1ff!important;\r\n}\r\ninput.ng-invalid.ng-touched{\r\n   border: 1px solid red;\r\n }\r\ntextarea.ng-invalid.ng-touched{\r\n  border: 1px solid red;\r\n}\r\ntextarea.ng-invalid :focus{\r\n  border: 1px solid green;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixTQUFTO0VBQ1QscUVBQXFFOztBQUV2RTtBQUNBO0VBRUUsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHFFQUFxRTtBQUN2RTtBQUVBOztFQUVFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSw2Q0FBNkM7QUFDL0M7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0Usc0VBQXNFO0VBQ3RFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsK0JBQStCO0VBQy9CLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGVBQWU7RUFDZixXQUFXO0VBQ1gsWUFBWTtBQUNkO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNDO0dBQ0UscUJBQXFCO0NBQ3ZCO0FBQ0E7RUFDQyxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLDAsMCwuMTYpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG5cclxufVxyXG4uZm9ybS1ib2R5IHtcclxuICAtbXMtZmxleDogMSAxIGF1dG87XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcGFkZGluZzogMS4yNXJlbTtcclxufVxyXG5cclxuLmZvcm0taW5wdXR7XHJcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgb3V0bGluZTogMDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG4gIHRyYW5zaXRpb246IGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnN1Ym1pdC1idXR0b257XHJcblxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uc3VibWl0LWJ1dHRvbj4uYnRuLXByaW1hcnl7XHJcbiAgd2lkdGg6IDMwJTtcclxufVxyXG4uaHItaW5mby1saW5le1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTI1KTtcclxufVxyXG4uY29udGFjdC1pbmZve1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZm9ybS1jb250YWluZXIge1xyXG4gIG1hcmdpbi10b3A6IGF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxufVxyXG4uaWNvbi1mbG9hdGluZyB7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggMTFweCAwIHJnYmEoMCwwLDAsLjE4KSwgMCA0cHggMTVweCAwIHJnYmEoMCwwLDAsLjE1KTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHRyYW5zaXRpb246IGFsbCAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB3aWR0aDogNDdweDtcclxuICBoZWlnaHQ6IDQ3cHg7XHJcbn1cclxuLmljb24tZmxvYXRpbmcgaSB7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiA0N3B4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uaWNvbi1mbG9hdGluZy1iY2t7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzgyYjFmZiFpbXBvcnRhbnQ7XHJcbn1cclxuIGlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZHtcclxuICAgYm9yZGVyOiAxcHggc29saWQgcmVkO1xyXG4gfVxyXG4gdGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVke1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJlZDtcclxufVxyXG50ZXh0YXJlYS5uZy1pbnZhbGlkIDpmb2N1c3tcclxuICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/login/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login.service */ "./src/app/pages/login/login.service.ts");






let LoginComponent = class LoginComponent {
    constructor(loginService, router, authService) {
        this.loginService = loginService;
        this.router = router;
        this.authService = authService;
    }
    ngOnInit() {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
        });
    }
    onSubmit() {
        if (!this.loginForm.valid) {
            return;
        }
        this.loginService.postContents(this.loginForm.value).subscribe(responseData => {
            this.credentialsData = responseData;
            if (this.credentialsData.auth) {
                this.authService.login();
                console.log("Login-Correct");
                this.router.navigate(['login/admin']);
            }
            else {
                this.authService.logout();
                console.log("incorect-");
            }
            this.loginForm.reset();
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _login_service__WEBPACK_IMPORTED_MODULE_5__["LoginServices"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/pages/login/login.component.css")]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/pages/login/login.service.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/login/login.service.ts ***!
  \**********************************************/
/*! exports provided: LoginServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginServices", function() { return LoginServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let LoginServices = class LoginServices {
    constructor(http) {
        this.http = http;
    }
    postContents(postData) {
        console.log("postData", postData);
        return this.http.post('http://127.0.0.1:8000/api/user/signin', { email: postData.email, password: postData.password }, { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'X-Requested-With': 'XMLHttpRequest' }) });
    }
};
LoginServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], LoginServices);



/***/ }),

/***/ "./src/app/pages/news/events/events.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/news/events/events.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvZXZlbnRzL2V2ZW50cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/news/events/events.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/news/events/events.component.ts ***!
  \*******************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let EventsComponent = class EventsComponent {
    constructor() { }
    ngOnInit() {
    }
};
EventsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-events',
        template: __webpack_require__(/*! raw-loader!./events.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/news/events/events.component.html"),
        styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/pages/news/events/events.component.css")]
    })
], EventsComponent);



/***/ }),

/***/ "./src/app/pages/news/news.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/news/news.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvbmV3cy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/news/news.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NewsComponent = class NewsComponent {
    constructor() { }
    ngOnInit() {
    }
};
NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-news',
        template: __webpack_require__(/*! raw-loader!./news.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/news/news.component.html"),
        styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/pages/news/news.component.css")]
    })
], NewsComponent);



/***/ }),

/***/ "./src/app/pages/news/photos/photos.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/news/photos/photos.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvcGhvdG9zL3Bob3Rvcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/news/photos/photos.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/news/photos/photos.component.ts ***!
  \*******************************************************/
/*! exports provided: PhotosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotosComponent", function() { return PhotosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let PhotosComponent = class PhotosComponent {
    constructor() { }
    ngOnInit() {
    }
};
PhotosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-photos',
        template: __webpack_require__(/*! raw-loader!./photos.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/news/photos/photos.component.html"),
        styles: [__webpack_require__(/*! ./photos.component.css */ "./src/app/pages/news/photos/photos.component.css")]
    })
], PhotosComponent);



/***/ }),

/***/ "./src/app/pages/news/publications/publications.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/news/publications/publications.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pdf-files{\r\n  width: 100%;\r\n  height:1000px;\r\n}\r\n.card {\r\n  position: relative;\r\n  display: flex;\r\n  flex-direction: column;\r\n  min-width: 0;\r\n  word-wrap: break-word;\r\n  background-color: #fff;\r\n  background-clip: border-box;\r\n  border: 1px solid rgba(0, 0, 0, 0.125);\r\n  border-radius: 0.25rem;\r\n  cursor: pointer;\r\n  clear: both;\r\n  padding: 5px 15px;\r\n  background-image: linear-gradient(to right, #20950d, #57ba2f);\r\n  border-bottom: 1px solid #B4B5B4;\r\n  border-right: 1px solid #B4B5B4;\r\n  box-shadow: 0 2px 1px #9c9c9c;\r\n\r\n}\r\n.card p {\r\n  margin-top: 0.5rem;\r\n  margin-bottom: 0.5rem;\r\n  font-size: 25px;\r\n  font-style: italic;\r\n  font-weight: 600;\r\n  color: white;\r\n  text-shadow: 1.5px 1px 1px black;\r\n}\r\n.card-body {\r\n  flex: 1 1 auto;\r\n  padding: 0.25rem;\r\n}\r\n.arrow{\r\n  text-align: right;\r\n  padding-top: 0.7rem;\r\n  padding-bottom: 0.5rem;\r\n  color: white;\r\n  text-shadow: 1.5px 1px 1px black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy9wdWJsaWNhdGlvbnMvcHVibGljYXRpb25zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsYUFBYTtBQUNmO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QiwyQkFBMkI7RUFDM0Isc0NBQXNDO0VBQ3RDLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsV0FBVztFQUNYLGlCQUFpQjtFQUNqQiw2REFBNkQ7RUFDN0QsZ0NBQWdDO0VBQ2hDLCtCQUErQjtFQUMvQiw2QkFBNkI7O0FBRS9CO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixnQ0FBZ0M7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9uZXdzL3B1YmxpY2F0aW9ucy9wdWJsaWNhdGlvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wZGYtZmlsZXN7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjEwMDBweDtcclxufVxyXG4uY2FyZCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtaW4td2lkdGg6IDA7XHJcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiBib3JkZXItYm94O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzIwOTUwZCwgIzU3YmEyZik7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNCNEI1QjQ7XHJcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0I0QjVCNDtcclxuICBib3gtc2hhZG93OiAwIDJweCAxcHggIzljOWM5YztcclxuXHJcbn1cclxuXHJcbi5jYXJkIHAge1xyXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LXNoYWRvdzogMS41cHggMXB4IDFweCBibGFjaztcclxufVxyXG4uY2FyZC1ib2R5IHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBwYWRkaW5nOiAwLjI1cmVtO1xyXG59XHJcbi5hcnJvd3tcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBwYWRkaW5nLXRvcDogMC43cmVtO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtc2hhZG93OiAxLjVweCAxcHggMXB4IGJsYWNrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/news/publications/publications.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/news/publications/publications.component.ts ***!
  \*******************************************************************/
/*! exports provided: PublicationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicationsComponent", function() { return PublicationsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _shared_server_url_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../../shared/server-url.services */ "./src/app/shared/server-url.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");




let PublicationsComponent = class PublicationsComponent {
    constructor(serverUrlServices, senitizer) {
        this.serverUrlServices = serverUrlServices;
        this.senitizer = senitizer;
        this.isFirstFileVisible = false;
        this.isSecondFileVisible = false;
        this.serverFile1 = '';
        this.serverFile2 = '';
    }
    ngOnInit() {
        this.serverFile1 = this.senitizer.bypassSecurityTrustResourceUrl(this.serverUrlServices.serverStorage + 'pdf/zoposa.pdf');
        this.serverFile2 = this.senitizer.bypassSecurityTrustResourceUrl(this.serverUrlServices.serverStorage + 'pdf/antoniou.pdf');
    }
    openNewTab() {
        window.open('https://www.blic.rs/slobodno-vreme/vesti/neobicna-tehnika-koja-pomaze-da-psu-izlecite-povredu-ili-smanjite-agresivnost/17rmfg1', '_blank');
    }
};
PublicationsComponent.ctorParameters = () => [
    { type: _shared_server_url_services__WEBPACK_IMPORTED_MODULE_2__["ServerUrlServices"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
];
PublicationsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-publications',
        template: __webpack_require__(/*! raw-loader!./publications.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/news/publications/publications.component.html"),
        styles: [__webpack_require__(/*! ./publications.component.css */ "./src/app/pages/news/publications/publications.component.css")]
    })
], PublicationsComponent);



/***/ }),

/***/ "./src/app/pages/news/video/video.component.css":
/*!******************************************************!*\
  !*** ./src/app/pages/news/video/video.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".video-layout{\r\n  width: 100%;\r\n  height:360px;\r\n  margin-bottom: 20px;\r\n  box-shadow: 0 2px 5px 0 rgba(5, 41, 35, 0.68), 0 2px 10px 0 rgba(0,0,0,.12);\r\n  border-radius: 8px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3cy92aWRlby92aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsMkVBQTJFO0VBQzNFLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ld3MvdmlkZW8vdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi52aWRlby1sYXlvdXR7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OjM2MHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSg1LCA0MSwgMzUsIDAuNjgpLCAwIDJweCAxMHB4IDAgcmdiYSgwLDAsMCwuMTIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/news/video/video.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/news/video/video.component.ts ***!
  \*****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _video_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./video.service */ "./src/app/pages/news/video/video.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




let VideoComponent = class VideoComponent {
    constructor(videoServices, senitizer) {
        this.videoServices = videoServices;
        this.senitizer = senitizer;
        this.videos = [];
    }
    ngOnInit() {
        this.onGetVideos();
    }
    onGetVideos() {
        this.videoServices.getVideo().subscribe(responseData => {
            this.videos = responseData;
            console.log("[mj]-getVideos", this.videos);
        });
    }
    getVideosUrl(video) {
        return this.senitizer.bypassSecurityTrustResourceUrl(video);
    }
};
VideoComponent.ctorParameters = () => [
    { type: _video_service__WEBPACK_IMPORTED_MODULE_1__["VideoServices"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"] }
];
VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-video',
        template: __webpack_require__(/*! raw-loader!./video.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/news/video/video.component.html"),
        styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/pages/news/video/video.component.css")]
    })
], VideoComponent);



/***/ }),

/***/ "./src/app/pages/news/video/video.service.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/news/video/video.service.ts ***!
  \***************************************************/
/*! exports provided: VideoServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoServices", function() { return VideoServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




let VideoServices = class VideoServices {
    constructor(http) {
        this.http = http;
        this.serverApi = 'http://127.0.0.1:8000/api/video';
    }
    getVideo() {
        return this.http.get('http://127.0.0.1:8000/api/videos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData.video) {
                if (responseData.video.hasOwnProperty(key)) {
                    postsArray.push(Object.assign({}, responseData.video[key], { key }));
                }
            }
            console.log("[mj]-GetVIdeoServices", postsArray);
            return postsArray;
        }));
    }
    postVideo(postData) {
        console.log("postData", postData);
        return this.http.post(this.serverApi, postData);
    }
    getEditVideo(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        /* const fd = new FormData();
         fd.append('image', postData.image);
         fd.append('image_url', postData.image.name);
         fd.append('name', postData.name);
         fd.append('content', postData.content);
         console.log('[mj]-getEditInstructor', fd.has('image'));*/
        return this.http.put(this.serverApi + '/' + postData.id, postData, { headers });
    }
    deleteVideo(id) {
        return this.http.delete(this.serverApi + '/' + id);
    }
};
VideoServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
VideoServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], VideoServices);



/***/ }),

/***/ "./src/app/pages/quote/quote.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/quote/quote.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3F1b3RlL3F1b3RlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/quote/quote.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/quote/quote.component.ts ***!
  \************************************************/
/*! exports provided: QuoteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteComponent", function() { return QuoteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _about_us_about_us_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../about-us/about-us.service */ "./src/app/pages/about-us/about-us.service.ts");



let QuoteComponent = class QuoteComponent {
    constructor(aboutUsServices) {
        this.aboutUsServices = aboutUsServices;
        this.quoteDeleted = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.isDeleted = false;
        this.isEdit = false;
    }
    ngOnInit() {
        console.log("quotes", this.quote);
    }
    ngOnChanges() {
        console.log("jelkaOnChanges");
    }
    onEdit(quote) {
        this.isEdit = true;
        this.editValue = quote.content;
    }
    onCancel() {
        this.editValue = '';
        this.isEdit = false;
    }
    onSave(id) {
        this.quote.content = this.editValue;
        console.log("quote", this.quote);
        this.aboutUsServices.getEditContent(this.quote).subscribe((responseData) => {
            this.quote.content = this.editValue;
            //this.quote = responseData ;
            console.log("editContnet", responseData);
            this.editValue = '';
        });
        this.isEdit = false;
    }
    onDelete(id) {
        this.aboutUsServices.deleteContent(id).subscribe(responseData => {
            this.quoteDeleted.emit(this.quote);
            //return message if quote deleted!
            console.log("jeki", responseData);
            this.isDeleted = true;
        });
    }
};
QuoteComponent.ctorParameters = () => [
    { type: _about_us_about_us_service__WEBPACK_IMPORTED_MODULE_2__["AboutUsServices"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], QuoteComponent.prototype, "quote", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuoteComponent.prototype, "quoteDeleted", void 0);
QuoteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quote',
        template: __webpack_require__(/*! raw-loader!./quote.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/quote/quote.component.html"),
        styles: [__webpack_require__(/*! ./quote.component.css */ "./src/app/pages/quote/quote.component.css")]
    })
], QuoteComponent);



/***/ }),

/***/ "./src/app/pages/rejuvance/rejuvance.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/rejuvance/rejuvance.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".logo{\r\n  display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  width: 50%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVqdXZhbmNlL3JlanV2YW5jZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvcmVqdXZhbmNlL3JlanV2YW5jZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ297XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/rejuvance/rejuvance.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/rejuvance/rejuvance.component.ts ***!
  \********************************************************/
/*! exports provided: RejuvanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejuvanceComponent", function() { return RejuvanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../shared/server-url.services */ "./src/app/shared/server-url.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../seminars/upcoming-seminars/seminars.service */ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts");




let RejuvanceComponent = class RejuvanceComponent {
    constructor(seminarsServices, serverUrlServices) {
        this.seminarsServices = seminarsServices;
        this.serverUrlServices = serverUrlServices;
        this.serverUrl = '';
        this.seminars = [];
        this.titles = [];
    }
    ngOnInit() {
        this.seminarsServices.getContents().subscribe(responseData => {
            this.seminars = responseData;
            for (const key in responseData) {
                if (!this.titles.includes(responseData[key].title)) {
                    this.titles.push(responseData[key].title);
                }
            }
        });
        this.serverUrl = this.serverUrlServices.serverStorage;
        console.log("ServiceApi", this.serverUrl);
    }
};
RejuvanceComponent.ctorParameters = () => [
    { type: _seminars_upcoming_seminars_seminars_service__WEBPACK_IMPORTED_MODULE_3__["SeminarsServices"] },
    { type: _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__["ServerUrlServices"] }
];
RejuvanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-rejuvance',
        template: __webpack_require__(/*! raw-loader!./rejuvance.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/rejuvance/rejuvance.component.html"),
        styles: [__webpack_require__(/*! ./rejuvance.component.css */ "./src/app/pages/rejuvance/rejuvance.component.css")]
    })
], RejuvanceComponent);



/***/ }),

/***/ "./src/app/pages/seminars/btaa/btaa.component.css":
/*!********************************************************!*\
  !*** ./src/app/pages/seminars/btaa/btaa.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n.separator-holder {\r\n  position: absolute;\r\n  display: block;\r\n  top: 49.99%;\r\n  width: 2000px;\r\n  border-top: 1px solid red;\r\n  content: '';\r\n}\r\n.separator-holder, .accent-border-color .bg-on .separator-holder {\r\n  border-color: rgba(129,215,66,0.12);\r\n}\r\n.separator-left {\r\n\r\n  margin-right: 1em;\r\n}\r\n.separator-right {\r\n\r\n  margin-right: 1em;\r\n}\r\n.accent-gradient #page .accent-title-color .dt-fancy-title {\r\n  background: -webkit-linear-gradient(left, #21960f 30%, #5abc31 100%);\r\n  color: transparent;\r\n  -webkit-background-clip: text;\r\n  background-clip: text;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VtaW5hcnMvYnRhYS9idGFhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsYUFBYTtFQUNiLHlCQUF5QjtFQUN6QixXQUFXO0FBQ2I7QUFDQTtFQUNFLG1DQUFtQztBQUNyQztBQUNBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUVBOztFQUVFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0Usb0VBQW9FO0VBQ3BFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2VtaW5hcnMvYnRhYS9idGFhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnNlcGFyYXRvci1ob2xkZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDQ5Ljk5JTtcclxuICB3aWR0aDogMjAwMHB4O1xyXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZWQ7XHJcbiAgY29udGVudDogJyc7XHJcbn1cclxuLnNlcGFyYXRvci1ob2xkZXIsIC5hY2NlbnQtYm9yZGVyLWNvbG9yIC5iZy1vbiAuc2VwYXJhdG9yLWhvbGRlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDEyOSwyMTUsNjYsMC4xMik7XHJcbn1cclxuLnNlcGFyYXRvci1sZWZ0IHtcclxuXHJcbiAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbn1cclxuXHJcbi5zZXBhcmF0b3ItcmlnaHQge1xyXG5cclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxufVxyXG4uYWNjZW50LWdyYWRpZW50ICNwYWdlIC5hY2NlbnQtdGl0bGUtY29sb3IgLmR0LWZhbmN5LXRpdGxlIHtcclxuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudChsZWZ0LCAjMjE5NjBmIDMwJSwgIzVhYmMzMSAxMDAlKTtcclxuICBjb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLWNsaXA6IHRleHQ7XHJcbiAgYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/seminars/btaa/btaa.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/seminars/btaa/btaa.component.ts ***!
  \*******************************************************/
/*! exports provided: BtaaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BtaaComponent", function() { return BtaaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let BtaaComponent = class BtaaComponent {
    constructor() { }
    ngOnInit() {
    }
};
BtaaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-btaa',
        template: __webpack_require__(/*! raw-loader!./btaa.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/btaa/btaa.component.html"),
        styles: [__webpack_require__(/*! ./btaa.component.css */ "./src/app/pages/seminars/btaa/btaa.component.css")]
    })
], BtaaComponent);



/***/ }),

/***/ "./src/app/pages/seminars/instructors/instructors.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/seminars/instructors/instructors.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".instructors-table img{\r\n\r\n  width: 40%;\r\n  height: auto;\r\n  box-shadow: 0.5px 0.5px 5px;\r\n    border-bottom-left-radius: calc(1.25rem - -5px);\r\n    border-bottom-right-radius: calc(0.25rem - 1px);\r\n}\r\n.instructors-table{\r\n\r\n align-items: center;\r\n}\r\n.card .card-body {\r\n  flex: 1 1 auto;\r\n  padding: 1.25rem;\r\n  margin-top: -5px;\r\n  box-shadow: 0.5px 0.5px 5px;\r\n  border-bottom-left-radius: calc(1.25rem - -5px);\r\n  border-bottom-right-radius: calc(0.25rem - 1px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VtaW5hcnMvaW5zdHJ1Y3RvcnMvaW5zdHJ1Y3RvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLDJCQUEyQjtJQUN6QiwrQ0FBK0M7SUFDL0MsK0NBQStDO0FBQ25EO0FBQ0E7O0NBRUMsbUJBQW1CO0FBQ3BCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQiwyQkFBMkI7RUFDM0IsK0NBQStDO0VBQy9DLCtDQUErQztBQUNqRCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbWluYXJzL2luc3RydWN0b3JzL2luc3RydWN0b3JzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5zdHJ1Y3RvcnMtdGFibGUgaW1ne1xyXG5cclxuICB3aWR0aDogNDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA1cHg7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiBjYWxjKDEuMjVyZW0gLSAtNXB4KTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiBjYWxjKDAuMjVyZW0gLSAxcHgpO1xyXG59XHJcbi5pbnN0cnVjdG9ycy10YWJsZXtcclxuXHJcbiBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5jYXJkIC5jYXJkLWJvZHkge1xyXG4gIGZsZXg6IDEgMSBhdXRvO1xyXG4gIHBhZGRpbmc6IDEuMjVyZW07XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBib3gtc2hhZG93OiAwLjVweCAwLjVweCA1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogY2FsYygxLjI1cmVtIC0gLTVweCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IGNhbGMoMC4yNXJlbSAtIDFweCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/seminars/instructors/instructors.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/seminars/instructors/instructors.component.ts ***!
  \*********************************************************************/
/*! exports provided: InstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorsComponent", function() { return InstructorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _instructors_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./instructors.services */ "./src/app/pages/seminars/instructors/instructors.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let InstructorsComponent = class InstructorsComponent {
    constructor(instructorsServices) {
        this.instructorsServices = instructorsServices;
        this.instructors = [];
    }
    ngOnInit() {
        this.onGetTherapist();
    }
    onGetTherapist() {
        this.instructorsServices.getTherapist().subscribe(responseData => {
            this.instructors = responseData;
            console.log("[mj]- onGetTherapist", this.instructors);
        });
    }
};
InstructorsComponent.ctorParameters = () => [
    { type: _instructors_services__WEBPACK_IMPORTED_MODULE_1__["InstructorsServices"] }
];
InstructorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-instructors',
        template: __webpack_require__(/*! raw-loader!./instructors.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/instructors/instructors.component.html"),
        styles: [__webpack_require__(/*! ./instructors.component.css */ "./src/app/pages/seminars/instructors/instructors.component.css")]
    })
], InstructorsComponent);



/***/ }),

/***/ "./src/app/pages/seminars/instructors/instructors.services.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/seminars/instructors/instructors.services.ts ***!
  \********************************************************************/
/*! exports provided: InstructorsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstructorsServices", function() { return InstructorsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/server-url.services */ "./src/app/shared/server-url.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let InstructorsServices = class InstructorsServices {
    constructor(http, serverUrlServices) {
        this.http = http;
        this.serverUrlServices = serverUrlServices;
    }
    getTherapist() {
        return this.http.get(this.serverUrlServices.serverApi + 'therapists')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData.therapists) {
                if (responseData.therapists.hasOwnProperty(key)) {
                    if (responseData.therapists[key].image_url) {
                        const image_url = responseData.therapists[key].image_url;
                        responseData.therapists[key].image_url = this.serverUrlServices.serverStorage + image_url;
                    }
                    postsArray.push(Object.assign({}, responseData.therapists[key], { key }));
                }
            }
            console.log("[mj]-getTherapists", responseData);
            return postsArray;
        }));
    }
    postTherapist(postData) {
        const fd = new FormData();
        fd.append('image', postData.image);
        fd.append('image_url', postData.image.name);
        fd.append('name', postData.name);
        fd.append('content', postData.content);
        console.log("postData", fd);
        console.log("postData2", postData.image.name);
        return this.http.post(this.serverUrlServices.serverApi + 'therapist', fd);
    }
    getEditInstructor(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        /* const fd = new FormData();
         fd.append('image', postData.image);
         fd.append('image_url', postData.image.name);
         fd.append('name', postData.name);
         fd.append('content', postData.content);
         console.log('[mj]-getEditInstructor', fd.has('image'));*/
        return this.http.put(this.serverUrlServices.serverApi + 'therapist' + '/' + postData.id, postData, { headers });
    }
    deleteInstructor(id) {
        return this.http.delete(this.serverUrlServices.serverApi + 'therapist' + '/' + id);
    }
};
InstructorsServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__["ServerUrlServices"] }
];
InstructorsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], InstructorsServices);



/***/ }),

/***/ "./src/app/pages/seminars/seminars.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/seminars/seminars.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbWluYXJzL3NlbWluYXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/seminars/seminars.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/seminars/seminars.component.ts ***!
  \******************************************************/
/*! exports provided: SeminarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeminarsComponent", function() { return SeminarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SeminarsComponent = class SeminarsComponent {
    constructor() { }
    ngOnInit() {
    }
};
SeminarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-seminars',
        template: __webpack_require__(/*! raw-loader!./seminars.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/seminars.component.html"),
        styles: [__webpack_require__(/*! ./seminars.component.css */ "./src/app/pages/seminars/seminars.component.css")]
    })
], SeminarsComponent);



/***/ }),

/***/ "./src/app/pages/seminars/teaching-program/teaching-program.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/seminars/teaching-program/teaching-program.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbWluYXJzL3RlYWNoaW5nLXByb2dyYW0vdGVhY2hpbmctcHJvZ3JhbS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/seminars/teaching-program/teaching-program.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/seminars/teaching-program/teaching-program.component.ts ***!
  \*******************************************************************************/
/*! exports provided: TeachingProgramComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeachingProgramComponent", function() { return TeachingProgramComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TeachingProgramComponent = class TeachingProgramComponent {
    constructor() { }
    ngOnInit() {
    }
};
TeachingProgramComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-teaching-program',
        template: __webpack_require__(/*! raw-loader!./teaching-program.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/teaching-program/teaching-program.component.html"),
        styles: [__webpack_require__(/*! ./teaching-program.component.css */ "./src/app/pages/seminars/teaching-program/teaching-program.component.css")]
    })
], TeachingProgramComponent);



/***/ }),

/***/ "./src/app/pages/seminars/training-course/training-course.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/seminars/training-course/training-course.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\r\n  margin-top: 0;\r\n  margin-bottom: 1rem;\r\n  font-size: 28px;\r\n}\r\nimg{\r\n  width: 3%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2VtaW5hcnMvdHJhaW5pbmctY291cnNlL3RyYWluaW5nLWNvdXJzZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCO0FBQ0E7RUFDRSxTQUFTO0FBQ1giLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zZW1pbmFycy90cmFpbmluZy1jb3Vyc2UvdHJhaW5pbmctY291cnNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwIHtcclxuICBtYXJnaW4tdG9wOiAwO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG59XHJcbmltZ3tcclxuICB3aWR0aDogMyU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/seminars/training-course/training-course.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/seminars/training-course/training-course.component.ts ***!
  \*****************************************************************************/
/*! exports provided: TrainingCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrainingCourseComponent", function() { return TrainingCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TrainingCourseComponent = class TrainingCourseComponent {
    constructor() { }
    ngOnInit() {
    }
};
TrainingCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-training-course',
        template: __webpack_require__(/*! raw-loader!./training-course.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/training-course/training-course.component.html"),
        styles: [__webpack_require__(/*! ./training-course.component.css */ "./src/app/pages/seminars/training-course/training-course.component.css")]
    })
], TrainingCourseComponent);



/***/ }),

/***/ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/seminars/upcoming-seminars/seminars.service.ts ***!
  \**********************************************************************/
/*! exports provided: SeminarsServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SeminarsServices", function() { return SeminarsServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/server-url.services */ "./src/app/shared/server-url.services.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let SeminarsServices = class SeminarsServices {
    constructor(http, serverUrlServices) {
        this.http = http;
        this.serverUrlServices = serverUrlServices;
    }
    postContents(postData) {
        console.log("postData", postData);
        return this.http.post(this.serverUrlServices.serverApi + 'seminar', postData);
    }
    getContents() {
        return this.http.get(this.serverUrlServices.serverApi + 'seminars')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(responseData => {
            const postsArray = [];
            for (const key in responseData.seminars) {
                if (responseData.seminars.hasOwnProperty(key)) {
                    postsArray.push(Object.assign({}, responseData.seminars[key], { key }));
                }
            }
            console.log("[mj]-getContents", responseData);
            return postsArray;
        }));
    }
    getEditContent(postData) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]({ 'Content-Type': 'application/json' });
        return this.http.put(this.serverUrlServices.serverApi + 'seminar' + '/' + postData.id, postData, { headers });
    }
    deleteContent(id) {
        return this.http.delete(this.serverUrlServices.serverApi + 'seminar' + '/' + id);
    }
};
SeminarsServices.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _shared_server_url_services__WEBPACK_IMPORTED_MODULE_1__["ServerUrlServices"] }
];
SeminarsServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])()
], SeminarsServices);



/***/ }),

/***/ "./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NlbWluYXJzL3VwY29taW5nLXNlbWluYXJzL3VwY29taW5nLXNlbWluYXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.ts ***!
  \*********************************************************************************/
/*! exports provided: UpcomingSeminarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingSeminarsComponent", function() { return UpcomingSeminarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _seminars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./seminars.service */ "./src/app/pages/seminars/upcoming-seminars/seminars.service.ts");



let UpcomingSeminarsComponent = class UpcomingSeminarsComponent {
    constructor(seminarsServices) {
        this.seminarsServices = seminarsServices;
        this.seminars = [];
        this.titles = [];
    }
    ngOnInit() {
        this.seminarsServices.getContents().subscribe(responseData => {
            this.seminars = responseData;
            for (const key in responseData) {
                if (!this.titles.includes(responseData[key].title)) {
                    this.titles.push(responseData[key].title);
                }
            }
        });
    }
};
UpcomingSeminarsComponent.ctorParameters = () => [
    { type: _seminars_service__WEBPACK_IMPORTED_MODULE_2__["SeminarsServices"] }
];
UpcomingSeminarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-upcoming-seminars',
        template: __webpack_require__(/*! raw-loader!./upcoming-seminars.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.html"),
        styles: [__webpack_require__(/*! ./upcoming-seminars.component.css */ "./src/app/pages/seminars/upcoming-seminars/upcoming-seminars.component.css")]
    })
], UpcomingSeminarsComponent);



/***/ }),

/***/ "./src/app/shared/dropdown.directive.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/dropdown.directive.ts ***!
  \**********************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DropdownDirective = class DropdownDirective {
    constructor() {
        this.isOpen = false;
    }
    toggleOpen() {
        this.isOpen = !this.isOpen;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.open')
], DropdownDirective.prototype, "isOpen", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('click')
], DropdownDirective.prototype, "toggleOpen", null);
DropdownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
        selector: '[appDropdown]'
    })
], DropdownDirective);



/***/ }),

/***/ "./src/app/shared/server-url.services.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/server-url.services.ts ***!
  \***********************************************/
/*! exports provided: ServerUrlServices */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerUrlServices", function() { return ServerUrlServices; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ServerUrlServices = class ServerUrlServices {
    constructor() {
        this.serverStorage = 'http://127.0.0.1:8000/storage/';
        this.serverApi = 'http://127.0.0.1:8000/api/';
    }
};
ServerUrlServices = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ServerUrlServices);



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programiranje projekti\bowen\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map