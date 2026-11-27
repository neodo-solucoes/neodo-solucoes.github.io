# Site NEODO Soluções Inteligentes

Site de neodo.com.br feito em React (Vite). Cada página é pré-gerada em HTML para carregar rápido e aparecer bem no Google.

## Onde fica cada coisa

| O que você quer mudar | Onde mexer |
|---|---|
| **Logo** | `src/assets/logo/logo.svg` (logo horizontal oficial, fundo branco, usada no cabeçalho) e `logo-negativo.svg` (fundo escuro, usada no rodapé). Ícone da aba e do celular: `public/favicon.svg` e `public/apple-touch-icon.png`. |
| **Imagens** | `src/assets/img/`. Substitua o arquivo mantendo o mesmo nome. A lista completa, com a descrição de cada foto, está em `src/config/imagens.js`. |
| **Telefone, e-mail, WhatsApp, LinkedIn, CNPJ** | `src/config/site.js` |
| **Menu e títulos das páginas no Google** | `src/config/site.js` |
| **Cores, fonte, cantos arredondados** | `src/styles/variables.css` |
| **Animações** | `src/styles/animations.css` |
| **Visual dos componentes** | `src/styles/components.css` |
| **Textos de cada página** | `src/pages/` (um arquivo por página) |
| **Partes repetidas** (cabeçalho, rodapé, cards, formulário) | `src/components/` |

Para colocar foto no topo das páginas Residencial e Negócios, adicione a imagem em `src/assets/img/`, importe em `src/config/imagens.js` e troque `heroResidencial: null` por `{ src: ..., alt: '...' }`.

## Rodar no computador

```bash
npm install
npm run dev        # abre em http://localhost:5173
```

## Publicar

O GitHub Pages publica a **raiz** da branch `main` deste repositório. O código-fonte fica nesta pasta (`codigo-fonte`).

Depois de alterar algo:

```bash
cd codigo-fonte
npm install          # só na primeira vez
npm run publicar     # gera o site e copia para a raiz do repositório
cd ..
git add -A && git commit -m "Atualiza site" && git push
```

## Domínio neodo.com.br

O site está no ar em https://neodo-solucoes.github.io. Para usar o domínio próprio, primeiro configure o DNS no Registro.br (zona do domínio neodo.com.br) e só depois informe o domínio no GitHub (Settings > Pages > Custom domain: **neodo.com.br**). Fazer na ordem inversa deixa o site fora do ar até o DNS propagar.

| Tipo | Nome | Valor |
|---|---|---|
| A | (vazio) | 185.199.108.153 |
| A | (vazio) | 185.199.109.153 |
| A | (vazio) | 185.199.110.153 |
| A | (vazio) | 185.199.111.153 |
| CNAME | www | neodo-solucoes.github.io |

## Formulário

O formulário envia para o e-mail definido em `src/config/site.js` pelo serviço gratuito FormSubmit.
No primeiro envio chega um e-mail de confirmação em atendimentoneodo@gmail.com: clique no link para ativar.
