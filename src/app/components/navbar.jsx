import { Disclosure, DisclosureButton, DisclosurePanel, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link';

const Navbar = () => {

    const navigation = [
        { name: 'Home', href: '#', current: true },
        { name: 'Galeria zdjęć', href: '#', current: false },
        { name: 'FaQ', href: '#', current: false },
        { name: 'Kontakt', href: '#', current: false },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return (
        <Disclosure as="nav" className='container px-1 sm:px-4 sm:mx-auto text-black'>
            <div className='flex justify-between sm:justify-evenly items-center py-4'>
                <div className='flex sm:w-1/2 justify-start'>
                    <Link href="/"><img src="/logo.png" /></Link>
                </div>
                <div className='hidden sm:flex w-1/4 justify-center'>
                    <Link href="/" className='mx-2'>Galeria zdjęć</Link>
                    <Link href="/" className='mx-2'>FaQ</Link>
                </div>
                <div className='hidden sm:flex w-1/2 justify-end'>
                    <button className='px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700'>Zadzwoń do nas</button>
                </div>
                <DisclosureButton className="sm:hidden group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                    <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                </DisclosureButton>
            </div>
            <DisclosurePanel className="sm:hidden transition duration-300" transition>
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-black hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}

export default Navbar;