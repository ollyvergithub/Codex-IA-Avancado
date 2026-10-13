# Design System

> Especificação visual derivada da captura de referência. Os valores de cor, medidas e tipografia são aproximações visuais; valide-os com os arquivos originais de marca e imagens quando estiverem disponíveis.

## 1. Visão geral do estilo visual

A interface apresenta um site editorial de personal trainer com estética fitness contemporânea e premium acessível. O branco amplo e os blocos de conteúdo arejados dão leveza; o verde petróleo ancora a marca e o verde-lima conduz a atenção para ações, números e estados selecionados. Fotografias reais de treino e evolução corporal trazem energia e prova social, enquanto cartões de cantos arredondados organizam os serviços sem deixar o conjunto com aparência de painel de aplicativo.

- **Sensação:** ativa, confiante, acolhedora e orientada a resultados; a linguagem visual equilibra desempenho físico e acompanhamento pessoal.
- **Sofisticação:** média-alta. A composição é limpa e bem espaçada, com poucos efeitos, tipografia sem serifa de boa legibilidade e fotografia como principal recurso expressivo.
- **Contraste:** alto nos títulos escuros sobre branco e no verde-lima sobre verde profundo; moderado nos cartões em cinza e sálvia. Texto pequeno deve manter contraste acessível, evitando copiar tons acinzentados muito pálidos da captura.
- **Hierarquia:** título grande no hero; títulos de seção em peso forte; CTAs curtos em lima; imagem em escala generosa; detalhes, certificações e listas com menor ênfase.
- **Personalidade da marca:** especialista, motivadora e direta. A marca comunica competência por meio de certificações, depoimentos e resultados, sem recorrer a ornamentos luxuosos ou linguagem visual agressiva.

## 2. Paleta de cores

Estimativas a partir da captura; os valores podem variar por compressão, iluminação das fotos e reprodução de tela.

| Token semântico | HEX aproximado | Aplicação | Função visual |
|---|---|---|---|
| `color.background.page` | `#FFFFFF` | Fundo geral e áreas de respiro | Mantém a página clara e deixa fotos e títulos em evidência. |
| `color.background.soft` | `#F3F4F2` | FAQ, cartões neutros e campos | Separa grupos sem criar divisórias pesadas. |
| `color.surface.sage` | `#EEF1E8` | Cartões de serviço e pacote claro | Acrescenta um tom natural e suave à composição. |
| `color.brand.deep` | `#073C38` | Hero, pacote em destaque e rodapé | Cor institucional; transmite estabilidade e profundidade. |
| `color.brand.deep-hover` | `#052F2D` | Hover de superfícies e botões escuros | Aprofunda discretamente a interação. |
| `color.accent.lime` | `#B6F20A` | Botões, links destacados, valor e selo | Foco energético para ações e dados-chave. |
| `color.accent.lime-hover` | `#A5DC00` | Hover de CTA lima | Indica interação mantendo identidade. |
| `color.text.primary` | `#202523` | Títulos, preços e texto de maior prioridade | Leitura nítida sem o peso do preto absoluto. |
| `color.text.secondary` | `#626A66` | Descrições, metadados e corpo | Reduz a ênfase preservando legibilidade. |
| `color.text.inverse` | `#FFFFFF` | Texto sobre verde profundo e imagens escuras | Contraste para áreas de marca escuras. |
| `color.border.subtle` | `#D9DEDA` | Botões contornados, inputs e divisores | Delimitação discreta em fundos claros. |
| `color.state.success` | `#138A63` | Indicadores positivos e certificações | Estado afirmativo; pode ser usado em ícones pequenos. |
| `color.state.disabled` | `#AEB5B1` | Ações indisponíveis e texto desabilitado | Comunica indisponibilidade sem competir com conteúdo ativo. |

**Botões:** primário lima `#B6F20A` com texto `#202523`; alternativo escuro `#073C38` com texto branco; secundário contornado com fundo transparente, borda `#B9C0BC` e texto escuro. Em fundos escuros, o botão lima permanece o CTA principal.

## 3. Tipografia

