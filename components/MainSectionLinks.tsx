import Link from "next/link"

export type MainSectionLink = {
  href: string
  label: string
  external?: boolean
}

type MainSectionLinksProps = {
  links: MainSectionLink[]
}

export const MainSectionLinks = ({ links }: MainSectionLinksProps) => {
  const linkClassNames = "block link-button-fill-primary"

  return (
    <ul className="flex gap-5 flex-wrap justify-center">
      {links.map(({ href, label, external }, index) => (
        <li key={index}>
          {external ? (
            <a
              href={href}
              className={linkClassNames}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </a>
          ) : (
            <Link
              href={href}
              className={linkClassNames}
            >
              {label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}
