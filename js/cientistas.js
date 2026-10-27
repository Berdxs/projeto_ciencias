/* =====================================================================
   NOSSAS CIENTISTAS — Dados
   Equipe Matrix · 3° Informática B · IFNMG — Campus Salinas

   Para adicionar uma cientista: copie um bloco, mude o "slug" e
   preencha os campos. Cards e páginas individuais usam este arquivo.

   Regras do projeto (seção 4 da estrutura de conteúdo):
   - declaracao: só preencher com fala real, com fonte confirmada.
   - mensagemMotivacao.tipo = "sintese-do-projeto" quando o texto for
     da equipe (nunca apresentar como citação literal da cientista).
   ===================================================================== */

const CIENTISTAS = [
  {
    ficticia: false,
    slug: "aline-nogueira-alves-santiago",
    nome: "Aline Nogueira Alves Santiago",
    foto: "assets/aline-teste.jpg", // proporção 4:5
    fotoAlt: "Retrato de Aline Nogueira Alves Santiago",
    fotoCredito: "Aline Nogueira Alves Santiago",
    atuacao: "Professora de Química do IFNMG - Campus Salinas",
    mensagemCard: "...",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "..."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        "...",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "..."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "geycy-dyany-oliveira-lima",
    nome: "Geycy Dyany Oliveira Lima",
    foto: "assets/geycy.jpeg",
    fotoAlt: "Retrato de Geycy Dyany Oliveira Lima",
    fotoCredito: "Geycy Dyany Oliveira Lima",
    atuacao: "Docente do Curso Técnico em Informática do IFNMG - Campus Salinas",
    mensagemCard: "A todas as meninas e mulheres que sonham em ocupar espaços na educação, na ciência e na tecnologia, acreditem no potencial de vocês e nunca permitam que as desigualdades ou o preconceito limitem seus sonhos.",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      `Minha trajetória profissional na educação teve início há mais de 10 anos, período em que construí uma carreira dedicada ao ensino, à pesquisa, à extensão e à inovação tecnológica. Ao longo desse percurso, tive a oportunidade de atuar em diferentes instituições da Rede Federal de Educação Profissional, Científica e Tecnológica, com passagens pelo Instituto Federal de Mato Grosso (IFMT) e pelo Instituto Federal do Sul de Minas Gerais (IFSULDEMINAS). Atualmente, sou professora do Instituto Federal do Norte de Minas Gerais (IFNMG).
      Minha formação acadêmica começou com a graduação em Engenharia de Telecomunicações pela Faculdade de Ciência e Tecnologia de Montes Claros. Posteriormente, busquei ampliar meus conhecimentos na área educacional, concluindo a especialização em Docência na Educação Profissional e Tecnológica. O interesse pela pesquisa e pela aplicação de tecnologias nos processos de ensino e aprendizagem me levou à Universidade Federal de Uberlândia (UFU), onde conquistei os títulos de Mestre e Doutora em Ciência da Computação.
      Na pesquisa científica, construí uma produção acadêmica com publicações em periódicos e congressos nacionais e internacionais, especialmente na área de Informática na Educação. Meus trabalhos abordam arquiteturas pedagógicas apoiadas por Inteligência Artificial, análise de dados educacionais e desenvolvimento de ferramentas tecnológicas voltadas ao aprimoramento dos processos de ensino e aprendizagem.
      Como parte da minha experiência profissional, também integro o Banco de Avaliadores do Sistema Nacional de Avaliação da Educação Superior (BASis), do INEP/MEC, atuando como avaliadora em processos de avaliação da educação superior, contribuindo para o fortalecimento da qualidade do ensino superior brasileiro.`
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        `Acredito que os principais desafios para o acesso das mulheres à educação e à ciência estão nas desigualdades sociais e de gênero, na falta de oportunidades e nos estereótipos que ainda afastam meninas e mulheres, especialmente das áreas de Ciência e Tecnologia.
        Como professora e pesquisadora, defendo que não basta garantir o acesso à educação. É fundamental assegurar condições de permanência, valorização e reconhecimento das mulheres nos espaços acadêmicos e científicos.
        Acredito na educação pública, gratuita e de qualidade e na importância das políticas públicas para reduzir essas desigualdades. Precisamos de uma ciência mais democrática, inclusiva e com mais mulheres ocupando espaços de pesquisa, inovação e liderança.
        A todas as meninas e mulheres que sonham em ocupar espaços na educação, na ciência e na tecnologia, deixo uma mensagem: acreditem no potencial de vocês e nunca permitam que as desigualdades ou o preconceito limitem seus sonhos.
        Durante o meu mestrado, vivi uma situação de assédio moral no ambiente acadêmico, uma experiência que marcou minha trajetória. Hoje, como professora e pesquisadora, considero inaceitável que mulheres precisem enfrentar esse tipo de violência em espaços que deveriam promover o conhecimento, o respeito e o acolhimento.
        Essa experiência reforçou ainda mais minha convicção de que precisamos lutar por ambientes acadêmicos mais seguros, humanos e igualitários. Nenhuma mulher deveria precisar suportar humilhações para conquistar seu espaço na ciência.
        Que nunca nos faltem coragem para enfrentar os desafios, força para transformar essas realidades e oportunidades para seguir em frente. A ciência também é nosso lugar, e nenhuma de nós deve ser silenciada!`,
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "A todas as meninas e mulheres que sonham em ocupar espaços na educação, na ciência e na tecnologia, acreditem no potencial de vocês e nunca permitam que as desigualdades ou o preconceito limitem seus sonhos."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "jessica-gloria-jorge-batista",
    nome: "Jéssica Glória Jorge Batista",
    foto: "assets/jessica-teste.jpg",
    fotoAlt: "Retrato de Jéssica Glória Jorge Batista",
    fotoCredito: "Jéssica Glória Jorge Batista",
    atuacao: "Diretora de Ensino Técnico e Professora de Física do IFNMG - Campus Salinas",
    mensagemCard: "A ciência é pra todos e todas: ter ideias, pesquisar, se dedicar, se arriscar são algumas das qualidades femininas que uma cientista precisa ter. Se você é curiosa, criativa, dedicada, a ciência é pra você.",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "Possui graduação em Bacharelado em Ciência e Tecnologia (2010) e em Bacharelado em Física (2011) pela Universidade Federal do ABC, Santo André - SP e mestrado em Física pela Universidade Federal do ABC (2013), com posterior formação pedagógica (2020). Trabalhou como Técnica responsável pela gestão da Seção de Laboratórios de Física da Universidade Federal da Integração Latino-Americana (UNILA), tendo participado do colegiado do curso de Engenharia Física, Comissão Superior de Pesquisa (COSUP) e de treinamentos técnicos e de gestão de pessoas, contratos e processos administrativos. Foi Doutoranda no programa de Engenharia Elétrica da EESC, USP São Carlos. Atuou como docente em Universidades públicas e privadas, ministrando disciplinas da área de Física e Engenharias. Trabalhou como bolsista na Universidade Virtual do Estado de São Paulo, atuando como facilitadora de aprendizagem no Ensino a Distância, local em que também realizou a Especialização em Formação Didático-Pedagógica para Cursos na Modalidade a Distância. Atualmente é professora no Instituto Federal do Norte de Minas Gerais, Campus Salinas. Tem experiência na área de Física, com ênfase em Relatividade e Gravitação, e atualmente estuda problemas de sincronização e estabilidade em Sistemas Elétricos de Potência, atuando principalmente nos seguintes temas: caos, sincronização, sistemas dinâmicos não lineares."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        `Nós, mulheres, temos uma carga de trabalho muito grande: é esperado de nós o papel de gerência do lar, do cuidado da família e ainda ser provedora. Encontrar tempo para os estudos é um desafio, e colocar como prioridade é visto com maus olhos pela sociedade. Sem contar que a misoginia existe, e muitas vezes a pesquisa feita por mulheres não é igualmente acreditada e valorizada.
        A vida é única e devemos aproveitá-la da melhor forma. É por meio da dedicação nos estudos que adquirimos as ferramentas necessárias para sermos mulheres independentes, financeira e psicologicamente. A ciência é pra todos e todas: ter ideias, pesquisar, se dedicar, se arriscar são algumas das qualidades femininas que uma cientista precisa ter. Se você é curiosa, criativa, dedicada, a ciência é pra você.`,
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "A ciência é pra todos e todas: ter ideias, pesquisar, se dedicar, se arriscar são algumas das qualidades femininas que uma cientista precisa ter. Se você é curiosa, criativa, dedicada, a ciência é pra você."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "josy-dayanny-alves-souza",
    nome: "Josy Dayanny Alves Souza",
    foto: "assets/josy-teste.jpg",
    fotoAlt: "Retrato de Josy Dayanny Alves Souza",
    fotoCredito: "Josy Dayanny Alves Souza",
    atuacao: "Professora de Geografia do IFNMG - Campus Januária",
    mensagemCard: "...",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "..."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        "...",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "..."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  }, 

  {
    ficticia: false,
    slug: "marcia-martins-pereira-borges",
    nome: "Márcia Martins Pereira Borges",
    foto: "assets/marcia.jpeg",
    fotoAlt: "Retrato de Márcia Martins Pereira Borges",
    fotoCredito: "Márcia Martins Pereira Borges",
    atuacao: "Professora de Geografia no IFNMG – Campus Salinas e mestranda no Programa de Pós-Graduação em Relações Étnico-Raciais e Educação (PPGRERE), do IFNMG/Unimontes",
    mensagemCard: "Que cada menina possa se reconhecer como alguém capaz de produzir conhecimento, ocupar espaços e contribuir para transformar a realidade. Porque a ciência não tem um único rosto, um único lugar ou uma única voz. A ciência também é delas. A ciência também é nossa, e na área que quisermos.",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      `Minha trajetória na educação começou há mais de 15 anos, sendo dez deles dedicados ininterruptamente à docência em Geografia. Iniciei minha formação superior no bacharelado e, posteriormente, migrei para a licenciatura em Geografia. Também possuo especializações em Ensino Religioso e em Gestão, Inspeção e Supervisão Pedagógica.
      Ao longo dessa caminhada, atuei na secretaria escolar, supervisora pedagógica, coordenadora do Novo Ensino Médio e professora. Essas experiências fortaleceram minha compreensão da educação como um direito fundamental e um importante instrumento de transformação social.
      Sempre tive interesse pelas questões ambientais, justiça ambiental, sociais, raciais e de gênero, inquietações que também orientam minha trajetória como pesquisadora.
      Meu projeto inicial de mestrado investigava os conflitos territoriais relacionados à mineração e à resistência de comunidades geraizeiras na região de Grão Mogol, no Norte de Minas Gerais. Atualmente, minha pesquisa se concentra nas territorialidades da comunidade quilombola do Vale do Bananal, em Salinas (MG), diante das transformações relacionadas ao avanço da mineração.
      Minha pesquisa parte da compreensão de que a ciência não acontece apenas dentro dos laboratórios ou das universidades. Ela também se constrói nos territórios, na escuta das comunidades, na investigação das desigualdades e no reconhecimento de histórias, saberes tradicionais e orgânicos, experiências e conhecimentos frequentemente silenciados.`
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        `Acredito em uma ciência socialmente comprometida, que dialogue com diferentes saberes e contribua para compreender e transformar a realidade.
        Uma das conquistas mais significativas da minha trajetória é ser a primeira mulher da minha família a ingressar no ensino superior e também a alcançar o mestrado. Essa conquista representa não apenas uma realização pessoal, mas a possibilidade de romper barreiras e abrir caminhos para as próximas gerações.
        Acredito que um dos maiores desafios para a participação feminina na ciência está nas desigualdades de acesso, permanência e oportunidades educacionais.
        Minha própria trajetória foi atravessada pelas dificuldades de acesso à formação acadêmica,especialmente pelas condições territoriais e pela distância dos grandes centros de ensino e pesquisa.
        Essas dificuldades demonstram que o acesso ao conhecimento não depende apenas do esforço individual, mas também das condições sociais, econômicas e territoriais em que cada pessoa está inserida.
        Por isso, considero que a  educação pública de qualidade e as políticas públicas de inclusão, permanência e incentivo à pesquisa são fundamentais para reduzir desigualdades e democratizar o acesso à ciência.
        Outro desafio importante está relacionado à conciliação entre formação acadêmica, trabalho e responsabilidades familiares. Como mãe de quatro filhos, reconheço as dificuldades dessa caminhada, mas também compreendo que a maternidade pode ampliar nossa sensibilidade e enriquecer as perspectivas que levamos para a pesquisa.
        Entretanto, não podemos romantizar a sobrecarga feminina. É necessário garantir condições concretas para que mulheres possam estudar, pesquisar, trabalhar e exercer a maternidade sem precisar abandonar seus projetos.
        Também é importante reconhecer que mulheres negras, indígenas, quilombolas, periféricas e de territórios historicamente marginalizados enfrentam barreiras ainda maiores.
        Ampliar a presença feminina na ciência exige, portanto, mais do que incentivar meninas a sonharem. Exige investimentos em educação, políticas de permanência, financiamento científico, combate às discriminações e valorização das diferentes formas de produzir conhecimento.
        A ciência precisa ser acessível a todas as mulheres, independentemente de sua origem, condição social ou território.
        Às meninas e mulheres que estão iniciando suas trajetórias, gostaria de dizer que a ciência está em todos os lugares.
        Ela está nos laboratórios, nas universidades e nos grandes centros de pesquisa, mas também está nas escolas, nas comunidades, nos territórios e nas perguntas que fazemos sobre a realidade em que vivemos.
        Fazer ciência é investigar, questionar, observar, ouvir e buscar compreender o mundo. É reconhecer que existem diferentes formas de produzir conhecimento e que todas nós podemos contribuir para essa construção.
        Como mulher, mãe, professora e pesquisadora, aprendi que os caminhos nem sempre são simples. Sou a primeira mulher da minha família a ingressar na graduação e no mestrado, e essa conquista me faz acreditar ainda mais no poder transformador da educação.
        Mas também compreendi que sonhos precisam encontrar oportunidades. Por isso, defender a educação pública, a ciência e as políticas que ampliam o acesso ao conhecimento é defender a possibilidade de transformar vidas e realidades.
        Quero que vocês saibam que o lugar onde nasceram, sua condição social ou os desafios que enfrentam não devem determinar os limites de suas possibilidades.
        Não tenham medo de fazer perguntas, de questionar injustiças e de buscar respostas. A ciência também precisa das suas experiências, das suas histórias e da maneira como vocês enxergam o mundo.
        A  educação transforma vidas, a ciência amplia horizontes e, juntas, elas podem contribuir para a construção de uma sociedade mais justa, democrática e igualitária.
        Que cada menina possa se reconhecer como alguém capaz de produzir conhecimento, ocupar espaços e contribuir para transformar a realidade.
        Porque a ciência não tem um único rosto, um único lugar ou uma única voz. A ciência também é delas. A ciência também é nossa, e na área que quisermos.
        A ciência também nasce das perguntas que fazemos sobre o mundo, das histórias que escutamos e das realidades que nos recusamos a aceitar como imutáveis.`,
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "Que cada menina possa se reconhecer como alguém capaz de produzir conhecimento, ocupar espaços e contribuir para transformar a realidade. Porque a ciência não tem um único rosto, um único lugar ou uma única voz. A ciência também é delas. A ciência também é nossa, e na área que quisermos."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "michellia-pereira-soares",
    nome: "Michellia Pereira Soares",
    foto: "assets/michellia.jpeg",
    fotoAlt: "Retrato de Michellia Pereira Soares",
    fotoCredito: "Michellia Pereira Soares",
    atuacao: "Docente do Ensino Básico, Técnico e Tecnológico do IFNMG - Campus Salinas",
    mensagemCard: "Que as mulheres se respeitem a si e ao outro, se capacitem cada vez mais, e nunca deixem ninguém dizer que não são capazes, principalmente na ciência.",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "Fiz a graduação em Ciências Biológicas na Universidade Estadual de Montes de Montes Claros (Unimontes), mestrado e doutorado em Botânica na Universidade Federal de Viçosa (UFV). Durante a graduação iniciei a minha carreira na docente em escolas municipais e estaduais da cidade de Montes Claros. Em Viçosa, não tive bolsa durante o mestrado e por isso continuei lecionando em escolas estaduais para garantir a minha permanência na cidade. Em 2009 passei no concurso para professora efetiva da Rede Federal, inicialmente no Instituto Federal Goiano, na cidade de Rio Verde e desde de 2013 sou professora do Instituto Federal do Norte de Minas Gerais - Campus Salinas. A trajetória como pesquisadora teve início ainda na graduação, em uma área chamada Fitossociologia, onde se determina as espécies que existem em uma determinada área, como é a sua distribuição e o seu nível de conservação, entre outros aspectos. Na graduação trabalhei em áreas de Cerrado no Norte de Minas. No mestrado, a pesquisa foi desenvolvida nas Florestas de Altitude da Mata Atlântica e no doutorado nas Florestas de Tabuleiro da Bahia e Espírito Santo. Como docente, orientei pesquisa na mesma área e expandi para trabalhos com fenologia e polinização. Além disso, orientei algumas pesquisas na área de Educação no Ensino de Biologia."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        "Historicamente a ciência foi exercida por muito tempo pelos homens, quando estes eram os únicos que podiam ter acesso a todos os níveis de educação. Quando a mulher conquista esse espaço, ela acaba acrescentando essa nova atividade em sua vida e continua, em sua grande maioria sendo a responsável por toda a organização dentro o ambiente familiar. Então o fator tempo, para exercer as mesmas atividades de um pesquisador homem, já não é o mesmo. Outro fator é o respeito às ideias e a confiança que muitas vezes não vem naturalmente, vão sendo obtidas ao longo do tempo. O tipo de pesquisa, como no meu caso, pesquisa de campo, onde o universo era masculino, muitas vezes foram vistos como espaços que seriam inapropriados para uma mulher aguentar.   5. Mensagem de motivação (incentivo à maior participação feminina na ciência). Hoje, o mundo da ciência mudou e muito. As mulheres estão em todas as áreas da ciência, em todos os níveis. Conquistaram seu espaço e respeito. Desenvolvem pesquisa de alto nível e são coordenadoras de trabalhos difundidos em todo o mundo. Coordenam equipes de projetos com inteligente, habilidade e motivação e não foi necessário fazer isso como os homens e sim continuando sendo mulheres que se respeitam, mas sabem que o lugar que devem estar é onde a sua trajetória a levar. Por isso, peço que as mulheres se respeitem a si e ao outro, se capacitem cada vez mais, e nunca deixem ninguém dizer que não são capazes, principalmente Ciência. Somos capazes e fazemos isso com muita competência. Parabéns a todas as pesquisadoras que contribuem muito para fazer um mundo melhor com base científica de qualidade.",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "Que as mulheres se respeitem a si e ao outro, se capacitem cada vez mais, e nunca deixem ninguém dizer que não são capazes, principalmente na ciência."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "patricia-morais-lima",
    nome: "Patrícia Morais Lima",
    foto: "assets/patricia.jpeg",
    fotoAlt: "Retrato de Patrícia Morais Lima",
    fotoCredito: "Patrícia Morais Lima",
    atuacao: "Professora de Sociologia do IFNMG - Campus Salinas",
    mensagemCard: "A ciência precisa de mais mulheres, de suas vozes, ideias e descobertas. Que toda menina tenha o direito de sonhar, pesquisar e transformar o mundo por meio do conhecimento.",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "Sou doutora em Desenvolvimento Social pela Universidade Estadual de Montes Claros (Unimontes), mestra em Sociedade, Ambiente e Território pela Universidade Federal de Minas Gerais (UFMG) e graduada em Ciências Sociais pela Unimontes. Entre as principais experiências acadêmicas, destaco a participação em pesquisas interdisciplinares sobre desenvolvimento territorial, economia criativa e questões socioambientais, especialmente relacionadas ao Norte de Minas Gerais."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        "A minha percepção é de que mesmo com os avanços conquistados pelas mulheres no acesso à educação e ao ensino superior, ainda persistem desigualdades que dificultam sua permanência, seu reconhecimento e sua ascensão profissional no meio científico. A conciliação de múltiplas funções e responsabilidades, que recai de forma desigual sobre as mulheres, impacta seu tempo e suas oportunidades, somando-se aos preconceitos de gênero e às pressões sociais e profissionais que ainda marcam nossas trajetórias.",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "A ciência precisa de mais mulheres, de suas vozes, ideias e descobertas. Que toda menina tenha o direito de sonhar, pesquisar e transformar o mundo por meio do conhecimento."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "renata-santos-maia",
    nome: "Renata Santos Maia",
    foto: "assets/renata-teste.jpg",
    fotoAlt: "Retrato de Renata Santos Maia",
    fotoCredito: "Renata Santos Maia",
    atuacao: "Professora de História do IFNMG - Campus Salinas",
    mensagemCard: "...",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "..."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        "...",
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "..."
    },
    legado: null,
    curiosidades: [],
    fontes: []
  },

  {
    ficticia: false,
    slug: "rosimeire-alves-guimaraes",
    nome: "Rosimeire Alves Guimarães",
    foto: "assets/rosy.jpeg",
    fotoAlt: "Retrato de Rosimeire Alves Guimarães",
    fotoCredito: "Rosimeire Alves Guimarães",
    atuacao: "Professora de Biologia e Coordenadora do Curso de Licenciatura em Ciências Biológicas do IFNMG - Campus Salinas",
    mensagemCard: "A ciência precisa da inteligência, da criatividade e das ideias das mulheres. Acreditem no seu potencial, busquem seus objetivos e lembrem-se: o lugar da mulher é onde ela quiser, inclusive na ciência!",
    nacionalidade: null,
    nascimento: null,
    falecimento: null,
    apresentacao: null,
    atuacaoDetalhada: null,
    trajetoria: [
      "Possui graduação em Ciências habilitação Licenciatura em Biologia pela Universidade Estadual de Montes Claros (1996), Mestrado em Agronomia (Fitotecnia) pela Universidade Estadual do Sudoeste da Bahia (2006) e Doutorado em Ciências Biológicas pela Universidade Federal de Ouro Preto (2013). Atualmente é professora do quadro efetivo de ensino médio e superior e Coordenadora do Curso de Licenciatura em Ciências Biológicas do Instituto Federal do Norte de Minas Gerais - Campus Salinas."
    ],
    contribuicoes: [],
    linhaDoTempo: [],
    desafios: {
      texto:
        `Os principais desafios enfrentados pelas mulheres no acesso à educação e à ciência são o preconceito de gênero, a desigualdade de oportunidades e a falta de incentivo. Muitas mulheres enfrentam dificuldades financeiras, precisam conciliar os estudos com as tarefas domésticas e os cuidados com a família e têm menos oportunidades de ocupar cargos de liderança na ciência. Por isso, é fundamental promover a igualdade de gênero, incentivar a participação feminina e garantir que todas as mulheres tenham acesso a uma educação de qualidade e às mesmas oportunidades de desenvolvimento científico.
        Todas as mulheres são capazes de aprender, descobrir e transformar o mundo por meio da ciência! Não deixem que o preconceito ou as dificuldades impeçam vocês de realizar seus sonhos. A ciência precisa da inteligência, da criatividade e das ideias das mulheres. Acreditem no seu potencial, busquem seus objetivos e lembrem-se: o lugar da mulher é onde ela quiser, inclusive na ciência!`,
      declaracao: null,
      declaracaoFonte: null,
      analiseContextual: null
    },
    mensagemMotivacao: {
      texto:
        "A ciência precisa da inteligência, da criatividade e das ideias das mulheres. Acreditem no seu potencial, busquem seus objetivos e lembrem-se: o lugar da mulher é onde ela quiser, inclusive na ciência!"
    },
    legado: null,
    curiosidades: [],
    fontes: []
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
