import Image from "next/image";

const featuredNews = {
  category: "DÜNYA",
  time: "şimdi",
  title: "BM: Gazze'de yerinden edilmiş kişilerin yaşadığı yerlerin yüzde ...",
  summary:
    "BM, Gazze'de İsrail'in kısıtlamaları nedeniyle yerinden edilmiş kişilerin yaşadığı bölgeleri...",
  source: "Kaynak: aa • Okuma Süresi: 1 dk",
  image:
    "https://images.unsplash.com/photo-1508179522353-11ba468c4a1c?auto=format&fit=crop&w=1600&q=80",
};

const newsCards = [
  {
    agency: "aa",
    category: "DİPLOMASİ",
    time: "şimdi",
    title: "Netanyahu ile Trump'ın İran'a karşı yeni açıklamaları...",
    image:
      "https://images.unsplash.com/photo-1575320181282-9afab399332c?auto=format&fit=crop&w=1000&q=80",
  },
  {
    agency: "aa",
    category: "DİPLOMASİ",
    time: "şimdi",
    title: "KKTC Dışişleri, Türkiye’nin Guterres görüşmesini değerlendirdi...",
    image:
      "https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1000&q=80",
  },
  {
    agency: "aa",
    category: "SPOR",
    time: "şimdi",
    title: "Adalet Bakanı Gürlek'ten spor gündemine ilişkin açıklama...",
    image:
      "https://images.unsplash.com/photo-1572635196237-14b3f281503f?auto=format&fit=crop&w=1000&q=80",
  },
  {
    agency: "aa",
    category: "DİPLOMASİ",
    time: "şimdi",
    title: "TCMB ile Suriye Merkez Bankası arasında temaslar başladı...",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
  },
];

function Header() {
  return (
    <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-b from-blue-500 to-blue-700 text-2xl text-white shadow-sm">
            🔒
          </div>
          <div className="text-4xl leading-none text-slate-800 font-[family-name:var(--font-lora)]">
            Haber<span className="text-blue-700">Açık</span>
          </div>
        </div>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-2xl text-slate-600">
          ⚙️
        </div>
      </div>
    </header>
  );
}

function FeaturedCard() {
  return (
    <article className="relative overflow-hidden rounded-3xl shadow-lg">
      <Image src={featuredNews.image} alt={featuredNews.title} width={1600} height={1000} className="h-[28rem] w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/20" />
      <div className="absolute inset-x-0 bottom-0 p-6 text-white">
        <div className="mb-4 flex items-center gap-3 text-lg">
          <span className="rounded-full bg-blue-700 px-4 py-1.5 font-semibold">{featuredNews.category}</span>
          <span className="text-slate-100">{featuredNews.time}</span>
        </div>
        <h1 className="text-4xl font-semibold leading-tight font-[family-name:var(--font-lora)]">{featuredNews.title}</h1>
        <p className="mt-3 text-2xl text-slate-200">{featuredNews.summary}</p>
        <p className="mt-4 text-lg text-slate-300">{featuredNews.source}</p>
      </div>
    </article>
  );
}

function NewsGridCard({ item }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="relative">
        <Image src={item.image} alt={item.title} width={1000} height={600} className="h-48 w-full object-cover" />
        <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-3xl font-semibold text-white">
          {item.agency}
        </span>
      </div>
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-2xl font-semibold text-blue-700">{item.category}</span>
          <span className="text-2xl text-slate-600">{item.time}</span>
        </div>
        <p className="line-clamp-2 text-3xl leading-snug text-slate-800 font-[family-name:var(--font-lora)]">{item.title}</p>
      </div>
    </article>
  );
}

function BottomNav() {
  const items = [
    { label: "Akış", icon: "🏠", active: true },
    { label: "Keşfet", icon: "🧭" },
    { label: "Gazeteler", icon: "🗞️" },
    { label: "Ayarlar", icon: "⚙️" },
  ];

  return (
    <nav className="sticky bottom-0 z-20 mt-10 border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-5xl grid-cols-4 px-2 py-3">
        {items.map((item) => (
          <div key={item.label} className="flex flex-col items-center gap-1">
            <div
              className={`flex h-12 w-12 items-center justify-center rounded-full text-xl ${
                item.active ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-500"
              }`}
            >
              {item.icon}
            </div>
            <span className={`text-sm ${item.active ? "text-blue-700" : "text-slate-600"}`}>{item.label}</span>
          </div>
        ))}
      </div>
    </nav>
  );
}

export default function HaberAcikPage() {
  return (
    <div className="min-h-screen bg-[#f4f6ff] text-slate-900">
      <Header />
      <main className="mx-auto max-w-5xl px-4 py-5 sm:px-6">
        <FeaturedCard />
        <section className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {newsCards.map((item) => (
            <NewsGridCard key={item.title} item={item} />
          ))}
        </section>
      </main>
      <BottomNav />
    </div>
  );
}
