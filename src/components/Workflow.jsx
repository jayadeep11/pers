import codeImg from "../../public/Desktop.png";
import Image from "next/image";
import { Programs } from "@/constants";


const Workflow = () => {
  return (
    <div id="Arch" className="lg:mt-40">
      <div className="font-acorn flex flex-col justify-center items-center text-3xl sm:text-6xl ">
        <h2 className="arch text-center mt-6  tracking-wide">
          I am using{" "}<br />
          <span className="arch bg-gradient-to-r from-orange-500 to-orange-800 text-5xl  lg:text-9xl text-transparent bg-clip-text">
            Arch Linux
          </span>
        </h2>
        <p
          className="text-lg text-center font-poppins text-neutral-500 max-w-4xl hover:text-white transition-all duration-300">
          My cool desktop!! Which is actually just the most efficient way I’ve found to do my work.
        </p>
      </div>
      <div className="archc flex flex-wrap justify-center  mt-10">
        <div className="p-2 w-full lg:w-1/2 flex items-center justify-center  ">
          <Image src={codeImg} alt="Coding" />
        </div>
        <div className="pt-12 w-full lg:w-1/2" >
          {Programs.map((project, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-orange-400 mx-6 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                {project.icon}
              </div>
              <div>
                <h5 className="font-acorn mt-1 mb-2 text-xl">{project.name}</h5>
                <p className="text-md text-neutral-500">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Workflow;