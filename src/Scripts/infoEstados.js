const dados = {
  SP: {
    nome: "São Paulo",
    descricao: "Explore o melhor que São Paulo tem a oferecer.",
    cidades: [
      {
        id: "itapevi",
        nome: "Itapevi",
        img: "src/assets/imgs/estados/itapevi.svg",
        desc: "Conexão, progresso e futuro.",
        avaliacao: "4,5",
        contagem: "100k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/itapevi.svg",
          titulo: "Itapevi, SP",
          descricao: "Cidade em pleno crescimento, com forte vocação industrial e comunidades cheias de vida. Ótima base para explorar o interior paulista.",
        },
      },
      {
        id: "osasco",
        nome: "Osasco",
        img: "src/assets/imgs/estados/osasco.svg",
        desc: "Indústria, negócios e alma urbana.",
        avaliacao: "4,3",
        contagem: "90k",
        destaque: true,
        detalhe: {
          img: "src/assets/imgs/estados/osasco-card-informativo.svg",
          titulo: "Osasco, SP",
          descricao: "Uma cidade vibrante e em constante crescimento. Ideal para conhecer sua história, gastronomia e vida urbana.",
        },
      },
      {
        id: "praia-grande",
        nome: "Praia Grande",
        img: "src/assets/imgs/estados/praiaGrande.svg",
        desc: "Sol, mar e diversão para toda família.",
        avaliacao: "4,6",
        contagem: "85k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/praiaGrande.svg",
          titulo: "Praia Grande, SP",
          descricao: "Um dos balneários mais completos do litoral paulista. Praias extensas, parques aquáticos e uma gastronomia à beira-mar para toda a família.",
        },
      },
    ],
  },

  MG: {
    nome: "Minas Gerais",
    descricao: "Descubra a história, cultura e sabores únicos de Minas Gerais.",
    cidades: [
      {
        id: "ouro-preto",
        nome: "Ouro Preto",
        img: "src/assets/imgs/estados/Ouro-Preto.svg",
        desc: "Patrimônio histórico da humanidade.",
        avaliacao: "4,9",
        contagem: "210k",
        destaque: true,
        detalhe: {
          img: "src/assets/imgs/estados/Ouro-Preto.svg",
          titulo: "Ouro Preto, MG",
          descricao: "Joia do barroco brasileiro e Patrimônio da Humanidade. Ruas de pedra, igrejas douradas e uma história que respira em cada esquina.",
        },
      },
      {
        id: "belo-horizonte",
        nome: "Belo Horizonte",
        img: "src/assets/imgs/estados/Belo-Horizonte.svg",
        desc: "A capital mineira cheia de cultura e sabor.",
        avaliacao: "4,6",
        contagem: "180k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/Belo-Horizonte.svg",
          titulo: "Belo Horizonte, MG",
          descricao: "Capital vibrante com gastronomia de classe mundial, vida cultural intensa e o famoso pão de queijo em cada esquina.",
        },
      },
      {
        id: "tiradentes",
        nome: "GOVERNADOR VALADERES",
        img: "src/assets/imgs/estados/GOVERNADOR-VALADARES.svg",
        desc: "Charme colonial e gastronomia premiada.",
        avaliacao: "4,7",
        contagem: "95k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/GOVERNADOR-VALADARES.svg",
          titulo: "Tiradentes, MG",
          descricao: "Pequena cidade com enorme charme. Casarões coloniais, festivais gastronômicos e uma tranquilidade que convida a desacelerar.",
        },
      },
    ],
  },

  RJ: {
    nome: "Rio de Janeiro",
    descricao: "Viva a magia da cidade maravilhosa e além.",
    cidades: [
      {
        id: "rio-de-janeiro",
        nome: "Rio de Janeiro",
        img: "src/assets/imgs/estados/RIO-DE-JANEIRO.svg",
        desc: "A cidade maravilhosa que encanta o mundo.",
        avaliacao: "4,8",
        contagem: "500k",
        destaque: true,
        detalhe: {
          img: "src/assets/imgs/estados/RIO-DE-JANEIRO.svg",
          titulo: "Rio de Janeiro, RJ",
          descricao: "Entre o Pão de Açúcar e o Cristo Redentor, o Rio oferece praias, carnaval, samba e uma energia única que só existe aqui.",
        },
      },
      {
        id: "petropolis",
        nome: "Nitoroi",
        img: "src/assets/imgs/estados/NITEROI.svg",
        desc: "A cidade imperial na Serra Fluminense.",
        avaliacao: "4,7",
        contagem: "130k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/NITEROI.svg",
          titulo: "Niteroi, RJ",
          descricao: "Antiga residência imperial com museus históricos, cervejarias artesanais e um clima ameno que contrasta com o calor carioca.",
        },
      },
      {
        id: "paraty",
        nome: "Sâo Gonçalo",
        img: "src/assets/imgs/estados/SAO-GONÇALO.svg",
        desc: "História colonial e praias paradisíacas.",
        avaliacao: "4,8",
        contagem: "115k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/SAO-GONÇALO.svg",
          titulo: "São Gonçalo, RJ",
          descricao: "Centro histórico preservado com ruas de pedra, cachoeiras na Mata Atlântica e baías cristalinas. Um tesouro da costa verde.",
        },
      },
    ],
  },

  MT: {
        nome: "Mato Grosso",
    descricao: "Explore a natureza selvagem e a cultura do coração do Brasil.",
    cidades: [
      {
        id: "cuiaba",
        nome: "Cuiabá",
        img: "src/assets/imgs/estados/cuiaba.svg",
        desc: "O coração do Brasil e porta do Pantanal.",
        avaliacao: "4,5",
        contagem: "88k",
        destaque: true,
        detalhe: {
          img: "src/assets/imgs/estados/cuiaba.svg",
          titulo: "Cuiabá, MT",
          descricao: "Capital estratégica entre Cerrado, Pantanal e Amazônia. Gastronomia regional única e ponto de partida para ecoturismo de alta qualidade.",
        },
      },
      {
        id: "chapada",
        nome: "LUCAS DO RIO VERDE",
        img: "src/assets/imgs/estados/LUCAS-DO-RIO-VERDE.svg",
        desc: "Formações rochosas e cachoeiras deslumbrantes.",
        avaliacao: "4,9",
        contagem: "140k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/LUCAS-DO-RIO-VERDE.svg",
          titulo: "LUCAS DO RIO VERDE, MT",
          descricao: "Parque Nacional com cânions, cachoeiras e o centro geodésico da América do Sul. Uma das paisagens mais espetaculares do Brasil.",
        },
      },
      {
        id: "pantanal",
        nome: "Sorriso",
        img: "src/assets/imgs/estados/sorriso.svg",
        desc: "Portal do Pantanal Norte, fauna incrível.",
        avaliacao: "4,7",
        contagem: "72k",
        destaque: false,
        detalhe: {
          img: "src/assets/imgs/estados/sorriso.svg",
          titulo: "Sorriso, MT",
          descricao: "Entrada da Transpantaneira, a estrada mais selvagem do Brasil. Jacarés, onças e tuiuiús a poucos metros — natureza em estado puro.",
        },
      },
    ],
  },
};

