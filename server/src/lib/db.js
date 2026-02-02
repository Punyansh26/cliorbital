import {prismaClient} from '$lib/prisma/client.js';

const globalforPrisma = global
const prisma=new prismaClient();

if (process.env.NODE_ENV !== 'production')  {
    globalforPrisma.prisma = prisma;
}

export default prisma;
