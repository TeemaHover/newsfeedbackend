import { Injectable } from '@nestjs/common';
import { TestDto } from './test.dto';

@Injectable()
export class TestService {
  constructor() {}
  async test(id: string) {
    let data = [
      {
        esa: 'teema',
      },
      {
        esa: 'ooriigoo tsarailag gej boddog zaluu',
      },
    ];
    return data[parseInt(id)];
  }

  async body(dto: TestDto) {
    let data = {
      esa: 'teema',
      essa: 'ooriigoo tsarailag gej boddog zaluu',
    };
    let add = dto.num1 + dto.num2;
    let name = dto.name;
    return { add, name: data[name] };
  }
}
