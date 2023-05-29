import { prisma } from "@/lib";
import { compare } from "bcrypt";
import NextAuth, { type NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

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
          firstname :user.firstname

        }
        }

      }
    )
  ]
}

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }