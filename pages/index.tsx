import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import logo_cn from '../public/bird-flat.svg'

import cn_artwork from '../public/birb-sticker.png'

import pb_andreas from '../public/pb-andreas.jpeg'
import pb_christian from '../public/pb-christian.jpeg'
import pb_erik from '../public/pb-erik.png'
import pb_frederik from '../public/pb-frederik.png'
import pb_jonathan from '../public/pb-jonathan.jpeg'
import pb_julie from '../public/pb-julie.jpeg'
import pb_kristoffer from '../public/pb-kristoffer.jpeg'
import pb_nicklas from '../public/pb-nicklas.jpeg'
import pb_nicolas from '../public/pb-nicolas.jpeg'
import pb_rebecca from '../public/pb-rebecca.jpeg'

import logo_mb from '../public/logo-mb.svg'
import logo_fk from '../public/logo-fk.svg'
import logo_tec from '../public/logo-tec.svg'
import logo_nb from '../public/logo-nb.svg'
import logo_lh from '../public/logo-lh.svg'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Creative Nest</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="nav">
        <div>
          <Link href="/">
            <Image className="logo" height="50px" width="50px" src={logo_cn} alt="Creative Nest logo" />
          </Link>
        </div>
        <div>
          <Link href="/contact">Home</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/contact">Describe your idea</Link>
        </div>
      </nav>
      <main className="main">
        <div className="main-left">
          <h1 className="title">
            Creative Nest
          </h1>
          <p className="description">Hatching your creative ideas into to fully grown realities. We develop projects across foto, video, audio and design.</p>
          <Link href="/contact">Describe your idea</Link>
          <Link href="/contact">Contact us</Link>
        </div>
        <div className="gradient"></div>
        <div className="main-art-container">
          <Image className="main-art" src={cn_artwork} alt="Creative Nest artwork" />
        </div>
      </main>
      <section className="gallery">
        <div className="gallery-left">
          <h1 className="title">
            Gallery
          </h1>
          <p className="description">Projects that have taken flight.</p>
        </div>
        <div className="gallery-right">
          <div className="carrousel-item">
            <Image layout='fill' src={`https://via.placeholder.com/800.webp/`} alt="Modus Management website" />
            <p>Website</p>
          </div>
        </div>
      </section>
      <section>
        <h1 className="title">
          Customers
        </h1>
        <div className="customer-logo-container">
          <Image className="customer-logo" src={logo_mb} alt="Maltbazaren" />
          <Image className="customer-logo" src={logo_fk} alt="Furesø Kommune" />
          <Image className="customer-logo" src={logo_tec} alt="TEC" />
          <Image className="customer-logo" src={logo_nb} alt="Niels Brock" />
          <Image className="customer-logo" src={logo_lh} alt="Ledernes Hovedorganisation" />
        </div>
      </section>
      <section>
        <h1 className="title">
          Trust pilot testimonials
        </h1>
        <div>
          <h3>Klaus Langbergs</h3>
          <p>Fantastisk service og et resultat i sidste ende, der virkeligt er fedt! Vi fik lavet et helt nyt design til vores glasfacade I min virksomhed.Unge og professionelle mennesker, der brænder for hvad de laver. Kan varmt anbefales!! </p>
        </div>
        <div>
          <h3>Gokhan Bilen</h3>
          <p>En klar anbefaling. God indledende dialog om opgaven og super godt udført arbejde. Fotografen evnede virkelig, at fange stemningerne ind i billederne.</p>
        </div>
      </section>
      <section>
        <h1>About The Nest</h1>
        <p>Creative Nest is community and a mix of passionate creative talents, with a goal of developing our skills, to deliver kick-ass creative media product to the world.</p>
        <div className="people-container">
          <Image src={pb_jonathan} alt="jonathan strange" />
          <Image src={pb_nicklas} alt="nicklas casthøj" />
          <Image src={pb_rebecca} alt="rebecca strange" />
          <Image src={pb_erik} alt="erik hertel" />
          <Image src={pb_frederik} alt="frederik væversted" />
          <Image src={pb_julie} alt="julie kølle" />
          <img alt="mathias andersen" />
          <Image src={pb_andreas} alt="andreas holm" />
          <Image src={pb_nicolas} alt="nicolas brandt haurum" />
          <Image src={pb_christian} alt="christian valerius" />
          <Image src={pb_kristoffer} alt="kristoffer højelse" />
        </div>
      </section>
      <footer>
        <div>
          <Image className="logo" height="50px" width="50px" src={logo_cn} alt="Creative Nest logo" />
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
