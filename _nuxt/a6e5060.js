(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{291:function(o,e,t){var content=t(306);"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(75).default)("9a73ac46",content,!0,{sourceMap:!1})},305:function(o,e,t){"use strict";var d=t(291);t.n(d).a},306:function(o,e,t){(e=t(74)(!1)).push([o.i,":root{--madoc-white:#fff;--madoc-black:#000;--madoc-light-orange:#ff4f1f;--madoc-dark-orange:#e36209;--madoc-grey-1:#111;--madoc-grey-2:#222;--madoc-grey-3:#333;--madoc-grey-4:#444;--madoc-grey-5:#555;--madoc-grey-9:#999;--madoc-light-primary:#aaa;--madoc-dark-primary:#444;--madoc-github-blue-link:#0366d6;--madoc-github-red-code:#af6161;--madoc-github-code-back:rgba(27,31,35,0.05);--madoc-github-underline:#eaecef;--madoc-github-grey-1:#eaeeef;--madoc-github-grey-2:#6a737d;--madoc-github-grey-3:#dfe2e5;--madoc-github-grey-4:#e1e4e8;--madoc-github-grey-5:#c6cbd1;--madoc-github-grey-6:#24292e;--madoc-github-grey-7:#d6d3d5;--madoc-github-grey-8:#d6d8da;--madoc-github-grey-9:#9da5b4;--madoc-github-grey-10:#181a1f;--madoc-github-grey-11:#1b1d23;--madoc-github-grey-12:#f6f8fa;--madoc-white-opacity-50:hsla(0,0%,100%,0.5);--madoc-black-opacity-25:rgba(0,0,0,0.25);--madoc-black-opacity-50:rgba(0,0,0,0.5);--madoc-grey-blue-1:#dce5ed;--madoc-grey-blue-2:#8da9c4;--madoc-grey-blue-3:#778da9;--madoc-blue-1:#00a6ed}a{color:#0366d6;color:var(--madoc-github-blue-link);text-decoration:none}a:hover{text-decoration:underline}h1{font-size:2em}h1,h2{padding-bottom:.3em;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}h2{font-size:1.5em}h3{font-size:1.25em}h4{font-size:1em}h5{font-size:.875em}h6{font-size:.85em}b,strong{font-weight:600}blockquote{padding:0 1em;border-left:.25em solid #181a1f;border-left:.25em solid var(--madoc-github-grey-10)}hr{height:.25em;padding:0;margin:24px 0;background-color:#181a1f;background-color:var(--madoc-github-grey-10);border:0}p>code,table code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;padding:.2em .4em;margin:0;font-size:85%;background-color:#1b1d23;background-color:var(--madoc-github-grey-11);color:#af6161;color:var(--madoc-github-red-code);border-radius:3px}table{width:100%;border-spacing:0;border-collapse:collapse}table tr{background-color:#222;background-color:var(--madoc-grey-2);border-top:1px solid #181a1f;border-top:1px solid var(--madoc-github-grey-10)}table tr:nth-child(2n){background-color:var(--madoc-vscode-grey-3)}table tr>td,table tr>th{padding:6px 13px;border:1px solid #181a1f;border:1px solid var(--madoc-github-grey-10)}p.flex-center-row>img{max-width:100%}div.pg-umd{margin-top:2em;margin-bottom:1em}div.pg-umd>div.row{display:flex;flex-direction:row;align-items:center;border-bottom:1px solid #555;border-bottom:1px solid var(--madoc-grey-5)}div.pg-umd>div.row>label{font-weight:700;font-size:1.5em}div.pg-umd>div.row>button:first-of-type{margin-left:auto}div.pg-umd>div.row.log{padding:1em 2em}div.pg-umd~*{max-width:60%;min-width:800px;margin-left:auto;margin-right:auto}button{font-size:16px;font-weight:700;cursor:pointer;background-color:hsla(0,0%,100%,.05);padding:1em 2em;border:none;border-top:1px solid #555;border-top:1px solid var(--madoc-grey-5);border-right:1px solid #555;border-right:1px solid var(--madoc-grey-5);color:#fff;color:var(--madoc-white)}button:first-of-type{border-left:1px solid #555;border-left:1px solid var(--madoc-grey-5)}button:focus,button:hover{outline:none;background-color:hsla(0,0%,100%,.1)}",""]),o.exports=e},326:function(o,e,t){"use strict";t.r(e);t(46),t(15),t(36);var d=t(0),r={name:"pg-umd",props:{name:{type:String,default:null}},data:function(){return{dayjs:!1,mod:null,log:""}},computed:{publicPath:function(){return this.$router.options.base.slice(0,-1)},updatedDate:function(){return"2021-03-05T14:11:32.544Z"}},methods:{loadDayjs:function(){var o=document.createElement("script");o.type="text/javascript",o.src="https://unpkg.com/dayjs@1.8.21/dayjs.min.js",document.head.appendChild(o);var e=document.createElement("script");e.type="text/javascript",e.src="https://unpkg.com/dayjs@1.8.21/plugin/calendar.js",document.head.appendChild(e),this.dayjs=!0},loadRefManifest:function(){this.load("".concat(this.publicPath,"/modules/umd/manifest.ref.json"))},loadCdnManifest:function(){this.load("".concat(this.publicPath,"/modules/umd/manifest.cdn.json"))},load:function(o){var e=this;this.$modkit.load(o).then((function(o){var t=o.mod;e.log="",e.mod=t,e.mod.load({Vue:d.a,updatedDate:e.updatedDate}),e.dayjs=!0})).catch((function(o){console.error(o),e.log=o.toString()}))},unload:function(){this.mod&&(this.mod.unload(),this.mod=null)}}},c=(t(305),t(47)),component=Object(c.a)(r,(function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",{staticClass:"pg-umd"},[t("div",{staticClass:"row"},[t("label",[o._v("Actions:")]),o._v(" "),o.dayjs?o._e():t("button",{on:{click:o.loadDayjs}},[o._v("Load DayJS")]),o._v(" "),o.mod?o._e():t("button",{on:{click:o.loadRefManifest}},[o._v("Load #1")]),o._v(" "),o.mod?o._e():t("button",{on:{click:o.loadCdnManifest}},[o._v("Load #2")]),o._v(" "),o.mod?t("button",{on:{click:o.unload}},[o._v("Unload")]):o._e()]),o._v(" "),o.log?t("div",{staticClass:"row log",domProps:{innerHTML:o._s(o.log)}}):o._e(),o._v(" "),o._m(0)])}),[function(){var o=this.$createElement,e=this._self._c||o;return e("div",{staticClass:"content"},[e("div",{attrs:{id:"umd-sample"}})])}],!1,null,null,null);e.default=component.exports}}]);