'use client'
import {Button} from "@nextui-org/react";
import {MdKeyboardDoubleArrowRight} from "react-icons/md";
import {motion} from "framer-motion";
import {Poppins} from "next/font/google";
import {useEffect} from "react";
import i18n from "@/i18n";
import {useTranslation} from "react-i18next";

const poppinsBold = Poppins({
    weight: '600', subsets: ['latin'],
})


const ButtonContact = () => {
    useEffect(() => {
        i18n.init(); // Inicializa i18next
    }, []);

    const { t } = useTranslation('footer'); // Utiliza useTranslation
    return (
        <motion.a href="/contact" whileHover={{scale: 1.09}}>
            <Button size={'lg'}
                    className={`${poppinsBold.className} justify-between md:text-[1rem] text-[0.7rem] w-[auto] md:h-[10vh] h-[10vh]  bg-[#111111] text-white`}
                    radius={"full"} endContent={<MdKeyboardDoubleArrowRight
                className={`GetInTouchButton font-bold justify-between text-xl md:w-[5vw] h-[5hv]`}/>}>{t('get_in_touch_message')}</Button></motion.a>

    )
}
export default ButtonContact