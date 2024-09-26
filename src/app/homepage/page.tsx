import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-purple-100 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/home.png" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            Harnessing the power of artificial intelligence we generate 
            innovative content solutions for industries and individuals. 
            Our expertise lies in AI-powered content creation data analysis
             and visualization tailored to marketing education and
              entertainment.

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