(() => {
  "use strict";
  var e = {
      917: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(537),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",
          "",
          {
            version: 3,
            sources: ["webpack://./src/reset.css"],
            names: [],
            mappings:
              "AAAA;;;CAGC;;AAED;;;;;;;;;;;;;CAaC,SAAS;CACT,UAAU;CACV,SAAS;CACT,wBAAwB;AACzB;AACA,gDAAgD;AAChD;;CAEC,cAAc;AACf;AACA;CACC,cAAc;AACf;AACA;CACC,gBAAgB;AACjB;AACA;CACC,YAAY;AACb;AACA;;CAEC,WAAW;CACX,aAAa;AACd;AACA;CACC,yBAAyB;CACzB,iBAAiB;AAClB",
            sourcesContent: [
              "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed, \nfigure, figcaption, footer, header, hgroup, \nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure, \nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}",
            ],
            sourceRoot: "",
          },
        ]);
        const s = i;
      },
      28: (e, n, t) => {
        t.d(n, { Z: () => s });
        var r = t(537),
          o = t.n(r),
          a = t(645),
          i = t.n(a)()(o());
        i.push([
          e.id,
          "/* variables */\n:root{\n    --primary: #F4F1F8;\n    --secondary: #ffffff;\n    --tertiary: #000000;\n}\n\n/* base styles */\nhtml{\n    font-size: 16px;\n}\n\n/* fonts */\nbody{\n    font-family: Helvetica;\n}\n\n.logo-text{\n    font-size: 2rem;\n    font-weight: bolder;    \n}\n\n.home, .projects{\n    font-size: 1.23rem;\n}\n\n.add-task{\n    font-size: 0.7rem;\n}\n\n.footer{\n    font-size: 0.8rem;\n}\n\n.task-h, .task-h-input{\n    font-size: 1.2rem;\n    font-weight: bolder;\n}\n\n/* mobile styles */\n.main-container{\n    width: 100%;\n}\n\n.sidebar{\n    display: none;\n}\n\n.show-sb{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n}\n\n.close-hambg{\n    padding: 1.5rem 0;\n}\n\n .home{\n        margin-top: 3rem;\n    }\n\n .home-heading, .projects-heading{\n     cursor: pointer;\n }\n    \n .home-item, .project-item{\n        cursor:pointer;\n        margin: 1rem;\n    }\n    \n .projects{\n        margin-top: 3rem;\n    }\n\n .proj-title-input{\n     width: 50%;\n }\n\n .close-proj{\n     margin: 0 0 0.2rem 1.5rem;\n     width: 0.5rem;\n }\n\n.logo{\n    width: 2rem;\n    margin: 0.5rem 0.7rem 0 0.5rem;\n}\n\n.ico{\n    cursor: pointer;\n    width: 1.2rem;\n    margin: 0 0.4rem;\n}\n\n.display{\n    width: 100%;\n   height: 100%;\n    background-color: var(--primary);\n}\n\n.hide-disp{\n    display: none;\n}\n\n.display-h{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 3rem;\n    background-color: var(--secondary);\n    padding: 5%;\n    display: flex;\n    align-items: center;\n    border-bottom: 0.3rem solid var(--tertiary);\n}\n\n.display-rh{\n    position: fixed;\n    right: 1rem;\n}\n\n.tasks-container{\n    padding: 5%;\n    min-height: 100vh;\n    height: 100%;\n}\n\n#task-1{\n    padding: 0.5rem;\n    background-color: white;\n    text-align: left;\n    margin: 5rem auto 1.5rem auto;\n    width: 85%;\n    max-width: 25rem;\n}\n\n.task{\n    padding: 0.5rem;\n    background-color: white;\n    text-align: justify;\n    margin: 5rem auto 0 auto;\n    width: 85%;\n    max-width: 25rem;\n}\n\n.task-h-input, .task-desc-input{\n    width: 90%;\n}\n\n.task-desc{\n    margin: 0 auto;\n    max-width: 19.5rem;\n}\n\n.checkbox{\n    padding: 0 0.5rem 0 1rem;\n}\n\n.due-date{\n    margin: 0.5rem 0;\n}\n\n.add-task{\n    cursor: pointer;\n    background-color: var(--tertiary);\n    color: var(--secondary);\n    padding: 0.5rem;\n    width: 30%;\n    text-align: center;\n    margin: 5rem auto 4.2rem auto;\n}\n\n.task-h-input, .task-desc-input{\n    border: 0;\n}\n\n.footer{\n    background-color: var(--tertiary);\n    color: var(--secondary);\n    padding: 0.8rem 0.5% 0.5rem 0.5%;\n    width: 70%;\n    text-align: center;\n    margin: 0 auto;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, 0);\n    bottom: 1rem;\n}\n\n/* small tablet styles */\n@media (min-width: 500px){\n    .task-1{\n        padding: 0.5rem;\n        background-color: white;\n        text-align: justify;\n        margin: 8rem auto 1.5rem auto;\n        width: 85%;\n        max-width: 25rem;\n    }\n    \n    .tasks-container{\n            margin-top: 1rem;\n    }\n}\n\n/* large tablet styles */\n@media (min-width: 670px){\n    html{\n        font-size: 18px;\n    }\n    .sidebar{\n        position: fixed;\n        height: 100%;\n        z-index: 1;\n        box-shadow: 2px 5px 5px black;\n        padding: 1.3rem;\n        max-width: 13rem;\n        width: 15rem;\n        display: flex;\n        flex-direction: column;\n        overflow-y: auto;\n     }\n    \n    .close-hambg{\n        display: none;\n    }\n    \n    .display-h{\n        border-bottom: 0;\n        background-color: transparent;\n    }\n    \n    .display{\n        margin-left: 15.5rem;\n        width: 100%;\n    }\n    \n    .ico{\n        margin: 0 0.8rem;\n    }\n    \n    .hambg{\n        display: none;\n    }\n     .main-container{\n        display: flex;\n     } \n    \n    .footer{\n        width: 10rem;\n        left: 7.6rem;\n    }\n}\n\n",
          "",
          {
            version: 3,
            sources: ["webpack://./src/styles.css"],
            names: [],
            mappings:
              "AAAA,cAAc;AACd;IACI,kBAAkB;IAClB,oBAAoB;IACpB,mBAAmB;AACvB;;AAEA,gBAAgB;AAChB;IACI,eAAe;AACnB;;AAEA,UAAU;AACV;IACI,sBAAsB;AAC1B;;AAEA;IACI,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,iBAAiB;IACjB,mBAAmB;AACvB;;AAEA,kBAAkB;AAClB;IACI,WAAW;AACf;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,YAAY;AAChB;;AAEA;IACI,iBAAiB;AACrB;;CAEC;QACO,gBAAgB;IACpB;;CAEH;KACI,eAAe;CACnB;;CAEA;QACO,cAAc;QACd,YAAY;IAChB;;CAEH;QACO,gBAAgB;IACpB;;CAEH;KACI,UAAU;CACd;;CAEA;KACI,yBAAyB;KACzB,aAAa;CACjB;;AAED;IACI,WAAW;IACX,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,aAAa;IACb,gBAAgB;AACpB;;AAEA;IACI,WAAW;GACZ,YAAY;IACX,gCAAgC;AACpC;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,eAAe;IACf,MAAM;IACN,WAAW;IACX,YAAY;IACZ,kCAAkC;IAClC,WAAW;IACX,aAAa;IACb,mBAAmB;IACnB,2CAA2C;AAC/C;;AAEA;IACI,eAAe;IACf,WAAW;AACf;;AAEA;IACI,WAAW;IACX,iBAAiB;IACjB,YAAY;AAChB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,gBAAgB;IAChB,6BAA6B;IAC7B,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,uBAAuB;IACvB,mBAAmB;IACnB,wBAAwB;IACxB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,UAAU;AACd;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,wBAAwB;AAC5B;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,eAAe;IACf,iCAAiC;IACjC,uBAAuB;IACvB,eAAe;IACf,UAAU;IACV,kBAAkB;IAClB,6BAA6B;AACjC;;AAEA;IACI,SAAS;AACb;;AAEA;IACI,iCAAiC;IACjC,uBAAuB;IACvB,gCAAgC;IAChC,UAAU;IACV,kBAAkB;IAClB,cAAc;IACd,eAAe;IACf,SAAS;IACT,6BAA6B;IAC7B,YAAY;AAChB;;AAEA,wBAAwB;AACxB;IACI;QACI,eAAe;QACf,uBAAuB;QACvB,mBAAmB;QACnB,6BAA6B;QAC7B,UAAU;QACV,gBAAgB;IACpB;;IAEA;YACQ,gBAAgB;IACxB;AACJ;;AAEA,wBAAwB;AACxB;IACI;QACI,eAAe;IACnB;IACA;QACI,eAAe;QACf,YAAY;QACZ,UAAU;QACV,6BAA6B;QAC7B,eAAe;QACf,gBAAgB;QAChB,YAAY;QACZ,aAAa;QACb,sBAAsB;QACtB,gBAAgB;KACnB;;IAED;QACI,aAAa;IACjB;;IAEA;QACI,gBAAgB;QAChB,6BAA6B;IACjC;;IAEA;QACI,oBAAoB;QACpB,WAAW;IACf;;IAEA;QACI,gBAAgB;IACpB;;IAEA;QACI,aAAa;IACjB;KACC;QACG,aAAa;KAChB;;IAED;QACI,YAAY;QACZ,YAAY;IAChB;AACJ",
            sourcesContent: [
              "/* variables */\n:root{\n    --primary: #F4F1F8;\n    --secondary: #ffffff;\n    --tertiary: #000000;\n}\n\n/* base styles */\nhtml{\n    font-size: 16px;\n}\n\n/* fonts */\nbody{\n    font-family: Helvetica;\n}\n\n.logo-text{\n    font-size: 2rem;\n    font-weight: bolder;    \n}\n\n.home, .projects{\n    font-size: 1.23rem;\n}\n\n.add-task{\n    font-size: 0.7rem;\n}\n\n.footer{\n    font-size: 0.8rem;\n}\n\n.task-h, .task-h-input{\n    font-size: 1.2rem;\n    font-weight: bolder;\n}\n\n/* mobile styles */\n.main-container{\n    width: 100%;\n}\n\n.sidebar{\n    display: none;\n}\n\n.show-sb{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    height: 100%;\n}\n\n.close-hambg{\n    padding: 1.5rem 0;\n}\n\n .home{\n        margin-top: 3rem;\n    }\n\n .home-heading, .projects-heading{\n     cursor: pointer;\n }\n    \n .home-item, .project-item{\n        cursor:pointer;\n        margin: 1rem;\n    }\n    \n .projects{\n        margin-top: 3rem;\n    }\n\n .proj-title-input{\n     width: 50%;\n }\n\n .close-proj{\n     margin: 0 0 0.2rem 1.5rem;\n     width: 0.5rem;\n }\n\n.logo{\n    width: 2rem;\n    margin: 0.5rem 0.7rem 0 0.5rem;\n}\n\n.ico{\n    cursor: pointer;\n    width: 1.2rem;\n    margin: 0 0.4rem;\n}\n\n.display{\n    width: 100%;\n   height: 100%;\n    background-color: var(--primary);\n}\n\n.hide-disp{\n    display: none;\n}\n\n.display-h{\n    position: fixed;\n    top: 0;\n    width: 100%;\n    height: 3rem;\n    background-color: var(--secondary);\n    padding: 5%;\n    display: flex;\n    align-items: center;\n    border-bottom: 0.3rem solid var(--tertiary);\n}\n\n.display-rh{\n    position: fixed;\n    right: 1rem;\n}\n\n.tasks-container{\n    padding: 5%;\n    min-height: 100vh;\n    height: 100%;\n}\n\n#task-1{\n    padding: 0.5rem;\n    background-color: white;\n    text-align: left;\n    margin: 5rem auto 1.5rem auto;\n    width: 85%;\n    max-width: 25rem;\n}\n\n.task{\n    padding: 0.5rem;\n    background-color: white;\n    text-align: justify;\n    margin: 5rem auto 0 auto;\n    width: 85%;\n    max-width: 25rem;\n}\n\n.task-h-input, .task-desc-input{\n    width: 90%;\n}\n\n.task-desc{\n    margin: 0 auto;\n    max-width: 19.5rem;\n}\n\n.checkbox{\n    padding: 0 0.5rem 0 1rem;\n}\n\n.due-date{\n    margin: 0.5rem 0;\n}\n\n.add-task{\n    cursor: pointer;\n    background-color: var(--tertiary);\n    color: var(--secondary);\n    padding: 0.5rem;\n    width: 30%;\n    text-align: center;\n    margin: 5rem auto 4.2rem auto;\n}\n\n.task-h-input, .task-desc-input{\n    border: 0;\n}\n\n.footer{\n    background-color: var(--tertiary);\n    color: var(--secondary);\n    padding: 0.8rem 0.5% 0.5rem 0.5%;\n    width: 70%;\n    text-align: center;\n    margin: 0 auto;\n    position: fixed;\n    left: 50%;\n    transform: translate(-50%, 0);\n    bottom: 1rem;\n}\n\n/* small tablet styles */\n@media (min-width: 500px){\n    .task-1{\n        padding: 0.5rem;\n        background-color: white;\n        text-align: justify;\n        margin: 8rem auto 1.5rem auto;\n        width: 85%;\n        max-width: 25rem;\n    }\n    \n    .tasks-container{\n            margin-top: 1rem;\n    }\n}\n\n/* large tablet styles */\n@media (min-width: 670px){\n    html{\n        font-size: 18px;\n    }\n    .sidebar{\n        position: fixed;\n        height: 100%;\n        z-index: 1;\n        box-shadow: 2px 5px 5px black;\n        padding: 1.3rem;\n        max-width: 13rem;\n        width: 15rem;\n        display: flex;\n        flex-direction: column;\n        overflow-y: auto;\n     }\n    \n    .close-hambg{\n        display: none;\n    }\n    \n    .display-h{\n        border-bottom: 0;\n        background-color: transparent;\n    }\n    \n    .display{\n        margin-left: 15.5rem;\n        width: 100%;\n    }\n    \n    .ico{\n        margin: 0 0.8rem;\n    }\n    \n    .hambg{\n        display: none;\n    }\n     .main-container{\n        display: flex;\n     } \n    \n    .footer{\n        width: 10rem;\n        left: 7.6rem;\n    }\n}\n\n",
            ],
            sourceRoot: "",
          },
        ]);
        const s = i;
      },
      645: (e) => {
        e.exports = function (e) {
          var n = [];
          return (
            (n.toString = function () {
              return this.map(function (n) {
                var t = "",
                  r = void 0 !== n[5];
                return (
                  n[4] && (t += "@supports (".concat(n[4], ") {")),
                  n[2] && (t += "@media ".concat(n[2], " {")),
                  r &&
                    (t += "@layer".concat(
                      n[5].length > 0 ? " ".concat(n[5]) : "",
                      " {"
                    )),
                  (t += e(n)),
                  r && (t += "}"),
                  n[2] && (t += "}"),
                  n[4] && (t += "}"),
                  t
                );
              }).join("");
            }),
            (n.i = function (e, t, r, o, a) {
              "string" == typeof e && (e = [[null, e, void 0]]);
              var i = {};
              if (r)
                for (var s = 0; s < this.length; s++) {
                  var A = this[s][0];
                  null != A && (i[A] = !0);
                }
              for (var c = 0; c < e.length; c++) {
                var d = [].concat(e[c]);
                (r && i[d[0]]) ||
                  (void 0 !== a &&
                    (void 0 === d[5] ||
                      (d[1] = "@layer"
                        .concat(d[5].length > 0 ? " ".concat(d[5]) : "", " {")
                        .concat(d[1], "}")),
                    (d[5] = a)),
                  t &&
                    (d[2]
                      ? ((d[1] = "@media "
                          .concat(d[2], " {")
                          .concat(d[1], "}")),
                        (d[2] = t))
                      : (d[2] = t)),
                  o &&
                    (d[4]
                      ? ((d[1] = "@supports ("
                          .concat(d[4], ") {")
                          .concat(d[1], "}")),
                        (d[4] = o))
                      : (d[4] = "".concat(o))),
                  n.push(d));
              }
            }),
            n
          );
        };
      },
      537: (e) => {
        e.exports = function (e) {
          var n = e[1],
            t = e[3];
          if (!t) return n;
          if ("function" == typeof btoa) {
            var r = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
              o =
                "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(
                  r
                ),
              a = "/*# ".concat(o, " */"),
              i = t.sources.map(function (e) {
                return "/*# sourceURL="
                  .concat(t.sourceRoot || "")
                  .concat(e, " */");
              });
            return [n].concat(i).concat([a]).join("\n");
          }
          return [n].join("\n");
        };
      },
      379: (e) => {
        var n = [];
        function t(e) {
          for (var t = -1, r = 0; r < n.length; r++)
            if (n[r].identifier === e) {
              t = r;
              break;
            }
          return t;
        }
        function r(e, r) {
          for (var a = {}, i = [], s = 0; s < e.length; s++) {
            var A = e[s],
              c = r.base ? A[0] + r.base : A[0],
              d = a[c] || 0,
              l = "".concat(c, " ").concat(d);
            a[c] = d + 1;
            var m = t(l),
              p = { css: A[1], media: A[2], sourceMap: A[3] };
            -1 !== m
              ? (n[m].references++, n[m].updater(p))
              : n.push({ identifier: l, updater: o(p, r), references: 1 }),
              i.push(l);
          }
          return i;
        }
        function o(e, n) {
          var t = n.domAPI(n);
          return (
            t.update(e),
            function (n) {
              if (n) {
                if (
                  n.css === e.css &&
                  n.media === e.media &&
                  n.sourceMap === e.sourceMap
                )
                  return;
                t.update((e = n));
              } else t.remove();
            }
          );
        }
        e.exports = function (e, o) {
          var a = r((e = e || []), (o = o || {}));
          return function (e) {
            e = e || [];
            for (var i = 0; i < a.length; i++) {
              var s = t(a[i]);
              n[s].references--;
            }
            for (var A = r(e, o), c = 0; c < a.length; c++) {
              var d = t(a[c]);
              0 === n[d].references && (n[d].updater(), n.splice(d, 1));
            }
            a = A;
          };
        };
      },
      569: (e) => {
        var n = {};
        e.exports = function (e, t) {
          var r = (function (e) {
            if (void 0 === n[e]) {
              var t = document.querySelector(e);
              if (
                window.HTMLIFrameElement &&
                t instanceof window.HTMLIFrameElement
              )
                try {
                  t = t.contentDocument.head;
                } catch (e) {
                  t = null;
                }
              n[e] = t;
            }
            return n[e];
          })(e);
          if (!r)
            throw new Error(
              "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
            );
          r.appendChild(t);
        };
      },
      216: (e) => {
        e.exports = function (e) {
          var n = document.createElement("style");
          return e.setAttributes(n, e.attributes), e.insert(n), n;
        };
      },
      565: (e, n, t) => {
        e.exports = function (e) {
          var n = t.nc;
          n && e.setAttribute("nonce", n);
        };
      },
      795: (e) => {
        e.exports = function (e) {
          var n = e.insertStyleElement(e);
          return {
            update: function (t) {
              !(function (e, n, t) {
                var r = t.css,
                  o = t.media,
                  a = t.sourceMap;
                o ? e.setAttribute("media", o) : e.removeAttribute("media"),
                  a &&
                    "undefined" != typeof btoa &&
                    (r +=
                      "\n/*# sourceMappingURL=data:application/json;base64,".concat(
                        btoa(unescape(encodeURIComponent(JSON.stringify(a)))),
                        " */"
                      )),
                  n.styleTagTransform(r, e);
              })(n, e, t);
            },
            remove: function () {
              !(function (e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
              })(n);
            },
          };
        };
      },
      589: (e) => {
        e.exports = function (e, n) {
          if (n.styleSheet) n.styleSheet.cssText = e;
          else {
            for (; n.firstChild; ) n.removeChild(n.firstChild);
            n.appendChild(document.createTextNode(e));
          }
        };
      },
    },
    n = {};
  function t(r) {
    var o = n[r];
    if (void 0 !== o) return o.exports;
    var a = (n[r] = { id: r, exports: {} });
    return e[r](a, a.exports, t), a.exports;
  }
  (t.n = (e) => {
    var n = e && e.__esModule ? () => e.default : () => e;
    return t.d(n, { a: n }), n;
  }),
    (t.d = (e, n) => {
      for (var r in n)
        t.o(n, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: n[r] });
    }),
    (t.o = (e, n) => Object.prototype.hasOwnProperty.call(e, n)),
    (() => {
      var e = t(379),
        n = t.n(e),
        r = t(795),
        o = t.n(r),
        a = t(569),
        i = t.n(a),
        s = t(565),
        A = t.n(s),
        c = t(216),
        d = t.n(c),
        l = t(589),
        m = t.n(l),
        p = t(917),
        u = {};
      (u.styleTagTransform = m()),
        (u.setAttributes = A()),
        (u.insert = i().bind(null, "head")),
        (u.domAPI = o()),
        (u.insertStyleElement = d()),
        n()(p.Z, u),
        p.Z && p.Z.locals && p.Z.locals;
      var g = t(28),
        h = {};
      (h.styleTagTransform = m()),
        (h.setAttributes = A()),
        (h.insert = i().bind(null, "head")),
        (h.domAPI = o()),
        (h.insertStyleElement = d()),
        n()(g.Z, h),
        g.Z && g.Z.locals && g.Z.locals;
      const f = (e) => ({ projectName: e, tasks: [] }),
        C = { projectsArray: [], defaultProject: f("inbox") },
        y =
          ((() => {
            const e = document.querySelector(".display-lh"),
              n = document.querySelector(".home-heading"),
              t = document.querySelector(".inbox"),
              r = () => {
                const n = Array.from(document.querySelectorAll(".task"));
                "Inbox" !== e &&
                  (n.forEach((e) => e.setAttribute("style", "display:none;")),
                  (e.textContent = "Inbox"),
                  C.defaultProject.tasks.forEach((e) => {
                    for (let t = 0; t < n.length; t++)
                      e.title === n[t].childNodes[0].textContent &&
                        n[t].removeAttribute("style");
                  }));
              };
            n.addEventListener("click", r), t.addEventListener("click", r);
          })(),
          (e) => {
            const n = document.querySelector(".display-lh"),
              t = document.querySelectorAll(".project-item"),
              r = Array.from(document.querySelectorAll(".task"));
            (n.textContent = e),
              r.forEach((e) => e.setAttribute("style", "display:none;")),
              t.forEach((t) => {
                if (n.textContent === e) {
                  const n = Array.from(document.querySelectorAll(".task"));
                  C.projectsArray.forEach((t) => {
                    t.projectName === e &&
                      t.tasks.forEach((e) => {
                        for (let t = 0; t < n.length; t++)
                          e.title === n[t].childNodes[0].textContent &&
                            n[t].removeAttribute("style");
                      });
                  });
                }
              });
          }),
        B =
          ((() => {
            const e = document.querySelector(".hambg"),
              n = document.querySelector(".display"),
              t = document.querySelector(".sidebar"),
              r = document.querySelector(".close-hambg");
            e.addEventListener("click", () => {
              n.classList.toggle("display"),
                n.classList.toggle("hide-disp"),
                t.classList.toggle("sidebar"),
                t.classList.toggle("show-sb");
            }),
              r.addEventListener("click", () => {
                n.classList.toggle("display"),
                  n.classList.toggle("hide-disp"),
                  t.classList.toggle("sidebar"),
                  t.classList.toggle("show-sb");
              });
          })(),
          (e, n, t) => {
            const r = document.querySelector(".add-task"),
              o = document.querySelector(".display-lh"),
              a = document.createElement("div"),
              i = document.createElement("img"),
              s = document.createElement("span"),
              A = document.createElement("p"),
              c = document.createElement("p");
            if (
              (a.classList.add("task"),
              s.classList.add("task-h"),
              i.classList.add("ico", "checkbox"),
              c.classList.add("due-date"),
              A.classList.add("task-desc"),
              (i.src = "./images/icons/circle-svgrepo-com.svg"),
              i.addEventListener("click", () => a.remove()),
              e || n || t)
            )
              s.append(i, e),
                (c.textContent = t),
                (A.textContent = n),
                a.append(s, c, A),
                r.insertAdjacentElement("beforebegin", a);
            else {
              const e = document.createElement("input"),
                n = document.createElement("input"),
                t = document.createElement("input");
              e.classList.add("task-h-input"),
                n.classList.add("task-desc-input"),
                (e.type = "text"),
                (e.placeholder = "Title"),
                (t.type = "date"),
                (n.type = "text"),
                (n.placeholder = "Description"),
                e.addEventListener("change", () => {
                  s.append(e.value), e.remove();
                }),
                t.addEventListener("change", () => {
                  c.append(t.value), t.remove();
                }),
                n.addEventListener("change", () => {
                  A.append(n.value), n.remove();
                }),
                s.append(i, e),
                A.append(n),
                c.append(t),
                a.append(s, c, A),
                r.insertAdjacentElement("beforebegin", a),
                ((e) => {
                  const n = {
                    title: undefined,
                    desc: undefined,
                    dueDate: undefined,
                  };
                  let t = Array.from(document.querySelectorAll(".task"));
                  "Inbox" === e
                    ? t.forEach((e) => {
                        if ("" !== e.querySelector(".task-h").textContent)
                          return;
                        const t = e.querySelector(".checkbox"),
                          r = e.childNodes[0],
                          o = e.childNodes[1],
                          a = e.childNodes[2];
                        r.addEventListener("change", () => {
                          (n.title = r.childNodes[1].nodeValue),
                            localStorage.setItem(
                              "defaultProject",
                              JSON.stringify(C.defaultProject)
                            );
                        }),
                          a.addEventListener("change", () => {
                            (n.desc = a.childNodes[0].nodeValue),
                              localStorage.setItem(
                                "defaultProject",
                                JSON.stringify(C.defaultProject)
                              );
                          }),
                          o.addEventListener("change", () => {
                            (n.dueDate = o.childNodes[0].nodeValue),
                              localStorage.setItem(
                                "defaultProject",
                                JSON.stringify(C.defaultProject)
                              );
                          }),
                          C.defaultProject.tasks.push(n),
                          t.addEventListener("click", () => {
                            const e = C.defaultProject.tasks.indexOf(n);
                            C.defaultProject.tasks.splice(e, 1),
                              localStorage.setItem(
                                "defaultProject",
                                JSON.stringify(C.defaultProject)
                              );
                          }),
                          localStorage.setItem(
                            "defaultProject",
                            JSON.stringify(C.defaultProject)
                          );
                      })
                    : t.forEach((t) => {
                        if ("" !== t.querySelector(".task-h").textContent)
                          return;
                        const r = t.childNodes[0],
                          o = t.childNodes[1],
                          a = t.childNodes[2],
                          i = t.querySelector(".checkbox");
                        r.addEventListener("change", () => {
                          (n.title = r.childNodes[1].nodeValue),
                            localStorage.setItem(
                              "projects",
                              JSON.stringify(C.projectsArray)
                            );
                        }),
                          a.addEventListener("change", () => {
                            (n.desc = a.childNodes[0].nodeValue),
                              localStorage.setItem(
                                "projects",
                                JSON.stringify(C.projectsArray)
                              );
                          }),
                          o.addEventListener("change", () => {
                            (n.dueDate = o.childNodes[0].nodeValue),
                              localStorage.setItem(
                                "projects",
                                JSON.stringify(C.projectsArray)
                              );
                          }),
                          C.projectsArray.forEach((t) => {
                            t.projectName === e &&
                              (t.tasks.push(n),
                              i.addEventListener("click", () => {
                                const e = t.tasks.indexOf(n);
                                t.tasks.splice(e, 1),
                                  localStorage.setItem(
                                    "projects",
                                    JSON.stringify(C.projectsArray)
                                  );
                              }));
                          }),
                          localStorage.setItem(
                            "projects",
                            JSON.stringify(C.projectsArray)
                          );
                      });
                })(o.textContent);
            }
          }),
        b =
          (document
            .querySelector(".add-task")
            .addEventListener("click", () => B()),
          (e) => {
            const n = document.querySelector(".project-items-ul"),
              t = document.createElement("li"),
              r = document.createElement("img"),
              o = document.createElement("img"),
              a = document.createElement("span");
            if (
              (t.classList.add("project-item"),
              r.classList.add("ico"),
              r.classList.add("add-proj"),
              (r.src = "./images/icons/task-list-svgrepo-com.svg"),
              o.classList.add("close-proj"),
              (o.src = "./images/icons/close-svgrepo-com.svg"),
              e)
            )
              (a.textContent = e), t.addEventListener("click", () => y(e));
            else {
              const e = document.createElement("input");
              (e.type = "text"),
                (e.placeholder = "Project Name"),
                e.classList.add("proj-title-input"),
                e.addEventListener("change", () => {
                  a.append(e.value),
                    e.remove(),
                    t.addEventListener("click", () => y(a.textContent)),
                    ((e) => {
                      const n = Array.from(
                          document.querySelectorAll(".project-item")
                        ),
                        t = f(e);
                      (t.projectName = e),
                        n.forEach((n) => {
                          if (n.childNodes[1].childNodes[0].textContent !== e)
                            return;
                          const r = n.childNodes[2];
                          C.projectsArray.push(t),
                            r.addEventListener("click", () => {
                              const e = C.projectsArray.indexOf(t);
                              C.projectsArray.splice(e, 1),
                                localStorage.setItem(
                                  "projects",
                                  JSON.stringify(C.projectsArray)
                                );
                            }),
                            localStorage.setItem(
                              "projects",
                              JSON.stringify(C.projectsArray)
                            );
                        });
                    })(a.textContent);
                }),
                a.append(e);
            }
            o.addEventListener("click", () => {
              t.remove();
            }),
              t.append(r, a, o),
              n.append(t);
          });
      document.querySelector(".add-proj").addEventListener("click", () => b()),
        (() => {
          if (localStorage.getItem("projects")) {
            let e = JSON.parse(localStorage.getItem("projects")),
              n = JSON.parse(localStorage.getItem("defaultProject"));
            (C.defaultProject = n),
              (C.projectsArray = e),
              C.defaultProject.tasks.forEach((e) => {
                B(e.title, e.desc, e.dueDate),
                  Array.from(document.querySelectorAll(".task")).forEach(
                    (n) => {
                      const t = n.childNodes[0],
                        r = n.querySelector(".checkbox");
                      t.childNodes[1].nodeValue === e.title &&
                        r.addEventListener("click", () => {
                          const n = C.defaultProject.tasks.indexOf(e);
                          C.defaultProject.tasks.splice(n, 1),
                            localStorage.setItem(
                              "defaultProject",
                              JSON.stringify(C.defaultProject)
                            );
                        });
                    }
                  );
              }),
              C.projectsArray.forEach((e) => {
                b(e.projectName),
                  Array.from(
                    document.querySelectorAll(".project-item")
                  ).forEach((n) => {
                    n.childNodes[1].childNodes[0].textContent ===
                      e.projectName &&
                      (n.childNodes[2].addEventListener("click", () => {
                        const n = C.projectsArray.indexOf(e);
                        C.projectsArray.splice(n, 1),
                          localStorage.setItem(
                            "projects",
                            JSON.stringify(C.projectsArray)
                          );
                      }),
                      localStorage.setItem(
                        "projects",
                        JSON.stringify(C.projectsArray)
                      ));
                  }),
                  e.tasks.forEach((n) => {
                    B(n.title, n.desc, n.dueDate),
                      Array.from(document.querySelectorAll(".task")).forEach(
                        (t) => {
                          const r = t.childNodes[0],
                            o = t.querySelector(".checkbox");
                          r.childNodes[1].nodeValue === n.title &&
                            (t.setAttribute("style", "display: none;"),
                            o.addEventListener("click", () => {
                              const t = e.tasks.indexOf(n);
                              e.tasks.splice(t, 1),
                                localStorage.setItem(
                                  "projects",
                                  JSON.stringify(C.projectsArray)
                                );
                            }));
                        }
                      );
                  });
              });
          } else
            (() => {
              const e = C.projectsArray,
                n = C.defaultProject;
              localStorage.setItem("projects", JSON.stringify(e)),
                localStorage.setItem("defaultProject", JSON.stringify(n));
            })();
        })();
    })();
})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dkVtQixFQUFlLE1BQUVSLFNBQVFDLElBQ3JCUyxFQUFnQlQsRUFBWSxNQUFHQSxFQUFXLEtBQUdBLEVBQWMsU0FDbkNKLE1BQU1DLEtBQUs1RCxTQUFTNkQsaUJBQWlCLFVBQzdDQyxTQUFRNkQsSUFDcEIsTUFBTXZCLEVBQWF1QixFQUFRMUQsV0FBVyxHQUNoQ2tDLEVBQWF3QixFQUFRMUgsY0FBYyxhQUNyQ21HLEVBQVduQyxXQUFXLEdBQUdvQyxZQUFjdEMsRUFBWSxRQUNuRDRELEVBQVE3RyxhQUFhLFFBQVMsa0JBQzlCcUYsRUFBV2pDLGlCQUFpQixTQUFTLEtBQ2pDLE1BQU1zQyxFQUFnQmxDLEVBQVFyQixNQUFNd0QsUUFBUTFDLEdBQzVDTyxFQUFRckIsTUFBTXZELE9BQU84RyxFQUFlLEdBQ3BDRixhQUFhQyxRQUFRLFdBQVkvSSxLQUFLQyxVQUFVeUYsRUFBbUJDLGlDQXBEcEUsTUFDbkIsTUFBTWlCLEVBQWtCbEIsRUFBbUJDLGNBQ3JDeUUsRUFBcUIxRSxFQUFtQkUsZUFDOUNrRCxhQUFhQyxRQUFRLFdBQVkvSSxLQUFLQyxVQUFVMkcsSUFDaERrQyxhQUFhQyxRQUFRLGlCQUFrQi9JLEtBQUtDLFVBQVVtSyxLQXlEdERDLElBL0RhLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL3Jlc2V0LmNzcz9lZGUwIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9zdHlsZXMuY3NzPzQ0YjIiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvbW9kdWxlcy9zd2l0Y2hET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL21vZHVsZXMvaW50ZXJmYWNlLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9tb2R1bGVzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcblxcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLCBcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuXFx0bWFyZ2luOiAwO1xcblxcdHBhZGRpbmc6IDA7XFxuXFx0Ym9yZGVyOiAwO1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsIFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcbmJvZHkge1xcblxcdGxpbmUtaGVpZ2h0OiAxO1xcbn1cXG5vbCwgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGUsIHEge1xcblxcdHF1b3Rlczogbm9uZTtcXG59XFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcblxcdGNvbnRlbnQ6ICcnO1xcblxcdGNvbnRlbnQ6IG5vbmU7XFxufVxcbnRhYmxlIHtcXG5cXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcblxcdGJvcmRlci1zcGFjaW5nOiAwO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7OztDQWFDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsU0FBUztDQUNULHdCQUF3QjtBQUN6QjtBQUNBLGdEQUFnRDtBQUNoRDs7Q0FFQyxjQUFjO0FBQ2Y7QUFDQTtDQUNDLGNBQWM7QUFDZjtBQUNBO0NBQ0MsZ0JBQWdCO0FBQ2pCO0FBQ0E7Q0FDQyxZQUFZO0FBQ2I7QUFDQTs7Q0FFQyxXQUFXO0NBQ1gsYUFBYTtBQUNkO0FBQ0E7Q0FDQyx5QkFBeUI7Q0FDekIsaUJBQWlCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCwgXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLCBcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcblxcdG1hcmdpbjogMDtcXG5cXHRwYWRkaW5nOiAwO1xcblxcdGJvcmRlcjogMDtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLCBcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG5cXHRsaW5lLWhlaWdodDogMTtcXG59XFxub2wsIHVsIHtcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlLCBxIHtcXG5cXHRxdW90ZXM6IG5vbmU7XFxufVxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG5cXHRjb250ZW50OiAnJztcXG5cXHRjb250ZW50OiBub25lO1xcbn1cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG5cXHRib3JkZXItc3BhY2luZzogMDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogdmFyaWFibGVzICovXFxuOnJvb3R7XFxuICAgIC0tcHJpbWFyeTogI0Y0RjFGODtcXG4gICAgLS1zZWNvbmRhcnk6ICNmZmZmZmY7XFxuICAgIC0tdGVydGlhcnk6ICMwMDAwMDA7XFxufVxcblxcbi8qIGJhc2Ugc3R5bGVzICovXFxuaHRtbHtcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcbn1cXG5cXG4vKiBmb250cyAqL1xcbmJvZHl7XFxuICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2E7XFxufVxcblxcbi5sb2dvLXRleHR7XFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjsgICAgXFxufVxcblxcbi5ob21lLCAucHJvamVjdHN7XFxuICAgIGZvbnQtc2l6ZTogMS4yM3JlbTtcXG59XFxuXFxuLmFkZC10YXNre1xcbiAgICBmb250LXNpemU6IDAuN3JlbTtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxufVxcblxcbi50YXNrLWgsIC50YXNrLWgtaW5wdXR7XFxuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBtb2JpbGUgc3R5bGVzICovXFxuLm1haW4tY29udGFpbmVye1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnNpZGViYXJ7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5zaG93LXNie1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5jbG9zZS1oYW1iZ3tcXG4gICAgcGFkZGluZzogMS41cmVtIDA7XFxufVxcblxcbiAuaG9tZXtcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIH1cXG5cXG4gLmhvbWUtaGVhZGluZywgLnByb2plY3RzLWhlYWRpbmd7XFxuICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuIH1cXG4gICAgXFxuIC5ob21lLWl0ZW0sIC5wcm9qZWN0LWl0ZW17XFxuICAgICAgICBjdXJzb3I6cG9pbnRlcjtcXG4gICAgICAgIG1hcmdpbjogMXJlbTtcXG4gICAgfVxcbiAgICBcXG4gLnByb2plY3Rze1xcbiAgICAgICAgbWFyZ2luLXRvcDogM3JlbTtcXG4gICAgfVxcblxcbiAucHJvai10aXRsZS1pbnB1dHtcXG4gICAgIHdpZHRoOiA1MCU7XFxuIH1cXG5cXG4gLmNsb3NlLXByb2p7XFxuICAgICBtYXJnaW46IDAgMCAwLjJyZW0gMS41cmVtO1xcbiAgICAgd2lkdGg6IDAuNXJlbTtcXG4gfVxcblxcbi5sb2dve1xcbiAgICB3aWR0aDogMnJlbTtcXG4gICAgbWFyZ2luOiAwLjVyZW0gMC43cmVtIDAgMC41cmVtO1xcbn1cXG5cXG4uaWNve1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHdpZHRoOiAxLjJyZW07XFxuICAgIG1hcmdpbjogMCAwLjRyZW07XFxufVxcblxcbi5kaXNwbGF5e1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnkpO1xcbn1cXG5cXG4uaGlkZS1kaXNwe1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGlzcGxheS1oe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGJvcmRlci1ib3R0b206IDAuM3JlbSBzb2xpZCB2YXIoLS10ZXJ0aWFyeSk7XFxufVxcblxcbi5kaXNwbGF5LXJoe1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHJpZ2h0OiAxcmVtO1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVye1xcbiAgICBwYWRkaW5nOiA1JTtcXG4gICAgbWluLWhlaWdodDogMTAwdmg7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuI3Rhc2stMXtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gMS41cmVtIGF1dG87XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxufVxcblxcbi50YXNre1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbiAgICBtYXJnaW46IDVyZW0gYXV0byAwIGF1dG87XFxuICAgIHdpZHRoOiA4NSU7XFxuICAgIG1heC13aWR0aDogMjVyZW07XFxufVxcblxcbi50YXNrLWgtaW5wdXQsIC50YXNrLWRlc2MtaW5wdXR7XFxuICAgIHdpZHRoOiA5MCU7XFxufVxcblxcbi50YXNrLWRlc2N7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDE5LjVyZW07XFxufVxcblxcbi5jaGVja2JveHtcXG4gICAgcGFkZGluZzogMCAwLjVyZW0gMCAxcmVtO1xcbn1cXG5cXG4uZHVlLWRhdGV7XFxuICAgIG1hcmdpbjogMC41cmVtIDA7XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXJ0aWFyeSk7XFxuICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgIHdpZHRoOiAzMCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gNC4ycmVtIGF1dG87XFxufVxcblxcbi50YXNrLWgtaW5wdXQsIC50YXNrLWRlc2MtaW5wdXR7XFxuICAgIGJvcmRlcjogMDtcXG59XFxuXFxuLmZvb3RlcntcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZzogMC44cmVtIDAuNSUgMC41cmVtIDAuNSU7XFxuICAgIHdpZHRoOiA3MCU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwKTtcXG4gICAgYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4vKiBzbWFsbCB0YWJsZXQgc3R5bGVzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KXtcXG4gICAgLnRhc2stMXtcXG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgICAgIG1hcmdpbjogOHJlbSBhdXRvIDEuNXJlbSBhdXRvO1xcbiAgICAgICAgd2lkdGg6IDg1JTtcXG4gICAgICAgIG1heC13aWR0aDogMjVyZW07XFxuICAgIH1cXG4gICAgXFxuICAgIC50YXNrcy1jb250YWluZXJ7XFxuICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gICAgfVxcbn1cXG5cXG4vKiBsYXJnZSB0YWJsZXQgc3R5bGVzICovXFxuQG1lZGlhIChtaW4td2lkdGg6IDY3MHB4KXtcXG4gICAgaHRtbHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgfVxcbiAgICAuc2lkZWJhcntcXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgIGhlaWdodDogMTAwJTtcXG4gICAgICAgIHotaW5kZXg6IDE7XFxuICAgICAgICBib3gtc2hhZG93OiAycHggNXB4IDVweCBibGFjaztcXG4gICAgICAgIHBhZGRpbmc6IDEuM3JlbTtcXG4gICAgICAgIG1heC13aWR0aDogMTNyZW07XFxuICAgICAgICB3aWR0aDogMTVyZW07XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgICB9XFxuICAgIFxcbiAgICAuY2xvc2UtaGFtYmd7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgIFxcbiAgICAuZGlzcGxheS1oe1xcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuICAgIFxcbiAgICAuZGlzcGxheXtcXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxNS41cmVtO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG4gICAgXFxuICAgIC5pY297XFxuICAgICAgICBtYXJnaW46IDAgMC44cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaGFtYmd7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuICAgICAubWFpbi1jb250YWluZXJ7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgfSBcXG4gICAgXFxuICAgIC5mb290ZXJ7XFxuICAgICAgICB3aWR0aDogMTByZW07XFxuICAgICAgICBsZWZ0OiA3LjZyZW07XFxuICAgIH1cXG59XFxuXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsY0FBYztBQUNkO0lBQ0ksa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixtQkFBbUI7QUFDdkI7O0FBRUEsZ0JBQWdCO0FBQ2hCO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxVQUFVO0FBQ1Y7SUFDSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtBQUN2Qjs7QUFFQSxrQkFBa0I7QUFDbEI7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7Q0FFQztRQUNPLGdCQUFnQjtJQUNwQjs7Q0FFSDtLQUNJLGVBQWU7Q0FDbkI7O0NBRUE7UUFDTyxjQUFjO1FBQ2QsWUFBWTtJQUNoQjs7Q0FFSDtRQUNPLGdCQUFnQjtJQUNwQjs7Q0FFSDtLQUNJLFVBQVU7Q0FDZDs7Q0FFQTtLQUNJLHlCQUF5QjtLQUN6QixhQUFhO0NBQ2pCOztBQUVEO0lBQ0ksV0FBVztJQUNYLDhCQUE4QjtBQUNsQzs7QUFFQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztHQUNaLFlBQVk7SUFDWCxnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtDQUFrQztJQUNsQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiwyQ0FBMkM7QUFDL0M7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztBQUNmOztBQUVBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtJQUNqQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixnQkFBZ0I7SUFDaEIsNkJBQTZCO0lBQzdCLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFVBQVU7QUFDZDs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxTQUFTO0FBQ2I7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLGdDQUFnQztJQUNoQyxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsU0FBUztJQUNULDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCOztBQUVBLHdCQUF3QjtBQUN4QjtJQUNJO1FBQ0ksZUFBZTtRQUNmLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsNkJBQTZCO1FBQzdCLFVBQVU7UUFDVixnQkFBZ0I7SUFDcEI7O0lBRUE7WUFDUSxnQkFBZ0I7SUFDeEI7QUFDSjs7QUFFQSx3QkFBd0I7QUFDeEI7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7UUFDZixZQUFZO1FBQ1osVUFBVTtRQUNWLDZCQUE2QjtRQUM3QixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixhQUFhO1FBQ2Isc0JBQXNCO1FBQ3RCLGdCQUFnQjtLQUNuQjs7SUFFRDtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxnQkFBZ0I7UUFDaEIsNkJBQTZCO0lBQ2pDOztJQUVBO1FBQ0ksb0JBQW9CO1FBQ3BCLFdBQVc7SUFDZjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7S0FDQztRQUNHLGFBQWE7S0FDaEI7O0lBRUQ7UUFDSSxZQUFZO1FBQ1osWUFBWTtJQUNoQjtBQUNKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIHZhcmlhYmxlcyAqL1xcbjpyb290e1xcbiAgICAtLXByaW1hcnk6ICNGNEYxRjg7XFxuICAgIC0tc2Vjb25kYXJ5OiAjZmZmZmZmO1xcbiAgICAtLXRlcnRpYXJ5OiAjMDAwMDAwO1xcbn1cXG5cXG4vKiBiYXNlIHN0eWxlcyAqL1xcbmh0bWx7XFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuXFxuLyogZm9udHMgKi9cXG5ib2R5e1xcbiAgICBmb250LWZhbWlseTogSGVsdmV0aWNhO1xcbn1cXG5cXG4ubG9nby10ZXh0e1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7ICAgIFxcbn1cXG5cXG4uaG9tZSwgLnByb2plY3Rze1xcbiAgICBmb250LXNpemU6IDEuMjNyZW07XFxufVxcblxcbi5hZGQtdGFza3tcXG4gICAgZm9udC1zaXplOiAwLjdyZW07XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbn1cXG5cXG4udGFzay1oLCAudGFzay1oLWlucHV0e1xcbiAgICBmb250LXNpemU6IDEuMnJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogbW9iaWxlIHN0eWxlcyAqL1xcbi5tYWluLWNvbnRhaW5lcntcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5zaWRlYmFye1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uc2hvdy1zYntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uY2xvc2UtaGFtYmd7XFxuICAgIHBhZGRpbmc6IDEuNXJlbSAwO1xcbn1cXG5cXG4gLmhvbWV7XFxuICAgICAgICBtYXJnaW4tdG9wOiAzcmVtO1xcbiAgICB9XFxuXFxuIC5ob21lLWhlYWRpbmcsIC5wcm9qZWN0cy1oZWFkaW5ne1xcbiAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiB9XFxuICAgIFxcbiAuaG9tZS1pdGVtLCAucHJvamVjdC1pdGVte1xcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XFxuICAgICAgICBtYXJnaW46IDFyZW07XFxuICAgIH1cXG4gICAgXFxuIC5wcm9qZWN0c3tcXG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XFxuICAgIH1cXG5cXG4gLnByb2otdGl0bGUtaW5wdXR7XFxuICAgICB3aWR0aDogNTAlO1xcbiB9XFxuXFxuIC5jbG9zZS1wcm9qe1xcbiAgICAgbWFyZ2luOiAwIDAgMC4ycmVtIDEuNXJlbTtcXG4gICAgIHdpZHRoOiAwLjVyZW07XFxuIH1cXG5cXG4ubG9nb3tcXG4gICAgd2lkdGg6IDJyZW07XFxuICAgIG1hcmdpbjogMC41cmVtIDAuN3JlbSAwIDAuNXJlbTtcXG59XFxuXFxuLmljb3tcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB3aWR0aDogMS4ycmVtO1xcbiAgICBtYXJnaW46IDAgMC40cmVtO1xcbn1cXG5cXG4uZGlzcGxheXtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5KTtcXG59XFxuXFxuLmhpZGUtZGlzcHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRpc3BsYXktaHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDUlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBib3JkZXItYm90dG9tOiAwLjNyZW0gc29saWQgdmFyKC0tdGVydGlhcnkpO1xcbn1cXG5cXG4uZGlzcGxheS1yaHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICByaWdodDogMXJlbTtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lcntcXG4gICAgcGFkZGluZzogNSU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbiN0YXNrLTF7XFxuICAgIHBhZGRpbmc6IDAuNXJlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGxlZnQ7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvIDEuNXJlbSBhdXRvO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4udGFza3tcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjoganVzdGlmeTtcXG4gICAgbWFyZ2luOiA1cmVtIGF1dG8gMCBhdXRvO1xcbiAgICB3aWR0aDogODUlO1xcbiAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbn1cXG5cXG4udGFzay1oLWlucHV0LCAudGFzay1kZXNjLWlucHV0e1xcbiAgICB3aWR0aDogOTAlO1xcbn1cXG5cXG4udGFzay1kZXNje1xcbiAgICBtYXJnaW46IDAgYXV0bztcXG4gICAgbWF4LXdpZHRoOiAxOS41cmVtO1xcbn1cXG5cXG4uY2hlY2tib3h7XFxuICAgIHBhZGRpbmc6IDAgMC41cmVtIDAgMXJlbTtcXG59XFxuXFxuLmR1ZS1kYXRle1xcbiAgICBtYXJnaW46IDAuNXJlbSAwO1xcbn1cXG5cXG4uYWRkLXRhc2t7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdGVydGlhcnkpO1xcbiAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gICAgcGFkZGluZzogMC41cmVtO1xcbiAgICB3aWR0aDogMzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogNXJlbSBhdXRvIDQuMnJlbSBhdXRvO1xcbn1cXG5cXG4udGFzay1oLWlucHV0LCAudGFzay1kZXNjLWlucHV0e1xcbiAgICBib3JkZXI6IDA7XFxufVxcblxcbi5mb290ZXJ7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRlcnRpYXJ5KTtcXG4gICAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICAgIHBhZGRpbmc6IDAuOHJlbSAwLjUlIDAuNXJlbSAwLjUlO1xcbiAgICB3aWR0aDogNzAlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMCBhdXRvO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMCk7XFxuICAgIGJvdHRvbTogMXJlbTtcXG59XFxuXFxuLyogc21hbGwgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA1MDBweCl7XFxuICAgIC50YXNrLTF7XFxuICAgICAgICBwYWRkaW5nOiAwLjVyZW07XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XFxuICAgICAgICBtYXJnaW46IDhyZW0gYXV0byAxLjVyZW0gYXV0bztcXG4gICAgICAgIHdpZHRoOiA4NSU7XFxuICAgICAgICBtYXgtd2lkdGg6IDI1cmVtO1xcbiAgICB9XFxuICAgIFxcbiAgICAudGFza3MtY29udGFpbmVye1xcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICAgIH1cXG59XFxuXFxuLyogbGFyZ2UgdGFibGV0IHN0eWxlcyAqL1xcbkBtZWRpYSAobWluLXdpZHRoOiA2NzBweCl7XFxuICAgIGh0bWx7XFxuICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgIH1cXG4gICAgLnNpZGViYXJ7XFxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICB6LWluZGV4OiAxO1xcbiAgICAgICAgYm94LXNoYWRvdzogMnB4IDVweCA1cHggYmxhY2s7XFxuICAgICAgICBwYWRkaW5nOiAxLjNyZW07XFxuICAgICAgICBtYXgtd2lkdGg6IDEzcmVtO1xcbiAgICAgICAgd2lkdGg6IDE1cmVtO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICAgfVxcbiAgICBcXG4gICAgLmNsb3NlLWhhbWJne1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRpc3BsYXktaHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcbiAgICBcXG4gICAgLmRpc3BsYXl7XFxuICAgICAgICBtYXJnaW4tbGVmdDogMTUuNXJlbTtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuICAgIFxcbiAgICAuaWNve1xcbiAgICAgICAgbWFyZ2luOiAwIDAuOHJlbTtcXG4gICAgfVxcbiAgICBcXG4gICAgLmhhbWJne1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcbiAgICAgLm1haW4tY29udGFpbmVye1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgIH0gXFxuICAgIFxcbiAgICAuZm9vdGVye1xcbiAgICAgICAgd2lkdGg6IDEwcmVtO1xcbiAgICAgICAgbGVmdDogNy42cmVtO1xcbiAgICB9XFxufVxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCB0aGlzLmxlbmd0aDsgX2krKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW19pXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pMiA9IDA7IF9pMiA8IG1vZHVsZXMubGVuZ3RoOyBfaTIrKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaTJdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiY29uc3QgcHJvamVjdEZhY3RvcnkgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCB0YXNrcyA9IFtdO1xuXG4gICAgcmV0dXJuIHsgcHJvamVjdE5hbWUsIHRhc2tzIH1cbn1cblxuY29uc3QgcHJvamVjdHNDb250cm9sbGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IHByb2plY3RGYWN0b3J5KCdpbmJveCcpO1xuICAgIGxldCBwcm9qZWN0c0FycmF5ID0gW107XG5cbiAgICByZXR1cm4geyBwcm9qZWN0c0FycmF5LCBkZWZhdWx0UHJvamVjdCB9XG59KSgpO1xuXG5jb25zdCBhZGRQcm9qID0gKHR5cGUgPT4ge1xuICAgIGNvbnN0IHByb2plY3RJdGVtc0FycmF5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvamVjdC1pdGVtJykpO1xuICAgIGNvbnN0IG5ld1Byb2plY3QgPSBwcm9qZWN0RmFjdG9yeSh0eXBlKTtcbiAgICBuZXdQcm9qZWN0LnByb2plY3ROYW1lID0gdHlwZTtcblxuICAgIHByb2plY3RJdGVtc0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2plY3QuY2hpbGROb2Rlc1sxXVxuICAgICAgICBpZiAocHJvalRpdGxlLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQgIT09IHR5cGUpcmV0dXJuO1xuICAgICAgICBjb25zdCBjbG9zZVByb2ogPSBwcm9qZWN0LmNoaWxkTm9kZXNbMl07XG5cbiAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkucHVzaChuZXdQcm9qZWN0KTtcbiAgICAgICAgY2xvc2VQcm9qLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmluZGV4T2YobmV3UHJvamVjdCk7XG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheS5zcGxpY2UocHJvamVjdEluZGV4LCAxKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5KSk7XG4gICAgICAgIH0pXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5KSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHsgbmV3UHJvamVjdCB9XG4gICAgXG59KVxuICAgIFxuXG5leHBvcnQgeyBhZGRQcm9qLCBwcm9qZWN0c0NvbnRyb2xsZXIgfSIsIi8vIEZvciBJbXByb3ZlbWVudDpcbi8vIEluIGNoZWNraW5nIHdoZXRoZXIgdGhlIHRhc2sgYmVsb25ncyB0byBhIHNwZWNpZmljIHByb2plY3QsIHVzZSBkYXRhIGluZGV4IGluc3RlYWQgb2YgXG4vLyBtYXRjaGluZyB0aGUgdGFzayB0aXRsZXMgc28gdGhlIHVzZXJzIGFkZGluZyB0d28gdGFza3Mgb2YgdGhlIHNhbWUgbmFtZSB3b3VsZCBub3QgY3Jhc2ggdGhlIGFwcFxuaW1wb3J0IHsgcHJvamVjdHNDb250cm9sbGVyIH0gZnJvbSBcIi4vcHJvamVjdFwiO1xuXG5jb25zdCByZW5kZXJIb21lID0gKCgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1saCcpO1xuICAgIGNvbnN0IGhvbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaG9tZS1oZWFkaW5nJyk7XG4gICAgY29uc3QgaW5ib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gnKTtcbiAgICBjb25zdCByZW5kZXJIb21lRE9NID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UmVuZGVyZWRUYXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSk7XG5cbiAgICAgICAgaWYgKGhlYWRlciAhPT0gJ0luYm94Jyl7XG4gICAgICAgICAgICBjdXJyZW50UmVuZGVyZWRUYXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKSk7XG4gICAgICAgICAgICBoZWFkZXIudGV4dENvbnRlbnQgPSAnSW5ib3gnO1xuXG4gICAgICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGN1cnJlbnRSZW5kZXJlZFRhc2tzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tbJ3RpdGxlJ10gPT09IGN1cnJlbnRSZW5kZXJlZFRhc2tzW2ldLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFJlbmRlcmVkVGFza3NbaV0ucmVtb3ZlQXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGhvbWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJIb21lRE9NKTtcbiAgICBpbmJveC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlckhvbWVET00pO1xufSkoKTtcblxuY29uc3QgcmVuZGVyUHJvamVjdCA9IChwcm9qVGl0bGUpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGlzcGxheS1saCcpO1xuICAgIGNvbnN0IGN1cnJlbnRQcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW0nKTtcbiAgICBjb25zdCBjdXJyZW50VGFza3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpO1xuXG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gcHJvalRpdGxlO1xuICAgIGN1cnJlbnRUYXNrcy5mb3JFYWNoKHRhc2sgPT4gdGFzay5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6bm9uZTsnKSk7XG5cbiAgICBjdXJyZW50UHJvamVjdHMuZm9yRWFjaChwcm9qZWN0ID0+IHtcbiAgICAgICAgaWYgKGhlYWRlci50ZXh0Q29udGVudCA9PT0gcHJvalRpdGxlKXtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRSZW5kZXJlZFRhc2tzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpKTtcblxuICAgICAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkuZm9yRWFjaChwcm9qID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocHJvalsncHJvamVjdE5hbWUnXSA9PT0gcHJvalRpdGxlKXtcbiAgICAgICAgICAgICAgICAgICAgcHJvalsndGFza3MnXS5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50UmVuZGVyZWRUYXNrcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tbJ3RpdGxlJ10gPT09IGN1cnJlbnRSZW5kZXJlZFRhc2tzW2ldLmNoaWxkTm9kZXNbMF0udGV4dENvbnRlbnQpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UmVuZGVyZWRUYXNrc1tpXS5yZW1vdmVBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0pXG59O1xuXG5leHBvcnQge3JlbmRlckhvbWUsIHJlbmRlclByb2plY3R9XG4iLCJpbXBvcnQgeyBhZGRUYXNrIH0gZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IHsgYWRkUHJvaiB9IGZyb20gXCIuL3Byb2plY3RcIjtcbmltcG9ydCB7IHJlbmRlclByb2plY3QgfSBmcm9tIFwiLi9zd2l0Y2hET01cIjtcblxuY29uc3QgaGFtQnVyZ2VyID0gKCgpID0+IHtcbiAgICBcbiAgICBjb25zdCBoYW1iZ0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oYW1iZycpO1xuICAgIGNvbnN0IG1haW5EaXNwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmRpc3BsYXknKTtcbiAgICBjb25zdCBzaWRlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZGViYXInKTtcbiAgICBjb25zdCBjbG9zZUhhbWJnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLWhhbWJnJyk7XG5cbiAgICBoYW1iZ0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgbWFpbkRpc3AuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzcGxheScpO1xuICAgICAgICBtYWluRGlzcC5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlLWRpc3AnKTsgXG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2lkZWJhcicpO1xuICAgICAgICBzaWRlQmFyLmNsYXNzTGlzdC50b2dnbGUoJ3Nob3ctc2InKTtcbiAgICB9KTtcbiAgICBjbG9zZUhhbWJnLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBtYWluRGlzcC5jbGFzc0xpc3QudG9nZ2xlKCdkaXNwbGF5Jyk7XG4gICAgICAgIG1haW5EaXNwLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUtZGlzcCcpOyBcbiAgICAgICAgc2lkZUJhci5jbGFzc0xpc3QudG9nZ2xlKCdzaWRlYmFyJyk7XG4gICAgICAgIHNpZGVCYXIuY2xhc3NMaXN0LnRvZ2dsZSgnc2hvdy1zYicpO1xuICAgIH0pXG59KSgpO1xuXG5jb25zdCBnZW5lcmF0ZVRhc2tET00gPSAodGl0bGUsIGRlc2MsIGR1ZSkgPT4ge1xuICAgIGNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXRhc2snKVxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5kaXNwbGF5LWxoJyk7XG4gICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnN0IHRhc2tDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICBjb25zdCB0YXNrRGVzYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuXG4gICAgdGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XG4gICAgdGFza1RpdGxlLmNsYXNzTGlzdC5hZGQoJ3Rhc2staCcpO1xuICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCdpY28nLCAnY2hlY2tib3gnKTtcbiAgICBkdWVEYXRlLmNsYXNzTGlzdC5hZGQoJ2R1ZS1kYXRlJyk7XG4gICAgdGFza0Rlc2MuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjJyk7XG4gICAgdGFza0NoZWNrLnNyYyA9IFwiLi9pbWFnZXMvaWNvbnMvY2lyY2xlLXN2Z3JlcG8tY29tLnN2Z1wiO1xuICAgIFxuICAgIHRhc2tDaGVjay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRhc2tDb250YWluZXIucmVtb3ZlKCkpO1xuXG4gICAgaWYgKCF0aXRsZSAmJiAhZGVzYyAmJiAhZHVlKXtcbiAgICAgICAgY29uc3QgdGFza1RpdGxlSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCB0YXNrRGVzY0lucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY29uc3QgZHVlRGF0ZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgdGFza1RpdGxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1oLWlucHV0Jyk7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQuY2xhc3NMaXN0LmFkZCgndGFzay1kZXNjLWlucHV0Jyk7XG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHRhc2tUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1RpdGxlJztcbiAgICAgICAgZHVlRGF0ZUlucHV0LnR5cGUgPSAnZGF0ZSc7XG4gICAgICAgIHRhc2tEZXNjSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgdGFza0Rlc2NJbnB1dC5wbGFjZWhvbGRlciA9ICdEZXNjcmlwdGlvbic7XG5cbiAgICAgICAgdGFza1RpdGxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGFza1RpdGxlLmFwcGVuZCh0YXNrVGl0bGVJbnB1dC52YWx1ZSk7XG4gICAgICAgICAgICB0YXNrVGl0bGVJbnB1dC5yZW1vdmUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGR1ZURhdGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBkdWVEYXRlLmFwcGVuZChkdWVEYXRlSW5wdXQudmFsdWUpO1xuICAgICAgICAgICAgZHVlRGF0ZUlucHV0LnJlbW92ZSgpO1xuICAgICAgICB9KVxuICAgICAgICB0YXNrRGVzY0lucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRhc2tEZXNjLmFwcGVuZCh0YXNrRGVzY0lucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHRhc2tEZXNjSW5wdXQucmVtb3ZlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0YXNrVGl0bGUuYXBwZW5kKHRhc2tDaGVjaywgdGFza1RpdGxlSW5wdXQpXG4gICAgICAgIHRhc2tEZXNjLmFwcGVuZCh0YXNrRGVzY0lucHV0KTtcbiAgICAgICAgZHVlRGF0ZS5hcHBlbmQoZHVlRGF0ZUlucHV0KTtcblxuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIGR1ZURhdGUsIHRhc2tEZXNjKTtcbiAgICAgICAgYWRkVGFza0J0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGFza0NvbnRhaW5lcik7XG5cbiAgICAgICAgYWRkVGFzayhoZWFkZXIudGV4dENvbnRlbnQpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFza1RpdGxlLmFwcGVuZCh0YXNrQ2hlY2ssIHRpdGxlKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IGR1ZTtcbiAgICAgICAgdGFza0Rlc2MudGV4dENvbnRlbnQgPSBkZXNjO1xuICAgICAgICB0YXNrQ29udGFpbmVyLmFwcGVuZCh0YXNrVGl0bGUsIGR1ZURhdGUsIHRhc2tEZXNjKTtcbiAgICAgICAgYWRkVGFza0J0bi5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGFza0NvbnRhaW5lcik7XG4gICAgfSAgXG59XG5cblxuY29uc3QgcmVuZGVyVGFza0RPTSA9ICgoKT0+IHsgXG4gICAgY29uc3QgYWRkVGFza0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtdGFzaycpO1xuICAgIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnZW5lcmF0ZVRhc2tET00oKSk7XG59KSgpO1xuXG5jb25zdCBnZW5lcmF0ZVByb2pUaXRsZURPTSA9ICh0aXRsZSkgPT4ge1xuICAgIGNvbnN0IHByb2pDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdC1pdGVtcy11bCcpO1xuICAgIGNvbnN0IHByb2pJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBjb25zdCBwcm9qSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IGNsb3NlSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGNvbnN0IHByb2pUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblxuICAgIHByb2pJdGVtLmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QtaXRlbScpO1xuICAgIHByb2pJY29uLmNsYXNzTGlzdC5hZGQoJ2ljbycpO1xuICAgIHByb2pJY29uLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qJyk7XG4gICAgcHJvakljb24uc3JjID0gJy4vaW1hZ2VzL2ljb25zL3Rhc2stbGlzdC1zdmdyZXBvLWNvbS5zdmcnO1xuICAgIGNsb3NlSWNvbi5jbGFzc0xpc3QuYWRkKCdjbG9zZS1wcm9qJyk7XG4gICAgY2xvc2VJY29uLnNyYyA9ICcuL2ltYWdlcy9pY29ucy9jbG9zZS1zdmdyZXBvLWNvbS5zdmcnO1xuICAgIFxuICAgIGlmICghdGl0bGUpe1xuICAgICAgICBjb25zdCBwcm9qVGl0bGVJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIHByb2pUaXRsZUlucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgIHByb2pUaXRsZUlucHV0LnBsYWNlaG9sZGVyID0gJ1Byb2plY3QgTmFtZSc7XG4gICAgICAgIHByb2pUaXRsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3Byb2otdGl0bGUtaW5wdXQnKTtcblxuICAgICAgICBwcm9qVGl0bGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICBwcm9qVGl0bGUuYXBwZW5kKHByb2pUaXRsZUlucHV0LnZhbHVlKTtcbiAgICAgICAgICAgIHByb2pUaXRsZUlucHV0LnJlbW92ZSgpO1xuICAgICAgICAgICAgcHJvakl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJQcm9qZWN0KHByb2pUaXRsZS50ZXh0Q29udGVudCkpO1xuICAgICAgICAgICAgYWRkUHJvaihwcm9qVGl0bGUudGV4dENvbnRlbnQpO1xuICAgICAgICB9KVxuICAgICAgICBwcm9qVGl0bGUuYXBwZW5kKHByb2pUaXRsZUlucHV0KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHByb2pUaXRsZS50ZXh0Q29udGVudCA9IHRpdGxlO1xuICAgICAgICBwcm9qSXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclByb2plY3QodGl0bGUpKVxuICAgIH1cbiAgICBcbiAgICBjbG9zZUljb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIHByb2pJdGVtLnJlbW92ZSgpO1xuICAgIH0pXG4gICAgcHJvakl0ZW0uYXBwZW5kKHByb2pJY29uLCBwcm9qVGl0bGUsIGNsb3NlSWNvbik7XG4gICAgcHJvakNvbnRhaW5lci5hcHBlbmQocHJvakl0ZW0pO1xufVxuXG5jb25zdCBuZXdQcm9qZWN0ID0gKCgpID0+IHtcbiAgICBjb25zdCBuZXdQcm9qQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qJyk7XG4gICAgbmV3UHJvakJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGdlbmVyYXRlUHJvalRpdGxlRE9NKCkpO1xufSkoKTtcblxuZXhwb3J0IHsgaGFtQnVyZ2VyLCBnZW5lcmF0ZVRhc2tET00sIHJlbmRlclRhc2tET00sIG5ld1Byb2plY3QsIGdlbmVyYXRlUHJvalRpdGxlRE9NIH07IiwiaW1wb3J0IHsgZ2VuZXJhdGVUYXNrRE9NLCBuZXdQcm9qZWN0IH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5pbXBvcnQgeyBhZGRQcm9qLCBwcm9qZWN0c0NvbnRyb2xsZXIgfSBmcm9tIFwiLi9wcm9qZWN0XCI7XG5cbmNvbnN0IHRhc2tGYWN0b3J5ID0gKHRpdGxlLCBkZXNjLCBkdWVEYXRlKSA9PiB7XG4gICAgY29uc3QgY2xlYXJUYXNrID0gKCkgPT4ge1xuXG4gICAgfVxuXG4gICAgcmV0dXJuIHt0aXRsZSwgZGVzYywgZHVlRGF0ZX1cbn1cblxuY29uc3QgYWRkVGFzayA9IHByb2plY3QgPT4ge1xuICAgIGNvbnN0IG5ld1Rhc2sgPSB0YXNrRmFjdG9yeSgpO1xuICAgIGxldCB0YXNrcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKSk7XG5cbiAgICBpZiAocHJvamVjdCA9PT0gJ0luYm94Jyl7XG4gICAgICAgIHRhc2tzLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyVGV4dCA9IHRhc2sucXVlcnlTZWxlY3RvcignLnRhc2staCcpO1xuICAgICAgICAgICAgaWYgKHRhc2tIZWFkZXJUZXh0LnRleHRDb250ZW50ICE9PSBcIlwiKXJldHVybjtcblxuICAgICAgICAgICAgY29uc3QgcmVtb3ZlVGFzayA9IHRhc2sucXVlcnlTZWxlY3RvcignLmNoZWNrYm94Jyk7XG4gICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gdGFzay5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgY29uc3QgZHVlRGF0ZSA9IHRhc2suY2hpbGROb2Rlc1sxXTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjID0gdGFzay5jaGlsZE5vZGVzWzJdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrLnRpdGxlID0gdGFza0hlYWRlci5jaGlsZE5vZGVzWzFdLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QpKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kZXNjID0gdGFza0Rlc2MuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0KSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kdWVEYXRlID0gZHVlRGF0ZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QpKTtcbiAgICAgICAgICAgIH0pIFxuICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QudGFza3MucHVzaChuZXdUYXNrKTtcbiAgICAgICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRoaXNUYXNrSW5kZXggPSBwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QudGFza3MuaW5kZXhPZihuZXdUYXNrKTtcbiAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5kZWZhdWx0UHJvamVjdC50YXNrcy5zcGxpY2UodGhpc1Rhc2tJbmRleCwgMSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGVmYXVsdFByb2plY3QnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QpKTtcbiAgICAgICAgfSlcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0KSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tIZWFkZXJUZXh0ID0gdGFzay5xdWVyeVNlbGVjdG9yKCcudGFzay1oJyk7XG4gICAgICAgICAgICBpZiAodGFza0hlYWRlclRleHQudGV4dENvbnRlbnQgIT09IFwiXCIpcmV0dXJuO1xuICAgICAgICAgICAgY29uc3QgdGFza0hlYWRlciA9IHRhc2suY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSB0YXNrLmNoaWxkTm9kZXNbMV07XG4gICAgICAgICAgICBjb25zdCB0YXNrRGVzYyA9IHRhc2suY2hpbGROb2Rlc1syXTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW92ZVRhc2sgPSB0YXNrLnF1ZXJ5U2VsZWN0b3IoJy5jaGVja2JveCcpO1xuXG4gICAgICAgICAgICB0YXNrSGVhZGVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBuZXdUYXNrLnRpdGxlID0gdGFza0hlYWRlci5jaGlsZE5vZGVzWzFdLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0YXNrRGVzYy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kZXNjID0gdGFza0Rlc2MuY2hpbGROb2Rlc1swXS5ub2RlVmFsdWU7XG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZHVlRGF0ZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbmV3VGFzay5kdWVEYXRlID0gZHVlRGF0ZS5jaGlsZE5vZGVzWzBdLm5vZGVWYWx1ZTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheSkpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmZvckVhY2gocHJvaiA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHByb2pbJ3Byb2plY3ROYW1lJ10gPT09IHByb2plY3Qpe1xuICAgICAgICAgICAgICAgICAgICBwcm9qWyd0YXNrcyddLnB1c2gobmV3VGFzayk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUYXNrSW5kZXggPSBwcm9qWyd0YXNrcyddLmluZGV4T2YobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9qWyd0YXNrcyddLnNwbGljZShjdXJyZW50VGFza0luZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwcm9qZWN0cycsIEpTT04uc3RyaW5naWZ5KHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5KSk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheSkpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIHJldHVybiB7IG5ld1Rhc2sgfVxufTtcblxuZXhwb3J0IHsgYWRkVGFzayB9IiwiaW1wb3J0IHJlc2V0Q1NTIGZyb20gJy4vcmVzZXQuY3NzJztcbmltcG9ydCBzdHlsZXNDU1MgZnJvbSAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCB7IGhhbUJ1cmdlciwgcmVuZGVyVGFza0RPTSwgbmV3UHJvamVjdCwgZ2VuZXJhdGVUYXNrRE9NLCBnZW5lcmF0ZVByb2pUaXRsZURPTSB9IGZyb20gJy4vbW9kdWxlcy9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgYWRkVGFzayB9IGZyb20gJy4vbW9kdWxlcy90YXNrJztcbmltcG9ydCB7IHJlbmRlckhvbWUgfSBmcm9tICcuL21vZHVsZXMvc3dpdGNoRE9NJztcbmltcG9ydCB7IGFkZFByb2osIHByb2plY3RzQ29udHJvbGxlciB9IGZyb20gJy4vbW9kdWxlcy9wcm9qZWN0JztcblxuY29uc3Qgc2F2ZVByb2plY3RzID0gKCgpID0+IHtcblxuICAgIGNvbnN0IF9zdG9yZVByb2plY3RzID0gKCkgPT4ge1xuICAgICAgICBjb25zdCBjdXJyZW50UHJvamVjdHMgPSBwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheTtcbiAgICAgICAgY29uc3QgY3VycmVudERlZmF1bHRQcm9qID0gcHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShjdXJyZW50UHJvamVjdHMpKTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkoY3VycmVudERlZmF1bHRQcm9qKSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2Rpc3BsYXlTdG9yZWRUYXNrcyA9ICgpID0+IHtcblxuICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QudGFza3MuZm9yRWFjaCh0YXNrID0+e1xuICAgICAgICAgICAgZ2VuZXJhdGVUYXNrRE9NKHRhc2tbJ3RpdGxlJ10sIHRhc2tbJ2Rlc2MnXSwgdGFza1snZHVlRGF0ZSddKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrc0RPTS5mb3JFYWNoKHRhc2tET00gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gdGFza0RPTS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrID0gdGFza0RPTS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tIZWFkZXIuY2hpbGROb2Rlc1sxXS5ub2RlVmFsdWUgPT09IHRhc2tbJ3RpdGxlJ10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlVGFzay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGlzVGFza0luZGV4ID0gcHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0LnRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0LnRhc2tzLnNwbGljZSh0aGlzVGFza0luZGV4LCAxKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2RlZmF1bHRQcm9qZWN0JywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLmRlZmF1bHRQcm9qZWN0KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgICAgXG4gICAgICAgIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmZvckVhY2gocHJvamVjdCA9PiB7XG5cbiAgICAgICAgICAgIGdlbmVyYXRlUHJvalRpdGxlRE9NKHByb2plY3RbJ3Byb2plY3ROYW1lJ10pO1xuICAgICAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1zQXJyYXkgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9qZWN0LWl0ZW0nKSk7XG4gICAgICAgICAgICBwcm9qZWN0SXRlbXNBcnJheS5mb3JFYWNoKHByb2ogPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHByb2pUaXRsZSA9IHByb2ouY2hpbGROb2Rlc1sxXVxuICAgICAgICAgICAgICAgIGlmIChwcm9qVGl0bGUuY2hpbGROb2Rlc1swXS50ZXh0Q29udGVudCAhPT0gcHJvamVjdFsncHJvamVjdE5hbWUnXSlyZXR1cm47XG4gICAgICAgICAgICAgICAgY29uc3QgY2xvc2VQcm9qID0gcHJvai5jaGlsZE5vZGVzWzJdO1xuICAgICAgICAgICAgICAgIGNsb3NlUHJvai5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvamVjdEluZGV4ID0gIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LmluZGV4T2YocHJvamVjdCk7XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3RzQ29udHJvbGxlci5wcm9qZWN0c0FycmF5LnNwbGljZShwcm9qZWN0SW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncHJvamVjdHMnLCBKU09OLnN0cmluZ2lmeShwcm9qZWN0c0NvbnRyb2xsZXIucHJvamVjdHNBcnJheSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkpKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcm9qZWN0Wyd0YXNrcyddLmZvckVhY2godGFzayA9PiB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVUYXNrRE9NKHRhc2tbJ3RpdGxlJ10sIHRhc2tbJ2Rlc2MnXSwgdGFza1snZHVlRGF0ZSddKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50VGFza3NET00gPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJykpO1xuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrc0RPTS5mb3JFYWNoKHRhc2tET00gPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0YXNrSGVhZGVyID0gdGFza0RPTS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdmVUYXNrID0gdGFza0RPTS5xdWVyeVNlbGVjdG9yKCcuY2hlY2tib3gnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhc2tIZWFkZXIuY2hpbGROb2Rlc1sxXS5ub2RlVmFsdWUgPT09IHRhc2tbJ3RpdGxlJ10pe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFza0RPTS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7JylcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhpc1Rhc2tJbmRleCA9IHByb2plY3QudGFza3MuaW5kZXhPZih0YXNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZSh0aGlzVGFza0luZGV4LCAxKTsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Byb2plY3RzJywgSlNPTi5zdHJpbmdpZnkocHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICB9O1xuXG4gICAgaWYoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwcm9qZWN0cycpKXtcbiAgICAgICAgX3N0b3JlUHJvamVjdHMoKTtcbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgbGV0IHN0b3JlZFByb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInByb2plY3RzXCIpKTtcbiAgICAgICAgbGV0IHN0b3JlZERlZmF1bHRQcm9qID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRlZmF1bHRQcm9qZWN0XCIpKVxuICAgICAgICBwcm9qZWN0c0NvbnRyb2xsZXIuZGVmYXVsdFByb2plY3QgPSBzdG9yZWREZWZhdWx0UHJvajtcbiAgICAgICAgcHJvamVjdHNDb250cm9sbGVyLnByb2plY3RzQXJyYXkgPSBzdG9yZWRQcm9qZWN0cztcbiAgICAgICAgX2Rpc3BsYXlTdG9yZWRUYXNrcygpO1xuICAgIH1cbn0pKCk7XG5cbiJdLCJuYW1lcyI6WyJfX19DU1NfTE9BREVSX0VYUE9SVF9fXyIsInB1c2giLCJtb2R1bGUiLCJpZCIsImV4cG9ydHMiLCJjc3NXaXRoTWFwcGluZ1RvU3RyaW5nIiwibGlzdCIsInRvU3RyaW5nIiwidGhpcyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsIl9pIiwiX2kyIiwiY3NzTWFwcGluZyIsImJ0b2EiLCJiYXNlNjQiLCJ1bmVzY2FwZSIsImVuY29kZVVSSUNvbXBvbmVudCIsIkpTT04iLCJzdHJpbmdpZnkiLCJkYXRhIiwic291cmNlTWFwcGluZyIsInNvdXJjZVVSTHMiLCJzb3VyY2VzIiwic291cmNlIiwic291cmNlUm9vdCIsInN0eWxlc0luRG9tIiwiZ2V0SW5kZXhCeUlkZW50aWZpZXIiLCJpZGVudGlmaWVyIiwicmVzdWx0IiwibW9kdWxlc1RvRG9tIiwib3B0aW9ucyIsImlkQ291bnRNYXAiLCJpZGVudGlmaWVycyIsImJhc2UiLCJjb3VudCIsImluZGV4Iiwib2JqIiwiY3NzIiwic291cmNlTWFwIiwicmVmZXJlbmNlcyIsInVwZGF0ZXIiLCJhZGRTdHlsZSIsImFwaSIsImRvbUFQSSIsInVwZGF0ZSIsIm5ld09iaiIsInJlbW92ZSIsImxhc3RJZGVudGlmaWVycyIsIm5ld0xpc3QiLCJuZXdMYXN0SWRlbnRpZmllcnMiLCJfaW5kZXgiLCJzcGxpY2UiLCJtZW1vIiwiaW5zZXJ0Iiwic3R5bGUiLCJ0YXJnZXQiLCJzdHlsZVRhcmdldCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIndpbmRvdyIsIkhUTUxJRnJhbWVFbGVtZW50IiwiY29udGVudERvY3VtZW50IiwiaGVhZCIsImUiLCJnZXRUYXJnZXQiLCJFcnJvciIsImFwcGVuZENoaWxkIiwiY3JlYXRlRWxlbWVudCIsInNldEF0dHJpYnV0ZXMiLCJhdHRyaWJ1dGVzIiwibm9uY2UiLCJzZXRBdHRyaWJ1dGUiLCJpbnNlcnRTdHlsZUVsZW1lbnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJzdHlsZVRhZ1RyYW5zZm9ybSIsImFwcGx5IiwicGFyZW50Tm9kZSIsInJlbW92ZUNoaWxkIiwicmVtb3ZlU3R5bGVFbGVtZW50Iiwic3R5bGVTaGVldCIsImNzc1RleHQiLCJmaXJzdENoaWxkIiwiY3JlYXRlVGV4dE5vZGUiLCJfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18iLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJjYWNoZWRNb2R1bGUiLCJfX3dlYnBhY2tfbW9kdWxlc19fIiwibiIsImdldHRlciIsIl9fZXNNb2R1bGUiLCJkIiwiYSIsImRlZmluaXRpb24iLCJrZXkiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwicHJvcCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsInByb2plY3RGYWN0b3J5IiwicHJvamVjdE5hbWUiLCJ0YXNrcyIsInByb2plY3RzQ29udHJvbGxlciIsInByb2plY3RzQXJyYXkiLCJkZWZhdWx0UHJvamVjdCIsInJlbmRlclByb2plY3QiLCJoZWFkZXIiLCJob21lIiwiaW5ib3giLCJyZW5kZXJIb21lRE9NIiwiY3VycmVudFJlbmRlcmVkVGFza3MiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsInRhc2siLCJ0ZXh0Q29udGVudCIsImNoaWxkTm9kZXMiLCJhZGRFdmVudExpc3RlbmVyIiwicHJvalRpdGxlIiwiY3VycmVudFByb2plY3RzIiwiY3VycmVudFRhc2tzIiwicHJvamVjdCIsInByb2oiLCJnZW5lcmF0ZVRhc2tET00iLCJoYW1iZ0J1dHRvbiIsIm1haW5EaXNwIiwic2lkZUJhciIsImNsb3NlSGFtYmciLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJ0aXRsZSIsImRlc2MiLCJkdWUiLCJhZGRUYXNrQnRuIiwidGFza0NvbnRhaW5lciIsInRhc2tDaGVjayIsInRhc2tUaXRsZSIsInRhc2tEZXNjIiwiZHVlRGF0ZSIsImFkZCIsInNyYyIsImFwcGVuZCIsImluc2VydEFkamFjZW50RWxlbWVudCIsInRhc2tUaXRsZUlucHV0IiwidGFza0Rlc2NJbnB1dCIsImR1ZURhdGVJbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwibmV3VGFzayIsInJlbW92ZVRhc2siLCJ0YXNrSGVhZGVyIiwibm9kZVZhbHVlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInRoaXNUYXNrSW5kZXgiLCJpbmRleE9mIiwiY3VycmVudFRhc2tJbmRleCIsImFkZFRhc2siLCJnZW5lcmF0ZVByb2pUaXRsZURPTSIsInByb2pDb250YWluZXIiLCJwcm9qSXRlbSIsInByb2pJY29uIiwiY2xvc2VJY29uIiwicHJvalRpdGxlSW5wdXQiLCJwcm9qZWN0SXRlbXNBcnJheSIsIm5ld1Byb2plY3QiLCJjbG9zZVByb2oiLCJwcm9qZWN0SW5kZXgiLCJhZGRQcm9qIiwiZ2V0SXRlbSIsInN0b3JlZFByb2plY3RzIiwicGFyc2UiLCJzdG9yZWREZWZhdWx0UHJvaiIsInRhc2tET00iLCJjdXJyZW50RGVmYXVsdFByb2oiLCJfc3RvcmVQcm9qZWN0cyJdLCJzb3VyY2VSb290IjoiIn0=
