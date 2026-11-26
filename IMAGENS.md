# Imagens — substituição posterior

A versão inicial utiliza fundos tecnológicos provisórios em CSS, não fotografias. A logomarca oficial `logo.svg` permanece intacta. Para adicionar uma fotografia, coloque um WebP em `img/` e insira `<img src="./img/NOME.webp" alt="" width="..." height="..." loading="lazy">` dentro da `.media` identificada por `data-asset`. Nos banners, use imagem panorâmica com foco à direita, sem texto ou logotipo. Use `loading="eager" fetchpriority="high"` para a imagem principal. Aplique textos alternativos se a imagem comunicar informação não repetida. Regere com `python scripts/build.py`. Revise a licença e os créditos; não apresente imagens conceituais como fotos de instalações ou clientes da NEODO.

## Slots disponíveis

- `aplicacao-acesso`
- `aplicacao-atendimento`
- `aplicacao-casa`
- `aplicacao-dados`
- `aplicacao-integracao`
- `aplicacao-luz`
- `aplicacao-monitoramento`
- `aplicacao-retrofit`
- `aplicacao-visao`
- `contato-tecnologia`
- `hero-contato`
- `hero-conteudos`
- `hero-erro`
- `hero-home`
- `hero-industria`
- `hero-negocios`
- `hero-privacidade`
- `hero-projetos`
- `hero-residencial`
- `hero-sobre`
- `hero-solucoes`
- `segmento-industria`
- `segmento-negocios`
- `segmento-residencial`
- `servico-industria-1`
- `servico-industria-2`
- `servico-industria-3`
- `servico-industria-4`
- `servico-industria-5`
- `servico-industria-6`
- `servico-negocios-1`
- `servico-negocios-2`
- `servico-negocios-3`
- `servico-negocios-4`
- `servico-negocios-5`
- `servico-negocios-6`
- `servico-residencial-1`
- `servico-residencial-2`
- `servico-residencial-3`
- `servico-residencial-4`
- `sobre-laboratorio`
