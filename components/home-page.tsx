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

type HomePageProps = {
  currentLocationLabel?: string;
  heroImage: {
    src: string;
    alt: string;
  };
  supportImage: {
    src: string;
    alt: string;
  };
};

export function HomePage({
  currentLocationLabel,
  heroImage,
  supportImage,
}: HomePageProps) {
  const locationLinks = buildLocationLinks(currentLocationLabel);
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
  const faqs = [
    {
      question: "What vehicles can I hire?",
      answer: "We offer vans, cars, minibuses and trucks for self-drive hire, subject to availability and booking requirements.",
    },
    {
      question: "Do you offer delivery and collection?",
      answer: "Yes, free delivery and collection is available as part of our service in many bookings, depending on the location and arrangement.",
    },
    {
      question: "Can businesses hire vehicles as well as private customers?",
      answer: "Yes, we support both private and business customers, including one-off hires and longer-term vehicle needs.",
    },
    {
      question: "Are flexible hire periods available?",
      answer: "We offer flexible rental periods, so you can ask about short-term, longer-term and ongoing hire options.",
    },
    {
      question: "Can you help me choose the right vehicle?",
      answer: "Our team can help you choose a practical option based on passenger numbers, load size, journey type and how long you need the vehicle.",
    },
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
                  <Link
                    key={location.href}
                    href={location.href}
                    className="block rounded-sm px-3 py-2 text-sm transition hover:bg-slate-100"
                  >
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
        <Image
          src={heroImage.src}
          alt={heroImage.alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/65 to-slate-900/45" />
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative z-10 grid gap-12 lg:grid-cols-[1fr_420px] lg:items-center">
            <div className="max-w-3xl">
              <div className="flex flex-col gap-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  {"Vehicle hire in North Stoneham made simple"}
                </h1>
                <p className="text-xl text-white">
                  {"Flexible self-drive van, car, minibus and truck hire with maintained vehicles, free delivery and collection, and practical support for personal and business use."}
                </p>
                <Button
                  size="lg"
                  className="w-fit bg-[#00B395] text-white hover:bg-[#00997f]"
                  asChild
                >
                  <a href={phoneHref}>Book Now</a>
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="relative h-80 overflow-hidden rounded-3xl border border-white/15 shadow-2xl shadow-[#0f6b31]/30">
                <iframe
                  src="https://www.youtube.com/embed/YvUfUk4gqyI?si=1kju8yn40EZXn6F8"
                  title={supportImage.alt}
                  className="h-full w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent" />
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
                  {"Easy local booking"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">
                  {"Book the right vehicle without the usual hassle"}
                </h2>
                <p className="mt-3 text-base leading-7 text-slate-600">
                  {"Booking with Southern Van Hire is designed to be clear and practical. Whether you need a van for a move, a car for everyday travel, a minibus for group transport or a truck for heavier work, we help you arrange the right vehicle with flexible hire terms and straightforward support."}
                </p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Free delivery and collection"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Flexible self-drive hire"}
                  </div>
                </div>
              </div>
              <Button
                size="lg"
                className="w-full rounded-full bg-[#00B395] px-8 py-6 text-base font-semibold text-white shadow-lg shadow-[#00B395]/25 transition hover:-translate-y-0.5 hover:bg-[#00997f] md:w-auto"
                asChild
              >
                <a href={phoneHref}>Call Us Now: {phoneDisplay}</a>
              </Button>
            </div>
          </Card>
        </div>
      </section>

      <section id="trust" className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              {"Why customers trust Southern Van Hire"}
            </h2>
            <p className="text-lg text-muted-foreground">
              {"Southern Van Hire supports North Stoneham with practical vehicle rental, broad choice and a dependable service style that works for everyday transport needs."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 md:auto-rows-fr">
            {[
              {
                title: "Maintained and ready to go",
                description: "Our vehicles are maintained for dependable self-drive use across local and longer-distance bookings.",
                icon: ShieldCheck,
              },
              {
                title: "Flexible booking options",
                description: "Hire periods are kept flexible so private and business customers can book around the job in hand.",
                icon: Star,
              },
              {
                title: "Straightforward customer service",
                description: "From enquiry to return, we focus on clear communication and practical support rather than unnecessary complications.",
                icon: Users,
              },
            ].map((item) => (
              <Card
                key={item.title}
                className="border border-slate-100 bg-white p-8 shadow-[0_20px_45px_-25px_rgba(15,23,42,0.22)]"
              >
                <div className="mb-6 flex w-full items-center gap-3 rounded-2xl bg-[#00B395]/10 px-4 py-4 text-left text-[#00B395]">
                  <item.icon className="h-7 w-7 shrink-0" />
                  <h3 className="text-xl font-bold leading-tight">
                    {item.title}
                  </h3>
                </div>
                <p className="mb-5 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20 text-slate-950">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Our hire options"}
            </p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">
              {"Vans, cars, minibuses and trucks from one local team"}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              {"From one-day rentals to longer hire periods, we cover the main vehicle types most customers need with a straightforward, service-led approach."}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-[#00B395] text-white hover:bg-[#00997f]"
                asChild
              >
                <a href={phoneHref}>No Hassle Booking {phoneDisplay}</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                value: "Car Hire",
                label: "Practical vans for moving, deliveries, trade jobs and everyday transport tasks.",
              },
              {
                value: "Van Hire",
                label: "Flexible car hire for local journeys, weekend plans and temporary vehicle cover.",
              },
              {
                value: "Minibus Hire",
                label: "Self-drive minibuses for group outings, events, clubs and organised travel.",
              },
              {
                value: "Truck Hire",
                label: "Trucks for heavier loads, business logistics and larger transport jobs.",
              },
            ].map((item) => (
              <div
                key={item.label}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_50px_-30px_rgba(15,23,42,0.18)]"
              >
                <p className="text-3xl font-bold text-slate-950">{item.value}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
            {"Why hire with us"}
          </p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {"A reliable local base for vehicle hire in North Stoneham"}
          </h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Southern Van Hire provides practical self-drive vehicle rental for customers in and around North Stoneham. Our service is built around everyday transport needs, with vans, cars, minibuses and trucks available for personal and business use."}</p>
            <p>{"We know many hires are time-sensitive. That is why we focus on clear communication, well-maintained vehicles and flexible rental periods that work for anything from a one-off collection to longer commercial use."}</p>
            <p>{"Free delivery and collection helps take pressure off your day, especially when you are organising a move, supporting a job, covering fleet downtime or arranging transport for an event. The aim is simple: make hire convenient and keep things moving."}</p>
            <p>{"If you are unsure what size or type of vehicle suits the journey, we keep our advice practical. From compact cars to larger vans, minibuses and trucks, we help customers choose vehicles that are suitable for the load, route and length of hire."}</p>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Why customers choose us"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Practical hire benefits that make life easier"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Straightforward vehicle hire with the flexibility, support and vehicle choice to keep personal and business plans moving."}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: BadgePoundSterling,
                title: "Broad vehicle choice",
                description: "Choose a vehicle that suits the job, from everyday cars to vans, minibuses and trucks.",
                detail: "Useful whether you are moving house, covering business demand, collecting stock or planning group travel.",
              },
              {
                icon: Clock3,
                title: "Flexible rental periods",
                description: "Hire for a short job, a longer project or ongoing business use with arrangements that fit around you.",
                detail: "We aim to keep booking simple so you can get the vehicle you need without unnecessary delays or complications.",
              },
              {
                icon: CheckCircle2,
                title: "Dependable service",
                description: "Well-maintained vehicles and practical support help you hire with confidence.",
                detail: "Free delivery and collection adds convenience for customers who want a more straightforward rental process.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex h-full flex-col items-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-[0_20px_50px_-30px_rgba(15,23,42,0.28)] transition hover:-translate-y-1 hover:shadow-[0_28px_60px_-30px_rgba(0,179,149,0.35)]"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-[#00B395]/10 p-4 text-[#00B395] transition group-hover:bg-[#00B395] group-hover:text-white">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 text-2xl font-bold text-slate-950">
                  {item.title}
                </h3>
                <p className="flex-1 text-base leading-7 text-slate-600">
                  {item.description}
                </p>
                <p className="mt-6 text-base leading-7 text-slate-600">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 pb-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {vehicleCards.map((vehicle) => (
              <div
                key={vehicle.title}
                className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_45px_-30px_rgba(15,23,42,0.2)]"
              >
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
                  <a
                    href={phoneHref}
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00B395] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#00997f]"
                  >
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Nearby Locations"}
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              {"Areas we cover near North Stoneham"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"We cover North Stoneham and a range of nearby Hampshire towns, making it easier to book from the area that best suits your route or schedule."}
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {locationLinks.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="rounded-full border border-[#00B395] bg-slate-50 px-6 py-3 text-base font-medium text-slate-700 transition hover:bg-[#00B395]/10"
              >
                {location.label}
              </Link>
            ))}
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Vehicles for everyday jobs"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Whether you need a hire vehicle for a house move, temporary cover or day-to-day transport, we offer practical options across multiple vehicle categories."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Maintained and ready to go"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"Our rental vehicles are prepared with reliability and usability in mind so you can focus on the journey rather than the admin."}
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">
                {"Flexible hire for different needs"}
              </h3>
              <p className="mt-3 text-base leading-7 text-slate-600">
                {"From short local use to longer bookings for commercial or personal plans, we aim to match the hire arrangement to the job."}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Local Guide"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Driving around North Stoneham"}
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              {"Useful local pointers for collecting, loading and planning a hire journey in and around North Stoneham."}
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">
              {"North Stoneham is well placed for short local trips and wider journeys across Eastleigh and Southampton. For everyday access, Passfield Avenue and Chestnut Avenue are useful local roads, while Leigh Road gives a straightforward route into the busier town network when you need to join larger corridors."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"If you are collecting furniture, moving boxes or making trade deliveries, it helps to plan around the one-way sections on nearby roads such as Chestnut Avenue, Bournemouth Road and Templars Way. Giving yourself a little extra time can make loading and town-centre driving much easier, especially in a larger van or truck."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"For longer runs, Stoneham Interchange is a practical local reference point when joining the wider road system. It is also useful to know there is nearby fuel available, with the Asda station on Bournemouth Road a handy option and Eastleigh Service Station another straightforward stop before returning your vehicle."}
            </p>
            <p className="text-base leading-8 text-slate-600">
              {"If your hire is tied to a local stay, event or day out, landmarks such as Avenue Park, Fleming Park Parkland and the Holiday Inn on Passfield Avenue can help with route planning. For simple meet-ups and collections, using clear public-facing points like these often makes handovers and timing easier."}
            </p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">
              {"Helpful information"}
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
              {"Frequently asked questions"}
            </h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">
              {"Useful answers about booking, vehicle types and how our hire service works."}
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 px-6 shadow-sm">
            {faqs.map((item, index) => (
              <details
                key={item.question}
                className="group border-b border-slate-200 last:border-b-0"
                open={index === 0}
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-6 text-left text-lg font-semibold text-slate-950">
                  <span>{item.question}</span>
                  <ChevronDown className="h-5 w-5 shrink-0 text-slate-500 transition-transform group-open:rotate-180" />
                </summary>
                <div className="pb-6 text-base leading-7 text-slate-600">
                  {item.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#00B395] px-6 py-16 text-center text-white">
        <div className="mx-auto max-w-2xl">
          <h2 className="mb-4 text-4xl font-bold">{"Need a vehicle in North Stoneham?"}</h2>
          <p className="mb-8 text-lg text-white/85">
            {"Get in touch to arrange a suitable car, van, minibus or truck with practical support and flexible hire options."}
          </p>
          <Button
            size="lg"
            className="bg-white text-[#00B395] hover:bg-gray-100"
            asChild
          >
            <a href={phoneHref}>Book Now</a>
          </Button>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t bg-gray-900 px-6 py-12 text-gray-400"
      >
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




