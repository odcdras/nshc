import Link from 'next/link';
import NavLinks from '@/app/ui/homepage/header-nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';

export default function Header() {
  return (
    <div>
      <div className='flex h-full flex-row px-3 py-4 md:px-2'>
        <div className='logo'>
          <h2> NSHC</h2>
        </div>
        <div className='menu'>
          <nav>
            <ul className='flex w-[90%] justify-between m-auto  gap-[40px]'>
              <li>
                <Link href='' >Home</Link>
              </li>
              <li>
                <Link href='' >Aboutus</Link>
              </li>
              <li>
                <Link href='' >Services</Link>
              </li>
            </ul>
          </nav>
        </div>

      </div>
    </div>
    
  );
}
