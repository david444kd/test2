import {User} from "@nextui-org/react";
const Problems = () => {
  return (
    <div>
      <div className="bg-slate-100 w-full">
          <div className="flex sm:justify-center sm:items-center sm:flex-col py-32 px-96">
            <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <p className="text-slate-900 mt-10 text-4xl tracking-tight">“This is amazing... Such an incredible guide, very detailed and holistic. I wish I had it when I was getting started with freelancing”</p>
            <User  
            className="mt-10 w-3/4" 
            name="Ayush Chaturvedi"
            description="Indie Creator"
            avatarProps={{
              src: "https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fayush.4d3df2d5.jpeg&w=828&q=75"
            }}
          />
        </div>
      </div>
      <div className="mt-32 mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-4xl lg:px-12">
          <div>
              <h2 className=" inline-flex text-blue-600 border-solid border-2 border-blue-600 px-4 py-1 rounded-full">Problems</h2>
          </div>
          <div className="mt-8">
              <h1 className="text-4xl font-bold text-slate-900 tracking-tight font-serif">Freelancing is not a walk in the park. It’s hard to get started and even harder to get clients.</h1>
          </div>
          <div className="mt-4">
              <p className="text-slate-700 text-lg">Most freelancers struggle at the beginning. They don’t know how to get started, how to get clients, and how to make money. Most people think that successful freelancers get that with luck. But it’s not. It’s about working with the system and the correct process. And that’s what I want to help you with.
              </p>
          </div>
      </div>
      <div className="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:max-w-7xl lg:px-8 mt-16">
          <p className="mt-8 text-xl font-bold tracking-tight text-slate-900">That’s ok if you feel;</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-8">
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">01</h3>
              <h2 className="text-slate-900 font-medium">Overwhelming</h2>
              <p className="mt-2 text-sm text-slate-600">You tried different strategies and felt overwhelmed by the work you had to do, but you got no clients.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">02</h3>
              <h2 className="text-slate-900 font-medium">Unsure</h2>
              <p className="mt-2 text-sm text-slate-600">You want to start freelancing, but you are unsure about the process and how to get started.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">03</h3>
              <h2 className="text-slate-900 font-medium">Lost in Tools</h2>
              <p className="mt-2 text-sm text-slate-600">You tried different tools for starting but you are still not sure how to use them effectively.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">04</h3>
              <h2 className="text-slate-900 font-medium">Feel Alone</h2>
              <p className="mt-2 text-sm text-slate-600">You think you are the only one struggling with the process of becoming a freelancer and you feel alone.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">05</h3>
              <h2 className="text-slate-900 font-medium">Worried</h2>
              <p className="mt-2 text-sm text-slate-600">You are worried about the financial aspect of freelancing and be failed about starting a new life.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">06</h3>
              <h2 className="text-slate-900 font-medium">Nervous</h2>
              <p className="mt-2 text-sm text-slate-600">You are nervous about failing on your path and not being able to succeed as a freelancer.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">07</h3>
              <h2 className="text-slate-900 font-medium">Burnt out</h2>
              <p className="mt-2 text-sm text-slate-600">You are burnt out from dealing with too many things, and you want to find a way to get back on track.</p>
            </div>
            <div className="mt-8">
              <h3 className="text-slate-500 font-mono mb-2 text-sm">08</h3>
              <h2 className="text-slate-900 font-medium">Stressed</h2>
              <p className="mt-2 text-sm text-slate-600">You feel stressed about not having a plan and not knowing what to do next for a successful business.</p>
            </div>
          </div>
      </div>
      <div className="bg-slate-100 w-full mt-40">
          <div className="flex sm:justify-center sm:items-center sm:flex-col py-32 px-96">
            <div>&#9733; &#9733; &#9733; &#9733; &#9733;</div>
            <p className="text-slate-900 mt-10 text-4xl tracking-tight">“ I’ve been freelancing for a while, but I started way much slower than I should have. I wish I had this guide when I started. ”</p>
            <User  
            className="mt-10 w-3/4" 
            name="Ukeme Booker"
            description="Freelance UI/UX Designer"
            avatarProps={{
              src: "https://getyourfirstclient.freelancerpath.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.d51dcef5.png&w=256&q=75"
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default Problems