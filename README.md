# RotaCultural

Guia digital cultural brasileiro que gera recomendações personalizadas de passeios, gastronomia e experiências culturais com base no destino e período da viagem do usuário.

> **Status atual:** Landing page (frontend estático).

---

## Sobre o projeto

A fragmentação da informação cultural é o maior desafio do turismo hoje. Dados sobre eventos, espaços culturais e experiências locais costumam estar dispersos, incompletos ou restritos a nichos. O RotaCultural centraliza essas informações em uma plataforma única, acessível e curada — conectando viajantes e moradores a experiências autênticas que vão além dos roteiros óbvios.

**Impacto esperado:**
- Fortalecimento da identidade e pertencimento das comunidades locais
- Estímulo econômico a museus, teatros, cafés e comércios do entorno
- Maior visibilidade para artistas e espaços culturais menores
- Preservação do patrimônio cultural por meio da divulgação

---

## Funcionalidades previstas

- Cadastro e autenticação de usuários
- Entrada de destino, período, orçamento e preferências culturais
- Geração de recomendações personalizadas por categoria (cultura, gastronomia, lazer, natureza)
- Organização de roteiro básico por dia de viagem
- Filtros por faixa de preço, tipo de experiência, mobilidade e idioma
- Informações detalhadas por local (descrição, custo estimado, endereço e horário)
- Sistema de avaliações e comentários por usuário autenticado
- Cadastro de estabelecimentos por produtores culturais (com validação do administrador)

**Fora do escopo:**
- Venda de passagens, reservas ou compra de ingressos
- Sistema próprio de pagamento
- Geolocalização em tempo real
- IA com aprendizado automático
- Substituição de agências de turismo ou guias profissionais

---

## Personas

**Mariana Oliveira, 27 anos — Analista de Marketing**
Viaja em feriados e férias curtas, busca experiências culturais autênticas mas tem pouco tempo para planejar. Sofre com a fragmentação de informações e excesso de opções genéricas.

**Rafael Souza, 22 anos — Estudante universitário**
Mora na cidade mas conhece pouco da própria região. Busca opções culturais acessíveis para o fim de semana com orçamento limitado (1 salário mínimo).

---

## Requisitos funcionais

| ID | Descrição |
|----|-----------|
| RF01 | Cadastro de usuários com nome, e-mail e senha |
| RF02 | Autenticação (login e logout) |
| RF03 | Entrada de destino, período, orçamento e preferências |
| RF04 | Geração de recomendações personalizadas |
| RF05 | Exibição de pontos turísticos, restaurantes, espaços culturais e eventos |
| RF06 | Organização por categoria (cultura, gastronomia, lazer, natureza) |
| RF07 | Filtros por preço, tipo de experiência, mobilidade e idioma |
| RF08 | Roteiro básico organizado por dia de viagem |
| RF09 | Detalhes de cada local (descrição, custo, endereço e horário) |
| RF10 | Avaliação de locais por nota e comentário |
| RF11 | Cadastro de estabelecimentos por produtores culturais |
| RF12 | Edição e exclusão de informações pelo administrador |

## Requisitos não funcionais

| ID | Descrição |
|----|-----------|
| RNF01 | Responsivo para mobile, tablet e desktop |
| RNF02 | Tempo de resposta das recomendações ≤ 3 segundos |
| RNF03 | Senhas armazenadas com criptografia |
| RNF04 | Controle de acesso: usuário comum, produtor cultural e administrador |
| RNF05 | Interface intuitiva e de fácil navegação |
| RNF06 | Disponibilidade 24h, exceto manutenção programada |
| RNF07 | Integridade e consistência no banco de dados |
| RNF08 | Proteção contra ataques comuns (ex: SQL Injection) |

## Regras de negócio

| ID | Regra |
|----|-------|
| RN01 | Recomendações só são geradas com destino e período informados |
| RN02 | Sugestões respeitam o orçamento informado |
| RN03 | Roteiro diário considera a quantidade de dias da viagem |
| RN04 | Locais de produtores culturais passam por validação do administrador |
| RN05 | Avaliações exigem usuário autenticado |
| RN06 | Um usuário pode avaliar cada local apenas uma vez (edição permitida) |
| RN07 | Sugestões organizadas por categoria |
| RN08 | Sistema prioriza locais compatíveis com as preferências do perfil |

---

## Stack tecnológica

| Camada | Tecnologia | Status |
|--------|------------|--------|
| Frontend | HTML, CSS, JavaScript | ✅ Implementado (landing page) |
| Backend | Java | ⏳ Não implementado |
| Banco de dados | MySQL | ⏳ Não implementado |
| Arquitetura | MVC | ⏳ Não implementado |
| Protocolo | HTTP/HTTPS | ⏳ Não implementado |
| Versionamento | Git | ✅ Em uso |

**Compatibilidade:** Google Chrome, Microsoft Edge e Mozilla Firefox.

---

## Estrutura do projeto (atual — landing page)

```
RotaCultural/
├── index.html
└── src/
    ├── Scripts/
    │   └── infoEstados.js
    ├── assets/
    │   └── imgs/
    │       ├── logo/
    │       ├── hero/
    │       ├── destinos/
    │       ├── estados/
    │       └── footer/
    └── styles/
        ├── global.css
        ├── variaveis.css
        ├── reset.css
        ├── header.css
        ├── hero.css
        ├── destinosDestaque.css
        ├── sectionInfoEstado.css
        ├── footer.css
        └── responsive.css
```

## Como rodar

Por ser atualmente um projeto estático, basta abrir o `index.html` no navegador ou usar um servidor local:

```bash
# Python
python -m http.server 3000

# Node.js
npx serve .
```

---

## Design

Protótipo no Figma: [GuiaCultural](https://www.figma.com/design/RpquYVxWJxAGNRmXSoFI2t/GuiaCutural?node-id=274-268&t=LC6nd8hO1VUtXun5-1)

---

## Equipe

| Nome |
|------|
| Felipe Pereira Teles de Jesus |
| Nicolly Povidaico Duarte do Nascimento |
| Isabela Andrelino Souza |
| Rhuan Santana da Silva |
| Samuel Fernando Pereira dos Santos |
