"use strict";(self.webpackChunkmanuales=self.webpackChunkmanuales||[]).push([[43532],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(r),d=a,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9937:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return m}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),i=["components"],s={},l="E02_Commits",u={unversionedId:"NefroVida/Estandares/E02_Commits",id:"version-1.1.4/NefroVida/Estandares/E02_Commits",title:"E02_Commits",description:"Versi\xf3n",source:"@site/versioned_docs/version-1.1.4/NefroVida/Estandares/E02_Commits.md",sourceDirName:"NefroVida/Estandares",slug:"/NefroVida/Estandares/E02_Commits",permalink:"/Manual-de-Operaciones/docs/1.1.4/NefroVida/Estandares/E02_Commits",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.1.4/NefroVida/Estandares/E02_Commits.md",tags:[],version:"1.1.4",frontMatter:{}},c={},m=[{value:"Versi\xf3n",id:"versi\xf3n",level:2},{value:"Objetivo",id:"objetivo",level:2},{value:"Est\xe1ndar",id:"est\xe1ndar",level:2},{value:"Ejemplos",id:"ejemplos",level:2},{value:"Prefijos",id:"prefijos",level:2}],p={toc:m};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"e02_commits"},"E02_Commits"),(0,o.kt)("h2",{id:"versi\xf3n"},"Versi\xf3n"),(0,o.kt)("p",null,"1.0"),(0,o.kt)("h2",{id:"objetivo"},"Objetivo"),(0,o.kt)("p",null,"Definir una estructura a seguir al momento de realizar commits con la finalidad de mejorar la documentaci\xf3n de los cambios al repositorio, cuando cada integrante del equipo ejecute uno. Dar mejor entendimiento al resto del equipo de lo que se hizo en el c\xf3digo."),(0,o.kt)("h2",{id:"est\xe1ndar"},"Est\xe1ndar"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Usar el verbo imperativo."),(0,o.kt)("li",{parentName:"ul"},"No usar punto final o suspensivos en los mensajes."),(0,o.kt)("li",{parentName:"ul"},"Usar un m\xe1ximo de 50 caracteres por commit"),(0,o.kt)("li",{parentName:"ul"},"Si tu commit abarca muchos cambios, es mejor dividirlo en varios commits."),(0,o.kt)("li",{parentName:"ul"},"En caso de necesitar una descripci\xf3n m\xe1s espec\xedfica usa el comando git commit, lo que te permitir\xe1 agregar un cuerpo a la descripci\xf3n del commit."),(0,o.kt)("li",{parentName:"ul"},"Usar un prefijo que resuma qu\xe9 tipo de commit se realiz\xf3.")),(0,o.kt)("h2",{id:"ejemplos"},"Ejemplos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"feat: Agregar opci\xf3n de obtener documento"),(0,o.kt)("li",{parentName:"ul"},"fix: problema con las descargas"),(0,o.kt)("li",{parentName:"ul"},"remove: notificaci\xf3n aleatoria"),(0,o.kt)("li",{parentName:"ul"},"git commit -m \u201cfix: Cambiar tama\xf1o del logotipo\u201d (No m\xe1s de 50 caracteres)"),(0,o.kt)("li",{parentName:"ul"},"git commit -m \u201cfeat: \u201cAgregar opci\xf3n de obtener documento\u201d (No usar punto final o suspensivos)")),(0,o.kt)("h2",{id:"prefijos"},"Prefijos"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"fix: arreglar un bug que afecta al usuario"),(0,o.kt)("li",{parentName:"ul"},"feat: una nueva caracter\xedstica para el usuario"),(0,o.kt)("li",{parentName:"ul"},"ci: cambios en la integraci\xf3n continua"),(0,o.kt)("li",{parentName:"ul"},"remove: quitar una caracter\xedstica o cambio")))}d.isMDXComponent=!0}}]);