# NEODO — Site institucional
Site estático com HTML, CSS e JavaScript. O código original do Next.js não estava no repositório; agora há templates compartilhados.
## Desenvolvimento
Edite src/pages/, src/pages.json, src/header.html, src/footer.html e src/layout.html. Estilos novos em site.css; estilos e fontes legados em _next/static/. Interações em site.js.
- python scripts/build.py — regenerar HTML
- python scripts/check.py — validar estrutura e links locais
- python -m http.server 8000 — prévia local
## Antes de publicar
- Confirme domínio neodo.com.br, DNS, HTTPS e GitHub Pages. Canônicas e sitemap usam .html e o domínio anteriormente indicado. Não foi criado CNAME sem confirmação.
- Preserve o Gmail até configurar e testar e-mail corporativo.
- Formulário prepara mensagem no WhatsApp; não há backend. Para envio direto, configure serviço de formulário, proteção antiabuso e revise política. Não exponha segredos.
- Solicitar reunião abre e-mail; substitua por agenda apenas quando configurada.
- Projetos contém exemplos ilustrativos; adicione casos reais, fotos e resultados autorizados. Revise créditos, links e licenças das imagens.
- Revise dados empresariais, escopo, atribuições profissionais, cobertura geográfica e política de privacidade.
- Teste Chrome/Firefox/Safari, teclado, leitor de tela, 320/375/768/1024/1440px e Lighthouse. Validação estática não substitui testes reais.
- Publique somente os HTML e recursos de produção se usar uma pasta de saída. Preserve .nojekyll para _next/.
