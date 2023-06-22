import { prisma } from "@/lib";
import { compare } from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

/**
 * This export is used to configure NextAuth
 * We are using the jwt as security and some credentials
 * During the Auth, we are testing the existence of the tested password in the DB with Prisma.
 * bcrypt is used here to compare the hash with the compare method. 
 */
export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      name: 'Sign in',
      credentials: {
        email:{
          label: 'email',
          type: 'email',
          placeholder: 'hello@example.com'
        },
        password: {label: 'password', type: 'password'}
      },
      async authorize(credentials) {
        if(!credentials?.email ||!credentials.password) {
          return null
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email
          }
        })

        if(!user){
          return null
        }

        const isPasswordValid = await compare(
          credentials.password, 
          user.password 
        )

        if (!isPasswordValid) {
          return null
        }
        return{
          id: user.id + '',
          email: user.email,
          firstname :user.firstname,

        }
        }

      }
    )
  ],
  callbacks: {
  //   jwt({ token, account }) {
  //     console.log('jwt', account?.access_token)
  //     if (account) {
  //       token.id_token = account.id_token
  //       token.provider = account.provider
  //       token.accessToken = account.access_token
  //     }
  //     return token
  //   },
  //   session({ session, token }) {
  //     console.log('session', token.accessToken)
  //     session.accessToken = token.accessToken as string
  //     return session
  //   },
    
    session: ({session, token}) => {
      // console.log('Session callback' ,{session, token});
      session.accessToken = token.accessToken as string;

      return {
        ...session,
        user: {
          ...session.user, 
          id: token.id,
          token: token.jti
        }
      }
    },
    jwt: ({token, account}) => {
      // console.log('JWT callback' ,{token, account})
      if (account) {
        const u = account as unknown as any;
        token.id_token = account.id_token
        token.provider = account.provider
        token.accessToken = account.access_token
        return {
          ...token,
          id: u.id,
        }
      }
      return token;
    }
  }
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }