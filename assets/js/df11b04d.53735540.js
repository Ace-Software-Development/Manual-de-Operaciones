"use strict";(self.webpackChunkmanuales=self.webpackChunkmanuales||[]).push([[5117],{3905:function(e,r,a){a.d(r,{Zo:function(){return c},kt:function(){return m}});var n=a(67294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function o(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?o(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function s(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var l=n.createContext({}),u=function(e){var r=n.useContext(l),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(a),m=t,v=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return a?n.createElement(v,i(i({ref:r},c),{},{components:a})):n.createElement(v,i({ref:r},c))}));function m(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=a.length,i=new Array(o);i[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:t,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},36359:function(e,r,a){a.r(r),a.d(r,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return u},toc:function(){return p}});var n=a(87462),t=a(63366),o=(a(67294),a(3905)),i=["components"],s={},l="G02_Introducci\xf3n a Docosaurus",u={unversionedId:"Guias/G02_Introduccion a Docusaurus",id:"version-1.2.1/Guias/G02_Introduccion a Docusaurus",title:"G02_Introducci\xf3n a Docosaurus",description:"Objetivo",source:"@site/versioned_docs/version-1.2.1/Guias/G02_Introduccion a Docusaurus.md",sourceDirName:"Guias",slug:"/Guias/G02_Introduccion a Docusaurus",permalink:"/Manual-de-Operaciones/docs/1.2.1/Guias/G02_Introduccion a Docusaurus",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.2.1/Guias/G02_Introduccion a Docusaurus.md",tags:[],version:"1.2.1",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"G01_Uso de Markdown",permalink:"/Manual-de-Operaciones/docs/1.2.1/Guias/G01_Uso Markdown"},next:{title:"Procesos",permalink:"/Manual-de-Operaciones/docs/1.2.1/Procesos/"}},c={},p=[{value:"Objetivo",id:"objetivo",level:2},{value:"Primeros pasos",id:"primeros-pasos",level:2},{value:"Control de Versiones.",id:"control-de-versiones",level:2},{value:"Crear una versi\xf3n",id:"crear-una-versi\xf3n",level:3},{value:"Actualizar una versi\xf3n",id:"actualizar-una-versi\xf3n",level:3},{value:"Eliminar versi\xf3n",id:"eliminar-versi\xf3n",level:3},{value:"Autor(es)",id:"autores",level:2}],d={toc:p};function m(e){var r=e.components,a=(0,t.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},d,a,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"g02_introducci\xf3n-a-docosaurus"},"G02_Introducci\xf3n a Docosaurus"),(0,o.kt)("h2",{id:"objetivo"},"Objetivo"),(0,o.kt)("p",null,"Mantener actualizada la wiki permitiendo que cada miembro del equipo sea capaz de utilizar Docusaurus y generar nuevos documentos."),(0,o.kt)("h2",{id:"primeros-pasos"},"Primeros pasos"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Lo primero que debes hacer es descargar el repositorio ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ace-Software-Development/Manual-de-Operaciones/tree/main/docs"},"Manual-de-operaciones")," y abrir la carpeta en tu editor de c\xf3digo. Asegurate de contar con ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn")," instalados."),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Para instalar npm hay que correr el siguiente comando en consola,\nnpm install\nPara instalar yarn hay que correr el siguiente comando en consola.\nnpm install --global yarn ")),(0,o.kt)("p",{parentName:"li"},"Una vez que cuentes con todo esto deber\xe1s instalar la \xfaltima versi\xf3n de Docusaurus."),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm install --global yarn\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generar documentos: para esto necesitas generar documentos de tipo ",(0,o.kt)("inlineCode",{parentName:"p"},".md"),". Para familiarizarte con este tipo de formato revisa la gu\xeda ",(0,o.kt)("a",{parentName:"p",href:"/Manual-de-Operaciones/docs/1.2.1/Guias/G01_Uso%20Markdown"},"G01_Uso de Markdown")," ")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Para generar un build usa el siguiente comando "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"yarn build\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Una vez que tengas el build podr\xe1s correrlo de forma local o desplegarlo en el servidor."),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Forma local",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"npm run serve\n"))),(0,o.kt)("li",{parentName:"ul"},"Desplegar en el servidor\nGit Bash: ",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},"GIT_USER=<GITHUB_USERNAME> yarn deploy\n")))),(0,o.kt)("p",{parentName:"li"},"Windows terminal: "),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre"},'cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"\n')),(0,o.kt)("blockquote",{parentName:"li"},(0,o.kt)("p",{parentName:"blockquote"},"Donde ",(0,o.kt)("inlineCode",{parentName:"p"},"<GITHUB_USERNAME>")," deber\xe1 ser remplazado con tu nombre de usuario de la cuenta que estes usando en el proyecto de Github.")))),(0,o.kt)("h2",{id:"control-de-versiones"},"Control de Versiones."),(0,o.kt)("h3",{id:"crear-una-versi\xf3n"},"Crear una versi\xf3n"),(0,o.kt)("p",null,"Docusaurus te permite mantener un control de versiones. Cada vez que hagamos cambios significativos en nuestra p\xe1gina deberemos crear una nueva versi\xf3n de la misma. Para eso utilizaremos el siguiente comando."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm run docusaurus docs:version <NUEVA VERSI\xd3N> \n")),(0,o.kt)("p",null,"Donde remplazaremos ",(0,o.kt)("inlineCode",{parentName:"p"},"<NUEVA VERSI\xd3N>")," por el n\xfamero correspondiente al cambio.  "),(0,o.kt)("p",null,"Una vez que hagamos todo esto, en la carpeta ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs")," se creara una nueva carpeta con los archivos de la versi\xf3n correspondiente. "),(0,o.kt)("h3",{id:"actualizar-una-versi\xf3n"},"Actualizar una versi\xf3n"),(0,o.kt)("p",null,"Para actualizar una versi\xf3n tendr\xe1s que entrar a la carpeta correspondiente de la versi\xf3n en ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs")," y empezar a modificarla. Cabe aclarar que solo se modificar\xe1 esa versi\xf3n."),(0,o.kt)("h3",{id:"eliminar-versi\xf3n"},"Eliminar versi\xf3n"),(0,o.kt)("p",null,"Si es que quieres eliminar una versi\xf3n deber\xe1s ir al archivo ",(0,o.kt)("inlineCode",{parentName:"p"},"versions.json")," y eliminar la versi\xf3n de la lista. Posteriormente tendr\xe1s que eliminar las carpetas de la misma versi\xf3n de ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_docs")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"versioned_sidebars")),(0,o.kt)("h2",{id:"autores"},"Autor(es)"),(0,o.kt)("p",null,"Adriana Millares Forno"))}m.isMDXComponent=!0}}]);