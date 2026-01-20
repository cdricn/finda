import Header from "@/app/components/header"
import FilterLayout from "@/app/filter/filterLayout"

export default function Layout({children} : Readonly<{children: React.ReactNode}>) {

  return (
    <>
      <Header />
      <FilterLayout />
      {children}
    </>
  )
}