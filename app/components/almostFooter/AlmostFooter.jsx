import Image from "next/image";
import image from "@/public/images/image.png";
import ButtonContact from "@/app/components/buttons/buttonContact/buttonContact";
import ButtonEmail from "@/app/components/buttons/buttonEmail/buttonEmail";
import {Poppins, Roboto} from "next/font/google";

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})
const poppinsThin = Poppins({
    weight: '200', subsets: ['latin'],
})
const roboto = Roboto({
    weight: '900', subsets: ['latin'],
})

const AlmostFooter = () => {
  return (
      <div className={'md:flex flex-row w-full md:justify-between justify-center md:pt-20 pt-16 md:pb-28 pb-12'}>
          <div
              className={'md:w-[50vw] w-[full] text-white h-full flex items-center md:justify-end justify-center'}>
              <div className={'flex-row'}>
                  <div className={'flex items-center justify-center'}>
                      <div className={'justify-center items-center flex md:pr-5 pr-2'}>
                          <Image src={image} alt={'image'}
                                 className={'rounded-full md:h-auto md:w-[10vw] w-[16vw]'} priority/>
                      </div>
                      <div className={'w-full'}>
                          <h1 className={`${poppinsThin.className} md:text-[4rem] text-[3rem]`}>Let's work</h1>
                      </div>
                  </div>
                  <div>
                      <h1 className={`${poppinsThin.className} md:text-[4rem] text-[3rem]`}>togheter!</h1>
                  </div>
              </div>
          </div>
          <div className={'md:w-[50vw] w-[full] h-full items-center justify-center flex'}>
              <div className={'flex-row items-center h-full'}>
                  <div className={'w-full pt-5 justify-center flex'}>
                      <ButtonContact/>
                  </div>

                  <div className={'w-full pt-5 flex justify-center'}>
                      <ButtonEmail/>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default AlmostFooter;