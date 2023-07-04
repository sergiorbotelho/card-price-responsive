import Button from "@/components/Button/button"
import List from "@/components/List/list"
import Input from "@/components/Price/input"
const Home = () => {
  const active: boolean = true
  const colors = [
    {
      colorActive: "bg-gradient-to-r from-purple-900 to-purple-400",
      colorInactive: "bg-indigo-100",
    },
  ]
  const listComplete = [
    {
      description:
        "The Complete Package includes all the benefits mentioned int he next two packages",
    },
    { description: "Online Video Course" },
    { description: "E-Book in PDF format" },
    { description: "Design resources + special deals on design assets" },
    { description: "Access to the Slack mentoring channel" },
  ]
  const videoCourse = [
    {
      description:
        "More than 4.5 hours of videos (theory explained on pratical examples + designing real app design in Figma)",
    },
    { description: "10 Modules, 31 Chapters, 30 Quizzes + Certificate" },
    {
      description:
        "Get feedback and mentoring directly from Jan Mraz and other members in a private Slack channel",
    },
    {
      description:
        "Database with useful design freebies, tools, and other links",
    },
  ]
  const eBooks = [
    {
      description: "150+ pages of design knowledge in PDF format",
    },
    {
      description:
        "Design explained on pratical examples + components cheatsheet",
    },
    {
      description:
        "Database with useful design freebies, tools, and other links",
    },
    {
      description:
        "Special deals on design assets and tools that are available only for the Atheros students!",
    },
  ]
  const Prices = [
    { price: 160.0, offer: 78.0 },
    { price: 92.0, offer: 64.0 },
    { price: 54.0, offer: 27.0 },
  ]

  return (
    <div className="container mx-auto">
      <div className="flex flex-col items-center justify-center gap-3 mb-3 p-3">
        <h1 className="text-2xl font-bold text-black">
          Become{" "}
          <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-900 to-purple-400">
            {" "}
            Atheros Member
          </a>
        </h1>
        <p className="text-center text-black">
          The price for each plan represents a one-time payment. You get{" "}
          <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
            lifetime acess
          </a>{" "}
          to mentioned benefits with a{" "}
          <a className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-purple-400">
            single payment.
          </a>
        </p>
      </div>
      <div className="grid mb-4 md:grid-cols-3 w-full md:px-2 lg:px-20 xl:px-20">
        <div className="flex justify-center md:justify-end">
          <div className="w-72 h-[480px] border border-gray-400 rounded-lg my-3 px-3  md:w-60 ">
            <Input data={Prices[0]} />
            <Button data={active} />
            <div className="w-full border border-b-gray-300 my-4"></div>
            <List data={listComplete} />
          </div>
        </div>
        <div className="flex justify-center md:justify-center">
          <div className="w-72 h-[480px] border border-gray-400 rounded-lg my-3 px-3 md:w-60">
            <Input data={Prices[1]} />
            <Button data={!active} />
            <div className="w-full border border-b-gray-300 my-4"></div>
            <List data={videoCourse} />
          </div>
        </div>
        <div className="flex justify-center md:justify-start ">
          <div className="w-72 h-[480px] border border-gray-400 rounded-lg my-3 px-3 md:w-60">
            <Input data={Prices[2]} />
            <Button data={!active} />
            <div className="w-full border border-b-gray-300 my-4"></div>
            <List data={eBooks} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
