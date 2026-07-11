import TextReveal from "../components/TextReveal"


const page = () => {
  return (
    <div>
      <TextReveal trigger="mount" splitBy="chars">
        <h1 className="text-[6rem]">about section</h1>
      </TextReveal>
    </div>
  )
}

export default page
