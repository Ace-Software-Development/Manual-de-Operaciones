"use strict";(self.webpackChunkmanuales=self.webpackChunkmanuales||[]).push([[34247],{3905:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),d=l(r),p=a,f=d["".concat(s,".").concat(p)]||d[p]||u[p]||o;return r?n.createElement(f,i(i({ref:t},m),{},{components:r})):n.createElement(f,i({ref:t},m))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},68514:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],c={},s="E01_Commits",l={unversionedId:"BlackJack/Estandares/E01_Commits",id:"version-2.0/BlackJack/Estandares/E01_Commits",title:"E01_Commits",description:"Versi\xf3n",source:"@site/versioned_docs/version-2.0/BlackJack/Estandares/E01_Commits.md",sourceDirName:"BlackJack/Estandares",slug:"/BlackJack/Estandares/E01_Commits",permalink:"/Manual-de-Operaciones/docs/BlackJack/Estandares/E01_Commits",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0/BlackJack/Estandares/E01_Commits.md",tags:[],version:"2.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"P05_Definici\xf3n de Procesos",permalink:"/Manual-de-Operaciones/docs/BlackJack/Procesos/P05_Definici\xf3n de Procesos"},next:{title:"E02_Nombramiento de Ramas para Versionamiento.",permalink:"/Manual-de-Operaciones/docs/BlackJack/Estandares/E02_NombramientoDeRamasVersionamiento"}},m={},u=[{value:"Versi\xf3n",id:"versi\xf3n",level:2},{value:"Objetivos",id:"objetivos",level:2},{value:"Descripci\xf3n del est\xe1ndar",id:"descripci\xf3n-del-est\xe1ndar",level:2},{value:"Ejemplos del est\xe1ndar",id:"ejemplos-del-est\xe1ndar",level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"e01_commits"},"E01_Commits"),(0,o.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,o.kt)("p",null,"1.0.0"),(0,o.kt)("h2",{id:"objetivos"},"Objetivos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Homegeneizar la forma de comunicar el trabajo realizado respecto al c\xf3digo del proyecto."),(0,o.kt)("li",{parentName:"ul"},"Proveer informaci\xf3n m\xe1s detallada dentro del git log para el control de versiones.")),(0,o.kt)("h2",{id:"descripci\xf3n-del-est\xe1ndar"},"Descripci\xf3n del est\xe1ndar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Se debe usar siempre la bandera -m"),(0,o.kt)("li",{parentName:"ul"},"El mensaje debe ser de m\xe1ximo 50 caracteres."),(0,o.kt)("li",{parentName:"ul"},"El mensaje debe ser en ingl\xe9s."),(0,o.kt)("li",{parentName:"ul"},"Se debe explicar de forma concisa lo que se haya modificado en el commit.")),(0,o.kt)("h2",{id:"ejemplos-del-est\xe1ndar"},"Ejemplos del est\xe1ndar"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},'git commit -m "add spacing for prospect table"',(0,o.kt)("br",{parentName:"p"}),"\n",'git commit -m "add new commit standard"',(0,o.kt)("br",{parentName:"p"}),"\n",'git commit -m "fix duplicate name bug for prospect form at prospects/{id}"',(0,o.kt)("br",{parentName:"p"}),"\n",'git commit -m "fix lint by removing console logs"')))}p.isMDXComponent=!0}}]);