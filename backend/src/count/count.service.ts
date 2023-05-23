import { Injectable } from '@nestjs/common';
import { CreateCountDto } from './dto/create-count.dto';
import { UpdateCountDto } from './dto/update-count.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Count, CountDocument } from './schemas/count.schema';
import { Model } from 'mongoose';

@Injectable()
export class CountService {
  constructor(
    @InjectModel(Count.name) private countModel: Model<CountDocument>,
  ) {}

  async create(createCountDto: CreateCountDto): Promise<Count> {
    const newCount = new this.countModel(createCountDto);
    return newCount.save();
  }

  async findAll() {
    return this.countModel.find().exec();
  }

  async findOne(id: string) {
    return this.countModel.findById(id);
  }

  async update(id: string, updateCountDto: UpdateCountDto): Promise<Count> {
    return this.countModel.findByIdAndUpdate(id, updateCountDto, { new: true });
  }

  async remove(id: string): Promise<Count> {
    return this.countModel.findByIdAndRemove(id);
  }
}
