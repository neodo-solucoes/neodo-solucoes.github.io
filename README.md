# NEODO — site institucional

Interface estática responsiva, com tipografia Manrope local e logomarca original. HTML, CSS e JS sem framework.

## Manutenção

- `src/pages/`: conteúdo das páginas.
- `src/layout.html`, `src/header.html`, `src/footer.html`: componentes compartilhados.
- `site.css` e `site.js`: design e interações.
- `python scripts/build.py`: gera páginas na raiz.
- `python scripts/check.py`: verifica estrutura e links locais.
- `python -m http.server 8000`: prévia local.
- `IMAGENS.md`: mapa dos espaços para futuras imagens, ainda provisórios.

## Publicação e validação

GitHub Pages: branch main, pasta raiz. Preserve `.nojekyll`. Confirme domínio, DNS e HTTPS; as canônicas existentes usam neodo.com.br. O formulário prepara uma mensagem para envio manual no WhatsApp, sem backend. A agenda é uma solicitação por e-mail. Não foram criados contatos fictícios nem cases de clientes. Revise política de privacidade, informações comerciais e faça testes reais de responsividade, acessibilidade e Lighthouse antes de considerar a entrega definitiva.
