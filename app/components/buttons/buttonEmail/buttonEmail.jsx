'use client'
import {Button} from "@nextui-org/react";
import {motion} from "framer-motion";
import {Poppins} from "next/font/google";

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})

const ButtonEmail = () => {
    return (
        <motion.a href="mailto:lautivelez28@gmail.com" whileHover={{scale: 1.09}}>
            <Button size={'lg'}
                    className={` ${poppinsBold.className}   justify-between md:text-[0.9rem] text-[0.7rem] w-[auto] md:h-[10vh]  h-[10vh]  bg-[#171717] border border-white text-white`}
                    radius={"full"}>lautivelez28@gmail.com</Button></motion.a>
    )
}
export default ButtonEmail;