const pricingOptions = [
  {
    title: "Minor Surface Damage",
    price: "200",
    description: (
      <>
        <b>Small scratches or shallow dents affecting a single panel.</b>
        <p>
          <b>Includes:</b> Scratch removal or dent correction, sanding,
          smoothing, priming, and a precise colour-matched finish.
        </p>
      </>
    ),
    eta: "Minimum 1 day",
    note: "Final price confirmed upon inspection",
  },
  {
    title: "Moderate Panel Damage",
    price: "325",
    description: (
      <>
        <b>Larger scratches or deeper dents affecting a single panel.</b>
        <p>
          <b>Includes:</b> Dent correction or scratch treatment, full surface
          preparation, priming, and a paint match finish.
        </p>
      </>
    ),
    eta: "Minimum 1 day",
    note: "Final price confirmed upon inspection.",
  },
  {
    title: "Multi-Panel Damage",
    price: "300",
    description: (
      <>
        <b>Larger scratches or deeper dents across multiple panels.</b>

        <p>
          <b>Includes:</b> Scratch and dent correction, sanding, smoothing,
          priming, and a professional paint match finish.
        </p>
      </>
    ),
    eta: "Minimum 2 days",
    note: "Final price confirmed upon inspection.",
  },
  {
    title: "Major Accident Repair",
    description: (
      <>
        <b>Bespoke quotation following inspection</b>
        <p>
          For severe damage or repairs requiring new parts or panel
          replacements.
        </p>
        <p>
          Turnaround and costs will be confirmed after a full inspection and
          parts assessment.
        </p>
      </>
    ),
  },
]

export default function PricingPage() {
  return (
    <main className="gap-20">
      <section className="bg-[url('/_next/image?url=%2Fpricing-banner.jpg&w=640&q=75')] md:bg-[url('/_next/image?url=%2Fpricing-banner.jpg&w=828&q=75')]">
        <div className="first-section-main-content">
          <h1>Pricing</h1>
          <p>
            Every job is different, so we provide clear starting prices to help
            you plan.
          </p>
          <p>
            All estimates are <b>subject to physical inspection</b> to confirm
            the scope of work and finish required.
          </p>
          <p>
            All prices are <b>exclusive of VAT</b>.
          </p>
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h2>Pricing Options</h2>

        <ul className="flex flex-wrap justify-center gap-5">
          {pricingOptions.map(
            ({ title, price, description, eta, note }, index) => {
              const hasFooter = eta || note

              return (
                <li
                  key={index}
                  className="flex"
                >
                  <article
                    className={`h-full flex flex-col gap-5 p-10 max-w-md border border-border ${hasFooter ? "justify-between" : "justify-start"}`}
                  >
                    <h3 className="text-2xl text-white">{title}</h3>
                    {price && (
                      <p className="flex gap-5 text-center relative text-5xl my-5">
                        <b className="text-white">From</b>
                        <b className="text-primary relative">
                          <span className="absolute text-2xl top-0 -left-3.5">
                            £
                          </span>
                          {price}
                          <span className="text-xs absolute -bottom-3 left-10 text-nowrap text-paragraph">
                            + VAT per panel (Retail)
                          </span>
                        </b>
                      </p>
                    )}

                    <hr />

                    <div className="flex flex-col gap-5">{description}</div>

                    {hasFooter && (
                      <div>
                        <hr className="mb-5" />
                        {eta && (
                          <p>
                            <b>Estimated turnaround:</b> {eta}
                          </p>
                        )}
                        {note && (
                          <p>
                            <b>Note:</b> {note}
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                </li>
              )
            }
          )}
        </ul>
      </section>
    </main>
  )
}
