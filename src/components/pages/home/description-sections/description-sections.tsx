import { DescriptiveCard } from "./components/descriptive-card"

const descriptiveCards = [
  {
    title: "Punctuality",
    content:
      "We understand the importance of being on time for appointments and school. We take pride in our punctuality, ensuring that your children arrive promptly and safely to their destinations.",
  },
  {
    title: "Specialised Care",
    content:
      "Our team of trained drivers and attendants specialises in caring for individuals with diverse needs, including those with disabilities, medical conditions, and mobility challenges.",
  },
  {
    title: "Safety Is Our Priority",
    content:
      "Safety is at the heart of everything we do. Our vehicles are equipped with the latest safety features, and our drivers are extensively trained to handle any situation with utmost care.",
  },
  {
    title: "Accessibility",
    content:
      "Our vehicles are specially designed for accessibility, accommodating wheelchairs, mobility aids, and any specific requirements your loved ones may have. Everyone deserves a comfortable journey.",
  },
]

const servicesOffered = [
  {
    title: "School Transportation",
    content:
      "We ensure that special needs children have access to quality education by safely transporting them to and from school.",
  },
  {
    title: "Medical Appointments",
    content:
      "We understand that medical appointments are critical. We provide a reliable service to ensure your loved ones receive the care they need.",
  },
  {
    title: "Community Involvement",
    content:
      "We actively participate in community initiatives, collaborating with schools, medical facilities, and support organisations to enhance the quality of life for vulnerable community members.",
  },
]

export const DescriptionSection = () => (
  <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 w-full px-8 md:px-52 lg:px-80">
    <section>
      <ul className="flex flex-col gap-10 items-center w-full sm:w-fit sm:grid sm:gap-10 sm:gird-rows-2 sm:grid-cols-2 mt-[-100px] md:mt-[-200px]">
        {descriptiveCards.map((infoCardProps, index) => {
          const indexIsEven = index % 2 === 0
          const className = indexIsEven
            ? "sm:mt-[-100px] md:mt-[-200px]"
            : undefined

          return (
            <DescriptiveCard
              {...infoCardProps}
              className={className}
              key={index}
            />
          )
        })}
      </ul>
    </section>

    <section className="w-full md:w-1/2">
      <h3 className="text-primary font-semibold text-lg mb-5">
        Experienced team
      </h3>
      <article className="flex flex-col gap-5">
        <h4 className="text-lg sm:text-3xl font-semibold text-black">
          Care and safety for our clients
        </h4>

        <p>
          We have established partnerships with prominent transport companies as
          well as numerous care homes and healthcare service providers to
          facilitate the transportation of individuals across various age
          groups. This includes safely conveying children with specific needs to
          educational institutions and assisting elderly individuals with their
          medical appointments.
        </p>
        <p>
          Our highly trained drivers possess the expertise required to provide
          non-restraining and non-physical calming techniques when dealing with
          individuals who may have various abilities. Thanks to the
          comprehensive training and exceptional skills of our transport
          supervisors, we have consistently managed challenging, or complex
          behaviours without resorting to restraining methods.
        </p>
        <p>
          All our drivers have completed certified courses, equipping them to
          effectively handle unexpected challenges that may arise when assisting
          individuals with physical restrictions or special needs. Furthermore,
          our vehicles have received certification from the Blue Lamp Trust,
          ensuring the secure loading, fastening, and unloading of specialised
          accessibility equipment, such as wheelchairs, in our accessibility
          vehicles.
        </p>

        <ul className="flex flex-col gap-5">
          <p className="font-bold">Services We Offer:</p>
          {servicesOffered.map(({ title, content }, index) => (
            <p key={index}>
              <u>{title}</u> {content}
            </p>
          ))}
        </ul>
      </article>
    </section>
  </div>
)
