import Link from "next/link";

const Nav = () => {
  return (
    <div className="flex flex-col p-2 m-2 border border-sky-500 rounded-md">
      <Link href={"/ssg"}>SSG</Link>
      <Link href={"/isr"}>ISR</Link>
      <Link href={"/ssr"}>SSR</Link>
      <Link href={"/csr"}>CSR</Link>
    </div>
  );
};

export default Nav;
