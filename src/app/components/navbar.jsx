import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='text-black'>
                <div className='flex justify-evenly items-center py-4'>
                    <div className='flex w-1/2 justify-center'>
                        <Link href="/"><img src=""/>CarsSpot</Link>
                    </div>
                    <div className='flex w-1/4 justify-center'>
                        <Link href="/" className='mx-2'>Galeria zdjęć</Link>
                        <Link href="/" className='mx-2'>FaQ</Link>
                    </div>
                    <div className='flex w-1/2 justify-center'>
                        <button className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800'>Zadzwoń do nas</button>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;