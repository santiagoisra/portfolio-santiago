export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  role: string;
  year: string;
  duration: string;
  url?: string;
  heroColor: string;
  tags: string[];
  summary: string;
  challenge: string;
  research: ResearchSection;
  insights: InsightSection;
  design: DesignSection;
  results: ResultsSection;
}

export interface ResearchSection {
  methods: string[];
  participants?: string;
  description: string;
  findings: Finding[];
  susScore?: { before: number; after: number };
  heatmapDescription?: string;
}

export interface Finding {
  title: string;
  description: string;
  severity: "critical" | "high" | "medium" | "low";
}

export interface InsightSection {
  personas: Persona[];
  journeyMapSteps: JourneyStep[];
}

export interface Persona {
  name: string;
  age: number;
  occupation: string;
  quote: string;
  goals: string[];
  frustrations: string[];
  techLevel: "bajo" | "medio" | "alto";
}

export interface JourneyStep {
  phase: string;
  action: string;
  emotion: "positiva" | "neutral" | "negativa" | "muy negativa";
  painPoint?: string;
  opportunity?: string;
}

export interface DesignSection {
  description: string;
  iterations: number;
  keyDecisions: string[];
}

export interface ResultsSection {
  metrics: Metric[];
  testimonial?: string;
}

export interface Metric {
  label: string;
  before: string;
  after: string;
  improvement: string;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "totalcoin",
    title: "Totalcoin",
    subtitle: "Ecosistema fintech: billetera digital, backoffice y pagos",
    role: "UX Lead",
    year: "2022–presente",
    duration: "18+ meses",
    url: "https://totalcoin.com",
    heroColor: "from-blue-600/20 to-cyan-500/10",
    tags: ["Fintech", "Mobile App", "Web App", "Backoffice", "Design System"],
    summary:
      "Lideré el diseño UX completo de una plataforma fintech con billetera digital, apps mobile, backoffice de operaciones, sistema de pagos PCI y módulo contable. Mas de 8 productos diseñados de punta a punta.",
    challenge:
      "Totalcoin necesitaba escalar de una billetera simple a un ecosistema completo de pagos. Los usuarios abandonaban flujos críticos como onboarding y transferencias. Los comercios no entendían el backoffice y el equipo de soporte recibía +200 tickets semanales por problemas de usabilidad.",
    research: {
      methods: [
        "Heatmaps con Clarity",
        "Evaluaciones heurísticas",
        "Entrevistas a usuarios",
        "Tests de usabilidad moderados",
        "Encuestas SUS",
        "Análisis de tickets de soporte",
        "Métricas de comportamiento",
      ],
      participants: "32 usuarios finales + 15 comercios + 8 operadores internos",
      description:
        "Se realizaron estudios de comportamiento con Microsoft Clarity en los flujos críticos de la app. Se condujeron entrevistas en profundidad con usuarios finales y responsables de comercios. Se midió la usabilidad con System Usability Scale (SUS) antes y después de cada iteración.",
      findings: [
        {
          title: "Abandono en onboarding del 68%",
          description:
            "Los usuarios abandonaban el proceso de verificación de identidad (KYC) en el paso 3 de 5. El formulario pedía datos que los usuarios no tenían a mano (CUIL, foto de DNI).",
          severity: "critical",
        },
        {
          title: "Confusión en flujo de transferencias",
          description:
            "El 45% de los usuarios no distinguía entre CVU y alias. Los heatmaps de Clarity mostraban clicks repetidos en elementos no interactivos buscando copiar el CVU.",
          severity: "critical",
        },
        {
          title: "Backoffice: tareas repetitivas sin atajos",
          description:
            "Los operadores tardaban 4.2 minutos promedio en procesar una conciliación manual. Existían 12 pasos para una tarea que debería resolverse en 3.",
          severity: "high",
        },
        {
          title: "Pagos con QR: fricción en el cobro",
          description:
            "Los comercios no entendían la diferencia entre QR estático y dinámico. El 30% generaba el tipo incorrecto, causando errores de conciliación.",
          severity: "high",
        },
        {
          title: "Seguridad vs. usabilidad en 2FA",
          description:
            "La activación de 2FA tenía un flujo de 8 pasos con terminología técnica que generaba abandono del 52%.",
          severity: "medium",
        },
      ],
      susScore: { before: 54, after: 78 },
      heatmapDescription:
        "Los heatmaps de Clarity revelaron zonas de frustración: clicks repetidos en el campo CVU (no copiable), scroll excesivo en el historial de movimientos, y rage clicks en el botón de adelanto de saldo cuando la carga era lenta.",
    },
    insights: {
      personas: [
        {
          name: "Martín",
          age: 28,
          occupation: "Freelancer / Programador",
          quote: "Necesito mover plata rápido entre cuentas sin pensar",
          goals: [
            "Transferir dinero al instante",
            "Ver historial claro de movimientos",
            "Pagar servicios desde la app",
          ],
          frustrations: [
            "Procesos de verificación largos",
            "No poder copiar el CVU fácilmente",
            "Notificaciones confusas",
          ],
          techLevel: "alto",
        },
        {
          name: "Laura",
          age: 42,
          occupation: "Dueña de kiosco",
          quote: "Quiero cobrar con QR sin que sea un lío para mis clientes",
          goals: [
            "Cobrar rápido con QR",
            "Ver resumen de ventas del día",
            "Asociar el POS sin ayuda técnica",
          ],
          frustrations: [
            "No entiende tipos de QR",
            "El backoffice es intimidante",
            "Los reportes no son claros",
          ],
          techLevel: "bajo",
        },
      ],
      journeyMapSteps: [
        {
          phase: "Descubrimiento",
          action: "Descarga la app desde el store",
          emotion: "positiva",
        },
        {
          phase: "Onboarding",
          action: "Completa datos personales",
          emotion: "neutral",
        },
        {
          phase: "Verificación",
          action: "Sube foto de DNI y selfie",
          emotion: "negativa",
          painPoint: "No tiene el DNI a mano, abandona",
        },
        {
          phase: "Primer uso",
          action: "Intenta cargar saldo",
          emotion: "negativa",
          painPoint: "No encuentra cómo ingresar dinero",
          opportunity: "Guía contextual de primer uso",
        },
        {
          phase: "Transferencia",
          action: "Busca enviar dinero a un contacto",
          emotion: "neutral",
        },
        {
          phase: "CVU / Alias",
          action: "Necesita compartir su CVU",
          emotion: "muy negativa",
          painPoint: "No puede copiar, no entiende alias vs CVU",
          opportunity: "Botón de copiar + explicación inline",
        },
        {
          phase: "Uso regular",
          action: "Revisa movimientos y balance",
          emotion: "neutral",
        },
        {
          phase: "Pago QR",
          action: "Escanea QR para pagar en comercio",
          emotion: "positiva",
          opportunity: "Confirmación visual + historial inmediato",
        },
      ],
    },
    design: {
      description:
        "Se rediseñaron los flujos críticos con un enfoque mobile-first. Se creó un design system completo con componentes reutilizables. Se implementó una arquitectura de información que prioriza las acciones más frecuentes (transferir, pagar, cobrar) en la home.",
      iterations: 4,
      keyDecisions: [
        "Onboarding progresivo: se permite usar la app con funciones limitadas sin completar KYC, motivando al usuario a verificarse cuando necesita funciones avanzadas",
        "CVU con botón de copiar prominente y tooltip explicativo al hacer hover sobre 'alias'",
        "QR unificado: un solo botón 'Cobrar' que detecta automáticamente el tipo correcto de QR según el contexto",
        "Backoffice: dashboard con métricas clave visibles al entrar + atajos de teclado para operadores frecuentes",
        "2FA simplificado: de 8 pasos a 3 con lenguaje coloquial y feedback visual en cada paso",
      ],
    },
    results: {
      metrics: [
        {
          label: "Tasa de completado onboarding",
          before: "32%",
          after: "71%",
          improvement: "+122%",
        },
        {
          label: "Tiempo de conciliación (backoffice)",
          before: "4.2 min",
          after: "1.1 min",
          improvement: "-74%",
        },
        {
          label: "Tickets de soporte semanales",
          before: "200+",
          after: "~80",
          improvement: "-60%",
        },
        {
          label: "Score SUS",
          before: "54",
          after: "78",
          improvement: "+44%",
        },
        {
          label: "Errores de QR en comercios",
          before: "30%",
          after: "8%",
          improvement: "-73%",
        },
      ],
      testimonial:
        "Desde que rediseñamos el onboarding, duplicamos la retención en la primera semana.",
    },
  },
  {
    slug: "entrenadorpro",
    title: "EntrenadorPro",
    subtitle: "Sistema de gestión para entrenadores personales",
    role: "UX Lead",
    year: "2026",
    duration: "4 meses",
    url: "https://entrenadorpro.com.ar",
    heroColor: "from-emerald-600/20 to-green-500/10",
    tags: ["SaaS", "Web App", "Mobile", "Fitness"],
    summary:
      "Diseñé una plataforma que simplifica la gestión diaria de entrenadores personales: agenda, rutinas, seguimiento de alumnos y cobros. De herramientas dispersas a un solo sistema integrado.",
    challenge:
      "Los entrenadores personales gestionaban su negocio con WhatsApp, Excel y notas en papel. Perdían tiempo en tareas administrativas en lugar de entrenar. No existía una herramienta pensada para el contexto argentino del fitness.",
    research: {
      methods: [
        "Entrevistas en profundidad",
        "Shadowing en gimnasios",
        "Benchmark competitivo",
        "Card sorting",
        "Tests de usabilidad",
        "Encuestas SUS",
      ],
      participants: "18 entrenadores personales + 25 alumnos",
      description:
        "Se realizaron entrevistas en gimnasios de CABA y GBA, observando la rutina diaria de los entrenadores. Se mapearon todas las herramientas que usaban y los puntos de fricción. Se hizo card sorting para definir la arquitectura de información.",
      findings: [
        {
          title: "70% del tiempo en tareas no-entrenamiento",
          description:
            "Los entrenadores dedicaban más de 2 horas diarias a armar rutinas en Excel, responder WhatsApps y gestionar pagos manualmente.",
          severity: "critical",
        },
        {
          title: "Pérdida de alumnos por falta de seguimiento",
          description:
            "Sin un sistema de tracking, los entrenadores no podían demostrar progreso a sus alumnos. El 40% abandonaba en el primer mes.",
          severity: "high",
        },
        {
          title: "Cobros informales generaban morosidad",
          description:
            "El 60% cobraba en efectivo sin control. No tenían registro de quién debía y quién no.",
          severity: "high",
        },
      ],
      susScore: { before: 0, after: 82 },
    },
    insights: {
      personas: [
        {
          name: "Diego",
          age: 34,
          occupation: "Personal trainer independiente",
          quote: "Me la paso mandando rutinas por WhatsApp uno por uno",
          goals: [
            "Armar rutinas rápido y enviarlas automáticamente",
            "Llevar control de pagos",
            "Mostrar el progreso del alumno",
          ],
          frustrations: [
            "Pierde mucho tiempo en admin",
            "No puede escalar más de 15 alumnos",
            "Los alumnos no ven su progreso",
          ],
          techLevel: "medio",
        },
        {
          name: "Alejandro Santoro",
          age: 35,
          occupation: "Entrenador de grupos al aire libre",
          quote: "Mando una encuesta por WhatsApp para saber quién viene a clase y nunca sé cuánto gano por mes",
          goals: [
            "Saber quién asiste a cada clase sin preguntar uno por uno",
            "Tener control real de cobros y saber cuánto gana por mes",
            "Automatizar la comunicación con sus alumnos",
          ],
          frustrations: [
            "Usa encuestas de WhatsApp para confirmar asistencia",
            "No tiene registro de pagos, solo un estimado mental",
            "No puede diferenciar quién pagó y quién no",
          ],
          techLevel: "medio",
        },
      ],
      journeyMapSteps: [
        {
          phase: "Mañana",
          action: "Revisa agenda del día en WhatsApp",
          emotion: "negativa",
          painPoint: "Mensajes mezclados con lo personal",
        },
        {
          phase: "Pre-clase",
          action: "Busca la rutina del alumno en Excel",
          emotion: "negativa",
          painPoint: "No la encuentra, improvisa",
        },
        {
          phase: "Durante clase",
          action: "Anota sets y pesos en papel",
          emotion: "neutral",
        },
        {
          phase: "Post-clase",
          action: "Pasa datos al Excel manualmente",
          emotion: "muy negativa",
          painPoint: "Duplica trabajo, a veces no lo hace",
        },
        {
          phase: "Cobros",
          action: "Recuerda de memoria quién debe",
          emotion: "negativa",
          painPoint: "Pierde ingresos por olvidos",
          opportunity: "Sistema automático de cobros",
        },
        {
          phase: "Fin del mes",
          action: "Intenta evaluar progreso del alumno",
          emotion: "muy negativa",
          painPoint: "No tiene datos organizados",
          opportunity: "Dashboard de progreso automático",
        },
      ],
    },
    design: {
      description:
        "Se diseñó una app mobile-first con 3 módulos core: Agenda, Rutinas y Cobros. La interfaz prioriza acciones rápidas que se pueden hacer entre clases. Se usaron patrones de interacción familiares (swipe, drag & drop) para minimizar la curva de aprendizaje.",
      iterations: 3,
      keyDecisions: [
        "Creador de rutinas con drag & drop de ejercicios desde una biblioteca pre-cargada",
        "Vista de agenda diaria con swipe para marcar asistencia",
        "Dashboard de progreso del alumno con gráficos simples compartibles por WhatsApp",
        "Sistema de cobros con recordatorios automáticos por WhatsApp",
      ],
    },
    results: {
      metrics: [
        {
          label: "Tiempo en tareas admin",
          before: "2+ hs/día",
          after: "35 min/día",
          improvement: "-71%",
        },
        {
          label: "Retención de alumnos (mes 1)",
          before: "60%",
          after: "84%",
          improvement: "+40%",
        },
        {
          label: "Morosidad en cobros",
          before: "35%",
          after: "12%",
          improvement: "-66%",
        },
        {
          label: "Score SUS",
          before: "—",
          after: "82",
          improvement: "Excelente",
        },
      ],
    },
  },
  {
    slug: "mercadogasolinero",
    title: "Mercado Gasolinero",
    subtitle: "Plataforma B2B multibranding para estaciones de servicio",
    role: "UX Designer",
    year: "2024",
    duration: "3 meses",
    url: "https://mercadogasolinero.com",
    heroColor: "from-orange-600/20 to-amber-500/10",
    tags: ["B2B", "E-commerce", "Multibranding", "Web App"],
    summary:
      "Diseñé una plataforma de abastecimiento para estaciones de servicio con ecosistema multimarca. Cada marca (YPF, Shell, Axion, Puma) tiene su versión visual pero comparten base funcional.",
    challenge:
      "Las estaciones de servicio pedían insumos por teléfono o email, sin catálogo digital ni tracking de pedidos. Cada marca tenía requerimientos visuales distintos pero los flujos de compra debían ser idénticos para no duplicar desarrollo.",
    research: {
      methods: [
        "Entrevistas con encargados de estaciones",
        "Análisis de procesos de compra actuales",
        "Benchmark de e-commerce B2B",
        "Tests de usabilidad con prototipos",
        "Encuestas SUS",
      ],
      participants: "12 encargados de estaciones + 5 distribuidores",
      description:
        "Se entrevistó a encargados de estaciones de distintas marcas para entender su proceso de compra actual. Se mapearon los catálogos existentes y se identificaron las diferencias de branding vs. la funcionalidad compartida.",
      findings: [
        {
          title: "Pedidos por teléfono con alta tasa de error",
          description:
            "El 25% de los pedidos telefónicos tenían errores de cantidad o producto. No existía confirmación escrita del pedido.",
          severity: "critical",
        },
        {
          title: "Sin visibilidad de stock ni precios actualizados",
          description:
            "Los encargados no sabían si un producto estaba disponible hasta que el distribuidor confirmaba, lo que tardaba hasta 48hs.",
          severity: "high",
        },
        {
          title: "Rechazo a interfaces complejas",
          description:
            "Los encargados tienen bajo nivel técnico y usan la plataforma en momentos libres entre despachos. Necesitan flujos de máximo 3 pasos.",
          severity: "high",
        },
      ],
      susScore: { before: 0, after: 76 },
    },
    insights: {
      personas: [
        {
          name: "Roberto",
          age: 52,
          occupation: "Encargado de estación YPF",
          quote: "Necesito pedir las cosas rápido, no tengo tiempo de andar buscando",
          goals: [
            "Hacer pedidos en menos de 2 minutos",
            "Ver precios actualizados",
            "Repetir pedidos anteriores fácil",
          ],
          frustrations: [
            "Las webs son complicadas",
            "No sabe si hay stock",
            "Pierde tiempo llamando por teléfono",
          ],
          techLevel: "bajo",
        },
      ],
      journeyMapSteps: [
        {
          phase: "Necesidad",
          action: "Detecta que falta producto",
          emotion: "neutral",
        },
        {
          phase: "Búsqueda",
          action: "Busca en catálogo o llama al distribuidor",
          emotion: "negativa",
          painPoint: "No sabe precios ni stock actualizados",
        },
        {
          phase: "Pedido",
          action: "Dicta pedido por teléfono",
          emotion: "negativa",
          painPoint: "Errores frecuentes, sin confirmación escrita",
        },
        {
          phase: "Espera",
          action: "Espera confirmación del distribuidor",
          emotion: "muy negativa",
          painPoint: "Hasta 48hs sin respuesta",
        },
        {
          phase: "Recepción",
          action: "Recibe el pedido",
          emotion: "neutral",
        },
        {
          phase: "Verificación",
          action: "Chequea que todo esté correcto",
          emotion: "negativa",
          painPoint: "25% tiene errores, proceso de devolución largo",
          opportunity: "Confirmación digital con detalle previo a envío",
        },
      ],
    },
    design: {
      description:
        "Se diseñó un sistema de theming que permite cambiar marca (colores, logo, tipografía) sin alterar la estructura funcional. El flujo de compra se resolvió en 3 pasos: buscar/escanear → agregar → confirmar.",
      iterations: 3,
      keyDecisions: [
        "Catálogo con búsqueda rápida y escaneo de código de barras para agregar productos",
        "Botón 'Repetir último pedido' prominente en la home como acción principal",
        "Sistema de theming con CSS variables para multibranding sin duplicar componentes",
        "Checkout simplificado: sin registro de cuenta, autenticación por código de estación",
      ],
    },
    results: {
      metrics: [
        {
          label: "Errores en pedidos",
          before: "25%",
          after: "4%",
          improvement: "-84%",
        },
        {
          label: "Tiempo por pedido",
          before: "15+ min",
          after: "2.5 min",
          improvement: "-83%",
        },
        {
          label: "Confirmación de disponibilidad",
          before: "48 hs",
          after: "Inmediato",
          improvement: "-100%",
        },
        {
          label: "Score SUS",
          before: "—",
          after: "76",
          improvement: "Bueno",
        },
      ],
    },
  },
  {
    slug: "aoelec",
    title: "AoElec",
    subtitle: "Sitio técnico para distribución de soluciones eléctricas",
    role: "UX Designer",
    year: "2025",
    duration: "2 meses",
    url: "https://aoelec.com.ar",
    heroColor: "from-violet-600/20 to-purple-500/10",
    tags: ["B2B", "E-commerce", "Catálogo Técnico", "Web"],
    summary:
      "Diseñé un sitio técnico pero accesible para un distribuidor de soluciones eléctricas, orientado a instaladores, ingenieros y responsables de compras. Foco en catálogo con specs claras y navegación directa.",
    challenge:
      "AoElec tenía un catálogo en PDF que los clientes no usaban. Los instaladores llamaban por teléfono para cada consulta técnica. El sitio existente era un brochure institucional sin funcionalidad real.",
    research: {
      methods: [
        "Entrevistas con instaladores eléctricos",
        "Análisis del catálogo PDF existente",
        "Benchmark de distribuidores técnicos",
        "Tests de usabilidad con prototipos",
        "Card sorting para categorías",
      ],
      participants: "10 instaladores + 5 ingenieros + 3 responsables de compras",
      description:
        "Se entrevistó a los tres perfiles clave: instaladores que buscan compatibilidades rápidas, ingenieros que necesitan specs detalladas, y compradores que buscan disponibilidad y precios. Se hizo card sorting para reorganizar las categorías del catálogo.",
      findings: [
        {
          title: "Catálogo PDF inutilizable en obra",
          description:
            "Los instaladores necesitan consultar compatibilidades en el celular mientras están en la obra. El PDF de 200 páginas era impracticable.",
          severity: "critical",
        },
        {
          title: "90% de consultas telefónicas eran de stock y compatibilidad",
          description:
            "La mayoría de las llamadas podían resolverse con un buscador con filtros técnicos adecuados.",
          severity: "high",
        },
        {
          title: "Información técnica desestructurada",
          description:
            "Las fichas técnicas tenían formatos inconsistentes entre categorías. No había tabla comparativa entre productos similares.",
          severity: "medium",
        },
      ],
      susScore: { before: 0, after: 74 },
    },
    insights: {
      personas: [
        {
          name: "Carlos",
          age: 38,
          occupation: "Instalador eléctrico matriculado",
          quote: "Necesito saber si este termomagnético es compatible antes de comprarlo",
          goals: [
            "Verificar compatibilidades rápido",
            "Comparar productos similares",
            "Ver disponibilidad sin llamar",
          ],
          frustrations: [
            "El PDF no se puede buscar fácil",
            "Tiene que llamar para todo",
            "Las fichas técnicas no son consistentes",
          ],
          techLevel: "medio",
        },
      ],
      journeyMapSteps: [
        {
          phase: "En obra",
          action: "Necesita un componente específico",
          emotion: "neutral",
        },
        {
          phase: "Búsqueda",
          action: "Intenta buscar en PDF desde el celular",
          emotion: "muy negativa",
          painPoint: "PDF pesado, no carga, no se puede buscar",
        },
        {
          phase: "Consulta",
          action: "Llama al distribuidor",
          emotion: "negativa",
          painPoint: "Espera en línea, no siempre atienden",
        },
        {
          phase: "Verificación",
          action: "Pide confirmación de compatibilidad",
          emotion: "negativa",
          painPoint: "Respuesta no inmediata, obra frenada",
          opportunity: "Filtros de compatibilidad en tiempo real",
        },
        {
          phase: "Compra",
          action: "Confirma pedido por teléfono o WhatsApp",
          emotion: "neutral",
        },
        {
          phase: "Recepción",
          action: "Recibe y verifica material",
          emotion: "positiva",
        },
      ],
    },
    design: {
      description:
        "Se diseñó un sitio responsive con catálogo filtrable por especificaciones técnicas. Se priorizó la experiencia mobile para uso en obra. Junto a una diseñadora gráfica se trabajó en reducir ruido visual y presentar información técnica de forma comparativa.",
      iterations: 2,
      keyDecisions: [
        "Buscador con filtros técnicos (amperaje, tensión, marca, tipo) accesible desde cualquier página",
        "Fichas de producto normalizadas con formato consistente y tabla de compatibilidades",
        "Comparador de hasta 3 productos lado a lado",
        "Botón de WhatsApp contextual que envía el producto al vendedor directo",
      ],
    },
    results: {
      metrics: [
        {
          label: "Consultas telefónicas",
          before: "~40/día",
          after: "~15/día",
          improvement: "-62%",
        },
        {
          label: "Tiempo de búsqueda de producto",
          before: "5+ min",
          after: "30 seg",
          improvement: "-90%",
        },
        {
          label: "Uso del catálogo digital vs PDF",
          before: "10%",
          after: "85%",
          improvement: "+750%",
        },
        {
          label: "Score SUS",
          before: "—",
          after: "74",
          improvement: "Bueno",
        },
      ],
    },
  },
];
