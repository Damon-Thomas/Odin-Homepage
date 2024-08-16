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

:root {
    --shadow: #ddd;
    --side-padding: 1.5rem;
    --side-padding-tablet: 1.5rem;
    --card-title-font: 1.75rem;
    --main-color: rgb(8, 145, 178);
    --card-tablet-fontsize: 1.5rem;
    --card-tablet-fontsize-outro: 1rem;
    --outro-title-tablet: 2rem;
}

body {
    min-height: 100vh;
    width: 100vw;
    overflow-x: hidden;
}

/* .top-gradient {



    display: flex;
    flex-direction: column;
    align-items: center;


} */


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
    /* needed? */
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

.icons>svg {
    width: 2rem;
    height: auto;
}

.card-content {
    height: 175px;
    padding: 1rem;
}

.project-card {
    /* display: grid;
    grid-template-rows: 1.5fr 1fr; */
    box-shadow: 2px 2px 8px var(--shadow);
    max-width: calc(100vw - var(--side-padding * 2));
}





.card-icons>svg {
    width: auto;
    height: var(--card-title-font);
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
    /* padding: .75rem; */
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
    /* background-color: var(--main-color); */
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
    /* line-height: .95; */
}

.outro-2,
.outro-3,
.outro-email {
    font-size: 1.5rem;
}

/* .outro-email {
    text-align: center;
} */


.outro-icons {
    color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;

}

.outro-icons>svg {
    height: 3rem;
    width: auto;
}

.phone-icon, .email-icon {
    display: none;
}


.outro-icon-text {
    font-size: 3rem;
}

