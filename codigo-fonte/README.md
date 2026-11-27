# Site NEODO Soluções Inteligentes

Site de neodo.com.br feito em React (Vite). Cada página é pré-gerada em HTML para carregar rápido e aparecer bem no Google.

## Onde fica cada coisa

| O que você quer mudar | Onde mexer |
|---|---|
| **Logo** | `src/assets/logo/logo.svg` (fundo branco) e `logo-negativo.svg` (fundo escuro). Substitua os arquivos mantendo o nome. Pode ser PNG: troque a extensão também em `src/config/imagens.js`. |
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

Cada `git push` na branch `main` publica sozinho no GitHub Pages (`.github/workflows/deploy.yml`).
No repositório: Settings > Pages > Source: **GitHub Actions**. Domínio personalizado: **neodo.com.br**.

DNS no Registro.br (zona do domínio neodo.com.br):

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
