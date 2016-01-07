# node_autoupgrader


Objetivo
--------

Tener un módulo de nodejs que sea capaz de actualizar todo el código fuente de una app nodejs. Es decir dotar a dicha app de la capacidad de auto actualizarse.


Funcionamiento
-------------- 

Este módulo se tiene que añadir siempre como un complemento de la app y instanciarlo y iniciarlo antes de cualquier otra tarea. 

Cuando se inicie el módulo autoupg este lo que va ha hacer es mirar si hay una nueva actualización y para ello va a hacer una llamada a una url concreta donde va a haber un fichero json y este json va a tener dos propiedades una q determina la versión actual y otra la url de donde descargarse el nuevo código fuente. 

Una vez obtenidos esos dos parámetros lo primero que va ha hacer es mirar el numero de versión del fichero package.json de la app donde esta instalado y compararlo con el obtenido en la consulta anterior para determinar si es necesario llevar a cabo el upgrade de versión o no.

En caso de que determine que es necesario ejecutar el upgrade lo siguiente que va a hacer es mirar que tipo de paquete és, si un git o svn, o un tar, tgz o similar y llevar a cabo las tareas necesarias para ese tipo de actualización.

Y lo siguiente, independientemente del tipo de paquete que se vaya a utilizar para el upgrade, es lanzar el evento onBeforeUpgrade que tiene unas tareas fijas para todos los paquetes y además poseerá la capacidad de definir mediante hook otras acciones personalizadas a más a más de las genéricas. Lo mismo para una vez que acaba el proceso, se lanza el envento onAfterUpgrade que también es personalizable mediante hook.


Upgrade mediante git
--------------------


autoupg.json
------------ 