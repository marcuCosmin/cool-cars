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

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <section className="py-32 sm:pb-80 md:pb-[25rem] lg:py-64 lg:pb-[30rem] px-container text-white bg-[url('/home-background.jpg')] bg-no-repeat bg-cover bg-center bg-overlay w-full text-center sm:text-left">
        <h1 className="tracking-[0.4rem] text-lg sm:text-xl">
          Welcome to Cool Cars
        </h1>

        <article className="mt-16 flex flex-col gap-16 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-semibold">
            School and Community Transportation Services
          </h2>
          <p>
            At Cool Cars, we understand that access to essential appointments
            and educational opportunities is a fundamental right for all
            individuals, regardless of their unique needs. Our mission is to
            ensure safe, reliable, and compassionate transportation for special
            needs children and vulnerable members of our community to their
            appointments and schools.
          </p>
        </article>

        <svg
          className="rotate-180 fill-white w-full absolute bottom-[-1px] left-0"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1920 192"
          preserveAspectRatio="none"
        >
          <path
            d="M0,6.2c0,0,6.3-1.3,20.9,2.1c15.2,3.5,30.1,10.2,39.4,14.4s98.3,48,163.8,59.9c63.4,11.5,95.6,13.2,175.5,1
s197.2-40.7,341.7-11.9s289.9,79.7,323.3,88.7c33.2,9,113.3,35.5,246.3,31.1c133-4.4,176.8-28.2,234.2-54.3S1760.5,39.6,1920,40V0.1
H0V6.2z"
          />
        </svg>
      </section>

      <div className="flex flex-col md:flex-row gap-10 md:gap-20 lg:gap-40 w-full px-container">
        <section>
          <ul className="flex flex-col gap-10 items-center w-full sm:w-fit sm:grid sm:gap-10 sm:gird-rows-2 sm:grid-cols-2 mt-[-100px] md:mt-[-200px]">
            {descriptiveCards.map((infoCardProps, index) => {
              const { title, content } = infoCardProps
              const indexIsEven = index % 2 === 0
              const className = indexIsEven
                ? "sm:mt-[-100px] md:mt-[-200px]"
                : undefined

              return (
                <li
                  key={index}
                  className={`p-8 rounded-lg shadow-md md:max-w-md bg-white h-fit duration-500 ${className}`}
                >
                  <h3 className="text-2xl text-center font-semibold mb-4 text-black">
                    {title}
                  </h3>
                  <p className="text-center text-md text-gray">{content}</p>
                </li>
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
              We have established partnerships with prominent transport
              companies as well as numerous care homes and healthcare service
              providers to facilitate the transportation of individuals across
              various age groups. This includes safely conveying children with
              specific needs to educational institutions and assisting elderly
              individuals with their medical appointments.
            </p>
            <p>
              Our highly trained drivers possess the expertise required to
              provide non-restraining and non-physical calming techniques when
              dealing with individuals who may have various abilities. Thanks to
              the comprehensive training and exceptional skills of our transport
              supervisors, we have consistently managed challenging, or complex
              behaviours without resorting to restraining methods.
            </p>
            <p>
              All our drivers have completed certified courses, equipping them
              to effectively handle unexpected challenges that may arise when
              assisting individuals with physical restrictions or special needs.
              Furthermore, our vehicles have received certification from the
              Blue Lamp Trust, ensuring the secure loading, fastening, and
              unloading of specialised accessibility equipment, such as
              wheelchairs, in our accessibility vehicles.
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
    </main>
  )
}
