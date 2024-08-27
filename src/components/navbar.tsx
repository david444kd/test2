export const Navbar = () => {
  return (
    <div className="flex sticky z-50 top-0 bg-white justify-between sm:border-b-1 sm:border-black">
        <a className="lg:p-14 md:p-10 sm:p-5" href="#1">Table of contents</a>
        <a className="lg:p-14 md:p-10 sm:p-5" href="#2">Problems</a>
        <a className="lg:p-14 md:p-10 sm:p-5" href="#3">Solutions</a>
        <a className="lg:p-14 md:p-10 sm:p-5" href="#4">Tools</a>
        <a className="lg:p-14 md:p-10 sm:p-5" href="#5">Pricing</a>
        <a className="lg:p-14 md:p-10 sm:p-5" href="#6">Author</a>
    </div>
  )
}

export default Navbar