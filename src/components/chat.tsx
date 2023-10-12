import Image from "next/image";
import Link from "next/link";

export default function Chat() {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Link href="/">
        <Image src="/chat.gif" alt="Chat" width={80} height={80} />
      </Link>
    </div>
  );
}
