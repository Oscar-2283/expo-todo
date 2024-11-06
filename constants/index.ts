export enum CategoryEnum {
  WORK = 'work',
  PERSONAL = 'personal',
  WISHLIST = 'wishlist'
}

export enum RepeatEnum {
  NONE = 'none',
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  YEARLY = 'yearly'
}

export const Categories = [
  { label: '工作', value: CategoryEnum.WORK },
  { label: '個人', value: CategoryEnum.PERSONAL },
  { label: '願望清單', value: CategoryEnum.WISHLIST },
];

export const RepeatOptions = [
  { label: '不重複', value: RepeatEnum.NONE },
  { label: '每天', value: RepeatEnum.DAILY },
  { label: '每週', value: RepeatEnum.WEEKLY },
  { label: '每月', value: RepeatEnum.MONTHLY },
  { label: '每年', value: RepeatEnum.YEARLY },
];

