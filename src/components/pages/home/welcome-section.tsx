export const WelcomeSection = () => (
  <section className="py-32 sm:pb-80 md:py-64 md:pb-[30rem] px-8 md:px-52 lg:px-80 text-white bg-[url('/home-background.jpg')] bg-no-repeat bg-cover bg-center bg-overlay w-full text-center sm:text-left">
    <h1 className="tracking-[0.4rem] text-lg sm:text-xl">
      Welcome to Cool Cars
    </h1>

    <article className="mt-16 flex flex-col gap-16 max-w-2xl">
      <h2 className="text-3xl sm:text-5xl font-semibold">
        School and Community Transportation Services
      </h2>
      <p>
        At Cool Cars, we understand that access to essential appointments and
        educational opportunities is a fundamental right for all individuals,
        regardless of their unique needs. Our mission is to ensure safe,
        reliable, and compassionate transportation for special needs children
        and vulnerable members of our community to their appointments and
        schools.
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
)
