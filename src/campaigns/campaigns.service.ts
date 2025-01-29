import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Campaign } from './entities/campaign.entity';
import { Submission } from './entities/submission.entity';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Injectable()
export class CampaignsService {
  constructor(
    @InjectRepository(Campaign)
    private campaignsRepository: Repository<Campaign>,
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
  ) {}

  async findAllForUser() {
    try {
      const campaigns = await this.campaignsRepository.find({
        where: {
          status: 'ACTIVE'
        },
        order: {
          deadline: 'ASC'
        }
      });

      return campaigns;
    } catch (error) {
      console.error('Error fetching campaigns:', error);
      throw error;
    }
  }

  async findOne(id: number) {
    try {
      const campaign = await this.campaignsRepository.findOne({ 
        where: { id } 
      });

      if (!campaign) {
        throw new NotFoundException(`Campaign #${id} not found`);
      }

      return campaign;
    } catch (error) {
      console.error('Error fetching campaign:', error);
      throw error;
    }
  }

  async createSubmission(
    campaignId: number,
    userId: number,
    createSubmissionDto: CreateSubmissionDto,
  ) {
    try {
      const campaign = await this.campaignsRepository.findOne({ 
        where: { 
          id: campaignId,
          status: 'ACTIVE',
        } 
      });

      if (!campaign) {
        throw new NotFoundException('Campaign not found or not active');
      }
      
      const submission = await this.submissionsRepository.save({
        userId,
        campaignId,
        contentUrl: createSubmissionDto.contentUrl,
        status: 'SUBMITTED',
      });

      return submission;
    } catch (error) {
      console.error('Error creating submission:', error);
      throw error;
    }
  }
}