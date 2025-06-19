import { FaInstagram, FaTiktok } from "react-icons/fa";

const socials = [
  { icon: FaInstagram, url: "https://www.instagram.com" },
  { icon: FaTiktok, url: "https://www.tiktok.com" },
];

export default function SocialLinks({ size = 20 }) {
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
          <Icon size={size} />
        </a>
      ))}
    </div>
  );
}
