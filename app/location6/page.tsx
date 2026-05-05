"use client";

import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
import { slugifyLocation } from "@/lib/utils";
import {
  BadgePoundSterling,
  CheckCircle2,
  ChevronDown,
  Clock3,
  MapPin,
  PhoneCall,
  ShieldCheck,
  Star,
  Users,
} from "lucide-react";

export const metadata = {
  alternates: {
    canonical: `/${slugifyLocation("Hedge End")}`,
  },
} satisfies Metadata;

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Hedge End");
  const heroImage = { src: "/images/location6-image1.jpeg", alt: "Rental van near Hedge End retail and road links in Hampshire" };
  const supportImage = { src: "/images/location6-image2.jpeg", alt: "Self-drive hire vehicle positioned for collection in the Hedge End area" };
  const faqs = [
    { question: "Can I hire a vehicle in Hedge End for personal use?", answer: "Yes, we provide self-drive hire for private customers as well as businesses, depending on the type of vehicle needed." },
    { question: "What are the most common reasons for hiring in Hedge End?", answer: "Yes, many bookings are made for moving house, collecting furniture, temporary transport and work-related use." },
    { question: "Will you help me decide which vehicle to book?", answer: "We can talk through the load, number of passengers or type of journey to help you choose a suitable category." },
    { question: "Is delivery or collection available around Hedge End?", answer: "In many cases, yes. Availability and timing can be discussed when you make your enquiry." },
    { question: "Can I arrange a longer-term rental in Hedge End?", answer: "Longer bookings may be possible depending on the vehicle and your requirements, so it is worth asking in advance." },
  ];
  const trustCards = [
    { title: "Prepared for reliable use", description: "Vehicles are maintained for dependable day-to-day hire and practical road use.", icon: ShieldCheck },
    { title: "A fleet with real choice", description: "Our range covers personal transport, business needs, group travel and heavier-duty jobs.", icon: Star },
    { title: "Helpful from enquiry to return", description: "We keep communication clear so customers can book with confidence and less wasted time.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Van hire for house moves, bulky collections, trade jobs and general transport needs." },
    { value: "Van Hire", label: "Car hire for temporary cover, business journeys and everyday local travel." },
    { value: "Minibus Hire", label: "Minibus hire for teams, families, clubs and event transport." },
    { value: "Truck Hire", label: "Truck hire for heavier loads and larger commercial tasks." },
  ];
  const vehicleCards = [
    { src: "/images/smallvan1.jpg", alt: "Small van hire vehicle", title: "Small Vans" },
    { src: "/images/mediumvan1.jpg", alt: "Medium van hire vehicle", title: "Medium Vans" },
    { src: "/images/largevan1.jpg", alt: "Large van hire vehicle", title: "Large Vans" },
    { src: "/images/lutonboxvan.jpg", alt: "Luton box van hire vehicle", title: "Box Van With Tail Lift" },
    { src: "/images/tippervan.jpg", alt: "Tipper van hire vehicle", title: "Tipper Van" },
    { src: "/images/dropsidevan1.jpg", alt: "Dropside van hire vehicle", title: "Dropside Van" },
    { src: "/images/12seaterminibushire.jpg", alt: "12 seater minibus hire vehicle", title: "Minibus Hire" },
    { src: "/images/7.5tonnecurtainsidehire.jpg", alt: "7.5 tonne curtainside truck hire vehicle", title: "Truck Hire" },
  ];
  const benefits = [
    { icon: BadgePoundSterling, title: "Flexible hire terms", description: "Choose a hire period that fits the job rather than paying for longer than necessary.", detail: "Useful for one-day tasks, weekend moves, event transport and longer business cover." },
    { icon: Clock3, title: "The right vehicle for the job", description: "A varied fleet means you can match the vehicle to the task more accurately.", detail: "From compact cars to larger vans, minibuses and trucks, we help keep the booking practical." },
    { icon: CheckCircle2, title: "Convenient service options", description: "Support with delivery, collection and booking guidance helps reduce avoidable hassle.", detail: "Especially useful when your schedule is tight or the hire is part of a bigger job." },
  ];

  return (
    <div className="flex min-h-screen flex-col">
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-white">
          <a href="#" className="flex items-center gap-3 text-2xl font-bold tracking-tight">
            <Image
              src="/images/SouthernVanHireLogo.png"
              alt="Southern Van Hire"
              width={208}
              height={52}
              className="h-[3.25rem] w-auto"
            />
            <span className="text-[#00B395]">{mainLocationName}</span>
          </a>
          <div className="hidden items-center gap-3 md:flex">
            <details className="group relative z-50">
              <summary className="inline-flex h-9 cursor-pointer list-none items-center justify-center gap-2 rounded-md border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-white/20">
                <MapPin className="h-4 w-4" />
                Locations
                <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="absolute right-0 top-full z-50 mt-2 w-56 overflow-hidden rounded-md border bg-white p-1 text-slate-900 shadow-lg">
                {locationLinks.map((location) => (
                  <Link key={location.href} href={location.href} className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100">
                    {location.label}
                  </Link>
                ))}
              </div>
            </details>
            <Button className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
              <a href={phoneHref} className="inline-flex items-center gap-2">
                <PhoneCall className="h-4 w-4" />
                <span>Book Now</span>
              </a>
            </Button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden pb-20 pt-32 text-white">
        <Image src={heroImage.src} alt={heroImage.alt} fill className="object-cover" sizes="100vw" priority />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle Hire in Hedge End"}</h1>
                <p className="text-xl text-white">{"Practical van, car, minibus and truck hire for Hedge End with flexible booking and dependable self-drive options."}</p>
                <Button size="lg" className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <Image src={supportImage.src} alt={supportImage.alt} fill className="object-cover" sizes="420px" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative -mt-12 px-6 pb-12">
        <div className="mx-auto max-w-4xl">
          <Card className="overflow-hidden border border-[#00B395]/15 bg-[#eefcf8] shadow-[0_24px_60px_-24px_rgba(0,179,149,0.35)]">
            <div className="flex flex-col gap-6 p-8 md:p-10 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#00B395]/25 bg-white px-3 py-1 text-sm font-medium text-[#00B395]">
                  <PhoneCall className="h-4 w-4" />
                  {"Easy booking support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle booking for Hedge End"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking a hire vehicle in Hedge End should be clear and workable. We help customers compare vehicle types, arrange suitable rental periods and organise practical collection or delivery options where available."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hire options"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Well-maintained vehicles"}
                  </div>
                </div>
              </div>
              <Button size="lg" className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto" asChild>
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">{"A dependable choice for Hedge End hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Hedge End want a hire company that is easy to deal with and ready with practical vehicle options. That is exactly the kind of service we aim to provide."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395]">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-[#00B395]">{item.title}</h3>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Our hire range"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicles available to hire in Hedge End"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Hedge End customers can book the type of vehicle that suits the job, from smaller everyday options through to larger load-carrying vehicles."}</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#00B395] text-white hover:bg-[#00997f]" asChild>
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featureStats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]">
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local hire support"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Self-drive vehicle hire that suits Hedge End customers"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Hedge End is a busy and well-connected area, making it a sensible place to arrange vehicle hire for both local jobs and longer journeys. Whether you need a van for furniture collection, a car for temporary transport, a minibus for group travel or a truck for heavier work, we offer straightforward self-drive options."}</p>
            <p>{"For customers in Hedge End, that means access to a broad choice of self-drive vehicles for everyday and specialist jobs alike. From family cars and practical vans to minibuses and larger trucks, we focus on supplying the right hire vehicle for the route, load and rental period."}</p>
            <p>{"Hedge End is a convenient base for travel across South Hampshire, so bookings often need to fit around work schedules, retail collections and time-sensitive deliveries. Southern Van Hire offers flexible hire periods, maintained vehicles and helpful collection arrangements to keep transport simple in Hedge End."}</p>
            <p>{"Hedge End customers often need transport that fits around busy schedules. That is why we keep the process service-led and adaptable, whether the hire is for a planned weekend job or a more urgent business requirement."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Useful reasons to book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"What makes our Hedge End hire service practical"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"A practical rental service matters just as much as the vehicle itself. These are some of the reasons customers in Hedge End choose us."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((item) => (
              <div key={item.title} className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="flex-1 text-base leading-7 text-slate-600">{item.description}</p>
                <p className="mt-6 text-base leading-7 text-slate-600">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div key={vehicle.title} className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={vehicle.src} alt={vehicle.alt} fill sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
                </div>
                <div className="flex flex-1 flex-col items-center p-6 text-center">
                  <h3 className="min-h-[4rem] text-2xl font-bold tracking-tight text-slate-950">{vehicle.title}</h3>
                  <a href={phoneHref} className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]">
                    <PhoneCall className="h-4 w-4" />
                    <span>Reserve Now</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Nearby Locations"}</p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"More locations near Hedge End"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"We support Hedge End as well as other nearby Hampshire towns, giving customers a practical choice of local service areas."}</p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link key={location.href} href={location.href} className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10">
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Options for different journeys"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our vehicle range covers personal, commercial and group travel requirements in one straightforward hire service."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful rental flexibility"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible booking helps whether you need a vehicle for a quick task, planned trip or temporary replacement."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Service that stays practical"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We aim to keep every booking practical, with maintained vehicles and support that focuses on what you actually need."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Hedge End"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for getting the most from a hire vehicle in and around Hedge End."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Hedge End works well for local and regional vehicle hire because you can get moving quickly without battling deep city traffic straight away. Around the centre, Upper Northam Road, Lower Northam Road and Saint John's Road are the main practical routes to plan around, especially if you are collecting furniture, making business calls or heading out with a larger van."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring for shopping collection, house moves or short delivery runs, it helps to think about timing on the B3033 and B3036 corridors as these roads can feel busier around school runs and commuter periods. Wildern Lane and Turnpike Way are also useful local links, but drivers in longer vehicles should allow a little extra time for roundabouts, lane choices and retail traffic."}</p>
            <p className="text-base leading-8 text-slate-600">{"For fuel planning, there is a Sainsbury's petrol station nearby in Hedge End, which is convenient for topping up before returning a hire vehicle. If your journey starts earlier or finishes later across the wider area, other fuel options can usually be found toward Eastleigh and Southampton, so it is easy to keep refuelling simple without adding a long detour."}</p>
            <p className="text-base leading-8 text-slate-600">{"Hedge End is also a practical base if your trip includes local hotels, event travel or business visits. The area around Botleigh Road and the wider Utilita Bowl area can make a useful waypoint, and for drivers wanting a short pause before continuing, a nearby service stop such as Broad Oak Service Station can help break up the journey. For most bookings here, the key is choosing the right size vehicle and allowing a little extra room for retail and suburban traffic patterns."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Questions people ask"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hedge End hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Useful answers for customers arranging self-drive vehicle hire in Hedge End."}</p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details key={item.question} className="group border-b border-slate-200 last:border-b-0" open={index === 0}>
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">{item.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Hedge End hire vehicle"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to move, how many people are travelling or how long the hire is for, and we will help you find a suitable option in Hedge End."}</p>
          <Button size="lg" className="bg-white text-[#00B395] hover:bg-gray-100" asChild>
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer id="contact" className="border-t bg-gray-900 px-6 py-12 text-gray-400">
        <div className="mx-auto flex max-w-6xl flex-col items-center text-center">
          <Image
            src="/images/SouthernVanHireLogo.png"
            alt="Southern Van Hire"
            width={286}
            height={72}
            className="h-[4.55rem] w-auto"
          />
          <div className="flex items-center gap-3">
            <h4 className="text-2xl font-bold text-[#00B395]">{mainLocationName}</h4>
          </div>
          <p className="mt-4 max-w-md text-sm">{phoneDisplay}</p>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} SVH {mainLocationName}. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}