A captura sugere uma sans-serif geométrica contemporânea, com formas compactas e títulos pesados. Não é possível identificar a família exata. Use **Inter** como alternativa segura; **Manrope** ou **Geist** também combinam com a geometria da interface. Mantenha uma única família, com fallback `Arial, sans-serif`.

Valores para desktop; em telas pequenas, reduza títulos de forma fluida com `clamp()`.

| Nível | Tamanho / peso | Line-height | Tracking | Uso |
|---|---|---|---|---|
| Hero H1 | `48–60px`, 700–800 | `0.98–1.08` | `-0.04em` a `-0.02em` | Promessa principal em 2–3 linhas; palavra-chave pode receber lima. |
| Título de seção H2 | `32–40px`, 700–800 | `1.08–1.18` | `-0.03em` | Títulos como serviços, depoimentos e transformações. |
| Título de bloco H3 | `20–24px`, 650–750 | `1.15–1.25` | `-0.02em` | Nome de serviço, experiência e chamada em destaque. |
| Subtítulo / preço | `22–32px`, 700–800 | `1.05–1.2` | `-0.02em` | Preços grandes e mensagens secundárias de alto destaque. |
| Corpo | `15–17px`, 400–500 | `1.5–1.65` | normal | Descrições, depoimentos e introduções. Limite a largura para leitura confortável. |
| Texto de cartão / lista | `13–15px`, 400–500 | `1.4–1.55` | normal | Descrições breves, benefícios e certificações. |
| Label / auxiliar | `11–13px`, 500–600 | `1.3–1.45` | `0.01em` a `0.03em` | Navegação, eyebrow, unidades de preço e metadados. Não usar abaixo de 11px em conteúdo essencial. |
| Botão | `13–15px`, 600–700 | `1` | normal | CTA curto, com contraste e área de toque suficientes. |

No mobile: H1 `36–44px`, H2 `28–32px`, corpo `15–16px`. Reserve caixa alta para pequenos rótulos quando necessário; títulos e parágrafos usam capitalização normal.

## 4. Espaçamentos

Adote uma escala baseada em múltiplos de 4px. Os intervalos maiores refletem as pausas claras entre seções observadas na página.

| Token | Valor | Uso sugerido |
|---|---:|---|
| `space.xs` | `4px` | Ícone e label, pequenos ajustes internos. |
| `space.sm` | `8px` | Elementos relacionados e itens de lista compactos. |
| `space.md` | `16px` | Gaps padrão, padding de controles e texto auxiliar. |
| `space.lg` | `24px` | Padding de cartões compactos e separação de grupos. |
| `space.xl` | `32px` | Distância entre título e conteúdo próximo. |
| `space.2xl` | `48px` | Padding de cartões maiores e respiro entre componentes. |
| `space.3xl` | `64px` | Separação típica entre seções em desktop. |
| `space.4xl` | `88px` | Pausas de seção amplas em desktop. |

- **Entre seções:** aproximadamente `72–104px` em desktop; `48–64px` em mobile.
- **Padding de conteúdo:** `24–32px` em cartões de serviço; `32–48px` em blocos de destaque; `16–24px` em mobile.
- **Título e texto:** `12–20px`; **texto e CTA:** `20–28px`.
- **Gaps:** `16–24px` dentro de grupos; `24–32px` entre cartões. Listas usam `8–12px`.
- **Container:** largura máxima aproximada de `1280px` (a captura não permite aferição exata); usar `width: min(100% - 2 * var(--gutter), var(--container-max))`.
- **Margens laterais:** `48–64px` em desktop amplo; `24–32px` em tablet; `20–24px` em mobile, reduzindo a `16px` em telas estreitas.

## 5. Grid e layout

A página usa um container centralizado e seções alternadas entre conteúdo em colunas, trilhos horizontais de cartões e composições fotográficas. A referência mostra navegação compacta, hero em duas áreas, lista de serviços em cartões, apresentação em duas colunas, bloco de vídeo/citação dividido, preços em três colunas, galeria larga e FAQ estreito centralizado.

