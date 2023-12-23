import react from "react";
import HERO_BG from "../assets/hero_bg.jpg";
const Hero = () => {
  return (
    <header className="h-screen bg-white">
      <div
        className="w-full bg-center bg-cover  h-full"
        style={{
          backgroundImage: `url(${HERO_BG})`,
        }}
      >
        <nav
          id="nav"
          class="fixed inset-x-0 top-0 flex flex-row justify-between z-10 text-white bg-transparent"
        >
          <div class="p-4">
            <div class="font-extrabold tracking-widest text-xl">
              <a
                style={{
                  fontFamily: "Dancing Script, cursive",
                }}
                href="#"
                class="transition duration-500 hover:text-indigo-500"
              >
                Dekettle
              </a>
            </div>
          </div>

          <div class="p-4 hidden md:flex flex-row justify-between font-bold">
            <a
              id="hide-after-click"
              href="#home"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >
              Home
            </a>
            <a
              href="#about"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >
              About
            </a>
            <a
              href="#contactus"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >
              Reviews
            </a>
            <a
              href="#products"
              class="mx-4 text-lg border-b-2 border-transparent hover:border-b-2 hover:border-indigo-300 transition duration-500"
            >
              Menu
            </a>
          </div>

          <div id="nav-open" class="p-4 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-menu"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </div>
        </nav>

        <div className="flex items-center justify-center w-full h-full bg-gray-900 bg-opacity-50">
          <div className="text-center">
            <h1
              style={{
                fontFamily: "Kalnia serif;",
              }}
              className="text-4xl font-semibold text-white  lg:text-6xl"
            >
              Welcome To
              <br></br>
              <span
                style={{
                  fontFamily: "Dancing Script, cursive",
                }}
              >
                <span className="font-extralight">De</span>Kettle
              </span>
            </h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
