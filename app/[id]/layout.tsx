import Header from "@/app/components/header"
import Footer from "../components/footer"

export default function Layout({children} : Readonly<{children: React.ReactNode}>) {

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}