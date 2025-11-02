import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <div className="flex items-center">
        <div className="bg-honey mr-2 flex h-9 w-9 items-center justify-center rounded-full text-xl font-bold text-[#002d5b]">
          NM
        </div>
        <span className="text-xl font-bold tracking-tight text-white">
          Next<span className="text-honey">Mart</span>
        </span>
      </div>
    </Link>
  );
}
