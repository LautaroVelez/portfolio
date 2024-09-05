import { useTranslation } from 'react-i18next';

const useProjectsList = () => {
    const { t } = useTranslation('projects');

    const projectsList = [
        {
            title: t('projects.finance.title'),
            des: t('projects.finance.des'),
            src: "finance.png",
            location: t('projects.finance.location'),
            year: t('projects.finance.year'),
            made: t('projects.finance.made'),
            link: "https://financiation2.onrender.com/",
            about: t('projects.finance.about'),
            roleTitle: t('projects.finance.roleTitle'),
            role: t('projects.finance.role'),
            directory: 'finance',
            video: 'finance.webm',
            responsive: [
                { id: '1', src: 'financeiphone1.png' },
                { id: '2', src: 'financeiphone2.png' },
                { id: '3', src: 'financeiphone3.png' },
                { id: '4', src: 'financeiphone4.png' },
                { id: '5', src: 'financeiphone5.png' },
                { id: '6', src: 'financeiphone6.png' },
                { id: '7', src: 'financeiphone7.png' }
            ],
            id: '1'
        },
        {
            title: t('projects.construction.title'),
            des: t('projects.construction.des'),
            src: "ConstructionSite.png",
            location: t('projects.construction.location'),
            year: t('projects.construction.year'),
            made: t('projects.construction.made'),
            link: "https://velezconstrucciones.netlify.app",
            about: t('projects.construction.about'),
            directory: 'construction',
            video: 'construction.mp4',
            responsive: [
                { id: '1', src: 'constructioniphone1.png' },
                { id: '2', src: 'constructioniphone2.png' },
                { id: '3', src: 'constructioniphone3.png' },
                { id: '4', src: 'constructioniphone4.png' },
                { id: '5', src: 'constructioniphone5.png' },
                { id: '6', src: 'constructioniphone6.png' }
            ],
            id: '2'
        },
        {
            title: t('projects.groovy.title'),
            des: t('projects.groovy.des'),
            src: "groovy1.png",
            location: t('projects.groovy.location'),
            year: t('projects.groovy.year'),
            made: t('projects.groovy.made'),
            link: "https://groovy-omega.vercel.app/",
            about: t('projects.groovy.about'),
            directory: 'groovy',
            video: 'groovy.mp4',
            responsive: [
                { id: '1', src: 'groovyiphone1.png' },
                { id: '2', src: 'groovyiphone2.png' },
                { id: '3', src: 'groovyiphone3.png' },
                { id: '4', src: 'groovyiphone4.png' }
            ],
            id: '3'
        },
        {
            title: t('projects.findwork.title'),
            des: t('projects.findwork.des'),
            src: "findwork.png",
            location: t('projects.findwork.location'),
            year: t('projects.findwork.year'),
            made: t('projects.findwork.made'),
            link: "https://find-work-five.vercel.app/",
            about: t('projects.findwork.about'),
            directory: 'findwork',
            video: '',
            responsive: [],
            id: '4'
        },
        {
            title: t('projects.suicidal.title'),
            des: t('projects.suicidal.des'),
            src: "Suicidal.png",
            location: t('projects.suicidal.location'),
            year: t('projects.suicidal.year'),
            made: t('projects.suicidal.made'),
            link: "https://hopeheaven.netlify.app/",
            about: t('projects.suicidal.about'),
            directory: 'suicidal',
            video: '',
            responsive: [],
            id: '5'
        },
        {
            title: t('projects.oldportfolio.title'),
            des: t('projects.oldportfolio.des'),
            src: "oldportfolio.png",
            location: t('projects.oldportfolio.location'),
            year: t('projects.oldportfolio.year'),
            made: t('projects.oldportfolio.made'),
            link: "https://find-work-five.vercel.app/",
            about: t('projects.oldportfolio.about'),
            directory: 'oldportfolio',
            video: 'portfolio.mp4',
            responsive: [
                { id: '1', src: 'portiphone1.png' },
                { id: '2', src: 'portiphone2.png' },
                { id: '3', src: 'portiphone3.png' }
            ],
            id: '6'
        },
        {
            title: t('projects.curr.title'),
            des: t('projects.curr.des'),
            src: "CURR1.png",
            location: t('projects.curr.location'),
            year: t('projects.curr.year'),
            made: t('projects.curr.made'),
            link: "https://cv-to-pdf.vercel.app/",
            about: t('projects.curr.about'),
            directory: 'curr',
            video: 'curr.mp4',
            responsive: [],
            id: '7'
        },
        {
            title: t('projects.todo.title'),
            des: t('projects.todo.des'),
            src: "todo.png",
            location: t('projects.todo.location'),
            year: t('projects.todo.year'),
            made: t('projects.todo.made'),
            link: "https://todo-list-lautarovelezs-projects.vercel.app/",
            about: t('projects.todo.about'),
            directory: 'todo',
            video: 'todovideo.mp4',
            responsive: [
                { id: '1', src: 'todoresponsive.png' }
            ],
            id: '8'
        }
    ];

    return projectsList;
}

export default useProjectsList;
