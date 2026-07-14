import BlurReveal from "./BlueReveal"
import TextReveal from "./TextReveal"


const Navbar = () => {
  return (
      <div className="fixed top-0 left-0 z-20 h-[5vh] w-full flex items-center justify-between p-[2rem]">
          <div className="leftnameside">
              <BlurReveal duration={1.1}>
                  <h2 className="text-[2rem]"> AMAN PATEL </h2>
              </BlurReveal>
          </div>
          <div className="rightlinkside flex items-center gap-[2rem]">
              <BlurReveal duration={1.1}>
                  <h2 className="text-[1rem]">Home</h2>
              </BlurReveal>
              <BlurReveal duration={1.1}>
                  <h2 className="text-[1rem]">About</h2>
              </BlurReveal>
              <BlurReveal duration={1.1}>
                  <h2 className="text-[1rem]">Contact</h2>
              </BlurReveal>
          </div>
    </div>
  )
}

export default Navbar
