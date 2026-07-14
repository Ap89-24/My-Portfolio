import BlurReveal from "./BlueReveal"
import TextReveal from "./TextReveal"


const Navbar = () => {
  return (
    <div>
          <div className="leftnameside fixed top-0 left-0 z-[20] h-[5vh] w-full">
              <BlurReveal >
                  <h2 className="text-[2rem]"> AMAN PATEL </h2>
              </BlurReveal>
             
          </div>
          <div className="rightlinkside"></div>
    </div>
  )
}

export default Navbar
