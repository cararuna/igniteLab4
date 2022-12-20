import { Injectable } from '@nestjs/common';
import { MailService } from './mail.service';

@Injectable()
export class PostMarkService implements MailService {
  sendEmail(): string {
    return 'PostMark Mail!';
  }
}
