import { connectData } from "../../data/connect-data";

export function Footer() {
  return (
    <footer
      id="connect"
      className="flex flex-col justify-center items-center  my-8 border-t text-xl text-gray-400"
    >
      <ul className="flex gap-6 text-gray-400 mt-8">
        {connectData.map((item) => (
          <li key={item.text} className="list-none">
            <a
              href={item.href}
              target="blank"
              className="hover:text-orange-600"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
      <small className="my-4">© 2022, All rights reserved.</small>
    </footer>
  );
}
