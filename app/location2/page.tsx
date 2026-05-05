"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { mainLocationName } from "@/lib/company";
import { phoneDisplay, phoneHref } from "@/lib/contact";
import { buildLocationLinks } from "@/lib/location-links";
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

export default function LocationPage() {
  const locationLinks = buildLocationLinks("Chandler's Ford");
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Rental van ready for collection in Chandler's Ford" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Hire vehicle on a road through Chandler's Ford" };
  const faqs = [
    { question: "Can I arrange vehicle hire in Chandler's Ford?", answer: "Yes, we can arrange vehicle hire for Chandler's Ford with options suited to personal and business use, subject to availability and booking details." },
    { question: "Do you offer van hire for house moves in Chandler's Ford?", answer: "Yes, our range also includes cars, minibuses and trucks for different types of personal and business use." },
    { question: "Can businesses in Chandler's Ford hire vehicles on a flexible basis?", answer: "We offer flexible rental periods, so you can ask about short-term or longer-term hire depending on your plans." },
    { question: "Is delivery and collection available for Chandler's Ford bookings?", answer: "Yes, local business customers can hire vehicles for deliveries, project work, temporary cover and other transport requirements." },
    { question: "Can you help me choose the right hire vehicle?", answer: "Yes, we can talk through the load, route, passenger numbers or job type and suggest a practical option." },
  ];
  const trustCards = [
    { title: "Choice that fits the job", description: "A broad range of vehicles for personal hire, trade work, events and business support.", icon: ShieldCheck },
    { title: "Helpful service", description: "Straightforward booking, practical advice and support from enquiry through to return.", icon: Star },
    { title: "Convenient arrangements", description: "Flexible hire periods with delivery and collection available across a wide service area.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for removals, bulky items, local delivery rounds and trade transport." },
    { value: "Van Hire", label: "Cars for commuting cover, family use and straightforward everyday travel." },
    { value: "Minibus Hire", label: "Minibuses for school groups, clubs, events and shared trips." },
    { value: "Truck Hire", label: "Trucks for larger materials, equipment transport and heavier jobs." },
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
    { icon: BadgePoundSterling, title: "More suitable vehicle options", description: "A choice of vans, cars, minibuses and trucks means you can match the vehicle to the journey rather than compromise.", detail: "That is useful for everything from local moves to business deliveries and group travel." },
    { icon: Clock3, title: "Flexible around your schedule", description: "Flexible booking helps when plans depend on property access, job timings or weekend travel.", detail: "For Chandler's Ford customers, that means a practical vehicle for a one-day job, a weekend booking or a longer rental when plans change." },
    { icon: CheckCircle2, title: "A simpler rental experience", description: "Maintained vehicles and practical support help reduce stress on the day of hire.", detail: "Free delivery and collection adds convenience when you are trying to keep the day organised." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Vehicle hire in Chandler's Ford made simple"}</h1>
                <p className="text-xl text-white">{"Flexible van, car, minibus and truck hire in Chandler's Ford with practical booking support, maintained vehicles and service that fits around the job."}</p>
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
                  {"Practical booking support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Straightforward booking for Chandler's Ford hire"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking vehicle hire in Chandler's Ford should be simple. We help arrange the right vehicle, suitable hire length and convenient delivery or collection so you can get on with the job."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Maintained vehicles"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Self-drive hire made easy"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable hire service for Chandler's Ford"}</h2>
            <p className="text-lg text-muted-foreground">{"Chandler's Ford customers choose us for maintained vehicles, sensible booking support and hire options that work for everyday transport needs."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="flex h-full flex-col border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex min-h-[5.5rem] w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">{item.title}</h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire categories"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle options available in Chandler's Ford"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From local errands to longer trips from Chandler's Ford, we offer vehicle types that cover household, commercial and group travel needs."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"About our local service"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire that works for Chandler's Ford"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire supports drivers in Chandler's Ford with a broad choice of rental vehicles for personal and business use. Whether you are moving stock, collecting furniture or arranging transport for a busy week, we focus on practical solutions."}</p>
            <p>{"Chandler's Ford is well placed for journeys towards Southampton, Winchester and the M3 and M27 corridors, which makes flexible self-drive hire especially useful. We help customers choose vehicles that are easy to live with on local roads and capable enough for longer runs."}</p>
            <p>{"Our service in Chandler's Ford is built around maintained vehicles, clear booking support and rental periods that work around real schedules. That suits everything from short domestic jobs to temporary business cover when extra transport is needed."}</p>
            <p>{"From vans and cars to minibuses and trucks, we keep the process practical and dependable. Chandler's Ford customers often need transport without unnecessary delays, and that is exactly the kind of hire service we aim to provide."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"What makes it useful"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Chandler's Ford customers book with us"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Practical vehicle hire in Chandler's Ford with flexible terms, dependable support and options for home and business use."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Areas around Chandler's Ford we also cover"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Chandler's Ford is not the only area you are looking at, we also support surrounding Hampshire locations with the same practical hire service."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Vehicles for everyday and specialist use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical vehicles for short local jobs, weekends away, business travel and larger transport needs without making the process complicated."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well-maintained fleet"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our hire vehicles are prepared to a good standard and suited to drivers who want dependable transport for planned work, moving days or extra capacity."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible rental options"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"We can help arrange hire periods that suit anything from a single day to a longer booking, with collection and delivery support where available."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving and route tips for Chandler's Ford"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning vehicle hire in and around Chandler's Ford, from key routes to nearby refuelling options."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Chandler's Ford is a practical base for local vehicle hire because you can move easily between residential roads and the wider Eastleigh area without a complicated start to the journey. Around the centre, routes such as School Lane and Oakmount Road are useful for local collections, small removals and everyday loading, while Leigh Road gives a clearer onward link when you need to keep moving."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are heading out with a larger van, minibus or truck, it helps to plan around busier periods on the local network. The Woodside Avenue and Woodside Ave Roundabout area can be a key route for joining up wider journeys, so giving yourself a little extra time makes collections and drop-offs much easier, especially when you are carrying furniture, stock or event equipment."}</p>
            <p className="text-base leading-8 text-slate-600">{"For fuel and quick checks before returning a hire vehicle, there are convenient options nearby. The Asda fuel station on Bournemouth Road is useful for straightforward refuelling, and Eastleigh Service Station on Southampton Road can also be a practical stop if your route takes you further into the Eastleigh side of the network. That makes it easier to top up and return the vehicle without adding a long detour."}</p>
            <p className="text-base leading-8 text-slate-600">{"Chandler's Ford hire is often a sensible choice for home moves, business runs, hotel transfers and short-notice transport jobs around the local area. If you are collecting visitors near places such as the Holiday Inn, Village Hotel Club or Premier Inn, or moving items between homes and commercial addresses, choosing the right size vehicle from the start usually saves time, repeat trips and unnecessary hassle."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Chandler's Ford hire FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Helpful answers for Chandler's Ford customers"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common questions about booking vans, cars, minibuses and trucks in Chandler's Ford."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Book your Chandler's Ford vehicle hire"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Arrange practical vehicle hire in Chandler's Ford with support for moves, deliveries, family travel and business transport."}</p>
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




