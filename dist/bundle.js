/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}

/* general variables */
:root {
    --shadow: #ddd;
    --main-color: rgb(8, 145, 178);
}

/* mobile varibles */
:root {
    --side-padding: 24px;
    --card-title-font: 28px;
}

/* tablet varibles */
:root {
    --side-padding-tablet: 4vw;
    --card-tablet-fontsize: 2vw;
    --card-tablet-title-fontsize: 3vw;
    --card-tablet-fontsize-outro: 16px;
    --outro-title-tablet: 32px;
    --card-tablet-heading-fontsize: 5vw;
    --card-tablet-content-fontsize: 2vw
}

/* desktop variables  */
:root {
    --side-padding-desktop: 5vw;
    --outro-title-desktop: 3vw;
    --outro-content-font-desktop: 1.5vw;
    --about-content-desktop: 2vw;
    --desktop-card-gap: 4vw;
    --desktop-card-title-fontsize: 2vw;
    --desktop-card-description-fontsize: 1.5vw;
}


/* mobile and general layout */

body {
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}

svg {

    transform: scale(1.1);
    -webkit-transform: scale(1.1);

}

a {
    text-decoration: none;
    color: inherit;
}

.top-photo-container {

    padding: 1.5rem;
    height: auto;
    position: relative;
    background: rgb(8, 145, 178);
    background: linear-gradient(148deg, rgba(8, 145, 178, 1) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);

}

.top-photo>img {
    width: 100%;
    object-fit: cover;
    box-shadow: 0px 0px 8px var(--shadow);
}

.name {
    font-size: 4rem;
    font-weight: 500;
    color: white;
    text-shadow: 0px 0px 4px black;
    position: absolute;
    left: calc(.5rem + 32px);
    bottom: 32px;
    line-height: 1.2;

}

.section-1 {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 var(--side-padding);
    gap: 1rem;
}

.heading {
    font-size: 3rem;
    font-weight: 300;
}

.para {
    font-size: 1.25rem;
    line-height: 1.25;
    color: gray;
    padding-bottom: .25rem;
}

.icons {
    font-size: 2rem;
    display: flex;
    gap: 1.5rem;
}

.section-2 {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0 8rem 0;
    width: calc(100vw - (var(--side-padding)*2));
    padding: var(--side-padding)
}

.card-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;
    width: calc(100vw - var(--side-padding) * 2);
}

.mywork-header {
    margin: 2rem;
}

.icons>a>svg {
    width: 2rem;
    height: auto;
}

.card-content {
    height: 175px;
    padding: 1rem;
}

.project-card {
    box-shadow: 2px 2px 8px var(--shadow);
    max-width: calc(100vw - var(--side-padding * 2));
}

.card-icons>a>svg,
.card-icons>a {
    width: auto;
    height: var(--card-title-font);
    font-size: var(--card-title-font);
}

.card-photo>img {
    width: 100%;
    object-fit: cover;
}

.img-container {
    width: calc(100vw - 3rem);
}

.card-title-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: .25rem 0;
}

.card-project-name,
.github-card {
    font-size: var(--card-title-font);

}

.card-icons {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: .5rem;
}

.text-content {
    padding-bottom: 1.5rem;
}

.project-description {
    color: #444;
    font-size: 1.25rem;
}

.bottom-section {
    background-color: var(--main-color);
}

.outro-content {

    display: flex;
    flex-direction: column;
    gap: .75rem;
    color: #fff;
    padding: 2rem 1.5rem 4rem 1.5rem;
}

.outro-body {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
}

.contact-me {
    text-align: center;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: .5rem;
}

.outro-photo {
    width: 100vw;
    height: auto;
}


.outro-photo>img {
    width: 100vw;
    height: auto;
    object-fit: cover;
    display: block;
}

.outro-1 {
    font-size: 1.75rem;

}

.outro-2,
.outro-3,
.outro-email {
    font-size: 1.5rem;
}

.outro-icons {
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
}

.outro-icons>a>svg {
    height: 3rem;
    width: auto;
}

.phone-icon,
.email-icon {
    display: none;
}


.outro-icon-text {
    font-size: 3rem;
}


