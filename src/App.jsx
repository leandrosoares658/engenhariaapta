import React, { useState } from "react";

const services = [
  {
    id: "projetos",
    number: "01",
    category: "ENGENHARIA",
    title: "Projetos",
    description:
      "Projetos de sistemas HVAC-R para as mais diversas aplicações, com alto padrão de atendimento às normas nacionais e internacionais.",
    items: [
      "ABNT NBR 16401, NBR 7256, NBR 14518 e NBR 14679",
      "ISO 14644 — salas limpas e ambientes controlados",
      "ASHRAE, SMACNA e Diretrizes da Anvisa",
      "Estudos de carga térmica, PMOC e eficiência energética",
      "ART e emissão de documentação técnica completa",
    ],
  },
  {
    id: "fabricacao",
    number: "02",
    category: "FABRICAÇÃO",
    title: "Fabricação de dutos",
    description:
      "Dutos e componentes fabricados sob medida para garantir desempenho, vedação e integração perfeita com o projeto.",
    items: [
      "Dutos galvanizados, pré-isolados e em aço inox",
      "Fabricação conforme projeto executivo e normas SMACNA",
      "Peças especiais, coifas e sistemas de exaustão",
      "Controle dimensional e acabamento de qualidade",
      "Logística coordenada com a etapa de instalação",
    ],
  },
  {
    id: "instalacoes",
    number: "03",
    category: "EXECUÇÃO",
    title: "Instalações industriais",
    description:
      "Execução completa de sistemas HVAC-R com planejamento de obra, equipe especializada e atenção aos processos do cliente.",
    items: [
      "Instalação de equipamentos e redes de distribuição",
      "Montagem de dutos, tubulações e sistemas de controle",
      "Comissionamento, balanceamento e testes de desempenho",
      "Documentação técnica e entrega assistida",
      "Execução segura sem perder de vista a operação",
    ],
  },
  {
    id: "manutencao",
    number: "04",
    category: "CONTINUIDADE",
    title: "Manutenção",
    description:
      "Planos preventivos e corretivos para preservar a eficiência, a conformidade e a disponibilidade dos seus sistemas.",
    items: [
      "Planos de manutenção e operação (PMOC)",
      "Inspeções técnicas e análise de desempenho",
      "Atendimento corretivo e suporte especializado",
      "Relatórios e recomendações para melhoria contínua",
      "Acompanhamento de ambientes críticos",
    ],
  },
];

const sectors = [
  ["♧", <>Indústria<br />farmacêutica</>, "Salas limpas, HVAC-R e qualificação."],
  ["♜", <>Indústria<br />alimentícia</>, "Climatização e controle de temperatura."],
  ["⌁", <>Indústria<br />automobilística</>, "Processos e precisão ambiental."],
  ["⚙", <>Indústria de<br />eletrônicos</>, "Ambientes controlados e cleanrooms."],
  ["▣", "Hospitais e clínicas", "RDC 50 e NBR 7256."],
  ["◇", <>Cozinhas<br />profissionais</>, "Coifas, exaustão e ar de reposição."],
  ["⌁", <>Escolas<br />e universidades</>, "Conforto térmico e qualidade do ar."],
  ["▤", "Escritórios e hotéis", "Conforto térmico e eficiência."],
  ["♧", <>Bancos, aeroportos<br />e shoppings</>, "Grandes sistemas, alta disponibilidade."],
  ["✳", "Câmaras frias", "Refrigeração comercial e industrial."],
];

const projects = [
  {
    category: "01 · INDÚSTRIA FARMACÊUTICA",
    title: "Sistema HVAC para fabricação de sólidos e comprimidos",
    className: "project-large",
    design: 0,
  },
  {
    category: "02 · INDÚSTRIA ALIMENTÍCIA",
    title: "Ventilação filtrada, coifas e dutos de exaustão",
    design: 1,
  },
  {
    category: "03 · CENTRO DE DISTRIBUIÇÃO",
    title: "Dutos de ar do sistema HVAC em área produtiva",
    design: 2,
  },
  {
    category: "04 · INDÚSTRIA FARMACÊUTICA",
    title: "Instalação de HVAC para depósito de medicamentos",
    className: "project-wide",
    design: 3,
  },
];

