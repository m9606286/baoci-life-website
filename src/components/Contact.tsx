import React, { useState } from 'react';
import { useReveal } from '@/hooks/useReveal';
import { MapPin, Send, CheckCircle2, Building, Phone, Mail, FileEdit, ExternalLink, User, HelpCircle, MessageSquare } from 'lucide-react';

const taiwanLocations = [
  '基隆市', '台北市', '新北市', '桃園市', '新竹市', '新竹縣',
  '苗栗縣', '台中市', '彰化縣', '南投縣', '雲林縣', '嘉義市',
  '嘉義縣', '台南市', '高雄市', '屏東縣', '宜蘭縣', '花蓮縣',
  '台東縣', '澎湖縣', '金門縣', '連江縣'
];

const serviceOptions = [
  '商品諮詢',
  '手續諮詢',
  '繳款諮詢',
  '禮儀服務',
  '陵園服務',
  '意見反映'
];

// 銷售通路據點列表 (晨暉資產)
const salesChannels = [
  {
    name: '晨暉資產股份有限公司',
    address: '臺北市松山區復興北路361巷14號1樓',
    mapUrl: 'https://www.google.com/maps/search/?api=1&query=臺北市松山區復興北路361巷14號1樓',
    phone: '(02) 2514-7758',
    phoneTel: '0225147758',
    logo: '/logo1.png',
  },
];

