import React, { useState } from 'react';
import background from '../src/assets/senmontori.jpeg';
import { ReactTyped } from 'react-typed';
import icon from './assets/instagram_icon.png';
import ImagePersonal2 from '../src/assets/yo2.png';
import ImagePersonal from '../src/assets/yo.png';
import image1 from '../src/assets/pastTours/1.jpg';
import image2 from '../src/assets/pastTours/2.jpg';
import image3 from '../src/assets/pastTours/3.jpg';
import image4 from '../src/assets/pastTours/4.jpg';
import image5 from '../src/assets/pastTours/5.jpg';
import image6 from '../src/assets/pastTours/6.jpg';
import image7 from '../src/assets/pastTours/7.jpg';
import image8 from '../src/assets/pastTours/8.jpg';
import image9 from '../src/assets/pastTours/9.jpg';
import image10 from '../src/assets/pastTours/10.jpg';
import image11 from '../src/assets/pastTours/11.jpg';
import image12 from '../src/assets/pastTours/12.jpg';
import image13 from '../src/assets/pastTours/13.jpg';
import image14 from '../src/assets/pastTours/14.jpg';
import image15 from '../src/assets/pastTours/15.jpg';
import image16 from '../src/assets/pastTours/16.jpg';
import image17 from '../src/assets/pastTours/17.jpg';
import image18 from '../src/assets/pastTours/18.jpg';
import image19 from '../src/assets/pastTours/19.jpg';
import image20 from '../src/assets/pastTours/20.jpg';
import image21 from '../src/assets/pastTours/21.jpg';
import image22 from '../src/assets/pastTours/22.jpg';
import image23 from '../src/assets/pastTours/23.jpg';
import image24 from '../src/assets/pastTours/24.jpg';
import image25 from '../src/assets/pastTours/25.jpg';
import image26 from '../src/assets/pastTours/26.jpg';
import image27 from '../src/assets/pastTours/27.jpg';
import image28 from '../src/assets/pastTours/28.jpg';
import image29 from '../src/assets/pastTours/29.jpg';
import image30 from '../src/assets/pastTours/30.jpg';
import image31 from '../src/assets/pastTours/31.jpg';
import image32 from '../src/assets/pastTours/32.jpg';
import image33 from '../src/assets/pastTours/33.jpg';
import image34 from '../src/assets/pastTours/34.jpg';
import image35 from '../src/assets/pastTours/35.jpg';
import image36 from '../src/assets/pastTours/36.jpg';
import image37 from '../src/assets/pastTours/37.jpg';
import image38 from '../src/assets/pastTours/38.jpg';
import image39 from '../src/assets/pastTours/39.jpg';
// import image40 from '../src/assets/pastTours/40.jpg';
import image41 from '../src/assets/pastTours/41.jpg';
// import image42 from '../src/assets/pastTours/42.jpg';
// import image43 from '../src/assets/pastTours/43.jpg';
// import image44 from '../src/assets/pastTours/44.jpg';
// import image45 from '../src/assets/pastTours/45.jpg';
// import image46 from '../src/assets/pastTours/46.jpg';
// import image47 from '../src/assets/pastTours/47.jpg';
// import image48 from '../src/assets/pastTours/48.jpg';
import image49 from '../src/assets/pastTours/49.jpg';
import image50 from '../src/assets/pastTours/50.jpg';
import image51 from '../src/assets/pastTours/51.jpg';
// import image52 from '../src/assets/pastTours/52.jpg';
import image53 from '../src/assets/pastTours/53.jpg';
import image54 from '../src/assets/pastTours/54.jpg';
import image55 from '../src/assets/pastTours/55.jpg';
// import image56 from '../src/assets/pastTours/56.jpg';
import image57 from '../src/assets/pastTours/57.jpg';
// import image58 from '../src/assets/pastTours/58.jpg';
// import image59 from '../src/assets/pastTours/59.jpg';
// import image60 from '../src/assets/pastTours/60.jpg';
// import image61 from '../src/assets/pastTours/61.jpg';
import image62 from '../src/assets/pastTours/62.jpg';
import image70 from '../src/assets/pastTours/70.jpg';
import image71 from '../src/assets/pastTours/71.jpg';
import image72 from '../src/assets/pastTours/72.jpg';
import image73 from '../src/assets/pastTours/73.jpg';
import image74 from '../src/assets/pastTours/74.jpg';