@media (min-width: 500px) and (max-width: 999px) {

    /* media test */
    

    /* .name {
        font-size: 4rem;
        font-weight: 500;
        color: white;
        text-shadow: 0px 0px 4px black;
        position: absolute;
        left: calc(.5rem + 32px);
        bottom: 32px;
        line-height: 1.2;
    
    } */
    .name {
        font-size: 2.5rem;
        left: auto;
        scale: 1.25;
        transform: translateX(11rem);
        top: 1.75rem;
    }

    /* .top-gradient {
        display: flex;
        flex-direction: column;
        align-items: center;
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
    } */

    /* .section-1 {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 0 var(--side-padding);
        gap: 1rem;
    } */

    .section-1 > .about-header {
        display: flex;
        justify-content: center;
        font-size: 1.75rem;
        line-height: 1.5;
    }

    .section-1 > .para {
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
    .top-photo > img {
        /* width: 45%;
        height: 0;
        padding-bottom: 45%;
        display: block; */
        /* float: left; */
        width: 250px;
        height: 250px;
        object-fit: cover;
        
    }
   

    /* .top-photo {
        
        float: left;
        
    } */

   /* body {
    display: flex;
    flex-direction: column;
    align-items: center;
   } */

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
        font-size: 2rem;
    }

    .mywork-header {
        padding: .5rem 0;
        margin: 0;
    }


    .project-description {
        font-size: .75rem;
    }

    .card-project-name {
        font-size: 1rem;
    }

    .card-icons {
        padding: 0;
        justify-self: flex-end;
    }
    .card-icons > svg, .card-icons > i  {
        font-size: var(--card-tablet-fontsize);
        height: var(--card-tablet-fontsize);
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

    .outro-1, .outro-2, .outro-3, .outro-email {
        font-size: var(--card-tablet-fontsize-outro);
    }

    .outro-content, .outro-email {
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

    

    .outro-icons>svg, .outro-icons > i {
        height: var(--outro-title-tablet);
        font-size: var(--outro-title-tablet);
        
    }

    .phone-icon, .email-icon {
        display: block;
        width: var(--card-tablet-fontsize-outro);
        height: auto;
    }

    .phone, .email {
        display: flex;
        gap: .5rem;
    }

        .section-1 > .icons {
            display: none;
        }
   





}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["html,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n:root {\n    --shadow: #ddd;\n    --side-padding: 1.5rem;\n    --side-padding-tablet: 1.5rem;\n    --card-title-font: 1.75rem;\n    --main-color: rgb(8, 145, 178);\n    --card-tablet-fontsize: 1.5rem;\n    --card-tablet-fontsize-outro: 1rem;\n    --outro-title-tablet: 2rem;\n}\n\nbody {\n    min-height: 100vh;\n    width: 100vw;\n    overflow-x: hidden;\n}\n\n/* .top-gradient {\n\n\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n\n\n} */\n\n\n.top-photo-container {\n\n    padding: 1.5rem;\n    height: auto;\n    position: relative;\n    background: rgb(8, 145, 178);\n    background: linear-gradient(148deg, rgba(8, 145, 178, 1) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);\n\n}\n\n.top-photo>img {\n    width: 100%;\n    object-fit: cover;\n    box-shadow: 0px 0px 8px var(--shadow);\n}\n\n.name {\n    font-size: 4rem;\n    font-weight: 500;\n    color: white;\n    text-shadow: 0px 0px 4px black;\n    position: absolute;\n    left: calc(.5rem + 32px);\n    bottom: 32px;\n    line-height: 1.2;\n\n}\n\n.section-1 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    padding: 0 var(--side-padding);\n    gap: 1rem;\n}\n\n.heading {\n    font-size: 3rem;\n    font-weight: 300;\n}\n\n.para {\n    font-size: 1.25rem;\n    line-height: 1.25;\n    color: gray;\n    padding-bottom: .25rem;\n}\n\n.icons {\n    font-size: 2rem;\n    display: flex;\n    gap: 1.5rem;\n}\n\n.section-2 {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 2rem 0 8rem 0;\n    /* needed? */\n    width: calc(100vw - (var(--side-padding)*2));\n    padding: var(--side-padding)\n    \n}\n\n.card-container {\n    display: flex;\n    flex-wrap: wrap;\n    justify-content: center;\n    gap: 3rem;\n    \n    width: calc(100vw - var(--side-padding) * 2);\n}\n\n.mywork-header {\n    margin: 2rem;\n}\n\n.icons>svg {\n    width: 2rem;\n    height: auto;\n}\n\n.card-content {\n    height: 175px;\n    padding: 1rem;\n}\n\n.project-card {\n    /* display: grid;\n    grid-template-rows: 1.5fr 1fr; */\n    box-shadow: 2px 2px 8px var(--shadow);\n    max-width: calc(100vw - var(--side-padding * 2));\n}\n\n\n\n\n\n.card-icons>svg {\n    width: auto;\n    height: var(--card-title-font);\n}\n\n.card-photo>img {\n    width: 100%;\n    object-fit: cover;\n}\n\n.img-container {\n    width: calc(100vw - 3rem);\n}\n\n.card-title-container {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: .25rem 0;\n}\n\n.card-project-name,\n.github-card {\n    font-size: var(--card-title-font);\n\n}\n\n.card-icons {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: .5rem;\n}\n\n.text-content {\n    /* padding: .75rem; */\n    padding-bottom: 1.5rem;\n}\n\n.project-description {\n    color: #444;\n    font-size: 1.25rem;\n}\n\n.bottom-section {\n    background-color: var(--main-color);\n}\n\n.outro-content {\n    /* background-color: var(--main-color); */\n    display: flex;\n    flex-direction: column;\n    gap: .75rem;\n    color: #fff;\n    padding: 2rem 1.5rem 4rem 1.5rem;\n}\n\n.outro-body {\n    display: flex;\n    flex-direction: column;\n    gap: 1.5rem;\n}\n\n.contact-me {\n    text-align: center;\n}\n\n.contact-info {\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;\n}\n\n.outro-photo {\n    width: 100vw;\n    height: auto;\n}\n\n\n.outro-photo>img {\n    width: 100vw;\n    height: auto;\n    object-fit: cover;\n    display: block;\n}\n\n.outro-1 {\n    font-size: 1.75rem;\n    /* line-height: .95; */\n}\n\n.outro-2,\n.outro-3,\n.outro-email {\n    font-size: 1.5rem;\n}\n\n/* .outro-email {\n    text-align: center;\n} */\n\n\n.outro-icons {\n    color: #000;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 2rem;\n\n}\n\n.outro-icons>svg {\n    height: 3rem;\n    width: auto;\n}\n\n.phone-icon, .email-icon {\n    display: none;\n}\n\n\n.outro-icon-text {\n    font-size: 3rem;\n}\n\n@media (min-width: 500px) and (max-width: 999px) {\n\n    /* media test */\n    \n\n    /* .name {\n        font-size: 4rem;\n        font-weight: 500;\n        color: white;\n        text-shadow: 0px 0px 4px black;\n        position: absolute;\n        left: calc(.5rem + 32px);\n        bottom: 32px;\n        line-height: 1.2;\n    \n    } */\n    .name {\n        font-size: 2.5rem;\n        left: auto;\n        scale: 1.25;\n        transform: translateX(11rem);\n        top: 1.75rem;\n    }\n\n    /* .top-gradient {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n    }\n    .top-photo-container {\n        padding: 1.5rem;\n        height: auto;\n        position: relative;\n        background: rgb(8, 145, 178);\n        background: linear-gradient(148deg, rgba(8, 145, 178, 1) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);\n    }\n        \n    .top-photo>img {\n        width: 100%;\n        object-fit: cover;\n        box-shadow: 0px 0px 8px var(--shadow);\n    } */\n\n    /* .section-1 {\n        display: flex;\n        flex-direction: column;\n        align-items: center;\n        padding: 0 var(--side-padding);\n        gap: 1rem;\n    } */\n\n    .section-1 > .about-header {\n        display: flex;\n        justify-content: center;\n        font-size: 1.75rem;\n        line-height: 1.5;\n    }\n\n    .section-1 > .para {\n        font-size: 1.5rem;\n        line-height: 1.1;\n    }\n    .section-1 {\n        background-color: #fff;\n        box-shadow: 2px 2px 2px var(--shadow);\n        text-align: left;\n        display: block;\n        width: calc(100vw - (var(--side-padding-tablet * 6)));\n        padding: 3rem 1rem 3rem 1rem;\n        margin: 4rem 2.5rem 0 2.5rem;\n        border: none;\n        box-shadow: 2px 2px 6px var(--shadow);\n    }\n    .top-photo-container {\n        background: none;\n        padding: 0 .5rem .25rem 0;\n        float: left;\n        \n    }\n    .top-photo > img {\n        /* width: 45%;\n        height: 0;\n        padding-bottom: 45%;\n        display: block; */\n        /* float: left; */\n        width: 250px;\n        height: 250px;\n        object-fit: cover;\n        \n    }\n   \n\n    /* .top-photo {\n        \n        float: left;\n        \n    } */\n\n   /* body {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n   } */\n\n    .top-about-container {\n        display: block;\n        padding: var(--side-padding-tablet) var(--side-padding-tablet) 3rem var(--side-padding-tablet);\n        width: calc(100vw - (var(--side-padding-tablet * 2))); \n        background: var(--main-color);\n        background: linear-gradient(165deg, var(--main-color) 60%, rgba(161, 150, 150, 0.25) 60.4%, rgba(255, 255, 255, 1) 63%);\n    }\n    \n\n    .section-2 {\n        margin-top: 0;\n        width: calc(100vw - (var(--side-padding-tablet)*4));\n        padding: calc(var(--side-padding-tablet) * 2);\n        padding-top: 0;\n        align-items: start;\n\n    }\n\n    .project-card {\n        \n        width: clamp(180px, calc((100vw - (var(--side-padding-tablet)*4) - 3rem) / 2), 375px);\n    }\n\n    .card-content {\n        height: 100px;\n    }\n\n    .card-container {\n        justify-content: space-between;\n        gap: 3rem;\n        width: calc(100vw - var(--side-padding-tablet)*4)\n    }\n\n    .card-title-container {\n        padding-bottom: .5rem;\n    }\n\n    .img-container {\n        width: 100%;\n    }\n\n    .heading {\n        font-size: 2rem;\n    }\n\n    .mywork-header {\n        padding: .5rem 0;\n        margin: 0;\n    }\n\n\n    .project-description {\n        font-size: .75rem;\n    }\n\n    .card-project-name {\n        font-size: 1rem;\n    }\n\n    .card-icons {\n        padding: 0;\n        justify-self: flex-end;\n    }\n    .card-icons > svg, .card-icons > i  {\n        font-size: var(--card-tablet-fontsize);\n        height: var(--card-tablet-fontsize);\n    }\n\n    .bottom-section {\n        \n        width: calc(100vw - ((var(--side-padding-tablet))*2));\n        padding: 2.5rem var(--side-padding-tablet) 3rem var(--side-padding-tablet);\n        display: flex;\n        align-items: center;\n        justify-content: space-between;\n    }\n\n    .contact-me {\n        \n        text-align: start;\n        font-size: var(--outro-title-tablet);\n    }\n\n    .outro-content {\n        padding: 4rem 5rem 4rem 1rem;\n        \n    }\n\n    .outro-1, .outro-2, .outro-3, .outro-email {\n        font-size: var(--card-tablet-fontsize-outro);\n    }\n\n    .outro-content, .outro-email {\n        justify-content: center;\n\n        text-align: start;\n    }\n\n    .outro-body {\n        gap: 1rem;\n    }\n\n    .outro-photo {\n        width: calc(100vw/3);\n    }\n\n    .outro-email { \n        padding: .5rem 0;\n    }\n\n    .outro-photo>img {\n        width: calc(100vw/3);\n        height: auto;\n        object-fit: cover;\n        display: block;\n        justify-self: flex-end;\n    }\n\n    .outro-icons {\n        justify-content: flex-start;\n        padding: 0;\n        \n    }\n\n    \n\n    .outro-icons>svg, .outro-icons > i {\n        height: var(--outro-title-tablet);\n        font-size: var(--outro-title-tablet);\n        \n    }\n\n    .phone-icon, .email-icon {\n        display: block;\n        width: var(--card-tablet-fontsize-outro);\n        height: auto;\n    }\n\n    .phone, .email {\n        display: flex;\n        gap: .5rem;\n    }\n\n        .section-1 > .icons {\n            display: none;\n        }\n   \n\n\n\n\n\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQSxFQUFFOzs7QUFHRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUM7QUFDbkM7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0I7QUFDeEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEM7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7OztBQUdGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07O0FBRU47QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQSxDQUFDLE9BQU8sZ0tBQWdLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sYUFBYSxPQUFPLE1BQU0sVUFBVSxVQUFVLFlBQVksYUFBYSxjQUFjLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLFlBQVksWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLEtBQUssT0FBTyxhQUFhLGFBQWEsV0FBVyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sTUFBTSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxVQUFVLFFBQVEsS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxPQUFPLFlBQVksT0FBTyxNQUFNLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxRQUFRLEtBQUssVUFBVSxPQUFPLE1BQU0sWUFBWSxjQUFjLEtBQUssS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsT0FBTyxxQkFBcUIsT0FBTyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsWUFBWSxLQUFLLEtBQUssT0FBTyxPQUFPLGFBQWEsV0FBVyxVQUFVLGFBQWEsUUFBUSxRQUFRLE1BQU0sUUFBUSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLFFBQVEsS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLGFBQWEsT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFlBQVksYUFBYSxPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksT0FBTyxL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RyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDYkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLWhvbWVwYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi1ob21lcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL29kaW4taG9tZXBhZ2Uvd2VicGFjay9ydW50aW1lL25vbmNlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBodG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG5cbjpyb290IHtcbiAgICAtLXNoYWRvdzogI2RkZDtcbiAgICAtLXNpZGUtcGFkZGluZzogMS41cmVtO1xuICAgIC0tc2lkZS1wYWRkaW5nLXRhYmxldDogMS41cmVtO1xuICAgIC0tY2FyZC10aXRsZS1mb250OiAxLjc1cmVtO1xuICAgIC0tbWFpbi1jb2xvcjogcmdiKDgsIDE0NSwgMTc4KTtcbiAgICAtLWNhcmQtdGFibGV0LWZvbnRzaXplOiAxLjVyZW07XG4gICAgLS1jYXJkLXRhYmxldC1mb250c2l6ZS1vdXRybzogMXJlbTtcbiAgICAtLW91dHJvLXRpdGxlLXRhYmxldDogMnJlbTtcbn1cblxuYm9keSB7XG4gICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgd2lkdGg6IDEwMHZ3O1xuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbn1cblxuLyogLnRvcC1ncmFkaWVudCB7XG5cblxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblxufSAqL1xuXG5cbi50b3AtcGhvdG8tY29udGFpbmVyIHtcblxuICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHJnYig4LCAxNDUsIDE3OCk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OGRlZywgcmdiYSg4LCAxNDUsIDE3OCwgMSkgNjAlLCByZ2JhKDE2MSwgMTUwLCAxNTAsIDAuMjUpIDYwLjQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDYzJSk7XG5cbn1cblxuLnRvcC1waG90bz5pbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLXNoYWRvdyk7XG59XG5cbi5uYW1lIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IGJsYWNrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiBjYWxjKC41cmVtICsgMzJweCk7XG4gICAgYm90dG9tOiAzMnB4O1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG5cbn1cblxuLnNlY3Rpb24tMSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCB2YXIoLS1zaWRlLXBhZGRpbmcpO1xuICAgIGdhcDogMXJlbTtcbn1cblxuLmhlYWRpbmcge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ucGFyYSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICAgIGNvbG9yOiBncmF5O1xuICAgIHBhZGRpbmctYm90dG9tOiAuMjVyZW07XG59XG5cbi5pY29ucyB7XG4gICAgZm9udC1zaXplOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxLjVyZW07XG59XG5cbi5zZWN0aW9uLTIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcbiAgICAvKiBuZWVkZWQ/ICovXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nKSoyKSk7XG4gICAgcGFkZGluZzogdmFyKC0tc2lkZS1wYWRkaW5nKVxuICAgIFxufVxuXG4uY2FyZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGdhcDogM3JlbTtcbiAgICBcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIHZhcigtLXNpZGUtcGFkZGluZykgKiAyKTtcbn1cblxuLm15d29yay1oZWFkZXIge1xuICAgIG1hcmdpbjogMnJlbTtcbn1cblxuLmljb25zPnN2ZyB7XG4gICAgd2lkdGg6IDJyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBoZWlnaHQ6IDE3NXB4O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG5cbi5wcm9qZWN0LWNhcmQge1xuICAgIC8qIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAxZnI7ICovXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tc2hhZG93KTtcbiAgICBtYXgtd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLXBhZGRpbmcgKiAyKSk7XG59XG5cblxuXG5cblxuLmNhcmQtaWNvbnM+c3ZnIHtcbiAgICB3aWR0aDogYXV0bztcbiAgICBoZWlnaHQ6IHZhcigtLWNhcmQtdGl0bGUtZm9udCk7XG59XG5cbi5jYXJkLXBob3RvPmltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbi5pbWctY29udGFpbmVyIHtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDNyZW0pO1xufVxuXG4uY2FyZC10aXRsZS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgcGFkZGluZzogLjI1cmVtIDA7XG59XG5cbi5jYXJkLXByb2plY3QtbmFtZSxcbi5naXRodWItY2FyZCB7XG4gICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRpdGxlLWZvbnQpO1xuXG59XG5cbi5jYXJkLWljb25zIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA4cHg7XG4gICAgcGFkZGluZzogLjVyZW07XG59XG5cbi50ZXh0LWNvbnRlbnQge1xuICAgIC8qIHBhZGRpbmc6IC43NXJlbTsgKi9cbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xufVxuXG4ucHJvamVjdC1kZXNjcmlwdGlvbiB7XG4gICAgY29sb3I6ICM0NDQ7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xufVxuXG4uYm90dG9tLXNlY3Rpb24ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1haW4tY29sb3IpO1xufVxuXG4ub3V0cm8tY29udGVudCB7XG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7ICovXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogLjc1cmVtO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHBhZGRpbmc6IDJyZW0gMS41cmVtIDRyZW0gMS41cmVtO1xufVxuXG4ub3V0cm8tYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMS41cmVtO1xufVxuXG4uY29udGFjdC1tZSB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGFjdC1pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAuNXJlbTtcbn1cblxuLm91dHJvLXBob3RvIHtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG5cbi5vdXRyby1waG90bz5pbWcge1xuICAgIHdpZHRoOiAxMDB2dztcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5vdXRyby0xIHtcbiAgICBmb250LXNpemU6IDEuNzVyZW07XG4gICAgLyogbGluZS1oZWlnaHQ6IC45NTsgKi9cbn1cblxuLm91dHJvLTIsXG4ub3V0cm8tMyxcbi5vdXRyby1lbWFpbCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG59XG5cbi8qIC5vdXRyby1lbWFpbCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufSAqL1xuXG5cbi5vdXRyby1pY29ucyB7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW07XG5cbn1cblxuLm91dHJvLWljb25zPnN2ZyB7XG4gICAgaGVpZ2h0OiAzcmVtO1xuICAgIHdpZHRoOiBhdXRvO1xufVxuXG4ucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cblxuLm91dHJvLWljb24tdGV4dCB7XG4gICAgZm9udC1zaXplOiAzcmVtO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIGFuZCAobWF4LXdpZHRoOiA5OTlweCkge1xuXG4gICAgLyogbWVkaWEgdGVzdCAqL1xuICAgIFxuXG4gICAgLyogLm5hbWUge1xuICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAwcHggNHB4IGJsYWNrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IGNhbGMoLjVyZW0gKyAzMnB4KTtcbiAgICAgICAgYm90dG9tOiAzMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgIFxuICAgIH0gKi9cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICBzY2FsZTogMS4yNTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExcmVtKTtcbiAgICAgICAgdG9wOiAxLjc1cmVtO1xuICAgIH1cblxuICAgIC8qIC50b3AtZ3JhZGllbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICAudG9wLXBob3RvLWNvbnRhaW5lciB7XG4gICAgICAgIHBhZGRpbmc6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYig4LCAxNDUsIDE3OCk7XG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDhkZWcsIHJnYmEoOCwgMTQ1LCAxNzgsIDEpIDYwJSwgcmdiYSgxNjEsIDE1MCwgMTUwLCAwLjI1KSA2MC40JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA2MyUpO1xuICAgIH1cbiAgICAgICAgXG4gICAgLnRvcC1waG90bz5pbWcge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLXNoYWRvdyk7XG4gICAgfSAqL1xuXG4gICAgLyogLnNlY3Rpb24tMSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nKTtcbiAgICAgICAgZ2FwOiAxcmVtO1xuICAgIH0gKi9cblxuICAgIC5zZWN0aW9uLTEgPiAuYWJvdXQtaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICB9XG5cbiAgICAuc2VjdGlvbi0xID4gLnBhcmEge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTtcbiAgICB9XG4gICAgLnNlY3Rpb24tMSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLXNoYWRvdyk7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0ICogNikpKTtcbiAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtIDNyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luOiA0cmVtIDIuNXJlbSAwIDIuNXJlbTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCB2YXIoLS1zaGFkb3cpO1xuICAgIH1cbiAgICAudG9wLXBob3RvLWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmc6IDAgLjVyZW0gLjI1cmVtIDA7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBcbiAgICB9XG4gICAgLnRvcC1waG90byA+IGltZyB7XG4gICAgICAgIC8qIHdpZHRoOiA0NSU7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDQ1JTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7ICovXG4gICAgICAgIC8qIGZsb2F0OiBsZWZ0OyAqL1xuICAgICAgICB3aWR0aDogMjUwcHg7XG4gICAgICAgIGhlaWdodDogMjUwcHg7XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBcbiAgICB9XG4gICBcblxuICAgIC8qIC50b3AtcGhvdG8ge1xuICAgICAgICBcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIFxuICAgIH0gKi9cblxuICAgLyogYm9keSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICB9ICovXG5cbiAgICAudG9wLWFib3V0LWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSAzcmVtIHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpO1xuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0ICogMikpKTsgXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1haW4tY29sb3IpO1xuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTY1ZGVnLCB2YXIoLS1tYWluLWNvbG9yKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjMlKTtcbiAgICB9XG4gICAgXG5cbiAgICAuc2VjdGlvbi0yIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkqNCkpO1xuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpICogMik7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG5cbiAgICB9XG5cbiAgICAucHJvamVjdC1jYXJkIHtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiBjbGFtcCgxODBweCwgY2FsYygoMTAwdncgLSAodmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkqNCkgLSAzcmVtKSAvIDIpLCAzNzVweCk7XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGVudCB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgfVxuXG4gICAgLmNhcmQtY29udGFpbmVyIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBnYXA6IDNyZW07XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkqNClcbiAgICB9XG5cbiAgICAuY2FyZC10aXRsZS1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogLjVyZW07XG4gICAgfVxuXG4gICAgLmltZy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAuaGVhZGluZyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICB9XG5cbiAgICAubXl3b3JrLWhlYWRlciB7XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cblxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XG4gICAgfVxuXG4gICAgLmNhcmQtcHJvamVjdC1uYW1lIHtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jYXJkLWljb25zIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG4gICAgLmNhcmQtaWNvbnMgPiBzdmcsIC5jYXJkLWljb25zID4gaSAge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcmQtdGFibGV0LWZvbnRzaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1jYXJkLXRhYmxldC1mb250c2l6ZSk7XG4gICAgfVxuXG4gICAgLmJvdHRvbS1zZWN0aW9uIHtcbiAgICAgICAgXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKCh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSkqMikpO1xuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkgM3JlbSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIH1cblxuICAgIC5jb250YWN0LW1lIHtcbiAgICAgICAgXG4gICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW91dHJvLXRpdGxlLXRhYmxldCk7XG4gICAgfVxuXG4gICAgLm91dHJvLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiA0cmVtIDVyZW0gNHJlbSAxcmVtO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAub3V0cm8tMSwgLm91dHJvLTIsIC5vdXRyby0zLCAub3V0cm8tZW1haWwge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWNhcmQtdGFibGV0LWZvbnRzaXplLW91dHJvKTtcbiAgICB9XG5cbiAgICAub3V0cm8tY29udGVudCwgLm91dHJvLWVtYWlsIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQ7XG4gICAgfVxuXG4gICAgLm91dHJvLWJvZHkge1xuICAgICAgICBnYXA6IDFyZW07XG4gICAgfVxuXG4gICAgLm91dHJvLXBob3RvIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwdncvMyk7XG4gICAgfVxuXG4gICAgLm91dHJvLWVtYWlsIHsgXG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDA7XG4gICAgfVxuXG4gICAgLm91dHJvLXBob3RvPmltZyB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xuICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAganVzdGlmeS1zZWxmOiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAub3V0cm8taWNvbnMge1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIFxuICAgIH1cblxuICAgIFxuXG4gICAgLm91dHJvLWljb25zPnN2ZywgLm91dHJvLWljb25zID4gaSB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tb3V0cm8tdGl0bGUtdGFibGV0KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1vdXRyby10aXRsZS10YWJsZXQpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICAucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IHZhcigtLWNhcmQtdGFibGV0LWZvbnRzaXplLW91dHJvKTtcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgIH1cblxuICAgIC5waG9uZSwgLmVtYWlsIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAuNXJlbTtcbiAgICB9XG5cbiAgICAgICAgLnNlY3Rpb24tMSA+IC5pY29ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICBcblxuXG5cblxuXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFpRkksU0FBUztJQUNULFVBQVU7SUFDVixTQUFTO0lBQ1QsZUFBZTtJQUNmLGFBQWE7SUFDYix3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLDZCQUE2QjtJQUM3QiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLDhCQUE4QjtJQUM5QixrQ0FBa0M7SUFDbEMsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7Ozs7OztHQVNHOzs7QUFHSDs7SUFFSSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsMEhBQTBIOztBQUU5SDs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIscUNBQXFDO0FBQ3pDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLGtCQUFrQjtJQUNsQix3QkFBd0I7SUFDeEIsWUFBWTtJQUNaLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsV0FBVztBQUNmOztBQUVB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SUFDekY7O0lBRUE7UUFDSSxhQUFhO0lBQ2pCOztJQUVBO1FBQ0ksOEJBQThCO1FBQzlCLFNBQVM7UUFDVDtJQUNKOztJQUVBO1FBQ0kscUJBQXFCO0lBQ3pCOztJQUVBO1FBQ0ksV0FBVztJQUNmOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGdCQUFnQjtRQUNoQixTQUFTO0lBQ2I7OztJQUdBO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixzQkFBc0I7SUFDMUI7SUFDQTtRQUNJLHNDQUFzQztRQUN0QyxtQ0FBbUM7SUFDdkM7O0lBRUE7O1FBRUkscURBQXFEO1FBQ3JELDBFQUEwRTtRQUMxRSxhQUFhO1FBQ2IsbUJBQW1CO1FBQ25CLDhCQUE4QjtJQUNsQzs7SUFFQTs7UUFFSSxpQkFBaUI7UUFDakIsb0NBQW9DO0lBQ3hDOztJQUVBO1FBQ0ksNEJBQTRCOztJQUVoQzs7SUFFQTtRQUNJLDRDQUE0QztJQUNoRDs7SUFFQTtRQUNJLHVCQUF1Qjs7UUFFdkIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksU0FBUztJQUNiOztJQUVBO1FBQ0ksb0JBQW9CO0lBQ3hCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLFlBQVk7UUFDWixpQkFBaUI7UUFDakIsY0FBYztRQUNkLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLDJCQUEyQjtRQUMzQixVQUFVOztJQUVkOzs7O0lBSUE7UUFDSSxpQ0FBaUM7UUFDakMsb0NBQW9DOztJQUV4Qzs7SUFFQTtRQUNJLGNBQWM7UUFDZCx3Q0FBd0M7UUFDeEMsWUFBWTtJQUNoQjs7SUFFQTtRQUNJLGFBQWE7UUFDYixVQUFVO0lBQ2Q7O1FBRUk7WUFDSSxhQUFhO1FBQ2pCOzs7Ozs7O0FBT1JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbjpyb290IHtcXG4gICAgLS1zaGFkb3c6ICNkZGQ7XFxuICAgIC0tc2lkZS1wYWRkaW5nOiAxLjVyZW07XFxuICAgIC0tc2lkZS1wYWRkaW5nLXRhYmxldDogMS41cmVtO1xcbiAgICAtLWNhcmQtdGl0bGUtZm9udDogMS43NXJlbTtcXG4gICAgLS1tYWluLWNvbG9yOiByZ2IoOCwgMTQ1LCAxNzgpO1xcbiAgICAtLWNhcmQtdGFibGV0LWZvbnRzaXplOiAxLjVyZW07XFxuICAgIC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm86IDFyZW07XFxuICAgIC0tb3V0cm8tdGl0bGUtdGFibGV0OiAycmVtO1xcbn1cXG5cXG5ib2R5IHtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbn1cXG5cXG4vKiAudG9wLWdyYWRpZW50IHtcXG5cXG5cXG5cXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG5cXG59ICovXFxuXFxuXFxuLnRvcC1waG90by1jb250YWluZXIge1xcblxcbiAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoOCwgMTQ1LCAxNzgpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ4ZGVnLCByZ2JhKDgsIDE0NSwgMTc4LCAxKSA2MCUsIHJnYmEoMTYxLCAxNTAsIDE1MCwgMC4yNSkgNjAuNCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgNjMlKTtcXG5cXG59XFxuXFxuLnRvcC1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGJveC1zaGFkb3c6IDBweCAwcHggOHB4IHZhcigtLXNoYWRvdyk7XFxufVxcblxcbi5uYW1lIHtcXG4gICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiBjYWxjKC41cmVtICsgMzJweCk7XFxuICAgIGJvdHRvbTogMzJweDtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXG5cXG59XFxuXFxuLnNlY3Rpb24tMSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nKTtcXG4gICAgZ2FwOiAxcmVtO1xcbn1cXG5cXG4uaGVhZGluZyB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcXG59XFxuXFxuLnBhcmEge1xcbiAgICBmb250LXNpemU6IDEuMjVyZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xcbiAgICBjb2xvcjogZ3JheTtcXG4gICAgcGFkZGluZy1ib3R0b206IC4yNXJlbTtcXG59XFxuXFxuLmljb25zIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDEuNXJlbTtcXG59XFxuXFxuLnNlY3Rpb24tMiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMnJlbSAwIDhyZW0gMDtcXG4gICAgLyogbmVlZGVkPyAqL1xcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmcpKjIpKTtcXG4gICAgcGFkZGluZzogdmFyKC0tc2lkZS1wYWRkaW5nKVxcbiAgICBcXG59XFxuXFxuLmNhcmQtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ2FwOiAzcmVtO1xcbiAgICBcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSB2YXIoLS1zaWRlLXBhZGRpbmcpICogMik7XFxufVxcblxcbi5teXdvcmstaGVhZGVyIHtcXG4gICAgbWFyZ2luOiAycmVtO1xcbn1cXG5cXG4uaWNvbnM+c3ZnIHtcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIGhlaWdodDogYXV0bztcXG59XFxuXFxuLmNhcmQtY29udGVudCB7XFxuICAgIGhlaWdodDogMTc1cHg7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxufVxcblxcbi5wcm9qZWN0LWNhcmQge1xcbiAgICAvKiBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDFmcjsgKi9cXG4gICAgYm94LXNoYWRvdzogMnB4IDJweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gICAgbWF4LXdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZS1wYWRkaW5nICogMikpO1xcbn1cXG5cXG5cXG5cXG5cXG5cXG4uY2FyZC1pY29ucz5zdmcge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgaGVpZ2h0OiB2YXIoLS1jYXJkLXRpdGxlLWZvbnQpO1xcbn1cXG5cXG4uY2FyZC1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxufVxcblxcbi5pbWctY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IGNhbGMoMTAwdncgLSAzcmVtKTtcXG59XFxuXFxuLmNhcmQtdGl0bGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBwYWRkaW5nOiAuMjVyZW0gMDtcXG59XFxuXFxuLmNhcmQtcHJvamVjdC1uYW1lLFxcbi5naXRodWItY2FyZCB7XFxuICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10aXRsZS1mb250KTtcXG5cXG59XFxuXFxuLmNhcmQtaWNvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDhweDtcXG4gICAgcGFkZGluZzogLjVyZW07XFxufVxcblxcbi50ZXh0LWNvbnRlbnQge1xcbiAgICAvKiBwYWRkaW5nOiAuNzVyZW07ICovXFxuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XFxufVxcblxcbi5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgY29sb3I6ICM0NDQ7XFxuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcXG59XFxuXFxuLmJvdHRvbS1zZWN0aW9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7XFxufVxcblxcbi5vdXRyby1jb250ZW50IHtcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbi1jb2xvcik7ICovXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogLjc1cmVtO1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgcGFkZGluZzogMnJlbSAxLjVyZW0gNHJlbSAxLjVyZW07XFxufVxcblxcbi5vdXRyby1ib2R5IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAxLjVyZW07XFxufVxcblxcbi5jb250YWN0LW1lIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uY29udGFjdC1pbmZvIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgZ2FwOiAuNXJlbTtcXG59XFxuXFxuLm91dHJvLXBob3RvIHtcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxufVxcblxcblxcbi5vdXRyby1waG90bz5pbWcge1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4ub3V0cm8tMSB7XFxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcXG4gICAgLyogbGluZS1oZWlnaHQ6IC45NTsgKi9cXG59XFxuXFxuLm91dHJvLTIsXFxuLm91dHJvLTMsXFxuLm91dHJvLWVtYWlsIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxufVxcblxcbi8qIC5vdXRyby1lbWFpbCB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59ICovXFxuXFxuXFxuLm91dHJvLWljb25zIHtcXG4gICAgY29sb3I6ICMwMDA7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcblxcbn1cXG5cXG4ub3V0cm8taWNvbnM+c3ZnIHtcXG4gICAgaGVpZ2h0OiAzcmVtO1xcbiAgICB3aWR0aDogYXV0bztcXG59XFxuXFxuLnBob25lLWljb24sIC5lbWFpbC1pY29uIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuXFxuLm91dHJvLWljb24tdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSBhbmQgKG1heC13aWR0aDogOTk5cHgpIHtcXG5cXG4gICAgLyogbWVkaWEgdGVzdCAqL1xcbiAgICBcXG5cXG4gICAgLyogLm5hbWUge1xcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtc2hhZG93OiAwcHggMHB4IDRweCBibGFjaztcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGxlZnQ6IGNhbGMoLjVyZW0gKyAzMnB4KTtcXG4gICAgICAgIGJvdHRvbTogMzJweDtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XFxuICAgIFxcbiAgICB9ICovXFxuICAgIC5uYW1lIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgICAgICAgbGVmdDogYXV0bztcXG4gICAgICAgIHNjYWxlOiAxLjI1O1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDExcmVtKTtcXG4gICAgICAgIHRvcDogMS43NXJlbTtcXG4gICAgfVxcblxcbiAgICAvKiAudG9wLWdyYWRpZW50IHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgfVxcbiAgICAudG9wLXBob3RvLWNvbnRhaW5lciB7XFxuICAgICAgICBwYWRkaW5nOiAxLjVyZW07XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoOCwgMTQ1LCAxNzgpO1xcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0OGRlZywgcmdiYSg4LCAxNDUsIDE3OCwgMSkgNjAlLCByZ2JhKDE2MSwgMTUwLCAxNTAsIDAuMjUpIDYwLjQlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDYzJSk7XFxuICAgIH1cXG4gICAgICAgIFxcbiAgICAudG9wLXBob3RvPmltZyB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDBweCA4cHggdmFyKC0tc2hhZG93KTtcXG4gICAgfSAqL1xcblxcbiAgICAvKiAuc2VjdGlvbi0xIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIHBhZGRpbmc6IDAgdmFyKC0tc2lkZS1wYWRkaW5nKTtcXG4gICAgICAgIGdhcDogMXJlbTtcXG4gICAgfSAqL1xcblxcbiAgICAuc2VjdGlvbi0xID4gLmFib3V0LWhlYWRlciB7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XFxuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xcbiAgICB9XFxuXFxuICAgIC5zZWN0aW9uLTEgPiAucGFyYSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XFxuICAgIH1cXG4gICAgLnNlY3Rpb24tMSB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tc2hhZG93KTtcXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQgKiA2KSkpO1xcbiAgICAgICAgcGFkZGluZzogM3JlbSAxcmVtIDNyZW0gMXJlbTtcXG4gICAgICAgIG1hcmdpbjogNHJlbSAyLjVyZW0gMCAyLjVyZW07XFxuICAgICAgICBib3JkZXI6IG5vbmU7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggMnB4IDZweCB2YXIoLS1zaGFkb3cpO1xcbiAgICB9XFxuICAgIC50b3AtcGhvdG8tY29udGFpbmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgICAgICBwYWRkaW5nOiAwIC41cmVtIC4yNXJlbSAwO1xcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XFxuICAgICAgICBcXG4gICAgfVxcbiAgICAudG9wLXBob3RvID4gaW1nIHtcXG4gICAgICAgIC8qIHdpZHRoOiA0NSU7XFxuICAgICAgICBoZWlnaHQ6IDA7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDUlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7ICovXFxuICAgICAgICAvKiBmbG9hdDogbGVmdDsgKi9cXG4gICAgICAgIHdpZHRoOiAyNTBweDtcXG4gICAgICAgIGhlaWdodDogMjUwcHg7XFxuICAgICAgICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gICAgICAgIFxcbiAgICB9XFxuICAgXFxuXFxuICAgIC8qIC50b3AtcGhvdG8ge1xcbiAgICAgICAgXFxuICAgICAgICBmbG9hdDogbGVmdDtcXG4gICAgICAgIFxcbiAgICB9ICovXFxuXFxuICAgLyogYm9keSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgfSAqL1xcblxcbiAgICAudG9wLWFib3V0LWNvbnRhaW5lciB7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpIHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpIDNyZW0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCk7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0ICogMikpKTsgXFxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluLWNvbG9yKTtcXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNjVkZWcsIHZhcigtLW1haW4tY29sb3IpIDYwJSwgcmdiYSgxNjEsIDE1MCwgMTUwLCAwLjI1KSA2MC40JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSA2MyUpO1xcbiAgICB9XFxuICAgIFxcblxcbiAgICAuc2VjdGlvbi0yIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDA7XFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSo0KSk7XFxuICAgICAgICBwYWRkaW5nOiBjYWxjKHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpICogMik7XFxuICAgICAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcXG5cXG4gICAgfVxcblxcbiAgICAucHJvamVjdC1jYXJkIHtcXG4gICAgICAgIFxcbiAgICAgICAgd2lkdGg6IGNsYW1wKDE4MHB4LCBjYWxjKCgxMDB2dyAtICh2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSo0KSAtIDNyZW0pIC8gMiksIDM3NXB4KTtcXG4gICAgfVxcblxcbiAgICAuY2FyZC1jb250ZW50IHtcXG4gICAgICAgIGhlaWdodDogMTAwcHg7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtY29udGFpbmVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgICAgIGdhcDogM3JlbTtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3IC0gdmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkqNClcXG4gICAgfVxcblxcbiAgICAuY2FyZC10aXRsZS1jb250YWluZXIge1xcbiAgICAgICAgcGFkZGluZy1ib3R0b206IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIC5pbWctY29udGFpbmVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgIC5oZWFkaW5nIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgfVxcblxcbiAgICAubXl3b3JrLWhlYWRlciB7XFxuICAgICAgICBwYWRkaW5nOiAuNXJlbSAwO1xcbiAgICAgICAgbWFyZ2luOiAwO1xcbiAgICB9XFxuXFxuXFxuICAgIC5wcm9qZWN0LWRlc2NyaXB0aW9uIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLXByb2plY3QtbmFtZSB7XFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtaWNvbnMge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG4gICAgLmNhcmQtaWNvbnMgPiBzdmcsIC5jYXJkLWljb25zID4gaSAge1xcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1jYXJkLXRhYmxldC1mb250c2l6ZSk7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLWNhcmQtdGFibGV0LWZvbnRzaXplKTtcXG4gICAgfVxcblxcbiAgICAuYm90dG9tLXNlY3Rpb24ge1xcbiAgICAgICAgXFxuICAgICAgICB3aWR0aDogY2FsYygxMDB2dyAtICgodmFyKC0tc2lkZS1wYWRkaW5nLXRhYmxldCkpKjIpKTtcXG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSB2YXIoLS1zaWRlLXBhZGRpbmctdGFibGV0KSAzcmVtIHZhcigtLXNpZGUtcGFkZGluZy10YWJsZXQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIH1cXG5cXG4gICAgLmNvbnRhY3QtbWUge1xcbiAgICAgICAgXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tb3V0cm8tdGl0bGUtdGFibGV0KTtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiA0cmVtIDVyZW0gNHJlbSAxcmVtO1xcbiAgICAgICAgXFxuICAgIH1cXG5cXG4gICAgLm91dHJvLTEsIC5vdXRyby0yLCAub3V0cm8tMywgLm91dHJvLWVtYWlsIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1jb250ZW50LCAub3V0cm8tZW1haWwge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuXFxuICAgICAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tYm9keSB7XFxuICAgICAgICBnYXA6IDFyZW07XFxuICAgIH1cXG5cXG4gICAgLm91dHJvLXBob3RvIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xcbiAgICB9XFxuXFxuICAgIC5vdXRyby1lbWFpbCB7IFxcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMDtcXG4gICAgfVxcblxcbiAgICAub3V0cm8tcGhvdG8+aW1nIHtcXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMHZ3LzMpO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIGp1c3RpZnktc2VsZjogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLm91dHJvLWljb25zIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgICAgIHBhZGRpbmc6IDA7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICBcXG5cXG4gICAgLm91dHJvLWljb25zPnN2ZywgLm91dHJvLWljb25zID4gaSB7XFxuICAgICAgICBoZWlnaHQ6IHZhcigtLW91dHJvLXRpdGxlLXRhYmxldCk7XFxuICAgICAgICBmb250LXNpemU6IHZhcigtLW91dHJvLXRpdGxlLXRhYmxldCk7XFxuICAgICAgICBcXG4gICAgfVxcblxcbiAgICAucGhvbmUtaWNvbiwgLmVtYWlsLWljb24ge1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogdmFyKC0tY2FyZC10YWJsZXQtZm9udHNpemUtb3V0cm8pO1xcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5waG9uZSwgLmVtYWlsIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBnYXA6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgICAgICAuc2VjdGlvbi0xID4gLmljb25zIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgIFxcblxcblxcblxcblxcblxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==