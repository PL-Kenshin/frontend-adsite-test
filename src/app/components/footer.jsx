import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative flex justify-between items-center bg-neutral-800 text-white border-t border-white py-6 px-10">
            <div className='font-semibold px-10'>Cars Spot</div>
            <Link href="/" className='underline px-10 hover:no-underline'>Polityka prywatności</Link>
        </footer>
    )
}

export default Footer;