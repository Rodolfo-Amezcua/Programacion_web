# Modelo de Caja #
El modelo de caja CSS es un módulo CSS que define cajas rectangulares, incluyendo sus rellenos y márgenes, que son generadas para los elementos y que se disponen de acuerdo al modelo de formato visual.

Las cajas de una página se crean automáticamente. Cada vez que se inserta una etiqueta HTML, se crea una nueva caja rectangular que encierra los contenidos de ese elemento.

La representación básica del modelo de cajas se basa en varios conceptos importantes, como:

+ __El borde (border)__, en negro, es el límite que separa el interior del exterior del elemento.

+ __El márgen (margin)__, en naranja, es la parte exterior del elemento, por fuera del borde.
  
+ __El relleno (padding)__, en verde, es la parte interior del elemento, entre el contenido y el borde.
  
+ El contenido, en azul, es la parte interior del elemento, excluyendo el relleno.

![Alt](https://lenguajecss.com/css/modelo-de-cajas/que-es/modelo-de-cajas.png)

Cada una de estas partes del modelo de cajas de CSS se puede alterar, cambiando sus dimensiones, colores, etc. Así pues, cada elemento HTML tendrá su propio borde, margen, relleno y contenido.

Algunas propiedades son las siguientes:

1. _Propiedades que controlan el flujo del contenido en una caja_
   + box-decoration-break (en-US)
   + box-sizing
   + overflow
   + overflow(en-US)
   + overflow.y
2. _Propiedades que controlan el tamaño de una caja_
   + height
   + width
   + max-height
   + max-width
   + min-height
   + min.width
3. _Propiedades que controlan los márgenes de una caja_
   + margin
   + margin-bottom
   + margin-left
   + margin-top
4. _Propiedades que controlan los rellenos de una caja_
   + padding
   + padding-bottom
   + padding-right
   + pading-top
5. _Otras propiedades_
   + box-shadow
   + visibility

### __Fuentes de informacion__

[mdn web docs](https://developer.mozilla.org/es/docs/Web/CSS/CSS_box_model)

[MAnz.dev](https://lenguajecss.com/css/modelo-de-cajas/que-es/)

[Uniwebsidad](https://uniwebsidad.com/libros/css/capitulo-4)
# Display #

La propiedad display en CSS nos ayuda a controlar dónde se va a ver un elemento HTML dentro de la pantalla para estructurar nuestra página web. Esta propiedad se basa en la lógica del modelo de caja en CSS. El modelo de caja en CSS dice que cada elemento HTML es realmente un bloque con una serie de características de borde, margen y padding. Cómo se ven estas características en nuestra página web dependerá de la opción de la propiedad display en CSS que elijamos para el elemento.

La propiedad display establece el tipo de visualización de los elementos HTML sin afectar el flujo normal de los elementos.

![Alt](https://static.platzi.com/media/articlases/Images/frontend_developer19.png)

###  Visualización en bloque (_block_)

El display block establece que un elemento ocupará todo el espacio disponible por defecto y el siguiente elemento a este se situará por debajo.
Es posible añadir medidas de anchura width y altura height a estos a elementos.
También es posible agregar todas las propiedades del modelo de caja (no te preocupes de este concepto, ya lo abordaremos).

### Visualización en línea (_inline_)

El display inline establece que un elemento ocupará el espacio del contenido del mismo y el siguiente elemento se situará a la derecha.
No es posible añadir medidas de anchura width y altura height a estos a elementos.
También, no es posible agregar todas las propiedades del modelo de caja, únicamente funcionará la propiedad margin en el eje horizontal (no te preocupes de este concepto, ya lo abordaremos).

### Visualización de bloque y línea (_inline-block_)

El display inline-block combina las ventajas de bloque de colocar medidas al elemento y propiedades del modelo de caja correctamente; con las ventajas de inline de color un elemento seguido de otro en el mismo espacio.
Si elemento excede el contenido total, se coloca en la siguiente línea por debajo.

### Visualización nula (_none_)

El display none desactiva la visualización de un elemento, como si el elemento no existiera

#### Fuentes
[keepcoding](https://keepcoding.io/blog/propiedad-display-en-css/#Que_es_la_propiedad_display_en_CSS)

[platzy](https://platzi.com/clases/2467-frontend-developer/40838-tipos-de-display-mas-usados-block-inline-e-inline-/)
