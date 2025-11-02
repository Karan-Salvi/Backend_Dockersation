import { prismaClient } from "db/client";

export default async function Home() {
  const users = await prismaClient.user.findMany();
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {JSON.stringify(users)}
    </div>
  );
}

export const revalidate = 60;
// export const dynamic = "force-dynamic";
