import { Animated } from "@/components/Animated/Animated"

import type { Pricing } from "./ServiceContent.model"

type ServicePricingProps = {
  pricing: Pricing
}

export const ServicePricing = ({ pricing }: ServicePricingProps) => {
  const maxRows = Math.max(...pricing.map(col => col.values.length))
  const pinnedColumn = pricing.find(col => col.pinned)
  const otherColumns = pricing.filter(col => col !== pinnedColumn)

  return (
    <div className="flex px-5 justify-center gap-5 flex-wrap md:flex-col md:items-center">
      {otherColumns.map(({ title, values }, index) => (
        <table
          key={index}
          className="table md:hidden w-xs"
        >
          <thead>
            <tr className="border-b border-paragraph">
              <Animated
                as="th"
                className="px-4 pb-2"
              >
                {pinnedColumn?.title}
              </Animated>
              <Animated
                as="th"
                className="px-4 pb-2"
              >
                {title}
              </Animated>
            </tr>
          </thead>
          <tbody>
            {Array.from(
              {
                length: Math.max(
                  pinnedColumn ? pinnedColumn.values.length : 0,
                  values.length
                ),
              },
              (_, rowIndex) => (
                <tr key={rowIndex}>
                  <td className="text-center text-paragraph p-2">
                    {pinnedColumn ? pinnedColumn.values[rowIndex] : ""}
                  </td>
                  <td className="text-center text-paragraph p-2">
                    {values[rowIndex]}
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      ))}
      <table className="hidden md:table">
        <thead>
          <tr className="border-b border-paragraph">
            {pricing.map(({ title }, index) => (
              <Animated
                as="th"
                key={index}
                className="px-4 pb-2"
              >
                {title}
              </Animated>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: maxRows }, (_, rowIndex) => (
            <tr key={rowIndex}>
              {pricing.map(column => (
                <td
                  key={column.title}
                  className="text-center text-paragraph p-2"
                >
                  {column.values[rowIndex]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
