import { useState } from "react"
const Tableofcontents = () => {
    const [count, setCount] = useState(false)
    const [knopka, setKnopka] = useState(true)
  return (
    <div  className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12 py-16 scroll-smooth">
        <div>
            <h2 className=" inline-flex text-blue-600 border-solid border-2 border-blue-600 px-4 py-1 rounded-full">table of contents</h2>
        </div>
        <div className="mt-8">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">Get a look at all of the content covered in the guide. Everything you need to know is inside.</h1>
        </div>
        <div className="mt-4">
            <p className="text-slate-700 text-lg">“Get Your First Client” is designed to be a complete guide for the ones who want to start freelancing. It’s a step-by-step guide that will help you to get started with freelancing. What you need to do, how to do it, and finally, how to get clients.
            </p>
        </div>

        <ol className=" mt-16 space-y-10 sm:space-y-16">
            <li>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">Getting started</h3>
                <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-3"><span>Getting started</span></li>
                    <li className="py-3"><span>First Step and Decision</span></li>
                    <li className="py-3"><span>How is The Process</span></li>
                </ol>
            </li>
            <li>
                <h3 className="text-3xl font-bold tracking-tight text-slate-900">Sources</h3>
                <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                    <li className="py-3"><span>Equipments</span></li>
                    <li className="py-3"><span>Skills</span></li>
                    <li className="py-3"><span>Tools</span></li>
                </ol>
            </li>
            {count &&
            <ol className=" mt-16 space-y-10 sm:space-y-16">
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Personal Branding</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Branding</span></li>
                        <li className="py-3"><span>Build Audience</span></li>
                        <li className="py-3"><span>Portfolio</span></li>
                        <li className="py-3"><span>Testimonials</span></li>
                    </ol>
                </li>
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Business Model</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Services</span></li>
                        <li className="py-3"><span>Pricing</span></li>
                        <li className="py-3"><span>Productized Services</span></li>
                    </ol>
                </li>
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Marketing</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Publicize</span></li>
                        <li className="py-3"><span>Be Visible</span></li>
                        <li className="py-3"><span>Content Creating</span></li>
                    </ol>
                </li>
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Tips</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Actionable Tips</span></li>
                    </ol>
                </li>
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Conclusion</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Conclusion</span></li>
                    </ol>
                </li>
                <li>
                    <h3 className="text-3xl font-bold tracking-tight text-slate-900">Tools and Templates</h3>
                    <ol className="mt-8 px-6 py-3 sm:py-7 sm:px-8 divide-y divide-slate-300 bg-slate-50 rounded-2xl">
                        <li className="py-3"><span>Proposal Template</span></li>
                        <li className="py-3"><span>Contract Template</span></li>
                        <li className="py-3"><span>Invoice Template</span></li>
                        <li className="py-3"><span>Project Management Tool</span></li>
                        <li className="py-3"><span>Customer Management Tool</span></li>
                    </ol>
                </li>
            </ol> 
            }
        </ol>
        {knopka && 
        <div className="flex justify-center mt-10">
            <button className="text-slate-900 hover:text-slate-700 font-medium" onClick={() => {
                setCount(true)
                setKnopka(false)
            }}>See more &darr;</button>
        </div>
        }
    </div>
  )
}

export default Tableofcontents