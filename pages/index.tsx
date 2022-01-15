import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import logo from '../public/creativenest_birdLogo_nobg.svg'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Creative Nest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <div>
          <Link href="/">
            <Image className={styles.logo} height="50px" width="50px" src={logo} alt="Creative Nest logo" />
          </Link>
        </div>
        <div>
          <Link href="/contact">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Describe your idea</Link>
        </div>
      </nav>
      <main className={styles.main}>
        <div className={styles.mainLeft}>
          <h1 className={styles.title}>
            Creative Nest
          </h1>
          <p className={styles.description}>Hatching your creative ideas into to fully grown realities. We develop projects across foto, video, audio and design.</p>
          <Link href="/contact">Describe your idea</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className={styles.mainRight}>
          <img alt="Creative Nest artwork" />
        </div>
      </main>
      <section className={styles.gallery}>
        <div className={styles.galleryLeft}>
          <h1 className={styles.title}>
            Gallery
          </h1>
          <p className={styles.description}>Projects that have taken flight.</p>
        </div>
        <div className={styles.galleryRight}>
          <div className={styles.carrouselItem}>Facade Design</div>
        </div>
      </section>
      <section>
        <h1 className={styles.title}>
          Customers
        </h1>
        <img alt="Maltbazaren" />
        <img alt="Furesø Kommune" />
        <img alt="TEC" />
        <img alt="Niels Brock" />
        <img alt="Ledernes Hovedorganisation" />
      </section>
      <section>
        <h1 className={styles.title}>
          Trust pilot testimonials
        </h1>
        <div>
          <img alt="Klaus Langbergs" />
          <p>Fantastisk service og et resultat i sidste ende, der virkeligt er fedt! Vi fik lavet et helt nyt design til vores glasfacade I min virksomhed.Unge og professionelle mennesker, der brænder for hvad de laver. Kan varmt anbefales!! </p>
        </div>
        <div>
          <img alt="Herlev Kebab og Pizza" />
          <p>En klar anbefaling. God indledende dialog om opgaven og super godt udført arbejde. Fotografen evnede virkelig, at fange stemningerne ind i billederne.</p>
        </div>
      </section>
      <section>
        <h1>About The Nest</h1>
        <p>Creative Nest is community and a mix of passionate creative talents, with a goal of developing our skills, to deliver kick-ass creative media product to the world.</p>
        <img alt="jonathan strange" />
        <img alt="nicklas casthøj" />
        <img alt="rebecca strange" />
        <img alt="erik hertel" />
        <img alt="frederik væversted" />
        <img alt="julie kølle" />
        <img alt="mathias andersen" />
        <img alt="andreas holm" />
        <img alt="nicolas brandt haurum" />
        <img alt="christian valerius" />
        <img alt="kristoffer højelse" />
      </section>
      <footer>
        <div>
          <img alt="Create Nest logo" />
          <h1>Creative Nest</h1>
          <p>hello@creativenest.dk</p>
          <p>+45 88 88 88 88</p>
        </div>
        <div>
          <Link href="/contact">Describe your idea</Link>
          <Link href="/contact">Contact us</Link>
        </div>
      </footer>
    </div>
  )
}