// ─── Referências aos elementos ─────────────────────────────────────────────────

const abas        = document.querySelectorAll(".aba-link");
const tituloSpan  = document.querySelector(".titulo-cidade span");
const subtitulo   = document.querySelector(".titulo-cidade p");
const cardsCidades = document.querySelector(".cards-cidades");
const detalheImg  = document.querySelector(".detalhe-cidade > img");
const detalheTitulo = document.querySelector(".texto-detalhe-cidade h2");
const detalheDesc   = document.querySelector(".texto-detalhe-cidade p");
const iconInfo    = document.querySelector(".icon-card-info");

// ─── Renderiza cards de cidade ─────────────────────────────────────────────────

function renderCidades(estadoKey) {
  const estado = dados[estadoKey];
  const cidades = estado.cidades;

  cardsCidades.innerHTML = cidades.map((c) => `
    <article class="card-cidade"
             data-cidade="${c.id}"
             data-estado="${estadoKey}">
      <img src="${c.img}" alt="${c.nome}">
      <div class="info-card-cidade">
        <h3>${c.nome}</h3>
        <p>${c.desc}</p>
        <div class="avaliacao-cidade">
          <img src="src/assets/imgs/estados/estrela.svg" alt="">
          <span>${c.avaliacao} ${c.contagem} avaliações</span>
        </div>
        <button class="btn-explorar">Explorar</button>
      </div>
    </article>
  `).join("");

  // Listener de clique nos cards gerados
  cardsCidades.querySelectorAll(".card-cidade").forEach((card) => {
    card.addEventListener("click", () => {
      selecionarCidade(card.dataset.estado, card.dataset.cidade);
    });
  });

  // Seleciona a cidade destaque por padrão
  const destaqueId = cidades.find((c) => c.destaque)?.id || cidades[0].id;
  selecionarCidade(estadoKey, destaqueId);
}

