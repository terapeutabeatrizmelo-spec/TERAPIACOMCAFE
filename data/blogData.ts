import { BlogPostProps } from '../types';

export const blogPosts: BlogPostProps[] = [
  {
    id: 1,
    slug: 'ansiedade-sem-motivo',
    title: "Por que nos sentimos ansiosos sem motivo aparente?",
    category: "Regulação",
    date: "28 Nov 2023",
    excerpt: "A ansiedade nem sempre tem um gatilho óbvio. Entenda como o corpo registra memórias e como a Análise Comportamental explica esses sentimentos.",
    imageUrl: "https://picsum.photos/800/600?random=10",
    content: `
      <p>Muitas vezes, acordamos com o coração acelerado ou sentimos um aperto no peito no meio da tarde, sem que nada de "ruim" tenha acontecido. Isso é exaustivo e confuso.</p>
      <br>
      <h3>O Corpo tem Memória</h3>
      <p>Na Análise do Comportamento, entendemos que a ansiedade é muitas vezes uma <strong>resposta condicionada</strong> (Respondente). Seu corpo pode ter associado um cheiro, um horário do dia ou uma sensação física a um evento estressor do passado.</p>
      <br>
      <h3>O Conceito de Generalização</h3>
      <p>Às vezes, não é a situação exata que se repete, mas algo parecido. Se você teve uma crise em um lugar fechado e cheio, seu cérebro pode disparar o alerta em qualquer lugar fechado, mesmo que vazio.</p>
      <br>
      <h3>O que fazer?</h3>
      <ol>
        <li><strong>Valide o sentimento:</strong> "Estou ansiosa, e tudo bem." Lutar contra a ansiedade aumenta a ansiedade.</li>
        <li><strong>Rastreie os antecedentes:</strong> O que aconteceu 5 minutos antes? O que você estava pensando?</li>
        <li><strong>Aterre-se no presente:</strong> Use os 5 sentidos para mostrar ao seu cérebro que, aqui e agora, você está segura.</li>
      </ol>
    `
  },
  {
    id: 2,
    slug: 'cafe-com-calma',
    title: "A técnica do 'Café com Calma' para momentos de estresse",
    category: "Técnicas",
    date: "20 Nov 2023",
    excerpt: "Um exercício de mindfulness de 5 minutos que você pode fazer na sua pausa para o café para resetar seu sistema nervoso.",
    imageUrl: "https://picsum.photos/800/600?random=11",
    content: `
      <p>A rotina nos engole. Quando vemos, estamos bebendo o café frio enquanto respondemos 3 emails. Vamos mudar isso?</p>
      <br>
      <h3>Mindfulness Informal</h3>
      <p>Você não precisa meditar 1 hora no topo da montanha. O "Café com Calma" é uma âncora de atenção plena.</p>
      <br>
      <h3>O Passo a Passo</h3>
      <ul>
        <li><strong>O Preparo:</strong> Ouça o som da máquina ou da água fervendo. Sinta o cheiro preencher a cozinha.</li>
        <li><strong>O Tato:</strong> Segure a xícara com as duas mãos. Sinta a temperatura. Não beba ainda.</li>
        <li><strong>O Olfato:</strong> Feche os olhos e inale o aroma por 3 segundos.</li>
        <li><strong>O Paladar:</strong> Dê o primeiro gole. Sinta a textura, a temperatura e o sabor.</li>
      </ul>
      <br>
      <p>Esse ritual simples avisa ao seu sistema parassimpático que é seguro "desligar" o modo de defesa por alguns minutos.</p>
    `
  },
  {
    id: 3,
    slug: 'padroes-toxicos',
    title: "Como identificar padrões tóxicos em relacionamentos",
    category: "Relacionamentos",
    date: "15 Nov 2023",
    excerpt: "Aprenda a diferenciar cuidado de controle usando a análise funcional do comportamento e proteja sua autonomia.",
    imageUrl: "https://picsum.photos/800/600?random=12",
    content: `
      <p>Relacionamentos complexos nos deixam confusos. "Será que é cuidado ou controle?" A linha pode ser tênue.</p>
      <br>
      <h3>A Função do Comportamento</h3>
      <p>Na terapia, não olhamos apenas o que a pessoa faz, mas <strong>para que</strong> ela faz. Qual a função?</p>
      <ul>
        <li>Se a pessoa liga 10x, a função é saber se você está bem (cuidado) ou saber onde você está para monitorar (controle)?</li>
        <li>Se a pessoa critica sua roupa, é para ajudar ou para diminuir sua autoestima e gerar dependência?</li>
      </ul>
      <br>
      <h3>Reforço Intermitente</h3>
      <p>Relações tóxicas viciam porque às vezes são boas. O cérebro fica esperando a próxima "migalha" de afeto. Identificar esse ciclo é o primeiro passo para a liberdade.</p>
    `
  },
  {
    id: 4,
    slug: 'autonomia-emocional',
    title: "O que é Autonomia Emocional na prática?",
    category: "Autonomia",
    date: "10 Nov 2023",
    excerpt: "Não é sobre não precisar de ninguém, é sobre não depender da validação externa para se sentir estável.",
    imageUrl: "https://picsum.photos/800/600?random=13",
    content: `
      <p>Autonomia não é isolamento. Somos seres sociais. Mas autonomia emocional é a capacidade de regular seus próprios estados internos.</p>
      <br>
      <p>Quando você tem autonomia, uma crítica no trabalho não destrói sua semana. Um término não destrói sua identidade.</p>
      <p>Construímos isso fortalecendo seus valores pessoais. Quando você sabe quem é e o que importa para você (Valores na ACT), as opiniões alheias perdem o poder de ditar seu humor.</p>
    `
  }
];