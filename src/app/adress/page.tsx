import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-blue-200 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/home.png" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            I live in RYK.

            Rahim Yar Khan RYK is a city located in the province of Punjab Pakistan. It is the capital of 
            Rahim Yar Khan District and is situated near the Indus River.

Rahim Yar Khan is a growing city with a rich history cultural
 significance and economic importance. The city boasts ancient
  sites like the Derawar Fort and the Sheikh Zayed Mosque showcasing its 
  historical value. Additionally Rahim Yar Khan hosts various festivals including
   the Rahim Yar Khan Mela and the Sufi Festival highlighting its cultural richness.

The city serves as a major agricultural hub producing cotton wheat and sugarcane. It is also
 home to several reputable universities and colleges making education a significant sector. Rahim Yar Khan is a 
 significant center for textile sugar and cement industries.



            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Rabia Waqar
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Student of AI, Rahim Yar Khan
            </div>
          </figcaption>
        </div>
      </figure></div>
    )
}

export default page