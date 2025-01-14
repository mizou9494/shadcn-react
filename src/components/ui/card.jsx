import React from "react"

import { cn } from "../../lib/utils"

export function Card({
  className,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex items-center justify-center rounded-md border p-8",
        className
      )}
      {...props}
    />
  )
}