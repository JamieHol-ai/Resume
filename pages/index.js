import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date';
import Timeline from '../components/timeline';
import Image from 'next/image';

import { getSortedPostsData } from '../lib/posts';
import { getSortedTimelineData } from '../lib/timeline_items';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const timelineData = getSortedTimelineData();
  return {
    props: {
      allPostsData,
      timelineData,
    },
  };
}

export default function Home({allPostsData, timelineData}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingXl} ${utilStyles.centre}`}>
        <p>Student and Developer</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px} ${utilStyles.lightSec}`}>
        <p className={utilStyles.headingLg}>About Me</p>
        <p>I am an eager to learn, analytical and determined aspiring Software Engineer with a strong interest in Data Science & Machine Learning currently studying towards an integrated Masters in Informatics at the University of Edinburgh. </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p className={`${utilStyles.headingLg} ${utilStyles.centre}`}>Portfolio</p>
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
              <div className={utilStyles.imageContainer}>
                <Image src={image} alt={title} width={200} height={200} />
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p className={`${utilStyles.headingLg} ${utilStyles.centre}`}>Experience</p>
      </section>
      <Timeline timelineData={timelineData} />
    </Layout>
  );
}