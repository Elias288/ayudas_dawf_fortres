const opcionesDelJuego = {
    name: 'Opciones del juego',
    content: `
        <h2>Opciones del juego</h2>
        <p>Usando Lazy Newb Pack las opciónes recomendadas:
        <table>
            <thead>
                <tr>
                    <th>Características
                    <th>Activado
            <tbody>
                <tr>
                    <td>Acuiferos
                    <td>No
                <tr>
                    <td>Intro
                    <td>No
                <tr>
                    <td>Sonido
                    <td>No
        </table><br>
        <table>
            <thead>
                <tr>
                    <th>Características
                    <th>Cantidad
            <tbody>
                <tr>
                    <td>Cantidad de población
                    <td>80
                <tr>
                    <td>Población estricta
                    <td>120
                <tr>
                    <td>Visitantes
                    <td>30
        </table>
    `
}

const ubicacionDelMapa = {
    name: "Ubicación del mapa",
    content: `
        <h2>Ubicación del mapa</h2>
        <details id=ubicaciónDelMapa/movimiento open>
            <summary class="bold noTextSelection cursorPointer">Movimiento</summary>
            <div class="sangria line">
                <p>Para moverse en el mundo y la región se utilizan las flechas <code>← → ↑ ↓</code>, para
                    mover la ubicación local <code>h k u m</code> y para aumentar el tamaño del área local
                    se utiliza <code>H K U M</code>. Con <code>F1</code>, <code>F2</code> y <code>F3</code>
                    se puede intercambiar entre los distintos viomas que se encuentren dentro del área
                    local.
            </div>
        </details>
        <details id=ubicaciónDelMapa/busqueda open>
            <summary class="bold noTextSelection cursorPointer">Búsqueda</summary>
            <div class="sangria line">
                <p>Con la letra <code>f</code> se abrirá un menú de busqueda con la cual podremos
                    seleccionar entre diferentes opciones.
                <ul>
                    <li>Dimención X
                    <li>Dimención Y
                    <li>Salvajismo
                    <li>Criaturas malvadas
                    <li>Elevación
                    <li>Temperatura
                    <li>Lluvia
                    <li>Drenaje
                    <li>Piedra Fundente
                    <li>Acuifero
                    <li>Río
                    <li>Metal poco profundo
                    <li>Metal profundo
                    <li>Suelo
                    <li>Arcilla
                </ul>
            </div>
        </details>
        <details id=ubicaciónDelMapa/visualizacionDeInformacion open>
            <summary class="bold noTextSelection cursorPointer">Visualización de información</summary>
            <div class="sangria line">
                <p>Con el <code>tab</code> se navega entre las distintas informaciónes del área
                    seleccionada:
                <ul>
                    <li>Caracteristicas principales: el primer menú sirve para ver los componentes del
                        terreno, la temperatura y la precencia de arboles.
                    <li>Las civilizaciones vecina.
                    <li>Las civilizaciones a las que puedes pertenecer.
                    <li>Mapa de elevación.
                    <li>Mapa de elevación númerica.
                </ul>
            </div>
        </details>
        <details id=ubicaciónDelMapa/desembarque open>
            <summary class="bold noTextSelection cursorPointer">Desembarque</summary>
            <div class="sangria line">
                <p>Una vez elegida la zona donde queremos desembarcar pulsaremos <code>e</code> para
                    comenzar, en el siguiente menú podremos elegir a nuestros enanos o comenzar con unos ya
                    predefinidos.
            </div>
        </details>
    `
}

const movimientoYMenu = {
    name: "Movimiento y Menú",
    content: `
        <h2>Movimiento y Menú</h2>
        <p>
            Para movernos por el mapa se pueden utilizar las flechas del teclado <code>← → ↑ ↓</code>, para
            movernos en el eje Z usaremos el <code>&lt;</code> para subir un nivel y el <code>&gt;</code>
            para bajar un nivel.
        </p>

        <p>
            Con el <code>Tab</code> podremos intercambiar la visualización del costado, mostrando un mapa,
            las <a href="index.html#menu">opciones del menú</a> o ambas.
        </p>

        <details class="menu" open>
            <summary class="bold cursorPointer noTextSelection">Menú</summary>
            <div class="sangria line">
                <ul>
                    <li><code>a</code> <a href="guias.html#primerasAcciones/alertas">Ver alertas</a></li>
                    <li><code>R</code> Ver habitaciones/edificios</li>
                    <li><code>t</code> Ver objetos en edificios</li>
                    <li><code>v</code> Ver unidades</li>
                    <li><code>u</code> Ver unidades</li>
                    <li><code>j</code> Ver trabajos</li>
                    <li><code>r</code> Ver Informes</li>
                    <li><code>l</code> Ver Lugares y ocupaciones</li>
                    <li><code>n</code> Ver Nobles y administradores</li>
                    <li><code>b</code> Construir</li>
                    <li><code>d</code> Designaciones</li>
                    <li><code>o</code> Encargos</li>
                    <li><code>p</code> <a href="guias.html#depositos">Depositos</a></li>
                    <li><code>s</code> Escuadras</li>
                    <li><code>m</code> Militar</li>
                    <li><code>c</code> Información sobre el mundo</li>
                    <li><code>D</code> Acceso al depósito</li>
                    <li><code>h</code> Saludos</li>
                    <li><code>H</code> Teclas de acceso rápido</li>
                    <li><code>i</code> Zonas</li>
                    <li><code>k</code> Mirar</li>
                    <li><code>z</code> Estado</li>
                    <li><code>q</code> Establecer tareas de construcción/prefs</li>
                    <li><code>N</code> Punto/rutas/notas</li>
                    <li><code>w</code> Hacer madrigueras</li>
                    <li><code>tab</code> Mover este menú/mapa</li>
                </ul>
            </div>
        </details>
    `
}

