/* =====================================================================
   MULHERES NA CIÊNCIA — Dados das cientistas (CONTEÚDO PROVISÓRIO)
   Equipe Matrix · 3° Informática B · IFNMG — Campus Salinas

   ATENÇÃO: as três cientistas abaixo são FICTÍCIAS (ficticia: true).
   Servem apenas para montar e testar o layout. Antes de publicar,
   substitua TODOS os campos por informações reais e verificadas.

   Para adicionar uma cientista: copie um bloco, mude o "slug" e
   preencha os campos. Cards e páginas individuais usam este arquivo.

   Regras do projeto (seção 4 da estrutura de conteúdo):
   - declaracao: só preencher com fala real, com fonte confirmada.
   - mensagemMotivacao.tipo = "sintese-do-projeto" quando o texto for
     da equipe (nunca apresentar como citação literal da cientista).
   ===================================================================== */

const CIENTISTAS = [
  {
    ficticia: true,
    slug: "helena-marques-duarte",
    nome: "Helena Marques Duarte",
    foto: "assets/images/helena-marques-duarte.jpg", // proporção 4:5
    fotoAlt: "Retrato ilustrativo de Helena Marques Duarte (cientista fictícia)",
    fotoCredito: "Imagem provisória — substituir por foto real com licença",

    // --- Card da página inicial ---
    atuacao: "Astrofísica e pesquisadora",
    mensagemCard: "Olhar para o céu é aprender que há espaço para todas as perguntas.",

    // --- 2.1 / 7.2 Apresentação ---
    nacionalidade: "Brasileira",
    nascimento: "1968",
    falecimento: null,
    apresentacao:
      "Pesquisadora dedicada ao estudo da formação de estrelas em galáxias distantes, Helena combina observação astronômica e análise de dados em grande escala.",

    // --- 2.2 Atuação ---
    atuacaoDetalhada:
      "Professora titular e coordenadora de um laboratório de astrofísica observacional. Sua principal linha de pesquisa é a evolução de galáxias e a formação estelar.",

    // --- 2.3 / 7.3 Trajetória ---
    trajetoria: [
      "Nasceu em uma cidade do interior e despertou o interesse pela astronomia observando o céu noturno, sem poluição luminosa.",
      "Formou-se em Física em uma universidade federal e concluiu mestrado e doutorado em Astrofísica.",
      "Iniciou a carreira científica como pesquisadora em um observatório nacional, onde participou de projetos de mapeamento do céu.",
      "Passou a liderar uma equipe multidisciplinar que combina astronomia e ciência de dados.",
      "Recebeu reconhecimento nacional por contribuições à formação de novos pesquisadores."
    ],

    // --- 7.4 Descobertas e contribuições ---
    contribuicoes: [
      {
        titulo: "Catálogo de galáxias em formação estelar",
        resumo: "Organizou um catálogo com milhares de galáxias classificadas pela taxa de formação de estrelas.",
        contexto: "Estudos desse tipo ajudam a entender como as galáxias crescem ao longo do tempo.",
        impacto: "O catálogo é usado por outros grupos como base para novas pesquisas."
      },
      {
        titulo: "Método de análise de imagens astronômicas",
        resumo: "Desenvolveu uma técnica para reduzir ruído em imagens de telescópios.",
        contexto: "Imagens de objetos distantes são fracas e cheias de interferências.",
        impacto: "A técnica torna observações antigas mais úteis e reduz custos de novas."
      }
    ],

    // --- 7.5 Linha do tempo ---
    linhaDoTempo: [
      { periodo: "1968", evento: "Nascimento." },
      { periodo: "1990", evento: "Conclusão da graduação em Física." },
      { periodo: "1997", evento: "Doutorado em Astrofísica." },
      { periodo: "2005", evento: "Publicação do catálogo de galáxias." },
      { periodo: "2015", evento: "Criação do laboratório que coordena atualmente." }
    ],

    // --- 2.4 Desafios ---
    desafios: {
      texto:
        "Durante a graduação, Helena era uma das poucas mulheres da turma, situação ainda comum nas ciências exatas. Acesso a vagas em observatórios e a posições de liderança exigiu persistência.",
      declaracao: null,        // preencher só com fala real e verificada
      declaracaoFonte: null,   // link ou referência da fala
      analiseContextual:
        "A baixa presença feminina nas ciências exatas é um fenômeno documentado, e trajetórias como a dela ilustram a importância de incentivo e de redes de apoio."
    },

    // --- 2.5 Mensagem de motivação ---
    mensagemMotivacao: {
      tipo: "sintese-do-projeto", // não é citação literal da cientista
      texto:
        "O céu é de quem tem curiosidade. Meninas e mulheres também têm lugar nos telescópios, nos laboratórios e nas decisões científicas."
    },

    // --- 7.6 / 7.7 ---
    legado:
      "Formou diversos pesquisadores e ampliou o acesso a dados astronômicos abertos, fortalecendo a pesquisa em astronomia no país.",
    curiosidades: [
      "Começou a observar o céu com um telescópio caseiro feito com lentes de óculos."
    ],

    // --- 7.8 Fontes ---
    fontes: [
      { titulo: "FONTE FICTÍCIA — substituir por referência real", url: "#" }
    ]
  },

  {
    ficticia: true,
    slug: "luiza-fontenele",
    nome: "Luíza Fontenele",
    foto: "assets/images/luiza-fontenele.jpg",
    fotoAlt: "Retrato ilustrativo de Luíza Fontenele (cientista fictícia)",
    fotoCredito: "Imagem provisória — substituir por foto real com licença",

    atuacao: "Bióloga e botânica",
    mensagemCard: "Pesquisar o sertão é descobrir riqueza onde poucos procuravam.",

    nacionalidade: "Brasileira",
    nascimento: "1975",
    falecimento: null,
    apresentacao:
      "Estuda plantas nativas do semiárido e seu potencial para recuperar solos degradados e apoiar a agricultura familiar.",

    atuacaoDetalhada:
      "Pesquisadora de uma instituição de pesquisa agropecuária, com foco em espécies resistentes à seca e em práticas de restauração ecológica.",

    trajetoria: [
      "Cresceu em uma comunidade rural, onde conviveu com os desafios da seca e do uso da terra.",
      "Graduou-se em Ciências Biológicas e fez mestrado e doutorado em Botânica.",
      "Iniciou a carreira catalogando espécies nativas da Caatinga em expedições de campo.",
      "Passou a trabalhar em parceria com agricultores para testar plantas adaptadas ao clima da região.",
      "Foi reconhecida por projetos que unem conhecimento científico e saber tradicional."
    ],

    contribuicoes: [
      {
        titulo: "Inventário de espécies nativas úteis",
        resumo: "Catalogou plantas nativas com potencial alimentar, forrageiro e de recuperação do solo.",
        contexto: "Muitas espécies da Caatinga ainda são pouco estudadas.",
        impacto: "Ajuda a orientar projetos de reflorestamento e renda no campo."
      },
      {
        titulo: "Protocolo de restauração de áreas degradadas",
        resumo: "Propôs um passo a passo para recuperar solos com espécies locais.",
        contexto: "Áreas degradadas perdem fertilidade e capacidade de reter água.",
        impacto: "O protocolo é aplicado em projetos comunitários de recuperação ambiental."
      }
    ],

    linhaDoTempo: [
      { periodo: "1975", evento: "Nascimento." },
      { periodo: "1998", evento: "Graduação em Ciências Biológicas." },
      { periodo: "2006", evento: "Doutorado em Botânica." },
      { periodo: "2012", evento: "Publicação do inventário de espécies nativas." },
      { periodo: "2019", evento: "Início do programa de restauração com agricultores." }
    ],

    desafios: {
      texto:
        "O trabalho de campo em áreas remotas e a conciliação entre carreira científica e responsabilidades familiares estiveram entre os obstáculos de sua trajetória, além da falta de reconhecimento de pesquisas fora dos grandes centros.",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual:
        "Pesquisadoras que atuam longe dos grandes centros costumam enfrentar menos acesso a financiamento e visibilidade, o que torna a pesquisa regional ainda mais valiosa."
    },

    mensagemMotivacao: {
      tipo: "sintese-do-projeto",
      texto:
        "A ciência também nasce no interior. Quem conhece o território tem muito a ensinar, e a sua voz importa."
    },

    legado:
      "Aproximou a pesquisa científica das comunidades rurais e mostrou que conhecimento acadêmico e saber local podem caminhar juntos.",
    curiosidades: [
      "Mantém um herbário didático aberto a escolas da região."
    ],

    fontes: [
      { titulo: "FONTE FICTÍCIA — substituir por referência real", url: "#" }
    ]
  },

  {
    ficticia: true,
    slug: "beatriz-almeida-rocha",
    nome: "Beatriz Almeida Rocha",
    foto: "assets/images/beatriz-almeida-rocha.jpg",
    fotoAlt: "Retrato ilustrativo de Beatriz Almeida Rocha (cientista fictícia)",
    fotoCredito: "Imagem provisória — substituir por foto real com licença",

    atuacao: "Engenheira de computação e pesquisadora",
    mensagemCard: "Código bem escrito também pode mudar vidas.",

    nacionalidade: "Brasileira",
    nascimento: "1984",
    falecimento: null,
    apresentacao:
      "Pesquisa tecnologias de acessibilidade que usam inteligência artificial para ajudar pessoas com deficiência visual a se orientarem em ambientes urbanos.",

    atuacaoDetalhada:
      "Professora e pesquisadora em computação, líder de um grupo que desenvolve aplicativos assistivos e sistemas de visão computacional.",

    trajetoria: [
      "Interessou-se por programação ainda na adolescência, em um curso técnico de informática.",
      "Graduou-se em Engenharia de Computação e concluiu mestrado e doutorado na área.",
      "Iniciou a carreira em uma empresa de tecnologia antes de migrar para a pesquisa acadêmica.",
      "Fundou um grupo de pesquisa em tecnologias assistivas.",
      "Recebeu prêmios de inovação por aplicações voltadas à inclusão."
    ],

    contribuicoes: [
      {
        titulo: "Aplicativo de orientação por voz",
        resumo: "Aplicativo que descreve obstáculos e rotas a partir de imagens da câmera do celular.",
        contexto: "Visão computacional permite reconhecer objetos e sinalizações em tempo real.",
        impacto: "Amplia a autonomia de pessoas com deficiência visual."
      },
      {
        titulo: "Conjunto aberto de dados de acessibilidade",
        resumo: "Reuniu e publicou imagens anotadas de calçadas e travessias.",
        contexto: "Modelos de IA dependem de dados bem preparados.",
        impacto: "Outros pesquisadores usam o conjunto para treinar e testar seus sistemas."
      }
    ],

    linhaDoTempo: [
      { periodo: "1984", evento: "Nascimento." },
      { periodo: "2007", evento: "Graduação em Engenharia de Computação." },
      { periodo: "2014", evento: "Doutorado em Computação." },
      { periodo: "2017", evento: "Criação do grupo de tecnologias assistivas." },
      { periodo: "2022", evento: "Lançamento do aplicativo de orientação por voz." }
    ],

    desafios: {
      texto:
        "Em cursos e empresas de tecnologia, Beatriz foi frequentemente a única mulher da equipe, o que trouxe situações de desconfiança sobre sua competência técnica e dificuldade de acesso a cargos de liderança.",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual:
        "A computação tem sub-representação feminina bem documentada. Trajetórias como a dela mostram a importância de ambientes inclusivos e de modelos de referência."
    },

    mensagemMotivacao: {
      tipo: "sintese-do-projeto",
      texto:
        "A tecnologia fica melhor quando é feita por pessoas diferentes. Sua forma de pensar pode ser a solução que ainda não existe."
    },

    legado:
      "Contribuiu para que a inclusão fosse tratada como requisito de projeto na computação, e não como detalhe final.",
    curiosidades: [
      "Testa seus aplicativos junto a usuários reais desde as primeiras versões."
    ],

    fontes: [
      { titulo: "FONTE FICTÍCIA — substituir por referência real", url: "#" }
    ]
  }
];

// Ordem usada na navegação "anterior / próxima" (nunca aponta para página inexistente)
const ORDEM_CIENTISTAS = CIENTISTAS.map(c => c.slug);

function getCientista(slug) {
  return CIENTISTAS.find(c => c.slug === slug) || null;
}

function getVizinhas(slug) {
  const i = ORDEM_CIENTISTAS.indexOf(slug);
  if (i === -1) return { anterior: null, proxima: null };
  return {
    anterior: i > 0 ? CIENTISTAS[i - 1] : null,
    proxima: i < CIENTISTAS.length - 1 ? CIENTISTAS[i + 1] : null
  };
}
