import Head from 'next/head';
import styles from './style.module.scss';
import FeatureSection from "../components/FeatureSection";
import SupervisorIcon from "../public/icons/icon-supervisor.svg";
import TeamBuilderIcon from "../public/icons/icon-team-builder.svg";
import KarmaIcon from "../public/icons/icon-karma.svg";
import CalculatorIcon from "../public/icons/icon-calculator.svg";

const features = [
  {
    title: 'Supervisor',
    description: 'Monitors activity to identify project roadblocks',
    icon: <SupervisorIcon />,
    color: '#44D3D2',
  },
  {
    title: 'Team Builder',
    description: 'Scans our talent network to create the optimal team for your project',
    icon: <TeamBuilderIcon />,
    color: '#EA5454',
  },
  {
    title: 'Karma',
    description: 'Regularly evaluates our talent to ensure quality',
    icon: <KarmaIcon />,
    color: '#FCAE4A',
  },
  {
    title: 'Calculator',
    description: 'Uses data from past projects to provide better delivery estimates',
    icon: <CalculatorIcon />,
    color: '#549EF2',
  }
];

export default function Home() {
  return (
      <>
        <Head>
          <meta charSet="UTF-8"/>
          <meta name="viewport"
                content="width=device-width, initial-scale=1.0"
          />

          <title>{process.env.NEXT_PUBLIC_TITLE}</title>
          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta name="description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />

          <meta property="og:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta property="og:type"
                content="website"
          />
          <meta property="og:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta property="og:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta property="og:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />

          <meta name="twitter:card"
                content="summary_large_image"
          />
          <meta property="twitter:url"
                content={process.env.NEXT_PUBLIC_URL}
          />
          <meta name="twitter:title"
                content={process.env.NEXT_PUBLIC_TITLE}
          />
          <meta name="twitter:description"
                content={process.env.NEXT_PUBLIC_DESCRIPTION}
          />
          <meta name="twitter:image"
                content={process.env.NEXT_PUBLIC_OG_IMAGE}
          />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png"/>
        </Head>

        <main className={styles.container}>
          <h1 className={styles.title}>
            Reliable, efficient delivery
            <strong>Powered by Technology</strong>
          </h1>
          <p className={styles.description}>
            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is
            successful
          </p>
          <div className={styles.featureCardContainer}>
            <div className={styles.left}>
              <FeatureSection {...features[0]} />
            </div>
            <div className={styles.center}>
              <FeatureSection {...features[1]} />
              <FeatureSection {...features[2]} />
            </div>
            <div className={styles.right}>
              <FeatureSection {...features[3]} />
            </div>
          </div>
        </main>
      </>
  );
}
