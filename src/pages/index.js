import AnimatedText from "@/components/AnimatedText";
import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Portfolio XdriiM</title>
        <meta
          name="description"
          content="Check the portfolio of XdriiM, a web app developer who starts his aventure now"
        />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-center md:flex-col">
            {/* <div className="w-1/4 lg:hidden md:inline-block md:w-full">
              <Image
                src={profilePic}
                alt="XdriiM"
                className="h-auto w-full"
                sizes="100vw"
                priority
              />
            </div> */}
            <div className="flex w-3/4 flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Adrià Vallejo Proaño"
                className="!text-left !text-6xl xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
              Passionate web developer with a keen interest in programming, currently delving into Artificial Intelligence and Big Data studies. Striving to create innovative and scalable technological solutions that drive positive impact in the digital era.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  // whileHover={{
                  //   cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='font-size:24px;'><text y='50%'>👆</text></svg>"), auto`,
                  // }}
                  href="/CV_Vallejo Proaño, Adria_DAW.pdf"
                  target={"_blank"}
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
            capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark 
            dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
            md:p-2 md:px-4 md:text-base
             `}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:adriivallejo11@gmail.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        {/* <HireMe /> */}
      </article>
    </>
  );
}
