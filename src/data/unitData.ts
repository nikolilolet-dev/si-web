export interface JournalEntryLine {
  code: string;
  account: string;
  debit?: number;
  credit?: number;
  note?: string;
}

export interface JournalEntry {
  title: string;
  description: string;
  lines: JournalEntryLine[];
  rationale: string;
}

export interface StepByStepExercise {
  title: string;
  scenario: string;
  initialData: { label: string; value: string }[];
  steps: {
    stepNumber: number;
    stepTitle: string;
    explanation: string;
    calculation?: string;
  }[];
  finalResult: string;
}

export interface PracticalCase {
  title: string;
  companyContext: string;
  whatHappened: string;
  decisionAndImpact: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface TopicData {
  id: string;
  number: string;
  title: string;
  standard: string;
  conceptTitle: string;
  humanConcept: string;
  humanExplanation: string;
  keyPoints: string[];
  // Requerimiento exacto del usuario:
  stepByStepExercise: StepByStepExercise; // Ejemplo principal: ejercicio explicado paso a paso
  practicalCase: PracticalCase;           // Ejemplo 2: caso práctico
  journalEntry: JournalEntry;             // Ejemplo 3: asiento contable
  quiz: QuizQuestion[];                  // Las preguntas excelentes intactas
}

export const ACADEMIC_INFO = {
  institution: "UNIVERSIDAD FEDERICO HENRÍQUEZ Y CARVAJAL",
  acronym: "UFHEC",
  campus: "Recinto Las Matas de Farfán",
  subject: "Contabilidad Superior",
  teacher: "Mtra. Ruth Aquino",
  group: "Grupo 2",
  members: [
    { name: "Axcel Feliz", role: "Expositor" },
    { name: "Yemarlin Morillo", role: "Expositora" }
  ],
  date: "08 de Noviembre de 2026",
  unitTitle: "UNIDAD V: PARTIDAS NO USUALES Y DE PERÍODOS ANTERIORES"
};

export const UNIT_INTRODUCTION = {
  title: "Introducción a la Exposición",
  text: "Buenos días a todos, este es el trabajo final del Grupo #2 preparado por Axcel Feliz & Yemarlin Morillo. A lo largo de esta unidad examinaremos qué debe hacer un contador cuando en la empresa ocurren eventos que rompen la rutina diaria del negocio. Abordaremos cuatro temas fundamentales: primero, las partidas extraordinarias y cómo se tratan hoy bajo las normas internacionales; segundo, cómo corregir errores cometidos en años anteriores sin distorsionar el año actual (NIC 8); tercero, el proceso de vender o cerrar una parte o división de la empresa (NIIF 5); y cuarto, cómo registrar cuando una compañía cancela o renegocia sus deudas bancarias entregando bienes o acciones (NIIF 9). Nuestro objetivo es explicar cada concepto de manera clara y práctica, con ejercicios y casos reales."
};

export const UNIT_CONCEPT = {
  title: "Concepto General de la Unidad V: Partidas No Usuales y de Períodos Anteriores",
  text: "En el día a día, una empresa compra mercancía, paga sueldos, vende productos y asume gastos comunes; a esto le llamamos operaciones ordinarias. Sin embargo, en la vida real también ocurren cosas inesperadas: desastres naturales impredecibles, expropiaciones de terrenos por parte del gobierno, descuidos u omisiones contables que se descubren dos años después, o decisiones de la junta directiva de cerrar toda una fábrica porque ya no genera ganancias. En Contabilidad Superior, las 'Partidas No Usuales y de Períodos Anteriores' son precisamente todas aquellas transacciones o correcciones que, por su naturaleza atípica, su poca frecuencia o porque corresponden a años pasados, no pueden mezclarse sin previo aviso con las ganancias normales del negocio. Si las mezcláramos a la ligera, engañaríamos a los dueños, a los bancos y a los inversionistas haciéndoles creer que la empresa ganó o perdió dinero por su actividad comercial habitual, cuando en realidad se debió a un suceso aislado o a un error del pasado."
};

export const UNIT_TOPICS: TopicData[] = [
  {
    id: "5-1-partidas-extraordinarias",
    number: "5.1",
    title: "Partidas extraordinarias",
    standard: "NIC 1 / Histórico APB 30",
    conceptTitle: "¿Qué son las partidas extraordinarias y cómo se explican hoy en día?",
    humanConcept: "Son aquellos ingresos o pérdidas que se originan por sucesos totalmente raros, anómalos y que casi nunca pasan en el curso regular de la empresa. Para que algo se considerara tradicionalmente 'extraordinario' debía cumplir dos condiciones al mismo tiempo: ser inusual (ajeno a lo que hace el negocio) y ser infrecuente (no se espera que vuelva a ocurrir en mucho tiempo).",
    humanExplanation: "Imaginen que ustedes tienen una fábrica de muebles en Santo Domingo o Las Matas de Farfán. Si la madera sube de precio o bajan las ventas, eso es normal del negocio. Pero si el Estado de repente decreta que necesita su terreno para construir una presa o una autopista y expropia el edificio y almacén de la empresa, eso es un suceso completamente extraordinario. Ahora bien, es muy importante tener en cuenta que la norma internacional actual (NIC 1, párrafo 87) prohíbe poner el rótulo de 'Ganancia o Pérdida Extraordinaria' en una línea separada al final del Estado de Resultados, porque antes muchas empresas escondían pérdidas operativas diciendo que eran 'extraordinarias'. Hoy en día, la norma dice: 'Regístralo dentro de tus resultados del año, pero explícalo con lujo de detalles en una nota separada para que todo el que lea el informe entienda de dónde salió ese número'.",
    keyPoints: [
      "Carácter Inusual: No tiene nada que ver con la actividad principal que realiza la empresa.",
      "Infrecuencia: No es algo que suceda todos los años ni cada dos meses.",
      "Criterio NIC 1: No se crea una sección 'extraordinaria' aislada, sino que se revela con detalle en las notas a los estados financieros."
    ],
    stepByStepExercise: {
      title: "Ejemplo Principal: Ejercicio Práctico",
      scenario: "La empresa 'Distribuidora del Sur S.R.L.' tenía un almacén de distribución. El Estado dominicano declara de utilidad pública la zona para construir un proyecto vial y expropia el inmueble, pagando una indemnización pericial.",
      initialData: [
        { label: "Costo original del edificio y terreno", value: "RD$ 25,000,000.00" },
        { label: "Depreciación acumulada a la fecha", value: "RD$ 6,500,000.00" },
        { label: "Valor neto en libros del inmueble", value: "RD$ 18,500,000.00" },
        { label: "Monto que el Estado pagó de compensación", value: "RD$ 12,000,000.00" }
      ],
      steps: [
        {
          stepNumber: 1,
          stepTitle: "Determinar el Valor en Libros real del activo",
          explanation: "Restamos al costo de compra del edificio la depreciación acumulada por los años de uso que ya se habían consumido.",
          calculation: "RD$ 25,000,000 - RD$ 6,500,000 = RD$ 18,500,000 (Valor en Libros)"
        },
        {
          stepNumber: 2,
          stepTitle: "Comparar lo recibido contra lo que valía en libros",
          explanation: "Comparamos los RD$ 12,000,000 que el Estado depositó en la cuenta bancaria de la empresa con los RD$ 18,500,000 que el edificio aún valía en la contabilidad.",
          calculation: "RD$ 12,000,000 (Recibido) - RD$ 18,500,000 (Valor en Libros) = - RD$ 6,500,000"
        },
        {
          stepNumber: 3,
          stepTitle: "Conclusión y clasificación del resultado",
          explanation: "La empresa sufrió una pérdida no habitual de RD$ 6,500,000. Como la expropiación es un hecho atípico e involuntario, se expone claramente en las notas aclaratorias explicando el decreto presidencial que causó la expropiación."
        }
      ],
      finalResult: "Pérdida neta por expropiación: RD$ 6,500,000.00 (revelada minuciosamente en notas según NIC 1)."
    },
    practicalCase: {
      title: "Ejemplo 2: Caso Práctico de la Vida Real",
      companyContext: "Agrícola San Juan C. por A., empresa dedicada a la siembra y empaque de granos en el valle de San Juan.",
      whatHappened: "En una zona donde nunca tiembla la tierra de forma destructiva, ocurrió un sismo atípico que colapsó un silo de almacenamiento de acero recién instalado valorado en RD$ 4,200,000. La empresa no tenía póliza de seguro contra terremotos porque las aseguradoras locales no la exigían por el historial sísmico nulo del lugar.",
      decisionAndImpact: "El contador no puede registrar esto como un costo de venta de granos, porque arruinaría el margen de ganancia de los agricultores. Lo registra como una pérdida por siniestro no ordinario, detallando en notas que se trató de un evento natural imprevisible en esa demarcación geográfica."
    },
    journalEntry: {
      title: "Ejemplo 3: Asiento Contable (Libro Diario)",
      description: "Registro en el Libro Diario de la pérdida por expropiación del edificio y almacén de la empresa:",
      lines: [
        {
          code: "1110-01",
          account: "Efectivo en Bancos",
          debit: 12000000,
          credit: undefined,
          note: "Entrada del dinero pagado por el Estado"
        },
        {
          code: "1220-99",
          account: "Depreciación Acumulada - Edificaciones",
          debit: 6500000,
          credit: undefined,
          note: "Cancelamos la depreciación acumulada hasta la fecha"
        },
        {
          code: "5310-15",
          account: "Pérdida en Expropiación de Activos Inmobiliarios",
          debit: 6500000,
          credit: undefined,
          note: "Gasto no ordinario asumido por la empresa"
        },
        {
          code: "1220-01",
          account: "Propiedad, Planta y Equipos - Edificio y Terreno",
          debit: undefined,
          credit: 25000000,
          note: "Damos de baja total al inmueble entregado al Estado"
        }
      ],
      rationale: "¿Por qué se debitó y acreditó así? Se debita Bancos porque entró dinero; se debita Depreciación Acumulada porque al irse el edificio, su depreciación ya no puede seguir existiendo en el balance; se debita la Pérdida porque disminuye el patrimonio de los socios; y se acredita la cuenta del Edificio por su costo total para sacarlo definitivamente de los libros."
    },
    quiz: [
      {
        id: "q51-1",
        question: "¿Cuál es la disposición de la Norma Internacional de Contabilidad (NIC 1) en cuanto a las 'Partidas Extraordinarias'?",
        options: [
          "Exige crear una subsección obligatoria denominada 'Resultados Extraordinarios' antes de la utilidad neta.",
          "Permite clasificar cualquier gasto imprevisto como extraordinario a criterio de la gerencia.",
          "Prohíbe taxativamente presentar partidas con el rótulo de extraordinarias en el cuerpo del estado financiero, exigiendo desglose por notas.",
          "Solo permite su presentación si superan el 50% de las ventas brutas del ejercicio."
        ],
        correctIndex: 2,
        explanation: "La NIC 1, párrafo 87, establece textualmente que la entidad no presentará ninguna partida de ingresos o gastos como partidas extraordinarias ni en el estado que presente el resultado del período ni en las notas."
      },
      {
        id: "q51-2",
        question: "¿Cuáles son las dos condiciones conjuntas requeridas históricamente para clasificar una partida como extraordinaria?",
        options: [
          "Poseer naturaleza inusual y tener una infrecuencia de ocurrencia previsible en el tiempo.",
          "Ser deducible de impuestos y haber sido pagada en efectivo.",
          "Haber sido auditada externamente y superar los cinco salarios mínimos.",
          "Ocurrir en el último mes del año fiscal y contar con la firma del Consejo Directivo."
        ],
        correctIndex: 0,
        explanation: "Los dos pilares conceptuales son la alta anormalidad respecto al negocio ordinario (inusual) y que razonablemente no se espere que se repita en el futuro previsible (infrecuente)."
      },
      {
        id: "q51-3",
        question: "Si una empresa agrícola ubicada en el valle de Constanza sufre heladas invernales cada tres años, ¿puede registrar la pérdida como extraordinaria?",
        options: [
          "Sí, porque cualquier pérdida climática es ajena a la voluntad de la empresa.",
          "Sí, siempre que el Ministerio de Agricultura declare alerta roja.",
          "No, debe cargarse directamente al capital social sin pasar por pérdidas y ganancias.",
          "No, porque la ocurrencia es periódica y forma parte de los riesgos operativos inherentes de la región."
        ],
        correctIndex: 3,
        explanation: "Al existir recurrencia histórica esperable en la región, no cumple el criterio de infrecuencia de ocurrencia; se trata de una pérdida operativa normal del sector agropecuario."
      }
    ]
  },
  {
    id: "5-2-ajustes-periodos-anteriores",
    number: "5.2",
    title: "Ajustes de períodos anteriores",
    standard: "NIC 8 (Políticas contables, cambios en estimaciones y errores)",
    conceptTitle: "¿Cómo corregimos hoy los errores de años pasados?",
    humanConcept: "Son correcciones que tenemos que hacer cuando nos damos cuenta de que en los estados financieros de años anteriores cometimos una equivocación matemática, aplicamos mal una regla contable, se nos olvidó registrar un gasto o hubo una omisión importante.",
    humanExplanation: "Piénsenlo de esta forma: imaginen que en el año 2024 a la empresa se le olvidó registrar la depreciación de una máquina de RD$ 1,500,000, y en 2025 volvió a pasar lo mismo. Si en este año 2026 nos damos cuenta del error, ¿sería justo cargar esos RD$ 3,000,000 de gasto acumulado al año 2026? ¡Claro que no! Porque si lo hacemos, el año 2026 se verá con pérdidas que no le corresponden, y los gerentes del 2026 parecerían malos administradores por culpa de un descuido del 2024. Por eso la norma contable NIC 8 dice que debemos hacer una 'reexpresión retroactiva': el error no se mete en los gastos de hoy, sino que se ajusta directamente contra el saldo inicial de las 'Utilidades Acumuladas' (Ganancias Retenidas) en el patrimonio, como si el error se hubiera corregido en su momento.",
    keyPoints: [
      "Reexpresión Retroactiva: Se ajusta el pasado en el patrimonio, sin ensuciar los gastos del año corriente.",
      "Diferencia clave: Un error es algo que debimos hacer bien con los datos de entonces. Un cambio de estimación es nuevo y se aplica hacia el futuro.",
      "Transparencia: Se presentan las cifras del año pasado comparadas de forma corregida."
    ],
    stepByStepExercise: {
      title: "Ejemplo Principal: Ejercicio Práctico",
      scenario: "Durante la auditoría del ejercicio 2026, se descubre que una máquina industrial comprada en enero 2024 por RD$ 15,000,000 (vida útil de 10 años, depreciación anual del 10% = RD$ 1,500,000) no fue depreciada en 2024 ni en 2025.",
      initialData: [
        { label: "Costo de la maquinaria", value: "RD$ 15,000,000.00" },
        { label: "Depreciación anual olvidada", value: "RD$ 1,500,000.00 por año" },
        { label: "Períodos omitidos", value: "2 años (2024 y 2025)" },
        { label: "Total depreciación acumulada no registrada", value: "RD$ 3,000,000.00" }
      ],
      steps: [
        {
          stepNumber: 1,
          stepTitle: "Calcular el impacto acumulado del error",
          explanation: "Multiplicamos la cuota de depreciación anual por los dos años en que el sistema contable omitió el cálculo.",
          calculation: "RD$ 1,500,000 × 2 años = RD$ 3,000,000.00"
        },
        {
          stepNumber: 2,
          stepTitle: "Identificar qué cuentas estuvieron mal en el pasado",
          explanation: "En 2024 y 2025 las utilidades se reportaron RD$ 3,000,000 más altas de lo real (porque no se registró el gasto de depreciación), y el activo en el balance general quedó inflado.",
          calculation: "Utilidades pasadas = Sobreestimadas en RD$ 3,000,000"
        },
        {
          stepNumber: 3,
          stepTitle: "Aplicar la solución según la NIC 8",
          explanation: "No tocamos la cuenta de gastos del año 2026. Hacemos un débito a 'Utilidades Acumuladas' para rebajar esa ganancia inflada del pasado, y acreditamos 'Depreciación Acumulada' para que la maquinaria quede en su valor real."
        }
      ],
      finalResult: "Ajuste patrimonial por RD$ 3,000,000.00 directamente al balance inicial de Utilidades Acumuladas al 1 de enero de 2026."
    },
    practicalCase: {
      title: "Ejemplo 2: Caso Práctico de la Vida Real",
      companyContext: "Ferretería Central Dominicana S.A., con sede y sucursales comerciales.",
      whatHappened: "Al hacer el inventario físico de cierre del 2025, contaron dos veces un embarque de varillas de acero por valor de RD$ 1,800,000 que estaba en tránsito hacia el almacén. Esto provocó que el costo de ventas del 2025 se calculara menor y la ganancia neta pareciera mucho más grande.",
      decisionAndImpact: "En mayo de 2026 descubren el doble conteo. En lugar de registrar una pérdida gigante en las compras del 2026, el contador aplicó la NIC 8: corrigió el inventario inicial del 2026 reduciéndolo en RD$ 1,800,000 y rebajó las ganancias retenidas de los socios del año 2025."
    },
    journalEntry: {
      title: "Ejemplo 3: Asiento Contable (Libro Diario)",
      description: "Asiento de ajuste de períodos anteriores para corregir la depreciación omitida de los años 2024 y 2025:",
      lines: [
        {
          code: "3210-05",
          account: "Utilidades Acumuladas (Ajuste Períodos Anteriores - NIC 8)",
          debit: 3000000,
          credit: undefined,
          note: "Disminuye el patrimonio para corregir la utilidad pasada"
        },
        {
          code: "1230-90",
          account: "Depreciación Acumulada - Maquinarias y Equipos",
          debit: undefined,
          credit: 3000000,
          note: "Aumenta la depreciación para reflejar el desgaste real"
        }
      ],
      rationale: "¿Por qué se debitó y acreditó así? Se debita Utilidades Acumuladas porque el patrimonio de la empresa tenía RD$ 3,000,000 ficticios que correspondían a gastos no deducidos en años pasados. Al debitar una cuenta de patrimonio, su saldo disminuye. Se acredita Depreciación Acumulada (cuenta de activo de naturaleza acreedora) para restarle ese desgaste al valor de la maquinaria en el balance."
    },
    quiz: [
      {
        id: "q52-1",
        question: "De acuerdo con la NIC 8, ¿cómo debe reconocerse la corrección de un error material de un período anterior?",
        options: [
          "Como un gasto financiero extraordinario en el Estado de Resultados del año en que se descubre.",
          "De forma prospectiva distribuyendo la pérdida en los siguientes cinco ejercicios fiscales.",
          "Cargándolo a la cuenta de reserva legal sin modificar los estados anteriores.",
          "Mediante reexpresión retroactiva afectando el saldo inicial de las utilidades retenidas del período más antiguo presentado."
        ],
        correctIndex: 3,
        explanation: "La NIC 8 prohíbe imputar el error al ejercicio corriente. Exige reexpresión retroactiva ajustando las ganancias retenidas al inicio del ejercicio."
      },
      {
        id: "q52-2",
        question: "¿Cuál es la diferencia fundamental entre una corrección de error y un cambio en una estimación contable?",
        options: [
          "El cambio en estimación es retroactivo y el error es prospectivo.",
          "El error proviene del fallo o mala fe al usar información existente, mientras que la estimación surge de nueva información o experiencia y se aplica prospectivamente.",
          "Los errores solo los determina la Dirección General de Impuestos Internos.",
          "No existe ninguna diferencia; ambos conceptos son sinónimos bajo NIIF para PYMES."
        ],
        correctIndex: 1,
        explanation: "Las estimaciones se revisan ante nuevos datos (prospectivo). Los errores implican que se ignoró o manipuló información que estaba disponible en ese momento (retroactivo)."
      },
      {
        id: "q52-3",
        question: "¿Por qué no se debe incluir el ajuste de un error de años anteriores dentro del costo de ventas o gastos operativos del año corriente?",
        options: [
          "Porque alteraría la comparabilidad y falsearía los indicadores de rentabilidad y eficiencia del período actual.",
          "Porque el software contable no permite registrar débitos en cuentas de costo.",
          "Porque está prohibido por el Código de Comercio de 1884.",
          "Porque generaría una multa automática por parte de la cámara de comercio."
        ],
        correctIndex: 0,
        explanation: "Incluirlo en el año actual distorsionaría el margen operativo y la utilidad neta de la gestión vigente, castigándola por errores de administraciones o ejercicios pasados."
      }
    ]
  },
  {
    id: "5-3-disposicion-segmento-negocio",
    number: "5.3",
    title: "Contabilización de la disposición de un segmento de un negocio",
    standard: "NIIF 5 (Operaciones discontinuadas y activos mantenidos para la venta)",
    conceptTitle: "¿Qué se hace cuando la empresa decide vender o cerrar una de sus divisiones?",
    humanConcept: "Ocurre cuando una compañía decide desprenderse, vender o cerrar definitivamente una línea de productos importante, una sucursal o una división de negocios completa que operaba de forma autónoma.",
    humanExplanation: "Pensemos en un consorcio empresarial que tiene dos ramas: supermercados de alimentos y farmacias. Si la directiva decide vender todas las farmacias para quedarse únicamente con los supermercados, esa división de farmacias pasa a ser una 'Operación Discontinuada'. ¿Por qué la norma NIIF 5 le da tanta importancia? Porque si juntamos las ventas de las farmacias con las ventas de los supermercados en el mismo renglón, los accionistas creerían que la empresa seguirá vendiendo todo eso en los próximos años, cuando en verdad las farmacias ya no van a estar. La NIIF 5 ordena: 'Muestra los ingresos y gastos de la división que se va en un solo renglón separado al final del estado de resultados: Resultado neto de operaciones discontinuadas'. Además, desde el momento en que se pone a la venta, los edificios y equipos de esa división dejan de depreciarse.",
    keyPoints: [
      "Segmento Separable: Es una parte de la empresa cuyos ingresos, gastos y activos se pueden diferenciar con claridad.",
      "Operación Discontinuada: Se presenta en un único renglón neto de impuestos para no confundir al lector sobre el futuro del negocio.",
      "Detención de la depreciación: Al clasificarse como mantenido para la venta, el activo no se deprecia más."
    ],
    stepByStepExercise: {
      title: "Ejemplo Principal: Ejercicio Práctico",
      scenario: "El consorcio 'Inversiones Quisqueya S.A.' decide vender su División Farmacéutica a un grupo extranjero por un precio acordado de RD$ 45,000,000 en efectivo.",
      initialData: [
        { label: "Activos totales de la división (inventarios, locales, licencias)", value: "RD$ 38,000,000.00" },
        { label: "Deudas comerciales que el comprador acepta asumir", value: "RD$ 11,000,000.00" },
        { label: "Valor en libros neto de la división (38M - 11M)", value: "RD$ 27,000,000.00" },
        { label: "Precio de venta cobrado en banco", value: "RD$ 45,000,000.00" },
        { label: "Gastos legales y de corretaje de la venta", value: "RD$ 1,500,000.00" }
      ],
      steps: [
        {
          stepNumber: 1,
          stepTitle: "Calcular el valor contable neto de lo que se entrega",
          explanation: "Restamos los pasivos que se lleva el comprador del valor de los activos que le entregamos.",
          calculation: "RD$ 38,000,000 (Activos) - RD$ 11,000,000 (Pasivos) = RD$ 27,000,000 (Valor Neto)"
        },
        {
          stepNumber: 2,
          stepTitle: "Calcular el cobro neto efectivo",
          explanation: "Tomamos el precio de venta acordado y le deducimos los honorarios de los abogados y banqueros que cerraron la transacción.",
          calculation: "RD$ 45,000,000 (Cobro) - RD$ 1,500,000 (Gastos) = RD$ 43,500,000 netos"
        },
        {
          stepNumber: 3,
          stepTitle: "Determinar la ganancia en la disposición del segmento",
          explanation: "Restamos el valor neto de la división al valor neto que nos quedó tras la venta.",
          calculation: "RD$ 43,500,000 - RD$ 27,000,000 = RD$ 16,500,000.00 de ganancia neta"
        }
      ],
      finalResult: "Ganancia neta en venta de segmento: RD$ 16,500,000.00 (reportada bajo 'Operaciones Discontinuadas' según NIIF 5)."
    },
    practicalCase: {
      title: "Ejemplo 2: Caso Práctico de la Vida Real",
      companyContext: "Cadena de Tiendas Caribeña S.A., con tiendas de ropa y un canal de venta por catálogo.",
      whatHappened: "Debido al auge del comercio electrónico, las ventas por catálogo físico se volvieron totalmente deficitarias. La asamblea de accionistas aprobó en marzo desmantelar y abandonar definitivamente esa división en un plazo de 6 meses.",
      decisionAndImpact: "Siguiendo la NIIF 5, el contador reclasificó todos los costos de liquidación del personal y el castigo de los catálogos impresos dentro de 'Pérdidas de Operaciones Discontinuadas', permitiendo que los inversionistas vean que las tiendas físicas de ropa siguen siendo sanas y rentables."
    },
    journalEntry: {
      title: "Ejemplo 3: Asiento Contable (Libro Diario)",
      description: "Registro de la venta de la división farmacéutica, baja de activos y pasivos, y reconocimiento de la ganancia:",
      lines: [
        {
          code: "1110-02",
          account: "Bancos (Cobro venta de división)",
          debit: 45000000,
          credit: undefined,
          note: "Entrada del dinero acordado"
        },
        {
          code: "2100-50",
          account: "Pasivos Comerciales de la División (Cancelados/Transferidos)",
          debit: 11000000,
          credit: undefined,
          note: "Cancelamos las deudas que asume el comprador"
        },
        {
          code: "1200-80",
          account: "Activos Totales de la División Farmacéutica",
          debit: undefined,
          credit: 38000000,
          note: "Damos de baja a todos los bienes entregados"
        },
        {
          code: "2150-10",
          account: "Cuentas por Pagar - Gastos Legales y de Venta",
          debit: undefined,
          credit: 1500000,
          note: "Obligación de pago a los abogados y asesores"
        },
        {
          code: "4310-01",
          account: "Ganancia en Disposición de Segmento (NIIF 5)",
          debit: undefined,
          credit: 16500000,
          note: "Ganancia a presentar en operaciones discontinuadas"
        }
      ],
      rationale: "¿Por qué se debitó y acreditó así? Se debita Bancos porque ingresaron RD$ 45 millones a la cuenta corriente; se debitan los Pasivos porque ya la empresa no tiene que pagarlos (los pagará el nuevo dueño); se acreditan los Activos por RD$ 38 millones para eliminarlos de nuestros libros contables; se acredita la cuenta por pagar a los abogados; y se acredita la Ganancia porque representa un incremento en el resultado del ejercicio."
    },
    quiz: [
      {
        id: "q53-1",
        question: "¿Cómo se debe presentar el resultado de un segmento calificado como operación discontinuada en el Estado de Resultados según NIIF 5?",
        options: [
          "Sumado directamente a los ingresos por ventas ordinarias del período.",
          "Oculto en notas sin afectar los estados numéricos.",
          "En un importe único que comprende el resultado operativo del segmento y la ganancia o pérdida por disposición, neto de impuestos.",
          "Como un ajuste al capital social suscrito y pagado."
        ],
        correctIndex: 2,
        explanation: "La NIIF 5, párrafo 33, estipula que la entidad revelará un importe único en el estado del resultado global que comprenda el total del resultado después de impuestos de las actividades interrumpidas."
      },
      {
        id: "q53-2",
        question: "¿Qué ocurre con la depreciación y amortización de los activos fijos una vez clasificados como 'mantenidos para la venta'?",
        options: [
          "Cesa de inmediato la depreciación y amortización a partir de la fecha de clasificación.",
          "Se duplica la tasa de depreciación para acelerar el castigo.",
          "Continúa depreciándose normalmente hasta que se firme el contrato final.",
          "Se transfiere a una cuenta de gastos administrativos."
        ],
        correctIndex: 0,
        explanation: "De acuerdo con el párrafo 25 de la NIIF 5, la entidad no depreciará ni amortizará el activo no corriente mientras esté clasificado como mantenido para la venta."
      },
      {
        id: "q53-3",
        question: "¿Cuál es la regla de medición para los activos de un segmento clasificado como mantenido para la venta?",
        options: [
          "Al costo histórico revaluado por el índice de inflación.",
          "Siempre al valor de reposición a nuevo.",
          "Al valor nominal acordado con la gerencia general.",
          "Al menor entre su importe en libros y su valor razonable menos los costos de venta."
        ],
        correctIndex: 3,
        explanation: "La NIIF 5 establece el principio prudencial de medir al menor entre el valor en libros y el valor razonable deducidos los costos necesarios para efectuar la enajenación."
      }
    ]
  },
  {
    id: "5-4-liquidacion-deuda",
    number: "5.4",
    title: "Liquidación de deuda",
    standard: "NIIF 9 (Instrumentos Financieros) / CINIIF 19",
    conceptTitle: "¿Cómo se cancela contablemente una deuda cuando no se paga en efectivo tradicional?",
    humanConcept: "Ocurre cuando una empresa da de baja un pasivo financiero porque la obligación se extingue, ya sea porque se pagó por completo, porque el acreedor aceptó recibir una propiedad a cambio (dación en pago), o porque se le entregaron acciones de la propia empresa a cambio de la deuda.",
    humanExplanation: "A veces las empresas tienen problemas temporales de liquidez y no tienen efectivo en el banco para saldar un préstamo de RD$ 22,000,000. Pero resulta que la empresa tiene un terreno que compró hace años por RD$ 15,000,000, que hoy en día vale mucho más. La empresa se sienta con el banco y le dice: 'No tengo los 22 millones en efectivo, pero te entrego este terreno y me cancelas la deuda por completo'. El banco acepta. La norma NIIF 9 dice que cuando esto pasa, debemos eliminar la deuda del balance, entregar el activo a su costo contable, y la diferencia positiva (en este caso RD$ 7,000,000) es una ganancia legítima por liquidación de deuda que va al estado de resultados.",
    keyPoints: [
      "Baja en Cuentas: El pasivo solo se borra cuando legalmente la obligación ya no existe.",
      "Dación en Pago: Pagar deudas entregando bienes (inmuebles, vehículos, maquinarias).",
      "Capitalización de Deuda (CINIIF 19): Cuando el banco o acreedor se convierte en socio recibiendo acciones de la empresa."
    ],
    stepByStepExercise: {
      title: "Ejemplo Principal: Ejercicio Práctico",
      scenario: "La constructora 'Obras del Cibao S.R.L.' tiene un pagaré bancario vencido por RD$ 22,000,000. Llega a un acuerdo formal de dación en pago con el banco entregando un terreno comercial.",
      initialData: [
        { label: "Deuda total por pagar registrada en libros", value: "RD$ 22,000,000.00" },
        { label: "Costo original del terreno en la contabilidad", value: "RD$ 15,000,000.00" },
        { label: "Valor de tasación aceptado por el banco", value: "RD$ 22,000,000.00" }
      ],
      steps: [
        {
          stepNumber: 1,
          stepTitle: "Verificar la extinción jurídica del pasivo",
          explanation: "El banco firma el acta de saldo y descargo total del préstamo por RD$ 22,000,000. Ese pasivo ya no existe.",
          calculation: "Pasivo cancelado = RD$ 22,000,000.00"
        },
        {
          stepNumber: 2,
          stepTitle: "Dar de baja el activo entregado a su costo en libros",
          explanation: "El terreno estaba anotado en nuestra contabilidad a su costo de adquisición histórico de RD$ 15,000,000.",
          calculation: "Costo del activo entregado = RD$ 15,000,000.00"
        },
        {
          stepNumber: 3,
          stepTitle: "Determinar la ganancia en la liquidación",
          explanation: "Restamos el costo del terreno que entregamos al monto de la deuda que nos perdonaron y cancelaron.",
          calculation: "RD$ 22,000,000 (Deuda saldada) - RD$ 15,000,000 (Costo terreno) = RD$ 7,000,000.00"
        }
      ],
      finalResult: "Ganancia en liquidación de deuda: RD$ 7,000,000.00 registrada en otros ingresos conforme a la NIIF 9."
    },
    practicalCase: {
      title: "Ejemplo 2: Caso Práctico de la Vida Real",
      companyContext: "Transportes del Valle C. por A., con flota de camiones de carga pesada.",
      whatHappened: "Debido a una crisis económica temporal, la empresa acumuló una deuda de RD$ 10,000,000 con un proveedor de repuestos. Tras una negociación amistosa, el proveedor aceptó un pago único e inmediato de RD$ 8,000,000 de contado y condonó (perdonó) los RD$ 2,000,000 restantes a cambio de cerrar el caso.",
      decisionAndImpact: "El contador canceló la deuda completa de RD$ 10,000,000, acreditó RD$ 8,000,000 que salieron del banco, y reconoció los RD$ 2,000,000 perdonados como una Ganancia por Extinción de Pasivo en el ejercicio."
    },
    journalEntry: {
      title: "Ejemplo 3: Asiento Contable (Libro Diario)",
      description: "Registro de la cancelación del préstamo bancario mediante entrega del terreno en dación en pago:",
      lines: [
        {
          code: "2110-05",
          account: "Préstamos Bancarios por Pagar",
          debit: 22000000,
          credit: undefined,
          note: "Cancelamos la deuda por el saldo total del préstamo"
        },
        {
          code: "1210-01",
          account: "Terrenos Comerciales (Propiedades)",
          debit: undefined,
          credit: 15000000,
          note: "Damos de baja al terreno que se le entrega al banco"
        },
        {
          code: "4210-40",
          account: "Ganancia en Liquidación de Deuda (NIIF 9)",
          debit: undefined,
          credit: 7000000,
          note: "Beneficio generado por saldar la deuda por encima del costo"
        }
      ],
      rationale: "¿Por qué se debitó y acreditó así? Se debita Préstamos Bancarios por Pagar porque los pasivos disminuyen por el lado del débito al quedar extinguidos; se acredita Terrenos porque el activo sale de la empresa y los activos disminuyen por el crédito; y se acredita la Ganancia en Liquidación de Deuda porque es un ingreso financiero que aumenta los resultados del negocio."
    },
    quiz: [
      {
        id: "q54-1",
        question: "Bajo la NIIF 9, ¿cuándo debe una entidad dar de baja en cuentas un pasivo financiero?",
        options: [
          "Cuando las utilidades del período no sean suficientes para pagar los intereses.",
          "Únicamente cuando la obligación se haya extinguido, es decir, cuando se haya pagado, cancelado o expirado legalmente.",
          "Cuando la gerencia considere que el acreedor ya no reclamará el cobro.",
          "Al cumplirse tres años de haber suscrito el contrato original."
        ],
        correctIndex: 1,
        explanation: "El párrafo 3.3.1 de la NIIF 9 exige que la obligación contractual esté legalmente extinguida, pagada o prescrita para justificar su eliminación del balance."
      },
      {
        id: "q54-2",
        question: "Si se cancela una deuda de RD$ 5,000,000 entregando un vehículo cuyo valor neto en libros es de RD$ 3,800,000, ¿dónde se refleja la diferencia de RD$ 1,200,000?",
        options: [
          "Como un ingreso diferido que se amortiza en diez años.",
          "Como una deducción directa de las reservas voluntarias.",
          "Como una ganancia por liquidación de deuda en el Estado de Resultados del período.",
          "Como un mayor valor de las cuentas por cobrar a clientes."
        ],
        correctIndex: 2,
        explanation: "La diferencia positiva entre el pasivo extinguido y el valor del activo transferido se reconoce inmediatamente como resultado del período en el renglón de otros ingresos/ganancias financieras."
      },
      {
        id: "q54-3",
        question: "Según la CINIIF 19, ¿cómo se deben medir los instrumentos de patrimonio (acciones) emitidos para extinguir una obligación financiera?",
        options: [
          "A su valor razonable, a menos que este no pueda ser medido con fiabilidad, en cuyo caso se medirá el pasivo cancelado.",
          "Siempre al valor nominal de las acciones sin importar su cotización.",
          "Al costo histórico de constitución de la compañía.",
          "Al valor en libros del inventario en almacén."
        ],
        correctIndex: 0,
        explanation: "La CINIIF 19 establece como principio general que las acciones emitidas se valúan a su valor razonable en la fecha de extinción del pasivo."
      }
    ]
  }
];

export const CONCLUSION_DATA = {
  id: "conclusion-general",
  number: "5.5",
  title: "Conclusión General de la Unidad V",
  humanSummary: "Al llegar al final de este recorrido, podemos ver con total claridad que la Contabilidad Superior no es simplemente sumar y restar números en un libro diario. Es una disciplina de criterio, prudencia y ética profesional.",
  humanExplanation: "En esta Unidad V aprendimos que cuando en una empresa ocurren eventos no habituales o del pasado, la tentación de maquillar los estados financieros puede ser muy grande. Por ejemplo, esconder una pérdida diciendo que fue un 'accidente extraordinario', o intentar meter los errores de años pasados dentro de los gastos de hoy para pagar menos impuestos en el año corriente. Las Normas Internacionales de Información Financiera (NIIF y NIC) se crearon precisamente para evitar eso: obligan a que el contador sea transparente. Si hubo un error del pasado, se corrige con la NIC 8 en las utilidades acumuladas; si se vendió o cerró una división, se presenta de forma separada con la NIIF 5; si se canceló una deuda bancaria con un inmueble o acciones, se calcula la ganancia real con la NIIF 9; y si ocurrió un suceso atípico, se revela con honestidad en las notas según la NIC 1.",
  keyPoints: [
    "Protege la verdad financiera: Aislar las ganancias o pérdidas atípicas evita engañar a los socios con utilidades infladas y previene repartir dividendos ficticios sobre negocios que en realidad cayeron operativamente.",
    "Decisiones acertadas y transparentes: Permite a los bancos e inversionistas evaluar la capacidad real y recurrente del negocio de generar flujos de efectivo en el futuro sin distorsiones aisladas.",
    "Responsabilidad ética y fiscal: Defender la fe pública contable ante la Dirección General de Impuestos Internos (DGII) y los auditores externos, aplicando cada norma con rigor y sin alterar los períodos fiscales.",
    "Compromiso académico UFHEC: Como futuros profesionales formados por la maestra Ruth Aquino, el compromiso de todos nosotros como estudiantes es aplicar estas normas internacionales con el más alto estándar de excelencia y honestidad."
  ]
};

export interface ReferenceItem {
  id: string;
  category: 'Normas Internacionales (NIIF / NIC)' | 'Marco Histórico y Comparado' | 'Legislación Tributaria Nacional' | 'Textos Académicos de Referencia';
  standardOrTopic: string;
  apa7Citation: string;
  notes: string;
  url?: string;
}

export const BIBLIOGRAPHY_DATA: ReferenceItem[] = [
  {
    id: "ref-nic1",
    category: "Normas Internacionales (NIIF / NIC)",
    standardOrTopic: "Tema 5.1 · Partidas Extraordinarias vs. Ordinarias",
    apa7Citation: "Fundación IFRS. (2023). Norma Internacional de Contabilidad 1: Presentación de estados financieros (NIC 1). En Normas Internacionales de Información Financiera. International Accounting Standards Board (IASB). https://www.ifrs.org",
    notes: "Fundamento técnico del párrafo 87 de la NIC 1 que prohíbe la clasificación y presentación de partidas como 'extraordinarias' en el estado de resultados y notas.",
    url: "https://www.ifrs.org"
  },
  {
    id: "ref-nic8",
    category: "Normas Internacionales (NIIF / NIC)",
    standardOrTopic: "Tema 5.2 · Ajustes de Períodos Anteriores",
    apa7Citation: "Fundación IFRS. (2023). Norma Internacional de Contabilidad 8: Políticas contables, cambios en las estimaciones contables y errores (NIC 8). En Normas Internacionales de Información Financiera. International Accounting Standards Board (IASB). https://www.ifrs.org",
    notes: "Normativa oficial para la reexpresión retroactiva de errores materiales y cambios de políticas contables con impacto directo en utilidades acumuladas.",
    url: "https://www.ifrs.org"
  },
  {
    id: "ref-niif5",
    category: "Normas Internacionales (NIIF / NIC)",
    standardOrTopic: "Tema 5.3 · Disposición de un Segmento de Negocio",
    apa7Citation: "Fundación IFRS. (2023). Norma Internacional de Información Financiera 5: Activos no corrientes mantenidos para la venta y operaciones discontinuadas (NIIF 5). International Accounting Standards Board (IASB). https://www.ifrs.org",
    notes: "Regula los criterios de clasificación como operación discontinuada, valuación al menor entre valor en libros y valor razonable menos costos de venta, y revelación neta de impuestos.",
    url: "https://www.ifrs.org"
  },
  {
    id: "ref-niif9",
    category: "Normas Internacionales (NIIF / NIC)",
    standardOrTopic: "Tema 5.4 · Liquidación y Extinción de Pasivos",
    apa7Citation: "Fundación IFRS. (2023). Norma Internacional de Información Financiera 9: Instrumentos financieros (NIIF 9). International Accounting Standards Board (IASB). https://www.ifrs.org",
    notes: "Bases para la baja en cuentas de pasivos financieros (párrafo 3.3.1) y reconocimiento inmediato del resultado por extinción de la deuda en resultados.",
    url: "https://www.ifrs.org"
  },
  {
    id: "ref-ciniif19",
    category: "Normas Internacionales (NIIF / NIC)",
    standardOrTopic: "Tema 5.4 · Canje de Deuda por Acciones",
    apa7Citation: "Comité de Interpretaciones de las NIIF. (2019). Interpretación CINIIF 19: Cancelación de pasivos financieros con instrumentos de patrimonio. Fundación IFRS. https://www.ifrs.org",
    notes: "Dictamina la medición al valor razonable de las acciones emitidas para cancelar una deuda y el reconocimiento de la diferencia en pérdidas o ganancias.",
    url: "https://www.ifrs.org"
  },
  {
    id: "ref-apb30",
    category: "Marco Histórico y Comparado",
    standardOrTopic: "Tema 5.1 · Antecedentes Históricos de Partidas Extraordinarias",
    apa7Citation: "Accounting Principles Board. (1973). Reporting the results of operations: Reporting the effects of disposal of a segment of a business, and extraordinary, unusual and infrequently occurring events and transactions (APB Opinion No. 30). American Institute of Certified Public Accountants (AICPA).",
    notes: "Doctrina histórica de la contabilidad norteamericana que definía las condiciones concurrentes de alta inusualidad y baja frecuencia de ocurrencia.",
    url: "https://www.aicpa-cima.com"
  },
  {
    id: "ref-dgii",
    category: "Legislación Tributaria Nacional",
    standardOrTopic: "Contexto Tributario República Dominicana",
    apa7Citation: "Congreso Nacional de la República Dominicana. (1992). Ley No. 11-92 que instituye el Código Tributario de la República Dominicana y sus reglamentos de aplicación (Decreto No. 139-98). Dirección General de Impuestos Internos (DGII). https://dgii.gov.do",
    notes: "Marco legal para el tratamiento del Impuesto sobre la Renta (ISR - Tasa del 27%) sobre ganancias y pérdidas de capital, y las rectificativas ante la DGII.",
    url: "https://dgii.gov.do"
  },
  {
    id: "ref-kieso",
    category: "Textos Académicos de Referencia",
    standardOrTopic: "Manual de Contabilidad Superior y Avanzada",
    apa7Citation: "Kieso, D. E., Weygandt, J. J., & Warfield, T. D. (2020). Contabilidad intermedia (16.ª ed.). Editorial Limusa Wiley.",
    notes: "Texto base universitario para el análisis de transacciones no ordinarias, corrección de errores contables de años precedentes y reestructuraciones de deuda.",
    url: "https://www.wiley.com"
  },
  {
    id: "ref-horngren",
    category: "Textos Académicos de Referencia",
    standardOrTopic: "Estructura de Estados Financieros y Revelaciones",
    apa7Citation: "Horngren, C. T., Harrison, W. T., & Oliver, M. S. (2010). Contabilidad (8.ª ed.). Pearson Educación.",
    notes: "Referencia para el registro de asientos de diario, principios de correlación de ingresos y gastos, y asientos de cierre y ajuste.",
    url: "https://www.pearson.com"
  }
];

