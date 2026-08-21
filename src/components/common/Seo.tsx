import { Helmet } from 'react-helmet-async'

interface SeoProps {
    title: string
    description: string
    canonical?: string
    image?: string
}

const Seo = ({
    title,
    description,
    canonical = '/',
    image = 'https://rohitjangid.vercel.app/og-image.png',
}: SeoProps) => {
    const siteUrl = 'https://rohitjangid.vercel.app'

    const canonicalUrl = `${siteUrl}${canonical}`

    const personSchema = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Rohit Jangid',
        url: siteUrl,
        jobTitle: 'Frontend Developer',
        description:
            'Frontend Developer specializing in Angular, React.js, Next.js, React Native, TypeScript, and JavaScript.',
        image,
        sameAs: [
            'https://www.linkedin.com/in/frontend-rohit-jangid/',
            'https://github.com/Rohitjangid17',
        ],
    }

    return (
        <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="author" content="Rohit Jangid" />
            <meta name="robots" content="index, follow" />
            <link rel="canonical" href={canonicalUrl} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:site_name" content="Rohit Jangid Portfolio" />
            <meta property="og:image" content={image} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={image} />
            <script type="application/ld+json">
                {JSON.stringify(personSchema)}
            </script>
        </Helmet>
    )
}

export default Seo