- **Container:** `max-width: 1280px` (estimado), centralizado; hero e galeria podem se aproximar das margens do container ou ocupar quase toda a largura disponível.
- **Grid base:** 12 colunas, gap de `24px`; para cards usar 3–4 colunas conforme a seção.
- **Alinhamento:** títulos de seção predominantemente à esquerda; seção de preços e FAQ centralizadas; conteúdo interno alinhado ao início.
- **Hero:** imagem como fundo ou coluna direita ocupando cerca de 50–55%; painel de texto à esquerda, com overlay verde profundo para manter legibilidade.
- **Apresentação:** foto à esquerda (aprox. 40–45%) e texto, certificações e CTA à direita.
- **Depoimentos:** texto em uma coluna e mosaico de retratos redondos na outra.
- **Pacotes:** três cartões com larguras equivalentes; o do meio recebe superfície verde profunda e destaque lima.
- **Mobile:** empilhar as colunas, manter texto antes da imagem quando a mensagem depender dele, reduzir o hero sem cortar rosto ou CTA; transformar trilhos de cards e depoimentos em carrossel horizontal acessível ou pilha. Preços passam a uma coluna ou rolagem horizontal controlada.
- **Tablet:** duas colunas para cartões e conteúdo editorial; manter imagens proporcionais e reduzir gaps. Evitar comprimir texto em colunas menores que aproximadamente `280px`.
- **Galeria:** mosaico de imagens com aspect ratio consistente, recorte `cover`, cantos arredondados e gaps pequenos; permitir que a galeria chegue às bordas visuais da seção.
- Em breakpoints, reorganize conteúdo sem esconder informações essenciais. Defina a ordem no DOM para leitura natural e preserve foco e navegação por teclado.

## 6. Bordas e radius

- **Cards e imagens:** `12–16px`; a captura usa cantos nitidamente arredondados, sem aparência de pílula.
- **Botões:** `999px` nos CTAs pequenos em formato cápsula; botões maiores podem usar `8–12px` caso se deseje área retangular.
- **Inputs:** `8–12px`.
- **Contêineres de mídia/hero:** `16–20px`.
- **Espessura de borda:** `1px` para contornos e estados de foco; `1–2px` somente em controles de destaque.
- **Cor:** `#D9DEDA` em superfícies claras; em fundos escuros, usar branco com opacidade baixa (`rgba(255,255,255,.18)`).
- **Divisores:** linhas de `1px`, cinza claro, apenas para separar grupos relacionados; priorize espaço em branco no lugar de linhas entre seções.

## 7. Sombras e profundidade

O layout é majoritariamente **flat**. A profundidade vem do contraste entre superfícies, das imagens e da sobreposição escura no hero, não de cartões flutuantes.

- Em cards, nenhuma sombra ou uma sombra quase imperceptível: `0 4px 16px rgba(18, 35, 31, 0.06)`.
- Em controles flutuantes sobre imagem, usar sombra de apoio curta: `0 2px 8px rgba(0, 0, 0, 0.16)`.
- Aplicar gradiente/overlay escuro sobre fotografia quando texto estiver por cima, como no hero: verde profundo de opacidade alta junto ao texto, diminuindo em direção à imagem.
- Não aplicar glow lima, blur decorativo ou glassmorphism em cartões comuns. Esses efeitos destoariam da limpeza editorial da referência.

## 8. Botões e CTAs

| Tipo | Aparência e uso |
|---|---|
| **Primário** | Fundo `#B6F20A`, texto `#202523`, padding aproximado `12px 20px`, radius cápsula, fonte `13–15px/700`. Usar para ação principal da seção, como marcar aula ou iniciar plano. |
| **Secundário** | Fundo transparente ou branco, borda `1px solid #B9C0BC`, texto `#202523`, padding `11px 20px`, radius cápsula. Usar para ação alternativa, como agendar ou consultar. |
| **Escuro** | Fundo `#073C38`, texto branco, padding igual ao primário. Usar sobre superfícies claras quando a ação não for o destaque lima ou em combinação com CTA lima. |
| **Ghost/link** | Sem fundo e sem borda; texto verde profundo ou lima em fundo escuro. Incluir seta/ícone apenas quando indicar navegação. Usar para ações de menor prioridade. |

