interface Description {
  description: string
}
interface DescriptionList {
  data: Description[]
}

const List = ({ data }: DescriptionList) => {
  return (
    <div className="container mx-auto">
      {data.map((item: Description, index: number) => (
        <div className="flex items-start my-4" key={index}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#66ff00"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#FFF"
              className="w-7 h-7 mx-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>

          <p className="text-xs py-1 text-black">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default List
