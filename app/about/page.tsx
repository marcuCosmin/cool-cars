import Image from "next/image"

const sectionWithImageClassName =
  "flex flex-col sm:flex-row gap-5 items-start sm:items-center max-w-6xl"
const imageClassName =
  "w-2/3 sm:w-[revert-layer] md:w-auto block m-auto sm:m-0 md:w-[480px] md:h-[480px]"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-5 gap-10">
      <section className="flex flex-col items-center justify-center max-w-6xl">
        <h1 className="text-primary font-bold text-center">
          We are a Portsmouth based, family run business.
        </h1>
        <h2 className="text-3xl sm:5xl text-black text-center">
          Entrust Rides company
        </h2>
        <p className="mt-5 sm:text-center">
          Our family is originally from Romania, however in 2015 we made the
          decision to move 3000 miles to build a home and life in the UK.
        </p>
        <p className="mt-5 sm:text-center">
          Our reasons? Our daughter Irina was born profoundly deaf, and as any
          parent would we wanted the very best for her and wanted to give her
          the absolute best chance in life. We wished for her to be brought up
          in a world where she can be given all the opportunities to reach her
          full potential and for her to be seen for who she really is.
        </p>
      </section>

      <section className={sectionWithImageClassName}>
        <Image
          src="/child.jpeg"
          alt="Little girl"
          className={imageClassName}
          width={300}
          height={300}
        />

        <div className="flex flex-col gap-5">
          <p>
            We were lucky enough to be introduced to an amazing company: The
            Elizabeth Foundation, which is the place we first called home when
            arriving here, the team there made us feel so welcome, and gave me
            the chance to finally offer my daughter the support she needed to
            develop language and listening skills, something which to some is
            taken so easily for granted. They gave me the emotional support I
            didn&apos;t know I needed after leaving all my world behind in
            Romania. Because of this wonderful team and opportunity we were
            afforded, Irina is now attending a mainstream school and doing
            beautifully, we couldn&apos;t be prouder.
          </p>
          <p>
            It was because of this experience that I began to see the real role
            of a community and the influence and impact it can have on
            people&apos;s lives; it was here that I decided we needed to give
            back.
          </p>
        </div>
      </section>

      <section className={sectionWithImageClassName}>
        <div className="flex flex-col gap-5">
          <h3 className="text-primary font-bold text-xl">Entrust</h3>
          <h4 className="text-black font-bold text-3xl">
            Positive outlook on life
          </h4>
          <p>
            We ourselves were offered free transportation (funded by Portsmouth
            City Council), as a SEND child, Irina could utilise the
            transportation to be able to attend a school with a deaf unit. I
            believed we ourselves could offer this service ensuring the level of
            care and service being offered was that of a level we would wish to
            receive for our own daughter. We wanted to provide our community
            with a transportation service they can trust, who personally
            understand difficulties which can be faced daily and offer a service
            which can help one part of someone’s day be easier and above all
            brighter. We are not just a taxi firm, our drivers play an extremely
            vital role each morning, as their interactions with SEND children
            will impact on how a child starts their day.
          </p>
          <p>
            We have personally ensured that all our drivers are trained on:
            Autism Special Needs, Dealing with Vulnerable Adults, First Aid
            Trained and Safeguarding. We have also received great support from
            Portsmouth City Council, offering us access to all their specialised
            training courses.
          </p>
          <p>
            It is our hope to have a positive impact on our community and offer
            a service we are proud of. Entrust us in your world and we will care
            for you like one of our own.
          </p>
        </div>
        <Image
          src="/monument.jpg"
          alt="Monument"
          className={imageClassName}
          width={300}
          height={300}
        />
      </section>
    </main>
  )
}
