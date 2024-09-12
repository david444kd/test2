const Tools = () => {
  return (
    <div className="mb-16 section" id="Tools and Templates">
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
        <div>
          <h2 className=" inline-flex text-blue-600 border-solid border-2 border-blue-600 px-4 py-1 rounded-full">
            Tools and Templates
          </h2>
        </div>
        <div className="mt-8">
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight font-serif">
            Pre-made tools and templates to help you get started
          </h1>
        </div>
        <div className="mt-4">
          <p className="text-slate-700 text-lg">
            I created a few tools and templates to help you get started
            freelancing.
          </p>
        </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-8">
          <div className="mt-8">
            <div></div>
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproposal.223863b7.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">01</h3>
            <h2 className="text-slate-900 font-medium">Proposal Template</h2>
            <p className="mt-2 text-sm text-slate-600">
              You tried different strategies and felt overwhelmed by the work
              you had to do, but you got no clients.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcontract.1b086f9c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">02</h3>
            <h2 className="text-slate-900 font-medium">Contract Template</h2>
            <p className="mt-2 text-sm text-slate-600">
              You want to start freelancing, but you are unsure about the
              process and how to get started.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Finvoice.52baa94c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">03</h3>
            <h2 className="text-slate-900 font-medium">
              Invoice Management System and Invoice Template
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              You tried different tools for starting but you are still not sure
              how to use them effectively.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fproject.841bf686.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">04</h3>
            <h2 className="text-slate-900 font-medium">
              Project Management System
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              You think you are the only one struggling with the process of
              becoming a freelancer and you feel alone.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcustomer.b32762bd.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">05</h3>
            <h2 className="text-slate-900 font-medium">
              Customer Management System - a basic CRM
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              You are worried about the financial aspect of freelancing and be
              failed about starting a new life.
            </p>
          </div>
          <div className="mt-8">
            <img
              className="shadow-lg rounded-xl"
              src="https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fongoing.5c6d364c.png&w=828&q=75"
              alt=""
            />
            <h3 className="text-slate-500 font-mono mb-2 text-sm mt-8">06</h3>
            <h2 className="text-slate-900 font-medium">
              Ongoing Support and New Tools
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              You are nervous about failing on your path and not being able to
              succeed as a freelancer.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;
