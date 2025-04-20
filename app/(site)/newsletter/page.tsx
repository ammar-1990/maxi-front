import Container from '@/app/_components/Container'
import React from 'react'
import NewsletterForm from './_component/NewsletterForm'
import Breadcrumbs from '@/app/_components/BreadCrumps'
import { Mail, ShieldCheck, Brain } from "lucide-react";
import { Metadata } from 'next';
import { BASE_URL } from '@/lib/Types';


export const metadata: Metadata = {
  title: 'Newsletter | MAXI',
  description:
    'Join the MAXI newsletter to get fresh blogs and videos delivered weekly — crafted to inform, inspire, and entertain.',
  alternates: {
    canonical: `https://${BASE_URL}/newsletter`,
  },
  openGraph: {
    title: 'Subscribe to the MAXI Newsletter',
    description:
      'Get handpicked articles, visuals, and video highlights from the world of tech, philosophy, wellness, and beyond — straight to your inbox.',
    url: `https://${BASE_URL}/newsletter`,
    images: [
      {
        url: `https://themaxiworld.com/maxi-seo.png`,
        width: 1200,
        height: 630,
        alt: 'MAXI Hero',
      },
    ],
    siteName: 'MAXI',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Subscribe to the MAXI Newsletter',
    description:
      'Fresh blogs and curated content, every week — from AI and health to spirituality and stories.',
      images: [
        {
          url: `https://themaxiworld.com/maxi-seo.png`,
          width: 1200,
          height: 630,
          alt: 'MAXI Hero',
        },
      ],
  },
  robots: {
    index: true,
    follow: true,
  },
};


const features = [
  {
    title: "No spam, ever",
    icon: ShieldCheck,
  },
  {
    title: "Only the good stuff",
    icon: Mail,
  },
  {
    title: "Unsubscribe anytime",
    icon: Brain,
  },
];

type Props = {}

const page = (props: Props) => {
  return (
    <Container className='p-3'>
         <Breadcrumbs
         className='mb-8'
                  items={[{title:'Home',href:'/'},{title:'Newsletter'}]}
                  />
        <h1 className="text-3xl font-bold mb-4">Join the Newsletter</h1>

<p className="mb-4">
  One email. Once a week. The best content from the blog — plus early access, bonus thoughts, and useful tools.
</p>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
  {features.map((feature, idx) => {
    const Icon = feature.icon;
    return (
      <div
        key={idx}
        className="group flex flex-col items-center p-5 rounded-2xl border bg-white   text-center transition-transform duration-200 hover:scale-[1.03] "
      >
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-site-primary/10 text-site-primary mb-3">
          <Icon className="w-6 h-6" />
        </div>
        <p className="text-base font-medium text-gray-800 group-hover:text-site-primary">
          {feature.title}
        </p>
      </div>
    );
  })}
</div>



<div className="bg-gray-50 p-6 rounded-xl shadow-inner mt-8 max-w-xl">
  <NewsletterForm className="max-w-[400px]" />
  <p className="text-sm text-muted-foreground mt-2">
    You’ll get the first edition as soon as the next post goes live.
  </p>
</div>

    </Container>
  )
}

export default page