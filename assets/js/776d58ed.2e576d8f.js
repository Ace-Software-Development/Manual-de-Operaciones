"use strict";(self.webpackChunkmanuales=self.webpackChunkmanuales||[]).push([[1177],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return y}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),d=l(r),y=o,m=d["".concat(i,".").concat(y)]||d[y]||p[y]||a;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function y(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:o,s[1]=u;for(var l=2;l<a;l++)s[l]=r[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6303:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return y},frontMatter:function(){return u},metadata:function(){return l},toc:function(){return p}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),s=["components"],u={sidebar_position:5},i="Deploy your site",l={unversionedId:"Tutoriales Docusaurus/tutorial-basics/deploy-your-site",id:"version-1.0/Tutoriales Docusaurus/tutorial-basics/deploy-your-site",title:"Deploy your site",description:"Docusaurus is a static-site-generator (also called Jamstack).",source:"@site/versioned_docs/version-1.0/Tutoriales Docusaurus/tutorial-basics/deploy-your-site.md",sourceDirName:"Tutoriales Docusaurus/tutorial-basics",slug:"/Tutoriales Docusaurus/tutorial-basics/deploy-your-site",permalink:"/Manual-de-Operaciones/docs/Tutoriales Docusaurus/tutorial-basics/deploy-your-site",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-1.0/Tutoriales Docusaurus/tutorial-basics/deploy-your-site.md",tags:[],version:"1.0",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Markdown Features",permalink:"/Manual-de-Operaciones/docs/Tutoriales Docusaurus/tutorial-basics/markdown-features"},next:{title:"Congratulations!",permalink:"/Manual-de-Operaciones/docs/Tutoriales Docusaurus/tutorial-basics/congratulations"}},c={},p=[{value:"Build your site",id:"build-your-site",level:2},{value:"Deploy your site",id:"deploy-your-site-1",level:2}],d={toc:p};function y(e){var t=e.components,r=(0,o.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"deploy-your-site"},"Deploy your site"),(0,a.kt)("p",null,"Docusaurus is a ",(0,a.kt)("strong",{parentName:"p"},"static-site-generator")," (also called ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://jamstack.org/"},"Jamstack")),")."),(0,a.kt)("p",null,"It builds your site as simple ",(0,a.kt)("strong",{parentName:"p"},"static HTML, JavaScript and CSS files"),"."),(0,a.kt)("h2",{id:"build-your-site"},"Build your site"),(0,a.kt)("p",null,"Build your site ",(0,a.kt)("strong",{parentName:"p"},"for production"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\n")),(0,a.kt)("p",null,"The static files are generated in the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder."),(0,a.kt)("h2",{id:"deploy-your-site-1"},"Deploy your site"),(0,a.kt)("p",null,"Test your production build locally:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run serve\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder is now served at ",(0,a.kt)("inlineCode",{parentName:"p"},"http://localhost:3000/"),"."),(0,a.kt)("p",null,"You can now deploy the ",(0,a.kt)("inlineCode",{parentName:"p"},"build")," folder ",(0,a.kt)("strong",{parentName:"p"},"almost anywhere")," easily, ",(0,a.kt)("strong",{parentName:"p"},"for free")," or very small cost (read the ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://docusaurus.io/docs/deployment"},"Deployment Guide")),")."))}y.isMDXComponent=!0}}]);