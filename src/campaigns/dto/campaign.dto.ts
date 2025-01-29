export class CampaignDto {
    id: number;
    title: string;
    description: string;
    requirements: string;
    deadline: Date;
    status: 'ACTIVE' | 'COMPLETED';
  }