function App() {
  const [language, setLanguage] = useState('spanish');

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };
  return (
    <>
      {/* Navbar */}
      <>
        <div
          style={{ backgroundImage: `url(${background})` }}
          className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white"
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">
            <span className="w-full text-3xl font-bold text-[#FFF]">
              KANSAI
            </span>
            TOURS
          </h1>

          <a href="https://www.instagram.com/kansai.tours/">
            <img src={icon} className="mr-6" alt="" />
          </a>

          <ul className="flex justify-between">
            <li
              className="text-3xl hover:scale-125 cursor-pointer"
              onClick={() => toggleLanguage('english')}
            >
              <span id="englishBtn">🇬🇧</span>
            </li>
            <li
              className="text-3xl hover:scale-125 cursor-pointer"
              onClick={() => toggleLanguage('spanish')}
            >
              <span id="spanishBtn">🇪🇸</span>
            </li>
          </ul>
        </div>
      </>

      <>
        {/* english */}

        {language === 'english' ? (
          <div className="block">
            <>
              <div
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                className="text-white"
              >
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                  <p className="text-[#00df9a] font-bold p-2">
                    TRAVEL AND EXPLORE WITH ME
                  </p>
                  <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    GUIDED TOURS IN{' '}
                    <span className="w-full text-3xl font-bold text-[#00df9a]">
                      KYOTO, NARA, KOBE
                    </span>{' '}
                    AND{' '}
                    <span className="w-full text-3xl font-bold text-[#00df9a]">
                      OSAKA
                    </span>
                  </h1>
                  <div className="flex justify-center items-center my-4">
                    {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Experience our state-of-the-art tours that encompass a variety of activities like:</p> */}
                    <ReactTyped
                      className="uppercase md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                      strings={[
                        'Temples and Shrines',
                        'Shopping in Markets',
                        'Nature and in-city Walks',
                        'Historical Insights',
                        'Cultural Immersion',
                        'Local Cuisine Tasting',
                        'Tea Ceremonies',
                        'Arts and Craft',
                        'Nightlife',
                        'Hot Springs',
                        'Photography Tours',
                        'Boat Rides',
                        'Festivals and Events',
                        'Museums',
                      ]}
                      typeSpeed={50}
                      backSpeed={40}
                      loop
                    />
                  </div>
                  <p className="relative top-[65px] md:text-2xl text-xl mx-2 text-white">
                    I will meet you at your hotel lobby and take you around for
                    a full day tour. You will witness beauty and history in
                    these ancient cities.{' '}
                  </p>
                  <button
                    id="book"
                    className="bg-white w-[200px] relative top-[90px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] uppercase"
                  >
                    <a href="https://api.whatsapp.com/send?phone=61406978776">
                      Book Now <i className="ri-whatsapp-fill"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="w-full bg-white py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 ">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={ImagePersonal}
                      className="w-4/5 items-stretch rounded-sm"
                      alt="/"
                    />
                    <p className="text-xs">Kiyomizudera Walk</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[#00df9a] uppercase font-bold">
                      Why book with me?
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase">
                      Because I live, eat, work and sleep here
                    </h1>
                    <p className="text-justify">
                      Living as a resident in Japan with a local family has
                      allowed me to understand the culture and the local
                      community in a deeper way. As an enthusiastic traveler
                      since 2018, when I first moved to Australia, I realized
                      how exciting and sometimes difficult it can be to explore
                      the unknown.
                      <br />
                      <br /> Later, when I first came to Japan, I wouldn't have
                      been able to explore anything if it weren't for the help
                      of my wife, a Japanese national.
                      <br />
                      <br /> After some time of exploring back and forth I
                      acquired the confidence to move around cities without even
                      understanding the local language. Now, with a solid
                      foundation in the Japanese language and with several gems
                      and hidden spots ready to bring to the table for you, I
                      would happily show you everything I was shown once and
                      more. You will not be a tourist with me but a traveler.
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center md:m">
                    <img
                      src={ImagePersonal2}
                      className="w-4/5 items-stretch rounded-sm"
                      alt="/"
                    />
                    <p className="text-xs">East Kyoto Alleys</p>
                  </div>

                  {/* <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button> */}
                </div>
              </div>

              <div className="max-w-[800px] w-full mx-auto py-6 text-center flex flex-col justify-center">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                  <span className="w-full text-3xl font-bold text-[#FFF]">
                    PREVIOUS
                  </span>
                  TOURS
                </h1>
              </div>
              <>
                <div>
                  <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nara Park, Nara
                        </div>
                      </div>
                      <img src={image17} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image28} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tennoji, Osaka
                        </div>
                      </div>
                      <img src={image8} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kitahama, Osaka
                        </div>
                      </div>
                      <img src={image36} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Shinsekai, Osaka
                        </div>
                      </div>
                      <img src={image54} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tsutenkaku Tower, Shinsekai
                        </div>
                      </div>
                      <img src={image51} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tenryu-ji, Arashiyama
                        </div>
                      </div>
                      <img src={image72} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tea Ceremony, Uji
                        </div>
                      </div>
                      <img src={image13} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto
                        </div>
                      </div>
                      <img src={image31} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image39} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          OSaka local Izakaya
                        </div>
                      </div>
                      <img src={image37} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kiyomizudera, Kyoto
                        </div>
                      </div>
                      <img src={image71} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kinkakuji, Kyoto
                        </div>
                      </div>
                      <img src={image4} alt="" />
                    </div>
                    {/*  */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kuromon Markets, Osaka
                        </div>
                      </div>
                      <img src={image53} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Todai-ji, Nara
                        </div>
                      </div>
                      <img src={image15} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Yasaka Shrine, Kyoto
                        </div>
                      </div>
                      <img src={image21} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Dotonbori, Osaka
                        </div>
                      </div>
                      <img src={image70} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto Station
                        </div>
                      </div>
                      <img src={image19} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Fushimi Inari, Kyoto
                        </div>
                      </div>
                      <img src={image24} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Shinsekai, Osaka
                        </div>
                      </div>
                      <img src={image55} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image57} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Byodoin, Uji
                        </div>
                      </div>
                      <img src={image12} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Arashiyama
                        </div>
                      </div>
                      <img src={image29} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō Castle, Kyoto
                        </div>
                      </div>
                      <img src={image50} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Togetsukyo Bridge, Arashiyama
                        </div>
                      </div>
                      <img src={image1} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image28} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Asahi Beer Museum, Osaka
                        </div>
                      </div>
                      <img src={image49} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Hankyu Arashiyama Sta, Kyoto
                        </div>
                      </div>
                      <img src={image30} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kiyomizu-michi, Kyoto
                        </div>
                      </div>
                      <img src={image7} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image73} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Mount Inari, Kyoto
                        </div>
                      </div>
                      <img src={image74} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Fushimi Inari, Kyoto
                        </div>
                      </div>
                      <img src={image23} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō Gardens, Kyoto
                        </div>
                      </div>
                      <img src={image25} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto
                        </div>
                      </div>
                      <img src={image10} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Dotonbori, Osaka
                        </div>
                      </div>
                      <img src={image32} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Umeda, Osaka
                        </div>
                      </div>
                      <img src={image33} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Station
                        </div>
                      </div>
                      <img src={image34} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Twin Towers
                        </div>
                      </div>
                      <img src={image35} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nara Express Service
                        </div>
                      </div>
                      <img src={image18} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō castle, Kyoto
                        </div>
                      </div>
                      <img src={image26} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Yasaka Shrine, Osaka
                        </div>
                      </div>
                      <img src={image38} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image41} alt="" />
                    </div>
                  </div>

                  <div className="my-4">
                    <div className="flex flex-col sm:flex items-center justify-between w-full">
                      <button
                        id="book"
                        className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase"
                      >
                        <a href="https://api.whatsapp.com/send?phone=61406978776">
                          Inquire Here <i className="ri-whatsapp-fill"></i>
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </>
              <>
                <div className="max-w-[1240px] mx-auto pt-4 pb-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                  <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                      CRAFTED EXPERIENCE
                    </h1>
                    <p className="py-4">
                      Every tour is unique, and I never stick to a single
                      standardized route. With countless kilometers of
                      exploration under my belt, I'm excited to develop a custom
                      route with you that includes all the must-see elements. If
                      there's anything specific you'd like to add, it can be
                      easily included in our day tour. Just let me know your
                      preferences, and together we'll create the ultimate
                      experience.
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto mb-6 text-center flex flex-col justify-center">
                  <p className="w-full text-xs font-bold text-[#00df9a]">
                    <span className="w-full text-xs font-bold text-[#FFF]">
                      KANSAI
                    </span>
                    TOURS
                    <span className="w-full text-xs font-bold text-[#FFF]">
                      2024
                    </span>
                    &copy;
                  </p>
                </div>
              </>
            </>
          </div>
        ) : (
          <div className="hidden"></div>
        )}

        {/* english */}

        {/* spanish */}

        {language === 'spanish' ? (
          <div className="block">
            <>
              <div
                style={{
                  backgroundImage: `url(${background})`,
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                }}
                className="text-white"
              >
                <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                  <p className="text-[#00df9a] font-bold p-2">
                    TOURES EN ESPAÑOL
                  </p>
                  <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                    Exploremos juntos{' '}
                    <span className="w-full text-3xl font-bold text-[#00df9a]">
                      KYOTO, NARA, KOBE
                    </span>{' '}
                    Y{' '}
                    <span className="w-full text-3xl font-bold text-[#00df9a]">
                      OSAKA
                    </span>
                  </h1>
                  <div className="flex justify-center items-center my-4">
                    {/* <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>Experience our state-of-the-art tours that encompass a variety of activities like:</p> */}
                    <ReactTyped
                      className="uppercase md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                      strings={[
                        'Mercados',
                        'Caminatas entre Naturaleza y Ciudad',
                        'Historia',
                        'Inmersión Cultural',
                        'Cocina Local',
                        'Ceremonia del Té',
                        'Arte',
                        'Vida Nocturna',
                        'Aguas Termales',
                        'Tours Fotográficos',
                        'Paseos en Barco',
                        'Festivales y Eventos',
                        'Museos',
                      ]}
                      typeSpeed={50}
                      backSpeed={40}
                      loop
                    />
                  </div>
                  <p className="relative top-[65px] md:text-2xl text-xl mx-2 text-white">
                    Te recogeré en el lobby de tu hotel y te acompañaré en este
                    día completo de recorrido. Ser&aacute;s testigo de la
                    historia y belleza que ofrecen estas ciudades centenarias.{' '}
                  </p>
                  <button
                    id="book"
                    className="bg-white w-[200px] relative top-[90px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] uppercase"
                  >
                    <a href="https://api.whatsapp.com/send?phone=61406978776">
                      Agendar Ahora <i className="ri-whatsapp-fill"></i>
                    </a>
                  </button>
                </div>
              </div>

              <div className="w-full bg-white py-16 px-4">
                <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 ">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src={ImagePersonal}
                      className="w-4/5 items-stretch rounded-sm"
                      alt="/"
                    />
                    <p className="text-xs">Paseo por Kiyomizudera</p>
                  </div>

                  <div className="flex flex-col justify-center items-center">
                    <p className="text-[#00df9a] uppercase font-bold">
                      ¿Por que agendar conmigo?
                    </p>
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase">
                      Porque vivo, como, trabajo y duermo aquí
                    </h1>
                    <p className="text-justify">
                      Vivir como residente en Japón, con una familia local, me
                      ha permitido entender la cultura y la comunidad local de
                      una manera más profunda. Como un viajero entusiasta desde
                      2018, cuando me fui por primera vez a Australia, me di
                      cuenta de lo emocionante y, a veces, difícil que puede ser
                      explorar lo desconocido.
                      <br />
                      <br />
                      Más tarde, cuando llegué por primera vez a Japón, no
                      habría podido explorar nada si no fuera por la ayuda de mi
                      esposa, una ciudadana japonesa.
                      <br />
                      <br />
                      Después de un tiempo explorando ida y vuelta cada ciudad,
                      adquirí la confianza para moverme por sin siquiera
                      entender el idioma local. Ahora, con una base sólida del
                      idioma y con varios tesoros y lugares ocultos listos para
                      mostrarte, con gusto te llevaré por todo lo que alguna vez
                      me mostraron y más. No serás un turista conmigo, sino un
                      viajero.
                    </p>
                  </div>

                  <div className="flex flex-col justify-center items-center md:m">
                    <img
                      src={ImagePersonal2}
                      className="w-4/5 items-stretch rounded-sm"
                      alt="/"
                    />
                    <p className="text-xs">Callejones en Kyoto</p>
                  </div>

                  {/* <button className='bg-[#000300] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] md:mx-0'>Get Started</button> */}
                </div>
              </div>

              <div className="max-w-[800px] w-full mx-auto py-6 text-center flex flex-col justify-center">
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                  <span className="w-full text-3xl font-bold text-[#FFF]">
                    TOURES
                  </span>
                  ANTERIORES
                </h1>
              </div>
              <>
                <div>
                  <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nara Park, Nara
                        </div>
                      </div>
                      <img src={image17} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image28} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tennoji, Osaka
                        </div>
                      </div>
                      <img src={image8} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kitahama, Osaka
                        </div>
                      </div>
                      <img src={image36} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Shinsekai, Osaka
                        </div>
                      </div>
                      <img src={image54} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tsutenkaku Tower, Shinsekai
                        </div>
                      </div>
                      <img src={image51} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tenryu-ji, Arashiyama
                        </div>
                      </div>
                      <img src={image72} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Tea Ceremony, Uji
                        </div>
                      </div>
                      <img src={image13} alt="" />
                    </div>
                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto
                        </div>
                      </div>
                      <img src={image31} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image39} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          OSaka local Izakaya
                        </div>
                      </div>
                      <img src={image37} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kiyomizudera, Kyoto
                        </div>
                      </div>
                      <img src={image71} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kinkakuji, Kyoto
                        </div>
                      </div>
                      <img src={image4} alt="" />
                    </div>
                    {/*  */}
                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kuromon Markets, Osaka
                        </div>
                      </div>
                      <img src={image53} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Todai-ji, Nara
                        </div>
                      </div>
                      <img src={image15} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Yasaka Shrine, Kyoto
                        </div>
                      </div>
                      <img src={image21} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Dotonbori, Osaka
                        </div>
                      </div>
                      <img src={image70} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto Station
                        </div>
                      </div>
                      <img src={image19} alt="" />
                    </div>

                    {/*  */}

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Fushimi Inari, Kyoto
                        </div>
                      </div>
                      <img src={image24} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Shinsekai, Osaka
                        </div>
                      </div>
                      <img src={image55} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image57} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Byodoin, Uji
                        </div>
                      </div>
                      <img src={image12} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Arashiyama
                        </div>
                      </div>
                      <img src={image29} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō Castle, Kyoto
                        </div>
                      </div>
                      <img src={image50} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Togetsukyo Bridge, Arashiyama
                        </div>
                      </div>
                      <img src={image1} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image28} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Asahi Beer Museum, Osaka
                        </div>
                      </div>
                      <img src={image49} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Hankyu Arashiyama Sta, Kyoto
                        </div>
                      </div>
                      <img src={image30} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kiyomizu-michi, Kyoto
                        </div>
                      </div>
                      <img src={image7} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Bamboo Forest, Arashiyama
                        </div>
                      </div>
                      <img src={image73} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Mount Inari, Kyoto
                        </div>
                      </div>
                      <img src={image74} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Fushimi Inari, Kyoto
                        </div>
                      </div>
                      <img src={image23} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō Gardens, Kyoto
                        </div>
                      </div>
                      <img src={image25} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Kyoto
                        </div>
                      </div>
                      <img src={image10} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Dotonbori, Osaka
                        </div>
                      </div>
                      <img src={image32} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Umeda, Osaka
                        </div>
                      </div>
                      <img src={image33} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Station
                        </div>
                      </div>
                      <img src={image34} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Twin Towers
                        </div>
                      </div>
                      <img src={image35} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nara Express Service
                        </div>
                      </div>
                      <img src={image18} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Nijō castle, Kyoto
                        </div>
                      </div>
                      <img src={image26} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Yasaka Shrine, Osaka
                        </div>
                      </div>
                      <img src={image38} alt="" />
                    </div>

                    <div className="relative">
                      <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                        <div className="absolute inset-0 bg-black opacity-70"></div>
                        <div className="mx-auto text-white z-0 self-center uppercase">
                          Osaka Castle
                        </div>
                      </div>
                      <img src={image41} alt="" />
                    </div>

                    {/*  */}
                  </div>

                  {/* <div className='w-full text-white bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'> */}
                  {/* <div className='lg:cols-span-2 my-4'>
          <h1 className='md:text-4xl text-[#00df9a] sm:text-4xl text-2xl font-bold py-2'>Would like more information?</h1>
          
        </div> */}
                  <div className="my-4">
                    <div className="flex flex-col sm:flex items-center justify-between w-full">
                      <button
                        id="book"
                        className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase"
                      >
                        <a href="https://api.whatsapp.com/send?phone=61406978776">
                          Consulta Aquí <i className="ri-whatsapp-fill"></i>
                        </a>
                      </button>
                    </div>
                  </div>

                  {/* </div>
    </div> */}
                </div>
              </>
              <>
                <div className="max-w-[1240px] mx-auto pt-4 pb-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                  <div>
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                      EXPERIENCIA PERSONALIZADA
                    </h1>
                    <p className="py-4">
                      Cada tour es único, y nunca sigo una misma ruta
                      estandarizada. Con incontables kilómetros de exploración a
                      mis espaldas, desarrollaremos una ruta personalizada en
                      conjunto que incluya todos los elementos imprescindibles.
                      Si hay algo específico que te gustaría añadir, lo
                      incluiremos fácilmente en la ruta. Solo házme saber tus
                      preferencias, y juntos crearemos la experiencia
                      definitiva.
                    </p>
                  </div>
                </div>

                <div className="w-full mx-auto mb-6 text-center flex flex-col justify-center">
                  <p className="w-full text-xs font-bold text-[#00df9a]">
                    <span className="w-full text-xs font-bold text-[#FFF]">
                      KANSAI
                    </span>
                    TOURS
                    <span className="w-full text-xs font-bold text-[#FFF]">
                      2024
                    </span>
                    &copy;
                  </p>
                </div>
              </>
            </>
          </div>
        ) : (
          <div className="hidden">
            {/* <div>
              <div className="block">
                <>
                  <div
                    style={{
                      backgroundImage: `url(${background})`,
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                    className="text-white"
                  >
                    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
                      <p className="text-[#00df9a] font-bold p-2">
                        VIAJA Y EXPLOREMOS JUNTOS
                      </p>
                      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
                        TOURES GUIADOS EN{' '}
                        <span className="w-full text-3xl font-bold text-[#00df9a]">
                          KYOTO
                        </span>{' '}
                        Y{' '}
                        <span className="w-full text-3xl font-bold text-[#00df9a]">
                          OSAKA
                        </span>
                      </h1>
                      <div className="flex justify-center items-center my-4">
                       
                        <ReactTyped
                          className="uppercase md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
                          strings={[
                            'Mercados',
                            'Caminatas entre Naturaleza y Ciudad',
                            'Historia',
                            'Inmersión Cultural',
                            'Degustación de Cocina Local',
                            'Ceremonia del Té',
                            'Arte',
                            'Vida Nocturna',
                            'Aguas Termales',
                            'Tours Fotográficos',
                            'Paseos en Barco',
                            'Festivales y Eventos',
                            'Museos',
                          ]}
                          typeSpeed={50}
                          backSpeed={40}
                          loop
                        />
                      </div>
                      <p className="relative top-[65px] md:text-2xl text-xl mx-2 text-white">
                        Te recogeré en el lobby de tu hotel y te acompañaré en
                        este día completo de recorrido. Ser&aacute;s testigo de
                        la historia y belleza que ofrecen estas ciudades
                        centenarias.{' '}
                      </p>
                      <button
                        id="book"
                        className="bg-white w-[200px] relative top-[90px] rounded-md font-medium my-6 mx-auto py-3 text-[#00df9a] uppercase"
                      >
                        <a href="https://api.whatsapp.com/send?phone=61406978776">
                          Agendar Ahora <i className="ri-whatsapp-fill"></i>
                        </a>
                      </button>
                    </div>
                  </div>

                  <div className="w-full bg-white py-16 px-4">
                    <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-4 ">
                      <div className="flex flex-col justify-center items-center">
                        <img
                          src={ImagePersonal}
                          className="w-4/5 items-stretch rounded-sm"
                          alt="/"
                        />
                        <p className="text-xs">Paseo por Kiyomizudera</p>
                      </div>

                      <div className="flex flex-col justify-center items-center">
                        <p className="text-[#00df9a] uppercase font-bold">
                          ¿Por que agendar conmigo?
                        </p>
                        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2 uppercase">
                          Porque vivo, como, trabajo y duermo aquí
                        </h1>
                        <p className="text-justify">
                          Vivir como residente en Japón con una familia local me
                          ha permitido entender la cultura y la comunidad local
                          de una manera más profunda. Como un viajero entusiasta
                          desde 2018, cuando me mudé por primera vez a
                          Australia, me di cuenta de lo emocionante y, a veces,
                          difícil que puede ser explorar lo desconocido.
                          <br />
                          <br />
                          Más tarde, cuando llegué por primera vez a Japón, no
                          habría podido explorar nada si no fuera por la ayuda
                          de mi esposa, una ciudadana japonesa.
                          <br />
                          <br />
                          Después de algún tiempo explorando de ida y vuelta,
                          adquirí la confianza para moverme por las ciudades sin
                          siquiera entender el idioma local. Ahora, con una base
                          sólida en el idioma japonés y con varios tesoros y
                          lugares ocultos listos para mostrarte, con gusto te
                          mostraré todo lo que una vez me mostraron y más. No
                          serás un turista conmigo, sino un viajero.
                        </p>
                      </div>

                      <div className="flex flex-col justify-center items-center md:m">
                        <img
                          src={ImagePersonal2}
                          className="w-4/5 items-stretch rounded-sm"
                          alt="/"
                        />
                        <p className="text-xs">Callejones en Kyoto</p>
                      </div>

                      
                    </div>
                  </div>

                  <div className="max-w-[800px] w-full mx-auto py-6 text-center flex flex-col justify-center">
                    <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                      <span className="w-full text-3xl font-bold text-[#FFF]">
                        TOURES
                      </span>
                      ANTERIORES
                    </h1>
                  </div>
                  <>
                    <div>
                      <div className="grid grid-cols-2 gap-1 md:grid-cols-3">
                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Shinsekai
                            </div>
                          </div>
                          <img src={image1} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Castillo de Osaka
                            </div>
                          </div>
                          <img src={image3} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Taberna Tradicional
                            </div>
                          </div>
                          <img src={image4} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Distrito Hankyu
                            </div>
                          </div>
                          <img src={image6} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Puente de Dotonbori
                            </div>
                          </div>
                          <img src={image11} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Senmontori en Kyoto
                            </div>
                          </div>
                          <img src={image5} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Torre de Tsutenkaku
                            </div>
                          </div>
                          <img src={image2} alt="" />
                        </div>

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Castillo de Osaka
                            </div>
                          </div>
                          <img src={image7} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Shinsekai con lluvia
                            </div>
                          </div>
                          <img src={image8} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Paseo en Kyoto
                            </div>
                          </div>
                          <img src={image9} alt="" />
                        </div>

                        

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Dotonbori
                            </div>
                          </div>
                          <img src={image12} alt="" />
                        </div>

                        <div className="relative">
                          <div className="absolute inset-0 z-0 flex transition duration-200 ease-in hover:opacity-0">
                            <div className="absolute inset-0 bg-black opacity-70"></div>
                            <div className="mx-auto text-white z-0 self-center uppercase">
                              Castillo Nijo en Kyoto
                            </div>
                          </div>
                          <img src={image10} alt="" />
                        </div>

                        
                      </div>

                      
                      <div className="my-4">
                        <div className="flex flex-col sm:flex items-center justify-between w-full">
                          <button
                            id="book"
                            className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white uppercase"
                          >
                            <a href="https://api.whatsapp.com/send?phone=61406978776">
                              Consulta Aquí <i className="ri-whatsapp-fill"></i>
                            </a>
                          </button>
                        </div>
                      </div>

                      
                    </div>
                  </>
                  <>
                    <div className="max-w-[1240px] mx-auto pt-4 pb-4 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
                      <div>
                        <h1 className="w-full text-3xl font-bold text-[#00df9a]">
                          EXPERIENCIA PERSONALIZADA
                        </h1>
                        <p className="py-4">
                          Cada tour es único, y nunca sigo una misma ruta
                          estandarizada. Con incontables kilómetros de
                          exploración a mis espaldas, desarrollaremos una ruta
                          personalizada en conjunto que incluya todos los
                          elementos imprescindibles. Si hay algo específico que
                          te gustaría añadir, lo incluiremos fácilmente en
                          nuestro tour de un día. Solo házme saber tus
                          preferencias, y juntos crearemos la experiencia
                          definitiva.
                        </p>
                      </div>
                    </div>

                    <div className="w-full mx-auto mb-6 text-center flex flex-col justify-center">
                      <p className="w-full text-xs font-bold text-[#00df9a]">
                        <span className="w-full text-xs font-bold text-[#FFF]">
                          KANSAI
                        </span>
                        TOURS
                        <span className="w-full text-xs font-bold text-[#FFF]">
                          2024
                        </span>
                        &copy;
                      </p>
                    </div>
                  </>
                </>
              </div>
            </div> */}
          </div>
        )}
      </>
      {/* spanish */}
    </>
  );
}

export default App;
