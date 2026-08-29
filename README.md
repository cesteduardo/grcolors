# GR Colors

Ferramenta completa para criação, exploração, análise e aplicação de paletas de cores. O projeto reúne recursos para designers e desenvolvedores em uma interface responsiva, acessível e executada inteiramente no navegador.

## Demonstração

Esta pasta contém a versão estática de produção do GR Colors. Para visualizar localmente, sirva os arquivos por HTTP:

```bash
npx serve .
```

Depois, abra o endereço informado pelo servidor no navegador.

> Abrir o `index.html` diretamente pode impedir o funcionamento correto das rotas e dos módulos JavaScript. Prefira um servidor HTTP local.

## Recursos

- geração de paletas com bloqueio individual de cores;
- harmonias monocromáticas, análogas, complementares, triádicas e outras combinações;
- catálogo de paletas com busca, filtros e favoritos;
- extração de cores de imagens com pontos de amostragem ajustáveis;
- verificação de contraste conforme WCAG 2.2;
- análise complementar por APCA;
- simulação de diferentes tipos de visão de cores;
- visualização da paleta em interfaces, marcas, tipografia, padrões e ilustrações;
- seletor com conversões HEX, RGB, HSL, HSB, CMYK, LAB, LCH, OKLCH, LUV, XYZ e HWB;
- geração de escalas para Tailwind CSS;
- tokens semânticos para temas claro e escuro;
- exportação em CSS, SCSS, JSON, SVG, PDF, ASE e outros formatos;
- assistente de cores processado localmente;
- compartilhamento de paletas pela URL;
- interface em português, espanhol, inglês e chinês simplificado.

## Privacidade

O GR Colors funciona no navegador e não exige conta. Paletas salvas e preferências de idioma são armazenadas localmente no dispositivo por meio de `localStorage`. Imagens usadas para extração de cores são processadas no próprio navegador.

## Acessibilidade

O projeto inclui:

- avaliação de contraste para texto normal, texto grande e componentes;
- indicação dos níveis AA e AAA;
- simulações de protanopia, deuteranopia, tritanopia e acromatopsia;
- navegação por teclado e contornos de foco visíveis;
- atributos de idioma e rótulos para tecnologias assistivas;
- suporte à preferência de movimento reduzido.

## Tecnologias

A aplicação de origem foi construída com:

- React;
- TypeScript;
- Vite;
- Tailwind CSS;
- Lucide Icons.

Esta pasta contém somente os artefatos compilados necessários para publicação.

## Estrutura desta versão

```text
colors/
├── assets/          # JavaScript e CSS compilados com hash
├── index.html       # ponto de entrada da aplicação
└── README.md        # documentação do projeto
```

O código foi dividido em chunks independentes para melhorar cache e manutenção:

- interface principal;
- React;
- ícones;
- mecanismos de cor;
- traduções;
- painel detalhado carregado sob demanda.

## Publicação

O conteúdo pode ser hospedado em qualquer serviço de arquivos estáticos, como Cloudflare Pages, Netlify, Vercel ou GitHub Pages. Publique o conteúdo desta pasta na raiz do site.

Como as paletas podem ser compartilhadas pelo caminho da URL, o servidor deve redirecionar rotas desconhecidas para `index.html` com status `200`. Isso preserva a URL para que a aplicação recupere a paleta no navegador.

## Desenvolvimento

O código-fonte não está incluído nesta pasta de distribuição. No projeto-fonte, o fluxo padrão é:

```bash
npm install
npm run dev
npm run build
```

O resultado de `npm run build` deve ser copiado para esta pasta antes de uma nova publicação.

## Identidade

GR Colors é uma ferramenta da GR Brands. A interface utiliza a identidade visual, a tipografia e os princípios de design da marca.

## Licença e uso

Antes de redistribuir ou modificar publicamente o projeto, confirme a licença definida pelo responsável da GR Brands. Marcas, logotipos e elementos de identidade visual permanecem pertencentes aos seus respectivos titulares.
