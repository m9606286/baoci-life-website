import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useReveal } from '@/hooks/useReveal';
import { FileText, Download, CheckCircle2, Clock } from 'lucide-react';

// 手續服務項目清單與對應內容
const procedureCategories = [
  {
    id: 'new',
    title: '新購手續',
    days: '15 天',
    desc: '新購生前契約所需檢附之文件與申辦規範。',
    items: [
      { name: '客戶基本資料表', note: '未曾購買' },
      { name: '契約書正本', note: '✓ 必備' },
      { name: '繳款證明', note: '✓ 必備' },
      { name: 'ACH 自動扣款申請單', note: '分期件必填' },
    ],
  },
  {
    id: 'transfer',
    title: '轉讓手續',
    days: '15 天',
    desc: '契約權利轉讓予他人時所需之文件。',
    items: [
      { name: '契約書正本', note: '✓ 必備' },
      { name: '客戶服務申請表', note: '✓ 必備' },
      { name: '填寫讓渡申請 (於客戶服務申請表內)', note: '✓ 必填' },
      { name: '出讓人雙證件及印章', note: '✓ 必備' },
      { name: '受讓人雙證件及印章', note: '✓ 必備' },
      { name: '繳款證明', note: '手續費 1,000 元' },
      { name: '填寫客戶服務申請表之【附件一】委託書及委託人身分證明文件', note: '若有受託需檢附' },
    ],
  },
  {
    id: 'inheritance',
    title: '繼承手續',
    days: '7 天',
    desc: '原契約持有人身故後，辦理繼承變更所需文件。',
    items: [
      { name: '契約書正本', note: '✓ 必備' },
      { name: '客戶服務申請表', note: '✓ 必備' },
      { name: '客戶服務申請表之【附件三】繼承殯葬商品所有權切結書', note: '✓ 必備' },
      { name: '填寫讓渡申請 (於客戶服務申請表內)', note: '✓ 必填' },
      { name: '繼承人雙證件及印章', note: '✓ 必備' },
      { name: 'ACH 自動扣款申請單', note: '若繼續分期需檢附' },
      { name: '死亡證明或除戶證明', note: '✓ 必備' },
      { name: '3 個月內現戶現況全戶戶籍謄本', note: '✓ 必備 (非法定繼承人另須檢附足以證明繼承或權利取得資格之相關證明文件)' },
    ],
  },
  {
    id: 'fulfillment',
    title: '履約手續',
    days: '依約辦理',
    desc: '生前契約轉為實際禮儀服務（辦喪）時所需文件。',
    items: [
      { name: '契約書正本', note: '✓ 必備' },
      { name: '持有人雙證件及印章', note: '✓ 必備' },
      { name: '繳款證明', note: '契約剩餘價款與更添款項' },
      { name: '指定使用申請書 (契約書中附件)', note: '✓ 必備' },
      { name: '遺體接運切結書 (契約書中附件)', note: '✓ 必備' },
      { name: '死亡證明或除戶證明', note: '✓ 必備' },
      { name: '火化許可', note: '✓ 必備' },
      { name: '殯儀服務完成確認書 (契約書中附件)', note: '✓ 必備' },
      { name: '填寫客戶服務申請表之【附件一】委託書及委託人身分證明文件', note: '若有受託需檢附' },
    ],
  },
  {
    id: 'termination',
    title: '解約手續',
    days: '15 天',
    desc: '辦理契約終止與退款所需檢附文件。',
    items: [
      { name: '契約書正本', note: '✓ 必備' },
      { name: '客戶服務申請表', note: '✓ 必備' },
      { name: '填寫客戶服務申請表之【附件四】生前殯葬服務契約解約申請書', note: '✓ 必填' },
      { name: '持有人雙證件及印章', note: '✓ 必備' },
      { name: '填寫客戶服務申請表之【附件一】委託書及委託人身分證明文件', note: '若有受託需檢附' },
    ],
  },
  {
    id: 'reinstatement',
    title: '緩繳復效手續',
    days: '依約辦理',
    desc: '分期契約申請緩繳後辦理恢復效力所需文件。',
    items: [
      { name: '契約書正本', note: '✓ 必備' },
      { name: '客戶服務申請表', note: '✓ 必備' },
      { name: '填寫客戶服務申請表之緩繳復效申請', note: '✓ 必填' },
      { name: '持有人雙證件及印章', note: '✓ 必備' },
      { name: '繳款證明', note: '滯納金與復效首期款項' },
      { name: 'ACH 自動扣款申請單', note: '✓ 必填' },
      { name: '填寫客戶服務申請表之【附件一】委託書及委託人身分證明文件', note: '若有受託需檢附' },
    ],
  },
  {
    id: 'customer_update',
    title: '客資變更手續',
    days: '7 天',
    desc: '變更聯絡地址、電話、姓名或補發契約等所需文件。',
    items: [
      { name: '客戶基本資料表', note: '✓ 必備' },
      { name: '客戶服務申請表', note: '✓ 必備' },
      { name: '契約書正本', note: '辦理更名時需檢附' },
      { name: '客戶服務申請表之【附件二】遺失切結書(補發申請書)', note: '辦理遺失補發時需檢附' },
      { name: '持有人雙證件及印章', note: '✓ 必備' },
      { name: '3 個月內現戶現況全戶戶籍謄本', note: '辦理更名須出具' },
      { name: '填寫客戶服務申請表之【附件一】委託書及委託人身分證明文件', note: '若有受託需檢附 (註：遺失補發不可委託)' },
    ],
  },
];

