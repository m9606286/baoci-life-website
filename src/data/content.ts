export interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

export const coreValues: CoreValue[] = [
  {
    icon: 'heart',
    title: '人文關懷',
    description: '以同理心對待每一位客戶，尊重個人信念和家庭需求，提供溫暖而專業的服務。',
  },
  {
    icon: 'shield',
    title: '專業保障',
    description: '擁有豐富與專業的行業經驗，確保應有之服務品質。',
  },
  {
    icon: 'gem',
    title: '透明服務',
    description: '所有費用和流程皆清楚明列，並有專人清楚說明，讓您安心選擇。',
  },
  {
    icon: 'sparkles',
    title: '永恆尊嚴',
    description: '我們尊重逝者、陪伴家屬，為每一個生命留下永恆的紀念。每一處細節皆經細心規劃，只為呈現最高的尊嚴與敬意。',
  },
];

export interface PreneedAdvantage {
  text: string;
}

export const preneedAdvantages: PreneedAdvantage[] = [
  { text: '一定會發生的事情，提早做好規劃，減輕家人的壓力。' },
  { text: '確保按照自己的意願進行禮儀安排。' },
  { text: '獲得透明的價格和完整的服務保障。' },
  { text: '享受優惠的付款方案，鎖定價格抗通膨。' },
  { text: '為親愛的家人留下清晰的指引，留愛不留債。' },
  { text: '保障75%信託，選擇永續經營公司，更有保障。' },
  { text: '可自由轉讓，契約持有者可指定使用人，不受限於自己或家人使用。' },
];

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
}

export const services: ServiceItem[] = [
  {
    icon: 'clipboard',
    title: '生前契約規劃',
    description: '協助您提早規劃人生最後旅程，根據您的需求預先制訂詳細的禮儀方案。',
  },
  {
    icon: 'hands',
    title: '禮儀服務',
    description: '專業團隊全程守護與陪伴，讓您與家人在人生最重要的告別時刻，能以從容與安心的心情，共同完成一場充滿愛與祝福的人生畢業典禮。',
  },
];

export interface ContractProduct {
  name: string;
  type: string;
  channel: string;
  phone: string;
  documentUrl: string;
  flowType: 'standard' | 'simple';
}

export const contractProducts: ContractProduct[] = [
  {
    name: '寶富',
    type: '標準型流程',
    channel: '晨暉資產股份有限公司',
    phone: '02-2514-7758',
    documentUrl: '/寶富生前契約書.pdf',
    flowType: 'standard',
  },
  {
    name: '福益',
    type: '標準型流程',
    channel: '天勤生命文創股份有限公司',
    phone: '04-2322-0208',
    documentUrl: '/福益生前契約書.pdf',
    flowType: 'standard',
  },
  {
    name: '寶暉',
    type: '簡約型流程',
    channel: '晨暉資產股份有限公司',
    phone: '02-2514-7758',
    documentUrl: '/寶暉生前契約書.pdf',
    flowType: 'simple',
  },
  {
    name: '璞瑜',
    type: '簡約型流程',
    channel: '天勤生命文創股份有限公司',
    phone: '04-2322-0208',
    documentUrl: '/璞瑜生前契約書.pdf',
    flowType: 'simple',
  },
];

export const announcement = '原永慈事業股份有限公司正式經主管機關核准，已正式更名為「寶慈生命事業股份有限公司」';

export const companyInfo = {
  name: '寶慈生命事業股份有限公司',
  taxId: '13024413',
  phone: '0800-600-603',
  hotline: '0800-600-603',
  trustBank: '京城銀行',
  trustRatio: '75%',
  parentCompany: '寶碩（股票代號5210）之全資子公司',
};
