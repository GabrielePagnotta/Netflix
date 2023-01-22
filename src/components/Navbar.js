import React from 'react'
import netflix from '../imgs-and-videos/Netflix-logo.png'
import trailer from '../imgs-and-videos/rick-and-morty.mp4'
import user from '../imgs-and-videos/user-wp.webp'
import titleRick from '../imgs-and-videos/rick-and-morty-title.png'

1const Navbar = () => {
  return (
    <div>
      <section className='bg-gradient-to-b from-black to-transparent relative z-10 text-white  flex justify-between px-10 py-2'>

        {/* right side navbar */}
          <div className="flex">
              <img className="w-[100px] mr-5" src={netflix} alt="netflix-logo"></img>
              <ul>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">Home</a></li>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">Serie tv</a></li>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">Film</a></li>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">Nuovi e popolari</a></li>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">La mia lista</a></li>
                  <li class="float-left m-4 hover:text-slate-200 hover:duration-200"><a href="#">Sfoglia per lingua</a></li>
                </ul>
            </div>

           {/* left side navbar */}
            <div className="px-10 py-2 flex justify-center">
                <i class="fa-solid fa-magnifying-glass text-2xl mx-4 cursor-pointer"></i>
                <i class="fa-regular fa-bell text-2xl mx-4 cursor-pointer"></i>
                <div className="w-[30px] h-[30px] bg-white rounded-md mx-4 flex ">
                    <img className="rounded" src={user} alt="user wallpaper mx-4"></img>
                    <i class="fa-solid fa-caret-down mx-4"></i>
                </div>
            </div>
        
           <div className="absolute  top-[500px]">
            <img className="w-96"src={titleRick} alt="rick and morty title"></img>
            <p className="text-3xl my-5">Il brillante scienziato ubriacone Rick va alla scoperta di altri mondi e <br></br> dimensioni insieme a Morty, il suo inquieto nipote adolescente.</p>
            
            <div className="flex">
              <button className="bg-white rounded-md hover:bg-opacity-90 text-black text-3xl p-3 my-8 mr-5">
                <i class="fa-solid fa-play text-3xl  px-5"></i>
                <p className="inline-block mr-5">Riproduci</p>
            </button>
            <button className="bg-slate-500 bg-opacity-50 hover:bg-opacity-30 rounded-md text-white text-3xl p-3 my-8 mx-5">
                <i class="fa-solid fa-circle-info text-3xl mx-5"></i>
                <p className="inline-block mr-5">Altre info</p>
            </button>  
            </div>
            
           </div>
                
            
        </section>
        {/* background video */}
        
            <video loop muted autoPlay className="w-[100%] absolute top-0 z-0" >
                <source src={trailer} type="video/mp4"></source>
            </video>
            <script>
                document.getElementById('vid').play();
            </script>
            
    </div>
    )
}

export default Navbar