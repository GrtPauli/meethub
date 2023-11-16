import React from 'react'
import HomePage from '~/home/page'
import type { GetServerSidePropsContext } from "next";
import { getServerSession } from "@calcom/features/auth/lib/getServerSession";

interface IProps {
  signedIn: boolean
}

const Home = () => {
  return <HomePage/>
}

export default Home

// export async function getServerSideProps({ req, res }: GetServerSidePropsContext) {
//   const session = await getServerSession({ req, res });

//   if (!session?.user?.id) {
//     return { signedIn: false };
//   }

//   return { signedIn: true };
// }