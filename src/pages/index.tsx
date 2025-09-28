import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Translate from '@docusaurus/Translate';
// @ts-ignore
import ContextEditor from '@theme/CodeEditor/ContextEditor';

import styles from './styles.module.css';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

function HomepageHeader() {
    const { siteConfig } = useDocusaurusContext();
    const { withBaseUrl } = useBaseUrlUtils();
    return (
        <header className={clsx('hero hero--primary', styles.heroBanner)}>
            <div className="container">
                <Heading as="h1" className="hero__title">
                    {siteConfig.title}
                </Heading>
                <p className="hero__subtitle">
                    <Translate id="homepage.subtitle">Sains Data - 2025</Translate>
                </p>
                <div className={styles.buttons}>
                    <Link className="button button--secondary button--lg" to={withBaseUrl('/docs/materi/intro')}>
                        Materi Praktikum 👆
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default function Home(): JSX.Element {
    const { siteConfig } = useDocusaurusContext();
    return (
        <Layout title={'Home'} description={siteConfig.tagline}>
            <HomepageHeader />
            <main>
                {/* <section className={clsx(styles.section)}> */}
                {/*     <ContextEditor className={clsx('language-py', styles.code)}> */}
                {/*         {`print('Hello python enthusiast!!! 👋')`} */}
                {/*     </ContextEditor> */}
                {/* </section> */}
            </main>
        </Layout>
    );
}
