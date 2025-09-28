import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
    title: 'Live Brython',
    tagline: 'Execute and interact with your Markdown Python Codeblocks in Docusaurus 3',
    url: 'https://prayudahlah.github.io',
    baseUrl: '/praktikum-dasar-pemrograman/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'prayudahlah', // Usually your GitHub org/user name.
    projectName: 'praktikum-dasar-pemrograman', // Usually your repo name.
    trailingSlash: false,
    i18n: {
        defaultLocale: 'en',
        locales: ['en', 'zh-Hant']
    },
    future: {
        experimental_faster: true,
        experimental_router: 'browser',
    },
    themeConfig: {
        navbar: {
            title: 'Prak DP',
            logo: {
                src: 'img/docusaurus.png'
            },
            items: [
                {
                    to: 'docs/materi',
                    position: 'left',
                    label: 'Materi'
                },
                {
                    to: 'playground',
                    position: 'left',
                    label: 'Playground'
                },
                {
                    href: 'https://github.com/prayudahlah/praktikum-dasar-pemrograman',
                    label: 'GitHub',
                    position: 'right'
                }
            ]
        },
        footer: {
            style: 'dark',
            copyright: `Copyright © ${new Date().getFullYear()} prayudahlah. Built with Docusaurus.`
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            } satisfies Preset.Options
        ]
    ],
    // scripts: [
    //     {
    //         src: 'https://umami.gbsl.website/tell-me.js',
    //         ['data-website-id']: '8783952a-0904-4284-9115-61f387c4499d',
    //         ['data-domains']: 'lebalz.github.io',
    //         async: true,
    //         defer: true
    //     }
    // ],
    themes: ['docusaurus-live-brython']
};

export default config;
