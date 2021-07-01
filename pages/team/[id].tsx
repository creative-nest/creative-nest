import { useRouter } from "next/router"
import Head from "next/head"
import styles from "../../styles/Home.module.css"
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next"
import Link from 'next/link'

export default function Person({ person }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>{person.name}</title>
      </Head>
      <main className={styles.main}>
        <img src={person.image} width="300px" />
        <h1 className={styles.title}>{person.name}</h1>
        <p className={styles.description}>{person.short_about}</p>
        <Link href={person.portfolio_link}>
          <button>{person.portfolio}</button>
        </Link>
        <Link
          href={{
            pathname: '/order',
            query: { person: person.person_id },
          }}
        >
          <button>Let's work together!</button>
        </Link>
        <h2>Skills</h2>
        <ul>
          {
            person.skills.map(skill => {
              return <li key={skill}>{skill}</li>
            })
          }
        </ul>
      </main>
    </div>
  )
}

// export const getServerSideProps: GetServerSideProps = async ({ params }) => {
//     const req = await fetch(`http://localhost:3000/${params.id}.json`);
//     const data = await req.json();

//     return {
//         props: { car: data },
//     }
// }

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const req = await fetch(`http://localhost:3000/people.json`)
  const people = await req.json()

  const person = people[`${params.id}`]

  return {
    props: { person: person },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const req = await fetch("http://localhost:3000/people.json")
  const data = await req.json()

  const paths = Object.keys(data).map((person_id) => {
    return { params: { id: person_id } }
  })

  return {
    paths,
    fallback: false,
  }
}
