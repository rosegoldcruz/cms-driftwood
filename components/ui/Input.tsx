import * as React from 'react'
import { cn } from '@/lib/utils'

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<'input'>>(({ className, ...props }, ref) => {
  return (
    <input
      ref={ref}
      className={cn(
        'flex h-10 w-full rounded-md border border-[#2a3a53] bg-[#1a2638] px-3 py-2 text-sm text-[#efe8df] placeholder:text-[#7f8fa7] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E07A2F]/70',
        className,
      )}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