// ─── Atualiza o card de detalhe (seção baixo) ─────────────────────────────────

function selecionarCidade(estadoKey, cidadeId) {
  const cidade = dados[estadoKey].cidades.find((c) => c.id === cidadeId);
  if (!cidade) return;

  // Remove destaque de todos e aplica só no clicado
  cardsCidades.querySelectorAll(".card-cidade").forEach((el) => {
    el.classList.remove("card-cidade--selecionada");
    const badge = el.querySelector(".badge-cidade");
    if (badge) badge.remove();
  });
  const cardAtivo = cardsCidades.querySelector(`[data-cidade="${cidadeId}"]`);
  if (cardAtivo) {
    cardAtivo.classList.add("card-cidade--selecionada");
    const badge = document.createElement("img");
    badge.src = "src/assets/imgs/estados/check-cidade.svg";
    badge.alt = "";
    badge.className = "badge-cidade";
    cardAtivo.appendChild(badge);
  }

  // Atualiza a seção de detalhe com animação
  const detalhe = cidade.detalhe;
  const detalheEl = document.querySelector(".conteudo-baixo");

  detalheEl.style.opacity = "0";
  detalheEl.style.transform = "translateY(8px)";

  setTimeout(() => {
    detalheImg.src = detalhe.img;
    detalheImg.alt = cidade.nome;
    detalheTitulo.childNodes[0].textContent = detalhe.titulo + " ";
    detalheDesc.textContent = detalhe.descricao;

    detalheEl.style.transition = "opacity 0.3s ease, transform 0.3s ease";
    detalheEl.style.opacity = "1";
    detalheEl.style.transform = "translateY(0)";
  }, 150);
}

// ─── Troca de estado ──────────────────────────────────────────────────────────

function selecionarEstado(estadoKey) {
  const estado = dados[estadoKey];

  // Atualiza aba ativa
  abas.forEach((a) => {
    a.classList.toggle("active", a.dataset.regiao === estadoKey);
  });

  // Atualiza título com animação
  tituloSpan.style.opacity = "0";
  subtitulo.style.opacity  = "0";

  setTimeout(() => {
    tituloSpan.textContent = estado.nome;
    subtitulo.textContent  = estado.descricao;
    tituloSpan.style.transition = "opacity 0.3s ease";
    subtitulo.style.transition  = "opacity 0.3s ease";
    tituloSpan.style.opacity = "1";
    subtitulo.style.opacity  = "1";
  }, 150);

  renderCidades(estadoKey);
}

// ─── Init ──────────────────────────────────────────────────────────────────────

abas.forEach((aba) => {
  aba.addEventListener("click", (e) => {
    e.preventDefault();
    selecionarEstado(aba.dataset.regiao);
  });
});

// Carrega SP por padrão
selecionarEstado("SP");
