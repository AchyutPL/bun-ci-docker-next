import Image from "next/image";
import os from 'os';
import getId from 'docker-container-id'


const HOSTNAME=process.env.HOSTNAME;



export default async function Home() {
    let id = await getId();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Welcome to app
    </main>
  );
}
