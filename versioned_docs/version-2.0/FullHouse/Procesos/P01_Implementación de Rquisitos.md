# P01_Implementación de Requisitos
## Versión
1.0

## Objetivos
Identificar las tareas necesarias para que un requisito sea implementado satisfactoriamente.
Garantizar calidad en la implementación de cada requisito.

## Criterios de entrada
*   La Historia de usuario a implementar, definida anteriormente en el backlog.
*   La historia de usuario no tiene dependencia con alguna historia de usuario sin implementar.

## Procedimiento


| FASE | RESPONSABLE | ACTIVIDAD |
| --- | --- | --- |
|Análisis|Desarrollador|Se revisa el requerimiento y se definen los casos por los que debe pasar la US para ser aceptada.|
| |Desarrollador|Enlistar y documentar las medidas de seguridad necesarias para la US.| 
| |Miembro del equipo que no esté desarrollando la US|Verifica y valida el anális de la Historia de Usuario.|
|Diseño|Desarrollador|Se diseñan los wireframes necesarios.|
| |Desarrollador|Se diseña el algoritmo a implementar.|
| |Desarrollador|Realiza las actualizaciones necesarias en el diagrama MER.|
| |Miembro del equipo que no esté desarrollando la US|Verifica y valida el diseño de la Historia de Usuario|
|Implementación|Desarrollador|Identifica si es necesario la creación de nuevos permisos.|
| |Arquitecture Owner|Crea los permisos necesarios para la Historia de Usuario y los asigna al rol|
| |Desarrollador|Crea los modelos necesarios para la Historia de Usuario.|
| |Desarrollador|Codifica la Historia de Usuario: Backend, Frontend.|
|Pruebas|Miembro del equipo que no esté desarrollando la US|Sigue los casos de prueba definidos en la etapa de análisis para probar la historia de usuario con sus respectivas pruebas unitarias.|
| |Miembro del equipo que no esté desarrollando la US|Realiza pruebas de integración con otras historias de usuario relacionadas a la actual para verificar que funcionen en conjunto probando el flujo que tienen entre sí.|
| |Miembro del equipo que no esté desarrollando la US|Verifica que se cumplan los requerimientos de seguridad especificados dentro de la etapa de análisis poniendo a prueba la implementación de la historia de usuario.|
|Ver / Val| Matriz de Trazabilidad|Llenar información con historia de usuario, interesado, número de despliegue, documentos pertinentes detallando los cambios realizados.|
| |Validación de implementación|Revisar implementación para comprobar que realmente se está haciendo lo que se necesita.|
|Documentación|Desarrollador|Agregar al manual de usuario cómo se debe usar y para qué sirve la historia de usuario implementada con sus distintos flujos de actividad.|
| |Desarrollador|Agregar al manual técnico y de arquitectura los servicios utilizados documentando credenciales en caso de existir. Incluir consideraciones importantes de por qué fue necesario utilizar el servicio.|
| |Desarrollador|Verificar que el código cumpla con el estándar de codificación especificado por la guía de estilo de Airbnb para javascript. Dicha guía se puede encontrar en la política de definition of done de un feature.|



## Criterios de salida
*   Historia de usuario completada e implementada en la rama principal de desarrollo (Develop).
*   Historia de usuario cumple con la definición de terminado para una característica.

## Métricas
*   Costo (tiempo) de realización de cada una de las tareas.
*   Comparar complejidad estimada contra la complejidad real tras implementar el requisito.