export default function Procedures() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(procedureCategories[0].id);

  const currentCategory = procedureCategories.find((cat) => cat.id === activeTab) || procedureCategories[0];

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigate('/contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section id="procedures" className="pt-16 pb-24 lg:pt-20 lg:pb-32 bg-ivory-100/60 relative overflow-hidden">
      <div ref={ref} className="mx-auto max-w-5xl px-6 relative">
        
        {/* 標題區 */}
        <div className="text-center mb-12">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            PROCEDURE GUIDE
          </p>
          <h1 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-800 mt-2 reveal reveal-delay-1">
            手續服務指南
          </h1>
          <div className="gold-divider w-32 mx-auto mt-4 reveal reveal-delay-2" />
          <p className="text-ink-500 text-sm sm:text-base mt-4 max-w-2xl mx-auto reveal reveal-delay-3">
            請於下方選擇您欲辦理的手續項目，即可快速查詢所需檢附的文件資料與辦理天數。
          </p>
        </div>

        {/* 下拉選單與標籤切換列 */}
        <div className="mb-10 reveal">
          <div className="block md:hidden mb-4">
            <label htmlFor="procedure-select" className="block text-sm font-medium text-ink-700 mb-2">
              選擇申辦項目：
            </label>
            <select
              id="procedure-select"
              value={activeTab}
              onChange={(e) => setActiveTab(e.target.value)}
              className="w-full bg-white border border-ivory-300 rounded-xl px-4 py-3 text-ink-900 text-base font-medium focus:outline-none focus:ring-2 focus:ring-gold-500 shadow-sm font-['Microsoft_JhengHei']"
            >
              {procedureCategories.map((cat) => (
                <option key={cat.id} value={cat.id}>
                  {cat.title}（工作天：{cat.days}）
                </option>
              ))}
            </select>
          </div>

          <div className="hidden md:flex flex-wrap justify-center gap-2.5">
            {procedureCategories.map((cat) => {
              const isActive = activeTab === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-5 py-3 rounded-xl font-serif-tc text-sm font-bold transition-all duration-300 cursor-pointer shadow-sm flex items-center gap-2 ${
                    isActive
                      ? 'bg-gold-600 text-white shadow-md scale-105'
                      : 'bg-white/80 hover:bg-ivory-200 text-ink-700 border border-ivory-300'
                  }`}
                >
                  <span>{cat.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 選中項目的詳細文件內容卡片 */}
        <div className="bg-white border border-ivory-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-lg mb-12 reveal">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-6 border-b border-ivory-200 gap-4">
            <div>
              <span className="text-xs tracking-wider uppercase font-bold text-white bg-gold-600 px-3 py-1 rounded-full inline-block mb-2 shadow-sm">
                申辦項目詳情
              </span>
              <h3 className="font-serif-tc text-2xl lg:text-3xl font-bold text-ink-900">
                {currentCategory.title}
              </h3>
              <p className="text-ink-600 text-sm mt-1">{currentCategory.desc}</p>
            </div>
            <div className="flex items-center gap-2 bg-ivory-100 px-4 py-2.5 rounded-2xl border border-ivory-300 shrink-0">
              <Clock className="w-4 h-4 text-gold-600" />
              <span className="text-sm font-medium text-ink-800 font-['Microsoft_JhengHei']">
                工作天數：<strong className="text-gold-700">{currentCategory.days}</strong>
              </span>
            </div>
          </div>

          <h4 className="font-serif-tc text-base font-bold text-ink-800 mb-4 flex items-center gap-2">
            <FileText className="w-4 h-4 text-gold-600" />
            <span>必備與檢附文件清單：</span>
          </h4>

          {/* 文件清單列表（整張項目卡片均為深金底白字） */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-8">
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start justify-between p-4 rounded-xl bg-gold-600 text-white shadow-md gap-3 border border-gold-500"
              >
                <div className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-ivory-100 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base font-medium leading-relaxed">{item.name}</span>
                </div>
                <span className="text-xs px-2.5 py-1 rounded-md bg-white/20 text-white font-medium shrink-0 shadow-sm text-right whitespace-normal max-w-[200px] leading-snug">
                  {item.note}
                </span>
              </div>
            ))}
          </div>

          {/* 下載按鈕（保留在左側，無「下載」二字） */}
          <div className="mt-6 flex items-center">
            <a
              href="/document/寶慈客戶服務申請表.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gold-600 hover:bg-gold-700 text-white text-sm sm:text-base font-medium transition-colors shadow-sm"
            >
              <Download className="w-5 h-5" />
              <span>寶慈客戶服務申請表</span>
            </a>
          </div>
        </div>

        {/* 申辦注意事項與備註說明 */}
        <div className="bg-white/80 border border-ivory-200 rounded-3xl p-6 sm:p-8 mb-16 shadow-sm reveal">
          <h4 className="font-serif-tc text-lg font-bold text-ink-900 mb-4">
            <span>申辦注意事項與備註說明</span>
          </h4>
          <ol className="space-y-3 text-sm text-ink-700 list-decimal pl-5">
            <li><strong>喪葬證明申請</strong>：履約服務完成後如有申請證明之需要，可提出申請喪葬證明。</li>
            <li><strong>委託代辦規範</strong>：新購、客戶資料變更及遺失補發手續，須由本人親自申辦；繼承手續須由全體繼承人共同辦理，不得委託代理人代辦。其餘項目如委由代理人辦理，須檢附授權委託書正本及委託人、受託人雙方有效身分證件。</li>
            <li><strong>款項與手續費</strong>：轉讓手續需繳納手續費新台幣 1,000 元整；轉讓件與履約件不適用分期付款。</li>
          </ol>
        </div>

        {/* 底部諮詢引導 */}
        <div className="text-center reveal">
          <p className="text-ink-600 text-sm mb-4">手續申辦上有任何疑問，或需要專人協助核對文件嗎？</p>
          <a
            href="/contact"
            onClick={handleContactClick}
            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-ink-900 hover:bg-gold-600 text-ivory-50 font-medium text-sm sm:text-base transition-all shadow-md cursor-pointer"
          >
            聯絡我們與專人諮詢
          </a>
        </div>

      </div>
    </section>
  );
}
