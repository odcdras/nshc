

import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links';
import AcmeLogo from '@/app/ui/acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from '@/auth';


export default function Layoutnhsc() {
  return (
    <div className='homemain'>

<div className="flex flex-row">
  <div className="bg-green w-24 h-12 basis-1/4">01</div>
  <div className="bg-green w-24 h-12 basis-1/4">02</div>
  <div className="bg-green w-24 h-12 basis-1/2">04</div>
</div>

      <div className="flex flex-row">
              

              <p className=" text-justify ">
                  How many times were you frustrated while looking out
                  for a good collection of programming/algorithm/interview
                  questions? What did you expect and what did you get?
                  This portal has been created to provide well written,
                  well thought and well explained solutions for selected
                  questions. An IIT Roorkee alumnus and founder of
                  GeeksforGeeks. He loves to solve programming problems
                  in most efficient ways. Apart from GeeksforGeeks, he
                  has worked with DE Shaw and Co. as a software developer
                  and JIIT Noida as an assistant professor.It is a good
                  platform to learn programming. It is an educational
                  website. Prepare for the Recruitment drive of product
                  based companies like Microsoft, Amazon, Adobe etc with
                  a free online placement preparation course.
              </p>
              <img className="flex p-2" src=
          "https://media.geeksforgeeks.org/wp-content/uploads/20190807114330/GFG115.png"></img>
          </div>
        <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32">
        <div className="absolute top-0 h-full w-full bg-[url('/hero-desktop.png')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-start">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
            <div className="e-card-stacked">

                  <div className="e-card-actionss" >
                  <img src="/hero-desktop.png" alt="iPhone X" height="415px" style={{ width: '70%' }} />                                            
                  </div>
                  <div className="e-card-header">
                      <div className="e-card-header-caption">
                          <div className="e-card-header-title"> iPhone X</div>
                          <div className="e-card-sub-title">Marketed by Apple Inc</div>
                      </div>
                  </div>
                  <div className="e-card-content">
                      The iPhone X has a 5.8-inch diagonal OLED color-accurate screen, has two cameras on the rear. One is a 12-megapixel with
                      support for face detection. It is capable of capturing 4K video at 24, 30 or 60 frames per
                      second. It supports Qi-standard wireless charging.
                  </div>
                  <div className="e-card-actions" style={{ justifyContent: 'center' }}>
                      <button className="e-btn e-outline e-primary">
                          <div className="e-size">Read More </div>
                      </button>                                            
                  </div>

                  
                  
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
