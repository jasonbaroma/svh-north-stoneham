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
  const locationLinks = buildLocationLinks("Fair Oak");
  const heroImage = { src: "/images/location3-image1.jpeg", alt: "Rental van parked on a residential road in Fair Oak" };
  const supportImage = { src: "/images/location3-image2.jpeg", alt: "Hire vehicle travelling through Fair Oak village area" };
  const faqs = [
    { question: "Do you offer van hire in Fair Oak for moving and collection jobs?", answer: "Yes, we can help with van hire in Fair Oak for local moves, furniture pickups, deliveries and other self-drive needs, depending on availability." },
    { question: "Can I hire more than just a van?", answer: "Yes, we offer more than van hire, including cars, minibuses and trucks for different personal and business uses." },
    { question: "Can I book a minibus in Fair Oak for group travel?", answer: "In many cases, yes. Let us know your timescales and we will advise on the most suitable booking arrangement." },
    { question: "What licence do I need to hire a vehicle?", answer: "A standard driving licence is often enough for many vehicles, but some larger categories have extra requirements." },
    { question: "Can I book a vehicle for a longer period?", answer: "Yes, longer bookings can often be arranged for customers who need a vehicle for extended work or temporary transport cover." },
  ];
  const trustCards = [
    { title: "More than just van hire", description: "A practical mix of vans, cars, minibuses and trucks from one provider.", icon: ShieldCheck },
    { title: "Maintained and ready", description: "Vehicles prepared for reliable day-to-day use, local driving and longer journeys.", icon: Star },
    { title: "Built around real hire needs", description: "Useful support for private customers, trades, firms and event organisers.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Practical vans for moving, deliveries, trade work and bulky collections." },
    { value: "Van Hire", label: "Flexible car hire for everyday travel, temporary replacement use and planned trips." },
    { value: "Minibus Hire", label: "Minibuses for group outings, events, airport runs and team travel." },
    { value: "Truck Hire", label: "Larger vehicles for commercial transport, heavier loads and specialist business needs." },
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
    { icon: BadgePoundSterling, title: "Useful vehicle choice", description: "Book a vehicle that suits a house move, delivery run, business trip or group journey.", detail: "From compact cars to larger vans, minibuses and trucks, the range is designed to cover everyday transport needs and more demanding jobs." },
    { icon: Clock3, title: "Flexible booking periods", description: "Hire terms can be arranged around short jobs, planned weekends or longer periods.", detail: "That helps if your plans change, your project overruns or you need extra time without starting from scratch." },
    { icon: CheckCircle2, title: "Dependable to drive", description: "Vehicles are prepared with reliability and day-to-day usability in mind.", detail: "In Fair Oak, that is useful for everything from local moving jobs to longer journeys across Hampshire and beyond." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Fair Oak vehicle hire without the hassle"}</h1>
                <p className="text-xl text-white">{"Flexible van, car, minibus and truck hire in Fair Oak with maintained vehicles, straightforward booking and support for personal and business use."}</p>
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
                  {"Easy local booking support"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple booking for Fair Oak vehicle hire"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"We make vehicle hire in Fair Oak straightforward, with practical advice on vehicle size, flexible hire periods and convenient arrangements for collection or delivery."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection available"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hire periods"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A trusted choice for Fair Oak hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Fair Oak customers rely on us for practical advice, maintained vehicles and rental flexibility that suits real transport jobs."}</p>
          </div>
          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {trustCards.map((item) => (
              <Card key={item.title} className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]">
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Hire vehicles available in Fair Oak"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Our Fair Oak hire options cover domestic, commercial and group travel needs with vehicle types that are practical for local roads and longer trips."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why book locally"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Reliable vehicle hire in Fair Oak"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical vehicle hire in Fair Oak for local residents, businesses and organisations that need reliable transport without unnecessary hassle. We cover everything from quick self-drive bookings to longer rentals."}</p>
            <p>{"In Fair Oak, customers often need a hire vehicle for jobs that do not suit a standard car, from collecting bulky furniture to handling work equipment or covering short-term transport gaps. We keep the process straightforward, with flexible rental periods and a choice of vehicles that suits both private and business use."}</p>
            <p>{"People booking in Fair Oak regularly hire vans for moving and furniture collection, cars for flexible transport, minibuses for group travel and trucks for heavier work. Our service stays focused on maintained vehicles and straightforward support."}</p>
            <p>{"Whether the hire is for home use or business use, we aim to keep Fair Oak bookings clear, practical and easy to arrange. That means flexible rental periods and vehicle options that suit the job properly."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Good reasons to book"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Why Fair Oak customers choose our hire service"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Fair Oak customers benefit from practical vehicle choice, flexible rental periods and support that suits both planned bookings and last-minute transport needs."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby places to Fair Oak we serve"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"As well as Fair Oak, we cover nearby Hampshire locations where practical vehicle hire is regularly needed for home and business journeys."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Suitable for work or personal use"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Whether you need a vehicle for personal use or extra business capacity, we can help match the hire to the journey and load."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Broad vehicle range"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our fleet includes everyday transport options and larger specialist vehicles so you do not have to compromise on space or practicality."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Simple to arrange"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Clear booking support and flexible arrangements help keep your plans moving, whether the hire is local, regional or longer term."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Fair Oak"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving notes for Fair Oak, including key local roads, fuel stop planning and practical route tips for getting around the village and beyond."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Fair Oak is a practical place to pick up a hire vehicle if you need easy local running and straightforward links into the wider Eastleigh area. The B3037 is the main route through the village, with Eastleigh Road, Mortimers Lane and Alan Drayton Way all useful for getting around without unnecessary detours."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are loading for a house move, furniture collection or business drop, it is worth planning around the busier village stretches and keeping some extra time for turns and parking. Fair Oak Road and Snakemoor Lane can be useful for local access, while Denhams Corner is a helpful point for joining onward routes once you are ready to move out of the village."}</p>
            <p className="text-base leading-8 text-slate-600">{"For fuel planning, the ESSO on Winchester Road is a handy nearby stop in Fair Oak itself, especially if you want to top up before returning your vehicle. For longer runs or later journeys, drivers heading further out also have additional petrol station options in the wider Eastleigh and Hedge End area."}</p>
            <p className="text-base leading-8 text-slate-600">{"Fair Oak hires are often used for practical local jobs as well as day trips and event travel. If you are heading out with family or a group, places such as Stoke Park Common, Stoke Park Wood and the Marwell Hotel area give you a good sense of the nearby routes, while Shears Mill is another useful local reference point when planning short drives around the village."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Helpful answers"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Fair Oak vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Useful answers about vehicle availability, booking options and common hire uses in Fair Oak."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Arrange your Fair Oak vehicle hire"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Get practical support for van, car, minibus or truck hire in Fair Oak with flexible booking to suit your journey."}</p>
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




