import Container from '@/app/_components/Container'
import React from 'react'
import NewsletterForm from './_component/NewsletterForm'

type Props = {}

const page = (props: Props) => {
  return (
    <Container>
        <h1 className="text-3xl font-bold mb-4">Join the Newsletter</h1>

<p className="mb-4">
  One email. Once a week. The best content from the blog — plus early access, bonus thoughts, and useful tools.
</p>

<ul className="list-disc pl-5 mb-4">
  <li>✔️ No spam, ever</li>
  <li>📬 Only the good stuff</li>
  <li>🧠 Unsubscribe anytime</li>
</ul>

<NewsletterForm className='max-w-[400px]' />

<p className="text-sm text-muted-foreground mt-2">
  You’ll get the first edition as soon as the next post goes live.
</p>

    </Container>
  )
}

export default page