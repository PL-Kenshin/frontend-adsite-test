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
                        <button className='px-6 py-3 text-white bg-blue-600 rounded-md hover:bg-blue-700'>Zadzwoń do nas</button>
                    </div>
            </div>
        </nav>
    )
}

export default Navbar;