const primerasAcciones = {
    name: "Primeras acciones",
    content: `
        <h2>Primeras acciones</h2>
        <p>
            Una de las primeras acciones que se realizan al comenzar es la tala de arboles para obtener
            madera y el minado para construir nuestra fortaleza debajo de la tierra desde el menú de
            designaciones.
        </p>

        <details id="primerasAcciones/talaDeArboles" open>
            <summary class="bold noTextSelection cursorPointer">Tala de Arboles</summary>
            <div class="sangria line">
                <p>La tala de arboles <code>d + t</code> nos permitirá marcar los arboles de donde conseguir
                    <a href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Wood?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">madera</a> para la construcción de distintos
                    artefactos, al ser seleccionado nos permitirá elejir la zona en la que realizarla
                    marcando las dos esquinas de la zona a talar.
                <p>Para está designación es necesario un enano con profeción de <strong>Carpintero</strong>.
            </div>
        </details>
        <details id="primerasAcciones/minado" open>
            <summary class="bold noTextSelection cursorPointer">Minado</summary>
            <div class="sangria line">
                <p>El <a href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mining?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Minado</a> <code>d + d</code> nos permitirá
                    escarbar en los ejes X Y del mundo para construir nuestra fortaleza.
                <p>Para está designación es necesario un enano con profeción de <strong>Minero</strong>.
                <p>Una opcion
            </div>
        </details>
        <details id="primerasAcciones/escaleras" open>
            <summary class="bold noTextSelection cursorPointer">Escaleras</summary>
            <div class="sangria line">
                <p>Las <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Stairs?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Escaleras</a> permiten a los enanos acceder
                    a diferentes nieveles de altura en el mundo. Existen 3 tipos de escaleras:
                <ol>
                    <li><code>d + u</code> Escaleras arriba
                    <li><code>d + i</code> Escaleras arriba y abajo
                    <li><code>d + j</code> Escaleras abajo
                </ol>
            </div>
        </details>
        <details id="primerasAcciones/recoleccionDePlantas" open>
            <summary class="bold noTextSelection cursorPointer">Recolección de plantas</summary>
            <div class="sangria line">
                <p>La <a href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Herbalist?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Recolección de plantas</a>
                    <code>d + p</code> probeé a los enanos de plantas y semillas silvestres.
                <p>Para está designación es necesario un enano con profeción de <strong>Herbolario</strong>.
            </div>
        </details>
        <details id="primerasAcciones/alertas" open>
            <summary class="bold noTextSelection cursorPointer">Alertas</summary>
            <div class="sangria line">
                <p>
                    Las <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Scheduling?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Alertas</a> <code>a</code> se listan los
                    eventos importantes que suceden en el mundo.
                </p>
            </div>
        </details>
    `
}

const comida = {
    name: "Comida",
    content: `
        <h2>Comida</h2>
        <p>
            La industria de la comida nos permitirá mantener a nuestros enanos bien alimentados. Hay varias
            formas que tienen para obtenerla.
        </p>

        <details id="comida/granjas" open>
            <summary class="bold noTextSelection cursorPointer">Granjas</summary>
            <div class="sangria line">
                <p>
                    Las <a href="guias.html#construcciones/granja">Granjas</a> <code>b + p</code> nos
                    permitirán cultivar diferentes plantas que pueden ser utilizadas tanto para la comida y
                    bebida como para la industra textil.
                </p>
            </div>
        </details>
        <details id="comida/destileríaDeAlcohol" open>
            <summary class="bold noTextSelection cursorPointer">Destilería de alcohol</summary>
            <div class="sangria line">
                <p>La <a href="guias.html#talleres/comida/destilería">destilería de alcohol</a>
                    <code>b + w + l</code> es un taller básico para una fortaleza enana, que sirve para la
                    fabricación de distintas bebidas alcoholicas.
                <p>Una vez se tengan plantas para producir alcohol, debemos dar la orden de fabricarlo con
                    la <code>a</code> y elegimos elaborar bebida a partir de plantas <code>b</code> con las
                    plantas disponibles.
            </div>
        </details>
        <details id="comida/animales" open>
            <summary class="bold noTextSelection cursorPointer">Animales</summary>
            <div class="sangria line">
                <p>Los animales pueden ser confinados en una zona de pastoreo que puede ser externo para los
                    animales que necesitan pasto para comer como las bacas y los caballos; o tinerno para
                    los animales más pequeños como los patos o gallinas que no lo necesitan.
                <p>Para crear esa zona se debe pulzar la <code>i</code>, seleccionar la zona y con la
                    <code>n</code> la designamos como zona de corral/pastoreo.
                <p>Todos los animales que se tengan pueden ser sacrificados en una <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Butcher%27s_shop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Carnicería</a> <code>b + w + u</code> tanto
                    para obtener carne como cuero y huesos.
                <p>Cuando se quiera sacrificar un animal lo podremos hacer desde el menú <code>z</code>, ir
                    a la pestaña de animales y marcar como "listo para el sacrificio" usando la
                    <code>b</code>. Será necesario por lo menos un enano con la profeción de carnicero.
            </div>
        </details>
        <details id="comida/pesca" open>
            <summary class="bold noTextSelection cursorPointer">Pesca</summary>
            <div class="sangria line">
                <p>Los enanos designados como <strong>pescadores</strong> buscarán donde pescar
                    automáticamente pero se puede crear una zona de pesca manualmente con la <code>i</code>,
                    que permitirá seleccionar una zona y con la <code>f</code> asignarla como zona de pesca.
                <p>Para limpiar los peces que se obtengan es necesario la <a
                        href="guias.html#talleres/comida/pescadería">Pescaderia</a> <code>b + w + h</code>
                    donde será necesario un enano con profeción de <strong>limpiador de peces</strong>.
            </div>
        </details>
        <details id="comida/cocina" open>
            <summary class="bold noTextSelection cursorPointer">Cocina</summary>
            <div class="sangria line">
                <p>
                    La <a href="guias.html#talleres/comida/cocina">Cocina</a> <code>b + w + z</code>
                    permitirá
                    cocinar la carne para que sacie más que cruda.
                </p>
            </div>
        </details>
    `
}

