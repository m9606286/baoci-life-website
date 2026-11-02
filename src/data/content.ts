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
