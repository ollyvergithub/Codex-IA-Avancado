---
name: react-seo
description: Audita e implementa melhorias de SEO em aplicações React após inspecionar a versão, as rotas, páginas e componentes do projeto. Use somente quando o usuário invocar ou mencionar explicitamente esta skill.
---

# React SEO

Quando o usuário invocar `$react-seo` ou pedir explicitamente o uso da skill, avalie e implemente melhorias de SEO para o projeto atual. Se o pedido for apenas uma análise, entregue o diagnóstico e a proposta sem editar arquivos.

## Processo

1. Leia `package.json` e o lockfile correspondente para identificar as versões efetivamente instaladas de React, React DOM, framework, roteador e bibliotecas relevantes. Consulte a documentação oficial da versão identificada quando o comportamento da API ou do framework for incerto. Não presuma recursos de versões mais recentes.
2. Mapeie a aplicação: arquivos de entrada, configuração de build e deploy, rotas, páginas, layouts e componentes compartilhados que afetam conteúdo ou metadados. Siga as importações e a configuração do roteador para cobrir cada rota pública. Registre quais rotas são indexáveis, privadas, duplicadas ou não encontradas.
3. Inspecione o HTML entregue inicialmente, metadados estáticos e dinâmicos, conteúdo semântico, imagens, links, fontes e scripts. Considere como buscadores recebem o conteúdo (SSR, geração estática, pré-renderização ou SPA) antes de escolher uma implementação.
4. Implemente mudanças proporcionais à arquitetura existente e compatíveis com as versões detectadas. Não migre framework, adicione dependências ou configure serviço externo sem necessidade comprovada. Não invente domínio, conteúdo, fatos estruturados, avaliações, credenciais ou informações da empresa.
5. Resuma as mudanças por área e as rotas cobertas; informe claramente o que foi verificado e limitações, incluindo a necessidade de domínio/conteúdo real quando aplicável.

## Critérios de SEO

- Defina título e descrição úteis e distintos por página indexável; configure idioma, viewport, canonical e diretivas robots de acordo com a rota e o ambiente.
- Configure Open Graph e metadados sociais com URLs absolutas válidas, imagens existentes e texto coerente com a página.
- Use dados estruturados JSON-LD apenas quando correspondam ao conteúdo visível e a um tipo suportado apropriado. Evite marcação enganosa, duplicada ou gerada a partir de dados não confirmados.
- Crie ou atualize `robots.txt` e sitemap XML somente com URLs canônicas públicas e absolutas. Não inclua rotas privadas, parâmetros, páginas de erro ou destinos sem canonicalização definida. Não bloqueie recursos necessários à renderização.
- Preserve HTML semântico, hierarquia de títulos, links rastreáveis, texto alternativo útil e conteúdo principal acessível sem depender de interação. Evite duplicar metadados entre HTML base e renderização por rota.
- Considere LCP, INP e CLS: investigue imagens principais e dimensões, carregamento de fontes, conteúdo que desloca layout e JavaScript/scripts de terceiros. Faça otimizações alinhadas a evidências e ao impacto real, sem adicionar preload ou lazy loading indiscriminadamente.

## Compatibilidade React e renderização

- Escolha a API de metadados pelo framework e versão realmente usados. React 19 permite elementos `<title>`, `<meta>` e `<link>` em componentes e os move para o `<head>`; confirme se o roteador e o modo de renderização da aplicação produzem os metadados certos para cada URL.
- Em versões anteriores, prefira a solução já presente no projeto ou uma biblioteca compatível com as versões atuais. Não introduza uma API do React 19 em projeto antigo.
- Em SPA client-side, metadados alterados após hidratação podem não bastar para pré-visualizações sociais ou rastreadores que não executam JavaScript. Se a cobertura exigir HTML distinto por URL, avalie primeiro os recursos existentes de SSR, geração estática ou pré-renderização. Explique limites e custo de qualquer mudança arquitetural e mantenha a implementação proporcional ao pedido.
- Garanta que mudanças respeitem o modo de renderização e hidratação, sem acessar `window`/`document` durante renderização no servidor. Evite efeitos para conteúdo que pode ser produzido declarativamente.

## Implementação e verificação

- Preserve os padrões, componentes e dependências existentes sempre que possível. Centralize metadados compartilhados e mantenha valores específicos junto à definição da rota/página quando a arquitetura favorecer isso.
- Confira que cada rota indexável tem um único título, descrição e canonical coerentes e que as rotas excluídas usam a diretiva correta.
- Use verificações já disponíveis no projeto, como build, lint ou validação de sitemap, quando forem pertinentes; não acrescente ferramentas ou testes só para satisfazer uma lista. Não afirme que Core Web Vitals passaram sem medição de campo ou laboratório. Diferencie otimização de código de resultados reais de métricas.
- Se faltar um domínio público, imagem social, endereço comercial ou dado de negócio necessário, use configuração existente se confiável; caso contrário, deixe claro o valor que precisa ser fornecido e não publique um placeholder como URL final.
