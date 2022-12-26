/* import { CreateNotificationBody } from './create-notification-body'; */
import { PrismaService } from './prisma.service';
import { Controller, Get, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators';
@Controller('notifications')
export class AppController {
  constructor(private readonly prisma: PrismaService) {}

  @Get()
  list() {
    return this.prisma.notification.findMany();
  }

  @Post()
  async create(@Body() body) {
    const { recipientId, content, category } = body;
    console.log(body);

    await this.prisma.notification.create({
      data: {
        id: recipientId,
        content: content,
        category: category,
        recipientId: recipientId,
      },
    });
  }
}
