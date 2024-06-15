import { PrismaClient } from '@prisma/client';
import { INestApplication, Injectable, OnModuleInit } from "@nestjs/common";
import { adjustDates, convertUTCDateToKST } from 'src/config/timezone.middleware';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit {

    async onModuleInit() {
        await this.$connect();
    }

    async enableShutdownHooks(app: INestApplication) {
        process.on('beforeExit', async () => {
            await app.close();
        });
    }

    setMiddlewares() {
        this.$use(async (params, next) => {
          const result = await next(params);
    
          adjustDates(result, convertUTCDateToKST);
    
          return result;
        });
      }
}
