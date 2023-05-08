import Link from 'next/link'

export const metadata = {
    title: 'About Page',
    description: 'Commerce App About Page',
  }

const AboutPage = () => {
    return (
        <main>
            <Link href={"/"}>Navigate To the Home Page</Link>
            <div>page</div>  
      </main>
  
  )
}

export default AboutPage