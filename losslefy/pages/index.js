import Head from 'next/head'
import Sidebar from "../Components/Sidebar";
import Center from "../Components/center";
import { getSession } from 'next-auth/react';
import Player from "../Components/Player";
const Home = () => {
  return (
    <>
      <Head>
        <title>Losslefy 1.0</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-black h-screen overflow-hidden">
<main className='flex'>
 <Sidebar />
  <Center />
</main>
<div className='sticky bottom-0'>
 <Player />
</div>
    </div>
   </>
  )
}

export default Home

export async function getServerSideProps(context){
  const session = await getSession(context);
  return{
    props: {
      session,
    },
  }
}
