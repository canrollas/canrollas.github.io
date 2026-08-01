export const metadata = {
  title: "Haber Açık Gizlilik Politikası",
  description: "Haber Açık mobil uygulaması için gizlilik politikası.",
};

export default function HaberAcikPrivacyPage() {
  return (
    <main className="min-h-screen bg-slate-50 px-4 py-12 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        <header className="space-y-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">Haber Açık</p>
          <h1 className="text-3xl font-semibold leading-tight sm:text-4xl">Gizlilik Politikası</h1>
          <p className="text-sm text-slate-600">Yürürlük Tarihi: 29 Temmuz 2026</p>
          <p className="leading-relaxed text-slate-700">
            Bu Gizlilik Politikası, Haber Açık mobil uygulamasını (iOS ve Android) kullanırken bilgilerinizin nasıl
            ele alındığını açıklar. Uygulamayı kullanarak bu politikada açıklanan uygulamaları kabul etmiş olursunuz.
          </p>
        </header>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <PolicySection title="1. Topladığımız Veriler">
            Haber Açık, kullanıcıların kimliğini belirlemeye yarayan kişisel verileri toplamaz, saklamaz veya üçüncü
            kişilerle paylaşmaz. Ad-soyad, e-posta adresi, telefon numarası, kimlik numarası, açık adres veya benzeri
            kişisel bilgiler uygulama tarafından talep edilmez.
          </PolicySection>

          <PolicySection title="2. Cihazda Yerel Olarak Saklanan Bilgiler">
            Uygulama, yalnızca kullanıcı deneyimini iyileştirmek amacıyla sizin seçtiğiniz haber kategorisi
            tercihlerini cihazınızın yerel depolama alanında tutabilir. Bu veriler sadece cihazınızda bulunur, sunucuya
            gönderilmez ve uygulama kaldırıldığında otomatik olarak silinir.
          </PolicySection>

          <PolicySection title="3. Bildirim Tercihleri">
            Haber Açık, yalnızca kullanıcı açıkça izin verdiğinde bildirim göndermeyi dener. Bildirim almak
            istemediğinizde bu özellik devre dışı kalır ve size bildirim gönderilmez. Bildirim izinleri tamamen
            işletim sistemi (iOS/Android) ayarlarından yönetilebilir.
          </PolicySection>

          <PolicySection title="4. Analitik, Reklam ve Takip">
            Haber Açık kullanıcı davranışlarını kişisel düzeyde izleyen bir takip altyapısı kullanmamayı hedefler.
            Uygulama içinde kişisel profil çıkarmaya yönelik reklam kimliği, hassas takip mekanizmaları veya kullanıcıyı
            bireysel olarak hedefleyen pazarlama amaçlı veri işleme yapılmaz.
          </PolicySection>

          <PolicySection title="5. Üçüncü Taraf İçerikler ve Bağlantılar">
            Uygulama, haber içeriklerini farklı yayın kaynaklarından derleyebilir veya bağlantı gösterebilir. Bir
            bağlantıya tıklayarak üçüncü taraf bir siteye geçtiğinizde, ilgili sitenin kendi gizlilik politikası
            geçerlidir. Haber Açık, bu üçüncü taraf sitelerin veri uygulamalarından sorumlu değildir.
          </PolicySection>

          <PolicySection title="6. Veri Saklama Süresi">
            Sunucu tarafında kişisel veri tutulmadığı için merkezi bir kullanıcı verisi saklama süreci uygulanmaz.
            Yerel cihazda tutulan kategori tercihleri ise yalnızca kullanıcı deneyimi için kullanılır ve uygulama
            kaldırıldığında silinir.
          </PolicySection>

          <PolicySection title="7. Çocukların Gizliliği">
            Haber Açık genel kitleye yönelik bir haber uygulamasıdır ve bilerek çocuklardan kişisel veri toplamaz.
            Ebeveynler veya yasal temsilciler, uygulamanın kullanımına ilişkin gerekli kontrolleri cihaz ayarları
            üzerinden sağlayabilir.
          </PolicySection>

          <PolicySection title="8. Veri Güvenliği">
            Kişisel veri toplamama yaklaşımımız, gizlilik risklerini en aza indirmeye yöneliktir. Bununla birlikte,
            hiçbir dijital sistem yüzde yüz risksiz değildir. Bu nedenle uygulama ve altyapı düzenli olarak gözden
            geçirilir ve uygun teknik/organizasyonel önlemler sürdürülür.
          </PolicySection>

          <PolicySection title="9. Haklarınız ve Kontrol Seçenekleri">
            Kullanıcılar uygulamayı diledikleri zaman kaldırabilir, bildirim izinlerini geri çekebilir ve kategori
            tercihlerini değiştirerek yerel verilerini yönetebilir. Uygulamanın silinmesiyle birlikte cihazda tutulan
            yerel tercihler de kaldırılır.
          </PolicySection>

          <PolicySection title="10. Politika Değişiklikleri">
            Bu Gizlilik Politikası zaman zaman güncellenebilir. Önemli değişikliklerde güncel metin bu sayfada
            yayımlanır. Güncel sürüm her zaman bu sayfada yer alan tarih ile birlikte sunulur.
          </PolicySection>

          <PolicySection title="11. İletişim">
            Gizlilik politikasıyla veya uygulamayla ilgili sorularınız için{" "}
            <a href="mailto:canrollas@gmail.com" className="font-medium text-blue-700 underline underline-offset-2">
              canrollas@gmail.com
            </a>{" "}
            adresinden bizimle iletişime geçebilirsiniz.
          </PolicySection>
        </section>
      </div>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="space-y-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="leading-relaxed text-slate-700">{children}</p>
    </section>
  );
}
