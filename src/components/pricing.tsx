import {Button} from "@nextui-org/react";
import {Card, CardBody} from "@nextui-org/react";
const Pricing = () => {
  return (
    <div id="5">
        <div className="md:mt-32 pt-16 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
          <div>
              <h2 className=" inline-flex text-blue-600 border-solid border-2 border-blue-600 px-4 py-1 rounded-full">Pricing</h2>
          </div>
          <div className="mt-8">
              <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 tracking-tight font-serif">Pick your package</h1>
          </div>
          <div className="mt-4">
              <p className="text-slate-600 text-lg max-w-xl">“Get Your First Client” is available in two different packages so you can pick the one that’s right for you.
              </p>
          </div>
      </div>
      <div className="max-w-5xl mx-auto mt-16 lg:px-6">
        <div className="grid bg-slate-50 sm:px-6 sm:pb-16 md:grid-cols-2 md:rounded-3xl md:px-8 md:pt-16 lg:p-20">
            <Card className="flex flex-col bg-slate-50 shadow-none px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12">
                <CardBody>
                    <div className="flex">
                        <p className="text-slate-500">$</p>
                        <p className="text-slate-900 text-7xl ml-1 mt-1 font-bold tracking-tight">39</p>
                    </div>
                    <h3 className="text-slate-900 font-semibold mt-7 text-lg">Just The Guide</h3>
                    <p className="text-lg text-slate-600 mt-2">The perfect starting point if you’re on a budget.</p>
                    <Button color="primary" className="bg-slate-900 hover:bg-slate-700 mt-8">
                    Get started
                    </Button>
                    <ul className="mt-8 divide-y divide-slate-200">
                    <li className="flex py-2">
                        <svg aria-hidden="true" className="flex-none w-8 h-8 fill-slate-600">
                            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                            </path>
                        </svg>
                        <p>The complete guide</p>
                    </li>
                    <li className="flex py-2">
                        <svg aria-hidden="true" className="flex-none w-8 h-8 fill-slate-600">
                            <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                            </path>
                        </svg>
                        <p>Ongoing updates</p>
                    </li>
                </ul>
                </CardBody>
            </Card>
            <Card className="flex flex-col bg-blue-600 px-4 py-16 sm:rounded-3xl sm:px-10 md:py-12 lg:px-12">
                <CardBody>
                    <div className="flex">
                        <p className="text-blue-200">$</p>
                        <p className="text-white text-7xl ml-1 mt-1 font-bold">49</p>
                        <p className="mt-1 ml-3 text-5xl text-white line-through text-opacity-90">99</p>
                    </div>
                    <h3 className="text-white font-semibold mt-7 text-lg">The Guide + Tools + Templates</h3>
                    <p className="text-lg text-white mt-2">The guide, the pre-made tools and the templates to operate.</p>
                    <Button color="primary" className="bg-white text-blue-600 hover:text-blue-700 mt-8">
                    Get started
                    </Button>
                    <ul className="mt-8 divide-y divide-white">
                        <li className="flex py-2">
                            <svg aria-hidden="true" className="flex-none w-8 h-8 fill-white">
                                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                                </path>
                            </svg>
                            <p className="text-white">The complete guide</p>
                        </li>
                        <li className="flex py-2">
                            <svg aria-hidden="true" className="flex-none w-8 h-8 fill-white">
                                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                                </path>
                            </svg>
                            <p className="text-white">Proposal, Contract, Invoice Template</p>
                        </li>
                        <li className="flex py-2">
                            <svg aria-hidden="true" className="flex-none w-8 h-8 fill-white">
                                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                                </path>
                            </svg>
                            <p className="text-white">Project Management Tool</p>
                        </li>
                        <li className="flex py-2">
                            <svg aria-hidden="true" className="flex-none w-8 h-8 fill-white">
                                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                                </path>
                            </svg>
                            <p className="text-white">Customer Management Tool</p>
                        </li>
                        <li className="flex py-2">
                            <svg aria-hidden="true" className="flex-none w-8 h-8 fill-white">
                                <path d="M11.83 15.795a1 1 0 0 0-1.66 1.114l1.66-1.114Zm9.861-4.072a1 1 0 1 0-1.382-1.446l1.382 1.446ZM14.115 21l-.83.557a1 1 0 0 0 1.784-.258L14.115 21Zm.954.3c1.29-4.11 3.539-6.63 6.622-9.577l-1.382-1.446c-3.152 3.013-5.704 5.82-7.148 10.424l1.908.598Zm-4.9-4.391 3.115 4.648 1.661-1.114-3.114-4.648-1.662 1.114Z">
                                </path>
                            </svg>
                            <p className="text-white">Ongoing updates</p>
                        </li>
                    </ul>
                </CardBody>
            </Card>
        </div>
      </div>
    </div>
  )
}

export default Pricing