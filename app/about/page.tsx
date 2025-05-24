export default function About() {
  return (
    <main className="h-[calc(100vh-80px)] bg-[url('/about-background.jpg')] bg-top bg-size-[auto_100%] bg-no-repeat">
      <section className="flex flex-col items-center gap-10 h-full justify-center text-white">
        <h1 className="font-bold text-center">About Cool Cars South Coast</h1>
        <p className="text-center">
          Cool Cars South Coast is a family-run business dedicated to providing
          top-notch car body repair and customisation services. Our team of
          experienced technicians takes pride in delivering exceptional results,
          ensuring every vehicle we work on meets the highest standards of
          quality and craftsmanship.
        </p>
        <p className="text-center">
          Whether you&apos;re dealing with accident damage or looking to
          personalise your car, we&apos;re here to help. Our commitment to
          customer satisfaction and attention to detail sets us apart in the
          industry.
        </p>
      </section>
    </main>
  )
}
