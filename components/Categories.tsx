import Image from "next/image";
import Link from "next/link";

const occasions = [
  {
    title: "Bridal",
    copy: "Sarees marked\nfor the wedding day.",
    image: "/cat-bridal.jpg",
    alt: "Bridal Mysore silk saree with gold zari",
    href: "/sarees?category=bridal",
    face: true,
  },
  {
    title: "Bridegroom",
    copy: "Royal silks\nfor the wedding day.",
    image: "/cat-bridegroom.jpg",
    alt: "Royal Mysore silk wedding attire for the groom",
    href: "/sarees?category=groom",
    face: true,
  },
  {
    title: "Ceremonial",
    copy: "Temple borders\nfor ceremony.",
    image: "/cat-sarees.jpg?v=2",
    alt: "Woman wearing a Mysore silk saree",
    href: "/sarees?category=temple",
    face: true,
  },
  {
    title: "Everyday luxury",
    copy: "Quieter colour,\nsame loom.",
    image: "/gold-thread.jpg",
    alt: "Gold zari on Mysore silk",
    href: "/sarees?category=pastel",
  },
];

export default function Categories() {
  return (
    <section className="categories" id="categories" aria-label="Shop by occasion">
      {occasions.map((cat) => (
        <Link key={cat.title} className={cat.face ? "cat cat--face" : "cat"} href={cat.href}>
          <div className="media-fill">
            <Image src={cat.image} alt={cat.alt} fill sizes="(max-width: 899px) 85vw, (max-width: 1199px) 50vw, 25vw" />
          </div>
          <div className="cat__copy">
            <h3>{cat.title}</h3>
            <p>
              {cat.copy.split("\n").map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <span className="cat__cta">
              Explore collection <span aria-hidden="true">→</span>
            </span>
          </div>
        </Link>
      ))}
    </section>
  );
}
