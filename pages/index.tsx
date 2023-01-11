import Head from 'next/head';
import Image from 'next/image';
import Hero from '../components/Hero';
import { SliderData} from '../components/SliderData';
import Slider from '../components/Slider';
import Instagram from '../components/instagram';
import {InstagramData} from '../components/instragramData'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Photography Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" 
        />
        
      </Head>

      <Hero heading='CG Photography' message='I make pictures of cars come alive'/>

      <Slider slides = {SliderData} />

      <Instagram />

      
    </div>
  )
}
