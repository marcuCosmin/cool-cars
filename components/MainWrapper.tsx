import { type ReactNode } from "react"

type MainWrapperProps = {
  h1: ReactNode
  h2?: ReactNode
  description?: ReactNode
  children: ReactNode
}

export const MainWrapper = ({
  h1,
  h2,
  description,
  children,
}: MainWrapperProps) => (
  <main className="flex flex-col items-center">
    <section className="flex flex-col bg-top md:max-h-[70vh] md:bg-position-[center_25%] bg-size-[100%] h-[65vw] text-white bg-[url('/background.jpg')] bg-no-repeat bg-overlay w-full text-center md:min-h-[650px] xl:min-h-[1100px]">
      <div className="flex flex-col items-center justify-center h-full xl:justify-end pb-0 px-2 pt-2 md:pt-20 md:px-20 xl:px-40 xl:pt-0 gap-5 sm:max-h-[85%] xl:max-h-[70%] z-30">
        <h1 className="mt-[15%] xl:mt-[8%] xl:mb-4">{h1}</h1>
        {h2 && <h2 className="hidden md:block text-white">{h2}</h2>}

        {description && (
          <div className="hidden md:block text-lg xl:text-xl xl:max-w-7xl">
            {description}
          </div>
        )}
      </div>

      <svg
        className="rotate-180 fill-black w-full mt-auto mb-[-1px] drop-shadow-[0px_15px_7px_var(--color-primary)]"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1920 192"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,6.2c0,0,6.3-1.3,20.9,2.1c15.2,3.5,30.1,10.2,39.4,14.4s98.3,48,163.8,59.9c63.4,11.5,95.6,13.2,175.5,1
s197.2-40.7,341.7-11.9s289.9,79.7,323.3,88.7c33.2,9,113.3,35.5,246.3,31.1c133-4.4,176.8-28.2,234.2-54.3S1760.5,39.6,1920,40V0.1
H0V6.2z"
        />
      </svg>
    </section>

    <div className="flex flex-col pt-4 px-4 gap-10 md:gap-20 lg:gap-40 w-full max-w-5xl mt-[-1px]">
      {(h2 || description) && (
        <section className="md:hidden w-full md:w-1/2 text-center">
          {h2 && <h2 className="mb-5 text-primary">{h2}</h2>}
          {description && <div>{description}</div>}
        </section>
      )}

      <div className="flex flex-wrap justify-between gap-10 w-full">
        {children}
      </div>
    </div>
  </main>
)
