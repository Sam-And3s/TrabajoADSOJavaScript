//Crear las variables enteras de tipo int
let inversionInicialMesesA_os, mesesA_osInvertidos, segunds, dias, sueldo, chillidosPorMinuto, MontoTotalVehiculo, cantidadPlatos, numeroPreInscritos = 0;
//Crear las variables de tipo float
let porcentajeInteresesMesesA_os, inversionFinal, areaPared, largoPared, altoPared, arenaTotal, radioCono, generatrizCono, alturaCono, areaBaseCono, areaLateralCono, areaTotalCono, volumenCono, radioEsfera, areaEsfera, volumenEsfera, ladoCubo, areaBaseCubo, areaLateralCubo, areaTotalCubo, volumenCubo, X1, Y1, X2, Y2, X3, Y3, distancia1_2, distancia2_3, distancia3_1, perimetroTriangulo, areaTriangulo, perimetroBasePrisma, apotemaPrisma, alturaPrisma, areaBasePrisma, areaLateralPrisma, areaTotalPrisma, volumenPrisma, porcentajeAumento, aumentoSueldo, sueldoFinal, temperaturaGrillo, porcentajeEnganche, enganche, SaldoFinanciacion, valorMensualidad, notaExamen, nota1, nota2, nota3, nota4, nota5, promedioMatricula = 0.0;
//Crear las variables de tipo string
let matricula, nombreGrupo = "";

    /*
        EJERTCICIO 1
        Una persona desea invertir su capital en un banco y desea saber cuánto dinero
        ganará después de un mes si el banco le pagará intereses del 2% mensual, cree un
        algoritmo para solucionarlo

        EJERCICIO 9
        Construya un algoritmo que calcule el monto total de una capital según sea el
        capital ingresado inicialmente y la tasa de interés vigente.
    */
    function funcionGananciaMensualAnual() {
        let respuesta = prompt("¿Deseas calcular la ganancia mensual o anual? (Mensual/Anual)");

        if (respuesta.toLowerCase() == "mensual") {
            porcentajeInteresesMesesA_os = 0.02;

            inversionInicialMesesA_os = parseInt(prompt("¡Hola, bienvenid@ a nuestro simulador de inversiones! Para comenzar ingresa el monto de tu inversion: "));
    
            mesesA_osInvertidos = parseInt(prompt(`Ahora digita la cantidad de meses por las que quieres hacer la similacion, recuerda que por mes te pagamos el ${porcentajeInteresesMesesA_os*100}% de interes compuesto:`));
    
            inversionFinal = inversionInicialMesesA_os * Math.pow((1 + porcentajeInteresesMesesA_os), mesesA_osInvertidos);
    
            alert(`Tu inversion inicial fue de $${inversionInicialMesesA_os}, al cabo de ${mesesA_osInvertidos == 1 ? 'un mes' : `${mesesA_osInvertidos} meses`} tu inversion final seria de $${inversionFinal.toFixed(2)}`);
        } else if (respuesta.toLowerCase() == "anual") {
            porcentajeInteresesMesesA_os = 0.05;

            inversionInicialMesesA_os = parseInt(prompt("¡Hola, bienvenid@ a nuestro simulador de inversiones! Para comenzar ingresa el monto de tu inversion: "));
    
            mesesA_osInvertidos = parseInt(prompt(`Ahora digita la cantidad de años por las que quieres hacer la similacion, recuerda que por año te pagamos el ${porcentajeInteresesMesesA_os*100}% de interes compuesto:`));
    
            inversionFinal = inversionInicialMesesA_os * Math.pow((1 + porcentajeInteresesMesesA_os), mesesA_osInvertidos);
    
            alert(`Tu inversion inicial fue de $${inversionInicialMesesA_os}, al cabo de ${mesesA_osInvertidos == 1 ? 'un año' : `${mesesA_osInvertidos} años`} tu inversion final seria de $${inversionFinal.toFixed(2)}`);
        }
    }

    /*
        EJERCICIO 2
        Un constructor sabe que necesita 0.5 metros cúbicos de arena por metro
        cuadrado de revoque a realizar. Escriba un algoritmo que le permita obte-
        ner la cantidad de arena necesaria para revocar una pared cualquiera, según sus
        medidas (largo y alto) expresadas en metros.
    */
   function funcionArenaRevocar() {
        largoPared = parseFloat(prompt("¡Hola, bienvenid@ a la calculadora de arena total para revocar una pared! Primero ingresa el largo de la pared en metros: "));

        altoPared = parseFloat(prompt("Ahora ingresa el alto de la pared en metros: "));

        areaPared = largoPared * altoPared;
        arenaTotal = areaPared * 0.5;

        alert(`Para revocar una pared de ${largoPared == 1 ? 'un metro' : `${largoPared} metros`} de largo y ${altoPared == 1 ? 'un metro' : `${altoPared} metros`} de alto necesitaras ${arenaTotal.toFixed(2)} metros cubicos de arena`);
   }

    /*
        EJERCICIO 3
        Construya el algoritmo tal que, dado el radio, la generatriz y la altura de un cono,
        calcule e imprima el área de la base, el área lateral, el área total y su volumen.
    */
   function funcionDatosCono() {
        radioCono = parseFloat(prompt("¡Hola, bienvenid@ a la calculadora del area de base, area lateral, area total y volumen de un cono! Se te solicitarán varios datos, primero ingresa el radio del cono en centimetros: "));

        generatrizCono = parseFloat(prompt("Ahora ingresa la generatriz del cono en centimetros: "));

        alturaCono = parseFloat(prompt("Por ultimo ingresa la altura del cono en centimetros: "));

        areaBaseCono = Math.PI * Math.pow(radioCono, 2);

        areaLateralCono = Math.PI * radioCono * generatrizCono;

        areaTotalCono = areaBaseCono + areaLateralCono;

        volumenCono = 1/3 * Math.PI * radioCono * alturaCono;

        alert(`Para un cono con radio de ${radioCono} cm, generatriz de ${generatrizCono} cm y altura de ${alturaCono} cm, el area de la base es de ${areaBaseCono.toFixed(2)} cm², el area lateral es de ${areaLateralCono.toFixed(2)} cm², el area total es de ${areaTotalCono.toFixed(2)} cm² y el volumen es de ${volumenCono.toFixed(2)} cm³`);
   }

    /*
        EJERCICIO 4
        Construya el algoritmo tal que, dado el radio de una esfera, calcule e impri-
        ma el área y su volumen.
    */
   function funcionDatosEsfera() {
        radioEsfera = parseFloat(prompt("¡Hola, bienvenido a la calculadora del area y volumen de una esfera! Primero ingresa el radio de la esfera en centimetros: "));

        areaEsfera = 4 * Math.PI * Math.pow(radioEsfera, 2);

        volumenEsfera = 4/3 * Math.PI * Math.pow(radioEsfera, 3);

        alert(`Para una esfera con radio de ${radioEsfera} cm, el area es de ${areaEsfera.toFixed(2)} cm² y el volumen es de ${volumenEsfera.toFixed(2)} cm³`);
   }

    /*
        EJERCICIO 5
        Construya el algoritmo tal que, dado como dato el lado de un hexaedro o cubo,
        calcule el área de la base, el área lateral, el área total y el volumen.
    */
   function funcionDatosCubo() {
        ladoCubo = parseFloat(prompt("¡Hola, bienvenid@ a la calculadora del area de la base, el area lateral, el area total y el volumen de un cubo! Primero ingresa el valor de un lado del cubo en centimetros: "));

        areaBaseCubo = Math.pow(ladoCubo, 2);

        areaLateralCubo = 4 * Math.pow(ladoCubo, 2);

        areaTotalCubo = 6 * Math.pow(ladoCubo, 2);

        volumenCubo = Math.pow(ladoCubo, 3);

        alert(`Para un cubo con un lado de ${ladoCubo} cm, el area de la base es de ${areaBaseCubo.toFixed(2)} cm², el area lateral es de ${areaLateralCubo.toFixed(2)} cm², el area total es de ${areaTotalCubo.toFixed(2)} cm² y el volumen es de ${volumenCubo.toFixed(2)} cm³`);
   }

   //Funcion para capturar las coordenadas desde X1 a Y3, para las siguientes dos funciones
   function capturarCoordenadas() {
        X1 = parseFloat(prompt("Ingrese la coordenada en x de P1: "));
        Y1 = parseFloat(prompt("Ingrese la coordenada en y de P1: "));

        X2 = parseFloat(prompt("Ingrese la coordenada en x de P2: "));
        Y2 = parseFloat(prompt("Ingrese la coordenada en y de P2: "));

        X3 = parseFloat(prompt("Ingrese la coordenada en x de P3: "));
        Y3 = parseFloat(prompt("Por ultimo ingrese la coordenada en y de P3: "));

        return { X1, Y1, X2, Y2, X3, Y3 };
   }

    /*
        EJERCICIO 6
        Construya el algoritmo tal que, dadas las coordenadas de los puntos P1, P2 y P3
        que corresponden a los vértices de un triángulo, calcule su perímetro. Donde:
        • X1 y Y1 representan las coordenadas en el eje de las X y las Y, del punto P1.
        • X2 y Y2 expresan las coordenadas en el eje de las X y las Y, del punto P2.
        • X3 y Y3 representan las coordenadas en el eje de las X y las Y, del punto P3.
    */
   function funcionPerimetroTriangulo() {
        alert("¡Hola, bienvenido a la calculadora de vertices y perimetro de un triangulo!");
        capturarCoordenadas();

        distancia1_2 = Math.sqrt(Math.pow((X2 - X1), 2) + Math.pow((Y2 - Y1), 2));

        distancia2_3 = Math.sqrt(Math.pow((X3 - X2), 2) + Math.pow((Y3 - Y2), 2));

        distancia3_1 = Math.sqrt(Math.pow((X1 - X3), 2) + Math.pow((Y1 - Y3), 2));

        perimetroTriangulo = distancia1_2 + distancia2_3 + distancia3_1;

        alert(`Para un triangulo con vertices en P1(${X1}, ${Y1}), P2(${X2}, ${Y2}) y P3(${X3}, ${Y3}), el perimetro es de ${perimetroTriangulo.toFixed(2)}`);
   }

    /*
        EJERCICIO 7
        Construya el algoritmo tal que, dadas las coordenadas de los puntos P1, P2
        y P3 que corresponden a los vértices de un triángulo, calcule su superficie.
        Donde:
        •X1 y Y1 representan las coordenadas en el eje de las X y las Y, del punto P1.
        • X2 y Y2 expresan las coordenadas en el eje de las X y las Y, del punto P2.
        • X3 y Y3 representan las coordenadas en el eje de las X y las Y, del punto P3
    */
   function funcionAreaTriangulo() {
        alert("¡Hola, bienvenido a la calculadora de vertices y area de un triangulo!");
        capturarCoordenadas();

        areaTriangulo = 1/2 * Math.abs((X1*(Y2 - Y3) + X2*(Y3 - Y1) + X3*(Y1 - Y2)));

        alert(`Para un triangulo con vertices en P1(${X1}, ${Y1}), P2(${X2}, ${Y2}) y P3(${X3}, ${Y3}), el area es de ${areaTriangulo.toFixed(2)}`);
   }

    /*
        EJERCICIO 8
        Construya el algoritmo tal que, dado el perímetro de la base, la apotema y la altura
        de un prisma pentagonal; calcule el área de la base, el área lateral, el área total y el
        volumen.

        EJERCICIO 10
        Escribe un algoritmo que calcule el área total, lateral y el área de la base de
        un prisma pentagonal, solicitando para esto el perímetro de la base, apo-
        tema y altura del prisma.
    */
   function funcionDatosPrisma() {
        perimetroBasePrisma = parseFloat(prompt("¡Hola, bienvenid@ a la calculadora del area de la base, el area lateral, el area total y el volumen de un prisma! Primero digita el perimetro de la base en centimetros: "));

        apotemaPrisma = parseFloat(prompt("Ahora ingresa la apotema del prisma en centimetros: "));

        alturaPrisma = parseFloat(prompt("Por ultimo ingresa la altura del prisma en centimetros: "));

        areaBasePrisma = (perimetroBasePrisma * apotemaPrisma)/ 2;

        areaLateralPrisma = perimetroBasePrisma * alturaPrisma;

        areaTotalPrisma = 2 * areaBasePrisma + areaLateralPrisma;

        //puse un condicional con la variable respuesta ya que depende si quiere o no calcular el volumen, ya que en el ejercicio 8 se pone y en el 10 no
        let respuesta = prompt("¿Deseas calcular el volumen del prisma? (Si/No)");
        
        if (respuesta.toLowerCase() == "si") {
            volumenPrisma = areaBasePrisma * alturaPrisma;
        }

        alert(`Para un prisma con perimetro de la base de ${perimetroBasePrisma} cm, apotema de ${apotemaPrisma} cm y altura de ${alturaPrisma} cm, el area de la base es de ${areaBasePrisma.toFixed(2)} cm², el area lateral es de ${areaLateralPrisma.toFixed(2)} cm², ${respuesta.toLowerCase() == "si" ? `el area total es de ${areaTotalPrisma.toFixed(2)} cm² y el volumen es de ${volumenPrisma.toFixed(2)} cm³` : `Y el area total es de ${areaTotalPrisma.toFixed(2)} cm².`} `);
   }

    /*
        EJERCICIO 11
        Escribe un algoritmo que calcule e imprima los segundos que existen en el
        número de días ingresados por el usuario
    */
   function funcionSegundosDias() {
        dias = parseInt(prompt("¡Hola, bienvenid@ a la calculadora de segundos en dias! Ingresa la cantidad de dias que quieres convertir a segundos: "));

        segunds = dias * 24 * 60 * 60;

        alert(`En ${dias == 1 ? 'un dia' : `${dias} dias`} hay ${segunds} segundos`);
   }

    /*
        EJERCICIO 12
        Escribir un algoritmo que aplique un aumento del 15% al sueldo de un trabajador,
        si éste es menor a $1,000.00
    */
   function funcionAumentoSueldo15() {
        porcentajeAumento = 0.15;

        sueldo = parseInt(prompt("¡Hola, bienvenid@ a la calculadora de aumento de sueldo! Ingresa tu sueldo actual: "));

        if (sueldo < 1000) {
            aumentoSueldo = sueldo * porcentajeAumento;
            sueldoFinal = sueldo + aumentoSueldo;
            alert(`¡Felicidades, recibes aumento! Tu sueldo actual es de $${sueldo}, con un aumento del ${porcentajeAumento*100}% tu sueldo final seria de $${sueldoFinal.toFixed(2)}`);
        }
   }

    /*
        EJERCICIO 13
        Escribe un algoritmo que calcule la temperatura de acuerdo con el número de
        sonidos emitidos por un grillo.
    */
   function funcionTemperaturaXGrillo() {
        chillidosPorMinuto = parseInt(prompt("¡Hola, bienvenid@ a la calculadora de temperatura de un grillo! Ingresa la cantidad de chillidos que escuchaste en un minuto: "));

        //La formula para calcular la temperatura en grillos campestres es (((chillidosPorMinuto - 40)/4)+18)/1.8
        temperaturaGrillo = (((chillidosPorMinuto - 40)/4)+18)/1.8;

        alert(`Si escuchaste ${chillidosPorMinuto == 1 ? 'un chillido' : `${chillidosPorMinuto} chillidos`} en un minuto, la temperatura actual es de ${temperaturaGrillo}°C`);
   }

    /*
        EJERCICIO 14
        Dada la estabilidad económica que existe en un determinado país de américa
        latina, las agencias automotrices comienzan a ofrecer distintos planes de
        financiamiento para la comercialización de sus vehículos. La empresa XGW ofrece
        el siguiente plan de financiación: dado el monto total de vehículo, el cliente debe
        pagar el 35% de enganche y el resto en 18 mensualidades sin intereses. Construye
        un algoritmo que permita obtener cuál es el importe del enganche y las
        mensualidades que debe pagar el cliente.
    */
   function funcionFinanciacionVehiculo() {
        porcentajeEnganche = 0.35;

        MontoTotalVehiculo = parseInt(prompt("¡Hola, bienvenid@ a la calculadora de financiacion de vehiculos! Ingresa el monto total del vehiculo: "));

        enganche = MontoTotalVehiculo * porcentajeEnganche;

        SaldoFinanciacion = MontoTotalVehiculo - enganche;

        valorMensualidad = SaldoFinanciacion / 18;

        alert(`Para un vehiculo con un valor de $${MontoTotalVehiculo}, el enganche seria de $${enganche.toFixed(2)} y el valor de las mensualidades seria de $${valorMensualidad.toFixed(2)}`);
   }

    /*
        EJERCICIO 15
        Escribir un algoritmo para lavar los platos de la comida
    */
   function funcionlavarPlatos() {
        alert("Reunir todos los platos sucios en el lavaplatos.");
        alert("Retirar los restos de comida.");

        cantidadPlatos = parseInt(prompt("Ingrese la cantidad de platos sucios: "));

        while (cantidadPlatos > 0) {
            alert("Tomar un plato sucio.");
            alert("Abrir la llave del agua y juagar quitando restos de suciedad del plato.");
            alert("Cerrar la llave del agua");
            alert("Agarra la esponja y ponle jabon de loza.");
            alert("Frotar muy bien y por todas las superficies del plato con la esponja.");
            alert("Abrir de nuevo la llave del agua y enjuagar muy bien.");
            alert("Colocar el plato limpio en el escurridor.");
            alert(`Te quedan ${cantidadPlatos == 1 ? 'un plato' : `${cantidadPlatos} platos`} por lavar.`);
            cantidadPlatos--;
        }

        alert("¡Felicidades! Todos los platos estan limpios.");
        alert("Secar los platos.");
        alert("Guardar los platos en su lugar.");
        alert("Limpiar el área de trabajo y las manos.");
   }

    /*
        EJERCICIO 16
        Escribir un algoritmo para reparar un pinchazo de bicicleta
    */
   function funcionDespincharCicla() {
        alert("Detener la bicicleta en un lugar seguro.");
        alert("Voltear la bicicleta o colocarla en un soporte.");
        alert("Retirar la rueda afectada utilizando las herramientas adecuadas.");
        alert("Extraer la cámara de aire de la llanta.");

        alert("Inflar ligeramente la cámara de aire.");
        alert("Buscar por dónde escapa el aire (escuchar, sentir o sumergir en agua).");
        alert("Marcar el área del pinchazo.");

        alert("Secar y limpiar la zona afectada.");
        alert("Lijar suavemente alrededor del pinchazo.");
        alert("Aplicar pegamento para parches y esperar unos segundos.");
        alert("Colocar el parche y presionar firmemente.");
        alert("Esperar que el pegamento se fije.");

        alert("Volver a colocar la cámara dentro de la llanta.");
        alert("Ajustar la llanta en el aro y asegurarse de que quede bien alineada.");
        alert("Inflar la cámara a la presión recomendada.");
        alert("Montar la rueda nuevamente en la bicicleta.");

        alert("Revisar que la rueda gire correctamente.");
        alert("Asegurarse de que no haya fugas de aire.");
        alert("Probar la bicicleta antes de continuar el viaje.");
   }

    /*
        EJERCICIO 17
        Construya un algoritmo dado como dato la calificación de un alumno en un examen, escriba
        “APROBADO” si su calificación es mayor o igual que 8 y “REPROBADO” en caso
        contrario.
    */
   function funcionVeredictoExamen() {
        notaExamen = parseFloat(prompt("¡Hola, bienvenido al simulador que te dirá, sgun tu nota del examen si aprobaste o no! Primero ingresa la nota que obtuviste en el examen: "));

        if (notaExamen >= 8) {
            alert("APROBADO");
        } else {
            alert("REPROBADO");
        }
   }

    /*
        EJERCICIO 18
        Construya un algoritmo dado como dato el sueldo de un trabajador, aplique un
        aumento del 15% si su sueldo es inferior a $1,000.00 y el 12% en casocontrario.
        Imprima el nuevo sueldo del trabajador.
    */
   function funcionAumentoSueldo1512() {
        funcionAumentoSueldo15();
        if (sueldo >= 1000) {
            porcentajeAumento = 0.12;
            aumentoSueldo = sueldo * porcentajeAumento;
            sueldoFinal = sueldo + aumentoSueldo;
            alert(`¡Felicidades, recibes aumento! Tu sueldo actual es de $${sueldo}, con un aumento del ${porcentajeAumento*100}% tu sueldo final seria de $${sueldoFinal.toFixed(2)}`);
        }
   }

    /*
        EJERCICIO 19
        Construye un algoritmo dado como datos la matrícula y 5 calificaciones de un
        alumno; imprima la matrícula, el promedio y la palabra “Aprobado” si el alumno
        tiene un promedio mayor o igual que 6, y la palabra “No aprobado”, en caso
        contrario.
    */
   function funcionVeredictoMatricula() {
        matricula = prompt("¡Hola, bienvenid@ a la calculadora de tu promedio, donde te dirá si aprobaste o no una materia! Primero ingresa el nombre de la materia: ");

        nota1 = parseFloat(prompt("Ingresa la primera nota: "));
        nota2 = parseFloat(prompt("Ingresa la segunda nota: "));
        nota3 = parseFloat(prompt("Ingresa la tercera nota: "));
        nota4 = parseFloat(prompt("Ingresa la cuarta nota: "));
        nota5 = parseFloat(prompt("Por ultimo ingresa la quinta nota: "));

        promedioMatricula = (nota1 + nota2 + nota3 + nota4 + nota5) / 5;

        if (promedioMatricula >= 6) {
            alert(`Para la materia de ${matricula}, tu promedio es de ${promedioMatricula.toFixed(2)} y estas APROBADO`);
        } else {
            alert(`Para la materia de ${matricula}, tu promedio es de ${promedioMatricula.toFixed(2)} y estas REPROBADO`);
        }
   }

    /*
        EJERCICIO 20
        Construye un algoritmo que, dados el nombre del grupo y el número de alumnos
        preinscritos, exprese el nombre del grupo, el número de alumnos inscritos y si el
        grupo será abierto o cerrado, puesto que, para abrir un grupo, se necesitan
        mínimo 30 alumnos
    */
    function funcionGrupoAbiertoOCerrado() {
        nombreGrupo = prompt("¡Hola, bienvenid@ al simulador de grupos, donde dependiendo a los datos ingresados se te indicará si el grupo podrá o no ser abierto! Primero indica el nombre del grupo: ");

        numeroPreInscritos = parseInt(prompt("Ahora ingresa la cantidad de estudiantes preinscritos en este grupo: "));

        if (numeroPreInscritos >= 30) {
            alert(`El grupo ${nombreGrupo} tiene ${numeroPreInscritos} estudiantes preinscritos, por lo tanto el grupo será ABIERTO`);
        } else {
            alert(`El grupo ${nombreGrupo} tiene ${numeroPreInscritos == 1 ? 'un estudiante preinscrito' : `${numeroPreInscritos} estudiantes preinscritos`}, por lo tanto el grupo será CERRADO`);
        }
    }
