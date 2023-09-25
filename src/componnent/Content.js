import React from 'react'
import img1 from '../images/ccIcon.png'

const Content = () => {
  return (
    <div>
      <div className='flex items-center justify-between pl-32 pr-36 h-28'>
        <div> <img src={img1} className="main-icon items-center" alt="Community Classroom Icon" /></div>

        <div className="items-center">
          <ul className="flex justify-around items-center translate-y-2 gap-10 text-2xl">
            <li><a href=" " className="inline-block no-underline text-blue-700 hover:underline">Home</a></li>
            <li><a href=" " className="inline-block no-underline text-blue-700 hover:underline">Courses</a></li>
            <li><a href=" " className="inline-block no-underline text-blue-700 hover:underline">Podcasts</a></li>
            <li><a href=" " className="inline-block no-underline text-blue-700 hover:underline">Events</a></li>
            <li><a href=" " className="inline-block no-underline text-blue-700 hover:underline">Roadmaps</a></li>
            <li>
              <a href=" " className="inline-block no-underline text-blue-700 hover:underline">
                <button className="pr-7 pl-4 bg-white border border-gray-300 rounded-full text-xl font-normal flex items-center justify-center gap-1 py-2 px-4">Youtube
                  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgA
                        AABwAAAAUCAYAAACeXl35AAAACXBIWXMAAAsTAAALEwEAmpwYA
                        AAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAFDSURBVHg
                        BvZYxTsMwFIb/3wlMFDKiMjQcoxJIPQI3aDkCp2BDcIKGuQsLz
                        CCQeo1UasVIgDJR/HiGNsACpmn8DZZf8scvz372MzHndWO7Q4m
                        6IFJnE5JokyzeC5jiF1Sfl1ph2dcPcwvcrL9Msk+d8tZo9nXAH
                        mqEYk+j6f0RZ42dntp9BMBaHBoNuYtA0MiBQUCMsGW03UUghJL
                        8K0JzOQD22qiCrqHZ8hVzv43oalDBMROXpeIrj57GP2y5HcIen
                        wB3Q/hSKWmWiXg1WarHB+knjVEB0akUnVI3tb6oQxZw52bNjuYUM
                        WgfdYN4OazgaDFCwdlmM1eHLQRBckPLBwRCK9LIWMoIATEELxAI
                        schM/DzJtEKfoW6Ic1f1y+3qCrFeBTr6IC01lPTr9/5IrG9LowH
                        oVkPx0QdyCrO16fja2e84zH2vqPgRoAAAAABJRU5ErkJggg=="
                        alt="youtube icon" />
                </button>
              </a>
            </li>
          </ul>
        </div>
      </div>
   
      <main>
      <div className="pt-12 md:pt-24 lg:pt-32 text-center">
        <a href=" " className="text-xl font-normal font-sans px-4 md:px-8 py-2 md:py-3 rounded-full text-white bg-blue-500">Check out our most recent podcast</a>

        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mt-8">
            The <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">Free</span> Community for Modern Learning.
          </h2>

          <p className="mt-6 md:mt-16 text-lg md:text-2xl w-11/12 md:w-3/5 mx-auto tracking-wider leading-7 text-gray-600">
            This is a community that provides <span className="text-gray-700 font-semibold">free hands-on training</span> in various fields of computer science and has an inclusive community focusing on a <span className="text-gray-700 font-semibold">learn by doing</span> approach.
          </p>
        </div>

        <div className="font-sans mt-12 md:mt-16 flex flex-col md:flex-row items-center justify-center gap-6">
          <a href=" " className="rounded-full text-white bg-blue-500 px-6 py-2 md:px-8 md:py-3 flex items-center justify-center gap-2">
            See Courses
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
            </svg>
          </a>
          <a href=" " className="rounded-full py-2 md:py-3 bg-white border border-gray-300 text-lg md:text-xl flex items-center justify-center gap-2 px-6 md:px-8">
            Visit Youtube
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </a>
        </div>
      </div>

        
        

        <div className="  ">

        <div className="mt-12 md:mt-24 lg:mt-32 p-2 md:p-3.5 grid grid-cols-1 md:grid-cols-2 items-center">
  <img
    className="px-4 md:px-20 col-span-1 h-auto md:h-[99%] rounded-lg justify-self-center"
    src="https://images.pexels.com/photos/3182787/pexels-photo-3182787.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    alt="people discussing"
  />

  <div className="text-lg md:text-2xl tracking-wider leading-7 px-4 md:px-15% col-span-1 justify-self-center">
     <h2 className="text-4xl md:text-5xl mb-10 md:mb-16 transform translate-x-4 translate-y-3 font-extrabold">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">About</span> Us
          </h2>

          <ul className="text-gray-600 py-2 md:py-4 px-2 md:px-5 text-left">
            <li className="mb-6 md:mb-10">
              Every student, regardless of their college or major, has the potential to achieve greatness.
            </li>
            <li className="mb-6 md:mb-10">
              We offer free hands-on training, mentorship, and foster an inclusive community.
            </li>
            <li className="mb-2 md:mb-10">
              Receive expert guidance on careers, open-source projects, internships, and job opportunities worldwide.
            </li>
          </ul>
          <a href=" " className="rounded-sm w-[50%] ml-2 text-white bg-blue-500 px-12 py-3 flex items-center justify-center"> Learn More<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                      </a>

         
  </div>
</div>

<div className="mt-12 md:mt-24 lg:mt-32 p-2 md:p-3.5 grid grid-cols-1 md:grid-cols-2 items-center">
  <img
    className="px-4 md:px-24 justify-center col-span-1 h-auto md:h-[99%] rounded-lg md:order-2"
    src="https://img.freepik.com/free-photo/smartphone-laptop-with-blank-black-screen-office-desk_23-2147875638.jpg?w=826&t=st=1695639312~exp=1695639912~hmac=b05d13c4dcc5895763071f733c31b00368fd2d7a44138ea3fc79e0b061b562b4"
    alt="laptop on desk"
  />
        
  <div className="md:order-1 text-lg md:text-2xl tracking-wider leading-7 px-4 md:px-16 col-span-1">
      <h2 className="text-4xl md:text-5xl mb-10 md:mb-16 transform translate-x-4 translate-y-3 font-extrabold">
            Boost your career with<br />
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">Hands On Courses</span>
          </h2>

          <ul className="text-gray-600 py-2 md:py-4 px-2 md:px-5">
            <li className="mb-6 md:mb-10">
              All courses are FREE while never compromising on quality.
            </li>
            <li className="mb-6 md:mb-10">
              We cover every topic in detail with a hands-on approach and mentor you to stand out to get opportunities by breaking all the barriers.
            </li>
            <li className="mb-6 md:mb-14">
              Explore a wide range of courses including Data Structures & Algorithms, Web Development, DevOps, Machine Learning, and more!
            </li>
          </ul>
          <a href=" " className="rounded-sm w-[50%] ml-2 text-white bg-blue-500 px-12 py-3 flex items-center justify-center">  Explore Courses<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                      </a>

  </div> 
</div>




            <div className="mt-48 p-3.5 grid grid-cols-1 md:grid-cols-2  items-center">
                <img className=" px-16 justify-center col-span-1 h-[99%] rounded-lg"src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbmZlcmVuY2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80" alt ="conference"/>
                <div className="text-2xl tracking-wider leading-7 px-15% col-span-1 justify-self-center" >
                    <h2 className="text-5xl mb-10 transform translate-x-4  font-extrabold">Join our  <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">free and<br /> exciting</span> events</h2>
                    <ul className="text-gray-600  px-5">
                        <li className="mb-10">
                        All our events are fun-filled, high-quality, and completely free <br /> for everyone.
                        </li>
                        <li className="mb-10">
                        Our events enhance students' skills in co-curricular activities <br /> and introduce them to current trends in tech and professional fields
                        </li>
                        <li className="mb-10">
                        Explore a variety of events and seize the chance to win fanta <br /> stic prizes and goodies.
                        </li>
                    </ul>
                    <a href=" " className="rounded-sm w-[50%] ml-2 text-white bg-blue-500 px-12 py-3 flex items-center justify-center">Explore our Events<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                      </a>
                </div>
            </div>

            <div className="mt-48 p-3.5 grid grid-cols-1 md:grid-cols-2  items-center ml-14">
    <div className="text-2xl tracking-wider leading-7 px-15% col-span-1 justify-self-center" >
        <h2 className="text-5xl mb-10 transform translate-x-4  font-extrabold">  <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">Mentorship <br /> </span>    by best in the industry</h2>
        <ul className="text-gray-600  px-5">
            <li className="mb-10">
                A comprehensive answer to all of your mentoring needs,
                including educational materials, communities to join,
                opportunities, and much more.
            </li>
            <li className="mb-10">
                Roadmaps to help you stay on track, including those for
                open-source, full-stack, devrel, and more.
            </li>
        </ul>
        <a href=" " className="rounded-sm w-[60%] ml-2 text-white bg-blue-500 px-12 py-3 flex items-center justify-center">Explore all Roadmaps<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
        </svg>
        </a>
    </div>
    <img className="px-16 justify-center col-span-1 h-[99%] rounded-lg"src="https://media.istockphoto.com/id/1134182534/vector/hand-drawn-infographic-for-mind-map-visualization-template-with-light-bulb-as-a-main-symbol.jpg?s=612x612&w=0&k=20&c=XdR8kKJNWL8PSzOBsqNscWZegSZtBrPEnPYKcag_DWo=" alt="mind map" />
</div>

       <div className='w-[87%] m-auto rounded-md bg-gray-300'>

       
            <div className="  grid-cols-2 mt-52 p-10 grid ">
                <div className="">
                    <p className="text-4xl text-blue-500 font-extrabold mb-2  ">Open Source Cafe Podcast</p>
                    <p className="text-2xl text-gray-600 mb-48">The Open Source Cafe, Out of Syllabus, KlassTime with Karuna, and AMA sessions on Discord are initiatives aimed at showcasing the stories, journeys, tips & tricks of our incredible community leaders and members. You can gain valuable insights from their experiences and receive mentorship from individuals from diverse backgrounds around the world.</p>
                    <a href=" " className="text-white p-4 px-10 bg-green-500"> See all episodes </a>
                </div>

                <img className="justify-self-end"src="https://img.freepik.com/free-photo/retro-microphone-isolated-color-background_1387-912.jpg?w=996&t=st=1695647941~exp=1695648541~hmac=4ce63fb267fb9015302d42044744862242af4560334a384d9cca05ad6fbdbfbd" alt="podcast thumbnail" />
                
            </div>
            </div>


            <div className="mt-48 p-3.5 grid grid-cols-1 md:grid-cols-2  items-center">
                <img className=" px-16 justify-center col-span-1 h-[99%] rounded-lg"src="https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/623825702c58f_s_blog-a-thon.png" alt ="book shelf"/>
                <div className="text-2xl tracking-wider leading-7 px-15% col-span-1 justify-self-center" >
                    <h2 className="text-5xl mb-10 transform translate-x-4  font-extrabold">Write <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">Blogs </span>to win <br />
                        amazing prizes</h2>
                    <ul className="text-gray-600  px-5">
                        <li className="mb-10">
                            Participate in monthly blog events and win
                            exciting swags and prizes.
                        </li>
                        <li className="mb-10">
                            Read the blogs written or curated specially by the
                            Community Classroom team.
                        </li>
                        <li className="mb-10">
                            These blogs are written with the present in mind,
                            all of these <br /> blogs  are up to date.
                        </li>
                    </ul>
                    <a href=" " className="  rounded-sm w-[50%] ml-4 text-white bg-blue-500 px-12 py-3 flex items-center justify-center">Explore Blogs<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                      </svg>
                      </a>
                </div>
            </div>

            <div className="mt-48 p-3.5 flex  w-[93%] m-auto">
    <div className="col-span-2 justify-self-auto mr-16 text-2xl leading-7  tracking-normal sm:line-normal">
        <h2 className="text-5xl text-blue-900 mb-10 font-extrabold">
            <span className="bg-gradient-to-r text-transparent from-blue-500 to-green-400 bg-clip-text mr-2">Founder: </span> Kunal Kushwaha
        </h2>
        <p className="text-gray-600   text-2xl">
            Kunal is a developer from India. He is working towards empowering communities via Open Source and Education. He is currently doing Developer Advocacy at Civo, community management at Major League Hacking, is a CNCF Ambassador, GitHub Campus Expert, Gold Microsoft Learn Student Ambassador, Google Summer of Code Mentor at Red Hat Middleware.
        </p>
        <div className="flex py-4 space-x-4">
            <a className="" href=" " ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANOSURBVHgB1ZfPTxNBFMe/M9vyqyJbgQN6oBw86EFqwllKvOjJImmMJ9u/APgLaP8C4C9oORlFQv0LWr14MREuepCk7QUPgJQgCK3d9c20tVD2x2yAJn6TzW523sx89s1783YYvChd0BHoj9JTGJyP0z3UaNHpKtNVhGFswkQex4d5JMbKqkMzJavVnQi4NksTRBqTKsrMoFpJ4eVI0c3SGeT1jxD83Yv0FMWl5A5kD/JmNwqNp+HJA44qombM48VQ1qqRW3ZZ21sgiPUrhBAKyTHF2BZilhAmS+I6xcwkZgZT516dM3i7G6dsSKMT4iyO58GViyD1wMyhlZLXrTKqpw+bAdyKEZ8/2UEIIZ0+/J/36x4R+wTTcrikQn1cXsVjQ15KMmtTiA3nGx6h9XJQ9LbfqRm6nyH36AYKTweQm+yX98UHvRJq4V6Pc3+mySxijdgo2NmFdQ1fHt9E/PMRVkoVS5vMRB9ejXZbti19P8Xy1omzhw5ZkEPzR6CgzERAfl27QgFuCyEUD3VB73KpJIFalJNPIk42xSMD5aopn5P3e1F4MoD4aJd0uwTp5Y5zTH08xEa55mgDTZv0gckqaisBkfr2m9a8rz4xeSBN3mmHtO1fcW6XMs0wgVDKOtiKGHk24pcTiqA8KwHlJjfQ5lCcIBzriXBrWPddgFCR6KsIort/EurrrDjgOb3frijbimB1/YsSXybixCtMpqQMUuYwzAMVS93HPS2PAFfeXSnuhUfyKpZJGnh561TFVGZT8usJlGWiJEA2VO3nNo8x/emX4xIJCBFTnsSNLMP6vo6auW9n0yxkMo2pZkSG7etGdruKBJUCz4GtsTGO6aAI1rytEYVF9E4XZu/2WEKIST/s/JFecPOWpag7MRQ9/QYIrwjvNIN246CmtLs6ihkJzAxlWmnw7qcAiaCTEt6I3YqIx9aGprGEyp5ypfK1/oNaILROhJhCp2TSXHLOdhChmcEladAJiNhg8uwr661ydS8JxhbQIQh7kOuCMc15gliyanIuHuv7IapFOYruEC4FQNnhY3MUE7a7uFoVW6MToMHjZD0JLxIAoONrLJh3M/X2tyM9ZETpbBxB/TA23jZxSdYuZubp6Jo9mxX/jf4CUIo83KnecHUAAAAASUVORK5CYII=" alt="twitter logo" /></a>
            <a className=" " href=" " ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAANSSURBVHgB1ZdBSBRhFMf/75vdWjRqSaioqKlDnUo9FBSku9WhoMBTHYrag1qUUEZ0VS9Ch7BDkajgCp66JCTUJXa3oG5mBh4KYpU6CAkKqZvuzOt7E667ujuuOSr9YHdn3ryd+c9/3vu+bwgrIBiJBef8qAFUhQ0qJ2LTOcAIgjDBTEkF/sRkxzfNIj4RDU8Ue24qJilQGwuRMu4QcwhEQRQLI2rPWS2paDi5XKqrkEAkZpLfaCMSF1ZBEYIKCimpj9WAVfeKHHDVwkmC3TjdEe7Ld1zlCwbqE02A8cIrEQKBTDlnoFbOvRQDeUQoUDPWCCIKGZURpAeiiZx49k5pXSzCZHRjHbDBkVRHdc8SIVKYapOK6ZCJ9YAxoQu4cr6AMzWifKo5n4h9ZQG8uncEw63H8PDSQXgGIag7MuO+UyOBm3qcgGrLl//6/hEcP7gVwRKf8yu8+zIJT7QQTKPyWiI90JN0HFFpFSmUfHTvlpz9/WWb4SVEhtNFSmoDiq4XSlx89165sSAEIZk6fIYfIXZJvPxsGFdP7NTOlKL3w5jnQoQ5v1HjY1Yht4F+cjqNp29+YC1hhWqf7ptyt6Rbp3ej4eyezP75R0MYGf+NU4e2aad2ZOI3er7iinbuYvl2HN23BSM/U/j8fQpP9E2M6nxXbKrwgcl0c0S6Zb9u4cVIW189uSuzPzlj4faZBcHyn6rDQVyoKMM5Ld5dDJtK+hkekC0iGxHUUOBYBq1BwUOklqS4W/tHc+LiynL4ZKj1wpXe92N48Pybs90/OK4vvj0zBuV7tDloDeKIJ/34Ul88m6HRKRSPLDGJ4/CAyZk0/hWGPaLYpkFsMAzqU5vTVhQbjWHFlSz5mRDHBkGMRKo9/Hf2ZbJasEFYQFR+HSFaUbyQKzLXyJA+//ESx43OqqizPR/UiyNTWcZHr0baYrCVdUAei2xnRlYJaFfW7xHZ3DIvIkeIMNNR9VhXzNqL0SKmu6qbs0N5592S+oROoiask4iCQtZKDNtonOkS15fi/hIuBWwb+l0HJlaBvkhilq27c53hQZec5SmtexvRmRG9tq3GChABpKj5V/upeBG5xSMOUdqokZW3vJNoYbnLTMaI/h5kRpx9/r5U+4kk/jf+APkHNeRusoZkAAAAAElFTkSuQmCC" alt="LinkedIn logo" /></a>
            <a className="" href=" " ><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAjCAYAAADxG9hnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPnSURBVHgBzVg9TBRBFH6zd6AQf9AYo/EnR2JBB9JCwtCoJYmdQdlCO6PS0aiHNnYYEysLDgorDZRqw5Jgi9BRaOTPaCIxoIDycze+b26H3B07+xPh4pdsbndu3sw3733z5u0KSoDP0m2ooXyXItEiSDQLogzaFVED3y/z76wiNa2o4OUp7TV6ueW4Y4s4nRZkt3QodZcnkvzYQPGR2yLRz4RmozqGEvkq3UyB1AAT6KJ/QyQhK5F52d3FXhikZB4Iw2yBRO95Lzca9KcT1PhF3njIJEb2kASQcUiNYOygP0UQCRZjlvYRglT2jDfcX95WgkV53WUnDVJV4LhnvcGhXUR8YY4pf0tWAcss4ItGwGnTmqdClnllbFa1zU10sL2VDrQ0kXOoXrfh19wXVtf1Ze63Ps7Tr6FRyn9bsg3JOUnB+5140B5BnhCUGrNZHLp6iY7evqbvt3lgM3jpJCAkSgjWXDiv73/yJgEhG1iPnee8nJcusnFcW8fUqROaBCZd6n2iicRBmu1ODPTREbeLNqdnaGNqJrAfCxe7yHOgDX7ssQ14uKeYy5KQOP74DtVdbtc2QD3fh0Di6EjnKS8t6USjll2M1QSRgG6gGQCa+PN+UnuwjrUEO4QE7bV+HxtSfH5xaIQM64RY/56YLDfkybDqWl8HBtt++H7cf7YjXBCByMPgkNMBIs0UAeUPaoDYQwNY8fqbCS1OTIYwguD3Ww/KJ/JFHIIWiDVDCYB4g8TK85e0+urdTvsmr1xxEoI4D7a16jAlQAbiSHSemG25xp6oxNrrIrG6iFAEoMFJaBDq5kJFCBONy1fsKgqA+IC6tt2rNtt0Y3qGEmKZiaiVJBbrbyd0ckOSK80P0IVJfOsBYYvALMTq8dUT1wLuxxbFzjnWd1NfBib7lkJE7xhO82qOiaipsMyK3FBjyRdIVAea/YT2aV57olIn0FRURlbkjKa3KJXjU3DA1gmaQPbEykrzCQbf5onDwoDEB9vKhFiJPM4av+T3bJ2wJbEqhAIDxwWII7mZMWzgsIyjJkkXH0Q/n4IyqCPOGWRQZM2TLx5pD+2UAewh4yVMnPL1gHtTt8DWdvIW53Zy2sY0LMoe1CPSZlB/pV3vEpwvUQIEuU2/MAonocbPecOyjAjKgTypD7S3lXsouFRsNKXiTmY9rRtEP1UJquKFqyzFn/VyT1UVyGAOLg+zpW2Bb3oL0s36JVxVSFiJ7B8Z0QuvB/4TZrZX7zrYHVyg32MSU7Y+sT5LLErX5W8eLn8T6aAEAAGWYRavC1F9YxExKG5x4g81BcmPGbGrzFRz7L0pXr23RTQa57vIf4e/4m+5D0LIXHsAAAAASUVORK5CYII=" alt="Instagram logo" /></a>
        </div>
    </div>
    <img className=" px-16 justify-self-center" src="https://s.yimg.com/ny/api/res/1.2/2VtlmhGUuskbrB1wOGteiQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2020-02/529d39f0-4e74-11ea-ae5d-f72136279977" alt="people discussing"/>
</div>
 

        </div>
    </main>

    <div className=" p-20 bg-gray-400"> 
        <img className=" p-8"src={img1} alt="community classroom logo"/>
        <p className="text-1.8rem text-black font-bold px-8.5rem ">&copy; 2022 Community Classroom · All rights reserved.</p>
     

        <div className='flex justify-end gap-96'>

       
        <ul className="text-1.8rem  leading-2.4 ml-8">
            <li><h4 className="text-black font-extrabold no-underline text-2xl">Sitemap</h4></li>
            <li><a className="text-white no-underline text-xl"href=" ">Home</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">About</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Blog</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Courses</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Roadmap</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Events</a></li>
    
        </ul>
        <ul className="text-1.8rem list-none  leading-2.4 mr-8rem">
            <li><h4 className="text-black no-underline text-2xl font-extrabold">Community</h4></li>
            <li><a className="text-white no-underline text-xl"href=" ">Youtube</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Discord</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Telegram</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Twitter</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">Instagram</a></li>
            <li><a className="text-white no-underline text-xl"href=" ">GitHub</a></li>
    
        </ul>
        </div>
    </div>
    
     
    </div>
  )
}

export default Content
