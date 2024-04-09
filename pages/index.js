import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Image from 'next/image';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingXl} ${utilStyles.centre}`}>
        <p>Student and Developer</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.lightSec}`}>
        <h2 className={utilStyles.headingLg}>About Me</h2>
        <p>I am an eager to learn, analytical and determined aspiring Software Engineer with a strong interest in Data Science & Machine Learning currently studying towards an integrated Masters in Informatics at the University of Edinburgh. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.centre}`}>Portfolio</h2>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.lightSec}`}>
        <ul className={utilStyles.horizontalList}>
          {allPostsData.map(({ id, date, title, image }) => (
            <li className={utilStyles.horizontalListItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <Image src={image} alt={title} width={200} height={200} />
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={`${utilStyles.headingLg} ${utilStyles.centre}`}>Experience</h2>
      </section>
    </Layout>
  );
}