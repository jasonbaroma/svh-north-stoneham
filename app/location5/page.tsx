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
  const locationLinks = buildLocationLinks("Romsey");
  const heroImage = { src: "/images/location5-image1.jpeg", alt: "Hire car and van parked near a traditional market town street in Romsey" };
  const supportImage = { src: "/images/location5-image2.jpeg", alt: "Customer checking a rental car with a staff member before setting off from Romsey" };
  const faqs = [
    { question: "Can I arrange last-minute vehicle hire in Romsey?", answer: "Yes, subject to availability we can usually help with short-notice bookings in Romsey. It is always best to book ahead if you need a specific vehicle type." },
    { question: "Do you supply hire vehicles for both personal and business use?", answer: "Yes, we hire to private customers and businesses. That includes one-off jobs, temporary cover and more regular transport needs." },
    { question: "Are longer rentals available from Romsey?", answer: "In many cases, yes. Let us know your preferred dates and vehicle type and we can advise on the most practical hire period." },
    { question: "What licence do I need to hire a vehicle?", answer: "A standard driving licence is often enough for many cars and vans, but requirements vary by vehicle. We will confirm what is needed when you book." },
    { question: "Do you offer delivery and collection in Romsey?", answer: "Yes, delivery and collection can often be arranged, which is useful if you are hiring for a move, business run or time-sensitive job." },
  ];
  const trustCards = [
    { title: "Maintained vehicles", description: "Our rental vehicles are kept in good order and prepared for practical day-to-day use.", icon: ShieldCheck },
    { title: "Flexible rental options", description: "From one-day bookings to longer hire periods, we aim to keep arrangements workable and clear.", icon: Star },
    { title: "Personal and business hire", description: "We support both private and commercial customers with straightforward advice and dependable service.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Cars for local trips, business travel and everyday driving." },
    { value: "Van Hire", label: "Vans sized for moves, collections, deliveries and trade work." },
    { value: "Minibus Hire", label: "Minibuses for group outings, club travel and event transport." },
    { value: "Truck Hire", label: "Trucks for larger loads, heavier equipment and commercial jobs." },
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
    { icon: BadgePoundSterling, title: "A fleet that covers more jobs", description: "Hiring is easier when you can choose from different vehicle types instead of forcing one option to fit every job.", detail: "That helps whether you are planning a house move, carrying equipment, arranging group travel or simply need temporary transport." },
    { icon: Clock3, title: "Useful flexibility", description: "Flexible booking periods allow you to hire for the time you actually need, not just a one-size-fits-all slot.", detail: "This can be useful for staged moves, business schedules, overnight trips and longer vehicle requirements." },
    { icon: CheckCircle2, title: "Straight answers and support", description: "A local, service-led approach helps keep the hire process clear from first enquiry through to return.", detail: "That means better support if you are planning around work, family commitments or timed collections." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Reliable vehicle hire in Romsey"}</h1>
                <p className="text-xl text-white">{"Flexible self-drive vehicle hire for home moves, business transport, group travel and day-to-day driving across Romsey and the surrounding area."}</p>
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
                  {"Flexible vehicle hire options"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Simple vehicle hire for Romsey customers"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Booking vehicle hire in Romsey should feel straightforward. We help arrange the right car, van, minibus or truck for the job, with practical rental periods and support for both private and business customers."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Flexible hire periods"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Delivery and collection available"}
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
            <h2 className="mb-4 text-4xl font-bold">{"A dependable choice for Romsey vehicle hire"}</h2>
            <p className="text-lg text-muted-foreground">{"Romsey customers choose us for practical service, a broad range of vehicles and rental support that is geared around real transport needs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Vehicle options"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Cars, vans, minibuses and trucks for Romsey hire"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"From a short local rental to a larger commercial requirement, we offer a broad vehicle range for Romsey customers who need practical transport without unnecessary hassle."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Why hire with us"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Dependable self-drive hire in and around Romsey"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Romsey is well placed for local trips, business travel and larger journeys across Hampshire, so having the right vehicle makes a real difference. Southern Van Hire offers practical rental options for everyday transport, planned moves and short-term fleet cover."}</p>
            <p>{"Our range includes compact cars, larger vans, minibuses for group travel and trucks for heavier jobs. Whether you are collecting furniture, covering a busy trading week or organising transport for an event, we keep the process clear and workable."}</p>
            <p>{"Customers in Romsey often need a hire vehicle that can handle town driving as well as quick access towards Southampton, Winchester and the M27 corridor. We help match the booking to the route, load and rental length rather than pushing a one-size-fits-all option."}</p>
            <p>{"With maintained vehicles, flexible arrangements and a service-led approach, we aim to take the hassle out of self-drive hire. That means dependable transport, practical advice and support that works for real journeys."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"What makes us useful"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Benefits of booking in Bishopstoke"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Flexible vehicle hire with practical features that make a real difference for journeys starting in Bishopstoke."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Vehicle hire around Romsey and nearby areas"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Romsey is not your only stop, we also cover nearby towns and villages across this part of Hampshire, making it easier to book where it best suits your journey."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"A vehicle for the job"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from everyday cars, larger rental vehicles and specialist options to suit short trips, planned jobs and commercial use."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Hire terms that fit"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Flexible rental periods help whether you need a vehicle for a day, a weekend, a working week or a longer requirement."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Straightforward service"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our focus is on maintained vehicles, straightforward booking and practical support from first enquiry to return."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Romsey"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Straightforward driving and journey-planning advice for collecting and using a hire vehicle around Romsey."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Romsey is a practical place to collect a hire vehicle if you are heading across Hampshire for work, moving house or picking up larger items. Local trips often start in the town centre and then join the main local routes towards surrounding business areas, villages and larger road links, so it helps to allow a little extra time if you are travelling through busier daytime periods."}</p>
            <p className="text-base leading-8 text-slate-600">{"For fuel and quick stop planning, Greatbridge Service Station is a useful nearby option within Romsey. If you are setting off on a longer run, topping up early can make the rest of the journey simpler, especially when you are driving a larger van, minibus or truck and want to avoid unnecessary detours once you are out on the wider route network."}</p>
            <p className="text-base leading-8 text-slate-600">{"Romsey works well for a mix of residential and commercial hire needs. Customers often use vehicles here for home moves, furniture collection, event equipment, trade jobs and scheduled deliveries, with the town giving straightforward access to nearby parts of Test Valley and the wider Hampshire area without the feel of starting from a much busier city location."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are unfamiliar with the area, it is worth planning loading and parking before you arrive, particularly around central streets where space can be tighter than on out-of-town runs. For longer journeys, a simple stop near Greatbridge can help you sort fuel, refreshments and final route checks before continuing, making the drive from Romsey more efficient and less rushed."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Romsey hire FAQs"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Helpful answers before you book"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about arranging vehicle hire in Romsey, from booking notice to vehicle types and rental flexibility."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Need vehicle hire in Romsey?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to move, carry or organise and we will help you choose a suitable rental vehicle for Romsey and the surrounding area."}</p>
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




