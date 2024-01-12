export default function About() {

  async function load(){
    await new Promise((resolve) => setTimeout(resolve, 4000))
  }

  load()

  return (
    <h1>about</h1>
  )
}
