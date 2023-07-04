interface Active {
  data: Boolean
}

const Button = ({ data }: Active) => {
  if (data === true) {
    return (
      <div className="group container mx-auto hover:cursor-pointer">
        <div className="w-full h-10 flex items-center justify-center border px-2 py-2 rounded-md bg-gradient-to-r from-purple-900 to-purple-400 group-hover:opacity-90">
          <p className="text-white font-bold">Enroll Now</p>
        </div>
      </div>
    )
  }
  return (
    <div className="group container mx-auto hover:cursor-pointer">
      <div className="w-full h-10 flex items-center justify-center border px-2 py-2 rounded-md  bg-indigo-100 group-hover:opacity-90 group-hover:border-purple-900">
        <p className="text-purple-400 font-bold">Enroll Now</p>
      </div>
    </div>
  )
}

export default Button