const depositos = {
    name: "Depositos",
    content: `
        <h2>Depositos</h2>
        <p>
            En los <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Menu?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp#Stockpiles_Menu"
                target=_blank rel="noopener noreferrer">Depositos</a> <code>p</code> los enanos irán dejando
            todos los objetos que esten especificados para cada depósito.
        </p>
        <p>
            Primero se selecciona que tipo de depósito se quiere hacer y despues se selecciona el área donde
            realizarlo. Una vez designado todos los enanos que tengan el trabajo de Acarreo empezarán a
            apilar los elementos que vayan en ese depósito.
        </p>

        <details class=opciones open>
            <summary class="noTextSelection cursorPointer"><strong>Opciones de depósitos</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Para configurar un depósito ya creado, simplemente hay que posicionarse en el y pulsar
                    <code>s</code>, lo que nos llevara a un menú donde seleccionar que tipo y que elementos
                    colocar en él donde se listarán las <strong>categorias</strong>, los
                    <strong>tipos</strong> y los <strong>elementos especificos</strong>. Para navegar entre
                    ellas se utliza las <code>← →</code>.
                </p>
                <p>Las opciones son:</p>
                <ul>
                    <li><code>e</code> y <code>d</code> para habilitar y desabilitar la categoría.</li>
                    <li><code>a</code> y <code>b</code> para seleccionar y deseleccionar todos los tipos de
                        la categoría.</li>
                    <li><code>p</code> y <code>f</code> para permitir o prohibir un elemento seleccionado
                        del tipo.</li>
                </ul>
            </div>
        </details>
        <p>Las diferentes opciones de depositos son:
        <details id=depositos/depositoDeAnimales open>
            <summary class="noTextSelection cursorPointer">
                <code>p + a</code> <strong>Depósito de
                    Animales</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena animales en jaulas/trampas, jaulas/trampas vacías.
            </div>
        </details>
        <details id=depositos/depositoDeAlimentos open>
            <summary class="noTextSelection Depósito">
                <code>p + f</code> <strong>Depósito de
                    Alimentos</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena <a href="guias.html#comida">comida</a> y subproductos alimentarios (Carne,
                    Pescado, Plantas, Bebidas, Queso, Semillas, Hojas, Plantas molidas, Grasa, Sangre,
                    Lejía, etc).
            </div>
        </details>
        <details id=depositos/depositoDeMuebles open>
            <summary class="noTextSelection cursorPointer">
                <code>p + u</code> <strong>Depósito de
                    Muebles</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena muebles y munición de asedio.
            </div>
        </details>
        <details id=depositos/depositoDeCadaveres open>
            <summary class="noTextSelection cursorPointer">
                <code>p + y</code> <strong>Depósito de
                    Cadaveres</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena cadaveres de animales y enanos muertos si no hay un cementerio asignado.
                <p>Se recomienda hacerlo al aire libre, ya que en un lugar cerrado genera miasma.
            </div>
        </details>
        <details id=depositos/depositoDeBasura open>
            <summary class="noTextSelection cursorPointer">
                <code>p + r</code> <strong>Depósito de
                    Basura</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena basura y animales muertos si no hay un sementerio o si esta lleno.
            </div>
        </details>
        <details id=depositos/depositoDePiedra open>
            <summary class="noTextSelection cursorPointer">
                <code>p + s</code> <strong>Depósito de
                    Piedra</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena piedra/mineral.
            </div>
        </details>
        <details id=depositos/depositoDeMadera open>
            <summary class="noTextSelection cursorPointer">
                <code>p + w</code> <strong>Depósito de
                    Madera</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena madera
            </div>
        </details>
        <details id="depositos/depositoDeGemas" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + e</code> <strong>Depósito de
                    Gemas</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena Gemas
            </div>
        </details>
        <details id="depositos/depositoDeBarras/Bloques" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + b</code> <strong>Depósito de
                    Barras/Bloques</strong>
            </summary>
            <div class="sangria line">
                <p>Amacena barras (metal/carbón/potasa/ceniza/pearlash/jabón) y bloques (piedra/vidrio).
            </div>
        </details>
        <details id="depositos/depositoDeTelas" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + h</code> <strong>Depósito de
                    telas</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena telas
            </div>
        </details>
        <details id="depositos/depositoDeCuero" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + l</code> <strong>Depósito de
                    cuero</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena cuero
            </div>
        </details>
        <details id="depositos/depositoDeMuniciones" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + z</code> <strong>Depósito de
                    municiones</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena pernos, flechas y dardos.</p>
            </div>
        </details>
        <details id="depositos/depositoDeMonedas" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + n</code> <strong>Depósito de
                    monedas</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena monedas</p>
            </div>
        </details>
        <details id="depositos/depositoDeProductosTerminados" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + g</code> <strong>Depósito de
                    productos terminados</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Almacena productos terminados (cadenas/artesanías/ropa (no
                    armaduras)/férulas/muletas/más).
                </p>
            </div>
        </details>
        <details id="depositos/depositoDeArmas" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + p</code> <strong>Depósito de
                    armas</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena armas/componentes de trampas.
            </div>
        </details>
        <details id="depositos/depositoDeArmaduras" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + p</code> <strong>Depósito de
                    armaduras</strong>
            </summary>
            <div class="sangria line">
                <p>Almacena armaduras
            </div>
        </details>
        <details id="depositos/depositoPersonalizado" open>
            <strong>
                <summary class="noTextSelection cursorPointer">
                    <code>p + c</code> Depósito personalizado
            </strong> </summary>
            <div class="sangria line">
                <p>Crear una reserva personalizada.
            </div>
        </details>
        <details id="depositos/configuraciónDeAlmacenPersonalizada" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + t</code> <strong>Configuración
                </strong>de depósito
                personalizado
            </summary>
            <div class="sangria line">
                <p>Definir depósito personalizada.
            </div>
        </details>
        <details id="depositos/EliminarAlmacen" open>
            <summary class="noTextSelection cursorPointer">
                <code>p + x</code> <strong>Eliminar
                    depósito</strong>
            </summary>
            <div class="sangria line">
                <p>Elimina depósito seleccionado
            </div>
        </details>
    `
}

