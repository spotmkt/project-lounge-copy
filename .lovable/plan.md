## Objetivo

1. No mobile, fazer a frase **"Gravação + Edição à partir de R$485"** aparecer já na primeira dobra (sem precisar rolar).
2. No header, atualizar o endereço para incluir **"- BH"** e dar mais destaque visual a essa linha.

## Mudanças propostas

### 1. Subir o preço na primeira dobra (mobile)

Hoje a ordem no mobile é:
```
[Badge promo]
[Carrossel de imagens]
[Título / lista de bullets / preço / features / CTAs]
```

O preço fica abaixo do carrossel + título + 4 bullets, então só aparece após scroll.

**Solução**: no mobile, renderizar o preço logo abaixo do carrossel (acima do título), mantendo o desktop igual ao atual.

- Em `src/components/Hero.tsx`: adicionar uma segunda instância de `.hero-pricing` dentro do bloco `hero-badge-mobile` (ou criar um wrapper `hero-pricing-mobile`) que aparece somente no mobile, e esconder a versão desktop apenas no mobile (e vice-versa).
- Em `src/index.css`:
  - Esconder `.hero-pricing-mobile` por padrão (desktop).
  - No breakpoint mobile (≤768px), mostrar `.hero-pricing-mobile` e ocultar a `.hero-pricing` original que vive dentro de `.hero-text`.
  - Posicionar o `.hero-pricing-mobile` com `order` adequado para ficar logo abaixo do carrossel e dentro da primeira dobra.

Resultado mobile esperado:
```
[Badge promo]
[Carrossel de imagens]
[Gravação + Edição à partir de R$485]   <- visível na 1ª dobra
[Título, bullets, features, CTAs...]
```

### 2. Endereço "Rua Rio de Janeiro 471, Centro - BH" com mais destaque

Em `src/components/Header.tsx` (linha 14):
- Alterar o texto de `Rua Rio de Janeiro 471, Centro` para `Rua Rio de Janeiro 471, Centro - BH`.

Em `src/index.css` (`.logo-subtitle`, linha 169):
- Aumentar o tamanho da fonte (de `0.7rem` para algo como `0.85rem`).
- Aumentar o peso (`font-weight: 600`).
- Mudar a cor do texto para a cor de destaque (laranja `hsl(var(--accent))`) para alinhar com a identidade visual da marca, mantendo o ícone de pino na mesma cor.

## Arquivos afetados

- `src/components/Hero.tsx` — adicionar bloco do preço para mobile.
- `src/components/Header.tsx` — atualizar texto do endereço.
- `src/index.css` — regras para `.hero-pricing-mobile` (mostrar/ocultar por breakpoint) e ajustes de tipografia em `.logo-subtitle`.
