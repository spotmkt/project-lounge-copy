## Objetivo
Otimizar as páginas de Eventos, Coworking, Sala de Reunião e Locação para Filmagem conforme o diagnóstico mobile do PageSpeed, preservando o visual e o funcionamento atual.

## Diagnóstico confirmado
- LCP: 8,7 s; primeira exibição: 3,6 s; bloqueio total: 630 ms; estabilidade visual boa: 0,003.
- Imagens: economia estimada de 2.016 KiB, principalmente `IMG_6412`, `edificio_externo`, `IMG_6405` e `transmissao_ao_vivo`.
- Fontes e estilos bloqueiam cerca de 1.030 ms da primeira exibição.
- Arquivos sem cache eficiente somam cerca de 2.572 KiB; parte é do próprio site e parte vem do Facebook/GTM.
- O mapa incorporado adiciona uma carga externa em todas as páginas.

## Alterações
- Gerar versões WebP menores e responsivas das fotos usadas nas quatro páginas.
- Fazer cada página carregar sua imagem principal com prioridade correta; manter as demais sob demanda.
- Remover a fonte externa do caminho inicial e usar uma fonte local do sistema com aparência equivalente.
- Trocar o mapa pesado por uma prévia leve e acessível que abre o Google Maps ao toque.
- Carregar as páginas de CRM separadamente para não enviar gráficos e ferramentas administrativas junto às páginas públicas.
- Preservar GTM, eventos de conversão, textos, preços, layout e destinos dos botões.
- Validar as quatro páginas no celular e conferir que os formulários continuam enviando normalmente.

## Destino dos formulários
- O formulário de `/eventos` salva na tabela `leads` do Supabase. Nome e telefone ficam em campos próprios; formato vira o interesse; e-mail, empresa, data, espaço, período, dias, público, segmento e objetivo ficam reunidos na observação. Depois exibe a confirmação na página, sem abrir WhatsApp.
- O formulário principal e o formulário do botão flutuante da landing também salvam na tabela `leads`, disparam o evento `LEAD` no GTM e abrem o WhatsApp `+55 31 99656-9799`.
- Coworking, Sala de Reunião e Locação para Filmagem ainda não têm formulário próprio: seus botões abrem diretamente o WhatsApp `+55 31 99690-5648` e não gravam um lead antes do clique.
