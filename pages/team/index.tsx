
import Link from 'next/link'
import styles from '../../styles/Home.module.css'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'

export default function Team({ people }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          The Team
        </h1>
        <ul>
          {
            Object.keys(people).map(person_id => {
              let person = people[person_id]
              return <li key={person_id}>
                <Link href={`/team/${person_id}`}><a>{person.name}</a></Link>
              </li>
            })
          }
        </ul>
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
