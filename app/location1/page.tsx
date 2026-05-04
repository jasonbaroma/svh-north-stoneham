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
  const locationLinks = buildLocationLinks("Bishopstoke");
  const heroImage = { src: "/images/location1-image1.jpeg", alt: "White rental van driving on a quiet suburban road in the Bishopstoke area" };
  const supportImage = { src: "/images/location1-image2.jpeg", alt: "Two adults loading boxes into a hired vehicle on a residential driveway in Bishopstoke" };
  const faqs = [
    { question: "Do you offer vehicle hire in Bishopstoke?", answer: "Yes, we can arrange vehicle hire for customers in Bishopstoke, with practical options for local collection or delivery depending on the booking." },
    { question: "What are the most common reasons for hiring a vehicle in Bishopstoke?", answer: "Many Bishopstoke customers hire for home moves, furniture collection, business deliveries, day trips, and temporary transport when their own vehicle is unavailable." },
    { question: "Can I book a larger van for a move in Bishopstoke?", answer: "We can often support business bookings, including practical vehicles for deliveries, temporary cover and site work." },
    { question: "Is Bishopstoke covered for short-term and longer vehicle hire?", answer: "Minibus hire is available for group travel, subject to licence checks and vehicle availability." },
    { question: "How do I choose the right vehicle size?", answer: "The best choice depends on your route, load or passenger numbers, and we can help you decide before booking." },
  ];
  const trustCards = [
    { title: "Maintained rental fleet", description: "Vehicles are prepared for real use, whether you need something compact, spacious or built for heavier work.", icon: ShieldCheck },
    { title: "Practical booking advice", description: "We help Fair Oak customers find a sensible vehicle for moving, deliveries, travel and temporary cover.", icon: Star },
    { title: "Convenient local service", description: "Free delivery and collection helps reduce extra running around before and after your hire.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for removals, local deliveries, furniture runs and practical day-to-day jobs." },
    { value: "Van Hire", label: "Cars for commuting, visiting family, appointments and flexible everyday travel." },
    { value: "Minibus Hire", label: "Minibuses for group plans, school-related travel, events and shared transport." },
    { value: "Truck Hire", label: "Trucks for larger loads, site support and heavier transport requirements." },
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
    { icon: BadgePoundSterling, title: "Choice that fits the job", description: "A broad rental range means you can book for moving, work, errands or group travel without overcomplicating it.", detail: "That includes practical van hire, everyday cars, minibuses for shared travel and trucks for heavier jobs." },
    { icon: Clock3, title: "Straightforward flexibility", description: "Flexible booking makes it easier to hire around home moves, project work and short-term business demand.", detail: "If plans change, having a practical team to talk to can make the process more manageable." },
    { icon: CheckCircle2, title: "Convenient local support", description: "Free delivery and collection helps save time when you are balancing work, family life or a busy moving day.", detail: "It is a useful option if you would rather focus on the journey ahead than extra local travel arrangements." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable Vehicle Hire in Bishopstoke"}</h1>
                <p className="text-xl text-white">{"Book vans, cars, minibuses and trucks for local moves, business use and everyday transport with flexible support around Fair Oak."}</p>
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
                  {"Fair Oak bookings made easy"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle hire for Fair Oak customers"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"If you need a vehicle in Fair Oak, we keep the process practical from the start. Let us know the vehicle type, dates and intended use, and we will help you arrange a suitable self-drive hire with clear booking guidance."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Delivered to suit your plans"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Short and longer hire options"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable choice for Fair Oak vehicle hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Customers in Fair Oak rely on us for straightforward booking, dependable vehicles and practical support that fits real transport needs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hire options in Fair Oak"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"From small trips to larger transport jobs"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Fair Oak customers can book from a broad rental range depending on the journey, load size or number of passengers."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Dependable self-drive hire in Fair Oak"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Fair Oak is a location where the right hire vehicle can save a lot of time. Whether you are moving between neighbourhoods, collecting materials, covering a business job or planning a group outing, having access to a suitable vehicle makes the day more manageable."}</p>
            <p>{"Southern Van Hire supports Fair Oak with a broad range of self-drive options. Van hire is especially useful for furniture pickups, house moves and trade work, while car hire, minibus hire and truck hire cover everything from day trips to heavier transport requirements."}</p>
            <p>{"Because Fair Oak sits close to Eastleigh, Bishopstoke and the wider Southampton road network, many hires involve a mix of local roads and faster routes. A maintained vehicle and a booking that fits your schedule can make those journeys more straightforward."}</p>
            <p>{"We aim to keep things clear rather than overcomplicated. That means practical advice, dependable vehicles and service built around real local travel needs."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why hire here"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Vehicle hire that suits everyday Fair Oak journeys"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful hire advantages for residents, local businesses and anyone needing dependable transport around Fair Oak."}</p>
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
                  <Image
                    src={vehicle.src}
                    alt={vehicle.alt}
                    fill
                    sizes="(min-width: 1280px) 25vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Nearby areas around Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Fair Oak is not the most convenient pickup point for your plans, we also cover other nearby areas across this part of Hampshire."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Useful for busy schedules"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"A suitable rental vehicle can make local jobs around Fair Oak more efficient, especially when time and access matter."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Different vehicle types available"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Cars, vans, minibuses and trucks give you practical options depending on whether the priority is passengers, load space or heavier carrying ability."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Less hassle on the day"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Delivery and collection helps keep hiring convenient if you are juggling a move, project or business booking in Fair Oak."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving around Bishopstoke"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful local driving notes for planning a smoother hire in and around Bishopstoke."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Bishopstoke works well for local vehicle hire because it gives you straightforward access into Eastleigh while keeping you close to residential streets where home moves, furniture collection and short business runs often start. If you are planning a collection or drop-off, it helps to allow a little extra time around school-run periods and busier town-centre traffic nearby."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer drives, many customers use Bishopstoke as a practical starting point for journeys across the wider Hampshire area. The local road layout is generally manageable for cars, vans and other hire vehicles, but if you are taking a larger vehicle it is worth planning your route before setting off so you can avoid unnecessary turns through tighter residential sections."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you need to top up before returning, there is an Esso around 0.8 miles away, which can be useful for keeping the end of your hire simple. There is also Eastleigh Service Station roughly 1.3 miles from Bishopstoke, giving you a handy stop point if you want fuel and a quick break before heading back or continuing your journey."}</p>
            <p className="text-base leading-8 text-slate-600">{"Bishopstoke is a sensible base for everyday transport jobs such as moving between homes, collecting bulky purchases or covering temporary business vehicle needs. Because the area sits close to Eastleigh, it is also useful for people who want a hire vehicle without dealing with the extra congestion that can come with starting deeper inside a busier urban centre."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Fair Oak FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Questions about hiring in Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Common booking questions for customers arranging vehicle hire in Fair Oak."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Looking for vehicle hire in Fair Oak?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Ask about availability for vans, cars, minibuses and trucks in Fair Oak and we will help you arrange the right option."}</p>
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




