import { MainWrapper } from "@/components/MainWrapper"

const services = [
  {
    title: "Accdent Repairs",
    description:
      "Complete repair services for vehicles damaged in accidents, restoring them to their original condition.",
  },
  {
    title: "Dent & Scratch Removal",
    description:
      "Efficient removal of dents and scratches to maintain your car's appearance and value.",
  },
  {
    title: "Full & Partial Resprays",
    description:
      "High-quality respraying services to refresh your vehicle's look or change its colour entirely.",
  },
  {
    title: "Vehicle Wrapping",
    description:
      "Custom vehicle wraps for personalisation or business branding, using durable and vibrant materials.",
  },
  {
    title: "Paint Correction & Polishing",
    description:
      "Advanced techniques to eliminate paint imperfections and restore a flawless finish.",
  },
  {
    title: "Custom Bodywork",
    description:
      "Tailored modifications to enhance your vehicle's aesthetics and performance.",
  },
]

const Services = () => {
  return (
    <MainWrapper h1="Our Services">
      <h2>
        At <strong>Cool Cars South Coast</strong>, we offer a comprehensive
        range of services to meet all your car bodywork needs:
      </h2>

      <ul className="flex flex-col gap-4">
        {services.map((service, index) => (
          <li key={index}>
            <h2>{service.title}</h2>
            <p className="lg:text-lg">{service.description}</p>
          </li>
        ))}
      </ul>

      <p className="lg:text-lg">
        All services are performed by skilled professionals using premium
        materials to ensure the highest quality results.
      </p>
    </MainWrapper>
  )
}

export default Services