export default function Contact() {
  const revealResult = useReveal<HTMLDivElement>();
  const ref = Array.isArray(revealResult) ? revealResult[0] : revealResult;

  // 預設頁籤為 'headquarter' (總公司)
  const [activeTab, setActiveTab] = useState<'headquarter' | 'channel' | 'form'>('headquarter');

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    service: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzBIEBCjy4KlujkBQeROvmFJblaeKucJCGuUUe4HL7p_7h6f_bC4xhEqdER6dtjQxVb/exec';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.location) {
      alert('請選擇您的居住地點！');
      return;
    }

    if (!formData.service) {
      alert('請選擇您的需求服務類型！');
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.result === 'success') {
        setSubmitted(true);
      } else {
        alert('表單送出失敗，請稍後再試或直接撥打免付費專線！');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('網路連線異常，請稍後再試！');
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative -mt-6 lg:-mt-10">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="bg-white/90 border border-gold-400/40 rounded-3xl p-10 shadow-xl backdrop-blur-md">
            <CheckCircle2 className="w-16 h-16 text-gold-600 mx-auto mb-4" />
            <h3 className="text-2xl font-serif-tc font-bold text-ink-950 mb-2">感謝您的填寫</h3>
            <p className="text-slate-700 font-medium mb-6">我們已收到您的諮詢需求，將會盡快由專人與您聯繫。</p>
            <button
              onClick={() => {
                setSubmitted(false);
                setFormData({ name: '', phone: '', email: '', location: '', service: '', message: '' });
              }}
              className="bg-ink-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gold-600 transition-all shadow-md cursor-pointer"
            >
              填寫其他諮詢
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="pt-2 pb-24 lg:pt-4 lg:pb-32 bg-ivory-100 relative -mt-6 lg:-mt-10 overflow-hidden">
      <div ref={ref} className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* 標題區：CONTACT US */}
        <div className="text-center mb-10">
          <p className="font-serif-tc text-gold-600 text-xs sm:text-sm tracking-[0.35em] uppercase font-bold reveal">
            CONTACT US
          </p>
          <h2 className="font-serif-tc text-3xl md:text-4xl lg:text-5xl font-bold text-ink-950 mt-2 reveal reveal-delay-1">
            聯絡我們
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-transparent via-gold-400 to-transparent mx-auto mt-4 reveal reveal-delay-2" />
        </div>

        {/* 頂部切換頁籤 */}
        <div className="flex justify-center mb-12 relative z-30 reveal reveal-delay-1">
          <div className="inline-flex rounded-2xl bg-white/90 p-1.5 border border-gold-400/40 shadow-lg backdrop-blur-md">
            <button
              type="button"
              onClick={() => setActiveTab('headquarter')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-serif-tc font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                activeTab === 'headquarter'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-md'
                  : 'text-slate-800 hover:text-gold-700 hover:bg-gold-50/60'
              }`}
            >
              <Building className="w-4 h-4 pointer-events-none" />
              <span className="pointer-events-none">總公司</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('channel')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-serif-tc font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                activeTab === 'channel'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-md'
                  : 'text-slate-800 hover:text-gold-700 hover:bg-gold-50/60'
              }`}
            >
              <Building className="w-4 h-4 pointer-events-none" />
              <span className="pointer-events-none">銷售通路</span>
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('form')}
              className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-xl font-serif-tc font-bold text-sm sm:text-base transition-all duration-200 cursor-pointer ${
                activeTab === 'form'
                  ? 'bg-gradient-to-r from-gold-600 to-gold-500 text-white shadow-md'
                  : 'text-slate-800 hover:text-gold-700 hover:bg-gold-50/60'
              }`}
            >
              <FileEdit className="w-4 h-4 pointer-events-none" />
              <span className="pointer-events-none">線上諮詢表單</span>
            </button>
          </div>
        </div>

        {/* 總公司卡片 (修復 hover 邊緣裁切問題) */}
        {activeTab === 'headquarter' && (
          <div className="max-w-2xl mx-auto mb-12 transition-all duration-300">
            <div className="group relative bg-white/95 rounded-3xl p-7 sm:p-9 border border-gold-400/35 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-16 h-16 p-1 flex items-center justify-center shrink-0">
                  <img src="/logo.png" alt="寶慈生命事業" className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="font-serif-tc text-2xl font-bold text-ink-950">
                  寶慈生命事業股份有限公司
                </h3>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-slate-700 font-normal">
                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 mt-0.5 shrink-0 text-gold-600" />
                  <div className="flex flex-wrap gap-x-6 gap-y-1">
                    <a href="tel:062678859" className="hover:text-gold-700 transition-colors">
                      電話：<span>(06) 2678859</span>
                    </a>
                    <a href="tel:0800600603" className="hover:text-gold-700 transition-colors">
                      24 小時服務專線：<span>0800-600-603</span>
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gold-600" />
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=台北市內湖區新湖二路329號5樓"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-700 transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>地址：</span>
                    <span>台北市內湖區新湖二路329號5樓</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 shrink-0 text-gold-600" />
                  <a href="mailto:service@apexbaoci.com.tw" className="hover:text-gold-700 transition-colors">
                    Email：<span>service@apexbaoci.com.tw</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 銷售通路卡片 (修復 hover 邊緣裁切問題) */}
        {activeTab === 'channel' && (
          <div className="max-w-2xl mx-auto mb-12 space-y-5 transition-all duration-300">
            {salesChannels.map((channel, idx) => (
              <div
                key={idx}
                className="group relative bg-white/95 rounded-3xl p-7 sm:p-9 border border-gold-400/35 shadow-xl transition-all duration-300 hover:shadow-2xl"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 p-1 flex items-center justify-center shrink-0">
                    <img src={channel.logo} alt={channel.name} className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105" />
                  </div>
                  <h3 className="font-serif-tc text-2xl font-bold text-ink-950">
                    {channel.name}
                  </h3>
                </div>

                <div className="space-y-4 text-sm sm:text-base text-slate-700 font-normal">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-gold-600" />
                    <a
                      href={channel.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-gold-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <span>地址：</span>
                      <span>{channel.address}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 shrink-0 text-gold-600" />
                    <a href={`tel:${channel.phoneTel}`} className="hover:text-gold-700 transition-colors">
                      電話：<span>{channel.phone}</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* 線上諮詢表單區塊 */}
        {activeTab === 'form' && (
          <div className="bg-white/90 backdrop-blur-md border border-gold-400/35 rounded-3xl p-6 sm:p-10 shadow-xl transition-all duration-300">
            <div className="text-center mb-8 space-y-2">
              <p className="text-slate-800 text-sm sm:text-base font-medium">
                填寫下方表單，將有專人為您提供尊榮、溫暖的諮詢服務。
              </p>
              <p className="text-gold-700 font-bold text-sm sm:text-base">
                臨終接體服務請直接撥打24小時服務專線 <a href="tel:0800600603">0800-600-603</a>
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 姓名 */}
                <div className="group">
                  <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <User className="w-4 h-4" />
                    </div>
                    <span>您的姓名</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="請輸入姓名"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 text-base shadow-sm font-normal"
                  />
                </div>

                {/* 電話 */}
                <div className="group">
                  <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <Phone className="w-4 h-4" />
                    </div>
                    <span>聯絡電話</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="請輸入電話號碼"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 text-base shadow-sm font-normal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* 電子郵件 */}
                <div className="group">
                  <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <Mail className="w-4 h-4" />
                    </div>
                    <span>電子郵件 <span className="text-stone-400 font-normal text-xs">(選填)</span></span>
                  </label>
                  <input
                    type="email"
                    placeholder="example@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all text-ink-900 text-base shadow-sm font-normal"
                  />
                </div>

                {/* 居住地點 */}
                <div className="group">
                  <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                    <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <span>居住地點</span>
                  </label>
                  <div className="relative">
                    <select
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={`w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none cursor-pointer text-base shadow-sm font-normal ${
                        !formData.location ? 'text-stone-400' : 'text-ink-900'
                      }`}
                    >
                      <option value="" disabled hidden>
                        -- 請選擇縣市 --
                      </option>
                      {taiwanLocations.map((loc) => (
                        <option key={loc} value={loc} className="text-ink-900 font-normal">
                          {loc}
                        </option>
                      ))}
                    </select>
                    <MapPin className="w-5 h-5 text-stone-400 absolute right-4 top-3.5 pointer-events-none" />
                  </div>
                </div>
              </div>

              {/* 需求服務類型 */}
              <div className="group">
                <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                  <span>需求服務類型</span>
                </label>
                <select
                  required
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className={`w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all appearance-none cursor-pointer text-base shadow-sm font-normal ${
                    !formData.service ? 'text-stone-400' : 'text-ink-900'
                  }`}
                >
                  <option value="" disabled hidden>
                    -- 請選擇服務類型 --
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="text-ink-900 font-normal">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* 留言內容 */}
              <div className="group">
                <label className="flex items-center gap-2 text-base font-normal text-ink-900 mb-2">
                  <div className="w-7 h-7 rounded-lg bg-ivory-200 text-gold-600 group-hover:!bg-gold-500 group-hover:!text-white flex items-center justify-center transition-colors duration-300 shadow-xs">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <span>諮詢內容 / 需求留言</span>
                </label>
                <textarea
                  rows={4}
                  placeholder="請簡述您的需求或想詢問的問題..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white border border-stone-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-gold-500 outline-none transition-all resize-none text-ink-900 text-base shadow-sm font-normal"
                />
              </div>

              {/* 送出按鈕 */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-ivory-100 hover:bg-gold-500 text-ink-900 hover:text-white border border-gold-400/50 py-3.5 rounded-xl font-bold transition-all shadow-sm hover:shadow-md flex items-center justify-center space-x-2 disabled:opacity-50 cursor-pointer group"
              >
                {loading ? (
                  <span>送出中...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4 text-gold-600 group-hover:text-white transition-colors" />
                    <span>確認送出諮詢</span>
                  </>
                )}
              </button>
            </form>
          </div>
        )}

      </div>
    </section>
  );
}