const projectPaths = [
  <>
    <path d="M0 116h125v84h144v72h110V135h72V55h69" />
    <path d="M0 145h96v85h155v70h146V165h76V84h47" />
    <rect x="44" y="236" width="87" height="46" />
    <circle cx="430" cy="228" r="33" />
    <path d="M430 195v66m-33-33h66m-56-23 46 46m0-46-46 46" />
  </>,
  <>
    <path d="M0 68h134v70h115v74h127V93h74V40h70" />
    <path d="M0 93h108v70h124v78h156V118h84V65h48" />
    <circle cx="428" cy="179" r="30" />
    <path d="M428 149v60m-30-30h60" />
  </>,
  <>
    <path d="M0 82h120v75h140v70h126V106h70V52h64" />
    <path d="M0 106h95v75h142v68h162V130h80V77h41" />
    <rect x="35" y="187" width="60" height="38" />
    <circle cx="421" cy="188" r="28" />
  </>,
  <>
    <path d="M0 65h105v82h132v66h141v-92h75V48h67" />
    <path d="M0 90h80v82h137v68h183v-96h80V73h40" />
    <rect x="44" y="181" width="70" height="45" />
    <circle cx="415" cy="181" r="28" />
  </>,
];

function Brand() {
  return (
    <a className="brand" href="#inicio" aria-label="APTA, início">
      <span className="brand-mark">A</span>
      <span className="brand-name">
        APTA<small>ENGENHARIA HVAC-R</small>
      </span>
    </a>
  );
}

function Eyebrow({ children }) {
  return (
    <p className="eyebrow">
      <span className="eyebrow-icon">▣</span> {children}
    </p>
  );
}

function SystemDiagram() {
  return (
    <svg
      className="system-diagram"
      viewBox="0 0 540 190"
      role="img"
      aria-label="Diagrama ilustrativo de um sistema HVAC"
    >
      <defs>
        <linearGradient id="duct" x1="0" x2="1">
          <stop stopColor="#132f4c" />
          <stop offset="1" stopColor="#1b4773" />
        </linearGradient>
      </defs>
      <rect x="22" y="46" width="100" height="100" rx="8" fill="#10263a" stroke="#365d7e" />
      <circle cx="72" cy="96" r="31" fill="none" stroke="#2fe0ed" strokeWidth="2" />
      <path d="M72 65v62M41 96h62M50 74l44 44M94 74l-44 44" stroke="#2fe0ed" strokeWidth="2" opacity=".8" />
      <path d="M122 96h40v-32h120v32h61v-27h72" fill="none" stroke="#1b4773" strokeWidth="13" strokeLinejoin="round" />
      <path d="M122 96h40v-32h120v32h61v-27h72" fill="none" stroke="#42d4e5" strokeWidth="2" strokeDasharray="5 6" strokeLinejoin="round" />
      <rect x="332" y="81" width="54" height="28" rx="3" fill="url(#duct)" stroke="#4ed8e8" />
      <rect x="409" y="55" width="91" height="28" rx="3" fill="#112a43" stroke="#376386" />
      <path d="M424 69h59" stroke="#37cce1" strokeWidth="2" />
      <path d="M446 83v56h-98v-20" fill="none" stroke="#214c72" strokeWidth="9" />
      <path d="M446 83v56h-98v-20" fill="none" stroke="#2dc4db" strokeWidth="1.5" strokeDasharray="4 5" />
      <circle cx="165" cy="96" r="4" fill="#49d6e5" />
      <circle cx="282" cy="96" r="4" fill="#49d6e5" />
      <text x="23" y="32" fill="#7892a7" fontSize="9" fontFamily="Arial">UNIDADE DE TRATAMENTO DE AR</text>
      <text x="410" y="45" fill="#7892a7" fontSize="9" fontFamily="Arial">ÁREA CONTROLADA</text>
      <text x="24" y="164" fill="#7892a7" fontSize="8" fontFamily="Arial">FILTRAGEM HEPA</text>
      <text x="410" y="102" fill="#7892a7" fontSize="8" fontFamily="Arial">20°C · 45% UR</text>
    </svg>
  );
}

