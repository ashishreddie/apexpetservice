# Apex Pet Clinic — Website

A Next.js (App Router + TypeScript + Tailwind) website for Apex Pet Clinic, Kazipet,
Warangal. Includes an online slot-booking flow for every service that emails the
clinic admin at **apexpetclinic74@gmail.com** with the booking details.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in EMAIL_USER and EMAIL_PASS
npm run dev
```

Visit `http://localhost:3000`.

## Setting up the booking emails

Booking and contact-form submissions are sent via [Nodemailer](https://nodemailer.com)
through a Gmail account. You need **one Gmail account** to send from (it can be any
account you control — it does not have to be apexpetclinic74@gmail.com). Every
email is always delivered **to** apexpetclinic74@gmail.com.

1. Turn on 2-Step Verification on the sending Gmail account:
   `https://myaccount.google.com/security`
2. Create an App Password:
   `https://myaccount.google.com/apppasswords`
   (choose "Mail" as the app — Google gives you a 16-character password)
3. Add both values to `.env.local`:
   ```
   EMAIL_USER=your-sending-account@gmail.com
   EMAIL_PASS=the16characterapppassword
   ```
4. Restart `npm run dev`.

When deploying (e.g. to Vercel), add `EMAIL_USER` and `EMAIL_PASS` as environment
variables in your hosting dashboard — never commit `.env.local` to git.

## Where things live

- `app/` — pages (Home, About, Services, Branches, Contact, Gallery, Reviews)
- `app/services/[slug]/page.tsx` — individual service page + booking form
- `app/api/booking/route.ts` — sends booking emails
- `app/api/contact/route.ts` — sends contact-form emails
- `components/` — Navbar, Footer, BookingForm, ContactForm, ServiceCard, etc.
- `lib/services.ts` — service list, which services have an optional pet-name field
  (Grooming, Boarding, Training, Pet Walking), and the 9 AM–8 PM time slots
- `lib/branches.ts` — the two branch addresses and map queries

## Notes

- Images currently use `placedog.net` / `placekitten.com` placeholder services —
  swap these for real clinic photos in `lib/services.ts`, `app/about/page.tsx`,
  and `app/gallery/page.tsx` before going live.
- Double-check the WhatsApp number listed on the clinic's Facebook page
  (+91 9618743763) against the Justdial numbers used across the site, and update
  wherever needed before publishing.
- The Google Maps embeds in Branches/Contact use a text search query — swap in
  exact coordinates or a verified Place ID for pinpoint accuracy once available.
