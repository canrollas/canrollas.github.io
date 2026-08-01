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
          <p className="text-sm text-slate-600">Son Güncelleme: 29 Temmuz 2026</p>
        </header>

        <section className="space-y-6 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          <PolicySection title="Giriş">
            <p>
              Bu Gizlilik Politikası (&quot;Politika&quot;), Haber Açık mobil uygulamasının (&quot;Uygulama&quot;) iOS ve Android
              platformlarındaki sürümlerini kullanırken bilgilerinizin nasıl ele alındığını, hangi verilerin işlendiğini,
              hangi verilerin işlenmediğini ve gizliliğinizin korunması için alınan önlemleri ayrıntılı biçimde açıklamak
              amacıyla hazırlanmıştır. Haber Açık olarak temel ilkemiz, kullanıcı gizliliğini bir ek özellik olarak değil,
              uygulamanın tasarımının merkezinde yer alan bir prensip olarak benimsemektir. Bu yaklaşım, literatürde
              &quot;tasarımda gizlilik&quot; (privacy by design) ve &quot;varsayılan olarak gizlilik&quot; (privacy by default) olarak bilinen
              ilkelerle uyumludur.
            </p>
            <p>
              Uygulamayı indirerek, yükleyerek veya kullanarak bu Politikada açıklanan uygulamaları okuduğunuzu,
              anladığınızı ve kabul ettiğinizi beyan etmiş olursunuz. Bu Politikanın herhangi bir bölümünü kabul
              etmiyorsanız, lütfen Uygulamayı kullanmayınız.
            </p>
            <p>
              Bu Politika, 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) başta olmak üzere Türkiye Cumhuriyeti
              mevzuatı ve ilgili olduğu ölçüde Avrupa Birliği Genel Veri Koruma Tüzüğü (&quot;GDPR&quot;) çerçevesinde şeffaflık
              yükümlülüklerini yerine getirmek amacıyla hazırlanmıştır.
            </p>
          </PolicySection>

          <PolicySection title="Tanımlar">
            <p>Bu Politikada geçen bazı kavramların anlamları aşağıdaki gibidir:</p>
            <ul>
              <li>
                <strong>Kişisel Veri:</strong> Kimliği belirli veya belirlenebilir gerçek kişiye ilişkin her türlü bilgi
                (ör. ad-soyad, e-posta adresi, telefon numarası, konum bilgisi, kimlik numarası).
              </li>
              <li>
                <strong>Veri İşleme:</strong> Kişisel verilerin tamamen veya kısmen otomatik olan ya da herhangi bir veri
                kayıt sisteminin parçası olmak kaydıyla otomatik olmayan yollarla elde edilmesi, kaydedilmesi,
                depolanması, muhafaza edilmesi, değiştirilmesi, yeniden düzenlenmesi, açıklanması, aktarılması,
                devralınması, elde edilebilir hâle getirilmesi, sınıflandırılması ya da kullanılmasının engellenmesi gibi
                veriler üzerinde gerçekleştirilen her türlü işlem.
              </li>
              <li>
                <strong>Yerel Depolama:</strong> Verilerin yalnızca kullanıcının kendi cihazında, uygulamaya ayrılmış
                depolama alanında tutulması; herhangi bir sunucuya aktarılmaması.
              </li>
              <li>
                <strong>Anlık Bildirim (Push Notification):</strong> İşletim sistemi aracılığıyla cihazınıza iletilen,
                uygulama kapalıyken dahi görüntülenebilen kısa mesajlar.
              </li>
              <li>
                <strong>Cihaz Token&apos;ı (Push Token):</strong> Anlık bildirimlerin doğru cihaza iletilebilmesi için işletim
                sistemi ve bildirim altyapı sağlayıcısı tarafından üretilen, rastgele oluşturulmuş teknik tanımlayıcı.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="1. Veri Toplamama İlkemiz">
            <p>
              Haber Açık, kullanıcıların kimliğini doğrudan belirlemeye yarayan kişisel verileri toplamaz, saklamaz,
              işlemez veya üçüncü kişilerle paylaşmaz. Bu kapsamda:
            </p>
            <ul>
              <li>Ad-soyad, e-posta adresi, telefon numarası talep edilmez.</li>
              <li>T.C. kimlik numarası, pasaport numarası veya benzeri resmi kimlik bilgileri talep edilmez.</li>
              <li>
                Açık adres, konum verisi (GPS), rehber, fotoğraf galerisi, mikrofon veya kamera erişimi istenmez.
              </li>
              <li>
                Uygulama içinde hesap oluşturma, üyelik veya oturum açma zorunluluğu bulunmaz; dolayısıyla kullanıcı
                adı, parola veya profil bilgisi işlenmez.
              </li>
              <li>
                Kullanıcının okuma alışkanlıkları, hangi habere ne kadar süre baktığı gibi davranışsal veriler kişi
                bazında kayıt altına alınmaz ve sunucularımıza kişiyle ilişkilendirilebilir biçimde iletilmez.
              </li>
            </ul>
            <p>
              Uygulamanın temel işlevi olan haber içeriklerinin görüntülenmesi, herhangi bir kişisel veri paylaşımı
              gerektirmeksizin, anonim biçimde gerçekleştirilebilir.
            </p>
          </PolicySection>

          <PolicySection title="2. Cihazda Yerel Olarak Saklanan Bilgiler">
            <p>
              Uygulama, yalnızca kullanıcı deneyimini iyileştirmek amacıyla sınırlı bazı tercih bilgilerini cihazınızın
              yerel depolama alanında tutabilir. Bu bilgiler şunları içerebilir:
            </p>
            <ul>
              <li>Seçtiğiniz haber kategorisi tercihleri (ör. gündem, ekonomi, spor, teknoloji),</li>
              <li>
                Uygulama içi görünüm tercihleri (ör. karanlık/aydınlık tema, yazı boyutu gibi arayüz ayarları mevcutsa),
              </li>
              <li>Bildirim tercihlerinize ilişkin uygulama içi ayarların durumu.</li>
            </ul>
            <p>Bu verilere ilişkin önemli hususlar:</p>
            <ol>
              <li>
                Bu veriler <strong>yalnızca sizin cihazınızda</strong> bulunur ve kişisel profil oluşturma amacıyla
                sunucularımıza gönderilmez.
              </li>
              <li>
                Bu veriler kimliğinizle ilişkilendirilmez; hangi cihazın hangi tercihi yaptığı bizim tarafımızdan
                bilinmez.
              </li>
              <li>Uygulamayı cihazınızdan kaldırdığınızda bu veriler işletim sistemi tarafından otomatik olarak silinir.</li>
              <li>Bu verileri dilediğiniz zaman uygulama içi ayarlardan değiştirebilir veya sıfırlayabilirsiniz.</li>
            </ol>
          </PolicySection>

          <PolicySection title="3. Anlık Bildirimler ve Bildirim Altyapısı">
            <p>
              Haber Açık, önemli gelişmeleri size zamanında ulaştırabilmek amacıyla anlık bildirim özelliği sunar. Bu
              özellik tamamen isteğe bağlıdır ve yalnızca siz açıkça izin verdiğinizde etkinleşir.
            </p>
            <h3>3.1 Bildirim İzni</h3>
            <p>
              Uygulama ilk kez açıldığında veya bildirim özelliğini etkinleştirmek istediğinizde, işletim sisteminiz (iOS
              veya Android) size bir izin sorusu yöneltir. Bu izni vermezseniz size hiçbir bildirim gönderilmez ve
              uygulamanın diğer tüm işlevleri eksiksiz biçimde kullanılabilir olmaya devam eder. Bildirim izni,
              uygulamanın kullanımı için bir ön koşul değildir.
            </p>
            <h3>3.2 Bildirim Altyapısı ve Teknik Tanımlayıcılar</h3>
            <p>
              Anlık bildirimlerin cihazınıza iletilebilmesi için sektör standardı bildirim altyapıları kullanılır: Android
              cihazlarda Google&apos;ın Firebase Cloud Messaging (FCM) hizmeti, iOS cihazlarda ise Apple Push Notification
              service (APNs) üzerinden çalışan altyapı. Bu sistemlerin doğası gereği:
            </p>
            <ul>
              <li>
                Bildirim izni verdiğinizde, işletim sistemi ve bildirim altyapı sağlayıcısı tarafından cihazınıza özgü,
                rastgele üretilmiş bir <strong>cihaz token&apos;ı</strong> oluşturulur.
              </li>
              <li>
                Bu token, bildirimlerin doğru cihaza yönlendirilebilmesi için gereklidir ve bildirim gönderim sistemimizde
                tutulur.
              </li>
              <li>
                Cihaz token&apos;ı; adınızı, e-posta adresinizi, telefon numaranızı veya kimliğinizi ortaya koyan başka
                herhangi bir bilgiyi <strong>içermez</strong>. Tek başına sizi gerçek dünyada tanımlamaya elverişli değildir.
              </li>
              <li>
                Token, yalnızca bildirim iletimi amacıyla kullanılır; pazarlama profillemesi, davranışsal hedefleme veya
                üçüncü taraflarla paylaşım amacıyla kullanılmaz.
              </li>
              <li>
                Bildirim iznini geri çektiğinizde veya uygulamayı kaldırdığınızda token geçersiz hâle gelir ve
                sistemlerimizden makul süre içinde temizlenir.
              </li>
            </ul>
            <p>
              Google Firebase hizmetlerinin veri işleme uygulamaları hakkında ayrıntılı bilgi için Google&apos;ın gizlilik
              politikasını (
              <a href="https://policies.google.com/privacy" className="font-medium text-blue-700 underline underline-offset-2">
                https://policies.google.com/privacy
              </a>
              ) ve Firebase gizlilik dokümantasyonunu (
              <a
                href="https://firebase.google.com/support/privacy"
                className="font-medium text-blue-700 underline underline-offset-2"
              >
                https://firebase.google.com/support/privacy
              </a>
              ) inceleyebilirsiniz. Apple&apos;ın bildirim hizmetlerine ilişkin bilgiye ise Apple&apos;ın gizlilik politikasından (
              <a href="https://www.apple.com/legal/privacy/" className="font-medium text-blue-700 underline underline-offset-2">
                https://www.apple.com/legal/privacy/
              </a>
              ) ulaşabilirsiniz.
            </p>
            <h3>3.3 Bildirim Tercihlerinin Yönetimi</h3>
            <p>Bildirim tercihlerinizi dilediğiniz zaman iki şekilde yönetebilirsiniz:</p>
            <ul>
              <li>
                <strong>İşletim sistemi ayarları üzerinden:</strong> iOS&apos;ta Ayarlar → Bildirimler → Haber Açık,
                Android&apos;de Ayarlar → Uygulamalar → Haber Açık → Bildirimler yolunu izleyerek bildirimleri tamamen
                kapatabilirsiniz.
              </li>
              <li>
                <strong>Uygulama içi ayarlar üzerinden:</strong> Uygulama içindeki bildirim ayarları mevcutsa, buradan hangi
                kategorilerde bildirim almak istediğinizi belirleyebilirsiniz.
              </li>
            </ul>
            <p>Bildirimleri kapattığınızda bu tercih derhâl geçerli olur ve size bildirim gönderimi durdurulur.</p>
          </PolicySection>

          <PolicySection title="4. Analitik, Reklam ve Takip">
            <p>
              Haber Açık, kullanıcı davranışlarını kişisel düzeyde izleyen bir takip altyapısı kullanmamayı temel ilke
              edinmiştir. Bu kapsamda:
            </p>
            <ul>
              <li>Uygulama içinde kişisel profil çıkarmaya yönelik reklam kimliği (IDFA, GAID) toplanmaz ve reklam ağlarına aktarılmaz.</li>
              <li>Kullanıcıyı bireysel olarak hedefleyen pazarlama amaçlı veri işleme yapılmaz.</li>
              <li>
                Üçüncü taraf reklam SDK&apos;ları, davranışsal takip pikselleri veya çapraz uygulama izleme mekanizmaları
                uygulamaya entegre edilmemiştir.
              </li>
              <li>Sosyal medya takip eklentileri kullanılmaz.</li>
            </ul>
            <p>
              Uygulamanın kararlılığını ve performansını korumak amacıyla, ileride toplu (aggregate) ve anonim nitelikte
              teknik ölçümler (ör. çökme raporları, genel kullanım istatistikleri) devreye alınacak olursa, bu ölçümler
              kişiyi tanımlamaya elverişli veri içermeyecek ve bu Politika güncellenerek durum açıkça duyurulacaktır.
            </p>
          </PolicySection>

          <PolicySection title="5. Haber İçerikleri, Üçüncü Taraf Siteler ve Bağlantılar">
            <p>
              Haber Açık, farklı yayın kaynaklarından haber içeriklerini derleyen bir haber toplayıcı (news aggregator)
              uygulamasıdır. Bu kapsamda:
            </p>
            <h3>5.1 İçerik Kaynakları</h3>
            <p>
              Uygulamada görüntülenen haber başlıkları, özetler ve görseller, ilgili yayın kuruluşlarının kamuya açık
              yayınlarından derlenir. İçeriklerin telif hakları ilgili yayın kuruluşlarına aittir ve kaynak bilgisi
              uygulamada belirtilir.
            </p>
            <h3>5.2 Dış Bağlantılar</h3>
            <p>Bir haberin tamamını okumak için bağlantıya tıkladığınızda, ilgili yayın kuruluşunun kendi internet sitesine yönlendirilirsiniz. Bu andan itibaren:</p>
            <ul>
              <li>Ziyaret ettiğiniz sitenin <strong>kendi gizlilik politikası, çerez politikası ve kullanım koşulları</strong> geçerlidir.</li>
              <li>İlgili site, kendi çerezlerini yerleştirebilir, analitik araçlar kullanabilir veya reklam gösterebilir.</li>
              <li>
                Haber Açık, üçüncü taraf sitelerin veri toplama, işleme ve paylaşma uygulamaları üzerinde hiçbir kontrole
                sahip değildir ve bu uygulamalardan sorumlu tutulamaz.
              </li>
            </ul>
            <p>Ziyaret ettiğiniz her sitenin gizlilik politikasını ayrıca incelemenizi öneririz.</p>
          </PolicySection>

          <PolicySection title="6. Verilerin Saklanma Süresi">
            <p>
              Sunucu tarafında kişisel veri tutulmadığı için merkezi bir kişisel veri saklama ve imha süreci
              uygulanmasına gerek bulunmamaktadır. Bununla birlikte saklama süreleri şu şekilde özetlenebilir:
            </p>
            <ul>
              <li>
                <strong>Yerel tercih verileri:</strong> Uygulama cihazınızda yüklü kaldığı sürece cihazınızda tutulur;
                uygulamanın kaldırılmasıyla birlikte silinir.
              </li>
              <li>
                <strong>Bildirim token&apos;ları:</strong> Bildirim izni geçerli olduğu sürece bildirim sisteminde tutulur;
                izin geri çekildiğinde veya uygulama kaldırıldığında geçersizleşir ve makul süre içinde sistemden
                temizlenir.
              </li>
              <li>
                <strong>İletişim kayıtları:</strong> Bize e-posta yoluyla ulaşmanız hâlinde, yazışma içeriği yalnızca
                talebinizin sonuçlandırılması amacıyla ve makul bir süre boyunca e-posta sistemimizde tutulur.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="7. Çocukların Gizliliği">
            <p>
              Haber Açık genel kitleye yönelik bir haber uygulamasıdır ve 13 yaşın (veya ilgili mevzuatın öngördüğü
              asgari yaşın) altındaki çocuklardan bilerek kişisel veri toplamaz. Uygulama zaten kişisel veri
              toplamadığından, çocuk kullanıcılara ilişkin veri işleme riski asgari düzeydedir. Bununla birlikte:
            </p>
            <ul>
              <li>
                Ebeveynler ve yasal temsilciler, çocuklarının uygulama kullanımını cihazın ebeveyn denetimi ayarları
                (iOS Ekran Süresi, Google Family Link vb.) üzerinden yönetebilir.
              </li>
              <li>
                Bir çocuğa ait kişisel verinin herhangi bir şekilde tarafımıza iletildiğini düşünüyorsanız, aşağıdaki
                iletişim adresinden bize ulaşmanız hâlinde ilgili veri derhâl silinecektir.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="8. Veri Güvenliği">
            <p>
              Kişisel veri toplamama yaklaşımımız, gizlilik risklerini yapısal olarak en aza indirmeye yöneliktir;
              toplanmayan veri, sızdırılamaz. Bununla birlikte, hiçbir dijital sistemin yüzde yüz risksiz olmadığının
              bilincindeyiz. Bu nedenle:
            </p>
            <ul>
              <li>Uygulama ile sunucular arasındaki tüm iletişim, güncel şifreleme protokolleri (TLS/HTTPS) üzerinden gerçekleştirilir.</li>
              <li>Sunucu altyapısı düzenli olarak güvenlik güncellemeleri açısından gözden geçirilir.</li>
              <li>
                Bildirim token&apos;ları gibi teknik tanımlayıcılara erişim, yalnızca bildirim gönderimi için gerekli
                sistemlerle sınırlı tutulur.
              </li>
              <li>Uygulamanın yeni sürümleri yayımlanmadan önce güvenlik ve gizlilik etkileri değerlendirilir.</li>
              <li>Uygun teknik ve organizasyonel önlemler (erişim kontrolü, asgari yetki ilkesi) sürdürülür.</li>
            </ul>
          </PolicySection>

          <PolicySection title="9. Haklarınız ve Kontrol Seçenekleri">
            <p>
              KVKK&apos;nın 11. maddesi ve ilgili olduğu ölçüde GDPR kapsamında, veri sahipleri çeşitli haklara sahiptir.
              Haber Açık kişisel veri toplamadığından bu hakların çoğu fiilen uygulanacak bir veri bulunmaması nedeniyle
              kendiliğinden karşılanmış olur; yine de sahip olduğunuz kontrol seçenekleri şunlardır:
            </p>
            <ul>
              <li>
                <strong>Kaldırma hakkı:</strong> Uygulamayı dilediğiniz zaman cihazınızdan kaldırabilirsiniz; bu durumda
                cihazda tutulan tüm yerel tercihler silinir.
              </li>
              <li>
                <strong>Bildirim iznini geri çekme:</strong> Bildirim izinlerini işletim sistemi ayarlarından dilediğiniz an
                geri çekebilirsiniz; bu, bildirim token&apos;ınızın geçersizleşmesi sonucunu doğurur.
              </li>
              <li>
                <strong>Tercihleri değiştirme:</strong> Kategori ve görünüm tercihlerinizi uygulama içinden dilediğiniz
                zaman güncelleyebilir veya sıfırlayabilirsiniz.
              </li>
              <li>
                <strong>Bilgi talep etme:</strong> Veri uygulamalarımız hakkında sorularınız için aşağıdaki iletişim
                adresinden bize ulaşabilir, KVKK kapsamındaki başvurularınızı iletebilirsiniz. Başvurularınız mevzuatta
                öngörülen süreler içinde yanıtlanır.
              </li>
              <li>
                <strong>Şikâyet hakkı:</strong> Veri işleme uygulamalarımızla ilgili bir ihlal olduğunu düşünüyorsanız,
                Kişisel Verileri Koruma Kurumu&apos;na (KVKK Kurumu) başvurma hakkınız saklıdır.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="10. Uluslararası Veri Aktarımı">
            <p>
              Uygulama kişisel veri toplamadığından, kişisel verilerin yurt dışına aktarımı söz konusu değildir. Bildirim
              altyapısı kapsamında oluşturulan teknik cihaz token&apos;ları, Google (FCM) ve Apple (APNs) hizmetlerinin küresel
              altyapıları üzerinden işlenebilir; bu hizmet sağlayıcılar kendi gizlilik politikaları ve uluslararası veri
              koruma standartları çerçevesinde faaliyet gösterir.
            </p>
          </PolicySection>

          <PolicySection title="11. Politika Değişiklikleri">
            <p>
              Bu Gizlilik Politikası; mevzuat değişiklikleri, uygulamaya eklenen yeni özellikler veya veri işleme
              pratiklerindeki güncellemeler nedeniyle zaman zaman revize edilebilir. Değişikliklere ilişkin ilkelerimiz
              şunlardır:
            </p>
            <ul>
              <li>Güncel metin her zaman bu sayfada, yürürlük tarihi ile birlikte yayımlanır.</li>
              <li>
                Veri işleme pratiklerini esaslı biçimde değiştiren güncellemeler (ör. yeni bir veri türünün işlenmeye
                başlanması), uygulama içi duyuru veya benzeri makul bir yöntemle ayrıca bildirilir.
              </li>
              <li>
                Politikayı düzenli aralıklarla gözden geçirmenizi öneririz. Değişiklik sonrasında uygulamayı kullanmaya
                devam etmeniz, güncel Politikayı kabul ettiğiniz anlamına gelir.
              </li>
            </ul>
          </PolicySection>

          <PolicySection title="12. Yürürlük ve Uygulanacak Hukuk">
            <p>
              Bu Politika, başlıkta belirtilen yürürlük tarihinden itibaren geçerlidir. Politikanın yorumlanmasında ve
              uygulanmasında Türkiye Cumhuriyeti hukuku esas alınır.
            </p>
          </PolicySection>

          <PolicySection title="13. İletişim">
            <p>
              Bu Gizlilik Politikası, veri uygulamalarımız veya uygulamayla ilgili her türlü soru, görüş ve talebiniz için
              bizimle iletişime geçebilirsiniz:
            </p>
            <p>
              <strong>E-posta:</strong>{" "}
              <a href="mailto:canrollas@gmail.com" className="font-medium text-blue-700 underline underline-offset-2">
                canrollas@gmail.com
              </a>
            </p>
            <p>Başvurularınız en kısa sürede ve her hâlükârda ilgili mevzuatta öngörülen yasal süreler içinde yanıtlanacaktır.</p>
          </PolicySection>

          <p className="border-t border-slate-200 pt-4 text-sm italic text-slate-600">
            Bu belge en son 29 Temmuz 2026 tarihinde güncellenmiştir.
          </p>
        </section>
      </div>
    </main>
  );
}

function PolicySection({ title, children }) {
  return (
    <section className="space-y-3">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="space-y-3 leading-relaxed text-slate-700 [&_h3]:pt-2 [&_h3]:text-lg [&_h3]:font-semibold [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </section>
  );
}
