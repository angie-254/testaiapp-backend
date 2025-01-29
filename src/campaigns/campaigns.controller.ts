import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { CampaignsService } from './campaigns.service';
import { CreateSubmissionDto } from './dto/create-submission.dto';

@Controller('campaigns')
export class CampaignsController {
  constructor(private readonly campaignsService: CampaignsService) {}

  @Get()
  findAll() {
    return this.campaignsService.findAllForUser();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.campaignsService.findOne(id);
  }

  @Post(':id/submissions')
  createSubmission(
    @Param('id') campaignId: number,
    @Body() createSubmissionDto: CreateSubmissionDto,
  ) {
    return this.campaignsService.createSubmission(
      campaignId,
      1, 
      createSubmissionDto,
    );
  }
}