import Container from '@/app/_components/Container'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <Container className='min-h-[70vh]'>
        <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>

<p className="mb-4">
  Have feedback, a question, or want to collaborate? I’d love to hear from you.
</p>

<p className="mb-4">
  Reach me anytime at <a href="mailto:your@email.com" className="underline text-primary">your@email.com</a>
</p>

<p className="text-muted-foreground text-sm">
  I usually reply within 1–2 days. Looking forward to connecting.
</p>

    </Container>
  )
}

export default page