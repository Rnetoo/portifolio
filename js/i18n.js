// Sistema de internacionalização (i18n)
const i18n = {
    pt: {
        // Navegação
        nav: {
            inicio: 'Início',
            sobre: 'Sobre',
            experiencia: 'Experiência',
            formacao: 'Formação',
            portfolio: 'Portfólio',
            habilidades: 'Habilidades',
            contato: 'Contato'
        },
        
        // Hero
        hero: {
            badge: 'Cursando Análise e Desenvolvimento de Sistemas',
            titulo: 'Rômulo <span class="gradient-text">Neto</span>',
            subtitulo: 'Full Stack',
            subtitulo2: 'Full Impact',
            descricao: 'Profissional em transição de carreira para tecnologia, unindo <span class="text-primary font-semibold">10+ anos de experiência técnica</span> com formação em Análise de Sistemas.',
            btnExperiencia: 'Ver Experiência',
            btnContato: 'Entrar em Contato'
        },
        
        // Sobre
        sobre: {
            badge: 'Em Transição para Tecnologia',
            titulo: 'Sobre <span class="gradient-text">Mim</span>',
            p1: 'Sou um profissional com trajetória consolidada em desenvolvimento de projetos, gestão de processos e controle operacional, atualmente em <strong>transição estruturada para a área de Tecnologia da Informação</strong>, com foco em Desenvolvimento Full Stack.',
            p2: 'Minha carreira foi construída em ambientes que exigem <strong>organização, análise, documentação técnica e responsabilidade na execução</strong>. Ao longo dos anos, atuei com planejamento de escopo, controle de prazos, padronização de processos e tomada de decisão orientada por dados — competências que hoje sustentam minha formação em desenvolvimento de software.',
            p3: 'Minha migração para TI representa um novo direcionamento profissional. Estou em processo contínuo de aprendizado técnico, aprofundando conhecimentos em <strong>desenvolvimento web, arquitetura de aplicações e boas práticas de código</strong>, ao mesmo tempo em que aplico esses conceitos na construção dos meus próprios projetos — incluindo este site.',
            destaque: 'Reconheço que estou em evolução na área técnica, mas trago como diferencial <strong>maturidade profissional, disciplina, visão estruturada de projeto e compromisso com qualidade</strong>. Meu objetivo é integrar equipes onde eu possa contribuir com organização, responsabilidade e aprendizado constante, desenvolvendo-me como profissional de tecnologia de forma consistente.',
            skills: ['Desenvolvimento Web', 'Arquitetura de Software', 'Gestão de Projetos', 'Análise de Dados'],
            stats: {
                exp: 'Anos Experiência',
                formacao: 'Em Formação',
                objetivo: 'Full Stack (Objetivo)',
                local: 'Santa Catarina'
            },
            btnCV: 'Download CV',
            btnProjetos: 'Ver Projetos',
            local: 'Balneário Piçarras, Santa Catarina'
        },
        
        // Experiência
        experiencia: {
            titulo: 'Experiência <span class="gradient-text">Profissional</span>',
            subtitulo: 'Trajetória multidisciplinar unindo tecnologia, design e gestão ambiental',
            atual: 'ATUAL - AUTÔNOMO',
            tags: {
                design: 'Design',
                operacao: 'Operação',
                laboratorio: 'Laboratório',
                ambiental: 'Ambiental',
                bancario: 'Bancário'
            }
        },
        
        // Formação
        formacao: {
            titulo: 'Formação <span class="gradient-text">Acadêmica</span>',
            subtitulo: 'Educação formal multidisciplinar',
            emAndamento: 'EM ANDAMENTO',
            cursos: {
                ads: {
                    titulo: 'Análise e Desenvolvimento de Sistemas',
                    instituicao: 'Estácio',
                    descricao: 'Graduação tecnológica focada em desenvolvimento de software e banco de dados.',
                    tags: ['Lógica', 'Banco de Dados', 'Software']
                },
                design: {
                    titulo: 'Tecnólogo em Design de Interiores',
                    instituicao: 'SENAC',
                    descricao: 'Formação em design, desenho técnico CAD e modelagem 3D.',
                    tags: ['CAD', '3D', 'Design']
                },
                ambiental: {
                    titulo: 'Técnico em Meio Ambiente',
                    instituicao: 'SENAI',
                    descricao: 'Formação técnica em gestão ambiental e controle de ETA/ETE.',
                    tags: ['Ambiental', 'ETE/ETA', 'Laboratório']
                }
            }
        },
        
        // Portfólio
        portfolio: {
            titulo: 'Meu <span class="gradient-text">Portfólio</span>',
            subtitulo: 'Projetos acadêmicos e pessoais desenvolvidos durante a graduação',
            filtros: {
                todos: 'Todos',
                academicos: 'Acadêmicos',
                web: 'Web',
                dados: 'Dados',
                automacao: 'Automação'
            },
            emDesenvolvimento: 'Em Desenvolvimento',
            novoProjeto: 'Novo Projeto',
            btnGithub: 'Ver todos no GitHub'
        },
        
        // Habilidades
        habilidades: {
            titulo: 'Competências & <span class="gradient-text">Habilidades</span>',
            tecnologia: 'Tecnologia',
            analise: 'Análise',
            comportamentais: 'Competências Comportamentais',
            idiomas: 'Idiomas',
            ingles: 'Inglês',
            leitura: 'Leitura técnica'
        },
        
        // Contato
        contato: {
            titulo: 'Vamos <span class="gradient-text">Conectar</span>',
            subtitulo: 'Disponível para oportunidades em tecnologia, análise de sistemas e gestão de processos',
            info: 'Informações de Contato',
            localizacao: 'Localização',
            telefone: 'Telefone',
            email: 'Email',
            redes: 'Redes Profissionais',
            formulario: 'Envie uma mensagem',
            nome: 'Nome',
            emailPlaceholder: 'seu@email.com',
            assunto: 'Assunto',
            assuntos: {
                emprego: 'Oportunidade de emprego',
                freelance: 'Projeto freelance',
                networking: 'Networking'
            },
            mensagem: 'Mensagem',
            mensagemPlaceholder: 'Descreva sua proposta ou mensagem...',
            btnEnviar: 'Enviar Mensagem'
        },
        
        // Footer
        footer: {
            copyright: 'Rômulo Pereira de Souza Neto',
            formacao: 'Análise e Desenvolvimento de Sistemas | Estácio',
            desenvolvido: 'Desenvolvido com HTML, Tailwind CSS & JavaScript'
        }
    },
    
    en: {
        // Navegação
        nav: {
            inicio: 'Home',
            sobre: 'About',
            experiencia: 'Experience',
            formacao: 'Education',
            portfolio: 'Portfolio',
            habilidades: 'Skills',
            contato: 'Contact'
        },
        
        // Hero
        hero: {
            badge: 'Studying Systems Analysis and Development',
            titulo: 'Rômulo <span class="gradient-text">Neto</span>',
            subtitulo: 'Full Stack',
            subtitulo2: 'Full Impact',
            descricao: 'Professional transitioning to technology, combining <span class="text-primary font-semibold">10+ years of technical experience</span> with Systems Analysis education.',
            btnExperiencia: 'View Experience',
            btnContato: 'Get in Touch'
        },
        
        // Sobre
        sobre: {
            badge: 'Transitioning to Technology',
            titulo: 'About <span class="gradient-text">Me</span>',
            p1: 'I am a professional with a solid track record in project development, process management and operational control, currently in a <strong>structured transition to Information Technology</strong>, focusing on Full Stack Development.',
            p2: 'My career was built in environments that demand <strong>organization, analysis, technical documentation and execution responsibility</strong>. Over the years, I worked with scope planning, deadline control, process standardization and data-driven decision making — competencies that today support my software development training.',
            p3: 'My migration to IT represents a new professional direction. I am in continuous technical learning, deepening knowledge in <strong>web development, application architecture and code best practices</strong>, while applying these concepts in building my own projects — including this website.',
            destaque: 'I recognize that I am evolving in the technical area, but I bring as a differential <strong>professional maturity, discipline, structured project vision and commitment to quality</strong>. My goal is to join teams where I can contribute with organization, responsibility and constant learning, developing myself as a technology professional consistently.',
            skills: ['Web Development', 'Software Architecture', 'Project Management', 'Data Analysis'],
            stats: {
                exp: 'Years Experience',
                formacao: 'In Training',
                objetivo: 'Full Stack (Goal)',
                local: 'Santa Catarina'
            },
            btnCV: 'Download CV',
            btnProjetos: 'View Projects',
            local: 'Balneário Piçarras, Santa Catarina'
        },
        
        // Experiência
        experiencia: {
            titulo: 'Professional <span class="gradient-text">Experience</span>',
            subtitulo: 'Multidisciplinary journey uniting technology, design and environmental management',
            atual: 'CURRENT - FREELANCE',
            tags: {
                design: 'Design',
                operacao: 'Operations',
                laboratorio: 'Laboratory',
                ambiental: 'Environmental',
                bancario: 'Banking'
            }
        },
        
        // Formação
        formacao: {
            titulo: 'Academic <span class="gradient-text">Background</span>',
            subtitulo: 'Multidisciplinary formal education',
            emAndamento: 'IN PROGRESS',
            cursos: {
                ads: {
                    titulo: 'Systems Analysis and Development',
                    instituicao: 'Estácio',
                    descricao: 'Technological degree focused on software development and databases.',
                    tags: ['Logic', 'Database', 'Software']
                },
                design: {
                    titulo: 'Interior Design Technologist',
                    instituicao: 'SENAC',
                    descricao: 'Training in design, CAD technical drawing and 3D modeling.',
                    tags: ['CAD', '3D', 'Design']
                },
                ambiental: {
                    titulo: 'Environmental Technician',
                    instituicao: 'SENAI',
                    descricao: 'Technical training in environmental management and WTP/WWTP control.',
                    tags: ['Environmental', 'WTP/WWTP', 'Laboratory']
                }
            }
        },
        
        // Portfólio
        portfolio: {
            titulo: 'My <span class="gradient-text">Portfolio</span>',
            subtitulo: 'Academic and personal projects developed during graduation',
            filtros: {
                todos: 'All',
                academicos: 'Academic',
                web: 'Web',
                dados: 'Data',
                automacao: 'Automation'
            },
            emDesenvolvimento: 'In Development',
            novoProjeto: 'New Project',
            btnGithub: 'View all on GitHub'
        },
        
        // Habilidades
        habilidades: {
            titulo: 'Skills & <span class="gradient-text">Competencies</span>',
            tecnologia: 'Technology',
            analise: 'Analysis',
            comportamentais: 'Behavioral Skills',
            idiomas: 'Languages',
            ingles: 'English',
            leitura: 'Technical reading'
        },
        
        // Contato
        contato: {
            titulo: "Let's <span class='gradient-text'>Connect</span>",
            subtitulo: 'Available for opportunities in technology, systems analysis and process management',
            info: 'Contact Information',
            localizacao: 'Location',
            telefone: 'Phone',
            email: 'Email',
            redes: 'Professional Networks',
            formulario: 'Send a message',
            nome: 'Name',
            emailPlaceholder: 'your@email.com',
            assunto: 'Subject',
            assuntos: {
                emprego: 'Job opportunity',
                freelance: 'Freelance project',
                networking: 'Networking'
            },
            mensagem: 'Message',
            mensagemPlaceholder: 'Describe your proposal or message...',
            btnEnviar: 'Send Message'
        },
        
        // Footer
        footer: {
            copyright: 'Rômulo Pereira de Souza Neto',
            formacao: 'Systems Analysis and Development | Estácio',
            desenvolvido: 'Developed with HTML, Tailwind CSS & JavaScript'
        }
    }
};

