import React from 'react'
import tw from 'twin.macro'
import { Logo, Layout, Button, Link } from '../components'
import GroomsBrideFamily from '../images/groomsbridefamily.jpg'
import GroomsBride from '../images/groomsbride.png'
import ShuangXi from '../images/shuangxi.png'
import QRImage from '../images/qrbca.jpg'
import QRImage2 from '../images/qrbca2.png'
import Paynow from '../images/paynow.jpg'
import Whatsapp from '../images/whatsapp.png'
import Googlepay from '../images/googlepay.jpg'
import NameTagFitri from '../images/NameTag_Fitri.png'
import NameTag from '../images/NameTag.png'
import NameTagRidho from '../images/NameTag_Ridho.png'
import Journey from '../images/text2.png'
const App = () => {
  const [showGiving, setShowGiving] = React.useState(false)
  return (
    <Layout css={tw`min-h-screen overflow-hidden relative`}>
      <div
        className="container"
        tw="mx-auto flex flex-col items-center relative"
        style={{
          color: '#2a3b72',
        }}
      >
        <div
          tw="w-full p-5"
          style={{
            marginTop: '15rem',
            marginBottom: '5rem'
          }}
        >
          <img src={NameTagRidho} />
        </div>
        <div
          tw="w-full p-5"
          style={{
            textAlign: 'center',
            marginBottom: '15rem'
          }}
        >
          Senior Software Engineer - Husband - Musician
        </div>
      </div>
      <div tw="py-24 relative bg-white">
        <div className="container" tw="mx-auto items-center sm:px-0 relative">
          <div
            tw="font-poppin text-4xl sm:text-5xl text-gold-900 text-center mb-12"
            style={{ color: '#2a3b72' }}
          >
            Works
          </div>
{/*          <div
            tw="mx-auto w-full leading-loose font-poppin p-1"
            style={{ maxWidth: 800 }}
          >
            <img src={Journey} tw="w-full" />
          </div>*/}
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              February 2019 - Present
              Senior Software Engineer - Bukalapak
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              January 2018 - February 2019
              Medior Software Engineer - Bukalapak
            </div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              February 2016 - January 2018
              Junior Software Engineer - Bukalapak
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              June 2014 - July 2014
              Intern Software Engineer - SIRCLO
            </div>
          </div>
        </div>
      </div>
      <div tw="py-24 font-poppin relative" style={{ color: '#2a3b72' }}>
        <div className="container" tw="mx-auto items-center sm:px-0 relative">
          <div
            tw="font-poppin text-4xl sm:text-5xl text-gold-900 text-center mb-12"
            style={{ color: '#2a3b72' }}
          >
            Projects
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'left'
            }}>
              August 2015 - March 2016
              Software Engineer - Encirclo
            </div>
            <div tw="col-span-full sm:col-span-1"></div>
          </div>
          <div tw="grid grid-cols-2 text-center font-poppin">
            <div tw="col-span-full sm:col-span-1"></div>
            <div tw="pl-4 pr-4 pb-4 text-gold-100 col-span-full sm:col-span-1 text-2xl tracking-widest font-poppin" style={{
              fontSize: 15,
              textAlign: 'right'
            }}>
              January 2014 - August 2014
              Software Engineer - Berguru.com
            </div>
          </div>
        </div>
      </div>
      <div
        tw="py-6 relative bg-white text-center font-poppin"
        style={{ color: '#2a3b72' }}
      >
        <div>
          © 2022 by{' '}
          <a href="https://akbarisanto.com" tw="font-semibold">
            akbarisanto
          </a>
        </div>
      </div>
    </Layout>
  )
}

export default App
