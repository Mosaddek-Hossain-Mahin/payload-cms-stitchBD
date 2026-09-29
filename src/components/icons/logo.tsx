import clsx from 'clsx'
import React from 'react'

export function LogoIcon({ className, ...props }: React.ComponentProps<'img'>) {
  return (
    <img
      {...props}
      src="/public/media/logoBD.png"
      alt="Stitch logo"
      className={clsx('h-auto w-6 object-contain', className)}
    />
  )
}
