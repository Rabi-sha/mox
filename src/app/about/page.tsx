import React from 'react'
import Image from 'next/image'
const page = () => {
    return (
        <div><figure className="bg-orange-200 rounded-xl p-8 dark:bg-slate-800">
        <Image className="w-24 h-24 rounded-full mx-auto" src="/rabia.png" alt="" width="384" height="512"/>
        <div className="pt-6 space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
            My course focuses on:

Developing AI models to generate text images music videos and software
Mastering machine learning and deep learning techniques
Exploring ethical implications and future possibilities of AIg enerated content

My objectives are

Enhancing creative industries with AI driven innovation
Developing AI solutions for real world problems
Contributing to AI research and development

            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-green-400">
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