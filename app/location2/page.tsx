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
  const heroImage = { src: "/images/location2-image1.jpeg", alt: "Modern hire van near a clean business and retail area in Chandler's Ford" };
  const supportImage = { src: "/images/location2-image2.jpeg", alt: "Customer and staff member planning a route beside a parked rental van in Chandler's Ford" };
  const faqs = [
    { question: "Can I arrange vehicle hire in Chandler's Ford?", answer: "Yes, we provide vehicle hire for Chandler's Ford, covering personal and business needs with a range of practical rental options." },
    { question: "What types of vehicles are available for Chandler's Ford bookings?", answer: "Yes, car hire is available for everyday driving, short trips and longer journeys, subject to availability." },
    { question: "Do you offer flexible rental periods for Chandler's Ford customers?", answer: "Yes, free delivery and collection helps make local bookings more convenient." },
    { question: "Is Chandler's Ford a good location for business vehicle hire?", answer: "Yes, we support business users who need practical self-drive vehicles for transport and temporary operational cover." },
    { question: "Can I hire a minibus or larger vehicle from Chandler's Ford?", answer: "It is best to check in advance, especially if you need a specific type of vehicle or have fixed dates." },
  ];
  const trustCards = [
    { title: "Ready for the road", description: "Vehicles prepared for dependable self-drive hire across local and longer-distance journeys.", icon: ShieldCheck },
    { title: "Hire that fits the job", description: "Short-term and longer bookings available for personal jobs, business transport and planned trips.", icon: Star },
    { title: "Helpful local support", description: "Free delivery and collection helps keep vehicle hire practical around Fair Oak and nearby areas.", icon: Users },
  ];
  const featureStats = [
    { value: "Car Hire", label: "Vans for store collections, moving jobs, trade tasks and local delivery runs." },
    { value: "Van Hire", label: "Cars for practical day-to-day travel, appointments and business mileage." },
    { value: "Minibus Hire", label: "Minibuses for events, shared trips and organised group travel." },
    { value: "Truck Hire", label: "Trucks for larger loads, equipment moves and commercial transport work." },
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
    { icon: BadgePoundSterling, title: "Right-size vehicle choice", description: "Book the type of vehicle that actually suits the route, load or number of passengers.", detail: "That helps avoid paying for space you do not need or struggling with a vehicle that is too small." },
    { icon: Clock3, title: "Hire that fits your timing", description: "Flexible hire periods work well for short errands, longer projects and temporary business requirements.", detail: "It is a practical option when transport needs are changing week to week." },
    { icon: CheckCircle2, title: "Easier to organise", description: "Delivery and collection can save extra travel time in a busy area like Hedge End.", detail: "That is especially helpful when your booking is tied to a collection slot, moving day or scheduled job." },
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
                <h1 className="text-5xl font-bold tracking-tight">{"Straightforward Vehicle Hire in Chandler's Ford"}</h1>
                <p className="text-xl text-white">{"From vans for bulky pickups to cars, minibuses and trucks, we help Hedge End customers book practical self-drive transport with flexible support."}</p>
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
                  {"Flexible hire around Hedge End"}
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-slate-950 md:text-3xl">{"Arrange a Hedge End hire with less hassle"}</h2>
                <p className="mt-3 text-base leading-7 text-slate-600">{"Hiring a vehicle in Hedge End should be simple. We help match the booking to what you are actually doing, whether that is a retail collection, a home move, temporary fleet support or planned group travel."}</p>
                <div className="mt-5 flex flex-wrap gap-3 text-sm text-slate-600">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <PhoneCall className="h-4 w-4 text-[#00B395]" />
                    {"Vehicle delivery available"}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-sm">
                    <Clock3 className="h-4 w-4 text-[#00B395]" />
                    {"Support for business and personal use"}
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
            <h2 className="mb-4 text-4xl font-bold">{"Why hire with us in Fair Oak"}</h2>
            <p className="text-lg text-muted-foreground">{"We keep vehicle hire straightforward in Fair Oak with practical help, flexible booking options and a fleet suited to everyday transport needs."}</p>
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
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Available in Hedge End"}</p>
            <h2 className="max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">{"Vehicle hire for shopping trips, work and longer journeys"}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{"Whether you need something for a quick local run or a larger transport task, we offer suitable self-drive options in Hedge End."}</p>
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
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hedge End vehicle hire"}</p>
          <h2 className="mx-auto max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Self-drive vehicle hire that works for Hedge End"}</h2>
          <div className="mx-auto mt-8 max-w-3xl space-y-6 text-lg leading-8 text-slate-600">
            <p>{"Hedge End is one of those places where flexible transport is often essential. With busy retail areas, residential neighbourhoods and quick access to larger routes, customers regularly need hire vehicles for collections, deliveries, moving jobs and day-to-day travel."}</p>
            <p>{"Southern Van Hire provides self-drive options that suit that mix. Van hire is ideal for bulky purchases and practical transport tasks, while cars offer a simple answer for local and longer-distance driving. Minibuses and trucks are available when the job calls for extra passenger space or carrying capacity."}</p>
            <p>{"The area's connections towards the M27, Southampton and Botley make Hedge End a useful base for both local and regional journeys. Having a maintained vehicle and a booking arranged around your timings helps keep things straightforward."}</p>
            <p>{"We focus on practical service rather than overpromising. That means clear communication, broad vehicle choice and support for both private customers and businesses in Hedge End."}</p>
          </div>
        </div>
      </section>

      <section id="benefits" className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(0,179,149,0.14),_transparent_55%)] pointer-events-none" />
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Built around convenience"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Useful hire benefits for Hedge End journeys"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Practical reasons customers in Hedge End use us for personal travel, moving jobs and business transport."}</p>
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
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{"Areas served around Fair Oak"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"If Fair Oak is your starting point, we also cover surrounding Hampshire towns and villages that are commonly used for collections, drop-offs and onward travel."}</p>
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
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Flexible vehicle choices"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Choose from practical hire vehicles for short jobs, planned trips, business use and longer bookings, with straightforward support from enquiry to return."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Well-maintained fleet"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Our rental vehicles are prepared to a good standard and suited to everyday driving, helping you get on with the journey without unnecessary hassle."}</p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
              <h3 className="text-2xl font-semibold tracking-tight text-slate-950">{"Convenient local service"}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{"Free delivery and collection can make hiring easier around Fair Oak, whether you need a vehicle at home, at work or at a local site."}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Local Guide"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Driving in and around Chandler's Ford"}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">{"Useful driving pointers for getting the most from a hire vehicle in and around Chandler's Ford."}</p>
          </div>
          <div className="mx-auto mt-12 max-w-4xl space-y-6 text-left">
            <p className="text-base leading-8 text-slate-600">{"Chandler's Ford sits well for straightforward trips across the Eastleigh side of Hampshire, so it works well if you need a hire vehicle for local jobs and slightly longer runs. For most journeys, drivers usually plan around the main local routes leading toward Eastleigh, Southampton and the wider M3 corridor, which helps when timing collections, deliveries or household moves."}</p>
            <p className="text-base leading-8 text-slate-600">{"If you are hiring for shopping collections, business calls or moving bulky items, it is worth allowing extra time at the start and end of the day when local roads are busier with commuter traffic. A slightly earlier pickup often makes loading easier, especially if you are heading from Chandler's Ford into busier urban areas where parking and turning space can be tighter."}</p>
            <p className="text-base leading-8 text-slate-600">{"For longer hires, Chandler's Ford is a practical base because you can reach nearby towns quickly without feeling tied to a city-centre start point. That suits customers using vans for furniture collection, cars for everyday travel, minibuses for group transport or trucks for planned commercial work across Hampshire and beyond."}</p>
            <p className="text-base leading-8 text-slate-600">{"Before setting off, it helps to check your route for height limits, loading access and suitable stopping points, particularly if you are driving a larger vehicle for the first time. Keeping fuel, parking and unloading in mind from the outset usually makes a Chandler's Ford hire much smoother, whether you are staying local or heading further across the region."}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#00B395]">{"Hedge End help"}</p>
            <h2 className="text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{"Hedge End vehicle hire FAQs"}</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">{"Answers to common questions about booking vehicles in Hedge End."}</p>
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
          <h2 className="mb-4 text-4xl font-bold">{"Need a hire vehicle in Hedge End?"}</h2>
          <p className="mb-8 text-lg text-white/85">{"Tell us what you need to move, carry or plan for, and we will help you book a suitable vehicle in Hedge End."}</p>
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




