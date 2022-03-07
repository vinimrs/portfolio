export const projects = [
    {
        title: 'Netflix Clone',
        description:
            `Que tal uma maratonada? 
            Vêm comigo conhecer o meu clone da netflix. Com a diferença que o meu é grátis 😂. Criado com React e JS puro, ele conta com várias features fieis ao site original! Dentre elas, a escolha de um perfil, preferências, preview do título, mais informações e mais...`,
        image: '/images/1.png',
        tags: [
            { name: 'React', link: 'https://reactjs.org/' }, 
            { name: 'Context Api', link: '#' }, 
            { name: 'Frame', link: '#' }, 
            { name: 'JavaScript', link: 'https://www.javascript.com/'}
        ],
        source: 'https://github.com/ViniR07/netflix-clone',
        visit: 'https://netflix-clone-vinir07.vercel.app/',
        preview: '/video-netflix.mp4',
        id: 0,
    },
    {
        title: 'VinChat',
        description:
            'Criado com Next.js, VinChat é uma plataforma beta de conversas online, com realtime e validação de login. Integrado com o SupaBase, com OAuth do Google e do Github. Converse com mais segurança que no Whatsapp 😎, você pode enviar figurinhas e textos de multiplas linhas e apagar quando quiser!',
        image: '/images/2.png',
        tags: [{ name: 'React', link: 'https://reactjs.org/' }, {name: 'NextJs', link: 'https://nextjs.org/'}, {name: 'SupaBase', link: 'https://supabase.com/'}],
        source: 'https://github.com/ViniR07/VinChat',
        visit: 'https://vinchat.vercel.app/',
        preview: '/video-vinchat.mp4',
        id: 1,
    },
];

export const TimeLineData = [
    { year: '2020', text: 'Comecei minha Jornada' },
    { year: '2021/1', text: 'Comecei a me interessar pelo Front-End' },
    { year: '2021/2', text: 'Entrei na graduação de Ciência da Computação' },
    { year: '2021/2', text: 'Criei meu próprio site' },
    { year: '2022-now', text: 'Foquei no Front-End, React, Next.js, Typescript' },
];
