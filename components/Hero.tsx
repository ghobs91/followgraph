import Image from 'next/image'
import React from 'react'

export default function Hero({}) {
  return (
    <section className="dark-gray-bg">
      <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28 lg:px-20">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
            Discover awesome people <br /> in the Fediverse.
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            Find new people to follow by looking up your friends of friends. <br /> <br />
          </p>
        </div>
      </div>
    </section>
  )
}
