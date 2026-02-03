import { client } from "@repo/db/client";
export default async function Home() {
  const User = await client.user.findFirst();
  return (
    <div>
        {User?.username}
        {User?.password}
    </div>
  );
}
