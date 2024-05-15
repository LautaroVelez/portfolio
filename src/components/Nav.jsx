import {Dialog, Popover} from '@headlessui/react'
import {
    Bars3Icon,
    XMarkIcon,
} from '@heroicons/react/24/outline'

import {useState,} from "react";
import Headroom from "react-headroom/src";


export default function Nav() {

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <Headroom>
            <header className="bg-white">
                <nav className="sticky mx-auto flex max-w-7xl  p-3 lg:px-8" aria-label="Global">
                    <div className="flex lg:hidden">
                        <button
                            type="button"
                            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(true)}
                        >
                            <Bars3Icon className="h-6 w-6" aria-hidden="true"/>
                        </button>
                    </div>


                    <div className="items-center justify-center mx-auto flex">
                        <Popover.Group className="hidden lg:flex lg:gap-x-12">
                            <a href="#" className=" font-bold leading-6 text-gray-900">
                                Home
                            </a>
                            <a href="#About" className="font-bold leading-6 text-gray-900">
                                About
                            </a>
                            <a href="#Projects" className="font-bold leading-6 text-gray-900">
                                Projects
                            </a><a href="#Contact" className="font-bold leading-6 text-gray-900">
                            Contact
                        </a>
                        </Popover.Group>
                    </div>
                </nav>

                <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                    <div className="fixed inset-0 z-10"/>
                    <Dialog.Panel
                        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center">

                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <XMarkIcon className="h-6 w-6" aria-hidden="true"/>
                            </button>

                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    <a
                                        href="#"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        Home
                                    </a>
                                    <a
                                        href="#About"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                        About
                                    </a>
                                    <a
                                        href="#Projects"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                       Projects
                                    </a>
                                    <a
                                        href="#Contact"
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                                    >
                                         Contact
                                    </a>
                                </div>

                            </div>
                        </div>
                    </Dialog.Panel>
                </Dialog>
            </header>
        </Headroom>
    )
}