const talleres = {
    name: "Talleres",
    content: `
        <h2>Talleres</h2>
        <p>
            En los <a rel="noopener noreferrer"
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                target=_blank>Talleres</a> <code>b + w</code> es donde los enanos toman las materias prima y
            las procesan para fabricar proudctos terminados.
        </p>
        <p>
            Casi todos los talleres comparten la mecánica de fabricación (excepto la carnicería y el taller
            de agricultura), dentro del
            taller:
        </p>
        <ul>
            <li><code>a</code> Agregar una nueva tarea (max: 10)
            <li><code>+ -</code> Seleccionar tarea
            <li><code>c</code> Cancelar la tarea
            <li><code>p</code> Promover tarea
            <li><code>n</code> Realizar tarea urgentemente
            <li><code>r</code> Repetir tarea
            <li><code>s</code> Suspender tarea
        </ul>

        <p>Los talleres son:

        <fieldset id="talleres/comida">
            <legend class="noTextSelection">Comida</legend>

            <details id=talleres/comida/tallerDeAgricultura open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + w</code> <strong>Taller de Agricultura</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Farmer%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target="_blank" rel="noopener noreferrer">taller de Agricultura</a> un enano
                        <strong>granjero</strong> podrá realizar las siguientes actividades:
                    </p>

                    <ul>
                        <li><code>p</code> Procesar plantas: fabricar hilo de las plantas.</li>
                        <li><code>l</code> Procesar plantas (barril): fabricar jarabe de las plantas.</li>
                        <li><code>v</code> Procesar plantas (vial): fabricar unguento.</li>
                        <li><code>c</code> Producir queso: fabricar queso con cualquier leche.</li>
                        <li><code>m</code> Ordeñar animal: extraer leche de animales si se cuenta
                            con animales productores de leche.</li>
                        <li><code>s</code> Esquilar animal: extrae lana de las alpacas, llamas y ovejas.
                        </li>
                        <li><code>S</code> Procesar lana: fabricar hilo de la lana o pelo de criaturas.</li>
                        <li><code>b</code> Procesar plantas (bolsa): fabricar hojas comestibles dentro de
                            una bolsa. </li>
                    </ul>
                </div>
            </details>
            <details id=talleres/comida/pescadería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + h</code> <strong>Pescadería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En la <a
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Fishery?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target="_blank" rel="noopener noreferrer">Pescadería</a> un enano
                        <strong>limpiador de pescados</strong> podrá procesar todo lo que se obtenga de la
                        pesca. El procesamiento de peces crudos está activado por defecto, se puede pausar
                        con la <code>s</code> o cancelar con la <code>c</code>.
                    </p>
                    <p> Sus opciones son:</p>
                    <ul>
                        <li><code>p</code> Procesar peces crudos.</li>
                        <li><code>e</code> Extracto de peces crudos.</li>
                        <li><code>f</code> Capturar un pez vivo.</li>
                    </ul>
                </div>
            </details>
            <details id=talleres/comida/destilería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + l</code> <strong>Destilería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        La <a rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Still?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>destilería</a> de alcohol permite a un enano
                        <strong>cervecero</strong> fabricar su propio alchol utilzando las plantas
                        cosechadas.
                    </p>
                    <p>Sus opciones son:</p>
                    <ul>
                        <li><code>e</code> Elaborar extracto de plantas.</li>
                        <li><code>b</code> Elaborar bebida a partir de plantas.</li>
                        <li><code>f</code> Elaborar bebida a partir de fruta.</li>
                        <li><code>m</code> Elaborar hidromiel.</li>
                    </ul>
                    <p>Es necesario contar con barriles vacios u ollas grandes disponibles para preparar y
                        almacenar lo producido.</p>
                    <p>Cada planta produce 5 unidades de alcohol. Al usar las plantas para producir alcohol
                        se conserva la semilla.</p>
                </div>
            </details>
            <details id=talleres/comida/carnicería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + u</code> <strong>Carnicería</strong>
                </summary>
                <div class="sangria line">
                    <p>En la <a
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Butcher%27s_shop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target="_blank" rel="noopener noreferrer">Carnicería</a> un enano
                        <strong>carnicero</strong> podrá sacrificar animales para producir carne y huesos.
                    </p>
                    <p>A diferencia de otros talleres para sacrificar el animal existen 2 formas:</p>
                    <ol>
                        <li>Ir al menú de unidades con la <code>v</code>, seleccionar al animal y precionar
                            <code>p + s</code> para marcarlo.
                        </li>
                        <li>Entrando a la lista de animales en el menú de estado <code>z</code>, ir
                            seleccionar al animal y precionar <code>b</code> para marcarlo.</li>
                    </ol>
                    <p>Una vez marcado el anima a sacrificar será llevado a la carnicería donde se extraerá
                        la carne y los huesos.</p>
                </div>
            </details>
            <details id=talleres/comida/cocina open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + z</code> <strong>Cocina</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En la <a rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Kitchen?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>Cocina</a> un enano <strong>cocinero</strong> podrá cocinar
                        comidas preparadas y convertir la grasa de los animales en sebo.
                    </p>
                    <p>Hay tres tipos de alimentos a cocinar:</p>
                    <ul>
                        <li>
                            Una <strong>comida fácil</strong> utiliza dos ingredientes y el resultado serán
                            galletas.
                        </li>
                        <li>
                            Una <strong>buena comida</strong> utiliza tres ingredientes y dará como
                            resultado guisos.
                        </li>
                        <li>
                            Una <strong>comida abundante</strong> utiliza cuatro ingredientes y resultará en
                            asados.
                        </li>
                    </ul>
                </div>
            </details>
            <details id=talleres/comida/quern open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + q</code> <strong>Quern</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/comida/piedraDeMolino open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + M</code> <strong>Piedra de Molino</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
        </fieldset>

        <fieldset id="talleres/básicos">
            <legend class="noTextSelection">Básicos</legend>

            <details id=talleres/básicos/tallerDeCarpintería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + c</code> <strong>Taller de
                        Carpintería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Carpenter%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>taller de Carpintería</a> un enano <strong>carpintero</strong>
                        puede
                        fabricar objetos de madera.
                    </p>
                    <p>Sus opciones son:</p>
                    <ul>
                        <li>Fabricar escudo de madera</li>
                        <li>Fabricar hebilla de madera</li>
                        <li>Fabricar una lanza de entrenamiento de madera</li>
                        <li>Fabricar espada de entrenamiento de madera</li>
                        <li>Fabricar un hacha de entrenamiento de madera</li>
                        <li><code>V</code> Fabricar barril de madera.</li>
                        <li><code>o</code> Fabricar bloques de madera.</li>
                        <li><code>e</code> Fabricar un cubo de madera</li>
                        <li><code>p</code> Fabricar una trampa de madera para animales.</li>
                        <li><code>j</code> Fabricar una jaula de madera</li>
                        <li><code>a</code> Fabricar un soporte de armadura de madera.</li>
                        <li><code>b</code> Fabricar cama</li>
                        <li><code>c</code> Fabricar una silla de madera .</li>
                        <li><code>k</code> Fabricar un ataúd de madera</li>
                        <li><code>d</code> Fabricar puerta de madera.</li>
                        <li><code>l</code> Fabricar compuerta de madera</li>
                        <li><code>H</code> Fabricar tapa de escotilla de madera</li>
                        <li><code>G</code> Fabricar rejilla de madera</li>
                        <li><code>f</code> Fabricar un gabinete de madera .</li>
                        <li><code>n</code> Fabricar un contenedor de madera</li>
                        <li><code>h</code> Fabricar cofre de madera</li>
                        <li><code>w</code> Fabricar un estante para armas de madera.</li>
                        <li><code>t</code> Fabricar mesa de madera</li>
                        <li>Fabricar un enorme sacacorchos de madera .</li>
                        <li>Fabricar una bola de madera con púas</li>
                        <li>Fabricar una amenazante punta de madera .</li>
                        <li>Fabricar un carro minero de madera</li>
                        <li>Fabricar carretilla de madera</li>
                        <li>Fabricar una escalera de mano de madera</li>
                        <li>Fabricar estantería de madera</li>
                        <li>Fabricar pedestal de madera</li>
                        <li>Fabricar una sección de tubería de madera</li>
                        <li>Fabricar una férula de madera</li>
                        <li>Fabricar una muleta de madera.</li>
                        <li>Fabricar pieza de instrumento</li>
                        <li>Fabricar vitrina</li>
                    </ul>
                </div>
            </details>

            <details id=talleres/básicos/tallerDeAlbañilería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + m</code> <strong>Taller de
                        Albañilería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mason%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>taller de Albañilería </a>un enano <strong>albañil</strong> puede
                        fabricar
                        objetos de piedra.
                    </p>
                    <p>Sus opciones son:</p>
                    <ul>
                        <li><code>a</code> Fabricar soporte de armadura</li>
                        <li><code>b</code> Fabricar bloques de roca</li>
                        <li><code>c</code> Fabricar trono de roca</li>
                        <li><code>p</code> Fabricar ataúd de roca</li>
                        <li><code>d</code> Fabricar puerta de roca</li>
                        <li><code>l</code> Fabricar compuerta de roca</li>
                        <li><code>H</code> Fabricar escotilla de roca</li>
                        <li><code>G</code> Fabricar rejilla de roca</li>
                        <li><code>f</code> Fabricar gabinete de roca</li>
                        <li><code>h</code> Fabricar cofre de roca</li>
                        <li><code>u</code> Fabricar estatua de roca</li>
                        <li><code>Alt+s</code> Fabricar losa de roca</li>
                        <li><code>t</code> Fabricar nesa de roca</li>
                        <li><code>w</code> Fabricar estante de armas de roca</li>
                        <li><code>q</code> Fabricar roca Quern</li>
                        <li><code>m</code> Fabricar roca Piedra de molino</li>
                        <li>Fabricar librero de roca</li>
                        <li>Fabricar pedestal de roca</li>
                        <li>Fabricar altar de roca</li>
                    </ul>
                </div>
            </details>

            <details id=talleres/básicos/tallerDeJoyería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + j</code> <strong>Taller de
                        Joyería</strong>
                </summary>
                <div class="sangria line">
                    <p>En elñ <a rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Jeweler%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>taller de Joyería</a> un enano <strong>joyero</strong> puede
                        cortar gemas o
                        se encrustar gemas en muebles, herramientas u objetos para darles mas valor.
                    </p>
                    <p>Sus opciones són:</p>
                    <ul>
                        <li><code>c</code> Cortar gemas</li>
                        <li><code>e</code> Incrustar gemas</li>
                    </ul>
                    <ul></ul>
                </div>
            </details>

            <details id=talleres/básicos/tallerDeArtesanos open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + r</code> <strong>Taller de
                        Artesanos</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a rel="noopener noreferrer" rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Craftsdwarf%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>taller de Artesanos</a> un enano <strong>artesano</strong> puede
                        fabricar
                        objetos de comercio o trabajos especializados como munición, tazas, instrumentos,
                        jugetes, etc.
                    </p>
                </div>
            </details>

            <details id=talleres/básicos/tallerMecánico open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + t</code> <strong>Taller
                        Mecánico</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a rel="noopener noreferrer" rel="noopener noreferrer"
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Mechanic%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target=_blank>taller Mecánico</a> un enano <strong>mecánico</strong> puede
                        fabricar
                        engranajes de roca o bancos de tracción.
                    </p>
                    <p>Sus opciones son:</p>
                    <ul>
                        <li><code>t</code> Fabricar mecanismos de roca</li>
                        <li><code>R</code> Fabricar banco de tracción</li>
                    </ul>
                    <p>
                        Los engranajes de roca permiten unir palancas a distintos mecanismos como
                        compuertas,
                        puentes, etc.
                    </p>
                </div>
            </details>

            <details id=talleres/básicos/tallerDeJabón open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + S</code> <strong>Taller de
                        Jabón</strong>
                </summary>
                <div class="sangria line">
                    <p>
                        En el <a
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soap_maker%27s_workshop?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target="_blank" rel="noopener noreferrer">taller de Jabón</a> un enano con
                        profecion de <strong>jabonero</strong> puede producir <a
                            href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soap?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                            target="_blank" rel="noopener noreferrer">jabón</a> usando legía y grasa.
                    </p>
                    <p>
                        El jabón es importante para reducir la posibilidad de infecciones en el hospital.
                    </p>
                </div>
            </details>

            <details id=talleres/básicos/prensa open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + p</code> <strong>
                        Prensa</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
        </fieldset>

        <fieldset id="talleres/textil">
            <legend class="noTextSelection">Textil</legend>
            <details id=talleres/textil/tallerDeCuero open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + e</code> <strong>Taller de
                        Cuero</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/textil/tallerDeRopa open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + k</code> <strong>Taller de
                        Ropa</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/textil/tallerDeCurtidores open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + n</code> <strong>Taller de
                        Curtidores</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/textil/telar open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + o</code> <strong>Telar</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/textil/tintorería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + d</code>
                    <strong> Tintorería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
        </fieldset>

        <fieldset id="talleres/metalurgia">
            <legend class="noTextSelection">Metalurgia</legend>
            <details id=talleres/metalurgia/forja open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + f</code> <strong>Forja</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/metalurgia/cenicero open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + y</code>
                    <strong> Cenicero</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
        </fieldset>

        <fieldset id="talleres/militar">
            <legend class="noTextSelection">Militar</legend>
            <details id=talleres/militar/arquería open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + b</code>
                    <strong> Arquería</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
            <details id=talleres/militar/tallerDeAsedio open>
                <summary class="noTextSelection cursorPointer">
                    <code>b + w + s</code> <strong>Taller de
                        Asedio</strong>
                </summary>
                <div class="sangria line">
                    <p>
                </div>
            </details>
        </fieldset>
    `
}

