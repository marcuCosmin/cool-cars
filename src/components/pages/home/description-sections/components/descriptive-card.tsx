type DescriptiveCardProps = {
  title: string
  content: string
  className?: string
}

export const DescriptiveCard = ({
  title,
  content,
  className = "",
}: DescriptiveCardProps) => (
  <li
    className={`p-8 rounded-lg shadow-md md:max-w-md bg-white h-fit duration-500 ${className}`}
  >
    <h3 className="text-2xl text-center font-semibold mb-4 text-black">
      {title}
    </h3>
    <p className="text-center text-md text-gray">{content}</p>
  </li>
)
