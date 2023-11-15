import { Controller, Get, Param, Post, Query } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {}

  @Post()
  createMessage() {}

  @Get('/:id')
  getMessage(@Param() param: {id: number}) {
    return param.id;
  }
}
