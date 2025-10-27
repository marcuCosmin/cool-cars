import Link from "next/link"

import { Logo } from "@/components/Logo"
import { SocialMediaLinks } from "@/components/SocialMediaLinks/SocialMediaLinks"
import { AddressFields } from "@/components/AddressFields/AddressFields"

import { FooterSectionWithLinks } from "./FooterSectionWithLinks"

import { policiesLinks, quickLinks, services } from "./Footer.const"
import { Fragment } from "react"

export const Footer = () => {
  return (
    <footer className="max-w-7xl mx-auto w-full mt-24">
      <div className="flex flex-col md:flex-row gap-5 items-center w-full justify-between">
        <Logo />

        <h4 className="text-4xl font-semibold text-center">
          Get Back On The Road Now!
        </h4>

        <Link
          href="/contact"
          className="uppercase bg-transparent p-3 font-semibold text-white rounded-lg border-white border-1  hover:bg-primary hover:border-primary duration-300 transition-colors"
        >
          Get in touch
        </Link>
      </div>

      <hr className="text-border my-3.5" />

      <div className="flex flex-wrap gap-5 px-5 md:px-0 justify-between w-full">
        <section className="flex flex-col gap-5 max-w-60 md:max-w-xs w-60">
          <h5>About Us</h5>

          <p className="mb-4">
            Proud to keep cars looking their best with skilled repairs, fair
            prices, and friendly service
          </p>

          <SocialMediaLinks size="sm" />
        </section>

        <FooterSectionWithLinks
          title="Our Services"
          items={services}
        />

        <FooterSectionWithLinks
          title="Quick Links"
          items={quickLinks}
        />

        <section className="flex flex-col gap-5 w-60 md:w-auto">
          <h5>Get in Touch</h5>

          <AddressFields className="gap-5 max-w-xs text-secondary" />
        </section>
      </div>

      <hr className="text-border my-3.5" />

      <div className="flex flex-col-reverse items-center md:flex-row gap-5 px-5 md:px-0 justify-between text-sm pb-5">
        <p>Cool-Cars, 2025 © All Rights Reserved</p>

        <ul className="flex items-center gap-5">
          {policiesLinks.map(({ href, text }, index) => {
            const renderSeparator = index < policiesLinks.length - 1

            return (
              <Fragment key={index}>
                <li>
                  <Link href={href}>{text}</Link>
                </li>

                {renderSeparator && (
                  <div
                    aria-hidden="true"
                    className="text-primary font-bold"
                  >
                    |
                  </div>
                )}
              </Fragment>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}
