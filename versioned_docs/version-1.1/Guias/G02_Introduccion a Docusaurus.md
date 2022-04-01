# G02_Introducción a Docosaurus

## Objetivo
Mantener actualizada la wiki permitiendo que cada miembro del equipo sea capaz de utilizar docusaurus y generar nuevos documentos.

## Primeros pasos 
1.  Lo primero que debes hacer es descargar el repositorio [Manual-de-operaciones](https://github.com/Ace-Software-Development/Manual-de-Operaciones/tree/main/docs) y abrir la carpeta en tu editor de código. Asegurate de contar con `npm` y `yarn` instalados.
    > Para instalar npm hay que correr el siguiente comando en consola,
        npm install 
    > Para instalar yarn hay que correr el siguiente comando en consola. 
        npm install --global yarn 

    Una vez que cuentes con todo esto deberas instalar la última versión de Docusaurus.
    ```
    npm install --global yarn
    ```

2. Generar documentos: para esto necesitas generar documentos de tipo `.md`. Para familiarizarte con este tipo de formato revisa la guía [G01_Uso de Markdown](G01_Uso%20Markdown.md) 

3. Para generar un build usa el siguiente comando 
    ```
    yarn build
    ```

4. Una vez que tengas el build podrás correrlo de forma local o desplegarlo en el servidor.
    * Forma local
        ```
        npm run serve
        ```
    * Desplegar en el servidor
        * Git Bash: 
            GIT_USER=<GITHUB_USERNAME> yarn deploy
        * Windows terminal: 
            cmd /C "set "GIT_USER=<GITHUB_USERNAME>" && yarn deploy"
    > Donde `<GITHUB_USERNAME>` deberá ser remplazado con tu nombre de usuario de la cuenta que estes usando en el proyecto de Github.

## Control de Versiones.
### Crear una versión 
Docusaurus te permite mantener un control de versiones. Cada vez que hagamos cambios significativos en nuestra página deberemos crear una nueva versión de la misma. Para eso utilizaremos el siguiente comando.

    npm run docusaurus docs:version <NUEVA VERSIÓN> 

Donde remplazaremos `<NUEVA VERSIÓN>` por el número correspondiente al cambio.  

Una vez que hagamos todo esto, en la carpeta `versioned_docs` se creara una nueva carpetacon los archivos de la versión correspondiente. 

### Actualizar una versión
Para actualizar una versión tendrás que entrar a la carpeta correspondiente de la versión en `versioned_docs` y empezar a modificarla. Cabe aclarar que solo se modificará esa versión.

### Eliminar versión
Si es que quieres eliminar una versión deberás ir al archivo `versions.json` y eliminar la versión de la lista. Posteriormente tendrás que eliminar las carpetas de la misma versión de `versioned_docs` y `versioned_sidebars`

## Autor(es)
Adriana Millares Forno