- **Hover:** primário passa a `#A5DC00`, com leve transição de cor e deslocamento vertical de até `1px`; secundário recebe fundo verde muito claro; escuro passa a `#052F2D`.
- **Active:** remover deslocamento, escurecer ligeiramente a superfície e manter feedback imediato.
- **Focus-visible:** outline de `2px` em lima ou verde profundo, offset de `3px`; não remover o foco sem substituto visível.
- **Disabled:** fundo `#E5E8E5`, texto `#929A95`, sem sombra; cursor e estado acessível indicam indisponibilidade.
- A área acionável deve ter pelo menos `44 × 44px` em dispositivos touch, mesmo que o botão visual pareça pequeno.

## 9. Cards e blocos de conteúdo

- **Serviços:** superfície sálvia `#EEF1E8` ou cinza `#F3F4F2`, radius `14px`, imagem ocupando a parte inferior ou metade do cartão, título forte e descrição curta. Padding textual de `20–24px`; preservar recorte uniforme entre imagens.
- **Pacotes:** cartões claros sem sombra perceptível; o plano recomendado usa verde profundo, texto branco e preço em lima. Incluir nome, preço, CTA e lista de benefícios em sequência clara. Manter padding de `24–32px` e alinhamento consistente entre colunas.
- **FAQ:** linhas ou painéis em cinza muito claro, radius `6–8px`, pergunta em peso `600–700`, ícone de expandir alinhado à direita; resposta em texto secundário. Mostrar foco e estado aberto de forma perceptível.
- **Certificações/listas:** evitar card individual; usar ícones pequenos em verde e separação vertical compacta para manter aparência leve.
- **Interação:** hover pode elevar o card em `2px` e reforçar contraste da borda, com transição curta (`160–220ms`). Não depender de hover para revelar informação essencial.
- **Imagens:** card fotográfico sem padding interno no trecho da imagem; `object-fit: cover`, raio aplicado ao contêiner e texto nunca sobre área visualmente agitada sem overlay.

## 10. Imagens, ícones e elementos visuais

- **Fotografia:** imagens reais de treino, orientação, atendimento e resultados são centrais para a identidade. Preferir iluminação natural ou de academia, pessoas em movimento ou interação autêntica, diversidade de corpos e enquadramento editorial. Evitar banco de imagens excessivamente posado ou tratamento saturado.
- **Tratamento:** cores fotográficas naturais, contraste moderado e leve escurecimento apenas onde houver texto sobreposto. Usar `object-fit: cover` e definir `object-position` por imagem para proteger rostos e ação durante o recorte responsivo.
- **Galeria de evolução:** pares ou grupos de antes/depois em quadros coerentes, com recorte e proporção consistentes. Obter consentimento para imagens de clientes e não alterar a aparência física por retoque enganoso.
- **Retratos de depoimento:** círculos pequenos, recorte centralizado, variedade de tamanhos e espaçamento irregular controlado para compor o mosaico; manter alternativa textual para conteúdo relevante.
- **Ícones:** simples, lineares ou sólidos de traço consistente, em verde profundo ou lima. Tamanho habitual `16–20px`; ícones em círculos de ação podem usar `28–36px`. Preferir uma família única de ícones e rótulo acessível em botões só com ícone.
- **Elementos decorativos:** tipografia ampliada em baixa opacidade sobre áreas escuras (como palavra de fundo no hero/faixa) pode reforçar movimento, desde que permaneça decorativa e não afete contraste ou leitura. Indicadores de vídeo e navegação devem ficar discretos e com superfície contrastante.
- **Gradientes e fundos especiais:** gradiente verde escuro sobre fotografia do hero e áreas verdes sólidas são suficientes. Evitar gradientes multicoloridos, texturas ostensivas e ornamentos sem função.

### Recomendações de implementação

1. Centralize cores, escala tipográfica, espaçamentos, radius e sombras em custom properties CSS; use os nomes semânticos desta documentação.
2. Trate os HEX e as dimensões como ponto inicial: refine com os assets originais e teste contraste e legibilidade em tamanhos reais.
3. Use imagens com proporções definidas, carregamento responsivo e texto alternativo contextual; conteúdo puramente decorativo deve ter `alt=""`.
4. Preserve hierarquia e CTA em todos os breakpoints; não reduza texto essencial abaixo de tamanho confortável para caber na composição.