// Estado atual
let currentLang = localStorage.getItem('lang') || 'pt';

// Função para trocar idioma
function toggleLanguage() {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    localStorage.setItem('lang', currentLang);
    applyTranslations();
    updateLangButton();
}

// Aplicar traduções
function applyTranslations() {
    const t = i18n[currentLang];
    
    // Navegação
    document.querySelectorAll('[data-i18n="nav-inicio"]').forEach(el => el.textContent = t.nav.inicio);
    document.querySelectorAll('[data-i18n="nav-sobre"]').forEach(el => el.textContent = t.nav.sobre);
    document.querySelectorAll('[data-i18n="nav-experiencia"]').forEach(el => el.textContent = t.nav.experiencia);
    document.querySelectorAll('[data-i18n="nav-formacao"]').forEach(el => el.textContent = t.nav.formacao);
    document.querySelectorAll('[data-i18n="nav-portfolio"]').forEach(el => el.textContent = t.nav.portfolio);
    document.querySelectorAll('[data-i18n="nav-habilidades"]').forEach(el => el.textContent = t.nav.habilidades);
    document.querySelectorAll('[data-i18n="nav-contato"]').forEach(el => el.textContent = t.nav.contato);
    
    // Hero
    document.querySelectorAll('[data-i18n="hero-badge"]').forEach(el => el.innerHTML = `<i class="fas fa-graduation-cap mr-2"></i>${t.hero.badge}`);
    document.querySelectorAll('[data-i18n="hero-titulo"]').forEach(el => el.innerHTML = t.hero.titulo);
    document.querySelectorAll('[data-i18n="hero-subtitulo"]').forEach(el => el.textContent = t.hero.subtitulo);
    document.querySelectorAll('[data-i18n="hero-subtitulo2"]').forEach(el => el.textContent = t.hero.subtitulo2);
    document.querySelectorAll('[data-i18n="hero-descricao"]').forEach(el => el.innerHTML = t.hero.descricao);
    document.querySelectorAll('[data-i18n="hero-btn-experiencia"]').forEach(el => el.innerHTML = `<i class="fas fa-briefcase mr-2"></i>${t.hero.btnExperiencia}`);
    document.querySelectorAll('[data-i18n="hero-btn-contato"]').forEach(el => el.innerHTML = `<i class="fas fa-envelope mr-2"></i>${t.hero.btnContato}`);
    
    // Sobre
    document.querySelectorAll('[data-i18n="sobre-badge"]').forEach(el => el.innerHTML = `<i class="fas fa-user-graduate mr-2"></i>${t.sobre.badge}`);
    document.querySelectorAll('[data-i18n="sobre-titulo"]').forEach(el => el.innerHTML = t.sobre.titulo);
    document.querySelectorAll('[data-i18n="sobre-p1"]').forEach(el => el.innerHTML = t.sobre.p1);
    document.querySelectorAll('[data-i18n="sobre-p2"]').forEach(el => el.innerHTML = t.sobre.p2);
    document.querySelectorAll('[data-i18n="sobre-p3"]').forEach(el => el.innerHTML = t.sobre.p3);
    document.querySelectorAll('[data-i18n="sobre-destaque"]').forEach(el => el.innerHTML = `<i class="fas fa-lightbulb text-primary mr-2"></i>${t.sobre.destaque}`);
    
    // Skills tags
    const skillTags = document.querySelectorAll('[data-i18n="sobre-skill"]');
    skillTags.forEach((el, i) => {
        if (t.sobre.skills[i]) {
            el.innerHTML = `<i class="fas fa-${['code', 'sitemap', 'tasks', 'chart-line'][i]} text-primary mr-2"></i>${t.sobre.skills[i]}`;
        }
    });
    
    // Stats
    document.querySelectorAll('[data-i18n="stat-exp"]').forEach(el => el.textContent = t.sobre.stats.exp);
    document.querySelectorAll('[data-i18n="stat-formacao"]').forEach(el => el.textContent = t.sobre.stats.formacao);
    document.querySelectorAll('[data-i18n="stat-objetivo"]').forEach(el => el.textContent = t.sobre.stats.objetivo);
    document.querySelectorAll('[data-i18n="stat-local"]').forEach(el => el.textContent = t.sobre.stats.local);
    
    // Botões
    document.querySelectorAll('[data-i18n="btn-cv"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-file-download text-lg group-hover:animate-bounce"></i><span>${t.sobre.btnCV}</span>`;
    });
    document.querySelectorAll('[data-i18n="btn-projetos"]').forEach(el => {
        el.innerHTML = `<i class="fas fa-folder-open text-lg"></i><span>${t.sobre.btnProjetos}</span>`;
    });
    
    // Experiência, Formação, Portfólio, Habilidades, Contato...
    // (continuar para outras seções)
    
    // Atualizar atributos lang
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';
}

// Atualizar botão de idioma
function updateLangButton() {
    const btn = document.getElementById('lang-toggle');
    if (btn) {
        btn.innerHTML = currentLang === 'pt' 
            ? '<i class="fas fa-globe mr-2"></i>EN' 
            : '<i class="fas fa-globe mr-2"></i>PT';
        btn.title = currentLang === 'pt' ? 'Switch to English' : 'Mudar para Português';
    }
}

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
    updateLangButton();
});