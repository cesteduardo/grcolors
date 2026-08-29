# GR Colors

Aplicação open source para criar, analisar, visualizar e exportar paletas de cores. Todo o processamento acontece localmente no navegador, sem conta, servidor de aplicação ou envio de imagens.

## Funcionalidades

- gerador de paletas com bloqueio e histórico;
- catálogo pesquisável de paletas;
- extração de cores de imagens;
- contraste WCAG 2.2 e análise APCA;
- simulação de deficiências de visão de cores;
- prévias em interfaces, marcas, tipografia, padrões e ilustrações;
- conversões HEX, RGB, HSL, HSB, CMYK, LAB, LCH, OKLCH, LUV, XYZ e HWB;
- escalas para Tailwind CSS e tokens para temas claro e escuro;
- exportação para CSS, SCSS, JSON, SVG, PDF e ASE;
- assistente local para estratégia de cores;
- compartilhamento de paletas pela URL;
- português, espanhol, inglês e chinês simplificado.

## Tecnologias

React, TypeScript, Vite, Tailwind CSS e Lucide React.

## Requisitos

- Node.js 20 ou mais recente;
- npm 10 ou mais recente.

## Instalação

```bash
git clone https://github.com/cesteduardo/grcolors.git
cd grcolors
npm ci
npm run dev
```

O Vite mostrará o endereço local, normalmente `http://localhost:5173`.

## Comandos

```bash
npm run dev      # servidor de desenvolvimento
npm run build    # verificação TypeScript e build em dist/
npm run preview  # prévia local do build
```

## Estrutura

```text
grcolors/
├── public/              # fontes e ícones públicos
├── src/
│   ├── App.tsx          # interface e ferramentas
│   ├── ColorPanel.tsx   # painel detalhado de cor
│   ├── color.ts         # conversões, harmonias e análises
│   ├── i18n.ts          # traduções
│   ├── index.css        # estilos e tokens visuais
│   └── main.tsx         # entrada React
├── index.html
├── vite.config.ts
└── package.json
```

## Privacidade e acessibilidade

As imagens são processadas pelo Canvas no próprio navegador. Paletas salvas e idioma são armazenados somente em `localStorage`. O projeto não possui analytics, autenticação ou API externa.

O GR Colors oferece navegação por teclado, foco visível, rótulos para tecnologias assistivas, preferência por movimento reduzido, testes WCAG e simulações de visão de cores.

## Build e publicação

```bash
npm ci
npm run build
```

O resultado será criado em `dist/`. Como o build usa caminhos relativos, pode ser hospedado na raiz ou em uma subpasta.

As URLs compartilháveis usam o caminho do navegador. Em hospedagens estáticas, configure um fallback de SPA que devolva `index.html` para rotas inexistentes.

## Como contribuir

1. Faça um fork.
2. Crie uma branch: `git switch -c feature/minha-melhoria`.
3. Instale as dependências com `npm ci`.
4. Faça a alteração e execute `npm run build`.
5. Abra um pull request explicando o problema e a solução.

Ao adicionar texto visível, inclua a tradução em inglês, espanhol e chinês em `src/i18n.ts`. Ao alterar cálculos de cor ou contraste, descreva no pull request como o resultado foi verificado.

## Licença

Distribuído sob a licença MIT. Consulte [LICENSE](LICENSE).
