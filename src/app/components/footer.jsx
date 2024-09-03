import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex justify-around bg-neutral-800 text-white border-t border-white py-6">
            <div className='font-semibold'>Cars Spot</div>
            <Link href="/" className='underline'>Polityka prywatności</Link>
        </footer>
    )
}

export default Footer;