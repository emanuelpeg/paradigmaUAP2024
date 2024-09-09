# Práctica 2

Queremos realizar un sistema para administrar los empleados de una compañía.
Hay 2 tipos de empleados: los que trabajan por hora y los que trabajan por mes. Los empleados que trabajan por hora tienen una cantidad de horas trabajadas y una tarifa por hora. Los empleados que trabajan por mes tienen un sueldo fijo mensual.
Todos los empleados deben poder calcular su salario. Además, queremos poder calcular el costo total de la nómina de la compañía al final de un mes.
Todos los empleados tienen la capacidad de registrar sus horas trabajadas, y el sistema puede calcular la cantidad de horas trabajadas en total en la compañía.

Circunstancialmente, un empleado puede cambiar de categoría (de mensual a por hora o viceversa). Al hacerlo, la implementación del método de cálculo de salario debe cambiar.

El sistema debe tener un módulo de reportes, donde genera reportes de salarios o de horas trabajadas. Para que el código sea mantenible, cada tipo de reporte debe ser generado por una clase diferente. Pero las funcionalidades en común, como un encabezado conteniendo la fecha y la hora del reporte no deberían duplicarse entre ambas clases.

Implementar las clases, interfaces y métodos necesarios para que el sistema funcione correctamente.