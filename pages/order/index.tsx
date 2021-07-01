
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import { useRouter } from 'next/router'

export default function Order({ people }) {
  const router = useRouter()
  const { person: person_id } = router.query

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Work with { (person_id) ? person_id : 'us' }!
        </h1>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await fetch(`http://localhost:3000/people.json`);
  const people = await req.json();

  return {
    props: { people: people },
  }
}
