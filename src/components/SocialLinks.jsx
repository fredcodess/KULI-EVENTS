import { FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaInstagram, url: "https://www.instagram.com" },
  { icon: FaTiktok, url: "https://www.tiktok.comc" },
];

export default function SocialLinks() {
  return (
    <div className="flex gap-4 items-center">
      {socials.map(({ icon: Icon, url }, i) => (
        <a
          key={i}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent hover:text-gray-400 transition"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}
