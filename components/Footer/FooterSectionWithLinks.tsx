import Link from "next/link"

type LinkItem = {
  href: string
  text: string
}

type FooterSectionWithLinksProps = {
  title: string
  items: LinkItem[]
}

export const FooterSectionWithLinks = ({
  title,
  items,
}: FooterSectionWithLinksProps) => (
  <section className="flex flex-col gap-5 w-60 md:w-auto">
    <h5 className="text-xl font-bold">{title}</h5>

    <ul className="flex flex-col gap-2.5">
      {items.map(({ href, text }, index) => (
        <li key={index}>
          <Link
            href={href}
            className="flex items-center gap-2.5"
          >
            <div
              aria-hidden="true"
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
            {text}
          </Link>
        </li>
      ))}
    </ul>
  </section>
)