@media (min-width: 500px) and (max-width: 999px) {

    .name {
        font-size: 2.5rem;
        left: auto;
        scale: 1.25;
        transform: translateX(11rem);
        top: 1.75rem;
    }

    .section-1>.about-header {
        display: flex;
        justify-content: center;
        font-size: 1.75rem;
        line-height: 1.5;
    }

    .section-1>.para {
        font-size: 1.5rem;
        line-height: 1.1;
    }

    .section-1 {
        background-color: #fff;
        box-shadow: 2px 2px 2px var(--shadow);
        text-align: left;
        display: block;
        width: calc(100vw - (var(--side-padding-tablet * 6)));
        padding: 3rem 1rem 3rem 1rem;
        margin: 4rem 2.5rem 0 2.5rem;
        border: none;
        box-shadow: 2px 2px 6px var(--shadow);
    }

    .top-photo-container {
        background: none;
        padding: 0 .5rem .25rem 0;
        float: left;

    }

    .top-photo>img {
        width: 250px;
        height: 250px;
        object-fit: cover;

    }

    .top-about-container {
        display: block;
        padding: var(--side-padding-tablet) var(--side-padding-tablet) 3rem var(--side-padding-tablet);
        width: calc(100vw - (var(--side-padding-tablet * 2)));
        background: var(--main-color);
        background: linear-gradient(165deg, var(--main-color) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);
    }

    .section-2 {
        margin-top: 0;
        width: calc(100vw - (var(--side-padding-tablet)*4));
        padding: calc(var(--side-padding-tablet) * 2);
        padding-top: 0;
        align-items: start;

    }

    .project-card {

        width: clamp(180px, calc((100vw - (var(--side-padding-tablet)*4) - 3rem) / 2), 375px);
    }

    .card-content {
        height: 100px;
    }

    .card-container {
        justify-content: space-between;
        gap: 3rem;
        width: calc(100vw - var(--side-padding-tablet)*4)
    }

    .card-title-container {
        padding-bottom: .5rem;
    }

    .img-container {
        width: 100%;
    }

    .heading {
        font-size: var(--card-tablet-heading-fontsize);
    }

    .mywork-header {
        padding: .5rem 0;
        margin: 0;
    }


    .project-description {
        font-size: var(--card-tablet-content-fontsize);
    }

    .card-project-name {
        font-size: var(--card-tablet-title-fontsize);
    }

    .card-icons {
        padding: 0;
        justify-self: flex-end;
    }

    .card-icons>a>svg,
    .card-icons>a {
        font-size: var(--card-tablet-title-fontsize);
        height: var(--card-tablet-title-fontsize);
    }

    .bottom-section {

        width: calc(100vw - ((var(--side-padding-tablet))*2));
        padding: 2.5rem var(--side-padding-tablet) 3rem var(--side-padding-tablet);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .contact-me {

        text-align: start;
        font-size: var(--outro-title-tablet);
    }

    .outro-content {
        padding: 4rem 5rem 4rem 1rem;

    }

    .outro-1,
    .outro-2,
    .outro-3,
    .outro-email {
        font-size: var(--card-tablet-fontsize-outro);
    }

    .outro-content,
    .outro-email {
        justify-content: center;

        text-align: start;
    }

    .outro-body {
        gap: 1rem;
    }

    .outro-photo {
        width: calc(100vw/3);
    }

    .outro-email {
        padding: .5rem 0;
    }

    .outro-photo>img {
        width: calc(100vw/3);
        height: auto;
        object-fit: cover;
        display: block;
        justify-self: flex-end;
    }

    .outro-icons {
        justify-content: flex-start;
        padding: 0;

    }



    .outro-icons>a>svg,
    .outro-icons>a {
        height: var(--outro-title-tablet);
        font-size: var(--outro-title-tablet);

    }

    .phone-icon,
    .email-icon {
        display: block;
        width: var(--card-tablet-fontsize-outro);
        height: auto;
    }

    .phone,
    .email {
        display: flex;
        align-items: center;
        gap: .5rem;
    }

    .section-1>.icons {
        display: none;
    }
}

@media (min-width: 1000px) {

    .name {
        font-size: 3.5rem;
        width: 30vw;
        font-weight: 500;
        text-shadow: 2px 2px 6px #000;
        line-height: .85;

    }

    .section-1>.about-header {
        display: flex;
        justify-content: flex-start;
        width: 100%;
        font-size: 3vw;
        line-height: 2;
    }

    .section-1>.para {
        font-size: var(--about-content-desktop);
        line-height: 1.1;
        vertical-align: middle;
        margin-top: auto;
        margin-bottom: auto;
    }

    .section-1 {
        background-color: #fff;
        box-shadow: 2px 2px 2px var(--shadow);
        text-align: left;
        display: flex;
        flex-direction: column;
        height: 28vw;
        /* width: calc(100vw - (var(--side-padding-tablet * 6))); */
        padding: 32px 64px 32px 16px;
        /* margin: 2.5vw 0 2.5vw 0; */
        border: none;
        box-shadow: 2px 2px 6px var(--shadow);

    }

    .top-photo-container {
        background: none;
        padding: 0;
        position: relative;




    }

    .top-photo>img {
        height: 35vw;
        width: 35vw;

        object-fit: cover;
        box-shadow: none;


    }

    .top-about-container {
        display: flex;
        align-items: center;
        padding: var(--side-padding-desktop) var(--side-padding-desktop) 5rem var(--side-padding-desktop);
        width: calc(100vw - (var(--side-padding-desktop * 2)));
        background: var(--main-color);
        background: linear-gradient(167deg, var(--main-color) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 61%);
    }

    .section-1>.icons {
        width: 100%;
        display: flex;
        justify-content: end;


    }

    .icons>a>svg,
    .icons>a {
        font-size: calc(var(--about-content-desktop) + 1vw);
        width: calc(var(--about-content-desktop) + 1vw);
        height: calc(var(--about-content-desktop) + 1vw);
    }




    .section-2 {
        margin-top: 0;
        width: calc(100vw - (var(--side-padding-desktop) * 2));
        padding: 0 var(--side-padding-desktop) 0 var(--side-padding-desktop);

        align-items: start;

    }

    .project-card {

        width: calc((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3);
        /* width: 450px; */
    }

    .card-content {
        height: calc((33vw - (var(--desktop-card-gap) * 2)) * 0.4);
    }

    .card-container {
        justify-content: space-between;
        gap: var(--desktop-card-gap);
        width: calc(100vw - var(--side-padding-desktop)*2)
    }

    .card-title-container {
        padding-bottom: .5rem;
    }

    .img-container {
        width: calc((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3);
        height: calc(((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3) * 0.8);
    }

    .card-photo>img {

        height: 100%;
        object-fit: cover;
        object-position: top;
    }

    .heading {
        font-size: 4vw;
    }

    .mywork-header {
        padding: .5rem 0;
        margin: 0;
    }


    .project-description {
        font-size: var(--desktop-card-description-fontsize);
    }

    .card-project-name {
        font-size: var(--desktop-card-title-fontsize);
    }

    .card-icons {
        padding: 0;
        justify-self: flex-end;
    }

    .card-icons>a>svg,
    .card-icons>a {
        font-size: var(--desktop-card-title-fontsize);
        height: var(--desktop-card-title-fontsize);
    }

    .bottom-section {

        width: calc(100vw - ((var(--side-padding-desktop))*2));
        padding: 2.5rem var(--side-padding-desktop) 2.5rem var(--side-padding-desktop);
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .contact-me {

        text-align: start;
        font-size: var(--outro-title-desktop);
    }

    .outro-content {
        padding: 4rem 5rem 4rem 1rem;

    }

    .outro-1,
    .outro-2,
    .outro-3,
    .outro-email {
        font-size: var(--outro-content-font-desktop);
    }

    .outro-content,
    .outro-email {
        justify-content: center;

        text-align: start;
    }

    .outro-body {
        gap: 2vw;
    }

    .outro-photo {
        width: calc(100vw/2);
        height: calc(100vw/3);

    }

    .outro-email {
        padding: .5rem 0;
    }

    .outro-photo>img {
        width: calc(100vw/2.25);

        object-fit: cover;
        object-position: 60%;
        display: block;
        justify-self: flex-end;
    }

    .outro-icons {
        justify-content: flex-start;
        align-items: center;
        padding: 0;
        gap: 2vw;

    }

    .outro-icons>a>svg,
    .outro-icons>a {
        height: var(--outro-title-desktop);
        width: var(--outro-title-desktop);
        font-size: var(--outro-title-desktop);


    }

    .phone-icon,
    .email-icon {
        display: block;
        width: var(--outro-content-font-desktop);
        height: auto;
    }

    .phone,
    .email {
        display: flex;
        gap: .5rem;
    }
}

/* fix bottom section - change photo - make landscape photo and add to html
                - fix bottom text and .icons
                -fix padding and layout */`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* general variables */\n:root {\n    --shadow: #ddd;\n    --main-color: rgb(8, 145, 178);\n}\n\n/* mobile varibles */\n:root {\n    --side-padding: 24px;\n    --card-title-font: 28px;\n}\n\n/* tablet varibles */\n:root {\n    --side-padding-tablet: 4vw;\n    --card-tablet-fontsize: 2vw;\n    --card-tablet-title-fontsize: 3vw;\n    --card-tablet-fontsize-outro: 16px;\n    --outro-title-tablet: 32px;\n    --card-tablet-heading-fontsize: 5vw;\n    --card-tablet-content-fontsize: 2vw\n}\n\n/* desktop variables  */\n:root {\n    --side-padding-desktop: 5vw;\n    --outro-title-desktop: 3vw;\n    --outro-content-font-desktop: 1.5vw;\n    --about-content-desktop: 2vw;\n    --desktop-card-gap: 4vw;\n    --desktop-card-title-fontsize: 2vw;\n    --desktop-card-description-fontsize: 1.5vw;\n}\n\n\n/* mobile and general layout */\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\nsvg {\n\n    transform: scale(1.1);\n    -webkit-transform: scale(1.1);\n\n}\n\na {\n    text-decoration: none;\n    color: inherit;\n}\n\n.top-photo-container {\n\n    padding: 1.5rem;\n    height: auto;\n    position: relative;\n    background: rgb(8, 145, 178);\n    background: linear-gradient(148deg, rgba(8, 145, 178, 1) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);\n\n}\n\n.top-photo>img {\n    width: 100%;\n    object-fit: cover;\n    box-shadow: 0px 0px 8px var(--shadow);\n}\n\n.name {\n    font-size: 4rem;\n    font-weight: 500;\n    color: white;\n    text-shadow: 0px 0px 4px black;\n    position: absolute;\n    left: calc(.5rem + 32px);\n    bottom: 32px;\n    line-height: 1.2;\n\n}\n\n.section-1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 var(--side-padding);\n    gap: 1rem;\n}\n\n.heading {\n    font-size: 3rem;\n    font-weight: 300;\n}\n\n.para {\n    font-size: 1.25rem;\n    line-height: 1.25;\n    color: gray;\n    padding-bottom: .25rem;\n}\n\n.icons {\n    font-size: 2rem;\n    display: flex;\n    gap: 1.5rem;\n}\n\n.section-2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 2rem 0 8rem 0;\n    width: calc(100vw - (var(--side-padding)*2));\n    padding: var(--side-padding)\n}\n\n.card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n    width: calc(100vw - var(--side-padding) * 2);\n}\n\n.mywork-header {\n    margin: 2rem;\n}\n\n.icons>a>svg {\n    width: 2rem;\n    height: auto;\n}\n\n.card-content {\n    height: 175px;\n    padding: 1rem;\n}\n\n.project-card {\n    box-shadow: 2px 2px 8px var(--shadow);\n    max-width: calc(100vw - var(--side-padding * 2));\n}\n\n.card-icons>a>svg,\n.card-icons>a {\n    width: auto;\n    height: var(--card-title-font);\n    font-size: var(--card-title-font);\n}\n\n.card-photo>img {\n    width: 100%;\n    object-fit: cover;\n}\n\n.img-container {\n    width: calc(100vw - 3rem);\n}\n\n.card-title-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .25rem 0;\n}\n\n.card-project-name,\n.github-card {\n    font-size: var(--card-title-font);\n\n}\n\n.card-icons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: .5rem;\n}\n\n.text-content {\n    padding-bottom: 1.5rem;\n}\n\n.project-description {\n    color: #444;\n    font-size: 1.25rem;\n}\n\n.bottom-section {\n    background-color: var(--main-color);\n}\n\n.outro-content {\n\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    color: #fff;\n    padding: 2rem 1.5rem 4rem 1.5rem;\n}\n\n.outro-body {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n.contact-me {\n    text-align: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.outro-photo {\n    width: 100vw;\n    height: auto;\n}\n\n\n.outro-photo>img {\n    width: 100vw;\n    height: auto;\n    object-fit: cover;\n    display: block;\n}\n\n.outro-1 {\n    font-size: 1.75rem;\n\n}\n\n.outro-2,\n.outro-3,\n.outro-email {\n    font-size: 1.5rem;\n}\n\n.outro-icons {\n    color: #000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n}\n\n.outro-icons>a>svg {\n    height: 3rem;\n    width: auto;\n}\n\n.phone-icon,\n.email-icon {\n    display: none;\n}\n\n\n.outro-icon-text {\n    font-size: 3rem;\n}\n\n\n@media (min-width: 500px) and (max-width: 999px) {\n\n    .name {\n        font-size: 2.5rem;\n        left: auto;\n        scale: 1.25;\n        transform: translateX(11rem);\n        top: 1.75rem;\n    }\n\n    .section-1>.about-header {\n        display: flex;\n        justify-content: center;\n        font-size: 1.75rem;\n        line-height: 1.5;\n    }\n\n    .section-1>.para {\n        font-size: 1.5rem;\n        line-height: 1.1;\n    }\n\n    .section-1 {\n        background-color: #fff;\n        box-shadow: 2px 2px 2px var(--shadow);\n        text-align: left;\n        display: block;\n        width: calc(100vw - (var(--side-padding-tablet * 6)));\n        padding: 3rem 1rem 3rem 1rem;\n        margin: 4rem 2.5rem 0 2.5rem;\n        border: none;\n        box-shadow: 2px 2px 6px var(--shadow);\n    }\n\n    .top-photo-container {\n        background: none;\n        padding: 0 .5rem .25rem 0;\n        float: left;\n\n    }\n\n    .top-photo>img {\n        width: 250px;\n        height: 250px;\n        object-fit: cover;\n\n    }\n\n    .top-about-container {\n        display: block;\n        padding: var(--side-padding-tablet) var(--side-padding-tablet) 3rem var(--side-padding-tablet);\n        width: calc(100vw - (var(--side-padding-tablet * 2)));\n        background: var(--main-color);\n        background: linear-gradient(165deg, var(--main-color) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);\n    }\n\n    .section-2 {\n        margin-top: 0;\n        width: calc(100vw - (var(--side-padding-tablet)*4));\n        padding: calc(var(--side-padding-tablet) * 2);\n        padding-top: 0;\n        align-items: start;\n\n    }\n\n    .project-card {\n\n        width: clamp(180px, calc((100vw - (var(--side-padding-tablet)*4) - 3rem) / 2), 375px);\n    }\n\n    .card-content {\n        height: 100px;\n    }\n\n    .card-container {\n        justify-content: space-between;\n        gap: 3rem;\n        width: calc(100vw - var(--side-padding-tablet)*4)\n    }\n\n    .card-title-container {\n        padding-bottom: .5rem;\n    }\n\n    .img-container {\n        width: 100%;\n    }\n\n    .heading {\n        font-size: var(--card-tablet-heading-fontsize);\n    }\n\n    .mywork-header {\n        padding: .5rem 0;\n        margin: 0;\n    }\n\n\n    .project-description {\n        font-size: var(--card-tablet-content-fontsize);\n    }\n\n    .card-project-name {\n        font-size: var(--card-tablet-title-fontsize);\n    }\n\n    .card-icons {\n        padding: 0;\n        justify-self: flex-end;\n    }\n\n    .card-icons>a>svg,\n    .card-icons>a {\n        font-size: var(--card-tablet-title-fontsize);\n        height: var(--card-tablet-title-fontsize);\n    }\n\n    .bottom-section {\n\n        width: calc(100vw - ((var(--side-padding-tablet))*2));\n        padding: 2.5rem var(--side-padding-tablet) 3rem var(--side-padding-tablet);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .contact-me {\n\n        text-align: start;\n        font-size: var(--outro-title-tablet);\n    }\n\n    .outro-content {\n        padding: 4rem 5rem 4rem 1rem;\n\n    }\n\n    .outro-1,\n    .outro-2,\n    .outro-3,\n    .outro-email {\n        font-size: var(--card-tablet-fontsize-outro);\n    }\n\n    .outro-content,\n    .outro-email {\n        justify-content: center;\n\n        text-align: start;\n    }\n\n    .outro-body {\n        gap: 1rem;\n    }\n\n    .outro-photo {\n        width: calc(100vw/3);\n    }\n\n    .outro-email {\n        padding: .5rem 0;\n    }\n\n    .outro-photo>img {\n        width: calc(100vw/3);\n        height: auto;\n        object-fit: cover;\n        display: block;\n        justify-self: flex-end;\n    }\n\n    .outro-icons {\n        justify-content: flex-start;\n        padding: 0;\n\n    }\n\n\n\n    .outro-icons>a>svg,\n    .outro-icons>a {\n        height: var(--outro-title-tablet);\n        font-size: var(--outro-title-tablet);\n\n    }\n\n    .phone-icon,\n    .email-icon {\n        display: block;\n        width: var(--card-tablet-fontsize-outro);\n        height: auto;\n    }\n\n    .phone,\n    .email {\n        display: flex;\n        align-items: center;\n        gap: .5rem;\n    }\n\n    .section-1>.icons {\n        display: none;\n    }\n}\n\n@media (min-width: 1000px) {\n\n    .name {\n        font-size: 3.5rem;\n        width: 30vw;\n        font-weight: 500;\n        text-shadow: 2px 2px 6px #000;\n        line-height: .85;\n\n    }\n\n    .section-1>.about-header {\n        display: flex;\n        justify-content: flex-start;\n        width: 100%;\n        font-size: 3vw;\n        line-height: 2;\n    }\n\n    .section-1>.para {\n        font-size: var(--about-content-desktop);\n        line-height: 1.1;\n        vertical-align: middle;\n        margin-top: auto;\n        margin-bottom: auto;\n    }\n\n    .section-1 {\n        background-color: #fff;\n        box-shadow: 2px 2px 2px var(--shadow);\n        text-align: left;\n        display: flex;\n        flex-direction: column;\n        height: 28vw;\n        /* width: calc(100vw - (var(--side-padding-tablet * 6))); */\n        padding: 32px 64px 32px 16px;\n        /* margin: 2.5vw 0 2.5vw 0; */\n        border: none;\n        box-shadow: 2px 2px 6px var(--shadow);\n\n    }\n\n    .top-photo-container {\n        background: none;\n        padding: 0;\n        position: relative;\n\n\n\n\n    }\n\n    .top-photo>img {\n        height: 35vw;\n        width: 35vw;\n\n        object-fit: cover;\n        box-shadow: none;\n\n\n    }\n\n    .top-about-container {\n        display: flex;\n        align-items: center;\n        padding: var(--side-padding-desktop) var(--side-padding-desktop) 5rem var(--side-padding-desktop);\n        width: calc(100vw - (var(--side-padding-desktop * 2)));\n        background: var(--main-color);\n        background: linear-gradient(167deg, var(--main-color) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 61%);\n    }\n\n    .section-1>.icons {\n        width: 100%;\n        display: flex;\n        justify-content: end;\n\n\n    }\n\n    .icons>a>svg,\n    .icons>a {\n        font-size: calc(var(--about-content-desktop) + 1vw);\n        width: calc(var(--about-content-desktop) + 1vw);\n        height: calc(var(--about-content-desktop) + 1vw);\n    }\n\n\n\n\n    .section-2 {\n        margin-top: 0;\n        width: calc(100vw - (var(--side-padding-desktop) * 2));\n        padding: 0 var(--side-padding-desktop) 0 var(--side-padding-desktop);\n\n        align-items: start;\n\n    }\n\n    .project-card {\n\n        width: calc((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3);\n        /* width: 450px; */\n    }\n\n    .card-content {\n        height: calc((33vw - (var(--desktop-card-gap) * 2)) * 0.4);\n    }\n\n    .card-container {\n        justify-content: space-between;\n        gap: var(--desktop-card-gap);\n        width: calc(100vw - var(--side-padding-desktop)*2)\n    }\n\n    .card-title-container {\n        padding-bottom: .5rem;\n    }\n\n    .img-container {\n        width: calc((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3);\n        height: calc(((100vw - (var(--side-padding-desktop) * 2 + (var(--desktop-card-gap) * 2))) / 3) * 0.8);\n    }\n\n    .card-photo>img {\n\n        height: 100%;\n        object-fit: cover;\n        object-position: top;\n    }\n\n    .heading {\n        font-size: 4vw;\n    }\n\n    .mywork-header {\n        padding: .5rem 0;\n        margin: 0;\n    }\n\n\n    .project-description {\n        font-size: var(--desktop-card-description-fontsize);\n    }\n\n    .card-project-name {\n        font-size: var(--desktop-card-title-fontsize);\n    }\n\n    .card-icons {\n        padding: 0;\n        justify-self: flex-end;\n    }\n\n    .card-icons>a>svg,\n    .card-icons>a {\n        font-size: var(--desktop-card-title-fontsize);\n        height: var(--desktop-card-title-fontsize);\n    }\n\n    .bottom-section {\n\n        width: calc(100vw - ((var(--side-padding-desktop))*2));\n        padding: 2.5rem var(--side-padding-desktop) 2.5rem var(--side-padding-desktop);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .contact-me {\n\n        text-align: start;\n        font-size: var(--outro-title-desktop);\n    }\n\n    .outro-content {\n        padding: 4rem 5rem 4rem 1rem;\n\n    }\n\n    .outro-1,\n    .outro-2,\n    .outro-3,\n    .outro-email {\n        font-size: var(--outro-content-font-desktop);\n    }\n\n    .outro-content,\n    .outro-email {\n        justify-content: center;\n\n        text-align: start;\n    }\n\n    .outro-body {\n        gap: 2vw;\n    }\n\n    .outro-photo {\n        width: calc(100vw/2);\n        height: calc(100vw/3);\n\n    }\n\n    .outro-email {\n        padding: .5rem 0;\n    }\n\n    .outro-photo>img {\n        width: calc(100vw/2.25);\n\n        object-fit: cover;\n        object-position: 60%;\n        display: block;\n        justify-self: flex-end;\n    }\n\n    .outro-icons {\n        justify-content: flex-start;\n        align-items: center;\n        padding: 0;\n        gap: 2vw;\n\n    }\n\n    .outro-icons>a>svg,\n    .outro-icons>a {\n        height: var(--outro-title-desktop);\n        width: var(--outro-title-desktop);\n        font-size: var(--outro-title-desktop);\n\n\n    }\n\n    .phone-icon,\n    .email-icon {\n        display: block;\n        width: var(--outro-content-font-desktop);\n        height: auto;\n    }\n\n    .phone,\n    .email {\n        display: flex;\n        gap: .5rem;\n    }\n}\n\n/* fix bottom section - change photo - make landscape photo and add to html\n                - fix bottom text and .icons\n                -fix padding and layout */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrRUFBa0U7QUFDbEU7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGlEQUFpRCxnS0FBZ0ssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksT0FBTyxZQUFZLE1BQU0sVUFBVSxZQUFZLE9BQU8sWUFBWSxNQUFNLFlBQVksYUFBYSxPQUFPLFlBQVksTUFBTSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsUUFBUSxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxNQUFNLFlBQVksY0FBYyxPQUFPLEtBQUssWUFBWSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsWUFBWSxhQUFhLGNBQWMsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLE1BQU0sYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxhQUFhLE9BQU8sT0FBTyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxRQUFRLEtBQUssVUFBVSxRQUFRLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksYUFBYSxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLFFBQVEsWUFBWSxPQUFPLE1BQU0sYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksWUFBWSxRQUFRLE1BQU0sWUFBWSxjQUFjLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxPQUFPLE1BQU0sVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFh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YjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUNiQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7Ozs7Ozs7OztBQ0FxQiIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgaHRtbCxcbmJvZHksXG5kaXYsXG5zcGFuLFxuYXBwbGV0LFxub2JqZWN0LFxuaWZyYW1lLFxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2LFxucCxcbmJsb2NrcXVvdGUsXG5wcmUsXG5hLFxuYWJicixcbmFjcm9ueW0sXG5hZGRyZXNzLFxuYmlnLFxuY2l0ZSxcbmNvZGUsXG5kZWwsXG5kZm4sXG5lbSxcbmltZyxcbmlucyxcbmtiZCxcbnEsXG5zLFxuc2FtcCxcbnNtYWxsLFxuc3RyaWtlLFxuc3Ryb25nLFxuc3ViLFxuc3VwLFxudHQsXG52YXIsXG5iLFxudSxcbmksXG5jZW50ZXIsXG5kbCxcbmR0LFxuZGQsXG5vbCxcbnVsLFxubGksXG5maWVsZHNldCxcbmZvcm0sXG5sYWJlbCxcbmxlZ2VuZCxcbnRhYmxlLFxuY2FwdGlvbixcbnRib2R5LFxudGZvb3QsXG50aGVhZCxcbnRyLFxudGgsXG50ZCxcbmFydGljbGUsXG5hc2lkZSxcbmNhbnZhcyxcbmRldGFpbHMsXG5lbWJlZCxcbmZpZ3VyZSxcbmZpZ2NhcHRpb24sXG5mb290ZXIsXG5oZWFkZXIsXG5oZ3JvdXAsXG5tZW51LFxubmF2LFxub3V0cHV0LFxucnVieSxcbnNlY3Rpb24sXG5zdW1tYXJ5LFxudGltZSxcbm1hcmssXG5hdWRpbyxcbnZpZGVvIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3JkZXI6IDA7XG4gICAgZm9udC1zaXplOiAxMDAlO1xuICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKiBnZW5lcmFsIHZhcmlhYmxlcyAqL1xuOnJvb3Qge1xuICAgIC0tc2hhZG93OiAjZGRkO1xuICAgIC0tbWFpbi1jb2xvcjogcmdiKDgsIDE0NSwgMTc4KTtcbn1cblxuLyogbW9iaWxlIHZhcmlibGVzICovXG46cm9vdCB7XG4gICAgLS1zaWRlLXBhZGRpbmc6IDI0cHg7XG4gICAgLS1jYXJkLXRpdGxlLWZvbnQ6IDI4cHg7XG59XG5cbi8qIHRhYmxldCB2YXJpYmxlcyAqL1xuOnJvb3Qge1xuICAgIC0tc2lkZS1wYWRkaW5nLXRhYmxldDogNHZ3O1xuICAgIC0tY2FyZC10YWJsZXQtZm9udHNpemU6IDJ2dztcbiAgICAtLWNhcmQtdGFibGV0LXRpdGxlLWZvbnRzaXplOiAzdnc7XG4gICAgLS1jYXJkLXRhYmxldC1mb250c2l6ZS1vdXRybzogMTZweDtcbiAgICAtLW91dHJvLXRpdGxlLXRhYmxldDogMzJweDtcbiAgICAtLWNhcmQtdGFibGV0LWhlYWRpbmctZm9udHNpemU6IDV2dztcbiAgICAtLWNhcmQtdGFibGV0LWNvbnRlbnQtZm9udHNpemU6IDJ2d1xufVxuXG4vKiBkZXNrdG9wIHZhcmlhYmxlcyAgKi9cbjpyb290IHtcbiAgICAtLXNpZGUtcGFkZGluZy1kZXNrdG9wOiA1dnc7XG4gICAgLS1vdXRyby10aXRsZS1kZXNrdG9wOiAzdnc7XG4gICAgLS1vdXRyby1jb250ZW50LWZvbnQtZGVza3RvcDogMS41dnc7XG4gICAgLS1hYm91dC1jb250ZW50LWRlc2t0b3A6IDJ2dztcbiAgICAtLWRlc2t0b3AtY2FyZC1nYXA6IDR2dztcbiAgICAtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZTogMnZ3O1xuICAgIC0tZGVza3RvcC1jYXJkLWRlc2NyaXB0aW9uLWZvbnRzaXplOiAxLjV2dztcbn1cblxuXG4vKiBtb2JpbGUgYW5kIGdlbmVyYWwgbGF5b3V0ICovXG5cbmJvZHkge1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbnN2ZyB7XG5cbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG5cbn1cblxuYSB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiBpbmhlcml0O1xufVxuXG4udG9wLXBob3RvLWNvbnRhaW5lciB7XG5cbiAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCwgMTQ1LCAxNzgpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDhkZWcsIHJnYmEoOCwgMTQ1LCAxNzgsIDEpIDYwJSwgcmdiYSgxNjEsIDE1MCwgMTUwLCAwLjI1KSA2MC40JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA2MyUpO1xuXG59XG5cbi50b3AtcGhvdG8+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDhweCB2YXIoLS1zaGFkb3cpO1xufVxuXG4ubmFtZSB7XG4gICAgZm9udC1zaXplOiA0cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogY2FsYyguNXJlbSArIDMycHgpO1xuICAgIGJvdHRvbTogMzJweDtcbiAgICBsaW5lLWhlaWdodDogMS4yO1xuXG59XG5cbi5zZWN0aW9uLTEge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nKTtcbiAgICBnYXA6IDFyZW07XG59XG5cbi5oZWFkaW5nIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnBhcmEge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBwYWRkaW5nLWJvdHRvbTogLjI1cmVtO1xufVxuXG4uaWNvbnMge1xuICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uc2VjdGlvbi0yIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDJyZW0gMCA4cmVtIDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nKSoyKSk7XG4gICAgcGFkZGluZzogdmFyKC0tc2lkZS1wYWRkaW5nKVxufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGUtcGFkZGluZykgKiAyKTtcbn1cblxuLm15d29yay1oZWFkZXIge1xuICAgIG1hcmdpbjogMnJlbTtcbn1cblxuLmljb25zPmE+c3ZnIHtcbiAgICB3aWR0aDogMnJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG59XG5cbi5jYXJkLWNvbnRlbnQge1xuICAgIGhlaWdodDogMTc1cHg7XG4gICAgcGFkZGluZzogMXJlbTtcbn1cblxuLnByb2plY3QtY2FyZCB7XG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tc2hhZG93KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLXBhZGRpbmcgKiAyKSk7XG59XG5cbi5jYXJkLWljb25zPmE+c3ZnLFxuLmNhcmQtaWNvbnM+YSB7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgaGVpZ2h0OiB2YXIoLS1jYXJkLXRpdGxlLWZvbnQpO1xuICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10aXRsZS1mb250KTtcbn1cblxuLmNhcmQtcGhvdG8+aW1nIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuLmltZy1jb250YWluZXIge1xuICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gM3JlbSk7XG59XG5cbi5jYXJkLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOiAuMjVyZW0gMDtcbn1cblxuLmNhcmQtcHJvamVjdC1uYW1lLFxuLmdpdGh1Yi1jYXJkIHtcbiAgICBmb250LXNpemU6IHZhcigtLWNhcmQtdGl0bGUtZm9udCk7XG5cbn1cblxuLmNhcmQtaWNvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDhweDtcbiAgICBwYWRkaW5nOiAuNXJlbTtcbn1cblxuLnRleHQtY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbn1cblxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xuICAgIGNvbG9yOiAjNDQ0O1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbn1cblxuLmJvdHRvbS1zZWN0aW9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluLWNvbG9yKTtcbn1cblxuLm91dHJvLWNvbnRlbnQge1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogLjc1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDRyZW0gMS41cmVtO1xufVxuXG4ub3V0cm8tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uY29udGFjdC1tZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLm91dHJvLXBob3RvIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5vdXRyby1waG90bz5pbWcge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdXRyby0xIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG5cbn1cblxuLm91dHJvLTIsXG4ub3V0cm8tMyxcbi5vdXRyby1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi5vdXRyby1pY29ucyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW07XG59XG5cbi5vdXRyby1pY29ucz5hPnN2ZyB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4ucGhvbmUtaWNvbixcbi5lbWFpbC1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG5cbi5vdXRyby1pY29uLXRleHQge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbn1cblxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xuXG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgc2NhbGU6IDEuMjU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMXJlbSk7XG4gICAgICAgIHRvcDogMS43NXJlbTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi0xPi5hYm91dC1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIH1cblxuICAgIC5zZWN0aW9uLTE+LnBhcmEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi0xIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tc2hhZG93KTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQgKiA2KSkpO1xuICAgICAgICBwYWRkaW5nOiAzcmVtIDFyZW0gM3JlbSAxcmVtO1xuICAgICAgICBtYXJnaW46IDRyZW0gMi41cmVtIDAgMi41cmVtO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHZhcigtLXNoYWRvdyk7XG4gICAgfVxuXG4gICAgLnRvcC1waG90by1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwIC41cmVtIC4yNXJlbSAwO1xuICAgICAgICBmbG9hdDogbGVmdDtcblxuICAgIH1cblxuICAgIC50b3AtcGhvdG8+aW1nIHtcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xuICAgICAgICBoZWlnaHQ6IDI1MHB4O1xuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcblxuICAgIH1cblxuICAgIC50b3AtYWJvdXQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpIHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpIDNyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCk7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQgKiAyKSkpO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE2NWRlZywgdmFyKC0tbWFpbi1jb2xvcikgNjAlLCByZ2JhKDE2MSwgMTUwLCAxNTAsIDAuMjUpIDYwLjQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDYzJSk7XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tMiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpKjQpKTtcbiAgICAgICAgcGFkZGluZzogY2FsYyh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSAqIDIpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMDtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuXG4gICAgfVxuXG4gICAgLnByb2plY3QtY2FyZCB7XG5cbiAgICAgICAgd2lkdGg6IGNsYW1wKDE4MHB4LCBjYWxjKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSo0KSAtIDNyZW0pIC8gMiksIDM3NXB4KTtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250YWluZXIge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGdhcDogM3JlbTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSo0KVxuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC1oZWFkaW5nLWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAubXl3b3JrLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cblxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC1jb250ZW50LWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAuY2FyZC1wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcmQtdGFibGV0LXRpdGxlLWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAuY2FyZC1pY29ucyB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLmNhcmQtaWNvbnM+YT5zdmcsXG4gICAgLmNhcmQtaWNvbnM+YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10YWJsZXQtdGl0bGUtZm9udHNpemUpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcmQtdGFibGV0LXRpdGxlLWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAuYm90dG9tLXNlY3Rpb24ge1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKCh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSkqMikpO1xuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkgM3JlbSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5jb250YWN0LW1lIHtcblxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1vdXRyby10aXRsZS10YWJsZXQpO1xuICAgIH1cblxuICAgIC5vdXRyby1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHJlbSA1cmVtIDRyZW0gMXJlbTtcblxuICAgIH1cblxuICAgIC5vdXRyby0xLFxuICAgIC5vdXRyby0yLFxuICAgIC5vdXRyby0zLFxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xuICAgIH1cblxuICAgIC5vdXRyby1jb250ZW50LFxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cblxuICAgIC5vdXRyby1ib2R5IHtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgIH1cblxuICAgIC5vdXRyby1waG90byB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xuICAgIH1cblxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgfVxuXG4gICAgLm91dHJvLXBob3RvPmltZyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAub3V0cm8taWNvbnMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICB9XG5cblxuXG4gICAgLm91dHJvLWljb25zPmE+c3ZnLFxuICAgIC5vdXRyby1pY29ucz5hIHtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1vdXRyby10aXRsZS10YWJsZXQpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW91dHJvLXRpdGxlLXRhYmxldCk7XG5cbiAgICB9XG5cbiAgICAucGhvbmUtaWNvbixcbiAgICAuZW1haWwtaWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgfVxuXG4gICAgLnBob25lLFxuICAgIC5lbWFpbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGdhcDogLjVyZW07XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tMT4uaWNvbnMge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDEwMDBweCkge1xuXG4gICAgLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcbiAgICAgICAgd2lkdGg6IDMwdnc7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIHRleHQtc2hhZG93OiAycHggMnB4IDZweCAjMDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogLjg1O1xuXG4gICAgfVxuXG4gICAgLnNlY3Rpb24tMT4uYWJvdXQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZm9udC1zaXplOiAzdnc7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyO1xuICAgIH1cblxuICAgIC5zZWN0aW9uLTE+LnBhcmEge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XG4gICAgICAgIG1hcmdpbi1ib3R0b206IGF1dG87XG4gICAgfVxuXG4gICAgLnNlY3Rpb24tMSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLXNoYWRvdyk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMjh2dztcbiAgICAgICAgLyogd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCAqIDYpKSk7ICovXG4gICAgICAgIHBhZGRpbmc6IDMycHggNjRweCAzMnB4IDE2cHg7XG4gICAgICAgIC8qIG1hcmdpbjogMi41dncgMCAyLjV2dyAwOyAqL1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHZhcigtLXNoYWRvdyk7XG5cbiAgICB9XG5cbiAgICAudG9wLXBob3RvLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuXG5cblxuICAgIH1cblxuICAgIC50b3AtcGhvdG8+aW1nIHtcbiAgICAgICAgaGVpZ2h0OiAzNXZ3O1xuICAgICAgICB3aWR0aDogMzV2dztcblxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcblxuXG4gICAgfVxuXG4gICAgLnRvcC1hYm91dC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApIDVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCAqIDIpKSk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjElKTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi0xPi5pY29ucyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcblxuXG4gICAgfVxuXG4gICAgLmljb25zPmE+c3ZnLFxuICAgIC5pY29ucz5hIHtcbiAgICAgICAgZm9udC1zaXplOiBjYWxjKHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCkgKyAxdncpO1xuICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1hYm91dC1jb250ZW50LWRlc2t0b3ApICsgMXZ3KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCkgKyAxdncpO1xuICAgIH1cblxuXG5cblxuICAgIC5zZWN0aW9uLTIge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgKiAyKSk7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApIDAgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApO1xuXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcblxuICAgIH1cblxuICAgIC5wcm9qZWN0LWNhcmQge1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgKiAyICsgKHZhcigtLWRlc2t0b3AtY2FyZC1nYXApICogMikpKSAvIDMpO1xuICAgICAgICAvKiB3aWR0aDogNDUwcHg7ICovXG4gICAgfVxuXG4gICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogY2FsYygoMzN2dyAtICh2YXIoLS1kZXNrdG9wLWNhcmQtZ2FwKSAqIDIpKSAqIDAuNCk7XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6IHZhcigtLWRlc2t0b3AtY2FyZC1nYXApO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGUtcGFkZGluZy1kZXNrdG9wKSoyKVxuICAgIH1cblxuICAgIC5jYXJkLXRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcbiAgICB9XG5cbiAgICAuaW1nLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgKiAyICsgKHZhcigtLWRlc2t0b3AtY2FyZC1nYXApICogMikpKSAvIDMpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgKiAyICsgKHZhcigtLWRlc2t0b3AtY2FyZC1nYXApICogMikpKSAvIDMpICogMC44KTtcbiAgICB9XG5cbiAgICAuY2FyZC1waG90bz5pbWcge1xuXG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogdG9wO1xuICAgIH1cblxuICAgIC5oZWFkaW5nIHtcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XG4gICAgfVxuXG4gICAgLm15d29yay1oZWFkZXIge1xuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgfVxuXG5cbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVza3RvcC1jYXJkLWRlc2NyaXB0aW9uLWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAuY2FyZC1wcm9qZWN0LW5hbWUge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZSk7XG4gICAgfVxuXG4gICAgLmNhcmQtaWNvbnMge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5jYXJkLWljb25zPmE+c3ZnLFxuICAgIC5jYXJkLWljb25zPmEge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZSk7XG4gICAgICAgIGhlaWdodDogdmFyKC0tZGVza3RvcC1jYXJkLXRpdGxlLWZvbnRzaXplKTtcbiAgICB9XG5cbiAgICAuYm90dG9tLXNlY3Rpb24ge1xuXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKCh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkpKjIpKTtcbiAgICAgICAgcGFkZGluZzogMi41cmVtIHZhcigtLXNpZGUtcGFkZGluZy1kZXNrdG9wKSAyLjVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtbWUge1xuXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW91dHJvLXRpdGxlLWRlc2t0b3ApO1xuICAgIH1cblxuICAgIC5vdXRyby1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogNHJlbSA1cmVtIDRyZW0gMXJlbTtcblxuICAgIH1cblxuICAgIC5vdXRyby0xLFxuICAgIC5vdXRyby0yLFxuICAgIC5vdXRyby0zLFxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3V0cm8tY29udGVudC1mb250LWRlc2t0b3ApO1xuICAgIH1cblxuICAgIC5vdXRyby1jb250ZW50LFxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIH1cblxuICAgIC5vdXRyby1ib2R5IHtcbiAgICAgICAgZ2FwOiAydnc7XG4gICAgfVxuXG4gICAgLm91dHJvLXBob3RvIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMik7XG4gICAgICAgIGhlaWdodDogY2FsYygxMDB2dy8zKTtcblxuICAgIH1cblxuICAgIC5vdXRyby1lbWFpbCB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgfVxuXG4gICAgLm91dHJvLXBob3RvPmltZyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzIuMjUpO1xuXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBvYmplY3QtcG9zaXRpb246IDYwJTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLm91dHJvLWljb25zIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBnYXA6IDJ2dztcblxuICAgIH1cblxuICAgIC5vdXRyby1pY29ucz5hPnN2ZyxcbiAgICAub3V0cm8taWNvbnM+YSB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tb3V0cm8tdGl0bGUtZGVza3RvcCk7XG4gICAgICAgIHdpZHRoOiB2YXIoLS1vdXRyby10aXRsZS1kZXNrdG9wKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1vdXRyby10aXRsZS1kZXNrdG9wKTtcblxuXG4gICAgfVxuXG4gICAgLnBob25lLWljb24sXG4gICAgLmVtYWlsLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IHZhcigtLW91dHJvLWNvbnRlbnQtZm9udC1kZXNrdG9wKTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5waG9uZSxcbiAgICAuZW1haWwge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IC41cmVtO1xuICAgIH1cbn1cblxuLyogZml4IGJvdHRvbSBzZWN0aW9uIC0gY2hhbmdlIHBob3RvIC0gbWFrZSBsYW5kc2NhcGUgcGhvdG8gYW5kIGFkZCB0byBodG1sXG4gICAgICAgICAgICAgICAgLSBmaXggYm90dG9tIHRleHQgYW5kIC5pY29uc1xuICAgICAgICAgICAgICAgIC1maXggcGFkZGluZyBhbmQgbGF5b3V0ICovYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUEsc0JBQXNCO0FBQ3RCO0lBQ0ksY0FBYztJQUNkLDhCQUE4QjtBQUNsQzs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxvQkFBb0I7SUFDcEIsdUJBQXVCO0FBQzNCOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLDBCQUEwQjtJQUMxQiwyQkFBMkI7SUFDM0IsaUNBQWlDO0lBQ2pDLGtDQUFrQztJQUNsQywwQkFBMEI7SUFDMUIsbUNBQW1DO0lBQ25DO0FBQ0o7O0FBRUEsdUJBQXVCO0FBQ3ZCO0lBQ0ksMkJBQTJCO0lBQzNCLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkMsNEJBQTRCO0lBQzVCLHVCQUF1QjtJQUN2QixrQ0FBa0M7SUFDbEMsMENBQTBDO0FBQzlDOzs7QUFHQSw4QkFBOEI7O0FBRTlCO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7O0lBRUkscUJBQXFCO0lBQ3JCLDZCQUE2Qjs7QUFFakM7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsY0FBYztBQUNsQjs7QUFFQTs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMEhBQTBIOztBQUU5SDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUNBQXFDO0FB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XFxub2JqZWN0LFxcbmlmcmFtZSxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNixcXG5wLFxcbmJsb2NrcXVvdGUsXFxucHJlLFxcbmEsXFxuYWJicixcXG5hY3JvbnltLFxcbmFkZHJlc3MsXFxuYmlnLFxcbmNpdGUsXFxuY29kZSxcXG5kZWwsXFxuZGZuLFxcbmVtLFxcbmltZyxcXG5pbnMsXFxua2JkLFxcbnEsXFxucyxcXG5zYW1wLFxcbnNtYWxsLFxcbnN0cmlrZSxcXG5zdHJvbmcsXFxuc3ViLFxcbnN1cCxcXG50dCxcXG52YXIsXFxuYixcXG51LFxcbmksXFxuY2VudGVyLFxcbmRsLFxcbmR0LFxcbmRkLFxcbm9sLFxcbnVsLFxcbmxpLFxcbmZpZWxkc2V0LFxcbmZvcm0sXFxubGFiZWwsXFxubGVnZW5kLFxcbnRhYmxlLFxcbmNhcHRpb24sXFxudGJvZHksXFxudGZvb3QsXFxudGhlYWQsXFxudHIsXFxudGgsXFxudGQsXFxuYXJ0aWNsZSxcXG5hc2lkZSxcXG5jYW52YXMsXFxuZGV0YWlscyxcXG5lbWJlZCxcXG5maWd1cmUsXFxuZmlnY2FwdGlvbixcXG5mb290ZXIsXFxuaGVhZGVyLFxcbmhncm91cCxcXG5tZW51LFxcbm5hdixcXG5vdXRwdXQsXFxucnVieSxcXG5zZWN0aW9uLFxcbnN1bW1hcnksXFxudGltZSxcXG5tYXJrLFxcbmF1ZGlvLFxcbnZpZGVvIHtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBib3JkZXI6IDA7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG4vKiBnZW5lcmFsIHZhcmlhYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1zaGFkb3c6ICNkZGQ7XFxuICAgIC0tbWFpbi1jb2xvcjogcmdiKDgsIDE0NSwgMTc4KTtcXG59XFxuXFxuLyogbW9iaWxlIHZhcmlibGVzICovXFxuOnJvb3Qge1xcbiAgICAtLXNpZGUtcGFkZGluZzogMjRweDtcXG4gICAgLS1jYXJkLXRpdGxlLWZvbnQ6IDI4cHg7XFxufVxcblxcbi8qIHRhYmxldCB2YXJpYmxlcyAqL1xcbjpyb290IHtcXG4gICAgLS1zaWRlLXBhZGRpbmctdGFibGV0OiA0dnc7XFxuICAgIC0tY2FyZC10YWJsZXQtZm9udHNpemU6IDJ2dztcXG4gICAgLS1jYXJkLXRhYmxldC10aXRsZS1mb250c2l6ZTogM3Z3O1xcbiAgICAtLWNhcmQtdGFibGV0LWZvbnRzaXplLW91dHJvOiAxNnB4O1xcbiAgICAtLW91dHJvLXRpdGxlLXRhYmxldDogMzJweDtcXG4gICAgLS1jYXJkLXRhYmxldC1oZWFkaW5nLWZvbnRzaXplOiA1dnc7XFxuICAgIC0tY2FyZC10YWJsZXQtY29udGVudC1mb250c2l6ZTogMnZ3XFxufVxcblxcbi8qIGRlc2t0b3AgdmFyaWFibGVzICAqL1xcbjpyb290IHtcXG4gICAgLS1zaWRlLXBhZGRpbmctZGVza3RvcDogNXZ3O1xcbiAgICAtLW91dHJvLXRpdGxlLWRlc2t0b3A6IDN2dztcXG4gICAgLS1vdXRyby1jb250ZW50LWZvbnQtZGVza3RvcDogMS41dnc7XFxuICAgIC0tYWJvdXQtY29udGVudC1kZXNrdG9wOiAydnc7XFxuICAgIC0tZGVza3RvcC1jYXJkLWdhcDogNHZ3O1xcbiAgICAtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZTogMnZ3O1xcbiAgICAtLWRlc2t0b3AtY2FyZC1kZXNjcmlwdGlvbi1mb250c2l6ZTogMS41dnc7XFxufVxcblxcblxcbi8qIG1vYmlsZSBhbmQgZ2VuZXJhbCBsYXlvdXQgKi9cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG5zdmcge1xcblxcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xcblxcbn1cXG5cXG5hIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuLnRvcC1waG90by1jb250YWluZXIge1xcblxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCwgMTQ1LCAxNzgpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ4ZGVnLCByZ2JhKDgsIDE0NSwgMTc4LCAxKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjMlKTtcXG5cXG59XFxuXFxuLnRvcC1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBjYWxjKC41cmVtICsgMzJweCk7XFxuICAgIGJvdHRvbTogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG5cXG59XFxuXFxuLnNlY3Rpb24tMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnBhcmEge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXG59XFxuXFxuLmljb25zIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnNlY3Rpb24tMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nKSoyKSk7XFxuICAgIHBhZGRpbmc6IHZhcigtLXNpZGUtcGFkZGluZylcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGUtcGFkZGluZykgKiAyKTtcXG59XFxuXFxuLm15d29yay1oZWFkZXIge1xcbiAgICBtYXJnaW46IDJyZW07XFxufVxcblxcbi5pY29ucz5hPnN2ZyB7XFxuICAgIHdpZHRoOiAycmVtO1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcbi5jYXJkLWNvbnRlbnQge1xcbiAgICBoZWlnaHQ6IDE3NXB4O1xcbiAgICBwYWRkaW5nOiAxcmVtO1xcbn1cXG5cXG4ucHJvamVjdC1jYXJkIHtcXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZS1wYWRkaW5nICogMikpO1xcbn1cXG5cXG4uY2FyZC1pY29ucz5hPnN2ZyxcXG4uY2FyZC1pY29ucz5hIHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGhlaWdodDogdmFyKC0tY2FyZC10aXRsZS1mb250KTtcXG4gICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRpdGxlLWZvbnQpO1xcbn1cXG5cXG4uY2FyZC1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzcmVtKTtcXG59XFxuXFxuLmNhcmQtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMDtcXG59XFxuXFxuLmNhcmQtcHJvamVjdC1uYW1lLFxcbi5naXRodWItY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10aXRsZS1mb250KTtcXG5cXG59XFxuXFxuLmNhcmQtaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi50ZXh0LWNvbnRlbnQge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xcbn1cXG5cXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgIGNvbG9yOiAjNDQ0O1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxufVxcblxcbi5ib3R0b20tc2VjdGlvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xcbn1cXG5cXG4ub3V0cm8tY29udGVudCB7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW0gNHJlbSAxLjVyZW07XFxufVxcblxcbi5vdXRyby1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0LW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLm91dHJvLXBob3RvIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5vdXRyby1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ub3V0cm8tMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG5cXG59XFxuXFxuLm91dHJvLTIsXFxuLm91dHJvLTMsXFxuLm91dHJvLWVtYWlsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi5vdXRyby1pY29ucyB7XFxuICAgIGNvbG9yOiAjMDAwO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG59XFxuXFxuLm91dHJvLWljb25zPmE+c3ZnIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnBob25lLWljb24sXFxuLmVtYWlsLWljb24ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cXG4ub3V0cm8taWNvbi10ZXh0IHtcXG4gICAgZm9udC1zaXplOiAzcmVtO1xcbn1cXG5cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xcblxcbiAgICAubmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDIuNXJlbTtcXG4gICAgICAgIGxlZnQ6IGF1dG87XFxuICAgICAgICBzY2FsZTogMS4yNTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMXJlbSk7XFxuICAgICAgICB0b3A6IDEuNzVyZW07XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tMT4uYWJvdXQtaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tMT4ucGFyYSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tMSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tc2hhZG93KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQgKiA2KSkpO1xcbiAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtIDNyZW0gMXJlbTtcXG4gICAgICAgIG1hcmdpbjogNHJlbSAyLjVyZW0gMCAyLjVyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCB2YXIoLS1zaGFkb3cpO1xcbiAgICB9XFxuXFxuICAgIC50b3AtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwIC41cmVtIC4yNXJlbSAwO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRvcC1waG90bz5pbWcge1xcbiAgICAgICAgd2lkdGg6IDI1MHB4O1xcbiAgICAgICAgaGVpZ2h0OiAyNTBweDtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcblxcbiAgICB9XFxuXFxuICAgIC50b3AtYWJvdXQtY29udGFpbmVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkgdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkgM3JlbSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQgKiAyKSkpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY1ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjMlKTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbi0yIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSo0KSk7XFxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpICogMik7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jYXJkIHtcXG5cXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxODBweCwgY2FsYygoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkqNCkgLSAzcmVtKSAvIDIpLCAzNzVweCk7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtY29udGVudCB7XFxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IDNyZW07XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpKjQpXFxuICAgIH1cXG5cXG4gICAgLmNhcmQtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuaW1nLWNvbnRhaW5lciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbiAgICAuaGVhZGluZyB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcmQtdGFibGV0LWhlYWRpbmctZm9udHNpemUpO1xcbiAgICB9XFxuXFxuICAgIC5teXdvcmstaGVhZGVyIHtcXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XFxuICAgICAgICBtYXJnaW46IDA7XFxuICAgIH1cXG5cXG5cXG4gICAgLnByb2plY3QtZGVzY3JpcHRpb24ge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC1jb250ZW50LWZvbnRzaXplKTtcXG4gICAgfVxcblxcbiAgICAuY2FyZC1wcm9qZWN0LW5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC10aXRsZS1mb250c2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtaWNvbnMge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtaWNvbnM+YT5zdmcsXFxuICAgIC5jYXJkLWljb25zPmEge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC10aXRsZS1mb250c2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcmQtdGFibGV0LXRpdGxlLWZvbnRzaXplKTtcXG4gICAgfVxcblxcbiAgICAuYm90dG9tLXNlY3Rpb24ge1xcblxcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAoKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpKSoyKSk7XFxuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkgM3JlbSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LW1lIHtcXG5cXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1vdXRyby10aXRsZS10YWJsZXQpO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1jb250ZW50IHtcXG4gICAgICAgIHBhZGRpbmc6IDRyZW0gNXJlbSA0cmVtIDFyZW07XFxuXFxuICAgIH1cXG5cXG4gICAgLm91dHJvLTEsXFxuICAgIC5vdXRyby0yLFxcbiAgICAub3V0cm8tMyxcXG4gICAgLm91dHJvLWVtYWlsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1jb250ZW50LFxcbiAgICAub3V0cm8tZW1haWwge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tYm9keSB7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm91dHJvLXBob3RvIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1lbWFpbCB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1waG90bz5pbWcge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMyk7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgfVxcblxcbiAgICAub3V0cm8taWNvbnMge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICAgICAgcGFkZGluZzogMDtcXG5cXG4gICAgfVxcblxcblxcblxcbiAgICAub3V0cm8taWNvbnM+YT5zdmcsXFxuICAgIC5vdXRyby1pY29ucz5hIHtcXG4gICAgICAgIGhlaWdodDogdmFyKC0tb3V0cm8tdGl0bGUtdGFibGV0KTtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3V0cm8tdGl0bGUtdGFibGV0KTtcXG5cXG4gICAgfVxcblxcbiAgICAucGhvbmUtaWNvbixcXG4gICAgLmVtYWlsLWljb24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5waG9uZSxcXG4gICAgLmVtYWlsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbi0xPi5pY29ucyB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxufVxcblxcbkBtZWRpYSAobWluLXdpZHRoOiAxMDAwcHgpIHtcXG5cXG4gICAgLm5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxuICAgICAgICB3aWR0aDogMzB2dztcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAgICAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCA2cHggIzAwMDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAuODU7XFxuXFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tMT4uYWJvdXQtaGVhZGVyIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGZvbnQtc2l6ZTogM3Z3O1xcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI7XFxuICAgIH1cXG5cXG4gICAgLnNlY3Rpb24tMT4ucGFyYSB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCk7XFxuICAgICAgICBsaW5lLWhlaWdodDogMS4xO1xcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gICAgICAgIG1hcmdpbi10b3A6IGF1dG87XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9uLTEge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLXNoYWRvdyk7XFxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBoZWlnaHQ6IDI4dnc7XFxuICAgICAgICAvKiB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0ICogNikpKTsgKi9cXG4gICAgICAgIHBhZGRpbmc6IDMycHggNjRweCAzMnB4IDE2cHg7XFxuICAgICAgICAvKiBtYXJnaW46IDIuNXZ3IDAgMi41dncgMDsgKi9cXG4gICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggNnB4IHZhcigtLXNoYWRvdyk7XFxuXFxuICAgIH1cXG5cXG4gICAgLnRvcC1waG90by1jb250YWluZXIge1xcbiAgICAgICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuXFxuXFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnRvcC1waG90bz5pbWcge1xcbiAgICAgICAgaGVpZ2h0OiAzNXZ3O1xcbiAgICAgICAgd2lkdGg6IDM1dnc7XFxuXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnRvcC1hYm91dC1jb250YWluZXIge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApIDVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3AgKiAyKSkpO1xcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWFpbi1jb2xvcik7XFxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY3ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjElKTtcXG4gICAgfVxcblxcbiAgICAuc2VjdGlvbi0xPi5pY29ucyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXG5cXG5cXG4gICAgfVxcblxcbiAgICAuaWNvbnM+YT5zdmcsXFxuICAgIC5pY29ucz5hIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogY2FsYyh2YXIoLS1hYm91dC1jb250ZW50LWRlc2t0b3ApICsgMXZ3KTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCkgKyAxdncpO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWFib3V0LWNvbnRlbnQtZGVza3RvcCkgKyAxdncpO1xcbiAgICB9XFxuXFxuXFxuXFxuXFxuICAgIC5zZWN0aW9uLTIge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy1kZXNrdG9wKSAqIDIpKTtcXG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApIDAgdmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApO1xcblxcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcblxcbiAgICB9XFxuXFxuICAgIC5wcm9qZWN0LWNhcmQge1xcblxcbiAgICAgICAgd2lkdGg6IGNhbGMoKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy1kZXNrdG9wKSAqIDIgKyAodmFyKC0tZGVza3RvcC1jYXJkLWdhcCkgKiAyKSkpIC8gMyk7XFxuICAgICAgICAvKiB3aWR0aDogNDUwcHg7ICovXFxuICAgIH1cXG5cXG4gICAgLmNhcmQtY29udGVudCB7XFxuICAgICAgICBoZWlnaHQ6IGNhbGMoKDMzdncgLSAodmFyKC0tZGVza3RvcC1jYXJkLWdhcCkgKiAyKSkgKiAwLjQpO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLWNvbnRhaW5lciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgICAgICBnYXA6IHZhcigtLWRlc2t0b3AtY2FyZC1nYXApO1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkqMilcXG4gICAgfVxcblxcbiAgICAuY2FyZC10aXRsZS1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgKiAyICsgKHZhcigtLWRlc2t0b3AtY2FyZC1nYXApICogMikpKSAvIDMpO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKCgoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLWRlc2t0b3ApICogMiArICh2YXIoLS1kZXNrdG9wLWNhcmQtZ2FwKSAqIDIpKSkgLyAzKSAqIDAuOCk7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtcGhvdG8+aW1nIHtcXG5cXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgb2JqZWN0LXBvc2l0aW9uOiB0b3A7XFxuICAgIH1cXG5cXG4gICAgLmhlYWRpbmcge1xcbiAgICAgICAgZm9udC1zaXplOiA0dnc7XFxuICAgIH1cXG5cXG4gICAgLm15d29yay1oZWFkZXIge1xcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgICAgIG1hcmdpbjogMDtcXG4gICAgfVxcblxcblxcbiAgICAucHJvamVjdC1kZXNjcmlwdGlvbiB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlc2t0b3AtY2FyZC1kZXNjcmlwdGlvbi1mb250c2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtcHJvamVjdC1uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tZGVza3RvcC1jYXJkLXRpdGxlLWZvbnRzaXplKTtcXG4gICAgfVxcblxcbiAgICAuY2FyZC1pY29ucyB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcXG4gICAgfVxcblxcbiAgICAuY2FyZC1pY29ucz5hPnN2ZyxcXG4gICAgLmNhcmQtaWNvbnM+YSB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWRlc2t0b3AtY2FyZC10aXRsZS1mb250c2l6ZSk7XFxuICAgIH1cXG5cXG4gICAgLmJvdHRvbS1zZWN0aW9uIHtcXG5cXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKCh2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkpKjIpKTtcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSB2YXIoLS1zaWRlLXBhZGRpbmctZGVza3RvcCkgMi41cmVtIHZhcigtLXNpZGUtcGFkZGluZy1kZXNrdG9wKTtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICB9XFxuXFxuICAgIC5jb250YWN0LW1lIHtcXG5cXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1vdXRyby10aXRsZS1kZXNrdG9wKTtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiA0cmVtIDVyZW0gNHJlbSAxcmVtO1xcblxcbiAgICB9XFxuXFxuICAgIC5vdXRyby0xLFxcbiAgICAub3V0cm8tMixcXG4gICAgLm91dHJvLTMsXFxuICAgIC5vdXRyby1lbWFpbCB7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLW91dHJvLWNvbnRlbnQtZm9udC1kZXNrdG9wKTtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tY29udGVudCxcXG4gICAgLm91dHJvLWVtYWlsIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcblxcbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxuICAgIH1cXG5cXG4gICAgLm91dHJvLWJvZHkge1xcbiAgICAgICAgZ2FwOiAydnc7XFxuICAgIH1cXG5cXG4gICAgLm91dHJvLXBob3RvIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzIpO1xcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZ3LzMpO1xcblxcbiAgICB9XFxuXFxuICAgIC5vdXRyby1lbWFpbCB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1waG90bz5pbWcge1xcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMi4yNSk7XFxuXFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIG9iamVjdC1wb3NpdGlvbjogNjAlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBqdXN0aWZ5LXNlbGY6IGZsZXgtZW5kO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1pY29ucyB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGdhcDogMnZ3O1xcblxcbiAgICB9XFxuXFxuICAgIC5vdXRyby1pY29ucz5hPnN2ZyxcXG4gICAgLm91dHJvLWljb25zPmEge1xcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1vdXRyby10aXRsZS1kZXNrdG9wKTtcXG4gICAgICAgIHdpZHRoOiB2YXIoLS1vdXRyby10aXRsZS1kZXNrdG9wKTtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3V0cm8tdGl0bGUtZGVza3RvcCk7XFxuXFxuXFxuICAgIH1cXG5cXG4gICAgLnBob25lLWljb24sXFxuICAgIC5lbWFpbC1pY29uIHtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IHZhcigtLW91dHJvLWNvbnRlbnQtZm9udC1kZXNrdG9wKTtcXG4gICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgfVxcblxcbiAgICAucGhvbmUsXFxuICAgIC5lbWFpbCB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZ2FwOiAuNXJlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBmaXggYm90dG9tIHNlY3Rpb24gLSBjaGFuZ2UgcGhvdG8gLSBtYWtlIGxhbmRzY2FwZSBwaG90byBhbmQgYWRkIHRvIGh0bWxcXG4gICAgICAgICAgICAgICAgLSBmaXggYm90dG9tIHRleHQgYW5kIC5pY29uc1xcbiAgICAgICAgICAgICAgICAtZml4IHBhZGRpbmcgYW5kIGxheW91dCAqL1wiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlLmNzcyc7XG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=