'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';

export default function NewsFeed() {
  const sectionRef = useRef(null);
  
  // Sample articles data
  const articles = [
    {
      id: 1,
      title: 'Fish cookies: an unexpectedly tasty treat',
      excerpt: 'A revolutionary approach to sustainable fishing by-products is creating new business opportunities for youth in coastal communities.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/05/RS24334_IMG_1541-web-2100x1050.jpg.webp',
      location: 'Kenya',
      categories: ['Boost youth employment', 'Increase food security and nutrition', 'Increase incomes'],
      link: '/story/fish-cookies'
    },
    {
      id: 2,
      title: 'Farm Africa returns as charity partner at the London Coffee Festival',
      excerpt: 'Supporting coffee farmers across eastern Africa to improve their production techniques and access premium markets.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/05/2025-scaled-e1747306360537-2100x1243.jpg',
      location: 'Ethiopia',
      categories: ['Increase incomes', 'Building markets'],
      link: '/farm-africa-returns-as-charity-partner'
    },
    {
      id: 3,
      title: 'Empowering women through sustainable agriculture',
      excerpt: 'New program launches to support women-led farming initiatives, providing training, resources, and market access.',
      image: 'https://www.farmafrica.org/wp-content/uploads/2025/01/Minette-Batters-and-Juliet-Muthoni-Farm-Africa-Kenya-2100x1127.jpg.webp',
      location: 'Tanzania',
      categories: ['Gender equality', 'Sustainable farming', 'Increase incomes'],
      link: '/story/empowering-women-farmers'
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="bg-[#F4720B] relative overflow-hidden py-16 md:py-20"
    >
      {/* Decorative leaf patterns */}
      <div className="absolute top-[30px] right-0 w-64 h-64 md:w-96 md:h-96">
      <svg width="236" height="198" viewBox="0 0 236 198" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M125.301 92.383L119.938 97.2154L98.6215 99.1854L85.7322 101.112L85.3021 99.9714L98.295 77.9576L109.524 73.4534L125.919 73.4645L132.9 72.6527L138.31 69.3444L139.421 69.1137L139.178 76.3582L144.06 87.5413C146.433 91.7188 150.574 99.5378 150.574 99.5378L150.897 109.004L144.207 120.34L137.516 131.676L136.695 130.452L124.042 102.002L125.301 92.383Z" fill="#4CB9D1"></path>
<path d="M105.758 42.6917L104.334 36.3047L112.28 18.5991L116.504 7.56585L117.596 7.73467L129.182 27.8029L127.733 38.6743L120.417 51.6116L117.946 57.484L118.146 63.2294L117.833 64.2095L112.223 60.7883L101.219 59.6581C96.8636 59.6694 88.8459 59.453 88.8459 59.453L81.229 55.4889L75.2627 45.155L69.2965 34.8212L70.6283 34.7183L98.7262 37.411L105.758 42.6917Z" fill="#F6CE40"></path>
<path d="M207.452 121.202L211.404 118.377L225.81 118.673L234.575 118.36L234.777 119.155L224.421 132.894L216.571 135.056L205.607 133.808L200.877 133.822L197.008 135.625L196.248 135.695L196.959 130.869L194.54 123.02C193.269 120.047 191.092 114.505 191.092 114.505L191.593 108.149L196.925 101.075L202.257 94.0003L202.714 94.8807L209.022 114.865L207.452 121.202Z" fill="#C7ED9F"></path>
<path d="M27.9106 148.597L42.227 154.949L47.9001 157.084L53.5733 159.219L64.6322 162.165L77.2537 163.065L82.4729 161.748L99.6032 149.255L110.552 136.533L119.096 125.804L118.636 123.982L105.935 118.238L90.3179 112.456L82.3898 110.294L69.2926 109.513L64.0735 110.83L51.2724 119.167L36.2444 135.432L27.4508 146.774L27.9106 148.597Z" fill="#F47E28"></path>
<path d="M173.962 96.2647L184.789 84.9468L188.719 80.3324L192.65 75.7179L199.168 66.3108L204.291 54.7407L204.82 49.3841L198.869 29.0343L190.608 14.4234L183.407 2.75001L181.537 2.5653L171.83 12.5689L161.1 25.3042L156.38 32.031L151.208 44.0893L150.679 49.4459L154.186 64.3143L164.398 83.9638L172.092 96.08L173.962 96.2647Z" fill="#F2EBD9"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M125.344 155.635L139.927 165.553L147.786 167.327L162.87 159.453L165.956 157.121L163.537 160.188L157.506 169.622L155.731 177.703L163.367 192.61L168.171 197.715L174.048 189.898L178.089 183.132L179.863 175.272L171.989 160.188L169.712 157.176L172.725 159.453L187.809 167.327L190.24 167.327L200.186 163.061L210.252 155.635L210.252 154.794L205.147 150.831L196.768 145.413L187.809 143.195L182.159 144.97L169.271 153.87L176.314 144.132L179.863 135.249L179.863 132.818L178.089 127.39L168.171 112.807L167.33 112.807L163.367 117.912L155.731 132.818L157.506 140.899L163.537 150.333L166.026 153.49L162.87 151.001L156.669 146.778L147.786 143.195L145.355 143.195L138.827 145.413L125.344 154.794L125.344 155.635Z" fill="#4BAE44"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.61736 70.8046L18.3934 81.8165L24.3926 84.861L38.2141 81.5729L41.1906 80.3159L38.6031 82.305L31.7909 88.7081L28.7011 94.8866L31.832 108.516L34.677 113.631L41.0337 108.506L45.6888 103.855L48.7333 97.8559L45.4452 84.0344L44.2183 81.1291L46.1918 83.5893L56.7911 93.0498L58.7592 93.5472L67.6833 92.1291L77.3507 88.1771L77.5229 87.4957L74.2015 83.2433L68.527 77.1435L61.7286 73.5151L56.792 73.7955L44.5391 78.3626L52.2319 71.9221L56.9221 65.4574L57.4196 63.4893L57.0938 58.7321L52.0494 44.8979L51.368 44.7256L47.1157 48.0471L37.8848 58.5518L37.6678 65.4565L40.6195 74.3274L41.9887 77.3913L39.9435 74.7308L35.7878 70.0437L29.33 65.3263L27.3619 64.8288L21.6239 65.2887L8.7896 70.1232L8.61736 70.8046Z" fill="#4BAE44"></path>
</svg>
      </div>
      <div className="absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96">
      <svg width="236" height="198" viewBox="0 0 236 198" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M125.301 92.383L119.938 97.2154L98.6215 99.1854L85.7322 101.112L85.3021 99.9714L98.295 77.9576L109.524 73.4534L125.919 73.4645L132.9 72.6527L138.31 69.3444L139.421 69.1137L139.178 76.3582L144.06 87.5413C146.433 91.7188 150.574 99.5378 150.574 99.5378L150.897 109.004L144.207 120.34L137.516 131.676L136.695 130.452L124.042 102.002L125.301 92.383Z" fill="#4CB9D1"></path>
<path d="M105.758 42.6917L104.334 36.3047L112.28 18.5991L116.504 7.56585L117.596 7.73467L129.182 27.8029L127.733 38.6743L120.417 51.6116L117.946 57.484L118.146 63.2294L117.833 64.2095L112.223 60.7883L101.219 59.6581C96.8636 59.6694 88.8459 59.453 88.8459 59.453L81.229 55.4889L75.2627 45.155L69.2965 34.8212L70.6283 34.7183L98.7262 37.411L105.758 42.6917Z" fill="#F6CE40"></path>
<path d="M207.452 121.202L211.404 118.377L225.81 118.673L234.575 118.36L234.777 119.155L224.421 132.894L216.571 135.056L205.607 133.808L200.877 133.822L197.008 135.625L196.248 135.695L196.959 130.869L194.54 123.02C193.269 120.047 191.092 114.505 191.092 114.505L191.593 108.149L196.925 101.075L202.257 94.0003L202.714 94.8807L209.022 114.865L207.452 121.202Z" fill="#C7ED9F"></path>
<path d="M27.9106 148.597L42.227 154.949L47.9001 157.084L53.5733 159.219L64.6322 162.165L77.2537 163.065L82.4729 161.748L99.6032 149.255L110.552 136.533L119.096 125.804L118.636 123.982L105.935 118.238L90.3179 112.456L82.3898 110.294L69.2926 109.513L64.0735 110.83L51.2724 119.167L36.2444 135.432L27.4508 146.774L27.9106 148.597Z" fill="#F47E28"></path>
<path d="M173.962 96.2647L184.789 84.9468L188.719 80.3324L192.65 75.7179L199.168 66.3108L204.291 54.7407L204.82 49.3841L198.869 29.0343L190.608 14.4234L183.407 2.75001L181.537 2.5653L171.83 12.5689L161.1 25.3042L156.38 32.031L151.208 44.0893L150.679 49.4459L154.186 64.3143L164.398 83.9638L172.092 96.08L173.962 96.2647Z" fill="#F2EBD9"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M125.344 155.635L139.927 165.553L147.786 167.327L162.87 159.453L165.956 157.121L163.537 160.188L157.506 169.622L155.731 177.703L163.367 192.61L168.171 197.715L174.048 189.898L178.089 183.132L179.863 175.272L171.989 160.188L169.712 157.176L172.725 159.453L187.809 167.327L190.24 167.327L200.186 163.061L210.252 155.635L210.252 154.794L205.147 150.831L196.768 145.413L187.809 143.195L182.159 144.97L169.271 153.87L176.314 144.132L179.863 135.249L179.863 132.818L178.089 127.39L168.171 112.807L167.33 112.807L163.367 117.912L155.731 132.818L157.506 140.899L163.537 150.333L166.026 153.49L162.87 151.001L156.669 146.778L147.786 143.195L145.355 143.195L138.827 145.413L125.344 154.794L125.344 155.635Z" fill="#4BAE44"></path>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.61736 70.8046L18.3934 81.8165L24.3926 84.861L38.2141 81.5729L41.1906 80.3159L38.6031 82.305L31.7909 88.7081L28.7011 94.8866L31.832 108.516L34.677 113.631L41.0337 108.506L45.6888 103.855L48.7333 97.8559L45.4452 84.0344L44.2183 81.1291L46.1918 83.5893L56.7911 93.0498L58.7592 93.5472L67.6833 92.1291L77.3507 88.1771L77.5229 87.4957L74.2015 83.2433L68.527 77.1435L61.7286 73.5151L56.792 73.7955L44.5391 78.3626L52.2319 71.9221L56.9221 65.4574L57.4196 63.4893L57.0938 58.7321L52.0494 44.8979L51.368 44.7256L47.1157 48.0471L37.8848 58.5518L37.6678 65.4565L40.6195 74.3274L41.9887 77.3913L39.9435 74.7308L35.7878 70.0437L29.33 65.3263L27.3619 64.8288L21.6239 65.2887L8.7896 70.1232L8.61736 70.8046Z" fill="#4BAE44"></path>
</svg>
      </div>
      
      {/* Colorful SVG decoration */}
      {/* <div className="absolute bottom-0 right-0 w-48 h-48 md:w-64 md:h-64">
        <svg width="100%" height="100%" viewBox="0 0 236 198" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M125.301 92.383L119.938 97.2154L98.6215 99.1854L85.7322 101.112L85.3021 99.9714L98.295 77.9576L109.524 73.4534L125.919 73.4645L132.9 72.6527L138.31 69.3444L139.421 69.1137L139.178 76.3582L144.06 87.5413C146.433 91.7188 150.574 99.5378 150.574 99.5378L150.897 109.004L144.207 120.34L137.516 131.676L136.695 130.452L124.042 102.002L125.301 92.383Z" fill="#4CB9D1"></path>
          <path d="M105.758 42.6917L104.334 36.3047L112.28 18.5991L116.504 7.56585L117.596 7.73467L129.182 27.8029L127.733 38.6743L120.417 51.6116L117.946 57.484L118.146 63.2294L117.833 64.2095L112.223 60.7883L101.219 59.6581C96.8636 59.6694 88.8459 59.453 88.8459 59.453L81.229 55.4889L75.2627 45.155L69.2965 34.8212L70.6283 34.7183L98.7262 37.411L105.758 42.6917Z" fill="#F6CE40"></path>
          <path d="M207.452 121.202L211.404 118.377L225.81 118.673L234.575 118.36L234.777 119.155L224.421 132.894L216.571 135.056L205.607 133.808L200.877 133.822L197.008 135.625L196.248 135.695L196.959 130.869L194.54 123.02C193.269 120.047 191.092 114.505 191.092 114.505L191.593 108.149L196.925 101.075L202.257 94.0003L202.714 94.8807L209.022 114.865L207.452 121.202Z" fill="#C7ED9F"></path>
          <path d="M27.9106 148.597L42.227 154.949L47.9001 157.084L53.5733 159.219L64.6322 162.165L77.2537 163.065L82.4729 161.748L99.6032 149.255L110.552 136.533L119.096 125.804L118.636 123.982L105.935 118.238L90.3179 112.456L82.3898 110.294L69.2926 109.513L64.0735 110.83L51.2724 119.167L36.2444 135.432L27.4508 146.774L27.9106 148.597Z" fill="#F47E28"></path>
          <path d="M173.962 96.2647L184.789 84.9468L188.719 80.3324L192.65 75.7179L199.168 66.3108L204.291 54.7407L204.82 49.3841L198.869 29.0343L190.608 14.4234L183.407 2.75001L181.537 2.5653L171.83 12.5689L161.1 25.3042L156.38 32.031L151.208 44.0893L150.679 49.4459L154.186 64.3143L164.398 83.9638L172.092 96.08L173.962 96.2647Z" fill="#F2EBD9"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M125.344 155.635L139.927 165.553L147.786 167.327L162.87 159.453L165.956 157.121L163.537 160.188L157.506 169.622L155.731 177.703L163.367 192.61L168.171 197.715L174.048 189.898L178.089 183.132L179.863 175.272L171.989 160.188L169.712 157.176L172.725 159.453L187.809 167.327L190.24 167.327L200.186 163.061L210.252 155.635L210.252 154.794L205.147 150.831L196.768 145.413L187.809 143.195L182.159 144.97L169.271 153.87L176.314 144.132L179.863 135.249L179.863 132.818L178.089 127.39L168.171 112.807L167.33 112.807L163.367 117.912L155.731 132.818L157.506 140.899L163.537 150.333L166.026 153.49L162.87 151.001L156.669 146.778L147.786 143.195L145.355 143.195L138.827 145.413L125.344 154.794L125.344 155.635Z" fill="#4BAE44"></path>
          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.61736 70.8046L18.3934 81.8165L24.3926 84.861L38.2141 81.5729L41.1906 80.3159L38.6031 82.305L31.7909 88.7081L28.7011 94.8866L31.832 108.516L34.677 113.631L41.0337 108.506L45.6888 103.855L48.7333 97.8559L45.4452 84.0344L44.2183 81.1291L46.1918 83.5893L56.7911 93.0498L58.7592 93.5472L67.6833 92.1291L77.3507 88.1771L77.5229 87.4957L74.2015 83.2433L68.527 77.1435L61.7286 73.5151L56.792 73.7955L44.5391 78.3626L52.2319 71.9221L56.9221 65.4574L57.4196 63.4893L57.0938 58.7321L52.0494 44.8979L51.368 44.7256L47.1157 48.0471L37.8848 58.5518L37.6678 65.4565L40.6195 74.3274L41.9887 77.3913L39.9435 74.7308L35.7878 70.0437L29.33 65.3263L27.3619 64.8288L21.6239 65.2887L8.7896 70.1232L8.61736 70.8046Z" fill="#4BAE44"></path>
        </svg>
      </div> */}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Header section */}
        <div className="mb-20 max-w-3xl">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-10">
            Latest from Farm Africa
          </h2>
          <Link
            href="/news"
            className="inline-block bg-[#F49541] hover:bg-[#E68530] text-white font-medium px-8 py-4 rounded-md transition-colors"
          >
            Browse more articles
          </Link>
        </div>
        
        {/* Articles - Alternating right/left layout */}
        <div className="space-y-20 md:space-y-32">
          {/* Article 1 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Empty column for right-side layout */}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src={articles[0].image}
                  alt={articles[0].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-lg">Stories from our work</span>
                    <div className="flex items-center">
                      <div className="bg-green-500 rounded-full p-1">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <span className="ml-2 text-white">{articles[0].location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-8">{articles[0].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[0].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#262626]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Article 2 - Left side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="relative">
                <Image
                  src={articles[1].image}
                  alt={articles[1].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 p-4 bg-black/20 rounded-bl-md">
                  <span className="text-white text-sm font-medium">News</span>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-4">{articles[1].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[1].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#262626]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              {/* Empty column for left-side layout */}
            </div>
          </div>
          
          {/* Article 3 - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="order-2 md:order-1">
              {/* Empty column for right-side layout */}
            </div>
            <div className="order-1 md:order-2">
              <div className="relative">
                <Image
                  src={articles[2].image}
                  alt={articles[2].title}
                  width={800}
                  height={500}
                  className="w-full rounded-md overflow-hidden"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white text-lg">Stories from our work</span>
                    <div className="flex items-center">
                      <div className="bg-green-500 rounded-full p-1">
                        <FaMapMarkerAlt className="text-white" />
                      </div>
                      <span className="ml-2 text-white">{articles[2].location}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-4xl font-bold text-white mt-6 mb-8">{articles[2].title}</h3>
              
              <div className="space-y-3 mb-6">
                {articles[2].categories.map((category, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                      <div className="w-4 h-4 rounded-full bg-[#262626]"></div>
                    </div>
                    <span className="ml-3 text-white">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}