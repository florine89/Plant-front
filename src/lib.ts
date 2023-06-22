import { PrismaClient } from '@prisma/client';

const globalForPrisma = global as unknown as {
  prisma: PrismaClient | undefined
}

/**
 * Here we install our Prisma Client. It will assure us to have the possibility to call 
 * prisma's method in all our app. 
 */
export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query'],
  })

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma


export async function createPlant(name: string, description: string, quantity: number, user_id: number) {
  try {
    const plant = await prisma.plant.create({data : {name, description, quantity, user_id }})
    console.log("lib plant")
    
    return plant;
  } catch (error) {
    return(error)
  }
}