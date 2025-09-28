import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import { themes as prismThemes } from 'prism-react-renderer';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/praktikum-dasar-pemrograman/' : '/';

const config: Config = {
    title: 'Praktikum Dasar Pemrograman',
    tagline: 'Sains Data - 2025',
    url: 'https://prayudahlah.github.io',
    baseUrl: BASE_URL,
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    organizationName: 'prayudahlah', // Usually your GitHub org/user name.
    projectName: 'praktikum-dasar-pemrograman', // Usually your repo name.
    trailingSlash: false,
    i18n: {
        defaultLocale: 'en',
        locales: ['en']
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
                    to: 'docs/materi/intro',
                    position: 'left',
                    sidebarId: 'materialSidebar',
                    label: 'Materi'
                },
                // {
                //     to: 'playground',
                //     position: 'left',
                //     label: 'Playground'
                // },
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
                docs: {
                    sidebarPath: './sidebars.ts',
                    editUrl: 'https://github.com/prayudahlah/praktikum-dasar-pemrograman/edit/main/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.css')
                }
            } satisfies Preset.Options
        ]
    ],
    themes: ['docusaurus-live-brython']
};

export default config;