const construcciones = {
    name: "Construcciones",
    content: `
    <h2>Construcciones</h2>
    <div class="sangria">
        <p>
            Una acción importante en nuestra fortaleza es la construcción de diferentes elementos
            (edificios, muebles, muros, etc), esto lo podemos realizar desde el menú de <a
                href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Menu?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp#Building_Menu"
                target="_blank" rel="noopener noreferrer">Construcción</a> <code>b</code>.
        </p>
        <p>
            En muchos casos es necesario fabricar el mueble/objeto antes de poder colocarlo y en algunos
            casos tambien es necesario que los enanos tengan el trabajo de transportar.
        </p>

        <details id="construcciones/soporteDeArmadura" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + a</code> <strong>Soporte de armadura</strong>
            </summary>
            <div class="sangria line">

                <p>
                    Un <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Armor_stand?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Soporte de armadura</a> es un tipo de
                    mueble que valoriza una habitación. Puede ser usado para definir un cuartel.
                </p>
            </div>
        </details>

        <details id="construcciones/cama" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + b</code> <strong>Cama</strong>
            </summary>
            <div class="sangria line">
                <p>
                    La <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Bed?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Cama</a> es un mueble fabricado en la
                    <a href="guias.html#talleres/básicos/tallerDeCarpintería">Taller de carpinería</a>
                    que puede ser usada para definir dormitorios o cuartel donde los enanos puedan
                    dormir.
                </p>
            </div>
        </details>

        <details id="construcciones/asiento" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + c</code> <strong>Asiento</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Un <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Throne?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Asiento de madera o trono de
                        piedra</a> es un mueble que los enanos pueden usar para sus rutinas diarias. Al
                    igual que las mesas son una parte de los comedores.
                </p>
            </div>
        </details>

        <details id="construcciones/ataúd" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + n</code> <strong>Ataúd</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Un <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Coffin?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Ataúd</a> es un contenedor para los
                    cuerpos de enanos fallecidos y sus mascotas.
                </p>
                <p>
                    Puede ser asignado a un enano/mascota entrando con la <code>n</code> y
                    seleccionandolo.
                </p>
            </div>
        </details>

        <details id="construcciones/puerta" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + d</code> <strong>Puerta</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Una <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Door?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Puerta</a> es un mueble utilzado para
                    controlar el movimiento de enanos, mascotas, liquidos y delimitar habitaciones.
                </p>
                <p>
                    Debe construirse junto a una pared u otra forma de soporte. Puede ser construida de
                    diferentes materiales:
                </p>
                <ul>
                    <li>Piedra</li>
                    <li>Metal (x3)</li>
                    <li>Vidrio</li>
                    <li>Madera</li>
                    <li>Gemas</li>
                    <li>Huesos</li>
                    <li>Cristal (llamada portal)</li>
                </ul>
                <p>Una puerta tiene las siguientes opciones:</p>
                <ul>
                    <li>
                        <code>l</code> <strong>Permitir paso/Prohibir paso</strong>
                    </li>
                    <li>
                        <code>o</code> <strong>Mantener cerrada/Permitir que mascotas transiten</strong>
                    </li>
                    <li>
                        <code>s</code> <strong>Establecer como interna/Establecer como externa</strong>
                        (una puerta interna no limita una habitación)
                    </li>
                </ul>
            </div>
        </details>

        <details id="construcciones/compuerta" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + x</code> <strong>Compuerta</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Una <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Floodgate?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Compuerta</a> es un tipo de puerta que
                    permite controlar el flujo de liquidos (agua, magma), que debe ser accionada
                    mediante mecanismos por una palanca o placa de presión que las abren o cierran.
                </p>
                <p>Cuando se cierran aparecen en el mundo, cuando están abiertas son invisibles.</p>
                <p>
                    Cuando están cerradas bloquean flujo de liquidos tanto en los ejes X e Y como en Z
                    ya que son consideradas
                    como muros también.
                </p>

                <p>
                    Una vez colocada y colocada una <a
                        href="guias.html#construcciones/trampasPalancas/palanca">palanca</a> un enano
                    <strong>mecánico</strong> debe conectarlas usando 2 engranajes de piedra. Una vez
                    conectados se puede ordenar a la palanca activarse con <code>P</code>
                </p>
            </div>
        </details>

        <details id="construcciones/compuertaDeSuelo" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + H</code> <strong>Compuerta del
                    suelo</strong>
            </summary>
            <div class="sangrialine">
                <p>
                    Una <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Hatch_cover?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp&_x_tr_hist=true"
                        target="_blank" rel="noopener noreferrer">Tapa de escotilla</a> es un tipo de
                    puerta que permite controlar el paso entre niveles Z, que puede ser colocado en
                    escaleras o rampas.
                </p>
                <p>
                    Al igual que las compuertas no es visible cuando está abierta y pueden ser
                    construidas de diferentes materiales
                </p>
                <ul>
                    <li>Piedra</li>
                    <li>Metal</li>
                    <li>Madera</li>
                    <li>Vidrio</li>
                </ul>
            </div>
        </details>

        <details id="construcciones/regillaDePared" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + W</code> <strong>Regilla de
                    pared</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/regillaDeSuelo" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + G</code> <strong>Regilla del
                    suelo</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/barrasVerticales" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + B</code> <strong>Barras
                    verticales</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/barrasDeSuelo" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Alt + b</code> <strong>Barras de
                    suelo</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/armario" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + f</code> <strong>Armario</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Un <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Cabinet?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Armario</a> es un tipo de mueble que
                    utilizan los enanos para guardar su ropa. Son un requisito para las habitaciones de
                    los nobles ya que aumentan el valor de una.
                </p>
                <p>Si un enano no tiene uno en su habitación dejará la ropa en el suelo.</p>
                <p>Pueden ser construido de diferentes materiales</p>
                <ul>
                    <li>Madera</li>
                    <li>Piedra</li>
                    <li>Vidrio</li>
                    <li>Metal (excepto arrabio y bismuto)</li>
                </ul>
            </div>
        </details>

        <details id="construcciones/" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + h</code>
                <strong>Contenedor</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Un <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Container?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Contenedor</a> es un termino general
                    para varios tipos de artículos similares utilizados para el almacenamiento y tienen
                    un comportamiento similar.
                </p>
                <p>Tienen un nombre diferente dependiendo del material</p>
                <ul>
                    <li>Vidrio: <strong>Caja</strong> (Box)</li>
                    <li>Piedra: <strong>Cofre</strong> (Coffer)</li>
                    <li>Madera/Metal: <strong>Baúl</strong> (Chest)</li>
                    <li>Tela/Cuero: <strong>Bolsa</strong> (Bag)</li>
                </ul>
            </div>
        </details>

        <details id="construcciones/perreras" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + k</code> <strong>Perreras
                </strong>
            </summary>
            <div class="sangria line">
                <p>(requiere entrenamiento de animales , disección de animales pequeños y/o trabajo de
                    captura)</p>
            </div>
        </details>

        <details id="construcciones/granja" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + p</code> <strong>Granja</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Las <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Farming?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">Granjas</a> son parcelas donde realizar
                    la agricultura de todos los cultivos.
                </p>

                <p>
                    Las granjas pueden ser construidas en suelos o piedra con barro (para lo que es
                    necesario irrigar) y pueden tener una caracteristica de cada categoría:
                </p>
                <ul>
                    <li><strong>Lugar</strong></li>
                    <ul>
                        <li>Interiores</li>
                        <li>Exteriores</li>
                    </ul>
                    <li><strong>Altura</strong></li>
                    <ul>
                        <li>Sobre el nivel del suelo</li>
                        <li>Subterraneos</li>
                    </ul>
                </ul>

                <p>Con las teclas <code>u m</code> agrandaremos nuestra zona de cultivo en el eje X y
                    con
                    las teclas <code>h k</code> agrandaremos en el eje Y. Solo pueden ser colocadas
                    sobre <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Soil?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target=_blank rel="noopener noreferrer">suelo</a> lo que podria implicar la
                    necesidad de irrigar en caso de no encontrar en el subsuelo.
                </p>
                <p>
                    Para está designación es necesario un enano con profeción de
                    <strong>Granjero</strong>.
                </p>
                <p>
                    Una vez construida la granja podremos elegir que tipo de planta podremos plantar en
                    ella.
                    Existen una gran variedad de plantas tanto para el exterior como para el interior.
                    Dependiendo de la planta, puede ser plantada en una o barias estaciónes.
                </p>
                <p>
                    Dentro de las granjas podemos ver que plantas pueden ser plantadas en cada estación,
                    donde cada una tiene asignada una letra:
                </p>
                <ul>
                    <li><code>a</code> Primavera
                    <li><code>b</code> Verano
                    <li><code>c</code> Otoño
                    <li><code>d</code> Invierno
                </ul>
                <p>
                    Con la tecla <code>Enter</code> asignamos una planta para esa estación en esa
                    granja.
                    Con
                    <code>Shift + Enter</code> podemos asignar esa plantación para todas las estaciónes
                    disponibles para esa planta.
                </p>
                <p>
                    La recomendación es empezar a plantar los <code>Plump helmet</code> ya que pueden
                    ser usadas tanto para comida como para bebidas y pueden ser plantadas en todas las
                    estaciones. Además debemos quitarlos de la cocina para usarlo solo en la generación
                    de bebida ya que si la cocinamos se perderán las semillas. Entrando al menú
                    <code>z</code>,
                    llendo a la pestaña cocina pulsaremos <code>c</code> en la planta en cuestión.
                </p>
            </div>
        </details>

        <details id="construcciones/estanteDeArmas" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + r</code> <strong>Estante de
                    armas</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/estatua" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + s</code> <strong>Estatua</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/losa" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Alt + s</code>
                <strong>Losa</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/mesa" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + t</code> <strong>Mesa</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Una <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Table?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Mesa</a> es un mueble necesario para
                    que los enanos puedan comer comodamente asi como también para definir una habitación
                    como comedor y como mesa de operación en un hospital.
                </p>
                <p>Pueden ser fabricadas de diferentes materiales:</p>
                <ul>
                    <li>Madera</li>
                    <li>Piedra</li>
                    <li>Metal</li>
                    <li>Vidrio</li>
                </ul>
            </div>
        </details>

        <details id="construcciones/caminoPavimentado" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + o</code> <strong>Camino pavimentado
                </strong>
            </summary>
            <div class="sangria line">
                <p>(requiere arquitectura)</p>
            </div>
        </details>

        <details id="construcciones/caminoDeTierra" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + O</code> <strong>Camino de tierra
                </strong>
            </summary>
            <div class="sangria line">
                <p>(requiere arquitectura)</p>
            </div>
        </details>

        <details id="construcciones/puente" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + g</code> <strong>Puente</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/pozo" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + l</code> <strong>Pozo </strong>
            </summary>
            <div class="sangria line">
                <p>(requiere arquitectura)</p>
            </div>
        </details>

        <details id="construcciones/maquinasDeAsedio" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + i</code> <strong>Máquinas de
                    asedio</strong>
            </summary>
            <div class="sangria line">
                <ul>
                    <li><code>b + i + b</code> Balista</li>
                    <li><code>b + i + c</code> Catapulta</li>
                </ul>
                <p></p>
            </div>
        </details>

        <details id="construcciones/talleres" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + w</code> <strong>Talleres</strong>
            </summary>
            <div class="sangria line">
                <p>
                    Los <a href="guias.html#talleres">Talleres</a> son edificios donde los enanos pueden
                    procesar materiales para convertirlos en artículos de valor o útiles.
                </p>
                <p>
                    Cuando un taller solicita la fabricación de un artículo el taller genera un trabajo
                    hasta que un enano con el trabajo adecuado llegue a realizarlo.
                </p>
            </div>
        </details>

        <details id="construcciones/hornos" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + e</code> <strong>Hornos</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/ventanaDeVidrio" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + y</code> <strong>Ventana de
                    vidrio</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/ventanaDeGemas" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Y</code> <strong>Ventana de
                    gemas</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/paredSueloEscaleraVia" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + C</code> <strong>Pared/Suelo/Escalera/Via</strong>
            </summary>
            <div class="sangria line">
                <ul>
                    <li><code>w</code> <strong>Muro</strong> - (requiere albañilería/carpintero)
                    </li>
                    <li><code>f</code> <strong>Piso</strong> - (requiere albañilería/carpintero)
                    </li>
                    <li><code>r</code> <strong>Rampa</strong> - (requiere albañilería/carpintero)
                    </li>
                    <li><code>u</code> <strong>Escalera arriba</strong> - (requiere
                        albañilería/carpintero)</li>
                    <li><code>d</code> <strong>Escalera abajo</strong> - (requiere
                        albañilería/carpintero)</li>
                    <li><code>i</code> <strong>Escalera arriba/abajo</strong> - (requiere
                        albañilería/carpintero)
                    </li>
                    <li><code>F</code> <strong>Fortificación</strong> - (requiere
                        albañilería/carpintero)</li>
                </ul>
                <p></p>
            </div>
        </details>

        <details id="construcciones/almacenComercial" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + D</code> <strong>Almacén Comercial</strong>
            </summary>
            <div class="sangria line">
                <p>
                    El <a
                        href="https://dwarffortresswiki-org.translate.goog/index.php/DF2014:Trade_depot?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=wapp"
                        target="_blank" rel="noopener noreferrer">Almacén comercial</a> es el edificio
                    que permite comerciar con las caravanas que lleguen a la fortaleza.
                </p>
                <p>
                    Para este edificio es necesario desingar a un enano como <strong>noble
                        comerciante</strong> que para poder negociar debe ser llamado al almacén
                    <code>r</code> una vez llegue la caravana.
                </p>
                <p>
                    Los productos que vayan a ser comercializados con las caravanas deben primero ser
                    llevados desde los depósitos <code>g</code> y una vez finalizado pueden ser
                    devueltos a los depósitos.
                </p>
            </div>
        </details>

        <details id="construcciones/trampasPalanca" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + T</code>
                <strong>Trampas/palanca</strong>
            </summary>
            <div class="sangria line">
                <ul>
                    <details id="construcciones/trampasPalancas/">
                        <summary class="noTextSelection cursorPointer"><code>s</code> Caida trampa
                            (requiere mecánica)</summary class="noTextSelection cursorPointer">
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                    <details id="construcciones/trampasPalancas/">
                        <summary class="noTextSelection cursorPointer"><code>w</code> Armas trampa
                            (requiere mecánica)</summary>
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                    <details id="construcciones/trampasPalancas/palanca">
                        <summary class="noTextSelection cursorPointer"><code>l</code> Palanca (requiere
                            mecánica)</summary>
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                    <details id="construcciones/trampasPalancas/">
                        <summary class="noTextSelection cursorPointer"><code>p</code> Placa de presión
                            (requiere mecánica)</summary>
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                    <details id="construcciones/trampasPalancas/">
                        <summary class="noTextSelection cursorPointer"><code>c</code> Jaula (requiere
                            mecánica)</summary>
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                    <details id="construcciones/trampasPalancas/">
                        <summary class="noTextSelection cursorPointer"><code>S</code> Lanza/púa vertical
                            (requiere mecánica)</summary>
                        <div class="sangria">
                            <p></p>
                        </div>
                    </details>
                </ul>
                <p></p>
            </div>
        </details>

        <details id="construcciones/componentesMecanicos" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + M</code> <strong>Componentes
                    mecánicos</strong>
            </summary>
            <div class="sangria line">
                <ul>
                    <li><code>s</code> Bomba de tornillo (requiere mano de obra mecánica)</li>
                    <li><code>w</code> Ruede hidráulica (requiere mano de obra mecánica)</li>
                    <li><code>m</code> Molino de viento (requiere mano de obra mecánica)</li>
                    <li><code>g</code> Conjunto de engranajes (requiere mano de obra mecánica)</li>
                    <li><code>h</code> Eje horizontal (requiere mano de obra mecánica)</li>
                    <li><code>v</code> Eje vertical (requiere mano de obra mecánica)</li>
                </ul>
                <p></p>
            </div>
        </details>

        <details id="construcciones/instrumentos" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + I</code>
                <strong>Instrumentos</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/soporte" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + S</code> <strong>Soporte</strong>
            </summary>
            <div class="sangria line">
                <p>(requiere arquitectura)</p>
            </div>
        </details>

        <details id="construcciones/trampaParaAnimales" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + m</code> <strong>Trampa para
                    animales</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/atadura" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + v</code> <strong>Atadura</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/jaula" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + j</code> <strong>Jaula</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/dianaDeArqueria" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + A</code> <strong>Diana de
                    arqueria</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/bancoDeTraccion" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + R</code> <strong>Banco de
                    tarcción</strong>
            </summary>
            <div class="sangria line">
                <p>(requiere arquitectura)</p>
            </div>
        </details>

        <details id="construcciones/nidoDeCaja" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + N</code> <strong>Nido en
                    caja</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/Colmena" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Alt + h</code>
                <strong>Colmena</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/altarDeOfrenda" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Alt + a</code> <strong>Altar de
                    ofrenda</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/Estanteria" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + Alt + c</code>
                <strong>Estanteria</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

        <details id="construcciones/mueblesDeExposición" open>
            <summary class="noTextSelection cursorPointer">
                <code>b + F</code> <strong>Muebles de
                    exposición</strong>
            </summary>
            <div class="sangria line">
                <p>

                </p>
            </div>
        </details>

    </div>

    `
}

const contentList = [
    opcionesDelJuego,
    ubicacionDelMapa,
    movimientoYMenu,
    primerasAcciones,
    comida,
    depositos,
    talleres,
    construcciones
]

export default contentList;