function Blueprint({ className = "", design = 0 }) {
  return (
    <div className={`blueprint ${className}`} aria-hidden="true">
      <svg viewBox={className === "blueprint-cover" ? "0 0 520 520" : "0 0 520 300"}>
        {className === "blueprint-cover" ? (
          <>
            <path d="M0 250h95v80h110v78h130V270h90v-65h95" />
            <path d="M0 280h70v82h125v75h154V294h90v-58h81" />
            <path d="M0 440h60v-70h75v95h110v-60h130v-86h76" />
            <path d="M165 0v115h100v76h88" />
            <rect x="54" y="392" width="106" height="66" />
            <circle cx="395" cy="394" r="35" />
            <path d="M395 359v70M360 394h70M370 369l50 50M420 369l-50 50" />
          </>
        ) : projectPaths[design]}
      </svg>
      {className === "blueprint-cover" && (
        <div className="cover-label">
          <b>HVAC-R</b>
          <span>Engenharia de precisão<br />para ambientes críticos</span>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <div className="container nav-wrap">
        <Brand />
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-nav"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
        <nav className={`main-nav${menuOpen ? " open" : ""}`} id="main-nav" aria-label="Navegação principal">
          <a href="#servicos" onClick={closeMenu}>Serviços</a>
          <a href="#setores" onClick={closeMenu}>Setores</a>
          <a href="#obras" onClick={closeMenu}>Obras</a>
          <a href="#contato" onClick={closeMenu}>Contato</a>
          <a className="nav-phone" href="tel:+5531990000000">◷ &nbsp; (31) 99900-0000</a>
          <a className="button button-small" href="#contato" onClick={closeMenu}>Orçamento <span>↗</span></a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero dark-section" id="inicio">
      <div className="hero-glow" />
      <div className="container hero-inner">
        <div className="hero-copy">
          <Eyebrow>PROJETOS &nbsp;·&nbsp; INSTALAÇÕES &nbsp;·&nbsp; MANUTENÇÃO</Eyebrow>
          <h1>Ar sob<br />controle para<br />indústrias<br />que <span>não</span><br /><span>podem parar.</span></h1>
          <p className="hero-description">Engenharia HVAC-R completa — do projeto normativo à manutenção — para salas limpas, plantas farmacêuticas, alimentícias e ambientes críticos em todo o Brasil.</p>
          <div className="hero-actions">
            <a className="button" href="#contato">Solicitar orçamento <span>↗</span></a>
            <a className="button button-ghost" href="#servicos">Conhecer serviços</a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="tech-card">
            <div className="tech-top"><span>SALA LIMPA &nbsp;·&nbsp; HVAC-R</span><span className="live"><i /> EM OPERAÇÃO</span></div>
            <SystemDiagram />
            <div className="tech-stats">
              <div><strong>ISO 7</strong><small>CLASSIFICAÇÃO</small></div>
              <div><strong>20 °C</strong><small>TEMPERATURA</small></div>
              <div><strong>45 %</strong><small>UMIDADE RELATIVA</small></div>
              <div><strong>15 Pa</strong><small>PRESSÃO DIFERENCIAL</small></div>
            </div>
          </div>
          <div className="hero-note">ENGENHARIA QUE MANTÉM TUDO EM FLUXO.</div>
        </div>
      </div>
      <div className="container hero-bottom">
        <span>ENGENHARIA HVAC-R DE PONTA A PONTA</span>
        <span>BRASIL &nbsp; · &nbsp; DESDE 2014</span>
        <span>PROJETOS FEITOS PARA DURAR</span>
      </div>
    </section>
  );
}

function Introduction() {
  return (
    <section className="intro section-light" id="empresa">
      <div className="container intro-grid">
        <div className="hvac-cover">
          <Blueprint className="blueprint-cover" />
          <span className="image-caption">PROJETO · SALA LIMPA</span>
        </div>
        <div className="intro-copy">
          <Eyebrow>QUEM SOMOS</Eyebrow>
          <h2>Engenharia<br />que entende o<br />processo antes de<br />dimensionar o ar.</h2>
          <p>A APTA é especializada em projetos, instalações e manutenção de sistemas de HVAC-R. Atendemos clientes em todo o território nacional, projetando soluções inteligentes e alinhadas às necessidades operacionais, ambientais e normativas de cada setor — com engenharia, execução e confiabilidade em cada entrega.</p>
          <div className="values-grid">
            <article><span>01</span><h3>Inovação</h3><p>Soluções atualizadas que reduzem consumo e aumentam a vida útil dos sistemas.</p></article>
            <article><span>02</span><h3>Disponibilidade</h3><p>Sistemas HVAC-R eficientes para suas operações nunca pararem.</p></article>
            <article><span>03</span><h3>Responsabilidade</h3><p>Respeito ao meio ambiente, às pessoas e às normas que regem cada setor.</p></article>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [activeService, setActiveService] = useState(services[0]);

  return (
    <>
      <section className="services dark-section" id="servicos">
        <div className="container">
          <div className="section-heading">
            <Eyebrow>O QUE FAZEMOS</Eyebrow>
            <h2>Um único parceiro do<br />projeto à operação.</h2>
            <p>Quatro frentes integradas que eliminam retrabalho entre quem projeta, quem fabrica, quem instala e quem mantém.</p>
          </div>
          <div className="services-grid">
            <div className="service-list" role="tablist" aria-label="Serviços APTA">
              {services.map((service) => (
                <button
                  className={`service-tab${activeService.id === service.id ? " active" : ""}`}
                  type="button"
                  role="tab"
                  aria-selected={activeService.id === service.id}
                  key={service.id}
                  onClick={() => setActiveService(service)}
                >
                  <span>{service.number}</span>{service.title}<b>+</b>
                </button>
              ))}
            </div>
            <article className="service-detail" role="tabpanel">
              <p className="eyebrow">{activeService.number} &nbsp;·&nbsp; {activeService.category}</p>
              <h3>{activeService.title}</h3>
              <p>{activeService.description}</p>
              <ul>
                {activeService.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </article>
          </div>
        </div>
      </section>
      <div className="standards-bar" aria-label="Normas técnicas">
        <div className="standards-track">
          <span>ABNT NBR 16401</span><i>✳</i><span>ISO 14644</span><i>✳</i><span>ASHRAE</span><i>✳</i><span>NBR 7256</span><i>✳</i><span>NBR 14518</span><i>✳</i><span>NBR 6401</span><i>✳</i><span>RDC 50</span><i>✳</i><span>ABNT NBR 16401</span>
        </div>
      </div>
    </>
  );
}

function Sectors() {
  return (
    <section className="sectors section-light" id="setores">
      <div className="container">
        <div className="section-heading light-heading">
          <Eyebrow>ONDE ATUAMOS</Eyebrow>
          <h2>Onde o ar é parte<br />do processo.</h2>
          <p>Da sala farmacêutica à cozinha industrial: cada setor tem exigências próprias — e nós projetamos para elas.</p>
        </div>
        <div className="sector-grid">
          {sectors.map(([icon, title, description]) => (
            <article className="sector-card" key={description}>
              <span className="line-icon">{icon}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section className="projects section-light" id="obras">
      <div className="container">
        <div className="projects-heading">
          <div className="section-heading light-heading">
            <Eyebrow>OBRAS REALIZADAS</Eyebrow>
            <h2>Trabalho que se<br />vê no detalhe.</h2>
          </div>
          <a className="text-link" href="#contato">VER MAIS PROJETOS <span>↗</span></a>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className={`project-card ${project.className || ""}`} key={project.title}>
              <Blueprint className="project-image" design={project.design} />
              <p className="eyebrow">{project.category}</p>
              <h3>{project.title}</h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const clients = ["Hipolabor", "Eurofarma", <>MSD<br />Engenharia</>, "Takeda", "Coca-Cola", "Fagron", "Mercantil", <>Semi<br />Farmacêutica</>, "Controlla", "Tejo"];

  return (
    <section className="clients">
      <div className="container clients-inner">
        <div><Eyebrow>CLIENTES</Eyebrow><h2>Empresas que<br />confiam<br />o ar das suas<br />operações à APTA.</h2></div>
        <div className="client-grid" aria-label="Clientes APTA">
          {clients.map((client, index) => <span key={index}>{client}</span>)}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Olá! Gostaria de conversar sobre um projeto HVAC-R.",
      "",
      `Nome: ${formData.get("name")}`,
      `E-mail: ${formData.get("email")}`,
      `Telefone: ${formData.get("phone")}`,
      `Interesse: ${formData.get("need")}`,
      `Mensagem: ${formData.get("message") || "Não informada"}`,
    ].join("\n");
    const whatsappNumber = "5531990000000";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer",
    );
  }

  return (
    <section className="contact dark-section" id="contato">
      <div className="container contact-grid">
        <div className="contact-copy">
          <Eyebrow>CONTATO</Eyebrow>
          <h2>Vamos falar<br />sobre o seu<br />próximo<br />sistema?</h2>
          <p>Conte o que você precisa — projeto, instalação, fabricação ou manutenção. Nossa equipe técnica retorna com uma proposta.</p>
          <div className="contact-details">
            <a href="tel:+5531990000000"><span>◷</span><div><small>LIGUE PARA NÓS</small><b>(31) 99900-0000</b><small>0800 000 0000 · WhatsApp</small></div></a>
            <a href="mailto:comercial@engenhariaapta.com.br"><span>✉</span><div><small>E-MAIL</small><b>comercial@engenhariaapta.com.br</b></div></a>
            <div><span>⌖</span><div><small>ENDEREÇO</small><b>Estrada da Produção, 38 — Jaraguá 2<br />Montes Claros — MG</b></div></div>
          </div>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">NOME</label>
          <input id="name" name="name" autoComplete="name" placeholder="Seu nome" required />
          <label htmlFor="email">E-MAIL</label>
          <input id="email" name="email" type="email" autoComplete="email" placeholder="seu@email.com" required />
          <label htmlFor="phone">TELEFONE</label>
          <input id="phone" name="phone" type="tel" autoComplete="tel" placeholder="(00) 00000-0000" required />
          <fieldset>
            <legend>O QUE VOCÊ PRECISA?</legend>
            <div className="form-options">
              {["Projeto", "Fabricação", "Instalação", "Manutenção", "HVAC-R"].map((need, index) => (
                <label key={need}>
                  <input type="radio" name="need" value={need} defaultChecked={index === 0} />
                  <span>{need}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <label htmlFor="message">MENSAGEM</label>
          <textarea id="message" name="message" rows="3" placeholder="Descreva brevemente o que você precisa" />
          <button className="button form-submit" type="submit">Enviar pelo WhatsApp <span>↗</span></button>
          <p className="form-note">Ao enviar, você será direcionado para o WhatsApp da nossa equipe.</p>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer dark-section">
      <div className="footer-watermark" aria-hidden="true">APTA</div>
      <div className="container footer-bottom">
        <Brand />
        <nav aria-label="Navegação do rodapé">
          <a href="#servicos">Serviços</a><a href="#setores">Setores</a><a href="#obras">Obras</a><a href="#contato">Contato</a>
        </nav>
        <div className="social-links">
          <a href="#contato" aria-label="Instagram">◎</a>
          <a href="#contato" aria-label="LinkedIn">in</a>
          <a href="#contato" aria-label="WhatsApp">◉</a>
        </div>
      </div>
      <div className="container legal">
        <span>© 2025 APTA Engenharia HVAC-R. Todos os direitos reservados.</span>
        <span>ENGENHARIA QUE FAZ A DIFERENÇA.</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Introduction />
        <Services />
        <Sectors />
        <Projects />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
