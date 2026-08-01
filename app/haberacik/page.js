import Image from "next/image";

const appHeroImage =
  "https://github.com/user-attachments/assets/e6f0c0c0-aea0-489a-9216-05613b7f5639";
const storeBannerImage =
  "https://github.com/user-attachments/assets/8573dbc4-3bbd-4211-b313-4ec07529d78b";

const features = [
  "Çok fazla kaynağı sürekli tarar: Ulusal gazetelerden yerel sitelere, ekonomi portallarından teknoloji yayınlarına kadar geniş bir kaynak havuzunu dakikalar içinde tarayarak gündemi anlık takip eder.",
  "Aynı haberi 30 kez okutmaz: Yapay zekâ destekli kümeleme sistemi, farklı sitelerde farklı başlıklarla yayınlanan aynı haberi tek bir başlık altında toplar.",
  "Önemliyi önemsizden ayırır: Büyük dil modelleri, gündem değeri taşıyan haberleri seçer ve yalnızca bilmeye değer olanı gösterir.",
  "Kritik gelişmeleri anında bildirir: Gündemi değiştiren bir haber çıktığında, bildirim bombardımanı olmadan haberdar eder.",
];

export default function HaberAcikPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-10">
        <section className="space-y-5 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Haber Açık</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">
            Gündemi Senin Yerine Okuyan Haber Uygulaması
          </h1>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            Her sabah onlarca haber sitesi, yüzlerce başlık, birbirinin kopyası içerikler... Gündemi takip
            etmek neredeyse yarı zamanlı bir işe dönüştü. Haber Açık, Türkiye&apos;nin dört bir yanındaki haber
            kaynaklarını sizin yerinize tarar, önemli olanı ayıklar ve size sade, hızlı, reklamsız bir akış
            sunar.
          </p>
        </section>

        <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <Image
            src={appHeroImage}
            alt="Haber Açık uygulama ikonu"
            width={512}
            height={512}
            className="h-auto w-full"
          />
        </section>

        <section className="space-y-5 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Ne Yapıyor?</h2>
          <ul className="space-y-4 text-slate-700">
            {features.map((feature) => (
              <li key={feature} className="leading-relaxed">
                {feature}
              </li>
            ))}
          </ul>
        </section>

        <section className="space-y-4 rounded-3xl border border-blue-100 bg-blue-50 p-6 shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold text-blue-900">Neden Haber Açık?</h2>
          <p className="leading-relaxed text-blue-900/90">
            Çünkü haber okumak yorucu olmamalı. Haber Açık&apos;ın arkasında, haberleri anlam düzeyinde
            karşılaştıran gömme (embedding) teknolojisi ve modern bir yapay zekâ hattı çalışır; önünüzde ise
            sadece temiz, hızlı ve dikkat dağıtmayan bir arayüz vardır.
          </p>
          <p className="font-medium text-blue-900">Gündem karışık olabilir — ama artık haberiniz açık.</p>
        </section>

        <section className="space-y-4 text-center">
          <p className="text-lg font-semibold">Haber Açık&apos;ı indirin, gündemi sizin yerinize okusun.</p>
          <p className="text-slate-600">Yakında App Store ve Play Store&apos;da.</p>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <Image
              src={storeBannerImage}
              alt="Haber Açık mağaza görseli"
              width={1200}
              height={630}
              className="h-auto w-full"
            />
          </div>
        </section>

        <section className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm sm:p-8">
          <h2 className="text-2xl font-semibold">Bize Ulaşın</h2>
          <p className="leading-relaxed text-slate-700">
            Uygulama veya geliştiricisiyle ilgili sorularınız, geri bildirimleriniz ya da içerik talepleriniz için
            bize e-posta ile ulaşabilirsiniz.
          </p>
          <p>
            <a
              href="mailto:canrollas@gmail.com"
              className="font-medium text-blue-700 underline underline-offset-2"
            >
              canrollas@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
