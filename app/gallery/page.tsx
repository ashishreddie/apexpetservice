import Image from "next/image";

export const metadata = { title: "Gallery | Apex Pet Clinic" };

const images = [
  { src: "https://placedog.net/600/800?id=71", alt: "Dog patient at the clinic", tall: true },
  { src: "https://placekitten.com/600/600", alt: "Cat at the clinic" },
  { src: "https://placedog.net/600/600?id=73", alt: "Dog grooming session" },
  { src: "https://placekitten.com/600/800", alt: "Cat resting after check-up", tall: true },
  { src: "https://placedog.net/601/600?id=77", alt: "Puppy vaccination" },
  { src: "https://placedog.net/600/601?id=79", alt: "Clinic reception area" },
  { src: "https://placekitten.com/601/601", alt: "Kitten during consultation" },
  { src: "https://placedog.net/602/800?id=83", alt: "Dog boarding kennel", tall: true },
  { src: "https://placedog.net/602/602?id=88", alt: "Doctor with a dog" },
];

export default function GalleryPage() {
  return (
    <div>
      <section className="bg-blue-tint py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <p className="section-eyebrow mb-3">Gallery</p>
          <h1 className="text-4xl font-bold text-blue-dark max-w-2xl">Moments from the clinic</h1>
          <p className="mt-4 text-ink/70 max-w-xl">
            A look at the pets, people, and spaces that make Apex Pet Clinic home for your furry family.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 sm:px-6 py-16">
        <div className="columns-2 sm:columns-3 gap-4 [&>*]:mb-4">
          {images.map((img) => (
            <div
              key={img.src}
              className={`relative rounded-card overflow-hidden shadow-card break-inside-avoid ${
                img.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
